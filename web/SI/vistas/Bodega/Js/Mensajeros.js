$(document).ready(function () {
    listar();

});
var listar = function () {
    var table = $("#example").DataTable({

        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../methodClient?accion=listarMensajeros",
            dataSrc: "datos"
        },
        columns: [

            {data: "id"},
            {data: "numId"},
            {data: "name"},
            {data: "email"},
            {data: "numCellPhone"},
            {data: "estadoTercero"},
            {data: "acciones"}

        ],

        language: idiomaEsp
    });

}
var idMensajero = "";
$(document).on('click', '.btnAsignarZona', function (e) {
    idMensajero = $(this).attr("id");

});
$("#btnAsignarZonaEntrega").click(function (e) {

    $('#frmAsignarZona').bootstrapValidator({
        feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
        fields: {
            zonaEntrega: {
                validators: {
                    notEmpty: {message: 'La zona es un campo requerido'},
                    callback: {
                        message: 'Ingrese una zona valida',
                        callback: function (value, validator, $field) {
                            if (value === '') {
                                return true;
                            }
                            return true;
                        }
                    }
                }
            }
        }
    });
    $("#modalAsignarZona").modal("toggle");
});

$('#frmAsignarZona').on('success.form.bv', function (e) {
    // Prevent form submission
    e.preventDefault();
    e.stopImmediatePropagation();

    var zona = $("#zonaEntrega").val();

    var data = "";
    $.ajax({
        url: "../../methodClient?accion=asignaZonaEntrega&idMensajero=" + idMensajero + "&zona=" + zona + "",
        type: "post",
        data: data,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                Swal.fire({
                    //error
                    type: 'success',
                    title: '¡Zona asignada exitosamente! ',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 2000 //el tiempo que dura el mensaje en ms
                });

            } else {
                Swal.fire({
                    //error
                    type: 'error',
                    title: '¡Error al asignar zona! ',
                    text: 'Intentelo de nuevo',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 4000 //el tiempo que dura el mensaje en ms
                });
            }


        }
    });

});