Ext.onReady(function(){
	var p = document
		.getElementById("identificadorDelParrafo");

	//alert("parando el codigo");

	p.innerHTML = "<span>Cambiamos el contenido del Parrafo</span>";

	var coleccion = Ext.DomQuery.select('div > p > a');//$('div > p > a')

	coleccion[0].innerHTML = "pinchame!!!";

	/*var elementos = Ext.get('div > p > a');

	elementos[0].setHTML("otra vez!!!");*/

	var div = document.createElement("div");

	div.id = 1;

	p.appendChild(div);

	Ext.core.DomHelper.append(p, {
		id: "miNuevoDiv",
		tag: "div",
		cls: "ClaseCSS",
		children: [
			{tag: "p", html:"Parrafo 1"},
			{tag: "p", html:"Parrafo 2"}
		]
	});

});