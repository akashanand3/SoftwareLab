const express = require("express");
const path = require('path');
const router = express.Router();
// Setting the app
const app = express();
// Using public css
app.use(express.static('public'));


// Getting home 
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

// add the router
app.use('/', router);
app.listen(process.env.port || 3000);
 
console.log('Running at Port 3000');

