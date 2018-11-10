var app = require('express');
var rutas = app.Router();
var path= require("path");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var producto=require("./modelo/producto.js");
var nuevoProducto=new producto();
nuevoProducto.setprecio(500);
console.log(nuevoProducto.getprecio())
nuevoProducto.setdescripcion('buzo');
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
rutas.get('/carga',function(req,res){


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ABMNode");
    var myobj = { precio: req.producto.precio, descripcion: req.producto.descripcion };
    dbo.collection("productos").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("exitoso");
      db.close();
    });
  });
})
rutas.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/vista/index.html'));
});
rutas.post('/form',function(req,res){
    console.log(req.body.email)
    res.sendFile(path.join(__dirname+'/vista/articulos.html'));
})

module.exports=rutas;