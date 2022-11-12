"use strict";
//return a boolean
//accepting two strings
// string1 = word
// string2 = letters
//
// fail fast - if word.length < letters.length -> fail
// make a freqCounter for both strings and compare them
// iterate through wordFreq to lettersFreq and see if the contents of wordFreq are inside lettersFreq
// if wordFreq[char] is > than letterFreq then return false.
// return true

// add whatever parameters you deem necessary & write doc comment

/**  determins if the word string can be constructed from the letters string */
function canConstructWord(word, letters) {
  if (letters.length < word.length) {
    return false;
  }

  const wordFreqs = getFrequencyCounter(word);
  const lettersFreqs = getFrequencyCounter(letters);

  for (let char in wordFreqs) {
    if (!lettersFreqs[char] || wordFreqs[char] > lettersFreqs[char]) {
      return false;
    }
  }
  return true;
}

/** creates frequency counter given an array like input. */
function getFrequencyCounter(items) {
  const freqs = {};
  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }
  return freqs;
}
