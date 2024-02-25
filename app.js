//express
const express = require("express")
const app = express()

// app.get. this simply represents what the user is trying to do either reading or writting data
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.listen(5000, ()=>{
  console.log("server is listenning on port 5000...");
})

app.get('/', (req,res)=>{
  res.status(200)
  res.send("home page")

})

app.get("/about", (req, res)=>{
  res.status(200)
  res.send("about page")
})

app.all('*', (res,req)=>{
  res.status(200).
  res.send("resource not found")
})