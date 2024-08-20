// directives/lazy.ts
import type { DirectiveBinding } from 'vue';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        // 确保绑定的值是字符串类型，这里假设它是一个图片的URL
        if (typeof binding.value === 'string') {
            el.dataset.src = binding.value;
        }
        const { observer } = useIntersectionObserver();
        observer.observe(el);
    },
    unmounted(el: HTMLElement) {
        // 当元素卸载时，取消观察
        const { observer } = useIntersectionObserver();
        if (observer) {
            observer.unobserve(el);
        }
    }
};
