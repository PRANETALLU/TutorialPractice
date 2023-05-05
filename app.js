// npm init is used for editing package dependencies
//gitignore is meant for files that are not being pushed to GitHub

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);