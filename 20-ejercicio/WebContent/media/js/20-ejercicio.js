Ext.define("Producto",{
	extend: 'Ext.Component',
	constructor: function(config){
		this.idProducto = config.idProducto;
		this.nombre = config.nombre;
		this.descripcion = config.descripcion;
		this.data = config;
		this.callParent(arguments);//Se recoge la propiedad tpl, y se rellena con lo que hay en la propiedad data
	},
	tpl: new Ext.XTemplate(
		'<li>',
			'<div>{idProducto}-{nombre}-{descripcion}</div>',
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
		{
			isLed: function(tipo){
				return tipo == 'Led';
			}
		}
	)
});


Ext.onReady(function() {
	Ext.create('Ext.container.Viewport',{
		layout: 'fit',
		items: [
		        {
		        	xtype: 'form',
		        	layout: 'border',
		        	items: [
		        	        {
		        	        	xtype: 'panel',
		        	        	id: 'principal',
		        	        	region: 'center'
		        	        },
		        	        {
		        	        	xtype: 'panel',
		        	        	region: 'west',
		        	        	width: 300,
		        	        	layout: 'accordion',
		        	        	items: [
		        	        	        {
		        	        	        	title: 'Formulario',
		        	        	        	xtype: 'form',
		        	        	        	url: 'servicio.json',
		        	        	        	items: [
		        	        	        	        {
		        	        	        	        	xtype: 'textfield',
		        	        	        	        	fieldLabel: 'Campo 1',
		        	        	        	        	name: 'campo1'
		        	        	        	        },
		        	        	        	        {
		        	        	        	        	xtype: 'textfield',
		        	        	        	        	fieldLabel: 'Campo 2',
		        	        	        	        	name: 'campo2'
		        	        	        	        }
		        	        	        	],
		        	        	        	buttons: [
		        	        	        	          {
		        	        	        	        	  text: 'Enviar',
		        	        	        	        	  handler: function(){
		        	        	        	        		var formulario = this.up('form').getForm();
		        	        	        	        		
		        	        	        	        		formulario.submit({
		        	        	        	        			success: function(form, action){
		        	        	        	        				
		        	        	        	        				var json = action.result;
		        	        	        	        				
		        	        	        	        				var informacion = json.data;
		        	        	        	        				
		        	        	        	        				Ext.Array.each(informacion, function(producto){
		        	        	        	        					var componenteProducto = Ext.create('Producto', producto);
		        	        	        	        					Ext.getCmp('principal').add(componenteProducto);
		        	        	        	        				});
		        	        	        	        			},
		        	        	        	        			failure: function(form, action){
		        	        	        	        				
		        	        	        	        			}
		        	        	        	        		});
		        	        	        	        		
		        	        	        	        	  }
		        	        	        	          }
		        	        	        	]
		        	        	        },
		        	        	        {
		        	        	        	title: 'Otro',
		        	        	        	xtype: 'panel'
		        	        	        }
		        	        	]
		        	        }
		        	]
		        }
		]
		
	});
});