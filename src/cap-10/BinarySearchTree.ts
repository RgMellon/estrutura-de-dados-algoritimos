
import {Compare, defaultCompare, } from '../utilts/defaultCompare'
import Node from '../models/node'

export default class BinarySearchTree {
    protected root: Node | null;

    constructor(protected compareFn = defaultCompare) {
        this.root = null
    }

    insert(key: number) {
        if(this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key)
        }
    }

    protected insertNode(node: Node, key: number) {
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
            callback(node.key!)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    preOrderTraverse(callback: (key: number) => void) {
        this.preOrderTraverseNode(this.root, callback)
    }


    private preOrderTraverseNode(node: Node | null, callback: (key: number) => void) {
        if(node != null) {
            callback(node.key!)
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
            callback(node.key!)
        }
    }


    min() {
        return this.minNode(this.root)
    }

    private minNode(node: Node | null) {
        let current = node

        while(current !== null && current.left !== null) {
            current = current.left
        }

        return current;
    }

    max() {
        return this.maxNode(this.root)
    }

    private maxNode(node: Node | null) {
        let current = node

        while(current !== null && current.right !== null) {
            current = current.right
        }

        return current;
    }


    search(key: any) {
        this.searchNode(key, this.root)
    }

    private searchNode(key: any, node: Node | null): boolean {
        if(node === null) {
            return false
        }
        
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return  this.searchNode(key, node.left!)
        } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(key, node.right!)
        } else return true

    }

    remove(key: number) {
        this.root = this.removeNode(this.root, key)
    }

    private removeNode(node: Node | null, key: number) {
        
        if(node === null) {
            return null;
        }

        if(this.compareFn(key, node?.key) === Compare.LESS_THAN) {
            
            // console.log("------ chamada ---------")
            // console.log(`${key}, ${node.key}`)
            // console.log("---------------")
            
            const result = this.removeNode(node?.left, key)

            // console.log("------ desempilhando ---------")
            // console.log(`${key}, ${node.key} result ${JSON.stringify(result)}`)
            // console.log("-----------------")

            // console.log(`currentNode = ${JSON.stringify(node, null , 2)}`)

            node.left = result;
            return node

        } else if(this.compareFn(key, node?.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // Caso 1 key == node.item (nó folha)
            if(node.left === null && node.right === null) {
                console.log(`chamei a igual ${key}, ${node.key}`)
                node = null
                return node
            }
            // Caso 2 Removendo um nó com um filho a esquerda ou direita
            //se o nó não tiver um filho a esquerda, entao ele tem a direita, entao
            // modificaremos a referencia no nó para seu filho direito
            if(node.left == null) {
                node = node.right;
                return node;
            } else if(node.right == null) {
                node = node.left;
                return node;
            }

            // Caso 3, removendo um nó com dois filhos
            const aux = this.minNode(node.right) || null //4
            node.key = aux?.key || null // node.key que era 5, agora fica 4
            node.right = this.removeNode(node.right, aux?.key!)

            return node
        }
        
    }
}

// const callback = (value: number) => {console.log(value)}
// const u = new BinarySearchTree()
// u.insert(11)
// u.insert(8)
// u.insert(14)
// u.insert(5)
// u.insert(9)

// u.remove(5)



// u.insertTraverseNode(callback)

// console.log(u.max())
// console.log(u.min())