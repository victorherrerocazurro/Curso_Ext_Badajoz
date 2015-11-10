Ext.onReady(function(){
	
	var data = {
		name: 'Tommy Maintz',
		title: 'Lead Developer',
		company: 'Sencha Inc.',
		email: 'tommy@sencha.com',
		address: '5 Cups Drive',
		city: 'Palo Alto',
		state: 'CA',
		zip: '44102',
		drinks: ['Coffee', 'Soda', 'Water'],
		kids: [{
		        name: 'Joshua',
		        age:3
		    },{
		        name: 'Matthew',
		        age:2
		    },{
		        name: 'Solomon',
		        age:0
		}]
	};

	var tpl = new Ext.XTemplate(
	    '<div>',
		    '<p>Name: {name}</p>',
		    '<p>Title: {title}</p>',
		    '<p>Company: {company}</p>',
		    '<div>Kids: ',
			    '<tpl for="kids">',
			        '<p>{name}, {age}</p>',
			    '</tpl>',
		    '</div>',
	    '</div>'
	);

	tpl.append(Ext.getBody(), data);

	tpl.append(Ext.getBody(), data);

});