var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
/* Configuracion del analizador del cuerpo (request) y parametros (responde) */
app.use(bodyParser.json());//body parser use JSON data
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
function permitirCrossDomain(req, res, next)
{ 
  //en vez de * se puede definir SOLO los origenes que permitimos
  res.header('Access-Control-Allow-Origin','*');
  //metodos http permitidos para CORS
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(permitirCrossDomain);

app.listen(port);
console.log('Servidor escuchando por puerto:'+port);


mongoose.connect('mongodb://127.0.0.1:27017/revista',{
    useNewUrlParser: true
}).then(()=>{
    console.log("exitio al conectarse a la base de datos de la revista ");
}).catch(err =>{
    console.log('no se pudo conectar',err);
    process.exit();
})


module.exports=app;