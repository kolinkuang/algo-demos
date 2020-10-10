class CircularQueue {

    constructor(capacity) {
        this.items = new Array(capacity);
        this.n = capacity;
        this.head = this.tail = 0;
    }

    enqueue(item) {
        if ((this.tail + 1) % this.n === this.head) {
            return false;
        }
        this.items[this.tail] = item;
        this.tail = (this.tail + 1) % this.n;
        return true;
    }

    dequeue() {
        if (this.head === this.tail) {
            return null;
        }
        const result = this.items[this.head];
        this.head = (this.head + 1) % this.n;
        return result;
    }

}