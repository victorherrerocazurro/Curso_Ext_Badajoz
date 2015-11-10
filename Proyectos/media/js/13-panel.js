Ext.onReady(function(){

  Ext.create("Ext.panel.Panel",{
    renderTo: Ext.getBody(),
    title: "Mi Panel",
    width: 400,
    height: 400,
    tools: [
      {
        type: 'close'
      },
      {
        type: 'gear'
      }
    ],
    dockedItems: [
      {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
          {
            xtype: 'button',
            text: "tipo boton"
          },
          '->',
          /*{
            xtype: 'tbfill'
          },*/
          {
            xtype: 'button',
            text: "tipo boton"
          },
          {
            xtype: 'tbseparator'
          },
          {
            xtype: 'splitbutton',
            text : 'Split Button',
            menu: {
              xtype: 'menu',
              items: [
                {text: 'Item 1'},
                {text: 'Item 2'}
              ]
            }
          }, 
          {
            xtype: 'tbspacer'
          },
          {
            xtype: 'button',
            text: "tipo boton"
          }
        ]
      },
      {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
          {
            xtype: 'button',
            text: "tipo boton"
          }
        ]
      }
    ]
  });

});