/*
// Declare Basic Strings
let firstName = 'Busayo';
let lastName = 'Oludoyi';
let address = 'Maizube Gwarimpa'

// Declare Concatenated (merged) strings
let fullName = firstName +' ' + lastName;

// Logging data into console
console.log(fullName);

// Accessing Characters
console.log(firstName[4]);

//String length
console.log(fullName.length);

// String Method toUpper/LowerCase
console.log(fullName.toUpperCase());

// The result of a string method can be assigned to a variable
let result = fullName.toLowerCase();
console.log(result, lastName);

// String Methods indexOf
 let index = address.indexOf('z');

 console.log(index); */

 //Common String Methods
//let location = 'Redeemers university, Mowe, Ogun state university'
//let box = "P.O Box 2050"
//let lastInstance = location.lastIndexOf('s');
//let portion = location.slice(10,20);
//let diff_portion = location.substr(0, 20);
//let interChange = location.replaceAll('university', 'college');


//console.log(lastInstance);
//console.log(portion);
//console.log(diff_portion);
//console.log(interChange);

// Numbers
/*
let radius = 10;
const PI = 3.14;

console.log(10 % 3);

let answer = radius % 2;
console.log(answer);

// Area Formula = Pi r squared
let AreaFormula = PI * radius**2;
console.log(AreaFormula);
*/

/*let likes = 2225;
// likes = likes + 1;
//likes++
//likes--
//likes /= 10;
//likes *= 10;
//likes += 10;
console.log(likes);

let totalLikes = 'The page has '+ likes + ' likes so far!';
console.log(totalLikes);
*/

const artist = 'Show Dem Camp';
const song = 'Tropicana';
const views = 500000;

//Concatenation way
//let text = 'The music duo called ' + artist + ' has ' + views + ' views ' + 'on their hit song "' + song + '".';
//console.log(text);

// Template String
/*let text = `The Music duo called ${artist} has ${views} views on their hit song "${song}".`;
console.log(text);

//html template
let html = `
<h2>${artist}</h2>
<p>${song}</p>
<span>${views} views</span>
`;
console.log(html);
*/

let extraCharacters = ['Hieachi', 'Jun', 'Xiaoyu'];
let tekkenCharacters = ['Eddie Gordo', 'Kazuya'];
//tekkenCharacters[0] = 'Nina';
//console.log(tekkenCharacters);
//console.log(tekkenCharacters[0]);
//console.log(tekkenCharacters.length);

// String Method join
// let totalXters = tekkenCharacters.join('-');
// console.log(totalXters);

// String Method concat
let merger = tekkenCharacters.concat(extraCharacters);
console.log(merger);

// string method push and pop
// let plus = tekkenCharacters.push('King', 'Hwoarang');
// console.log(plus);
// console.log(tekkenCharacters);
// console.log(tekkenCharacters.length);

//plus = tekkenCharacters.pop();
// console.log(tekkenCharacters);

// Boolean true/false statements
// let email = 'busayo_oludoyi@yahoo.com'
// let validEmail = email.includes('^');

// console.log(validEmail);

// let height = 180 ;

// Comparisons true/false
/*
console.log(height == 170);
console.log(height == 180);
console.log(height != 190);
console.log(height < 180);
console.log(height > 180);
console.log(height <= 180);
console.log(height >= 180);
*/
/*
let userName = 'yoda';

console.log(userName < 'bee');
console.log(userName > 'Yoda');
console.log(userName == 'crystal');
console.log(userName > 'Crystal');
console.log(userName > 'crystal');
*/

// Converting string to number
/*
let score = '100'

let result = score + 1;
console.log(result);

result = Number(score) + 1;
console.log(result);

let text = "3000"
text = Number(text) * 2;
console.log(text);

// Converting to Boolean 
let truth = 3000
truth = Boolean(truth);
console.log(truth);

let lie = 0
lie = Boolean(lie);
console.log(lie);

let alwaysTrue = '8732 wadido'
alwaysTrue= Boolean(alwaysTrue);
console.log(alwaysTrue);
*/

// for loops

/*for (age = 0; age < 5; age++) {
 console.log(age);
if (age >= 4) {
    console.log('loop finished');
}
 }*/

// const names = ['Scorpion', 'Subzero', 'JohnnyCage', 'LiuKang', 'ShaoKhan', 'Raiden'];
// for (i = 0; i < names.length; i++) {
//    //  console.log(names[i]);
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
// }

// While loops (similar to for loops)
// const names = ['Scorpion', 'Subzero', 'JohnnyCage', 'LiuKang', 'ShaoKhan', 'Raiden'];

// let i = 3
// while (i < names.length) {
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// i++;
// }

// Do While loops (execute loop at least once regardless)
// do {
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// i++;
// }
// while (i < names.length);

// if , else, if else statements with LOGICAL (AND)&& (OR)|| 
/*const password = 'mypass345word@9876';

if (password.length >= 14 && password.includes('@')) {
    console.log('Password is very strong');
} else if (password.length >= 8 || password.includes('$') && password.length >=6) {
    console.log('Password is ok!');
} else {
    console.log('Password is not strong enough..');
}

//Logical NOT (!)
let user = false

if (!user) {
    console.log('correct');
} else {
    console.log('wrong');
}
*/

// Break a loop
/*
const score = [12,14,16,18,20,24,34,64,94,100,21,245]

for (let i = 0; i < score.length; i++) {
    console.log(score[i]);

if (score[i] === 100) {
    console.log('You have beat the game! CONGRATULATIONS!!');
    break;
}
}
*/

// Switch case statements
/*
const grade = 'a';

switch(grade) {
    case 'a': 
    console.log('You got an A');
        break;
    case 'b': 
    console.log('You got a B');
        break;  
    case 'c':       
    console.log('You got a C');
        break;
    case 'd': 
    console.log('You got a D');
        break;
    case 'e': 
    console.log('You got an E');
        break;
    case 'f': 
    console.log('You got an F');
        break;
    default:
    console.log('NOT a valid grade');
}
*/

// Function Deckaration
// function greet() {
//     console.log.apply('hello world');
// }

// Function Expression
// const speak = function() {
//     console.log('good morning');
// }

// Call function - FUNCTIONS NEED TO BE CALLED / INVOKED 
//speak()

//Arguments and Parameters
// const greeting = function(time = 'evening', name = 'Andre', _punctuation = '!') {
//     console.log(`Good ${time} ${name} ${_punctuation}`);
// }

// greeting('day', 'Busayo', '!');

// Returning Values (RETURN FUNCTION)
//Step 1 declare function expression
// let calcArea = function(R) {
//    return 3.14 * R**2;
// }
// step 2 declare variable and give 'R' a value to use function expression 
// let finalCalcArea = calcArea(7);
// step 3 output
// console.log(finalCalcArea);

// Arrow Functions (=>) - just a shorthand for writing 'function'
// let theArea = (r) => {
//     return 3.14 * r**2;
// }

// let area = theArea(5);
// console.log(area);

// practicing shorthand function
// const greet = function() {
//     return 'hello world';
// }
// const greet = () => 'hello world';

// let see = greet();
// console.log(see);

// const bill = function(products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };


// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

// callback function 
const myFunc = function(callback) {
 // do something   
    let value = 50;
    callBackFunc(value);
};

myFunc (Function(value) {
//do something
console.log(value);
});