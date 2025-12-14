// square of a number
function squareNum() {
    var sq;
    for (i = 1; i <= 10; i++) {
        sq = i * i;
        console.log(sq);
    }
}
// squareNum();


//print square pattern using nested for loop

function squarePattern(n) {
    var i, j;
    for (i = 0; i <= n; i++) {
        str = "";
        for (j = 0; j <= n; j++) {
            str = str + " *";
        }
        console.log(str);
    }
}
// squarePattern(10);


//print sum of even numbers & odd numbers

function sumOddEven() {
    var sumOdd = 0, sumEven = 0;
    for (i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            sumEven = sumEven + i;
        }
        else {
            sumOdd = sumOdd + i;
        }
    }
    console.log("sum of even numbers is", sumEven);
    console.log("sum of odd numbers is ", sumOdd);
}
// sumOddEven();



//print fuzz for numbers divisible by 3,buzz for divisible by 5,FizzBuzz for nuber divisible by both


function divisibleByNum() {
    var i;
    for (i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log(i, "-FuzzBizz");
        }
        else if (i % 3 == 0) {
            console.log(i, "- fizz");
        }
        else if (i % 5 == 0) {
            console.log(i, "- buzz");
        }
    }
}
// divisibleByNum();



//check each number between 1-20 its multiple of 3 or 5  or both

function multipleThreeFive() {
    var i;
    for (i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i, " multiple of both 3 and 5");
        }
        else if (i % 3 == 0) {
            console.log(i, " is multiple of 3")
        }
        else if (i % 5 == 0) {
            console.log(i, " is multiple of 5");
        }
    }
}
// multipleThreeFive();



// print all the numbers between 1-50 whose square is less than 500

function checkSquareNum() {
    var i, sq;
    for (i = 1; i <= 50; i++) {
        sq = i * i;
        if (sq >= 500) {
            break;

        }
        console.log(" square of ", i, "=", sq);
    }
}
// checkSquareNum();



// count how many numbers between 1 -100 are multiplies of 7 but not  of 5

function countNumbersMultiple() {
    var i, countNum = 0;
    for (i = 1; i <= 100; i++) {
        if (i % 7 == 0 && i % 5 != 0) {
            countNum = countNum + 1;
            console.log(i);
        }
    }
    return countNum;
}
// console.log(countNumbersMultiple());


//check a number is prime or not

function primeOrNot(n) {
    var i,isPrime=true;
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
           isPrime=false;
            break;
        }
    }
    if(isPrime)
    {
        return "prime number";
    }
    else
    {
        return "not prime number";
    }

}
// console.log(primeOrNot(90));

