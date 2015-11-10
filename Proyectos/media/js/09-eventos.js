Ext.define("ElementoConEvento",{
	extend: "Ext.util.Observable",
	constructor: function(config){
		this.nombre = config.nombre;
		this.addEvents(['cambio']);
		this.listeners = config.listeners;
		this.callParent(arguments);
	},
	setNombre: function(nombre){
		this.nombre = nombre;
		this.fireEvent('cambio');
	}
});


Ext.onReady(function(){
	Ext.get("principal")
		.on(
			"click", 
			function(){
				console.info("pulsado el div");
			}
		);

	Ext.create("Ext.Button",{
		text: "Pulsame!!",
		renderTo: "principal",
		/*handler: function(el, event){
			event.stopPropagation();
			console.info("pulsado el boton");
		}*/
		listeners:{
			click: function(el, event){
					event.stopPropagation();
					console.info("pulsado el boton");
			}
		}
	});

	var elemento = Ext.create("ElementoConEvento",{
		nombre: "victor",
		listeners: {
			cambio: function(){
				console.info("Se cambio el valor del nombre del elemento");
			}
		}
	});

	elemento.setNombre("Juan");

});