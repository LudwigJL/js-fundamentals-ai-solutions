// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
let fourthTeacher = undefined

const changeFourthTeacher = () => {
  fourthTeacher = teachers[3]
}

changeFourthTeacher();

// 2. Replace the fifth teacher in the teachers array with 'Patrick'

const replaceFifthTeacher = () => {
  teachers[4] = 'Patrick'
}

replaceFifthTeacher();

// 3. Remove the last teacher from the array and save them in lastTeacher below
let lastTeacher = undefined

const removeLastTeacher = () => {
  lastTeacher = teachers.pop()
}

removeLastTeacher();

// 4. Remove the first teacher from the array and save them in firstTeacher below
let firstTeacher = undefined

const removeFirstTeacher = () => {
  firstTeacher = teachers.shift()
}

removeFirstTeacher();


// 5. Add a teacher named 'Vanessa' to the end of the teachers array

const addTeacher = () => {
  teachers.push('Vanessa')
}

addTeacher();

// 6. Remove 'Ed' from the teachers array

const removeEd = () => {
  teachers.splice(0, 1)
}

console.log(teachers)

removeEd();


// 7. Add a teacher named 'Sarah' to the beginning of the teachers array

const addSarah = () => {
  teachers.unshift('Sarah')
}

addSarah();


console.log(teachers)

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
