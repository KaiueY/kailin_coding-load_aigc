// RouteRecordRaw 由vue-router提供的
// 自定义类型约束 
// pinia 用到的状态都加类型约束 数据是核心
// type 声明类型
export type HomeTopBarItem = {
    // 类型声明
    title : string;
    icon : string;
}

export type RecentlyViewedItem = {
    title: string;
    cover: string;
    price: number;
}
