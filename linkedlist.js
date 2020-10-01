function removeDups() {}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addNode(data) {
        let node = new Node(data);
        if (this.head == null) this.head = node;
        else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index > this.size) return false;
        let cur = this.head;
        let node = new Node(data);
        let i = 0;
        while (i < index - 1) {
            cur = cur.next;
            i++;
        }
        let temp = cur.next;
        cur.next = node;
        node.next = temp;
        this.size++;
    }

    removeFrom(index) {
        if (index > this.size) return false;
        let cur = this.head;
        let i = 0;
        while (i < index - 1) {
            cur = cur.next;
            i++;
        }
        let temp = cur.next.next;
        cur.next = temp;
        this.size--;
    }

    remove(data) {
        let cur = this.head;
        let prev = this.head;
        while (cur.next) {
            if (cur.data === data) {
                // rem
                prev.next = cur.next;
                this.size--;
                return true;
            }
            prev = cur;
            cur = cur.next;
        }
        return false;
    }

    removeKthFromEnd(k) {
        if (k > this.size) return false;

        let cur = this.head;
        let second = this.head;
        let i = 0;
        while (cur.next) {
            i++;
            cur = cur.next;
            if (i >= k) {
                second = second.next;
            }
        }
        console.log(second.data);
    }

    printList() {
        let res = [];
        let cur = this.head;
        while (cur.next) {
            res.push(cur.data);
            cur = cur.next;
        }
        res.push(cur.data);
        console.log(res);
    }
}

let ll = new LinkedList();
ll.addNode(5);
ll.addNode(7);
ll.addNode(3);
ll.addNode(4);
ll.addNode(11);
ll.addNode(15);
ll.addNode(17);
ll.addNode(23);
ll.addNode(24);
ll.addNode(21);
ll.addNode(35);
ll.addNode(37);
ll.addNode(33);
ll.addNode(44);
ll.addNode(41);
ll.addNode(57);
ll.addNode(69);
ll.addNode(64);
ll.printList();

ll.removeKthFromEnd(3);
ll.printList();
