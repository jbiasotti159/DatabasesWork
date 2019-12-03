"use strict";
exports.__esModule = true;
var ArrayReverse = /** @class */ (function () {
    function ArrayReverse() {
    }
    ArrayReverse.prototype.reverse = function (arr) {
        var newArray = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArray.push(arr[i]);
        }
        return newArray;
        console.log(newArray);
    };
    return ArrayReverse;
}());
var array1 = new ArrayReverse();
array1.arr = ["Hello", "There"];
var array2 = new ArrayReverse();
array2.arr = ["One", 2];
var array3 = new ArrayReverse();
array3.arr = [1, "String", false];
console.log(array1.reverse(array1.arr));
console.log(array2.reverse(array2.arr));
console.log(array3.reverse(array3.arr));
var Sorting = /** @class */ (function () {
    function Sorting() {
    }
    Sorting.prototype.StringSorter = function (c) {
    };
    return Sorting;
}());
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
