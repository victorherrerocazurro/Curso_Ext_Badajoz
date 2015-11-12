Ext.define('App.controller.Books', { //El formato del nombre, ha de ser <propiedad name del application>.controller.<nombre del controller>
	extend: 'Ext.app.Controller',
	
	stores: ['Book'],
	
    models: ['Book'],
	
	views: ['book.Grid','book.DetailPanel'],
	
	refs: [ // Permite que cuando se clique en un panel cualquiera, el panel detailPanel gana el foco
	        {
	            ref: 'panel', // 
	            selector: 'detailPanel' //alias de la vista
	        }
	    ],


	init: function() { //Se ejecuta depues del constructor
		
		this.getBookStore().load(); //getBookStore, es un metodo que se genera con el store asociado al controler
		
		this.control({
            'viewport > bookList dataview': { //Selecciona dentro del viewport, el panel on alias booklist, y dentro cada uno de los datos que sale en el grid (dataview)
            	itemclick: this.bindGridToPanel
            }
        });
	},

	bindGridToPanel : function(grid, record) { //El nombre de la fuuncion es el que se quiera, grid es el componente, record el evento que se lanza
		this.getPanel().updateDetail(record.data); //record.data es el objeto json que da origen a la fila
		//this es quien ha producido el evento, que en este caso es el grid, se coge el panel padre y a partir de ahi, busca un metodo llamado updateDetail que puede estar en el padre o en cualquiera de los hijos del padre, en ette caso se encuentra en el DetailPanel
	}     
});