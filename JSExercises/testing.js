function add7(number){
    return number + 7
}

console.log(add7(7))

function multiply(number1, number2){
    return number1 * number2
}

console.log(multiply(7,7))

function capitalize(string){
    let newString = string.toLowerCase()
    return newString.charAt(0).toUpperCase() + newString.slice(1)
}

console.log(capitalize("toDAy"))

function lastLetter(string){
    let a = string.length
    return string.charAt(a-1)
}

console.log(lastLetter("letter"))

function fizzbuzz(number){
    if(number % 3 === 0 && number % 5 != 0){
        console.log("fizz")
    } else if(number % 5 === 0 && number % 3 != 0){
        console.log("buzz")
    } else if(number % 5 === 0 && number % 3 === 0){
        console.log("fizzbuzz")
    } else {
        console.log(number)
    }

}

fizzbuzz(15)