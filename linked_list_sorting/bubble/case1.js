const factory = require('../linkedListFactory');

function bubble(head) {
    // const n = list && list.length;
    // if (!n) {
    //     return [];
    // }
    //
    // for (let i = 0; i < n; i++) {
    //     let isSwapped = false;
    //     for (let j = 0; j < n - i - 1; j++) {
    //         if (list[j] > list[j + 1]) {
    //             [list[j], list[j + 1]] = [list[j + 1], list[j]];
    //             isSwapped = true;
    //         }
    //     }
    //     if (!isSwapped) {
    //         break;
    //     }
    // }

    let fast, slow;
    let isSwapped = false;

    if (!head.next) {
        return head;
    }

    // previous = fast = slow = head;
    // slow = slow.next;
    // fast = fast.next;
    slow = head;
    fast = head.next;

    while (slow) {
        while (fast) {
            if (fast.next && fast.val > fast.next.val) {
                slow.next = fast.next;
                fast.next = fast.next.next;
                slow.next.next = fast;
                fast = slow.next;

                // [previous.next, fast.next] = [fast.next, fast.next.next];
                // fast.next.next = fast;
                isSwapped = true;
            }
            console.log(fast.val, fast.next.val);
            // [fast, previous] = [fast.next, fast];
            // console.log(previous.val, fast.val, fast.next.val);
        }
        if (!isSwapped) {
            break;
        }
        slow = slow.next;
    }

    return head;
}

const head = factory.build([3, 5, 4, 1, 2, 6]);
const newHead = bubble(head.next);
console.log(factory.toArray(newHead));
