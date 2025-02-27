// https://leetcode.cn/problems/swap-nodes-in-pairs/description/
var swapPairs = function (head) {
    let ret = new ListNode(0, head), temp = ret;
    while (temp.next && temp.next.next) {
      let cur = temp.next.next, pre = temp.next;
      pre.next = cur.next;
      cur.next = pre;
      temp.next = cur;
      temp = pre;
    }
    return ret.next;
  };



  // 递归版本
var swapPairs = function (head) {
    if (head == null || head.next == null) {
      return head;
    }
  
    let after = head.next;
    head.next = swapPairs(after.next);
    after.next = head;
  
    return after;
  };