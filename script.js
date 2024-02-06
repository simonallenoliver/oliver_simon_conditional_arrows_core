// Problem 1
// Write an arrow function that checks to see if a user is older than 18.

const older = (age) => {
    return age < 18 ?
    "Sorry you gotta be 18 or older"
    : "head on in!"
}

console.log(older(16))

// Problem 2
// Write an arrow function that checks to see if it is currently raining.

isRaining = (trueOrFalse) => {
    return trueOrFalse === true ?
    "it's raining"
    : "it's not raining"
}

console.log(isRaining(false))

// Problem 3
// Write an arrow function that checks to see if a number is even.

evenOrOdd = (num) => {
    return num % 2 === 0 ?
    "that's even"
    : "that's odd"
}

console.log(evenOrOdd(8))


// Problem 4
// Write an arrow function that takes in two parameters and checks whether one number is greater than another.

compare = (num1, num2) => {
    return num1 > num2 ?
    `${num1} is greater than ${num2}`
    : `${num1} is not greater than ${num2}`
}

console.log(compare(5,4))



