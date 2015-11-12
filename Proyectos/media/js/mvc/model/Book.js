Ext.define('Biblioteca.model.Book',{
	extend: 'Ext.data.Model',
	fields: [
		{name: 'isbn', type: 'string'},
		{name: 'titulo', type: 'string'},
		{name: 'autor', type: 'string'}
	]
});