Ext.define('App.model.Book',{ //El nombre ha de seguir tambien un formato 
	extend: 'Ext.data.Model',
	fields: ['id','title','pages','numChapters','topic','publisher',
	         'isbn','isbn13']
});