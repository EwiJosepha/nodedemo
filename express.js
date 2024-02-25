const express = require("express")
const path = require('path')
const app = express()

app.use(express.static("./navbar-app"))

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get("/", (req,res)=>{
  res.sendFile(path.resolve(__dirname, "./navbar-app/indexx.html"))
})
app.get("/about", (req,res)=>{
  res.send("about page")
})
app.all("*", (req,res)=>{
  res.status(404).send("resourse not found")
})

app.listen(5000, ()=>{
  console.log("server is listenning on port 5000...");
})