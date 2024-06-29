
import {Compare, defaultCompare, } from '../utilts/defaultCompare'
import RedBlackNode, { Color } from '../models/red-black-node';

export default class RedBlackTree{
    protected root: RedBlackNode | null;

    constructor(protected compareFn = defaultCompare) {
        this.root = null
    }

    insert(key: number) {
        if(this.root === null) {
            this.root = new RedBlackNode(key);
            this.root.color = Color.BLACK
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }

    protected insertNode(node: RedBlackNode, key: number): RedBlackNode {
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if(node.left === null) {
                node.left = new RedBlackNode(key)
                node.left.parent = node;
                return node.left;
            } else {
                return this.insertNode(node.left, key)
            }
        } else {
            if(node.right === null) {
                node.right = new RedBlackNode(key)
                node.right.parent = node;
                return node.right;
            } else {
                return this.insertNode(node.right, key)
            }
            
        }
    }

    private fixTreeProperties(node: RedBlackNode) {
        //Enquanto exisitir um nó, que tenha um nó pai, e ele for vermelho
        while(node && node.parent && node.parent.color == Color.RED)  {
            let parent  = node.parent; //pai 
            const grandParente = parent.parent; // avo
            
                // Caso em que o pai é o filho a esquerda;
            if(grandParente && grandParente?.left === parent) {
                const uncle = grandParente.right;
                if(uncle && uncle.color === Color.RED) {
                    grandParente.color = Color.RED;
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node = grandParente;
                } else {
                    // Caso o tio seja preto, recolorir nao sera suficiente; temos que rotacionar

                    if(node == parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent!;
                    }

                    this.rotationLL(grandParente);
                    parent.color = Color.BLACK;
                    grandParente.color = Color.RED;
                    node = parent;

                }

            } else {
                // Caso em que o pai é o filho a esquerda;
                const uncle = grandParente?.left;
                //se o tio é vermelho, temos que recolorir;
                if(uncle && uncle.color === Color.RED) {
                    grandParente.color = Color.RED; // muda a color do avo
                    parent.color = Color.BLACK; // muda a color do pai
                    uncle.color = Color.BLACK; // muda a cor do tio;
                    //guarda a referencia do nó avo no nó atual;
                    node = grandParente;
                } else {
                    //caso de rotacao
                }

            }


        }
    }

    rotationLL(node: RedBlackNode | null): RedBlackNode {
        if (node === null) {
            throw new Error("Node cannot be null");
        }

        const temp = node.left!;

        node.left = temp.right;
        temp.right = node;
        return temp;
    }

    rotationRR(node: RedBlackNode | null): RedBlackNode {
        if (node === null) {
            throw new Error("Node cannot be null");
        }

        const temp = node.right!;

        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    

}


// 1 - Cada nó é vermelho ou preto;
// 2 - A raiz da arvore é preta;
// 3 - Todas as folhas são pretas; (Nós representados com frequências NULL);
// 4 - Se um nó for vermelho, então seus dois filhos serão pretos;
// 5 - Não pode haver dois nós vermelhos adjacents (dois vertices, ligados por uma aresta). Um nó vermelho nao pode ter um pai ou filho vermelho
// 6 - Todo caminho (path) de um dado nó para qualquer outro do seus descendentes contem o mesmo numero de nós pretos