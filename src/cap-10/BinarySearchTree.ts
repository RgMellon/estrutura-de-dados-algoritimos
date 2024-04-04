
import {Compare, defaultCompare} from '../utilts/defaultCompare'
import Node from '../models/node'

export default class BinarySearchTree {
    private root: Node | null;

    constructor(private compareFn = defaultCompare) {
        this.root = null
    }

    insert(key: number) {
        if(this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key)
        }
    }

    private insertNode(node: Node, key: number) {
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if(node.left === null) {
                // Insere no nó a esquerda
                node.left = new Node(key)
            } else {
                // Chama recursivamente a fn
                // testando se o nó da esquerda é < que a key
                this.insertNode(node.left, key)
            }
        } else {
            if(node.right === null) {
                //insere no nó a direita
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
            
        }
    }

    insertTraverseNode(callback: (key: number) => void) {
        this.inOrderTraverseNode(this.root, callback)
    }

    private inOrderTraverseNode(node: Node | null, callback: (key: number) => void) {
        if(node != null) {
            this.inOrderTraverseNode(node?.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    preOrderTraverse(callback: (key: number) => void) {
        this.preOrderTraverseNode(this.root, callback)
    }


    private preOrderTraverseNode(node: Node | null, callback: (key: number) => void) {
        if(node != null) {
            callback(node.key)
            this.inOrderTraverseNode(node?.left, callback)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    posOrderTraverse(callback: (key: number) => void) {
        this.preOrderTraverseNode(this.root, callback)
    }

    private posOrderTraverseNode(node: Node | null, callback: (key: number) => void) {
        if(node != null) {
            this.inOrderTraverseNode(node?.left, callback)
            this.inOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

}

