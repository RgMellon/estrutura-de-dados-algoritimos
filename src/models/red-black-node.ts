

export enum Color {
  RED = 0,
  BLACK = 1,
}

export default class RedBlackNode {
    private _key: number | null = null;
    private _left: RedBlackNode | null = null;
    private _right: RedBlackNode | null = null;
    private _parent: RedBlackNode | null = null;
    private _color: Color = Color.RED;

    constructor(key: number) {
        this._key = key;
    }


    set key(key: number | null) {
        this._key = key
    }
    
    get key() {
        return this._key
    }
    

    set left(left: RedBlackNode | null) {
        this._left = left;
    }

    get left(): null | RedBlackNode {
        return this._left;
    }


    set right(right: RedBlackNode | null) {
        this._right = right;
    }

    get right(): null | RedBlackNode {
        return this._right;
    }

    set parent(parent: RedBlackNode | null) {
        this._parent = parent;
    }

    get parent(): null | RedBlackNode {
        return this._parent;
    }

    set color(color: Color) {
        this._color = color;
    }

    get color(): Color {
        return this._color;
    }

    isRed() {
        return this._color == Color.RED;
    }

}