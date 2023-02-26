/*************************
* LOOPING TRIANGLE
*************************/
console.log("\n\tv1 looping a triangle");
{
    let line = "#######";
    for (let i = 1; i <= line.length; i++) {
        console.log(line.substring(0, i));
    }
}

console.log("\n\tv2 looping a triangle");
{
    for (let line = "#"; line.length <= 7; line += "#")
        console.log(line);
}

/*************************
* FIZZBUZZ
*************************/
console.log("\n\tv1 fizzbuzz");
{
    for (let n = 1; n <= 100; n++) {
        let output = "";

        if (n % 3 == 0)
            output = "Fizz";
        if (n % 5 == 0)
            output += "Buzz";
        if (output == "")
            output = n;

        console.log(output);
    }
}

console.log("\n\tv2 fizzbuzz");
{
    for (let n = 1; n <= 100; n++) {
        console.log(n % 3 == 0 ? (n % 5 == 0 ? "FizzBuzz" : "Fizz") : (n % 5 == 0 ? "Buzz" : n));
    }
}

console.log("\n\tv3 fizzbuzz");
{
    const fizzBuzz = (start, end) => {
        for (let i = start; i <= end; i++) {
            const fizz = i % 3 === 0 ? "Fizz" : "";
            const buzz = i % 5 === 0 ? "Buzz" : "";
            console.log(fizz + buzz || i);
        }
    }

    fizzBuzz(1,100)
}

/*************************
* CHESSBOARD
*************************/
console.log("\n\tv1 chessboard");
{
    let output = "";
    for (let i = 0; i < 8; i++) {
        if (i % 2)
            output += " ";
        for (let j = 0; j < 4; j++) {
            output += "# ";
        }
        output += "\n";
    }
    console.log(output);
}

console.log("\n\tv2 chessboard");
{
    let output = "";
    for (let i = 0; i < 8; i++) {
        if (!(i % 2))
            output += " ";
        for (let j = 0; j < 4; j++) {
            output += "# ";
        }
        output += "\n";
    }

    console.log(output);
}

console.log("\n\tv3 chessboard");
{
    let size = 8;

    for (let row = 0; row < size; row++) {
        let line = "";

        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                line += " ";
            } else {
                line += "#";
            }
        }

        console.log(line);
    }
}