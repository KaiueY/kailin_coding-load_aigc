给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 
/**
 * 在 haystack 字符串中查找 needle 字符串的第一个匹配项。
 *
 * @param {string} haystack - 要搜索的字符串。
 * @param {string} needle - 要搜索的子字符串。
 * @returns {number} needle 在 haystack 中第一次出现的索引，如果未找到则返回 -1。
 */

function strStr(haystack, needle) {
    if (needle === "") return 0;
    const len = needle.length;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + len) === needle) {
            return i;
        }
    }
    return -1;
}