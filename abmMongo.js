var app = require('express')();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ABMNode");
    dbo.collection("productos").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

app.get('/', function (req, res) {
    res.send("Hello puto!");
});

app.listen(3000);