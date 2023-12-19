const http = require('http')
const { readFileSync } = require("fs")

const { json } = require("react-router-dom")

const homepage = readFileSync('./navbar-app/indexx.html')
const styles = readFileSync('./navbar-app/styles.css')
const scriptt = readFileSync('./navbar-app/browserapp.js')
const server = http.createServer((req, res) => {
  const url = req.url
  if (url === "/") {
    console.log("user hit the server");
    res.writeHead(200, { "content-type": "text/html" })
    res.write(homepage)
    res.end()
  }

 
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write(homepage)
    res.end()

  }else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" })
    res.write(styles)
    res.end()
  }

   else if (url === "/browserapp") {
    res.writeHead(200, { "content-type": "text/javasript" })
    res.write(scriptt)
    res.end()
  }
   else {
    res.writeHead(404, { "content-type": "text/html" })
    res.write(`<h1>Page not found</h1>`)
    res.end()
  }

})

server.listen(5000)

// data  types in node json

// null, undefined, null, nuber, string, bolean, symbol

// Nb all js objeects hv what we call prototypes
// a prototype is an implicit reference to another object

const students = {
  name: "josepha",
  age : 26
}

students.name

//funnctions have a call method. 
 function fn () {console.log()}

inheritance

const wolf = {
  howl: fynctio
}

