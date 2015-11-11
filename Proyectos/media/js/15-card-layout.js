Ext.onReady(function(){
	Ext.create('Ext.panel.Panel', {
	    title: 'Example Wizard',
	    width: 300,
	    height: 200,
	    layout: 'card',
	    bodyStyle: 'padding:15px',
	    defaults: {
	        // applied to each contained panel
	        border: false
	    },
	    // just an example of one possible navigation scheme, using buttons
	    bbar: [
	        {
	            id: 'move-prev',
	            text: 'Back',
	            handler: function(btn) {
	                navigate(btn.up("panel"), "prev");
	            },
	            disabled: true
	        },
	        '->', // greedy spacer so that the buttons are aligned to each side
	        {
	            id: 'move-next',
	            text: 'Next',
	            handler: function(btn) {
	                navigate(btn.up("panel"), "next");
	            }
	        }
	    ],
	    // the panels (or "cards") within the layout
	    items: [{
	        id: 'card-0',
	        html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
	    },{
	        id: 'card-1',
	        html: '<p>Step 2 of 3</p>'
	    },{
	        id: 'card-2',
	        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
	    }],
	    renderTo: Ext.getBody()
	});
});

var navigate = function(panel, direction){
    var layout = panel.getLayout(); //CardLayout
    layout[direction](); //Equivalente a layout.prev() o layout.next()
    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
    Ext.getCmp('move-next').setDisabled(!layout.getNext());
};

