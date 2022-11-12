"use strict"

//accepts two positive integers
// returning a boolean if the two integers have the same frequency of digits
//convert the two integers to strings
//make a frequency counter of boths string
//compare both frequency counters to see if their keys/values are the same
//if they are not the same then return false
//return true after successfully comparing



/** check if two numbers have the same frequency of digits.**/
function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();


  const num1Freq = getFrequencyCounter(num1Str);
  const num2Freq = getFrequencyCounter(num2Str);

  for(let num in num1){
    if(num1[num] !== num2[num]){
      return false
    }
  }
  return true
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
