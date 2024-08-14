const options = {
    root: null, // null默认为视窗 只能填父级
    rootMargin: '0px', // 在计算交叉度时，扩大或缩小root的边界
    threshold: 0.1 // 当目标元素10%的部分进入视窗时触发回调
};
// export function useIntersectionObserver;
const observer = createIntersectionObserver();
export function useIntersectionObserver() {
    return {
        observer,
    };
}
function createIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {//判断是否交叉
                loadImage(entry.target as HTMLImageElement);
                observer.unobserve(entry.target); // 加载后取消观察
            }
        });
    }, options);
    return observer;
}
function loadImage(targetImage: HTMLImageElement) {
    targetImage.src = targetImage.dataset?.src || "";
}