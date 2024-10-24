// do not edit these lines
const aNull = null
const undef = undefined
const yes = true
const no = false

// TODO: 1. Write a function that returns the type of its argument with a value of 'null' rather than 'object' for null
function getType(v) {
  // Extra check for null as typeof null is 'object'!
  if (v === null) return 'null'
  else return typeof v
}

// do not edit the exported object.
module.exports = {
  a: getType(aNull),
  b: getType(undef),
  c: getType(yes),
  d: getType(no)
}
