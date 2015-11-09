//Define
Ext.define("Persona",{
	constructor: function(config){
		//Caracteristicas
		this.nombre = config.nombre;
		this.apellido = config.apellido;
	},
	//Metodos
	saludar: function(){
		console.info("Hola " + this.nombre + "!!!!");
	}
});

Ext.define("Cliente",{
	extend: "Persona",
	constructor: function(config){
		//Caracteristicas
		this.id = config.id;
		//Invocacion al padre
		this.callParent(arguments);
	}
});

Ext.onReady(function(){

	//Creates
	var p = Ext.create("Cliente",{
		id: 1,
		nombre: "Victor",
		apellido: "Herrero"
	});

	p.saludar();
});