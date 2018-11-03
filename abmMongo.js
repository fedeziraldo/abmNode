var app = require('express')();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var bodyParser = require('body-parser');
var path    = require("path");

app.post('/consulta', function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ABMNode");
        dbo.collection("productos").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.send(result)
        });
    });
})
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/form',function(req,res){
    console.log(req.body.email)
})
app.listen(3000);