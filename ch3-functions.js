/*************************
* MINIMUM
*************************/
console.log("\n\tv1 minimum");
{
    const min = function(x, y) {
        return (x < y ? x : y );
    }

    console.log(min(-10, 10));
    console.log(min(0, 10));
    console.log(min(10, 10));
    console.log(min(0, -10));
}

console.log("\n\tv2 minimum");
{
    function min(x, y) {
        return (x < y ? x : y );
    }

    console.log(min(-10, 10));
    console.log(min(0, 10));
    console.log(min(10, 10));
    console.log(min(0, -10));
}

console.log("\n\tv3 minimum");
{
    let min = (x, y) => x < y ? x : y;

    console.log(min(-10, 10));
    console.log(min(0, 10));
    console.log(min(10, 10));
    console.log(min(0, -10));
}

/*************************
* RECURSION
*************************/
console.log("\n\tv1 non-recursive solution");
{
    let isEven = n => n % 2 === 0 ? true : false;

    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(2));
    console.log(isEven(1));
    console.log(isEven(0));
    console.log(isEven(-1));
    console.log(isEven(-2));
    console.log(isEven(-75));
    console.log(isEven(-50));
}

console.log("\n\tv2 recursion");
{
    let isEven = n => {
        n = Math.abs(n)
        if (n === 0) return true;
        if (n === 1) return false;
        return isEven(n - 2);
    }

    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(2));
    console.log(isEven(1));
    console.log(isEven(0));
    console.log(isEven(-1));
    console.log(isEven(-2));
    console.log(isEven(-75));
    console.log(isEven(-50));
}

console.log("\n\tv3 recursion");
{
    let isEven = n => {
        if (n === 0) return true;
        if (n === 1) return false;
        if (n < 0) return isEven(-n);
        return isEven(n - 2);
    }

    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(2));
    console.log(isEven(1));
    console.log(isEven(0));
    console.log(isEven(-1));
    console.log(isEven(-2));
    console.log(isEven(-75));
    console.log(isEven(-50));
}

/*************************
* BEAN COUNTING
*************************/
console.log("\n\tv1 bean counting");
{
    let countChar = (string, char) => {
        let count = 0;
        for (i = 0; i < string.length; i++) {
            if (string[i] === char) count++;
        }
        return count;
    }

    let countBs = string => {
        return countChar(string, "B");
    }

    console.log(countBs("BBC"));
    console.log(countChar("kakkerlak", "k"));

    // thx chatgpt
    console.log(countChar("Beneath bright blue skies, browsers bravely bring brilliant bits of brainy javascript code to be beautifully rendered on billions of devices.", "B"));
    console.log(countChar("Juggling JavaScript's jazzy, jaw-dropping, and juicy features, developers journey through just-in-time compiling, joyously joining the jam-packed world of web development.", "j"));
}

console.log("\n\tv2 bean counting");
{
    let countCharCaseInsensitive = (string, char) => {
        string = string.toLowerCase();
        char = char.toLowerCase();

        let count = 0;
        for (i = 0; i < string.length; i++) {
            if (string[i] === char) count++;
        }
        return count;
    }

    console.log(countCharCaseInsensitive("BBC", "B"));
    console.log(countCharCaseInsensitive("kakkerlak", "k"));

    // thx chatgpt
    console.log(countCharCaseInsensitive("Beneath bright blue skies, browsers bravely bring brilliant bits of brainy javascript code to be beautifully rendered on billions of devices.", "B"));
    console.log(countCharCaseInsensitive("Juggling JavaScript's jazzy, jaw-dropping, and juicy features, developers journey through just-in-time compiling, joyously joining the jam-packed world of web development.", "j"));
}