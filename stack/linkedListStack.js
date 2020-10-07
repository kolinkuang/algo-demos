class LinkedListStack {

    // single-linked list

    constructor() {
        this.head = new ListNode();
        this.count = 0;
        this.last = this.head;
    }

    push(val) {
        // 时间复杂度 O(1)
        // 空间复杂度 O(1)
        this.last = this.last.next = new ListNode(val);
        this.count++;
    }

    pop() {
        // 时间复杂度 O(n)
        // 空间复杂度 O(1)
        this.count--;
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            current = current.next;
        }
        let result;
        [result, this.last] = [this.last, current];
        return result;
    }

    peek() {
        return this.last;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return !this.count;
    }

}

class ListNode {

    constructor(val, next) {
        this.val = val;
        this.next = next;
    }

}