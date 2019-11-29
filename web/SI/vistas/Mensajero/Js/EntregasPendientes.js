$(document).ready(function () {
    listar();
    translate();
    trans();
});
var listar = function () {
    var table = $("#example").DataTable({

        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../controllerEntregas?accion=listEntregasAsignadasFin&idMensajero=" + idUser + "&Estado=Asignada",
            dataSrc: "datos"
        },
        columns: [
            {data: "idOrdenVenta"},
            {data: "fechaEntrega"},
            {data: "Mensajero"},
            {data: "Cliente"},
            {data: "Factura"},
            {data: "zona"},
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
        $(document).on('click', 'button.btnDetalles', function (e) {
            e.preventDefault();
            var idVenta = $(this).attr("id");
            var idCliente = $(this).parents("tr").find("td").eq(3).text();


            var data = {idCliente: idCliente};
            $.ajax({
                url: "../../methodClient?accion=listClientId&idCliente=" + idCliente + "",
                type: "post",
                data: data,
                dataSrc: "datos",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    $.each(data.datos, function (i, field) {
                        document.getElementById('TipoId').innerHTML = field.tipoId;
                        document.getElementById('Documento').innerHTML = field.numId;
                        document.getElementById('Nombre').innerHTML = field.name;
                        document.getElementById('Correo').innerHTML = field.email;
                        document.getElementById('Celular').innerHTML = field.numCellPhone;
                        document.getElementById('Dirección').innerHTML = field.address;
                        document.getElementById('Detalles').innerHTML = field.details;
                        $("#modalDetalleVentas").modal("show");
                    });
//                 var data = ""
                    $.ajax({
                        url: "../../processVenta?action=detalleVentas&idVenta=" + idVenta + "",
                        type: "post",
                        data: data,
                        dataSrc: "datos",
                        dataType: "json",
                        success: function (data) {
                            console.log(data);
                            $.each(data.datos, function (i, field) {
                                $('#bodyDV').html("");
                                $('#bodyDV').append("<tr><td>" + field.idProducto + "</td><td>" + field.nombreProducto + "</td><td>" + field.cantidad + "</td><td>" + field.precio + "</td><td>" + field.detalles + "</td></tr>");
                                $("#modalDetalleVentas").modal("show");
                            });
//                    

                        }
                    });

                }
            });



        });
    });
    //funcion para llamar los detalles de un producto dentro del detalle de ventas
    $(document).on('click', 'button.btnDetallesProducto', function (e) {
        e.preventDefault();
        $("#modalDetalleProducto").modal("show");
        var idProducto = $(this).attr('id');
        var data = {idProducto: idProducto};
        $.ajax({
            url: "../../methodProduct?accion=modalUpdate",
            type: "post",
            data: data,
            dataSrc: "datos",
            dataType: "json",
            success: function (data) {
                $('#bodyDetailsProduct').html("");
                $('#detallesP').html("");
                $.each(data.datos, function (i, field) {
                    $('#bodyDetailsProduct').append("<tr><td>" + field.Ubicacion + "</td><td>" + field.proveedor + "</td></tr>");
                    $('#detallesP').append("<img src='../../" + field.imagen + "' width='20%' height='20%' alt='Imagen del Producto'/><h3 id='detallesProducto'>" + field.descripcion + "</h3>");
                });
            }
        });
    });
    $(document).on('click', 'button.btnCompletar', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var idVenta = $(this).attr('id');
        var data = "";
        $.ajax({
            url: "../../processVenta?action=updateSale&idVenta=" + idVenta + "&estado=Completada",
            type: "post",
            data: data,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        //error
                        type: 'success',
                        title: '¡ Venta completada exitosamente! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 2000 //el tiempo que dura el mensaje en ms
                    });

                } else {
                    Swal.fire({
                        //error
                        type: 'error',
                        title: '¡Error al completar! ',
                        text: 'Intentelo de nuevo',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 4000 //el tiempo que dura el mensaje en ms
                    });

                }
                listar();
            }
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







