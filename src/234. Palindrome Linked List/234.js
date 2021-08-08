"use strict";
/**
 * Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 */
// Definition for singly-linked list.
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function isPalindromeLinkedList(head) {
    const arraySupport = [];
    let current = head;
    while (current) {
        arraySupport.push(current.val);
        current = current.next;
    }
    for (let i = 0; i < arraySupport.length; i++) {
        const start = arraySupport[i];
        const end = arraySupport[arraySupport.length - i - 1];
        if (start !== end)
            return false;
    }
    return true;
}
;
const list1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
const list2 = new ListNode(1, new ListNode(2));
console.log(isPalindromeLinkedList(list1));
console.log(isPalindromeLinkedList(list2));
