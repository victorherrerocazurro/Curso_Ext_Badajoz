Ext.define('Biblioteca.view.BookDetail',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.bookdetail',
	tpl: new Ext.XTemplate(
	    '<div>',
		    '<p>ISBN: {isbn}</p>',
		    '<p>Titulo: {titulo}</p>',
		    '<p>Autor: {autor}</p>',
	    '</div>'
	),
	html:'Sin datos',
	actualizarDetalle: function(data){
		this.tpl.overwrite(this.body, data);
	}
});