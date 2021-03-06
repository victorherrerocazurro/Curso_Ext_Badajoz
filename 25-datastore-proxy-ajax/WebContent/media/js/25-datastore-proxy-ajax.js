//Modelo
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'name',  type: 'string'},
        {name: 'phone', type: 'string'}
    ]
});

Ext.onReady(function() {

    //Store
    var store = Ext.create('Ext.data.Store', {
        //autoLoad: true,
        model: 'User',
        proxy: {
            type: 'ajax',
            url: 'servicio-ajax.json',
            reader: {
                type: 'json',
                root: 'users',
                idProperty: 'id',
                successProperty: 'meta.success'
            },/*
            writer: {
                type: 'json'
            }*/
        }
    });

    store.load();

    setTimeout(function(){
        store.each(function(item){
            console.info(item);
        });
    }, 3000);
    
});