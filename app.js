//streams

// WritableStream: use to write data sequentially
// ReadableStream; use to write sequentialy
// DuplexStream: read and write
// TransformStream: edit

// 64kb is the default size of the buffer

const {createReadStream} = require("fs")
const stream = createReadStream("./content/big.txt",{highWaterMark:30000,encoding: "utf8" })

stream.on("data", (result)=>{
  console.log(result);
})

stream.on("error", (err)=>{
  console.log(err);
})