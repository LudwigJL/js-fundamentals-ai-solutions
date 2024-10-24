// Do not edit the variables below directly
const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

// 1. Add Fred to the names array

const addFred = () => {
  names.push('Fred')
}

addFred(); 

// 2. Add 4 to the end of the numbers array

const addFourToNumbers = () => {
  numbers.push(4)
}

addFourToNumbers();

// 3. Add Rio to the start of the cities array

const addRioToCities = () => {
  cities.unshift('Rio')
} 

addRioToCities();

// 4. Remove the first colour from the colours array

const removeFirstColour = () => { 
  colours.shift()
}

removeFirstColour();

// 5. Remove the last item from the keys array

removeLastKey = () => {
  keys.pop()
}

removeLastKey();

// 6. Remove Jordan from the countries array

const removeJordan = () => { 
  countries.splice(1, 1)
}

removeJordan();

// 7. Remove the last fruit from the fruits array and store it in pear below
let  pear = undefined

const removeLastFruit = () => { 
  pear = fruits.pop()
}

removeLastFruit();

// Do not change the code below
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear
}
