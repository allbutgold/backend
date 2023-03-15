const { arrayCars, arrayNumbers} = require('./data.js');

function sortArray(arrayCars, arrayNumbers) {
    const sortedA = [...arrayCars].sort();
    const sortedB = [...arrayNumbers].sort((a, b) => a - b);
    return {sortedA, sortedB};
    
}

module.exports = { sortArray };


