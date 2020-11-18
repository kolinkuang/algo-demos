const factory = require('../linkedListFactory');

// 交换节点
function selection(head) {
    if (!head || !head.next) {
        return head;
    }

    let smallPre = null;
    let small = null;
    let tail = null;

    for (let cur = head; cur;) {
        small = cur;
        smallPre = getSmallestPreNode(cur);
        if (smallPre) {
            small = smallPre.next;
            smallPre.next = small.next;
        }
        cur = cur === small ? cur.next : cur;
        if (!tail) {
            head = small;
        } else {
            tail.next = small;
        }
        tail = small;
    }

    return head;

    function getSmallestPreNode(head) {
        let smallPre = null;
        let small = head;
        let pre = head;
        let cur = head.next;

        while (cur) {
            if (cur.val < small.val) {
                smallPre = pre;
                small = cur;
            }
            pre = cur;
            cur = cur.next;
        }
        return smallPre;
    }
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