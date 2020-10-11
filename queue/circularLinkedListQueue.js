class CircularLinkedListQueue {

    constructor(capacity) {
        this.n = capacity;
        this.head = this.tail = this._buildEmptyLinkedList(capacity);
    }

    _buildEmptyLinkedList(num = 1) {
        const sentinel = new ListNode();
        let current = sentinel;

        for (let i = 0; i < num; i++) {
            let node = new ListNode();
            current = current.next = node;
        }

        current.next = sentinel;
        return sentinel;
    }

    enqueue(itemVal) {
        if (this.tail.next === this.head) {
            return false;
        }
        this.tail.val = itemVal;
        this.tail = this.tail.next;
        return true;
    }

    dequeue() {
        if (this.head === this.tail) {
            return null;
        }
        let result;
        [result, this.head] = [this.head.val, this.head.next];
        return result;
    }

}

class ListNode {

    constructor(val, next) {
        this.val = val;
        this.next = next;
    }

}