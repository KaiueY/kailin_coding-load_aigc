function solution(n, str) {
    function isSorted(s) {
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] > s[i + 1]) {
                return false;
            }
        }
        return true;
    }
    if (isSorted(str)) return true;

    // 记录所有不符合升序的位置
    let diff = [];
    for (let i = 0; i < n - 1; i++) {
        if (str[i] > str[i + 1]) {
            diff.push(i);
        }
    }

    if (diff.length === 0) return true; // 已经有序
    if (diff.length > 2) return false;  // 超过两处逆序，无法一次交换解决

    // 尝试交换
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let arr = str.split('');
            [arr[i], arr[j]] = [arr[j], arr[i]];
            if (isSorted(arr.join(''))) {
                return true;
            }
        }
    }
    return false;
}