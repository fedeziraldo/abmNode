var express=require('express')
var app =express();
var bodyParser = require('body-parser');
var controlador = require('./controlador.js');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', controlador);
app.listen(3000);

/* app.get('/consulta', function (req, res) {
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
}) */

/* app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/form',function(req,res){
    console.log(req.body.email)
    res.sendFile(path.join(__dirname+'/articulos.html'));
}) */
