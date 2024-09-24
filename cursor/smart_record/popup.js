let isRecording = false;
let mediaRecorder;
let audioChunks = [];

document.getElementById('recordButton').addEventListener('click', () => {
  if (!isRecording) {
    startRecording();
  } else {
    stopRecording();
  }
});

document.getElementById('copyButton').addEventListener('click', () => {
  const text = document.getElementById('translatedText').value;
  navigator.clipboard.writeText(text).then(() => {
    alert('文本已复制');
  });
});

document.getElementById('retryButton').addEventListener('click', () => {
  resetUI();
});

function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
      };
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        audioChunks = [];
        sendAudioToWhisper(audioBlob);
      };
      updateUIForRecording();
    });
}

function stopRecording() {
  mediaRecorder.stop();
  updateUIForTranslating();
}

function sendAudioToWhisper(audioBlob) {
  const reader = new FileReader();
  reader.readAsDataURL(audioBlob);
  reader.onloadend = () => {
    const base64AudioMessage = reader.result.split(',')[1];
    chrome.storage.sync.get(['apiKey'], (result) => {
      const apiKey = result.apiKey;
      fetch('https://api.groq.com/whisper-large-vv3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ audio: base64AudioMessage })
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('translatedText').value = data.transcription;
        updateUIForResult();
      });
    });
  };
}

function updateUIForRecording() {
  isRecording = true;
  document.getElementById('status').innerText = '正在录音';
  document.getElementById('recordButton').innerText = '停止';
  document.getElementById('recordButton').style.backgroundColor = 'red';
}

function updateUIForTranslating() {
  isRecording = false;
  document.getElementById('status').innerText = '翻译中……';
  document.getElementById('recordButton').innerText = '翻译中';
  document.getElementById('recordButton').disabled = true;
}

function updateUIForResult() {
  document.getElementById('status').innerText = '翻译成功';
  document.getElementById('recordButton').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}

function resetUI() {
  document.getElementById('status').innerText = '点击下方按钮录音录制语音并翻译成英文';
  document.getElementById('recordButton').innerText = '录制';
  document.getElementById('recordButton').style.backgroundColor = 'green';
  document.getElementById('recordButton').disabled = false;
  document.getElementById('recordButton').style.display = 'block';
  document.getElementById('result').style.display = 'none';
  document.getElementById('translatedText').value = '';
}