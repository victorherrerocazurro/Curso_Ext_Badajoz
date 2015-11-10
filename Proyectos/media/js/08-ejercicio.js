//------------Pedido----------------

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
	},
	renderTo: function(el){
		//this es el data del ejemplo
		var tpl = new Ext.XTemplate(
			'<div id="pedido_{id}">',
				'<div id="cliente_{cliente.id}">',
					'<div>{cliente.nombre}</div>',
					'<div>',
						'<div>{cliente.direccionPostal.calle}</div>',
						'<div>{cliente.direccionPostal.municipio}</div>',
						'<div>{cliente.direccionPostal.provincia}</div>',
						'<div>{cliente.direccionPostal.numero}</div>',
						'<div>{cliente.direccionPostal.cp}</div>',
					'</div>',
				'</div>',
				'<ul id="productos">',
				'<tpl for="productos">',
					'<li>',
						'<div>{id}-{nombre}-{descripcion}</div>',
						'<tpl if="qwerty">',
							'<div>querty</div>',
						'</tpl>',
						'<tpl if="optico">',
							'<div>optico</div>',
						'</tpl>',
						'<tpl if="this.isLed(tipo)">',
							'<div>Led</div>',
						'</tpl>',
					'</li>',
				'</tpl>',
				'</ul>',
			'</div>',
			{
				isLed: function(tipo){
					return tipo == 'Led';
				}
			}
		);

		tpl.append(el,this);
	}
});

//------------Cliente----------------

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

Ext.define("DireccionPostal",{
	constructor: function(config){
		this.calle = config.calle;
		this.municipio = config.municipio;
		this.provincia = config.provincia;
		this.numero = config.numero;
		this.cp = config.cp;
	}
});

//------------Producto----------------

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
		id: 2,
		nombre: "Raton optico para mac/win y zurdos",
		descripcion: "Raton optico para mac/win y zurdos de calidad",
		optico: true,
		mac: true,
		windows: true,
		zurdos: true
	});

	var monitor = Ext.create("Monitor",{
		id: 3,
		nombre: "Monitor Led",
		descripcion: "Monitor Led de 32''",
		tamanno: 32,
		tipo: 'Led'

	});

	pedido.addProductos(teclado);
	pedido.addProductos(raton);

	var pedido2 = Ext.create("Pedido",{
		id: 2,
		cliente: cliente
	});

	pedido2.addProductos(monitor);

	//console.info("deberia imprimir true: " + pedido.productos[0].qwerty);

	pedido.renderTo(Ext.getBody());

	pedido2.renderTo(Ext.getBody());

});