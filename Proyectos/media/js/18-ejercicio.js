function mostrarWindow(){
	Ext.create('Ext.window.Window',{
		width: 300,
		height: 300,
		layout: 'card',
		bbar: {
			xtype: 'toolbar',
			items: [
				{
					text: 'anterior',
					id: 'btAnterior',
					handler: function(){
						var layout = this.up('window').getLayout();
						layout.prev();
						if (!layout.getPrev()){
							this.setDisabled(true);
						}
						if (layout.getNext()){
							Ext.getCmp('btSiguiente').setDisabled(false);
						}
					},
					disabled: true
				},
				'->',
				{
					text: 'siguiente',
					id: 'btSiguiente',
					handler: function(){
						var layout = this.up('window').getLayout()
						layout.next();
						if (!layout.getNext()){
							this.setDisabled(true);
						}
						if (layout.getPrev()){
							Ext.getCmp('btAnterior').setDisabled(false);
						}	
					}
				}
			]
		},
		items: [
			{
				xtype: 'panel',
				html: 'Primer paso del card'
			},
			{
				xtype: 'panel',
				html: 'Segundo paso del card'
			}
		]
	}).show();
}

Ext.onReady(function(){
	Ext.create('Ext.container.Viewport',{
		layout: 'fit',
		items: [
			{
				xtype: 'panel',
				layout: 'border',
				tbar: {
					xtype: 'toolbar',
					items:[
						{
							text: 'Menu',
							menu: {
								xtype: 'menu',
								items: [
									{
										text: 'Nuevo',
										handler: mostrarWindow
									},
									{text: 'Borrar'}
								]
							}
						}
					]
				},
				items: [
					{
						xtype: 'panel',
						region: 'north',
						html: 'Panel Norte',
						height: 100
					},
					{
						xtype: 'panel',
						region: 'south',
						html: 'Panel Sur',
						height: 100
					},
					{
						xtype: 'panel',
						region: 'west',
						layout: 'accordion',
						width: 100,
						items: [
							{
								xtype: 'panel',
								title: 'Panel 1',
								html: 'Contenido del Panel 1'
							},
							{
								xtype: 'panel',
								title: 'Panel 2',
								html: 'Contenido del Panel 2'
							},
							{
								xtype: 'panel',
								title: 'Panel 3',
								html: 'Contenido del Panel 3'
							}
						]
					},
					{
						xtype: 'panel',
						region: 'east',
						html: 'Panel Este',
						width: 100
					},
					{
						xtype: 'panel',
						region: 'center',
						html: 'Panel Central'
					}
				]
			}
		]
	});
});