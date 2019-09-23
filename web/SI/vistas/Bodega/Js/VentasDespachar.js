//funcion que  carga la funcion listar al iniciar la pagina
$(document).ready(function () {
    listar();
});
var listar = function () {
    //funcion que inicializa el plugin datatable y llena los datos que sena necesarios mostrar
    //por medio de la funcion ajax que trae sus datos de la capa logica y esta a su vez de la capa de 
    //persistencia
    var table = $("#tableDespachos").DataTable({
        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../processVenta?action=listDespachos",
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
}

//funcion que muestra los datos detalles de un cliente al momento de darle click en su id
//es una funcion que  por medio de otra funcion trae los datos de el cliente capa logica y persistencia
//y luego de traerlos se envian hacia la vista por medio de selectores jquery usando la funcion text de
//jquery
$(document).on('click', 'a.idCliente', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idCliente = $(this).attr('id');
    var data = {idCliente: idCliente};
    $.ajax({
        url: "../../methodClient?accion=listClientId",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {
                $('#TipoIdC').text(field.tipoId);
                $('#DocumentoC').text(field.numId);
                $('#NombreC').text(field.name);
                s
                $('#CorreoC').text(field.email);
                $('#CelularC').text(field.numCellPhone);
                $('#DirecciónC').text(field.address);
                $('#DetallesC').text(field.details);
                $("#modalDetalleCliente").modal("show");
            });
//                    

        }
    });
});
//funcion para llamar los detalles de un producto dentro del detalle de ventas
$(document).on('click', 'button.btnDetallesProducto', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
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
//funcion para llenar el modal detalle de ventas trayendo los datos al momento de darle click en el
// boton detalles por medio de otra funcion trae los datos de el cliente capa logica y persistencia
//y luego de traerlos se envian hacia la vista por medio de selectores jquery usando la funcion text de
//jquery
$(document).on('click', 'button.btnDetalles', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idVenta = $(this).parents("tr").find("td").eq(0).text();
    var idCliente = $(this).parents("tr").find("td").eq(3).text();

    //sub funcion ajax para traer los datos del cliente
    var data = {idCliente: idCliente};
    $.ajax({
        url: "../../methodClient?accion=listClientId&idCliente=" + idCliente + "",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {
                $('#TipoId').text(field.tipoId);
                $('#Documento').text(field.numId);
                $('#Nombre').text(field.name);
                $('#Correo').text(field.email);
                $('#Celular').text(field.numCellPhone);
                $('#Dirección').text(field.address);
                $('#Detalles').text(field.details);
                $("#modalDetalleVentas").modal("show");
            });
//                    

        }
    });
    //sub funcion ajax para traer los datos de la venta es decir los productos asignados a 
    //la venta en cuestion
    var idVenta = $(this).parents("tr").find("td").eq(0).text();
    var dato = {idVenta: idVenta}
    $.ajax({
        url: "../../processVenta?action=detalleVentas",
        type: "post",
        data: dato,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {

            $('#bodyDV').html("");
            $.each(data.datos, function (i, field) {
                $('#bodyDV').append("<tr><td>" + field.idProducto + "</td><td>" + field.nombreProducto + "</td><td>" + field.cantidad + "</td><td>" + field.precio + "</td><td>" + field.detalles + "</td></tr>");
                $("#modalDetalleVentas").modal("show");
            });
//                    

        }
    });

});


//funcion para despachar una venta
$(document).on('click', 'button.btnDespachar', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idVenta = $(this).attr('id');
    var numFactura = $(this).parents("tr").find("td").eq(4).text();
    var data = {
        idVenta: idVenta,
        estadoOrdenVenta: "Confirmada",
        numFactura: numFactura
    };

    $.ajax({
        url: "../../processVenta?action=procesarVenta",
        type: "post",
        data: data,
        success: function (data) {
            console.log(data);
            if (data == 1) {
                Swal.fire({
                    type: 'success',
                    title: '¡Venta Despachada Existosamente! ',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 3000 //el tiempo que dura el mensaje en ms
                });

            } else {
                Swal.fire({
                    //error
                    type: 'error',
                    confirmButtonColor: '#2f323a',
                    title: '¡Error Al Despachar! ',
                    text: 'La cantidad de producto a vender no concuerda con la almacenada en bodega, actualice el stock e intentelo nuevamente',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 7000 //el tiempo que dura el mensaje en ms
                });

            }
            listar();

        }
    });
});






