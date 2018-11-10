var app = require('express');
var rutas = app.Router();
var path= require("path");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

rutas.get('/consulta', function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ABMNode");
        dbo.collection("productos").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result)
        });
    });
})

rutas.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'vista/index.html'));
});
rutas.post('/form',function(req,res){
    console.log(req.body.email)
    res.sendFile(path.join(__dirname+'vista/articulos.html'));
})

module.exports=rutas;