// Modules
//CommonJS, every file is a module (by default)
// Modules - Encapsulate Code (only share minimum)
const {john, peter} = require('./4-names');
const data = require('./6-alternative-flavor')
const sayHi = require('./5-utils');
require('./7-mind-grenande');
console.log(data);
sayHi('susan');
sayHi(john);
sayHi(peter);