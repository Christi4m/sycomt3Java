//funcion que  carga la funcion listar al iniciar la pagina
$(document).ready(function () {
    listar();
});
var listar = function () {
     function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL("image/png");
    }
    //Variable para la cracion de la imagen en base 64 o data uri, necesario para mostrar la imagen en el reporte
    var myGlyph = new Image();
    myGlyph.src = '../img/LogoSycomt3FondoBlanco.png';

    //funcion que inicializa el plugin datatable y llena los datos que sena necesarios mostrar
    //por medio de la funcion ajax que trae sus datos de la capa logica y esta a su vez de la capa de 
    //persistencia
    var table = $("#tableCrud").DataTable({
         dom: 'lBfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i style="font-size:25px;"class="fas fa-copy"></i>',
                titleAttr: 'Copiar Datos',
                className: 'btn btn-info',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 'visible']
                }
            },
            {
                extend: 'excelHtml5',
                text: '<i style="font-size:25px;"class="fas fa-file-excel"></i>',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 'visible']
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i style="font-size:25px;" class="fas fa-file-pdf"></i>',
                titleAttr: 'Exportar a Pdf',
                className: 'btn btn-danger',
                title: 'Ventas',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5],
                },
                customize: function (doc) {

                    //Dar el 100% de ancho a la tabla 
                    doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    //Funcion que convierte la imagen a mostrar a data uri base 64
                    doc.images = doc.images || {};
                    doc.images['myGlyph'] = getBase64Image(myGlyph);
                    for (var i = 1; i < doc.content[1].table.body.length; i++) {
                        if (doc.content[1].table.body[i][0].text == '<img src="../img/LogoSycomt3FondoBlanco.png">') {
                            delete doc.content[1].table.body[i][0].text;
                            doc.content[1].table.body[i][0].image = 'myGlyph';
                        }
                    }
                    //Crear una cadena de fecha que usamos en el pie y encabezado de página. El formato es dd-mm-aaaa
                    var now = new Date();
                    var jsDate = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
                    //Asignacion de estilos personalizados al reporte 
                    //margenes del page (seccion donde se encuentra la tabla)
                    doc.pageMargins = [20, 150, 20, 30];
                    // Establecer el tamaño de fuente para todo el documento
                    doc.defaultStyle.fontSize = 10;
                    // Establecer el tamaño de fuente, para el encabezado de la tabla
                    doc.styles.tableHeader.fontSize = 10;
                    // Establecer el background, para el encabezado de la tabla
                    doc.styles.tableHeader.fillColor = '#000000';
                    //Alinear a la izquierda los encabezados de la tabla
                    doc.styles.tableHeader.alignment = 'left';
                    //funcion que crear el encabezado del pdf
                    doc['header'] = (function () {
                        return {
                            //Division del header en 3 columnas
                            columns: [
                                {
                                    //Columna que muestra la fecha en curso
                                    alignment: 'left',
                                    italics: true,
                                    text: jsDate.toString(),
                                    fontSize: 10,
                                    margin: [10, 0]
                                },
                                {
                                    //columna que muestra el logo del sistema en el reporte
                                    image: 'myGlyph',
                                    width: 200
                                },
                                {
                                    //Columna que muesta el titulo del reporte al lado derecho
                                    alignment: 'center',
                                    fontSize: 14,
                                    text: 'Listado de Ventas Realizadas al Almacen'
                                }
                            ],
                            margin: 20
                        }
                    });
                    // Creacion un objeto de pie de página con 2 columnas.
                    // Lado izquierdo: fecha de creación del informe
                    // Lado derecho: página actual y páginas totales
                    doc['footer'] = (function (page, pages) {
                        return {
                            columns: [
                                {
                                    alignment: 'left',
                                    text: ['Creado el ', {text: jsDate.toString()}]
                                },
                                {
                                    alignment: 'right',
                                    text: ['Pagina ', {text: page.toString()}, ' de ', {text: pages.toString()}]
                                }
                            ],
                            margin: 10,
                            fillColor: '#000000'
                        }
                    });
                },

            },
            {
                extend: 'csvHtml5',
                text: '<i style="font-size:25px;"class="fas fa-file-csv"></i>',
                titleAttr: 'Exportar a Csv',
                className: 'btn btn-warning',
                title: 'Ventas',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5],

                },
                fieldSeparator: ",",
                fieldBoundary: '',
                escapeChar: '"',
                charset: null,
                header: null,
                footer: null

            }

        ],
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
         createdRow: function (row, data, dataIndex) {
            $(row).find('td:eq(0)').attr('data-label', '#')
            $(row).find('td:eq(1)').attr('data-label', 'Fecha')
            $(row).find('td:eq(2)').attr('data-label', 'Valor')
            $(row).find('td:eq(3)').attr('data-label', 'Cliente')
            $(row).find('td:eq(4)').attr('data-label', 'Factura')
            $(row).find('td:eq(5)').attr('data-label', 'Estado')
            $(row).find('td:eq(6)').attr('data-label', 'Acciones')

        },
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






