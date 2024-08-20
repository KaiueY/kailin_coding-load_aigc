// useIntersectionObserver.ts
const options = {
    root: null, // null 默认为视窗
    rootMargin: '0px', // 调整root的边界
    threshold: 0.1 // 目标元素10%的部分进入视窗时触发回调
};

let observer: IntersectionObserver | null = null;

export function useIntersectionObserver() {
    if (!observer) {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { // 判断是否交叉
                    loadImage(entry.target as HTMLImageElement);
                    observer?.unobserve(entry.target); // 加载后取消观察
                }
            });
        }, options);
    }

    return {
        observer,
    };
}

function loadImage(targetImage: HTMLImageElement) {
    targetImage.src = targetImage.dataset?.src || "";
}
