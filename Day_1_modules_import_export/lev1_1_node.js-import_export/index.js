const {sortArray} = require('./function.js');

const {arrayNumbers, arrayCars} = require('./data.js');

const {sortedA: sortedArrayCars, sortedB: sortedArrayNumbers} = sortArray(arrayCars, arrayNumbers);

console.log(sortedArrayCars, sortedArrayNumbers)