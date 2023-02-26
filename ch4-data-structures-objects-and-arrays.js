/*************************
* THE SUM OF A RANGE
*************************/
console.log("\n\tv1 sum of a range");
{
    // TODO: Make step work with negative values
    let range = (start, end, step=1) => {
        if (start > end) return null;
        let arr = [];
        for (let fillValue = start; fillValue <= end; fillValue += step) {
            arr.push(fillValue);
        }
        return arr;
    }

    // TODO: add sum function
    let sum = arr => {
        let total = 0;

        return total;
    }

    console.log(range(1,10));
    console.log(range(1,10,2));
    // console.log(range(5, 2, -1));
    // console.log(range(5, 2));
    console.log(sum(range(1,10)));
}