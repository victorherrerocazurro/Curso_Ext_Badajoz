Ext.define("Cliente",{
	constructor: function(config){
		this.id = config.id;
		this.nombre = config.nombre;
		this.direccionPostal = config.direccionPostal;
	},
	toString: function(){
		return "Cliente[id:" + this.id + 
				",nombre:" + this.nombre + 
				",direccionPostal:" + this.direccionPostal + "]"
	},
	toJson: function(){
		return JSON.stringify(this);
	}
});

Ext.define("Pedido",{
	constructor: function(config){
		this.id = config.id;
		this.cliente = config.cliente;
		this.productos = new Array();
	},
	addProductos: function(productos){
		this.productos.push(productos);
	},
	borrarProducto: function(posicion){
		this.productos.remove(posicion);
	}
});

Ext.define("Producto",{
	constructor: function(config){
		this.id = config.id;
		this.nombre = config.nombre;
		this.descripcion = config.descripcion;
	},
	toString: function(){

	}
});

Ext.define("Teclado",{
	extend: "Producto",
	constructor: function(config){
		this.qwerty = config.qwerty;
		this.callParent(arguments);
	},
	toString: function(){

	}
});

Ext.define("Raton",{
	extend: "Producto",
	constructor: function(config){
		this.optico = config.optico;
		this.mac = config.mac;
		this.windows = config.windows;
		this.zurdos = config.zurdos;
		this.callParent(arguments);
	}
});

Ext.define("Monitor",{
	extend: "Producto",
	constructor: function(config){
		this.tipo = config.tipo;
		this.tamanno = this.tamanno;
		this.callParent(arguments);
	}
});

Ext.define("DireccionPostal",{
	constructor: function(config){
		this.calle = config.calle;
		this.municipio = config.municipio;
		this.provincia = config.provincia;
		this.numero = config.numero;
		this.cp = config.cp;
	}
});


Ext.onReady(function(){
	var direccionPostal = Ext.create("DireccionPostal",{
		calle: "Mayor",
		municipio: "Badajoz",
		provincia: "Badajoz",
		numero: 1,
		cp: "06001"
	});

	var cliente = Ext.create("Cliente",{
		id: 1,
		nombre: "Victor",
		direccionPostal: direccionPostal
	});

	var pedido = Ext.create("Pedido",{
		id: 1,
		cliente: cliente
	});

	var teclado = Ext.create("Teclado",{
		id: 1,
		nombre: "Teclado QWERTY",
		descripcion: "Un teclado QWERTY de calidad",
		qwerty: true
	});

	var raton = Ext.create("Raton",{
		id: 1,
		nombre: "Raton optico para mac/win y zurdos",
		descripcion: "Raton optico para mac/win y zurdos de calidad",
		mac: true,
		windows: true,
		zurdos: true
	});

	pedido.addProductos(teclado);
	pedido.addProductos(raton);

	console.info("deberia imprimir true: " + pedido.productos[0].qwerty);

});