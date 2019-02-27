/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (43.03%)
 * Total Accepted:    14K
 * Total Submissions: 32.3K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var cur = lists[0] || null, len = lists.length;
    for (var i = 1; i < len; i++) {
        if (!cur && !lists[i]) cur = null;
        else if (!(cur && lists[i])) cur = cur || lists[i];
        else cur = mergeTwoList(cur, lists[i]);
    }
    return cur;
};

var mergeTwoList = function (l1, l2) {
    var cur = l1.val < l2.val ? l1 : l2;
    var ret = cur;
    var other = cur == l1 ? l2 : l1;
    do {
        while (cur.next!=null && cur.next.val <= other.val) cur = cur.next;
        var oldOther = other;
        other = cur.next;
        cur.next = oldOther;
        cur = oldOther;
    } while (cur && other);
    return ret;
}

