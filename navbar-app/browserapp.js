const accesskey = 'z6T7x6sCQoqofSxUH49y7JAPgvUYgK072xGpfNbJ2s8'
const inputt = document.getElementById('inputt')
const inputfield = document.getElementById('input')
const searchresult = document.getElementById('search-result')
const display = document.getElementById('display')
const btn = document.getElementById('btn')
const shownorebtn = document.getElementById('search-more')
const dispa = document.getElementById("displa")

let keyword = ""
let page= 1

async function promis () {
  keyword = inputfield.value
 
  const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12 `

  const response = await fetch(url)
  const data = await response.json()
  // console.log(data);

  if(page === 1){
    display.innerHTML = " "
  }

 if(keyword === ""){
  dispa.innerHTML = `<h2 id="s">please enter something in the field provided</h2>`
 }

 
  const results = data.results
  results.map((result)=>{
    const image = document.createElement('img')
    image.src = result.urls.small
    const imglink = document.createElement('a')
    imglink.href = result.links.html
    imglink.target ="_blank" 
    imglink.appendChild(image)
    display.appendChild(imglink)
  })
  shownorebtn.style.display = "block"

}

inputt.addEventListener('submit', (e)=>{
  e.preventDefault()
  page=1
  promis()
})

shownorebtn.addEventListener("click", ()=>{
  page++;
  console.log(page);
 promis()
})

//seting up our server with filemodules (fs) or file system.

// const http = require('http')
// const { readFileSync } = require("fs")

// const { json } = require("react-router-dom")

// const homepage = readFileSync('./navbar-app/indexx.html')
// const styles = readFileSync('./navbar-app/styles.css')
// const scriptt = readFileSync('./navbar-app/browserapp.js')
// const server = http.createServer((req, res) => {
//   const url = req.url
//   if (url === "/") {
//     console.log("user hit the server");
//     res.writeHead(200, { "content-type": "text/html" })
//     res.write(`<h1>Home page has been triggered
//     </h1>`)
//     res.end()
//   }

 
//   else if (url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" })
//     res.write(homepage)
//     res.end()

//   }else if (url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" })
//     res.write(styles)
//     res.end()
//   }

//    else if (url === "/browserapp") {
//     res.writeHead(200, { "content-type": "text/javasript" })
//     res.write(scriptt)
//     res.end()
//   }
//    else {
//     res.writeHead(404, { "content-type": "text/html" })
//     res.write(`<h1>Page not found</h1>`)
//     res.end()
//   }

// })

// server.listen(5000)



