// VAR no se usa mas!
// es ecmascript 5

//ecmascript 6 son:
//let
//const 

//const nombredelecomerce = "la pipe web";
//document.write (nombredelecomerce)
//let cama = 0
//for (cama; cama < 10; cama++) {
//    console.log("pipeweb")
//}
//let flechas = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
//<path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
//</svg>`;
//path

//document.write(flechas);

//var o = {
//  
//    get latest () {
//      if (this.log.length > 0) {
//        return this.log[this.log.length - 1];
//      }
//      else {
//        return null;
//      }
//    },
//    log: []
//  }


//TRAE INFO DE UN INPUT Y LO ESCUPE EN UN CUADRO
var friendList = [];



function assDietaToSystem (area, subarea, ncama, pnombre, papellido, dietaseleccionada, descartable){

    var newDieta = {
        area : area,
        subarea : subarea,
        ncama : ncama,
        pnombre : pnombre,
        papellido : papellido,
        dietaseleccionada : dietaseleccionada,
        descartable : descartable,
    };
    console.log(newDieta);
    dietaList.push(newDieta);
    dietas2(newDieta);
}

function getDietaList (){
    var storedList = localStorage.getItem('dietas');
    if (storedList == null){
        dietaList = [];
    }else{
        dietaList= JSON.parse(storedList);
    }
    return dietaList;
}

function dietas2 (plist) {
    localStorage.setItem('dietas2', JSON.stringify(area));
}
-----------------------------------------------