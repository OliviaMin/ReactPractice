//Normal Way
function square(x){
    return x*x;
};

console.log(square(3));
//Arrow function way
const squareArrow = (x) => {
    return x*x;
};
console.log(squareArrow(2));

//Expression Syntax: since 1 return value
const squareArrow2 = (x) => x*x;
console.log(squareArrow2(5));

//Challenge
//Way 1
const firstname = (x) => {
    return x.split(' ')[0];
}

console.log(firstname('Olivia Biswas'));

//Expression syntax
const lastname = (x) => x.split(' ')[1]
console.log(lastname('Olivia Biswas'))
