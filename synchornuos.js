// const { log } = require('console');
// const os = require('os')
// //info abt current user
// const user = os.userInfo()
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`system uptime is ${os.uptime()} seconds`);
// const curentos = {
//   name: os.type(),
//   release: os.release(),
//   totalmem: os.totalmem(),
//    freemem: os.freemem()
// }

// console.log(curentos);

//synchronuous file modules

const {readFileSync,  writeFileSync } = require("fs")
console.log("start");
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
console.log(`${first}, ${second}`);

writeFileSync("./content/result.txt", `here is the result`, {flag: 'a'})

