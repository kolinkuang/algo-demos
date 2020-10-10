class ArrayQueue {

    constructor(capacity) {
        this.items = new Array(capacity);
        this.n = capacity;
        this.head = 0;
        this.tail = 0;
    }

    /*
    enqueue(item) {
        if (this.tail === this.n) {
            return false;
        }
        this.items[this.tail] = item;
        this.tail++;
        return true;
    }
    */

    enqueue(item) {
        if (this.tail === this.n) {
            if (!this.head) {
                return false;
            }
            for (let i = this.head; i < this.tail; i++) {
                this.items[i - this.head] = this.items[i];
            }
            this.tail -= this.head;
            this.head = 0;
        }

        this.items[this.tail] = item;
        this.tail++;
        return true;
    }

    dequeue() {
        if (this.head === this.tail) {
            return null;
        }
        const result = this.items[this.head];
        this.head++;
        return result;
    }

}