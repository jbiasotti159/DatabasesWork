export interface Comparable {
    string1:String;
    string2:String;
    getString(param1: string, param2: string): String;
}

class ArrayReverse {
    arr: Array<String|Number|Boolean>;
    reverse(arr) {
        var newArray = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArray.push(arr[i]);
        }
        return newArray;
        console.log(newArray);
    }
}
let array1 = new ArrayReverse();
array1.arr = ["Hello", "There"];
let array2 = new ArrayReverse();
array2.arr = ["One", 2];
let array3 = new ArrayReverse();
array3.arr = [1, "String", false];
console.log(array1.reverse(array1.arr));
console.log(array2.reverse(array2.arr));
console.log(array3.reverse(array3.arr));



class Sorting {
    StringSorter(c: Comparable) {
        if(c.string1.length > c.string2.length)
        {
            return c.string1;
        }
        else 
            return c.string2;
    }
}

class Student {
    name: String;
    gpa: number;
    age: number;
}