function filterScores(array){
    let result = array.filter((number)=>{
        return number >=70;
    });
    return result;
}
function increaseScores(grades){
    let result = grades.map((number)=>{
        return number + 5;
    })
    return result;
}
function squareEachScores(numbers){
    let result = numbers.map(number=>{
        return number * number;
    })
    return result;
}
module.exports = {filterScores,increaseScores,squareEachScores}