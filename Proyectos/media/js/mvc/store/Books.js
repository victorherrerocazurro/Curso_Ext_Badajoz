Ext.define('Biblioteca.store.Books',{
	extend: 'Ext.data.Store',
	model: 'Biblioteca.model.Book',
	data: [
		{isbn: '1223', titulo: 'El quijote', autor: 'Cervantes'},
		{isbn: '5678', titulo: 'El Juego de Ender', autor: 'Orson Scott Card'},
		{isbn: '4567', titulo: 'Arkhana', autor: 'Fernando Silvano'}
	],
	proxy: {
		type: 'memory',
		reader: {
			type: 'json'
		}
	}
});