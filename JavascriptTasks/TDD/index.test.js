const {multiply, squareNumber, subtractNumber, evenNumbers, oddNumbers,  multiplication}  = require("./index")

test("multiply two numbers", ()=>{
    let firstNumber = 4;    //Arrange
    const secondNumber = 5;
    let result = multiply(firstNumber, secondNumber) // act
    let answer = 20;
    expect(result).toBe(answer); //assert
});

test("square a number", ()=>{
    let number = 2;
    let result = squareNumber(number); 
    let answer = 4;
    expect(result).toBe(answer);
});
test("subtract two number", ()=>{
    let number1  = 10;
    let number2 = 30;
    let result = subtractNumber(number1, number2);
    let answer = -20;
    expect(result).toBe(answer);
});
test("test even numbers", ()=>{
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6];
    let result = evenNumbers(arrayOfNumbers);
    let answer = [2,4,6];
    expect(result).toEqual(answer); 
});
test("test odd numbers", ()=>{
    let array = [1,2,3,4,5,6];
    let result = oddNumbers(array);
    let answer = [1,3,5];
    expect(result).toEqual(answer);
});
test("mutiply two numbers", () =>{
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6];
    let result = multiplication(arrayOfNumbers);
    let answer = [2,4,6,8,10,12];
    expect(result).toEqual(answer);
});