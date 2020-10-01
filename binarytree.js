class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinTree {
    constructor() {
        this.root == null;
    }

    insert(data) {
        let node = new Node(data);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            removeNode(node.left, data);
        } else if (data > node.data) {
            removeNode(node.right, data);
        } else {
            // cur node to be deleted
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            //
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    serialize(node, store) {
        if (node === null) {
            store.push(MARKER);
        }
        store.push(node.data);
        this.serialize(node.left, store);
        this.serialize(node.right, store);
    }

    deserialize(store) {
        const MARKER = Number.MAX_VALUE;
        try {
            let data = store.shift();
            if (data === MARKER) {
                return null;
            }
            let node = new BTNode(data);
            node.left = this.deserialize(store);
            node.right = this.deserialize(store);
            return node;
        } catch (err) {
            return null;
        }
    }
}
