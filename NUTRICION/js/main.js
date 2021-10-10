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
}

let recolector = function() {
let area = document.getElementById("Areas").textContent;

let subarea = document.getElementById("SubAreas").value
var str = '',
for (let i = 0 ; i < recolector.length ; i ++)
 if (subarea[i].checked === true) { str += subarea.value + ""}

let cama = document.getElementById("Ncamas").value;
let nombre = document.getElementById("PacienteNombre").value;
let apellido = document.getElementById("PacienteApellido").value;
let dieta = document.getElementById("SeleccionDieta").value;
let descartable = document.getElementById("Descartable").checked;
//let menuInfantil = document.getElementById("MenuInfantil").checked(a => (a === "true") ? 'true' : 'invalid');;
//function MenuInfantil_Pediatria (){
//    let menuInfantil = document.getElementById("MenuInfantil").checked;
//        if(menuInfantil == "true") {
//            MenuInfantil_Pediatria = true
//        }else (null); {
//            MenuInfantil_Pediatria = false;
//    }
//};
dietas.push(new Dieta (area, Sub_Areas_Pediatria, cama, nombre, apellido, dieta, descartable));
localStorage.setItem("dietas",JSON.stringify(dietas));

console.log("Area: "+ area + "    Subarea:"+ str + "    n° de cama: " + cama +"    Nombre y apellido: "+ nombre +" "+ apellido + "    Tipo de dieta: " + dieta + "    Descartable: "+ descartable + " menuinfantil ");

}