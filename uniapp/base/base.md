# uniapp
## 配置
- 默认是sass
- 有一个巨大的插件市场 可以自行创建插件发布到市场
- 需要配置运行环境到exe/app
## 生命周期
### 应用生命周期
- 整个app加载、切换、收起等会执行的函数
### 页面生命周期
-  包含vue的生命周期 且外存的页面
### 组件生命周期
## 页面跳转

```javascript
// uni.navigateTo({}) 保存当前页面 跳去对应页面 可以用
// uni.navigateBack() 调回来
// uni.redirectTo() 关闭当前页面 跳去目标页
// uni.switch() 跳去配置了配置了tabBar的页面
// uni.reLaunch() 关闭所有页面 跳到任意页面
```
- 带参数的话在后面+  ?id=123
