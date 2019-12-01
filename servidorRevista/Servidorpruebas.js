const App=require('./configuraciones');

const usuarios=require("./modelos/usuarios");



//enviar info o crear registro
App.post('/usuarios', function(req, res, next){

  console.log("el nombre del nuevo usuarios es : "+req.body.nombre);
 
  const objdocumento= new usuarios(req.body);
  objdocumento.save();
	
})


//para listar de la base de datos 

App.get('/listarvehiculo/placa', async(req, res,next)=>{
	const listav=await vehiculos.find();
	res.json(listav);
});

//para listar todos obtener info
App.get('/inicioSecion/email/:email', function(req, res){
	var mensaje=" no se encontro el usuario";
	for(var llave in datos)
	{
	  if(datos[llave].email==req.params.email)
		mensaje="se encontro el usuario"
	}
	res.json(mensaje);
});



//actualizar info
App.put('/asignacion/:id', function(req, res, next){});
//para eliminar info 
App.delete('/usuarios/:id', function(req, res, next){});

