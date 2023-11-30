//----------------------------------------------------------------------------
// 1- Create non generic classes to get an element from an array by passing an index - number and string
// Non generic classes that do pretty much the same exact thing
class NumbersArray {
  constructor(private collection: number[]) {}
  public get(index: number): number {
    return this.collection[index];
  }
}

class StringsArray {
  constructor(private collection: string[]) {}

  public get(index: number): string {
    return this.collection[index];
  }
}
//----------------------------------------------------------------------------

// 2- Create a generic class to condense the functionality from both classes above - number or string
class AnythingArray<T> {
  constructor(private collection: T[]) {}

  public get(index: number): T {
    return this.collection[index] as T;
  }
}

const anythingArray = new AnythingArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//----------------------------------------------------------------------------
// Generic functions
// 1- Create non generic functions to get print elements from an array - number and string
function printStrings(array: string[]): void {
  for (let string of array) {
    console.log(string);
  }
}

function printNumbers(array: number[]): void {
  for (let number of array) {
    console.log(number);
  }
}
//----------------------------------------------------------------------------
// 2- Create a generic function to condense the functionality from both functions above - number or string
function printAnything<T>(array: T[]): void {
  for (let item of array) {
    console.log(item);
  }
}

printAnything<number>([1, 2, 3, 4, 5, 6]);
//----------------------------------------------------------------------------

// Generic constraints
class Car {
  public print() {
    console.log('I am a car');
  }
}

class House {
  public print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// Create a function with a generic constraint - Limits the types of T
function printHousesOrCars<T extends Printable>(array: T[]): void {
  for (let item of array) {
    item.print();
  }
}

const house = new House();
const car = new Car();

printHousesOrCars<House>([house, house, house]);
printHousesOrCars<Car>([car, car, car]);
//----------------------------------------------------------------------------
