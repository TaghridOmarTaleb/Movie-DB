
const express = require('express')
const app = express()

app.get('/npmjs.org', function (req, res) {
  res.send('ok')
})

app.get('/time', function (req, res) {
  res.send("status:200, message: it's "+ currenttime)
})

app.get('/test', function (req, res) {
  res.send('{status:200, message:"ok"}')
  
})
let time = new Date();
let currenttime = time.getHours()+
              //":"+time.getMinutes()+
              ":"+ time.getSeconds();

app.listen(3000)