var syllablesArr = [];

var formatData = function (file) {
	var lines = file.toString().split("\n");

	lines.forEach (function (word, index){
		lines[index] = word.split(" ");
	});

	lines.forEach(countSyllables);
};

var fillSyllablesArr = function (word, count) {
	if(syllablesArr[count-1]==undefined) {
		syllablesArr[count-1] = []
		syllablesArr[count-1].push(word[0]);
	}
	else 
		syllablesArr[count-1].push(word[0]);
}

var countSyllables = function (word) {
	var count = 0;
	word.map(function (chunk) {
	if(chunk == word[0])
		return word;
	else
		if(chunk.match(/\d/))
			count++;
	});
	word.push(count);
	fillSyllablesArr (word, count);
	return word;
};

function returnWordArr (file) {
	formatData(file);
	return syllablesArr
}

module.exports = returnWordArr;