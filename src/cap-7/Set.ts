class SetExample {
  private items: any = {};

  has(element: any) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element: any) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element: any) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet: SetExample) {
    const unionSet = new SetExample();
    this.values().forEach((element) => {
      unionSet.add(element);
    });

    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  intersection(otherSet: SetExample) {
    const intersectionSet = new SetExample();

    const values = this.values();
    const otherSetValues = otherSet.values();

    let biggestSetValue = values;
    let smallerSetValue = otherSetValues;

    if (otherSetValues.length - values.length > 0) {
      biggestSetValue = otherSetValues;
      smallerSetValue = values;
    }

    smallerSetValue.forEach((element) => {
      if (biggestSetValue.includes(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  }

  difference(otherSet: SetExample) {
    const differenceSet = new SetExample();

    const values = this.values();

    values.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  }

  isSubSetOf(otherSet: SetExample) {
    if (this.size() > otherSet.size()) {
      return false; //
    }

    let isSubSet = true;

    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubSet = false;
        return false;
      }
      return true;
    });

    return isSubSet;
  }
}

const setA = new SetExample();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new SetExample();
setB.add(3);
setB.add(4);
setB.add(5);

//Union
const unionAB = setA.union(setB);
console.log(unionAB.values());

//Intersection
const setInterSectionA = new SetExample();
setInterSectionA.add(1);
setInterSectionA.add(2);
setInterSectionA.add(3);
setInterSectionA.add(5);

const setInterSectionB = new SetExample();
setInterSectionB.add(3);
setInterSectionB.add(4);
setInterSectionB.add(5);

const intersectionAB = setInterSectionA.intersection(setInterSectionB);
console.log(intersectionAB.values());

//Difference
const differenceSet = new SetExample();
differenceSet.add(1);
differenceSet.add(2);
differenceSet.add(3);
differenceSet.add(5);
differenceSet.add(6);

const setDifferenceSectionB = new SetExample();
setDifferenceSectionB.add(3);
setDifferenceSectionB.add(4);
setDifferenceSectionB.add(5);

const differenceAB = differenceSet.difference(setDifferenceSectionB);
console.log(differenceAB.values());

//subconjunt (todo elemento em a tbm deve estar em B)
const setSubA = new SetExample();
setSubA.add(1);
setSubA.add(2);

const setSubB = new SetExample();
setSubB.add(1);
setSubB.add(2);
setSubB.add(3);

const setSubC = new SetExample();
setSubB.add(4);
setSubB.add(5);
setSubB.add(6);

console.log(setSubA.isSubSetOf(setSubB));
console.log(setSubA.isSubSetOf(setSubC));
