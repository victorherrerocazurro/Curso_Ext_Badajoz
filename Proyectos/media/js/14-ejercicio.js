//------------Pedido----------------

Ext.define("Pedido",{
	extend: "Ext.Component",
	alias: 'widget.pedido',
	tpl: new Ext.XTemplate(
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
	),
	constructor: function(config){
		this.id = config.id;
		this.cliente = config.cliente;
		this.productos = new Array();
		this.callParent(arguments);
	},
	addProductos: function(productos){
		this.productos.push(productos);
		this.update(this);
	},
	borrarProducto: function(posicion){
		this.productos.remove(posicion);
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

	//-------------------Panel-----------------

	Ext.create("Ext.container.Viewport",{
		items: [
			{
				xtype: 'panel',
				items: [
					{
						xtype: 'pedido',
						id: 'pedido_1',
						cliente: cliente
					}
				],
				tbar: {
					xtype: 'toolbar',
					items: [
						{
							text: 'boton',
							handler: function(){
								Ext.create(
									'Ext.window.Window',{
										id: 'formularioAltaProducto',
										width: 200,
										height: 200,
										html: 'Id: <input type="text" name="id"/>' +
											'Nombre: <input type="text" name="nombre"/>' +
											'Descripcion: <input type="text" name="descripcion"/>' +
											'<input type="button" value="guardar" onclick="guardar()"/>'
									}
								).show();
							}
						}
					]
				}
			}
		]
	});

	//var componentePedido =Ext.getCmp('pedido_1');
	var componentePedido = Ext
				.ComponentQuery.query('pedido')[0];

	componentePedido.addProductos(teclado);
	componentePedido.addProductos(raton);
});

function guardar(){
	var inputId = Ext.DomQuery.select('input[name="id"]')[0];
	var inputNombre = Ext.DomQuery.select('input[name="nombre"]')[0];
	var inputDescripcion = Ext.DomQuery.select('input[name="descripcion"]')[0];

	var componentePedido = Ext
				.ComponentQuery.query('pedido')[0];

	var producto = Ext.create("Teclado",{
		id: inputId.value,
		nombre: inputNombre.value,
		descripcion: inputDescripcion.value
	});

	componentePedido.addProductos(producto);

	var formularioAltaProducto = Ext
				.ComponentQuery.query('window#formularioAltaProducto')[0];	

	formularioAltaProducto.hide();
}