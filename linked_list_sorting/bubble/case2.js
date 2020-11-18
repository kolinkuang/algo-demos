const factory = require('../linkedListFactory');

// 交换节点值
function bubble(head) {
    for (let p = head.next; !!p; p = p.next) {
        let isSwapped = false;
        for (let q = p.next; !!q; q = q.next) {
            console.log(factory.toArray(head), p.val, q.val);
            if (p.val > q.val) {
                [p.val, q.val] = [q.val, p.val];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }

    return head;
}

factory.toArray(bubble(factory.build([4, 5, 6, 1, 2, 3])));
// factory.toArray(bubble(factory.build([1, 2, 3, 4, 5, 6])));

// console.log(factory.toArray(bubble(factory.build([3, 5, 4, 1, 2, 6]))));
// console.log(factory.toArray(bubble(factory.build([4, 5, 6, 1, 2, 3]))));
// console.log(factory.toArray(bubble(factory.build([6, 5, 4, 3, 2, 1]))));

// 1	0
// 2	1
// 3	3
// 4	6
// 5    10
// 6    15

// 最好时间复杂度：
// O(T(n)) = O(n-1) = O(n)

// 最差时间复杂度：
// O(T(n)) = O(1+2+...+(n-1)) = O((n-1)*(1+n-1)/2) = O(n*(n-1)/2) = O(n^2)

// 空间复杂度：
// O(S(n)) = O(1)