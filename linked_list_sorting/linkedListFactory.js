class LinkedListFactory {

    /** array to head */
    static build(array) {
        let head, current;
        current = head = new ListNode();

        for (let val of array) {
            current = current.next = new ListNode(val);
        }

        return head;
    }

    /** head to array */
    static toArray(head) {
        const array = [];

        let current = head.next;
        while (current) {
            array.push(current.val);
            current = current.next;
        }

        return array;
    }

}

class ListNode {

    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

module.exports = LinkedListFactory;