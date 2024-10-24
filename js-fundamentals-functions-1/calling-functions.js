// do not edit the below

/* eslint-disable no-unused-vars */
function sayHello() {
  return 'Hello'
}

/* eslint-disable no-unused-vars */
function sayHelloTo(name) {
  return 'Hello ' + name + '!'
}
/* eslint-disable no-unused-vars */
function sayHelloManyTimes(name, times) {
  let hello = ''
  for (let i = 0; i < times; i++) {
    hello += 'Hello ' + name + '!'
  }

  return hello
}

// TODO: Add and update code here to make the tests pass

// 1. Set this variable to 'Hello' by calling the sayHello function
let hello = ''

hello = sayHello();

// 2. Set this variable variable to 'Hello Jane' calling the sayHelloTo function
let helloToJane = 'Jane'

helloToJane = sayHelloTo(helloToJane);

// 3. Set this variable to 'Hello Bob! Hello Bob! Hello Bob!' calling the sayHelloManyTimes function
let helloToBob3Times = 'Bob'

helloToBob3Times = sayHelloManyTimes(helloToBob3Times, 3);

// do not edit below this line
module.exports = {
  a: hello,
  b: helloToJane,
  c: helloToBob3Times
}