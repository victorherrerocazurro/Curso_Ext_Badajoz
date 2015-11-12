Ext.define('Biblioteca.view.BookList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.booklist',
	store: 'Books',
	columns:[
		{ header: 'ISBN',  dataIndex: 'isbn' },
        { header: 'TITULO', dataIndex: 'titulo', flex: 1 },
        { header: 'AUTOR', dataIndex: 'autor'}
	],
	height: 200,
    width: 400
});