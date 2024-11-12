const {filterScores,increaseScores,squareEachScores} = require("./Task")
test("Find scores greater than or equal to 70",()=>{
    let testScores = [23,56,86,23,85,77,98];
    let result = filterScores(testScores);
    let answer = [86,85,77,98];
    expect(result).toEqual(answer);
})

test("Increase each grade by 5",()=>{
    let grades = [85, 92, 78, 88, 95];
    let result = increaseScores(grades);
    let answer = [90, 97, 83, 93, 100];
    expect(result).toEqual(answer);
})
test("Square each number",()=>{
    let numbers = [2,4,6,8,10];
    let result = squareEachScores(numbers);
    let answer = [4,16,36,64,100];
    expect(answer).toEqual(result);
})
test("Check time",()=>{
    let numbers = [2,4,6,8,10];
    let result = squareEachScores(numbers);
    let answer = [4,16,36,64,100];
    expect(answer).toEqual(result);
})
