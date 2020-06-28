
// Cuando el usuario haga un click en "Agregar", se guarda la tarea en la lista de tareas

document.getElementById("agregar").addEventListener("click", function(){

	let obtenerTarea = document.getElementById("tarea").value;
	let listaTareas = document.getElementById("listaTareas");

	let item = document.createElement("li");

	let itemTexto = document.createElement("div");
	let textoTarea = document.createTextNode(obtenerTarea);

	let itemEliminar = document.createElement("div");

	let cruz = document.createElement("a");
	let iconoCruz = document.createElement("i");

	itemTexto.appendChild(textoTarea);
	itemTexto.setAttribute("class", "itemTexto");

	itemEliminar.appendChild(cruz);
	itemEliminar.setAttribute("class", "itemEliminar");
	cruz.setAttribute("href", "#");

	cruz.appendChild(iconoCruz);
	iconoCruz.setAttribute("class", "fas fa-times")

	listaTareas.appendChild(item);

	item.setAttribute("class", "item");
	item.appendChild(itemTexto);
	item.appendChild(itemEliminar);

});

// Si el usuario hace click en la cruz, se elimina la tarea de la lista
document.getElementById("listaTareas").addEventListener("click", function(e){
	if(e.target.nodeName === "I"){
		let itemTarea = e.target.parentNode.parentNode.parentNode;
		
		listaTareas.removeChild(itemTarea);
	}
});