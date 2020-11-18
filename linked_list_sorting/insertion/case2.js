const factory = require('../linkedListFactory');

// 交换节点
function insertion(head) {
    if (!head || !head.next) {
        return head;
    }

    let q, r;
    for (let p = head.next; p && p.next;) {
        if (p.val <= p.next.val) {
            // 若前后节点有序，继续前进
            p = p.next;
            continue;
        }

        // 若前后节点逆序
        // q 在 p 后面，两者均指向后一节点
        [q, p.next] = [p.next, p.next.next];

        // r 为 q 的前一节点
        for (r = head; r.next.val <= q.val; r = r.next) {
            console.log('====', factory.toArray(head), p.val, q.val, r.val);
        }

        // r 指向 q，两者均指向后一节点
        [r.next, q.next] = [q, r.next];

        // r -> q -> p
        console.log(factory.toArray(head), p.val, q.val, r.val);
    }

    return head;
}

// factory.toArray(insertion(factory.build([3, 5, 4, 1, 2, 6])));
// factory.toArray(insertion(factory.build([1, 2, 3, 4, 5, 6])));

// console.log(factory.toArray(insertion(factory.build([1, 2, 3, 4, 5, 6]))));
// console.log(factory.toArray(insertion(factory.build([3, 5, 4, 1, 2, 6]))));
// console.log(factory.toArray(insertion(factory.build([4, 5, 6, 1, 2, 3]))));
console.log(factory.toArray(insertion(factory.build([3, 5, 2, 1, 4, 6]))));
// console.log(factory.toArray(insertion(factory.build([6, 5, 4, 3, 2, 1]))));

// 最好时间复杂度：
// O(T(n)) = O(n)

// 最差时间复杂度：
// O(T(n)) = O(n^2)?

// 空间复杂度：
// O(S(n)) = O(1)