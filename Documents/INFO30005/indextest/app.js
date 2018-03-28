const express = require('express');
const app = express();

app.use("/public",express.static(__dirname + "/public"));
app.set('view engine','ejs');

const router = require('./routes/routes');
app.use(router);

app.listen(3000, function(){
    console.log("server started at port 3000");
});