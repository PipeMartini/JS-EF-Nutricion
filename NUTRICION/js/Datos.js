function ObtenerDatos(){
    var nombre = document.getElementById('nombre').Value;
    var edad = parseFloat(document.getElementById('edad').Value);
    console.log(edad);
    console.log(nombre)
    document.registro.nombreobtenido.value = nombre;
    document.registo.edadobtenida.value = edad;
    
}