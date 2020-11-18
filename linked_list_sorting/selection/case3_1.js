const factory = require('../linkedListFactory');

// 交换值
function selection(head) {
    if (!head || !head.next) {
        return head;
    }

    for (let p = head.next; p; p = p.next) {
        for (let q = p.next; q; q = q.next) {
            if (p.val > q.val) {
                [p.val, q.val] = [q.val, p.val];
            }
        }
    }

    return head;
}

// factory.toArray(selection(factory.build([3, 5, 4, 1, 2, 6])));
// factory.toArray(selection(factory.build([1, 2, 3, 4, 5, 6])));

// console.log(factory.toArray(selection(factory.build([3, 5, 4, 1, 2, 6]))));
console.log(factory.toArray(selection(factory.build([4, 5, 6, 1, 2, 3]))));
// console.log(factory.toArray(selection(factory.build([6, 5, 4, 3, 2, 1]))));

// 最好时间复杂度：
// O(T(n)) =

// 最差时间复杂度：
// O(T(n)) =

// 空间复杂度：
// O(S(n)) = O(1)