function createHaiku (structure,wordArr) {
	console.log("this should log out a haiku with the structure: " + JSON.stringify(structure));

	var getWordWithSyllables = function (syllables) {
		var max = wordArr[syllables-1].length-1;
		var rand = Math.floor(Math.random() * max);
		return wordArr[syllables-1][rand];
	}

	var haiku = "";

	var fillHaiku = function (arr) {
		if(typeof arr == "number")
			haiku += getWordWithSyllables(arr) + " ";
		
		else{
			arr.forEach(fillHaiku);
			haiku+="\n";
		}

	}
	
	fillHaiku(structure);
	console.log(haiku);

}
module.exports = {
	createHaiku : createHaiku
	};