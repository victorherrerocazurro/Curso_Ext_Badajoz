Ext.onReady(function() {

    var store = Ext.create('Ext.data.Store', {
        storeId:'simpsonsStore',
        fields:['name', 'email', 'phone', 'senority', 'dep', 'hired'],
        pageSize: 2,
        data:{'items':[
            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224", senority:7, dep:"Manangement", hired:"01/10/2004"  },
            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234", senority:7, dep:"Manangement", hired:"01/10/2004" },
            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244", senority:7, dep:"Manangement", hired:"01/10/2004"  },
            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254", senority:7, dep:"Manangement", hired:"01/10/2004"  }
        ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: Ext.data.StoreManager.lookup('simpsonsStore'),
        columns: [
            { header: 'Name',  dataIndex: 'name' },
            { header: 'Email', dataIndex: 'email', flex: 1 },
            { header: 'Phone', dataIndex: 'phone' },
            { text: 'Hired Month',  dataIndex:'hired', xtype:'datecolumn', format:'M'},
            { text: 'Department (Yrs)', xtype:'templatecolumn', tpl:'<span>{dep} ({senority})</span>'}
        ],
        height: 200,
        width: 400,
        bbar: {
            xtype: 'pagingtoolbar',
            store: Ext.data.StoreManager.lookup('simpsonsStore'),   // same store GridPanel is using
            displayInfo: true
        },
        renderTo: Ext.getBody()
    });
    
});