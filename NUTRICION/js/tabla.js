//              dietasrecibidas[0].area    para llamar al array traido del local storage. [0] llama al primer valor

let traerDatos = function () {
    let dietasrecibidas = JSON.parse(localStorage.getItem('dietas'));
    dietasrecibidas.sort((a, b) =>{
        const areaA = a.area.toLowerCase();
        const areaB = b.area.toLowerCase();
        if (areaA < areaB){
            return -1;
        }
        if (areaA > areaB){
            return 1;
        }
        return 0;
    });
    let html_content = '';
    for (let i = 0 ; i < dietasrecibidas.length ; i ++) {
            html_content += 
    `
                    <tr class="col-12">
                        <th scope="row">${dietasrecibidas[i].area}</th>
                        <td>${dietasrecibidas[i].subarea}</td>
                        <td>${dietasrecibidas[i].ncama}</td>
                        <td>${dietasrecibidas[i].pnombre}</td>
                        <td>${dietasrecibidas[i].papellido}</td>
                        <td>${dietasrecibidas[i].dietaseleccionada}</td>
                        <td>${dietasrecibidas[i].descartable}</td>
                        <td>${dietasrecibidas[i].menuinfantil}</td>
                    </tr>
            `            
    }
    document.getElementById("Tablasfull").innerHTML = html_content;
};