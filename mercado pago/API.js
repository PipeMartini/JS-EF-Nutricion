// end point
// /checkout/preferences
// url completa
// https://api.mercadopago.com/checkout/preferences


//const DatosDelUsuario = prompt ("¿que queres buscar?")

$.get("/mercadopago/datos.json", (resultado, status)=>{
  console.log(resultado);
})
const producto1 = {
  name: 'Donacion1',
  price:500,
  stock:999999,
  img:'null',
  offer:null
}
const carrito = [producto1];
const elementosMerdacopago = carrito.map(producto =>{
  return{
    "title": producto1.name,
    "description": "Donacion",
    "picture_url": producto1.img,
    "category_id": "cat123",
    "quantity": 1,
    "currency_id": "ARS",
    "unit_price": producto1.price

  }
})
const elemento = {"items": elementosMerdacopago}

$.ajaxSetup({
    headers:{
        'Authorization': 'Barer TEST-5420857022376468-100623-e7bc10ca6b704c19a27b6602e3d6bd7f-201012861',
        'Content-Type' : 'application/json',
    }  
});
$.post("https://api.mercadopago.com/checkout/preferences",JSON.stringify(elemento), (respuesta, status) => {
  console.log(respuesta);

})



//  fetch('https://api.mercadopago.com/zapatillas#D[A:zapatillas]').then( response=>{
//    return response.json();
//  }).then(response => {
//    console.log(response);
//  })