Ext.onReady(function(){
	Ext.create('Ext.panel.Panel', {
	    title: 'Accordion Layout',
	    width: 300,
	    height: 300,
	    layout:'accordion',
	    defaults: {
	        // applied to each contained panel
	        bodyStyle: 'padding:15px'
	    },
	    layoutConfig: {
	        // layout-specific configs go here
	        titleCollapse: false,
	        animate: true,
	        activeOnTop: true
	    },
	    items: [{
	        title: 'Panel 1',
	        html: 'Panel content!'
	    },{
	        title: 'Panel 2',
	        html: 'Panel content!'
	    },{
	        title: 'Panel 3',
	        html: 'Panel content!'
	    }],
	    renderTo: Ext.getBody()
	});
});