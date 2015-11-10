Ext.onReady(function(){

  Ext.create('Ext.menu.Menu', {
    width: 100,
    plain: true,
    floating: false,
    renderTo: 'menu2',
    items: [{
        xtype: 'menucheckitem',
        text: 'chequea'
      },{
        iconCls: 'close',
        text: 'plain item 1',
        menu: {
          xtype: 'colormenu'
        }
      },{
        text: 'plain item 2',
        menu: {
          xtype: 'datemenu'
        }
      },{
        text: 'plain item 3',
        menu: {
          text: "Selecciona",
          items: [
            {text: 'plain subitem 1'},
            {text: 'plain subitem 2'},
            {text: 'plain subitem 3'}
          ]
        }
    }]
  });

});