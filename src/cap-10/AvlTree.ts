import Node from "../models/node";
import BalanceFactor from "../utilts/balanceFactor";
import { Compare, defaultCompare } from "../utilts/defaultCompare";
import BinarySearchTree from "./BinarySearchTree";

class AvlTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = compareFn
        this.root = null;
    }

    getBalanceFactor(node: Node | null) {
        const heightDifference = this.getNodeHeight(node?.left) - this.getNodeHeight(node?.right)

        switch(heightDifference) {
            case - 2: 
                return BalanceFactor.UNBALANCED_RIGHT
            
            case -1: 
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT

            case 2:
                return BalanceFactor.UNBALANCED_LEFT

            default:
                return BalanceFactor.BALANCED
        }
    }

    //se o resultado for direfente de 0, 1 ou -1, precisa ser balanceada
    getNodeHeight(node: Node | null | undefined ): number {
        if(node == null || node == undefined) {
            return -1;
        }

        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1
    }

    rotationLL(node: Node | null): Node {
        if (node === null) {
            throw new Error("Node cannot be null");
        }

        const temp = node.left!;

        node.left = temp.right;
        temp.right = node;
        return temp;
    }

    rotationRR(node: Node | null): Node {
        if (node === null) {
            throw new Error("Node cannot be null");
        }

        const temp = node.right!;

        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    rotationLR(node: Node) {
        node.left = this.rotationRR(node.left!);
        return this.rotationLL(node);
    }

    rotationRL(node: Node) {
        node.left = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    insert(key: number): void {
        this.root = this.insertNode(this.root, key)!;
    }

    protected insertNode(node: Node | null, key: number): Node | undefined {
        if(node == null) {
            return new Node(key)
        }

        else if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if(this.compareFn(key, node.key) == Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; //chave duplicada;
        }


        // balanceira a arvore se for necessario;
        const balanceFactor = this.getBalanceFactor(node);

        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if(this.compareFn(key, node.left?.key) == Compare.LESS_THAN) {
                node = this.rotationLL(node)
            } else {
                // aqui o filho a esquerda fica mais pesado a direita
                return this.rotationLR(node)
            }

        } 

        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if(this.compareFn(key, node.right?.key) == Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node)
            }
        }

        return node;
    }
}

const v = new AvlTree();
v.insert(8)
v.insert(7)
v.insert(4)
// v.insert(6)
// v.insert(5)
// v.insert(7)
// v.insert(4)

