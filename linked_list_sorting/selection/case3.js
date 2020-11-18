const factory = require('../linkedListFactory');

// 交换值
function selection(head) {
    if (!head || !head.next) {
        return head;
    }

    let p, q;

    for (p = head.next; p; p = p.next) {
        for (q = p.next; q; q = q.next) {
            if (p.val > q.val) {
                [p.val, q.val] = [q.val, p.val];
            }
            console.log(factory.toArray(head), p.val, q.val);
        }
    }

    return head;
}

// factory.toArray(selection(factory.build([3, 5, 4, 1, 2, 6])));
// factory.toArray(selection(factory.build([1, 2, 3, 4, 5, 6])));

// console.log(factory.toArray(selection(factory.build([3, 5, 4, 1, 2, 6]))));
console.log(factory.toArray(selection(factory.build([6, 5, 4, 3, 2, 1]))));
// console.log(factory.toArray(selection(factory.build([4, 5, 6, 1, 2, 3]))));
// console.log(factory.toArray(selection(factory.build([1, 2, 3, 4, 5, 6]))));

// 最好时间复杂度：
// O(T(n)) = O(n(1+n)/2+1) = O(n^2)

// 最差时间复杂度：
// O(T(n)) = O(n^2)

// 空间复杂度：
// O(S(n)) = O(1)