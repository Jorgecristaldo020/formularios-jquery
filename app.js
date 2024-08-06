//zona segura
// nativa
/* document.addEventListener('DOMContentLoaded', function(){
    // recuperar por id
    const nombre = $('#txtNombre').val();
    const cedula = $('#txtCedula').val();

    // cambiar/ asignar
    $('#txtNombre').val('Otro fulano');
    alert($('#txtNombre').val());
    $('#txtNombre').val('Dario');
}); */

//jquery
// zona segura
$(function(){
    // Para pruebas
    // $('input').css("background-color", "yellow")
    //const nombre = $('#txtNombre').val();
    //const cedula = $('#txtCedula').val();

    // cambiar/ asignar
    //$('#txtNombre').val('Otro fulano');
    //alert($('#txtNombre').val());
    //$('#txtNombre').val('Dario');

    // añadir evento click al boton
    $('#btnEnviar').on('click', function(){
        // cuando hiciste click, se ejecuta aquí
        //alert('Hiciste click');
        // encadenamiento de funciones
        $('#btnEnviar').removeClass('btn-primary').addClass('btn-warning');
        // recuperar los valores del formulario
        const nombre = $('#txtNombre').val();
        const apellido = $('#txtApellido').val();
        const cedula = $('#txtCedula').val();

        if(!nombre.trim()) {
            alert('Complete este!');
            $('#txtNombre').css('border-color', 'red').focus();
            return;
        }

        if(!apellido.trim()) {
            alert('Complete este!');
            $('#txtApellido').css('border-color', 'red').focus();
            return;
        }

        if(!cedula.trim()) {
            alert('Complete este!');
            $('#txtCedula').css('border-color', 'red').focus();
            return;
        }
        alert('Buenísimo!!!!!');
        $(this).fadeOut("slow");
    });
});
