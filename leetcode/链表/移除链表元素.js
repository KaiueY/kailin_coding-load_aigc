// https://leetcode.cn/problems/remove-linked-list-elements/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const ret = new ListNode(0, head)
    let cur = ret
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next
            continue
        }
        cur = cur.next
    }
    return ret.next
};