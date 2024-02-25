'use strict'

const {Router}= require('express')
const router = Router()

const root = `<html>
<head>
  <style>
    body {
      background : #333;
      margin : 1.25rem;
    }
    h1 {
      color: #EEE;
      font-family: sans-serif;
    }
  </style>
</head>
<body>
  <a href="/hello">Hello</a>
</body>
</html>` 

router.get('/', (req, res)=>{
  res.send(root)
})

module.exports = router