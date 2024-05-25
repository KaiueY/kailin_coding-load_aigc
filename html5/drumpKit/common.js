const keys= document.querySelectorAll('.key')

for(let i=0;i<keys.length;i++){
    let key=keys[i];
}

const playSound=()=>{
    const keyCode = event.keyCode
    const ele = document.querySelector(`.key[data-key="${keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (ele) {
        ele.classList.add('playing');
        setTimeout(()=>{
            ele.classList.remove('playing')
        },800)
    }
    if (audio) {
        audio.currentTime = 0; // 重置音频播放位置
        audio.play();
    }

}
window.addEventListener('keyup',playSound)