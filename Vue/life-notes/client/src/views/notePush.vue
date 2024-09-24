<template>
  <div class="note-publish">
    <div class="editor">
      <QuillEditor theme="snow" v-model:content="state.content" placeholder="请输入笔记内容" contentType="html" />
    </div>

    <div class="note-wrap">
      <div class="note-cell">
        <van-field v-model="state.title" label="标题" placeholder="请输入标题" />
      </div>

      <div class="note-cell">
        <van-field label="图片上传">
          <template #input>
            <van-uploader :after-read="handleFileRead" max-count="2" />
          </template>
        </van-field>
      </div>

      <div class="note-cell">
        <div class="sort" @click="showPicker = true">
          <span>分类</span>
          <span>{{ state.note_type }} <van-icon name="arrow" /></span>
        </div>

        <van-popup v-model:show="showPicker" round position="bottom">
          <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>
      </div>
    </div>

    <div class="btn">
      <van-button
        color="linear-gradient(to right, #4672b3, #ee5a24)"
        :loading="isPublishing"
        @click="publish"
        block
      >
        发布
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive, ref } from 'vue';
import axios from '../api/index';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

const CHUNK_SIZE = 1024 * 10; // 每片 1MB
const router = useRouter();
const showPicker = ref(false);
const columns = [
  { text: '美食', value: '美食' },
  { text: '旅行', value: '旅行' },
  { text: '恋爱', value: '恋爱' },
  { text: '学习', value: '学习' },
  { text: '吵架', value: '吵架' },
];
const state = reactive({
  content: '',
  title: '',
  note_type: '美食',
  uploadProgress: 0,
  files: [], // 用于存储选择的文件
});
const isPublishing = ref(false);

const handleFileRead = (files) => {
  state.files = files;
};

const afterRead = (file) => {
  const len = file.size;
  const filename = file.name;
  const chunkList = [];
  let cur = 0;
  while (cur < len) {
    chunkList.push({ file: file.slice(cur, cur + CHUNK_SIZE) });
    cur += CHUNK_SIZE;
  }

  const chunks = chunkList.map(({ file }, index) => {
    return {
      file,
      size: file.size,
      filename: filename,
      index,
    };
  });

  const formChunks = chunks.map(({ file, filename, index }) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('chunkIndex', index);
    formData.append('fileName', filename);
    return { formData, index };
  });

  const requestList = formChunks.map(({ formData, index }) => {
    return axios.post('/upload-chunk', formData, {
      onUploadProgress: (progressEvent) => {
        state.uploadProgress = Math.round((index + 1) / formChunks.length * 100);
      },
    });
  });

  return Promise.all(requestList)
    .then(() => {
      return axios.post('/merge-chunks', {
        fileName: filename,
      });
    })
    .then(() => {
      console.log('文件上传成功');
      state.uploadProgress = 100;
    })
    .catch((err) => {
      console.error('文件上传失败', err);
      throw err;
    });
};

const onConfirm = ({ selectedValues }) => {
  state.note_type = selectedValues[0];
  showPicker.value = false;
};

// 发布
const publish = async () => {
  if (!state.content || !state.title) {
    showToast('还没有输入完全哦~');
    return;
  }

  isPublishing.value = true;

  try {
    if (state.files.length > 0) {
      for (const file of state.files) {
        await afterRead(file.file);
      }
    }

    const res = await axios.post('/note-publish', {
      title: state.title,
      note_content: state.content,
      note_type: state.note_type,
    });

    if (res.status === 200) {
      showToast('发布成功');
      router.push('/noteClass');
    } else {
      showToast('发布失败，请重试');
    }
  } catch (error) {
    console.error('发布失败', error);
    showToast('发布失败，请重试');
  } finally {
    isPublishing.value = false;
  }
};
</script>

<style lang="less" scoped>
.note-publish {
  min-height: 100vh;

  :deep(.ql-container) {
    height: 200px;
  }

  .note-cell {
    border-bottom: 1px solid #d1d5db;

    .sort {
      display: flex;
      justify-content: space-between;
      line-height: 3;
      padding: 3px 16px;
      color: #323233;
    }
  }

  .btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
  }
}
</style>