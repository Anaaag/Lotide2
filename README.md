# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anaaa/lotide2`

**Require it:**

`const _ = require('@anaaa/lotide2');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: A function that will take in two arrays and compare their values to test if they are equal, will then print out a message of either success or failure.
* `function2(assertEqual)`: A function that compares two values (primitive types) and prints out a message of either success or failure.
* `function3(assertObjectsEqual)`: A function that will take in two objects and test if they are equal. It will then print out a message of either success or failure. 
* `function4(countLetters2)`: A function that will take in a sentence (string), and return a count of each of the letters in that sentence. 
* `function5(countOnly)`: A function that will take in two arguments an array and object, it will return an object containing counts of everything that the input object listed. 
* `function6(eqArrays)`: A function that takes in two arrays and returns true or false, based on a perfect match.
* `function7(eqObjects)`: A function that will take in two arguments, two objects and return either true or false, based on a perfect match.
* `function8(findKey)`: A function that takes in two arguments an object and a callback. It will scan the object and return the first key, to which the callback returns a truthy value.
* `function9(findKeyByValue)`: A function that will take in two arguments an object and a value. It will scan the object and return the first key which contains the given value.
* `function10(head)`: A function that retrieves the first element in an array. 
* `function11(index)`: An object for all of our lotide functions. 
* `function12(letterPositions)`: A function that will take in a string and return all the indices in the string where each character is found.
* `function13(map)`: A function that will take in two arguments an array to map and a callback function.  The map function will return a new array based on the results of a callback function.
* `function14(middle)`: A function that will take in an array and return the middle-most element(s) of that array. If array only has one or two elements will return an empty array. 
* `function15(tail)`: A function that retrieves all elemements except the first element of an array.
* `function16(takeUntil)`: A function that will take in two arguments, an array and a callback. It will return a slice of the array with elements of the array taken from the start, it will keep going until the callback returns a truthy value.
* `function17(without)`: A function that will take in two arguments a source (array) and a itemsToRemove (array). It will return a new array, removing unwanted elements. 