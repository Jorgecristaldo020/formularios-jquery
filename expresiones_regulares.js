$(document).ready(function(){
    $('#btnEnviar').click(function(){
        let nombre = $('#txtNombre').val().trim();
        let apellido = $('#txtApellido').val().trim();
        let cedula = $('#txtCedula').val().trim();
        let email = $('#txtEmail').val().trim();
        let web = $('#txtWeb').val().trim();
        let fecha = $('#txtFecha').val().trim();

        let isValid = true;
        let errorMsg = '';

        // Expresiones regulares
        let nombreRegex = /^[a-zA-Z\s]+$/;
        let apellidoRegex = /^[a-zA-Z\s]+$/;
        let cedulaRegex = /^[0-9]+$/;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let webRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

        if(nombre === '') {
            errorMsg += 'El campo Nombre es obligatorio.\n';
            isValid = false;
        } else if (!nombreRegex.test(nombre)) {
            errorMsg += 'El campo Nombre solo puede contener letras.\n';
            isValid = false;
        }
        
        if(apellido === '') {
            errorMsg += 'El campo Apellido es obligatorio.\n';
            isValid = false;
        } else if (!apellidoRegex.test(apellido)) {
            errorMsg += 'El campo Apellido solo puede contener letras.\n';
            isValid = false;
        }

        if(cedula === '') {
            errorMsg += 'El campo Cedula es obligatorio.\n';
            isValid = false;
        } else if (!cedulaRegex.test(cedula)) {
            errorMsg += 'El campo Cedula solo puede contener números.\n';
            isValid = false;
        }

        if(email === '') {
            errorMsg += 'El campo Email es obligatorio.\n';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorMsg += 'El campo Email no es válido.\n';
            isValid = false;
        }

        if(web === '') {
            errorMsg += 'El campo Página web es obligatorio.\n';
            isValid = false;
        } else if (!webRegex.test(web)) {
            errorMsg += 'El campo Página web no es válido.\n';
            isValid = false;
        }

        if(fecha === '') {
            errorMsg += 'El campo Fecha es obligatorio.\n';
            isValid = false;
        }

        if(!isValid) {
            alert(errorMsg);
        } else {
            alert('Formulario enviado correctamente.');
            // Aquí puedes agregar el código para enviar el formulario
        }
    });
});
