$(document).ready(function(){
    /*
    * La etiqueta form envia datos al servidor dependiendo del tipo, GET o POST
    */
    $('#frm').on('submit', function(e) {
        e.preventDefault();
        alert('enviando');
        console.log('No se ha enviado el formulario');
    });
});
