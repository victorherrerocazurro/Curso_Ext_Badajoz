//Mutacion de los objetos en JS
var obj = "Este es un objeto";

obj.nombre = "Victor";

obj.saludar = function(){
	console.info("Hola");

	var obj2 = "otroa vartiable global";
}

var obj1 = "Otro objeto String";

//-------------Clases-------------

//Declaracion de una clase

//Funcion constructora
Persona = function(nombre, apellido){
	this.nombre = nombre;
	this.apellido = apellido;

	//Este metodo ocupa memoria para cada instancia
	//this.saludar = function(){
	//	console.info("Hola " + this.nombre + "!!!!");
	//};
};

//Prototype
Persona.prototype.saludar = function(){
	console.info("Hola " + this.nombre + "!!!!");
};

Cliente = function(id, nombre, apellido){
	//arguments[0] => id
	//super(nombre, apellido);

	//Invoca la funcion constructora asociada 
	//al prototype de this
	//equivalente al super
	Persona.call(this, nombre, apellido);

	this._id = id;

	var _id = id; //Privado

	this.getId = function(){
		return _id;
	};
}

//Equivalente al extends para las funciones
Cliente.prototype = new Persona; 

//-------------Fin Clases-------------

//Instanciacion de un objeto de una determinada tipologia

var p = new Persona("Victor", "Herrero");

p.saludar();

p.despedir = function(){
	console.info("Adios " + this.nombre + "!!!!");	
}

//p.nombre = "Pedro";// Esto se ha de evitar
//p.setNombre("Pedro");

//p.nombre = function(){}

p.despedir();

var p1 = new Persona("Juan", "Martinez");

p1.saludar();

//p1.despedir(); //Esto da error

var c = new Cliente(1, "Pedro", "Herrero", "v@v.com");

c.saludar();