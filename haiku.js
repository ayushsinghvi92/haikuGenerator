var fs = require('fs');
var haiku = require('./haiku_generator');
var createWordArr = require('./formatData');

var dict = fs.readFileSync('./cmudict.txt').toString();

var syllablesArr = createWordArr(dict);

haiku.createHaiku([[1,1,2,1],[1,2,1,2,1],[2,1,2]],syllablesArr);
haiku.createHaiku([[2,3],[1,3,3],[3,2]],syllablesArr);
haiku.createHaiku([5,7,5],syllablesArr);