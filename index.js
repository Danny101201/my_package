console.log("Hello from our very own npm package.")

const sayMyName = name => console.log(`Your name is ${name}.`)
const showage = age => console.log(age)

module.exports = { sayMyName, showage }