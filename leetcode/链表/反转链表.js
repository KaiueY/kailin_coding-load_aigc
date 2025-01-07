// https://leetcode.cn/problems/reverse-linked-list/

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// 将数组转换为链表的函数
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// 递归反转链表的函数
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head; 
    }

    let newHead = reverseList(head.next); 
    head.next.next = head; 
    head.next = null; 

    return newHead; 
};

// 打印链表的函数
function printLinkedList(head) {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// 测试
const inputArray = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(inputArray); // 转换为链表
const reversedList = reverseList(linkedList); // 反转链表
printLinkedList(reversedList); // 输出: [5, 4, 3, 2, 1]