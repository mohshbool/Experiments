// Function to capitalize the first letter is a word
const upperCaseFirstLetter = string => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

// Function to capitalize the first letters in 
// a sentence, even single letters such as: 'a'
const upperCaseFirstLetterInSentence = string => {
	return string.split(' ').map(word => { 
		if (word !== '') return upperCaseFirstLetter(word)
	}).join(' ')
}

// Function to capitalize the first letters in
// words in a sentence, exclduing prepositions
// and single letters
const upperCaseFirstLetterInWords = string => {
	return string.split(' ').map(word => { 
		if (word !== '' && word.length >= 3) return upperCaseFirstLetter(word)
	}).join(' ')
}