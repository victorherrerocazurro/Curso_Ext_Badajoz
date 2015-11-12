//----------------Modelo---------------
Ext.define('Pedido', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'total',  type: 'int'}
    ]
});

Ext.define('Producto', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'nombre',  type: 'string'},
        {name: 'descripcion',  type: 'string'},
        {name: 'precio',  type: 'int'}
    ]
});

//-----------------Store------------------
//Store
var productosStore = Ext.create('Ext.data.Store', {
    autoLoad: false,
    model: 'Producto',
    proxy: {
        type: 'ajax',
        url: '',//productos.json
        reader: {
            type: 'json',
            root: 'productos',
            idProperty: 'id',
            successProperty: 'meta.success'
        }
    }
});

Ext.onReady(function() {

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [
            {
                xtype: 'panel',
                layout: 'accordion',
                region: 'west',
                width: 250,
                items: [
                    {
                        xtype: 'form',
                        url: 'pedido.json',
                        title: 'Consulta Pedidos',
                        items:[
                            {
                                xtype: 'textfield',
                                name: 'pedido',
                                fieldLabel: 'Pedido'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Buscar',
                                handler: function(){
                                    this.up('form').getForm().submit({
                                        success: function(form, action){
                                            console.info("Pedido Success");
                                        	
                                        	var idPedido = action.result.pedido.id;

                                            productosStore.load(
                                                {
                                                    url: 'productos.json', 
                                                    params: {
                                                        idPedido: idPedido
                                                    }
                                                }
                                            );
                                        },
                                        failure: function(){
                                        	console.info('Error');
                                        }
                                    });
                                }
                            }
                        ]
                    },
                    {
                        title: 'Alta Producto'
                    }
                ]
            },
            {
                region: 'center',
                xtype: 'grid',
                store: productosStore,
                columns: [
                        {header: 'ID', dataIndex: 'id'},
                        {header: 'NOMBRE', dataIndex: 'nombre'},
                        {header: 'PRECIO', dataIndex: 'precio'},
                        {header: 'DESC', dataIndex: 'descripcion', flex: 1} 
                ]
            },
            {
            	xtype: 'panel',
            	title: 'Grafica',
            	collapsible: true,
            	width: 150,
            	region: 'east',
            	layout: 'fit',
            	items: [{
                	xtype: 'chart',
                	
                	store: productosStore,
                	legend: true,
                	series: [{
                        type: 'pie',
                        field: 'precio',
                        showInLegend: true,
                        tips: {
                            trackMouse: true,
                            width: 140,
                            height: 28,
                            renderer: function(storeItem, item) {
                                this.setTitle(storeItem.get('nombre') + ': ' + storeItem.get('precio') + '€');
                            }
                        },
                        highlight: {
                            segment: {
                                margin: 20
                            }
                        },
                        label: {
                            field: 'nombre',
                            display: 'rotate',
                            contrast: true,
                            font: '18px Arial'
                        }
                    }]
                }]
            }
        ]
    });
});