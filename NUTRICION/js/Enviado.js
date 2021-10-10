//$("#enviardatos").click(function(){
//    $("#MensajeEmergente").animate({
    $("#enviardatos").click(function(){
        $("#MensajeEmergente").show(1000);
        $("#MensajeEmergente").fadeOut(5000);
});
$("#Secuencia").show(1000);
$("#Secuencia").animate({
    left: '0',
    height: '-=35px',
    width: '+=0px'
});
//$("#Secuencia").fadeOut(5000);