//Modelo
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        //{name: 'id',    type: 'int'},
        {name: 'name',  type: 'string'},
        {name: 'phone', type: 'string'}
    ]
});

Ext.onReady(function() {

    //Store
    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        model: 'User',
        proxy: {
            type: 'localstorage',
            id: 'misUsuarios'/*,
            reader: {
                type: 'json'
            },
            writer: {
                type: 'json'
            }*/
        }
    });


    store.load();

    store.each(function(item){
        console.info(item);
    });

    store.add({
        //id: 3,
        name: 'Victor Herrero',
        phone: '123456789'
    });

    store.each(function(item){
        console.info(item);
    });

    store.sync();

});