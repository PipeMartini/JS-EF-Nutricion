// contadores de dietas.
    function TablaCocina() {
        const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
            //divido por area pediatria
            const cocinaPediatria = contadorDeDietas.filter(x => x.area == 'Pediatria');
            //separo por dieta
            const generalCPBlando = cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
            //separo en descartables e infantil
            const generalCPBlandoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
            //separo en infantil
            const generalCPBlandoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
            //separo en Adultos descartables
            const generalCPBlandoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
            //separo en Adultos 
            const generalCPBlandoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const generalCortado = cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
                const generalCortado = cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado' ).length;
                const generalCortadoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const generalCortadoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const generalCortadoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const generalCortadoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const SinSal = cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal' ).length;
                const SinSal = cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal' ).length;
                const SinSalDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const SinSalInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const SinSalAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const SinSalAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const LivianaSinSalBlando = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
                const LivianaSinSalBlando = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando' ).length;
                const LivianaSinSalBlandoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const LivianaSinSalBlandoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const LivianaSinSalBlandoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const LivianaSinSalBlandoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const LivianaSinSalCortado = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
                const LivianaSinSalCortado = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado' ).length;
                const LivianaSinSalCortadoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const LivianaSinSalCortadoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const LivianaSinSalCortadoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const LivianaSinSalCortadoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const Blando = cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando' ).length;
                const Blando= cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando' ).length;
                const BlandoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const BlandoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const BlandoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const BlandoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const BlandoConPollo = cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
                const BlandoConPollo = cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
                const BlandoConPolloDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const BlandoConPolloInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const BlandoConPolloAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const BlandoConPolloAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const DBT = cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT' ).length;
                const DBT = cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT' ).length;
                const DBTDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const DBTInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const DBTAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const DBTAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const Licuado = cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado' ).length;
                const Licuado = cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado' ).length;
                const LicuadoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const LicuadoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const LicuadoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const LicuadoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const Liquido = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liquido' ).length;
                const Liquido = cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado' ).length;
                const LiquidoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const LiquidoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const LiquidoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const LiquidoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;

            const Astringente = cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente' ).length;
                const Astringente = cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente' ).length;
                const AstringenteDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const AstringenteInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const AstringenteAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const AstringenteAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).Astringente
            const Vegetariano = cocinaPediatria.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
                const Vegetariano = cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado' ).length;
                const VegetarianoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === true ).length;
                const VegetarianoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === true ).length;
                const VegetarianoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === false ).length;
                const VegetarianoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === false ).length;


            let html_content = '';
            
            for (let i = 0 ; i < 1 ; i ++) {
                    html_content +=  `
                    <th scope="row">PEDIATRIA</th>
                         <td id="pediatriaSinSal">${generalCPBlando} (Descartables infantil= ${generalCPBlandoDESCinfantil}) (Descartables Adultos= ${generalCPBlandoAdultoDESC}) (Niños=${generalCPBlandoInfantil}) (Adultos=${generalCPBlandoAdulto})</td>
                         <td id="pediatriaLivi">${generalCortado} (Descartables infantil= ${generalCortadoDESCinfantil}) (Descartables Adultos= ${generalCortadoAdultoDESC}) (Niños=${generalCortadoInfantil}) (Adultos=${generalCortadoAdulto})</td>
                         <td id="pediatriaBlan">${SinSal} (Descartables infantil= ${SinSalDESCinfantil}) (Descartables Adultos= ${SinSalAdultoDESC}) (Niños=${SinSalInfantil}) (Adultos=${SinSalAdulto})</td>
                         <td id="pediatriaAstr">${LivianaSinSalBlando} (Descartables infantil= ${LivianaSinSalBlandoDESCinfantil}) (Descartables Adultos= ${LivianaSinSalBlandoAdultoDESC}) (Niños=${LivianaSinSalBlandoInfantil}) (Adultos=${LivianaSinSalBlandoAdulto})</td>
                         <td id="pediatriaDbt">${LivianaSinSalCortado} (Descartables infantil= ${LivianaSinSalCortadoDESCinfantil}) (Descartables Adultos= ${LivianaSinSalCortadoAdultoDESC}) (Niños=${LivianaSinSalCortadoInfantil}) (Adultos=${LivianaSinSalCortadoAdulto})</td>
                         <td id="pediatriaLic">${Blando} (Descartables infantil= ${BlandoDESCinfantil}) (Descartables Adultos= ${BlandoAdultoDESC}) (Niños=${BlandoInfantil}) (Adultos=${BlandoAdulto})</td>
                         <td id="pediatriaLiq">${BlandoConPollo} (Descartables infantil= ${BlandoConPolloDESCinfantil}) (Descartables Adultos= ${BlandoConPolloAdultoDESC}) (Niños=${BlandoConPolloInfantil}) (Adultos=${BlandoConPolloAdulto})</td>
                         <td id="pediatriaLiq">${Astringente} (Descartables infantil= ${AstringenteDESCinfantil}) (Descartables Adultos= ${AstringenteAdultoDESC}) (Niños=${AstringenteInfantil}) (Adultos=${AstringenteAdulto})</td>
                         <td id="pediatriaLiq">${DBT} (Descartables infantil= ${DBTDESCinfantil}) (Descartables Adultos= ${DBTAdultoDESC}) (Niños=${DBTInfantil}) (Adultos=${DBTAdulto})</td>
                         <td id="pediatriaLiq">${Licuado} (Descartables infantil= ${LicuadoDESCinfantil}) (Descartables Adultos= ${LicuadoAdultoDESC}) (Niños=${LicuadoInfantil}) (Adultos=${LicuadoAdulto})</td>
                         <td id="pediatriaLiq">${Liquido} (Descartables infantil= ${LiquidoDESCinfantil}) (Descartables Adultos= ${LiquidoAdultoDESC}) (Niños=${LiquidoInfantil}) (Adultos=${LiquidoAdulto})</td>
                         <td id="pediatriaLiq">${Vegetariano} (Descartables infantil= ${VegetarianoDESCinfantil}) (Descartables Adultos= ${VegetarianoAdultoDESC}) (Niños=${VegetarianoInfantil}) (Adultos=${VegetarianoAdulto})</td>
                    `
            
        }
        document.getElementById("respuesta").innerHTML = html_content;
    }
            


    window.onload=PediatriaCocina;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    }}