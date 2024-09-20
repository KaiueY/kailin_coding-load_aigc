# react +ts

- 介绍项目ts 难点
  - api接口的ts 类型约束场景
    - 接口模块化 所有的接口都放在/api目录下，而不是散在组件中，方便管理
    比如baseURl的设置根据项目在开发或者生产阶段dev/production不一样
    - 每个模块都有独立的接口文件 适合大型项目
    - 每个接口的返回值都是Promise 泛型约束resolve后的类型，以getMembersCollection 获取github成员接口数据
    为例，接口函数他的返回值类型为Promise<MemberEntity[]>
    实例化promise 并返回，并且将MemberEntity[] 在泛型中传递
    axios.get 请求的response 类型为 AxiosResponse<any[]> axios的自带类型
    通过mapMemberListApiToModel 中专函数返回MemberEntity
