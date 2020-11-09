var express = require("express");

var app = express();

app.use("/node_modules",express.static("/usr/src/sportstore/node_module"));
app.use("/",express.static("/usr/src/sportstore/app"));

app.listen(3000, function() {console.log("serwer HTTP nasłuchuje na porcie 3000.")})