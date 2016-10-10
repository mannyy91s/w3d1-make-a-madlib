//Inentially made global by leaving off car before variable
// log = console.log.bind(console);
//
//
//
// var defaultName= 'Manny';
//
// function sayHello(name){
//     if (name === undefined){
//         console.log('Hello,' + defaultName + '!');
//     }
//     else {
//         console.log('hello,' + name + '!');
//     }
// }

// sayHello();
// sayHello('manpreet');
// sayHello('manpreet s');
// sayHello('manpreet b');
// console.log('hello');


var transportationName= 'Car';
var transportationType= 'sedan';
var $cost = 'too much';
var _green = true;
var transportationNumber1 = true;
var snake_case_variable_is_okay = true;
var camelCaseIsBest= true;
var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChange = true;

function testVariables () {
    var thisIsNotAvailableOutside = true;
    console.log(thisIsAVariable);
}

// console.log(thisIsNotAvailableOutside);

if (true === true) {
    let thisIsNotAvailableOutside = true;
}

// console.log(thisIsNotAvailableOutside);

const thisCannotChange = true;
// thisCannotChange = false;


var firstName= 'Manny';

var lastName;
lastName='singh';
// console.log(lastName); //output at this point in the code

var thisIsUndefined;
var thisIsNull = null;
var thisIsBoolean = true;
var thisIsNumber= 12.34;
var thisIsString = 'hello world! my favorite number is 13';
var thisIsExpression = (1 + 1 * 100 / 4 - 8);
// var thisIsInput = inputs.first_name;



var showTitle = 'Game of Thrones';
var showAuthor = 'George Martin';
var showYear = 2009;
var showGenre = 'fiction';
var showIsMovies = false;
//console.log(thisIsTitle,thisIsAuthor,thisIsYear,thisIsGenre,thisIsMovies);

var verb = 'ran';
var sentence = 'Fying by the tower, I ' + verb + ' to ' +
'safety.';
console.log(sentence);

var verb =1;
var sentence = 12 + verb + 12;
console.log(sentence);


var verb = 'ran';
var sentence = `Fying by the tower, I ${verb} to
safety.`;
console.log(sentence);

var on =false;
var ternary = (on ? 'The Light is on.' : 'The light is off.');
console.log(ternary);
