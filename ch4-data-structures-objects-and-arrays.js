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

    let sum = arr => {
        if (Array.isArray(arr))
            return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
        return null;
    }
    
    console.log(range(1,10));
    console.log(sum("not an array"));
    console.log(sum(range(1,10)));
    console.log(range(1,10,2));
    console.log(sum(range(1,10,2)));
    // console.log(range(5, 2, -1));
    // console.log(range(5, 2));
}