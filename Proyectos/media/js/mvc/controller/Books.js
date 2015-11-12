Ext.define('Biblioteca.controller.Books',{
	extend: 'Ext.app.Controller',
	models: ['Book'],
	stores: ['Books'],
	views: ['BookList', 'BookDetail'],
	init:function(){
		console.info('Init del controller');

		this.getStore('Books').load();

		this.control({
			'viewport > panel': {
				render: this.onPanelRendered
			},
			'booklist':{
				selectionchange: this.onBookItemSelected
			}
		});
	},
	onPanelRendered: function(){
		console.info('Render del Panel');		
	},
	onBookItemSelected: function(){
		var listadoLibros = Ext.getCmp('listadoLibros');
		var item = listadoLibros.getSelectionModel().selected.items[0];
		var detalleLibro = Ext.getCmp('detalleLibro');

		detalleLibro.actualizarDetalle(item.data);
	}
});