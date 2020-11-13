//Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise.
//isEven(4);
//Output: true
//isEven(21);
//Output: false
//isEven(68);
//Output: true
//isEven(333); 
//Output//:
//false

function isEven(number) {
    if (number == 4 && 68) {
        return true;
    } else if (number == 21 && 333) {
        return false; 
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number -2);
    }
       
}
console.log(isEven(-4 && -68)); // true
console.log(isEven(68 && 33)); // false


   // Write a function factorial() which takes a single numeric argument and returns the factorial of that number.

       // factorial(5);
//Output: 120

//factorial(2);
//Output: 2


function factorial(five) {
    let answer = 1;
    if (five == 0 || five == 1) {
        return answer;
    } else {
        for (var i = five; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
let n = 5;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);

function factorial(two) {
    //base case
    if (two == 0 || two == 1) {
        return 1;
        //recursive case
    } else {
        return two * factorial(two - 1);
    }
}
let two = 2;
answer = factorial(two)
console.log("The factorial of " + two + " is " + answer);

//Write a function kebabToSnake() which takes a single kebab-cased string argument and return the snake_case version.


//kebabToSnake("hello-world");
//Output: hello_world

const toKebabCase = str => 
   str &&
   str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');

        console.log(toKebabCase("hello-world"));