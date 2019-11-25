function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
}

//Variable para la cracion de la imagen en base 64 o data uri, necesario para mostrar la imagen en el reporte
var newImg = new Image();
newImg.src = '../img/LogoSycomt3FondoNegro.png';
var immm = getBase64Image(newImg).toString();

var myGlyph = new Image();
myGlyph.src = '../img/LogoSycomt3FondoBlanco.png';

//Parametros de creación del documento pdf

//FUNCION DE INICIO
var idFact
var tot
var idVen
$(document).ready(function () {

    listar();
    factura();


});

factura = function () {
    //funcion  para descargar la factura en formato pdf
    $(document).on('click', '#buttonDownload', function (e) {
           e.preventDefault();
            e.stopImmediatePropagation();        
        pdfMake.createPdf(campos(idFact,tot,idVen)).download('Factura-'+idFact+'');
    });
    //funcion para el despliegue de la factura en formato pdf
    $(document).on('click', 'a.idVenta', function (e) {
           e.preventDefault();
            e.stopImmediatePropagation();
        var numFactura = $(this).parents("tr").find("td").eq(3).text();
        var total = $(this).parents("tr").find("td").eq(2).text();
        var idVenta = $(this).attr('id');
        
        const pdfDocGenerator = pdfMake.createPdf(campos(numFactura,total,idVenta));
        pdfDocGenerator.getBase64((data) => {
            $('#pdfModalFactura').attr('src', "data:application/pdf;base64," + data);
            idFact = numFactura;
            tot = total;
            idVen = idVenta;
            $("#modalFacturaCompra").modal("show");
        });

    });

}

listar = function () {

    var table = $("#tableCrud").DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i style="font-size:25px;"class="fas fa-copy"></i>',
                titleAttr: 'Copiar Datos',
                className: 'btn btn-info',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
                }
            },
            {
                extend: 'excelHtml5',
                text: '<i style="font-size:25px;"class="fas fa-file-excel"></i>',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success',
                title: 'Ventas',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 'visible']
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i style="font-size:25px;" class="fas fa-file-pdf"></i>',
                titleAttr: 'Exportar a Pdf',
                className: 'btn btn-danger',
                title: 'Ventas',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
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
                                    fontSize: 12,
                                    text: 'Listado de compras realizadas en el almacen'
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
                title: 'Proveedores',
                exportOptions: {
                    columns: [0, 1, 2, 3],

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
            url: "../../processVenta?action=listVentasID&idUser=" + idUser + "",
            dataSrc: "datos"
        },

        columns: [

            {data: "Codigo"},
            {data: "Fecha"},
            {data: "Valor"},
            {data: "Factura"},
            {data: "Estado"},
            {data: "acciones"}
        ],
        language: idiomaEsp
    });
    $(function () {

        $(document).on('click', 'button.btnDetalles', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var idVenta = $(this).parents("tr").find("td").eq(0).text();

            var idVenta = $(this).attr("id");

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
                        $('#bodyDV').append("<tr><td>" + field.idProducto + "</td><td>" + field.nombreProducto + "</td><td>" + field.detalles + "</td><td>" + field.cantidad + "</td><td>" + field.precio + "</td></tr>");
                        $("#modalDetalleVentas").modal("show");
                    });
//                    

                }
            });

        });
    })
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
                    $('#detallesP').append("<img style='display:block;margin:auto;'src='../../" + field.imagen + "' width='20%' height='20%' alt='Imagen del Producto'/><h3 style='font-size: 15px; color:black; text-align: justify;'id='detallesProducto'>" + field.descripcion + "</h3>");
                });
            }
        });
    });
    $('#botonCerrarDV').click(function (e) {
        $("#modalDetalleVentas").modal("toggle");
        $('#bodyDV').html("");
    });
}







