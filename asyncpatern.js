
const _ = require('lodash')
//using lodash
const items = [1,[2, [3 , [4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems);
console.log("hello people");

const { readFile, writeFile } = require("fs").promises
// const util = require("util")
// const readfilepromis = util.promisify(readFile)
// const writefilePromise = util.promisify(writeFile)

async function start () {

  try{
    const firstfile = await readFile("./content/first.txt", "utf8")
    const secondfile = await readFile("./content/second.txt" , "utf8")
   
    await writeFile("./content/awaitresfile.txt", "this is awesome", {flag: "a"})
  }
  catch{
console.log("err");
  }

}

start ()
// const readfilepromis = util.Promise(readFile)

// u have to chechout the util method in asynnchronuos method

//handling asynchronous with promises

// const getTxt = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data);
//       }
//     })
//   })
// }

// getTxt("./content/first.txt").then((res) => console.log(res)).catch((err) => console.log(err)).then
// getTxt("./content/second.txt").then((res) => console.log(res)).catch((err) => console.log(err)).then

//handling with aync await keywords

//  async function start () {

//   try{
//     const firstfile = await getTxt("./content/first.txt")
//     console.log(firstfile);
//   }
//   catch{
// console.log("err");
//   }

// }

// start ()



