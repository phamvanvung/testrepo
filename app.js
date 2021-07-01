// npm - global command comes with node
// npm --version

// local dependency - use it only in this particular project
// npim i <packagename>

// global dependency - use it in many project
// nimp install -g <packageName>
// sudo install -g <packageName) (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (creating package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items =[1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);