// const amount = 12
// if(amount > 10) {
//   console.log("small number");
// }else{
//   console.log('large number');
// }

// console.log(`hey it is my first node app`);

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

// setInterval(()=>{
//   console.log("hello world");
// }, 1000)
const names = require("./firstmodule")
const sayhi = require("./utility")
const data = require("./alternativedata")


sayhi(names.johnal)
console.log(data);

