//Modelo
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'name',  type: 'string'},
        {name: 'firstname',  type: 'string', convert: function(value, record){
            var fullName  = record.get('name');
            var splits    = fullName.split(" ");
            var firstName = splits[0];
            return firstName;
        }},
        {name: 'phone', type: 'string', mapping: 'phoneNumber'}
    ],
    validations: [
        {type: 'length', field: 'phone', min: 6}
    ],
    hasMany: {model: 'Order', name: 'orders'}
});

Ext.define('Order', {
    extend: 'Ext.data.Model',
    fields: ['id', 'user_id', 'status', 'price'],
    belongsTo: 'User'
});

//Data source
var dataSource = {
    success: true,
    msg: 'Mensaje desde el servidor',
    users: [
        {
            id: 1,
            name: 'Ed Spencer',
            phoneNumber: '555 1234',
            orders: [
                {
                    id: 1,
                    user_id: 1,
                    status: 'activo',
                    price: 123
                },
                {
                    id: 2,
                    user_id: 1,
                    status: 'activo',
                    price: 456
                }
            ]
        },
        {
            id: 2,
            name: 'Abe Elias',
            phoneNumber: '666 1234'
        }
    ]
};

Ext.onReady(function() {

    //Store
    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        model: 'User',
        data : dataSource,
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'users'
            }
        }
    });


    store.each(function(item){
        console.info(item.get('phone'));
        console.info(item.orders());
    });

    store.add({
        id: 3,
        name: 'Victor Herrero',
        phone: '123456789'
    });

    store.each(function(item){
        console.info(item.get('phone'));
    });

});