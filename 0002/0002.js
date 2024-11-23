/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    val;
    next;

    constructor(val, next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;

    let val1;
    let val2;
    let sum;
    let carry = 0;
    while (l1 || l2 || carry !== 0) {
        val1 = l1?.val !== undefined ? l1.val : 0;
        val2 = l2?.val !== undefined ? l2.val : 0;

        sum = val1 + val2 + carry;
        carry = sum >= 10 ? Math.floor(sum / 10) : 0;

        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummyHead.next;
}
