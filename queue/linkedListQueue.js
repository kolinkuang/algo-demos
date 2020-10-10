class LinkedListQueue {

    constructor() {
        this.head = this.tail = new ListNode();
        this.n = 0;
    }

    enqueue(item) {
        this.tail = this.tail.next = item;
        this.n++;
    }

    dequeue() {
        if (this.head === this.tail) {
            return null;
        }
        let result;
        [result, this.head] = [this.head, this.head.next];
        this.n--;
        return result;
    }

}

class ListNode {

    constructor(val, next) {
        this.val = val;
        this.next = next;
    }

}