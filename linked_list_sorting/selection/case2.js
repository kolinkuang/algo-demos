const factory = require('../linkedListFactory');

// 交换节点
function selection(head) {
    if (!head || !head.next) {
        return head;
    }

    let p, q, tail = null, pmin = null, phead = null;

    while (head) {
        for (p = head, q = head; q.next; q = q.next) {
            if (q.next.val < p.val) {
                // 需要置换前后节点
                pmin = q;
                p = q.next;
            }
        }

        if (!phead) {
            tail = phead = p;
        } else {
            tail = tail.next = p;
        }

        if (p === head) {
            head = head.next;
        } else {
            pmin.next = p.next;
        }
    }

    if (phead) {
        tail.next = null;
    }

    return phead;
}

// factory.toArray(selection(factory.build([3, 5, 4, 1, 2, 6])));
// factory.toArray(selection(factory.build([1, 2, 3, 4, 5, 6])));

console.log(factory.toArray(selection(factory.build([3, 5, 4, 1, 2, 6]))));
// console.log(factory.toArray(selection(factory.build([4, 5, 6, 1, 2, 3]))));
// console.log(factory.toArray(selection(factory.build([6, 5, 4, 3, 2, 1]))));

// 最好时间复杂度：
// O(T(n)) =

// 最差时间复杂度：
// O(T(n)) =

// 空间复杂度：
// O(S(n)) = O(1)