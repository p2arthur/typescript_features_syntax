//----------------------------------------------------------------------------
// 1- Create non generic classes to get an element from an array by passing an index - number and string
// Non generic classes that do pretty much the same exact thing
var NumbersArray = /** @class */ (function () {
    function NumbersArray(collection) {
        this.collection = collection;
    }
    NumbersArray.prototype.get = function (index) {
        return this.collection[index];
    };
    return NumbersArray;
}());
var StringsArray = /** @class */ (function () {
    function StringsArray(collection) {
        this.collection = collection;
    }
    StringsArray.prototype.get = function (index) {
        return this.collection[index];
    };
    return StringsArray;
}());
//----------------------------------------------------------------------------
// 2- Create a generic class to condense the functionality from both classes above - number or string
var AnythingArray = /** @class */ (function () {
    function AnythingArray(collection) {
        this.collection = collection;
    }
    AnythingArray.prototype.get = function (index) {
        return this.collection[index];
    };
    return AnythingArray;
}());
var anythingArray = new AnythingArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
var element = anythingArray.get(1);
console.log(element);
