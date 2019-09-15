$(document).ready(function () {
    listar();
});
var listar = function () {
    var table = $("#tableCrud").DataTable({

        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../processVenta?action=listVentas",
            dataSrc: "datos"
        },
        columns: [

            {data: "Codigo"},
            {data: "Fecha"},
            {data: "Valor"},
            {data: "Cliente"},
            {data: "Factura"},
            {data: "Estado"},
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
            var idVenta = $(this).parents("tr").find("td").eq(0).text();
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
//                    

                }
            });
            var idVenta = $(this).parents("tr").find("td").eq(0).text();
            var dato = {idVenta: idVenta}
            $.ajax({
                url: "../../processVenta?action=detalleVentas",
                type: "post",
                data: dato,
                dataSrc: "datos",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    $.each(data.datos, function (i, field) {

                        $('#bodyDV').append("<tr><td>" + field.idDetalleVenta + "</td><td>" + field.idProducto + "</td><td>" + field.nombreProducto + "</td><td>" + field.detalles + "</td><td>" + field.cantidad + "</td><td>" + field.precio + "</td></tr>");
                        $("#modalDetalleVentas").modal("show");
                    });
//                    

                }
            });

        });
    })
    $('#botonCerrarDV').click(function (e) {
        $("#modalDetalleVentas").modal("toggle");
        $('#bodyDV').html("");
    });
}







