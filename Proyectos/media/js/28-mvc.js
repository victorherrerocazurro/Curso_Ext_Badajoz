Ext.Loader.setConfig({enabled: true});

Ext.onReady(function() {

    Ext.application({
        name: 'Biblioteca',
        appFolder: 'media/js/mvc',
        controllers: ['Books'],
        launch: function(){
            
            console.info('Launch del Application');

            Ext.create('Ext.container.Viewport',{
                layout: 'fit',
                items: [
                    {
                        xtype: 'panel',
                        layout: 'border',
                        items: [
                            {
                                xtype: 'booklist',
                                id: 'listadoLibros',
                                region: 'center'
                            },
                            {
                                xtype: 'bookdetail',
                                id: 'detalleLibro',
                                region: 'south',
                                height: 200
                            }
                        ]
                    }
                ]
            });
        }
    });
});