"use strict"

window.addEventListener("load",()=>{

var formAdd = document.querySelector("#formAgregar");

formAdd.addEventListener("submit",()=>{
var addPelicula = document.querySelector("#agregar").value;
if(addPelicula.length >= 1){
    localStorage.setItem(addPelicula,addPelicula);
}
});

var ul = document.querySelector("#listaPeliculas");
for(var i in localStorage){
   if(typeof localStorage[i] == "string"){
    var lista = document.createElement("LI");
    lista.append(localStorage[i]);
    ul.append(lista);
   }
}


var formRemove = document.querySelector("#formEliminar");
formRemove.addEventListener("submit",()=>{
    var removePelicula = document.querySelector("#eliminar").value;
    localStorage.removeItem(removePelicula);
})
});