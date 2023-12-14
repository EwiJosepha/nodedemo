const http = require('http')
const server = http.createServer((req,res)=>{
  res.end('home page')
})

server.listen(5000)