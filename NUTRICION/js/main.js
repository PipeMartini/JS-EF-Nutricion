class Dieta {
    constructor (area, subarea, ncama, pnombre, papellido, dietaseleccionada, descartable,menuinfantil){
        this.area = area;
        this.subarea = subarea;
        this.ncama = ncama;
        this.pnombre = pnombre;
        this.papellido = papellido;
        this.dietaseleccionada = dietaseleccionada;
        this.descartable = descartable;
        this.menuinfantil = menuinfantil;
    }
}

let dietas=[]
if (localStorage.getItem('dietas') != null) {
    dietas = JSON.parse(localStorage.getItem('dietas'));
};

let recolector = function() {
let area = document.getElementById("Areas").textContent;





//let subarea = function(sarea) {
//    if(document.getElementById("SubAreas").value= ''){
//    sarea = document.getElementById("SubAreas").value;
//}else (document.getElementById("SubAreas").value = null);{
//    sarea = "no se encontro valor";
//}};
var subarea = document.getElementById("SubAreas");
console.log(subarea);
if(subarea == null){
subarea = 'no se encontró valor'
}else{
subarea = document.getElementById("SubAreas").value
}

let cama = document.getElementById("Ncamas").value;
let nombre = document.getElementById("PacienteNombre").value;
let apellido = document.getElementById("PacienteApellido").value;
let dieta = document.getElementById("SeleccionDieta").value;
let descartable = document.getElementById("Descartable").checked;
var menuInfantil = document.getElementById("MenuInfantil");
if(menuInfantil == null){
    menuInfantil = 'No'
}else{
    menuInfantil = 'Si' + document.getElementById("MenuInfantil").checked
}
dietas.push(new Dieta (area, subarea, cama, nombre, apellido, dieta, descartable));
localStorage.setItem("dietas",JSON.stringify(dietas));

console.log("Area: "+ area + "    Subarea:"+ subarea + "    n° de cama: " + cama +"    Nombre y apellido: "+ nombre +" "+ apellido + "    Tipo de dieta: " + dieta + "    Descartable: "+ descartable + " menuinfantil ");

}