const http = require("http")
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("welcome to our home page today")
  }


  if (req.url === "/about") {
    res.end('this is the about page')
  }

  res.end(`<h1>oups!</h1>
  <p> we cant seem to find your page </P>
  <a href="/">Back Home </a>`)
})

server.listen(5000)