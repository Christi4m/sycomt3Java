$(document).ready(function () {
    listar();
    datosReporteVetas1();
    
});


listar = function () {
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
            url: "../../processVenta?action=listVentasID&idUser="+idUser+"",
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
                    $('#detallesP').append("<img src='../../" + field.imagen + "' width='20%' height='20%' alt='Imagen del Producto'/><h3 id='detallesProducto'>" + field.descripcion + "</h3>");
                });
            }
        });
    });
    $('#botonCerrarDV').click(function (e) {
        $("#modalDetalleVentas").modal("toggle");
        $('#bodyDV').html("");
    });
}

//seccion de codigo para el reporte de ventass
//seccion de codigo para capturar la fecha del dia en curso
var d = new Date();

var month = d.getMonth() + 1;
var day = d.getDate();
var output = (('' + day).length < 2 ? '0' : '') + day + '/' + (('' + month).length < 2 ? '0' : '') + month + '/' + d.getFullYear();
var datosReporteVetas1 = function () {
    var data = "";
    $.ajax({
        method: "POST",
        url: "../../processVenta?action=Reporte4",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {
                var objeto = {name: 'Ventas', marker: {symbol: 'diamond'}, data: field.gananciasMes.split(',').map(Number)};
                console.log(objeto);
                options.series.push(objeto);
            });
            chart = new Highcharts.Chart(options);
        }
    });
}


var options = {
    chart: {
        events: {
            load: function (event) {
                this.renderer.image('https://raw.githubusercontent.com/Christiam23/sycomt3Java/master/web/SI/img/LogoSycomt3FondoBlanco.png', 50, 30, 140, 70).add();

            }
        },
        // Edit chart spacing
        spacingBottom: 15,
        spacingTop: 150,
        spacingLeft: 10,
        spacingRight: 10,
        fontSize: 200,

        // Explicitly tell the width and height of a chart
        width: null,
        height: null,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'spline',
        renderTo: 'reporteVentas1',

        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    exporting: {
        scale: 0
    },
    title: {
        text: '<strong>Ventas Por Mes</strong><br><div></div>' + output + ''
    },
    subtitle: {
        text: '<h3 style="font-size: 15px;color:black;margin-top:25px;">El siguiente gráfico muestra el valor gloabla de las ventas realizadas mes a mes permitiendo ver de manera ágil y rápida el mes con más mayor margen de ventas en cuanto a dinero hasta la fecha</h3>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Valor Global'
        },
        labels: {
            formatter: function () {
                var format = new Intl.NumberFormat().format(this.value)
                return format;
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: []
}





