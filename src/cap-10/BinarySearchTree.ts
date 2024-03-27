
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
}