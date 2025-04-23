/**
 * @description 合并k个排序列表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
}

function solution(lists) {
    if (!lists.length) {
        return null
    }
    const arr = []
    lists.forEach((list) => {
        while (list) {
            arr.push(list.val)
            list = list.next
        }
    })
    arr.sort((a, b) => a - b)
    const head = new ListNode()
    let cur = head
    arr.forEach((val) => {
        cur.next = new ListNode(val)
        cur = cur.next
    })
    return head.next
}