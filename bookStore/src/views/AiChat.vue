<!-- <template>
    <div class="w-full h-screen bg-gradient-to-br from-blue-500 to-green-400 shadow-lg rounded-lg relative overflow-hidden">

    </div>
</template> -->

<template>
  <div
    class="chatPage container h-[calc(100vh-3rem)] bg-black relative bg-gradient-to-r from-pink-100 to-blue-100"
  >
    <!-- 顶部 -->
    <div
      class="chat-header h-[calc(10vh)] w-full flex items-center justify-between bg-transparent px-4"
    >
      <div class="talk">
        <van-icon name="chat-o text-black" size="1.5rem" />
      </div>
      <div class="title">
        <h2>AI 书友</h2>
      </div>
      <div class="avatar">
        <van-icon name="user-o text-black" size="1.5rem" />
      </div>
    </div>
    <!-- 聊天记录 -->
    <div class="chat_wrapper h-[calc(72vh)] overflow-y-auto mx-auto p-4 z-1">
      <div
        class="chat-item w-full"
        v-for="(item, index) in msgController"
        :key="index"
      >
        <component
          :is="item.type == 1 ? AIReply : UserQuery"
          :msg="item.content"
        />
      </div>
    </div>
    <!-- 底部提问栏 -->
    <div
      class="chat_footer h-16 w-full bottom-0 absolute z-999 flex items-center justify-center"
    >
      <div class="absolute -top-2 left-8" v-show="showSugget">
        <button
          @click="sugget"
          class="border-2 border-gray-300 rounded text-white-500 text-xs bg-white"
        >
          {{ suggetMsg }}
        </button>
      </div>
      <van-search
        v-model="searchField"
        placeholder="请输入搜索关键字"
        show-action
        shape="round"
        background="transparent"
        class="py-2 w-[90%]"
        v-if="!isGenerating"
      >
        <template #action>
          <div class="text-white">
            <van-icon
              name="guide-o"
              class="text-blue-500"
              size="1.25rem"
              @click="handleChat"
            />
          </div>
        </template>
      </van-search>
      <van-loading vertical v-else>
        <template #icon>
          <van-icon name="star-o" size="30" color="blue" />
        </template>
        努力翻书中...
      </van-loading>
    </div>
    <!-- 过场动画 遮蔽层-->
    <Transition v-show="showShadow" name="slide">
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div class="text-white text-3xl font-bold absolute top-56">
          Loading...
        </div>
        <div class="container">
          <div class="box">
            <div class="star"></div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import UserQuery from "@/components/ai/userSend.vue";
import AIReply from "@/components/ai/aiReplay.vue";
import { ref } from "vue";
import { sentMsg, getMsg, queryMsgCompleted } from "@/api/msg";
import { handleAIResult } from "@/api/handle";

type msgItem = {
  type: number; // 1:AI 2:用户
  content: String;
};

//输入框
const searchField = ref("");
// 控制过场动画 遮蔽层
const showShadow = ref(true);
// 是否正在生成
const isGenerating = ref(false);
const showSugget = ref(false);
//2.5s后关闭过场动画 遮蔽层
setTimeout(() => (showShadow.value = false), 1500);
// ai建议
const suggetions = ref<any>([]);
const suggetMsg = ref("");
// 数据存储数组
const msgController = ref<msgItem[]>([
  {
    type: 1,
    content:
      "你也喜欢文学吗，那看来我们很有缘分噢~",
  },
]);

const handleChat = async () => {
  // console.log("聊天发送");
  try {
    if (searchField.value.length > 0) {
      // 切换输入框状态
      isGenerating.value = true;
      showSugget.value = false;
      // 消息发送
      const msg = searchField.value;
      // 将发送的消息添加到数组中
      msgController.value.push({ type: 2, content: msg });
      searchField.value = "";
      msgController.value.push({ type: 1, content: "且等我思索一番……" });
      const res = await sentMsg(msg);
      const { conversation_id, id } = res.data;
      // console.log(res.data);

      // 查询消息是否完成
      queryMsgCompleted(conversation_id, id, 2000)
        .then(async () => {
          const msgList = await getMsg(conversation_id, id);
          console.log(msgList);
          //msgList.data 拿到数据进行分类
          const classifyMsg = handleAIResult(msgList.data as any);
          msgController.value.pop();
          msgController.value = msgController.value.concat(classifyMsg.answer);
          showSugget.value = true;
          suggetions.value = classifyMsg.follow_up;
          suggetMsg.value = suggetions.value[0];
        })
        .finally(() => {
          isGenerating.value = false;
        });
    }
  } catch (err) {
    setTimeout(() => {
      isGenerating.value = false;
      msgController.value.pop();
      msgController.value.push({
        type: 1,
        content: "🔗啊哦！网络不可用(｡•ˇ‸ˇ•｡)",
      });
      console.log(err);
    }, 1000);
  }
};

const sugget = () => {
  searchField.value = suggetMsg.value;
  suggetions.value.shift();
  suggetMsg.value = suggetions.value[0];
  if (suggetions.value.length == 0) {
    showSugget.value = false;
    return;
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.container .box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  height: 50px;

  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  animation: translate 1.5s ease-in-out infinite;
  transform: rotate(-35deg);
}


.container .box .star {
  width: 100px; /* 控制五角星的大小 */
  height: 100px;
  background-color: #03e9f4; /* 五角星的颜色 */
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: rotate 1.5s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}


@keyframes translate {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-50px);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
.slide-enter-active {
  opacity: 1;
}
.slide-leave-from {
  opacity: 1;
}
.slide-leave-active {
  transition: 0.3s;
}
.slide-leave-to {
  opacity: 0;
}
@keyframes Loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 定义进入和离开的状态 */
.loading-enter-active,
.loading-leave-active {
  transition: transform 0.5s ease;
  animation: Loading 2s linear infinite;
}
</style>