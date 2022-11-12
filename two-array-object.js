"use strict";
// add whatever parameters you deem necessary & write docstring

// accepting two arrays: one with keys & one with values
// returning an object made from the two array's keys and values
// initialize an empty object to hold our keys and values
// iterate through the keys array with a for (let i) loop
// assign the current element as the key in the object and the corresponding
// element from the values array as the key value (if the corresponding value
// is undefined, assign null as the key value instead)
// return the object

function twoArrayObject(keys, values) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    const currentValue = values[i];

    result[currentKey] = currentValue === undefined ? null : currentValue;
  }

  return result;
}
