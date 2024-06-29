class SetRed {
    public items: any = {};


    exists(element: any)  {
        return this.items.hasOwnProperty(element);
    }

    add(item: any): void {
        this.items[item] = item;
    }

    values() {
        return Object.values(this.items);
    }

    union(collection: SetRed) {
        const unionSet = new SetRed();
        this.values().forEach((element) => unionSet.add(element));

        collection.values().forEach((element) => unionSet.add(element));
        return unionSet;
        
    }

    intersection(collection: SetRed) {
        const intersectionSet = new SetRed();
        this.values().forEach((element) => {
            if (collection.exists(element)) {
                intersectionSet.add(element);
            }
        });

        return intersectionSet
    }

    difference(collection: SetRed) {
        const differenceSet = new SetRed();
        this.values().forEach((element) => {
            if (!collection.exists(element)) {
                differenceSet.add(element);
            }
        });

        return differenceSet
    }
}


const first = new SetRed();
first.add(1);
first.add(2);
first.add(3);


const second = new SetRed();
second.add(3);
second.add(4);
second.add(5);

console.log(first.union(second).items);
console.log(first.intersection(second).items);
console.log(first.difference(second).items);
