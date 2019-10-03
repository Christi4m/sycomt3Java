$(document).ready(function () {
    listar();
    listarProveedor();
});
var listarProveedor = function () {
    var data = "";
    $.ajax({
        url: "../../methodClient?accion=listarMensajeros",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {

            $.each(data.datos, function (i, field) {
                $('#mesajeroAsignar').append(' <option value="' + field.id + '">' + field.name + '</option>')
            });
        }
    });
    $(function () {

        $(document).on('click', 'button.btnAsignarMensajero', function (e) {
            e.preventDefault();
            asignarMensajero();
        });
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

        
        
    //funcion para asignar mensajero y generar entrega
    $(document).on('click', 'button.btnAsignarMensajero', function (e) {
        var idVenta = $(this).parents("tr").find("td").eq(4).find("a").attr('id');

    });
    $('#botonCerrarDV').click(function (e) {
        $("#modalDetalleVentas").modal("toggle");
        $('#bodyDV').html("");
    });
};





var asignarMensajero = function () {


    $("#ModalAsignarMensajero").modal("show");


    $('#btnAsignarM').click(function (e) {

        var idVenta = $('.btnAsignarMensajero').attr('id');
        var idFactura = $('.btnAsignarMensajero').parents("tr").find("td").eq(4).find("a").attr('id');
        alert(idVenta + " " + idFactura);


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

};




