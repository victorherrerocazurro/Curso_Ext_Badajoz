Ext.define('App.view.book.DetailPanel', {
        extend: 'Ext.Panel',
        
        alias: 'widget.detailPanel',
        // add tplMarkup as a new property
        tpl: Ext.create('Ext.Template', [ //plantilla, propiede que nos inventamos
            '<b>Title:</b> {title}<br/>',
            '<b>Pages:</b> {pages}<br/>',
            '<b>No Chapters:</b> {numChapters}<br/>',
            '<b>Topic:</b> {topic}<br/>',
            '<b>Publisher:</b> {publisher}<br/>',
            '<b>ISBN:</b> {isbn}<br/>',
            '<b>ISBN 13:</b> {isbn13}<br/>'
        ]),
        html: 'Please select a book to see additional details.',
        bodyStyle : {background: '#ffffff'},
        /*tplMarkup: [ //plantilla, propiede que nos inventamos
			'<b>Title:</b> {title}<br/>',
			'<b>Pages:</b> {pages}<br/>',
			'<b>No Chapters:</b> {numChapters}<br/>',
			'<b>Topic:</b> {topic}<br/>',
			'<b>Publisher:</b> {publisher}<br/>',
			'<b>ISBN:</b> {isbn}<br/>',
			'<b>ISBN 13:</b> {isbn13}<br/>'
        ],*/
        // startingMarup as a new property
        //startingMarkup: 'Please select a book to see additional details.',
        bodyPadding: 7,
        // override initComponent to create and compile the template
        // apply styles to the body of the panel and initialize
        // html to startingMarkup
        /*initComponent: function() {
            this.tpl = Ext.create('Ext.Template', this.tplMarkup);
            this.html = this.startingMarkup;

            this.bodyStyle = {
                background: '#ffffff'
            };
            // call the superclass's initComponent implementation
            this.callParent(arguments);
        },*/
        // add a method which updates the details
        updateDetail: function(data) { //Metodo personalizado 
            this.tpl.overwrite(this.body, data); //El template es un html entero, por lo que this.body es el lugar del template a sobrescribir
        }
    });