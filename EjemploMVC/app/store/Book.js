Ext.define('App.store.Book', {
    extend: 'Ext.data.Store',	
    model: 'App.model.Book',
	proxy: { // Indica de donde saco los datos
		type: 'ajax', //puede ser rest
		url: 'data/books.json'
	}
});