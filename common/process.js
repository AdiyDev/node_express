const dotenv = require('dotenv')
dotenv.config()

console.log(process.pid)

console.log(process.env.PORT)
console.log(process.env.NODE_ENV)
console.log(process.argv) //arguments

// if (some true) {logic} else {process.exit()}