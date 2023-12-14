const http = require('http')
const {readFileSync} = require("fs")

const homepage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const scriptt = readFileSync('./navbar-app/browserapp.js')
const server = http.createServer((req, res) => {
  const url = req.url
  if (url === "/") {
    console.log("user hit the server");
    res.writeHead(200, { "content-type": "text/html" })
    res.write(homepage)
    res.end()
    res.writeHead(200, { "content-type": "text/styles" })
    res.write(styles)
    res.end()
    res.writeHead(200, { "content-type": "text/script" })
    res.write(scriptt)
    res.end()
  } else if(url === "/about") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write(`<h1>about page today</h1>`)
    res.end()

  }else{
    res.writeHead(404, { "content-type": "text/html" })
    res.write(`<h1>Page not found</h1>`)
    res.end()
  }

})

server.listen(5000)