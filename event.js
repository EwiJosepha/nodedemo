const EventEmitter = require('events')
const customEmmiter = new EventEmitter()

customEmmiter.on('response', (name, id)=>{
  console.log(`my name is ${name} and i am ${id}`);
})

customEmmiter.emit('response',"john",34)
// customEmmiter.on('response', ()=>{
//   console.log(` some data received`);
// })

//you can use the on method as many times as possible passing on different logic to the functions 

//buh the emit function is just use once after the function has been listen for.


// recall that the customEmmiter can aswell receive parameters


const http = require("http")
const server = http.createServer()
server.on('request', (req,res)=>{
  res.end('welcome')
})

server.listen(5000)