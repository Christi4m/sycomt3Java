$(document).ready(function (e) {
    senCorreo();
});
var senCorreo = function () {
    $(document).on('click', '#sendCorreo', function (e) {

        $('#frmSendEmail').bootstrapValidator({
            feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
            fields: {
                Destinatarios: {
                    validators: {
                        notEmpty: {message: 'Seleccione un grupo de destinatarios'},
                        callback: {
                            message: 'Seleccione un grupo de destinatarios',
                            callback: function (value, validator, $field) {
                                if (value === '') {
                                    return true;
                                }
                                return true;
                            }
                        }
                    }
                },
                Asunto: {
                    validators: {
                        notEmpty: {message: 'El asunto es requerido'}

                    }
                },
                Adjunto: {
                    validators: {
                        notEmpty: {enabled: false}
                    }
                },
                Mensaje: {
                    validators: {
                        notEmpty: {message: 'El mensaje es requerido'}
                    }
                }

            }

        });
    });

    $('#frmSendEmail').on('success.form.bv', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var data = new FormData($('#frmSendEmail')[0]);
        for (var entrie of data.entries()) {
                console.log(entrie[0] + ': ' + entrie[1]);
            }

        $.ajax({
            url: "../../controllerCorreos?accion=sendMasivos",
            type: "post",
            data: data,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                
                $("#frmSendEmail")[0].reset();
                if (data == 1) {
                    //alerta postiva sweetalert2 emitida dependiendo la respuesta del controlador
                    Swal.fire({
                        type: 'success',
                        title: '¡Correos Enviados Existosamente! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 3000 //el tiempo que dura el mensaje en ms
                    });
                    
                } else {
                    //alerta negativa sweetalert2 emitida dependiendo la respuesta del controlador
                    Swal.fire({
                        //error
                        type: 'error',
                        title: '¡Error al Enviar! ',
                        text: 'Intentelo de nuevo',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 3000 //el tiempo que dura el mensaje en ms
                    });
                }
            }
        });
    });
}

