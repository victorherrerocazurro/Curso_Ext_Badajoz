Ext.Loader.setConfig({enabled: true});

Ext.require('Ext.container.Viewport');

Ext.application({ //Define que es una aplicacion MVC completa
    name: 'App',

    appFolder: 'app', //carpeta interna del proyecto
    
    controllers: ['Books'], //que en la carpeta app/controller un js que se llama books

    launch: function() {
    	
        Ext.create('Ext.container.Viewport', { //Contenedor para coger tdo el navegador independientemente del terminal fisico
            layout: 'border',
            items: [ //paneles
                {
                    xtype: 'bookList', //alias de las vistas
                    region: 'center'
                },
                {
                    xtype: 'detailPanel', //alias de las vistas
                    region: 'south',
                    height: 150
                }
            ]
        });
    }
});