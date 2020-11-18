const factory = require('../linkedListFactory');

// 交换节点
function insertion(head) {
    if (!head || !head.next) {
        return head;
    }

    for (let p = head.next; !!p; p = p.next) {
        if (p.next) {
            let value = p.next.val;

            for (let q = p; !!q; q = q.next) {
                if (q.val <= value) {
                    continue;
                }
                q.val = value;
                //TODO

            }
        }
    }

    return head;
}

factory.toArray(insertion(factory.build([3, 5, 4, 1, 2, 6])));
// factory.toArray(insertion(factory.build([1, 2, 3, 4, 5, 6])));

// console.log(factory.toArray(insertion(factory.build([3, 5, 4, 1, 2, 6]))));
// console.log(factory.toArray(insertion(factory.build([4, 5, 6, 1, 2, 3]))));
// console.log(factory.toArray(insertion(factory.build([6, 5, 4, 3, 2, 1]))));

// 最好时间复杂度：
// O(T(n)) =

// 最差时间复杂度：
// O(T(n)) =

// 空间复杂度：
// O(S(n)) = O(1)