Ext.define("MiComponente",{
	extend: "Ext.Component",
	alias: "widget.miComponente",
	tpl: [
		"<div>",
			"{nombre}-{apellido}",
		"</div>"
	],
	setDatos: function(nombre, apellido){
		this.update({
			nombre: nombre,
			apellido: apellido
		});
	}
});

Ext.onReady(function(){

	Ext.create("MiComponente", {
		id: "miComponente",
		data: {
			nombre: "Victor",
			apellido: "Herrero"
		},
		renderTo: "principal"
	});

	var componente = Ext.getCmp("miComponente");

	componente.setDatos("Juan", "Martinez");
	

});