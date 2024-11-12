function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}
function squareNumber(number){
    return number * number;
}
function subtractNumber(number1, number2){
    return number1 - number2;
}
const evenNumbers = (array)=>{
    let evenNumber = [];
    for (const element of array) {
        if(element % 2 == 0){
            evenNumber.push(element)
        }
    }
    return evenNumber
}
const oddNumbers = (array)=>{
    let oddNumber = [];
    for (const element of array) {
        if(element % 2 != 0){
            oddNumber.push(element)
        }
    }
    return oddNumber
}

function multiplication(array){
    let result = [];
    array.forEach(num => {
        let answer = num * 2;
        result.push(answer);
    });
    return result;
}
module.exports = {multiply, squareNumber, subtractNumber, evenNumbers, oddNumbers,  multiplication}
