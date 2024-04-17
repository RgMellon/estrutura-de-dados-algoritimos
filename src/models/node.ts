export default class Node {
    private _key: number | null = null;
    private _left: Node | null = null;
    private _right: Node | null = null;

    constructor(key: number) {
        this._key = key;
    }


    set key(key: number | null) {
        this._key = key
    }
    
    get key() {
        return this._key
    }
    

    set left(left: Node | null) {
        this._left = left;
    }

    get left(): null | Node {
        return this._left;
    }


    set right(right: Node | null) {
        this._right = right;
    }

    get right(): null | Node {
        return this._right;
    }

}