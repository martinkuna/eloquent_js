/*************************
* THE SUM OF A RANGE
*************************/
console.log("\n\tv2 sum of a range");
{
    function range(start, end, step = start < end ? 1 : -1) {
        let array = [];

        if (step > 0) {
            for (let i = start; i <= end; i += step) {
                array.push(i);
            }
        } else {
            for (let i = start; i >= end; i += step) {
                array.push(i);
            }
        }

        return array;
    }

    function sum(array) {
        let total = 0;
        for (let value of array) {
            total += value;
        }
        return total;
    }

    console.log(range(1, 10) + "\n");
    console.log(sum("not an array") + "\n");
    console.log(sum(range(1, 10)) + "\n");
    console.log(range(1, 10, 2) + "\n");
    console.log(sum(range(1, 10, 2)) + "\n");
    console.log(range(5, 2) + "\n");
    // Many of these don't work, and are beyond the 
    console.log(range(10, 1, 2) + "\n");
    console.log(range(10, 1, -2) + "\n");
    console.log(sum(range(10, 1, -2)) + "\n");
    console.log(range(-10, -1) + "\n");
    console.log(range(-10, -1, 2) + "\n");
    console.log(sum(range(-10, -1, 2)) + "\n");
    console.log(range(-10, 10) + "\n");
    console.log(range(-10, 10, 3) + "\n");
    console.log(range(-10, 10, -3) + "\n");
    console.log(range(1, 10, -2) + "\n");
}

console.log("\n\tv2 sum of a range");
{
    let range = (start, end, step = 1) => {
        console.debug("CALLING: range(" + start + ", " + end + ", " + step + ")");
        let arr = [];
        step = Math.abs(step);
        if (start < end) {
            for (let fillValue = start; fillValue <= end; fillValue += step) {
                arr.push(fillValue);
            }
        } else {
            for (let fillValue = start; fillValue >= end; fillValue -= step) {
                arr.push(fillValue);
            }
        }
        return arr;
    }

    let sum = arr => {
        console.debug("CALLING: sum(" + arr.toString() + ")");
        if (Array.isArray(arr))
            return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
        return null;
    }

    console.log(range(1, 10) + "\n");
    console.log(sum("not an array") + "\n");
    console.log(sum(range(1, 10)) + "\n");
    console.log(range(1, 10, 2) + "\n");
    console.log(sum(range(1, 10, 2)) + "\n");
    console.log(range(5, 2) + "\n");
    console.log(range(10, 1, 2) + "\n");
    console.log(range(10, 1, -2) + "\n");
    console.log(sum(range(10, 1, -2)) + "\n");
    console.log(range(-10, -1) + "\n");
    console.log(range(-10, -1, 2) + "\n");
    console.log(sum(range(-10, -1, 2)) + "\n");
    console.log(range(-10, 10) + "\n");
    console.log(range(-10, 10, 3) + "\n");
    console.log(range(-10, 10, -3) + "\n");
    console.log(range(1, 10, -2) + "\n");
}

/*************************
* REVERSING AN ARRAY
*************************/
console.log("\n\tv1 reversing an array");
{
    let reverseArray = arr => {
        let reversed = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversed.push(arr[i]);
        }
        return reversed;
    }

    let reverseArrayInPlace = arr => {
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            let tmp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = tmp;
        }
        return arr;
    }

    console.log(reverseArray(["A", "B", "C"]));
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
}

/*************************
* A LIST
**************************
*   let list = {
*       value: 1,
*       rest: {
*           value: 2,
*           rest: {
*               value: 3,
*               rest: null
*           }
*       }
*   };
*************************/
console.log("\n\tv1 a list");
{
    let prepend = (element, list) => {
        return { value: element, rest: list };
    }

    let listToArray = list => {
        let arr = [];
        for (let node = list; node; node = node.rest) {
            arr.push(node.value);
        }
        return arr;
    }

    let arrayToList = arr => {
        arr = arr.reverse();
        let list = null;
        arr.forEach(element => {
            list = { value: element, rest: list };
        });
        return list;
    }

    let nth = (list, num) => {
        if (!list) return undefined;
        if (num == 0) {
            return list.value;
        }
        return nth(list.rest, num - 1);
    }

    str = JSON.stringify(arrayToList([10, 20, 30])); // {"value":10,"rest":{"value":20,"rest":{"value":30,"rest":null}}}
    console.log(str);

    console.log(listToArray(arrayToList([10, 20, 30]))); // [10, 20, 30]

    str = JSON.stringify(prepend(10, prepend(20, null))); // {"value":10,"rest":{"value":20,"rest":null}}
    console.log(str);

    console.log(nth(arrayToList([10, 20, 30]), 1)); // 20
    console.log(nth("lol")) // undefined
}