# 项目
## 1、移动端的适配
    lib-flexible
## 2、清除标签自带边距等
        reset.css 
        https://meyerweb.com/eric/tools/css/reset/
## 3、引入vant UI库
        import { createApp } from 'vue';
        // 1. 引入你需要的组件
        import { Button } from 'vant';
        // 2. 引入组件样式
        import 'vant/lib/index.css';

        const app = createApp();

        // 3. 注册你需要的组件
        app.use(Button);

