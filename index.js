console.log("Hello from our very own npm package.")

const sayMyName = name => console.log(`Your name is ${name}.`)
const showage = age => console.log(age)
const test3 = age => console.log(age)
const test4 = () => console.log('test4')


module.exports = { sayMyName, showage, test3, test4 }