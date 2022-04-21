var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

app.get("/node-capture", function(req, res) {
    res.status(200).json({message: "!st step Custom Activity"});
});

app.listen(PORT, function() {
    console.log("listen on port" + PORT);
});