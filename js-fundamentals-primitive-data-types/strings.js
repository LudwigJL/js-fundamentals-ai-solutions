// do not edit these lines

/* eslint-disable no-unused-vars */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
/* eslint-disable no-unused-vars */
const firstName = 'Jane'
/* eslint-disable no-unused-vars */
const secondName = 'Smith'

// TODO: Replace null in the lines below using Javascript string operations
//         and the variables above so that the tests pass.
//       eg  twoJanes = firstName + firstName
//       NOT twoJanes = "JaneJane"

// 1. Set this variable to firstName and secondName concatenated
let fullName = null

fullName = firstName + ' ' + secondName;

// 2. Set this variable to the 10th character of the alphabet variable
let tenthCharacterOfAlphabet = null

tenthCharacterOfAlphabet = alphabet[9];

// 3. Set this variable by calling a method on the alphabet variable to transform it to lower case
let lowerCaseAlphabet = null

lowerCaseAlphabet = alphabet.toLowerCase();

// 4. Set this variable by using a property on the alphabet variable to get it's length
let numberOfLettersInAlphabet = null

numberOfLettersInAlphabet = alphabet.length;

// do not edit the exported object.
module.exports = {
  a: fullName,
  b: tenthCharacterOfAlphabet,
  c: lowerCaseAlphabet,
  d: numberOfLettersInAlphabet
}
