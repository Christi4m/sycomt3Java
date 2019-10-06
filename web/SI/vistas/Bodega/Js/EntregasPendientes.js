
$(document).ready(function () {
    listar();
});
var idCliente = "";
var idVenta = "";
var idFactura = "";
var numFactura = "";
$(document).on('click', 'button.btnAsignarMensajero', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    
    idCliente = $(this).parents("tr").find("td").eq(3).find("a").attr('id');
    idVenta = $(this).attr('id');
    numFactura = $(this).parents("tr").find("td").eq(4).text();
    idFactura = $(this).parents("tr").find("td").eq(4).find("span").attr('id');
    listarMensajero(idCliente);
    asignarMensajero();
});
var listarMensajero = function (idCliente) {

    var zonaCliente = "";
    var data = "";
    $.ajax({
        url: "../../methodClient?accion=listClientId&idCliente=" + idCliente + "",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            console.log(data);

            $.each(data.datos, function (i, field) {
                zonaCliente = field.zona;
            });

            $.ajax({
                url: "../../methodClient?accion=listarMensajeros",
                type: "post",
                data: "",
                dataSrc: "datos",
                dataType: "json",
                success: function (data) {
                    $('#mesajeroAsignar').html("");
                    $('#mesajeroAsignar').append(' <option value="">Seleccione una opcion</option>');
                    $.each(data.datos, function (i, field) {

                        if (field.zona == zonaCliente) {
                            $('#mesajeroAsignar').append(' <option value="' + field.id + '">' + field.name + '</option>')
                        }
                    });
                }
            });

        }
    });




};
var listar = function () {
    var table = $("#tableCrud").DataTable({

        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../processVenta?action=entregasPendientes",
            dataSrc: "datos"
        },
        columns: [
            {data: "idVenta"},
            {data: "fechaVenta"},
            {data: "valorGlobal"},
            {data: "idCliente"},
            {data: "numFactura"},
            {data: "acciones"}
        ],
        language: idiomaEsp
    });
    $(function () {
        $(document).on('click', 'a.idCliente', function (e) {
            e.preventDefault();
            var idCliente = $(this).attr('id');
            var data = {idCliente: idCliente};
            $.ajax({
                url: "../../methodClient?accion=listClientId",
                type: "post",
                data: data,
                dataSrc: "datos",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    $.each(data.datos, function (i, field) {
                        document.getElementById('TipoIdC').innerHTML = field.tipoId;
                        document.getElementById('DocumentoC').innerHTML = field.numId;
                        document.getElementById('NombreC').innerHTML = field.name;
                        document.getElementById('CorreoC').innerHTML = field.email;
                        document.getElementById('CelularC').innerHTML = field.numCellPhone;
                        document.getElementById('DirecciónC').innerHTML = field.address;
                        document.getElementById('DetallesC').innerHTML = field.details;
                        $("#modalResult").modal("show");
                    });
//                    

                }
            });
        });
    });




    $('#botonCerrarDV').click(function (e) {
        $("#modalDetalleVentas").modal("toggle");
        $('#bodyDV').html("");
    });
};

$('#btnAsignarM').click(function (e) {
    e.preventDefault();


    alert(idVenta + " " + idFactura + " " + idCliente +" " + numFactura);
    $('#Factura').val(idFactura);
    $('#numVentas').val(numFactura);
    $('#Ventas').val(idVenta);

    var data = new FormData($('#frmAsignarMensajero')[0]);

    for (var entrie of data.entries()) {
        console.log(entrie[0] + ': ' + entrie[1]);
    }

    $("#ModalAsignarMensajero").modal("toggle");

    $("#frmAsignarMensajero")[0].reset();



    $.ajax({
        url: "../../controllerEntregas?accion=generarEntrega&idFactura=" + idFactura + "",
        type: "post",
        data: data,
        contentType: false,
        processData: false,
        cache: false,
        success: function (res) {
            console.log(res);
            if (res == 1) {
                Swal.fire({
                    //error
                    type: 'success',
                    title: '¡ Mensajero Asignado exitosamente ! ',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 2000 //el tiempo que dura el mensaje en ms

                });

            } else {
                Swal.fire({
                    //error
                    type: 'error',
                    title: '¡Error al Asignar! ',
                    text: 'Intentelo de nuevo',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 2000 //el tiempo que dura el mensaje en ms
                });
                listar();
            }

        }
    });


});

var asignarMensajero = function () {


    $("#ModalAsignarMensajero").modal("show");



};




