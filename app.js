const { readFile } = require("fs")
const util = require("util")
// const readfilepromis = util.Promise(readFile)

// u have to chechout the util method in asynnchronuos method

//handling asynchronous with promises

const getTxt = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    })
  })
}

// getTxt("./content/first.txt").then((res) => console.log(res)).catch((err) => console.log(err)).then
// getTxt("./content/second.txt").then((res) => console.log(res)).catch((err) => console.log(err)).then

//handling with aync await keywords

 async function start () {

  try{
    const firstfile = await getTxt("./content/first.txt")
    console.log(firstfile);
  }
  catch{
console.log("err");
  }

}

start ()
