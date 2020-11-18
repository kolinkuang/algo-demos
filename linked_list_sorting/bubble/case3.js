const factory = require('../linkedListFactory');

// 交换节点
function bubble(head) {
    let p, q, tail = null;

    while (head.next.next !== tail) {
        let isSwapped = false;
        p = head;
        q = head.next;
        while (q.next !== tail) {
            console.log(factory.toArray(head), q.val, q.next.val, tail && tail.val);
            if (q.val > q.next.val) {
                [p.next, q.next, p.next.next] = [q.next, q.next.next, q];   // [将来指向]=[现在指向]
                isSwapped = true;
            }
            [p, q] = [p.next, q.next];
        }
        if (!isSwapped) {
            break;
        }
        tail = q;
    }

    return head;
}

factory.toArray(bubble(factory.build([3, 5, 4, 1, 2, 6])));
// factory.toArray(bubble(factory.build([1, 2, 3, 4, 5, 6])));

// console.log(factory.toArray(bubble(factory.build([3, 5, 4, 1, 2, 6]))));
// console.log(factory.toArray(bubble(factory.build([4, 5, 6, 1, 2, 3]))));
// console.log(factory.toArray(bubble(factory.build([6, 5, 4, 3, 2, 1]))));

// 最好时间复杂度：
// O(T(n)) = O(n-1) = O(n)

// 最差时间复杂度：
// O(T(n)) = O(1+2+...+(n-1)) = O((n-1)*(1+n-1)/2) = O(n*(n-1)/2) = O(n^2)

// 空间复杂度：
// O(S(n)) = O(1)