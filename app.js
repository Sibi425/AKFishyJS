const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs');
app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));


})



app.listen(3000, function(){
    console.log("Server up and running.")
})