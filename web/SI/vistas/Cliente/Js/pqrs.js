$(document).ready(function () {
    create();
    read();
});
var message1 = "Seleccione un tipo de PQR\'s";
var message2 = "Ingrese la descripción";
var message3 = "El archivo seleccionado no es valido, seleccione la imagen que desea adjuntar";
$(document).on('click', '#en', function (e) {
    e.preventDefault();
    if ($('#formPqrs').on('init.form.bv').data('bootstrapValidator')) {
        $("#formPqrs").data('bootstrapValidator').destroy();
        message1 = "Select the type of PQR\'s";
        message2 = "Enter the description";
        message3 = "The selected file is not valid, select the image you want to attach";
    } else {
        message1 = "Select the type of PQR\'s";
        message2 = "Enter the description";
        message3 = "The selected file is not valid, select the image you want to attach";
    }

});
$(document).on('click', '#es', function (e) {
    e.preventDefault();
    if ($('#formPqrs').on('init.form.bv').data('bootstrapValidator')) {
        $("#formPqrs").data('bootstrapValidator').destroy();
        message1 = "Seleccione un tipo de PQR\'s";
        message2 = "Ingrese la descripción";
        message3 = "El archivo seleccionado no es valido, seleccione la imagen que desea adjuntar";
    } else {
        message1 = "Seleccione un tipo de PQR\'s";
        message2 = "Ingrese la descripción";
        message3 = "El archivo seleccionado no es valido, seleccione la imagen que desea adjuntar";
    }

});
var create = function () {
    //function to create pqrs's into system
    $(document).on('click', '#btncrearpqrs', function (e) {
        $('#formPqrs').bootstrapValidator({
            feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
            fields: {
                typePqrs: {
                    validators: {
                        notEmpty: {message: message1},
                        callback: {
                            message: message1,
                            callback: function (value, validator, $field) {
                                if (value === '') {
                                    return true;
                                }
                                return true;
                            }
                        }
                    }
                },
                descriptionPqrs: {
                    validators: {
                        notEmpty: {message: message2}
                    }
                },

                imagenProducto: {
                    validators: {

                        file: {
                            extension: 'jpeg,png,jpg',
                            type: 'image/jpeg,image/png,img/jpg',
                            maxSize: 2048 * 1024,
                            message: message3
                        }
                    }
                }

            }

        });
        $('#formPqrs').on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();
            e.stopImmediatePropagation();
            var data = new FormData($('#formPqrs')[0]);

            for (var entrie of data.entries()) {
                console.log(entrie[0] + ': ' + entrie[1]);
            }

            $("#formPqrs")[0].reset();
            $("#formPqrs").data('bootstrapValidator').resetForm();
            $("#modalPqrs").modal("toggle");

            $.ajax({
                url: "../../controllerPqrs?action=create",
                type: "post",
                data: data,
                contentType: false,
                processData: false,
                success: function (data) {
                    console.log(data);
                    if (data != 0) {
                        Swal.fire({
                            //error
                            type: 'success',
                            title: '¡ PQR\'s radicada exitosamente ! ',
                            html: '<h5>Su numero de radicado es el LTC' + data + '. Su PQR\'s sera respondida en un plazo no mayor a 15 días habiles</h5>',
                            width: 500,
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 7000 //el tiempo que dura el mensaje en ms
                        });

                    } else if (data == 0) {
                        Swal.fire({
                            //error
                            type: 'error',
                            title: '¡Error al Radicar! ',
                            text: 'Intentelo de nuevo',
                            width: 500,
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 4000 //el tiempo que dura el mensaje en ms
                        });

                    }
//                    listar();
                }
            });

        });



    });

}
//function to read the pqrs created by the user in the system
var read = function () {
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
    var table = $("#tableCrud").DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i style="font-size:25px;"class="fas fa-copy"></i>',
                titleAttr: 'Copiar Datos',
                className: 'btn btn-info',
                exportOptions: {
                    columns: [0, 1, 2, 3, 'visible']
                }
            },
            {
                extend: 'excelHtml5',
                text: '<i style="font-size:25px;"class="fas fa-file-excel"></i>',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success',
                exportOptions: {
                    columns: [0, 1, 2, 3, 'visible']
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i style="font-size:25px;" class="fas fa-file-pdf"></i>',
                titleAttr: 'Exportar a Pdf',
                className: 'btn btn-danger',
                title: 'Stock',
                exportOptions: {
                    columns: [0, 1, 2, 3],
                },
                customize: function (doc) {
                    //Dar el 100% de ancho a la tabla 
                    doc.content[1].table.widths = ['20%', '20%', '20%', '20%'];
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
                                    text: 'Listado del pqr\'s asignadas por ' + nameUser + ' al almacen'
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
                title: 'Stock',
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
        responsive: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../controllerPqrs?action=readArrayId&idUser=" + idUser + "",
            dataSrc: "datos"
        },
        columns: [

            {data: "id"},
            {data: "datePqrs"},
            {data: "CUN"},
            {data: "type"},
            {data: "accions"}

        ],
        createdRow: function (row, data, dataIndex) {
            $(row).find('td:eq(0)').attr('data-label', '#')
            $(row).find('td:eq(1)').attr('data-label', 'Fecha')
            $(row).find('td:eq(2)').attr('data-label', 'CUN')
            $(row).find('td:eq(3)').attr('data-label', 'Tipo')
            $(row).find('td:eq(4)').attr('data-label', 'Acciones')
        },
        language: idiomaEsp
    });

    //Listar detalles producto
    $(document).on('click', 'button.btnDetallesPqrs', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $("#modalDetallePqrs").modal("show");
        var idPqrs = $(this).attr('id');
        var data = {idPqrs: idPqrs};
        $.ajax({
            url: "../../controllerPqrs?action=readIdPqrs",
            type: "post",
            data: data,
            dataSrc: "datos",
            dataType: "json",
            success: function (data) {
                $('#bodyDetailsProduct').html("");
                $('#detallesP').html("");
                $.each(data.datos, function (i, field) {
                    if (!field.evidence == "") {
                        $('#detallesP').append("<span id='spanEvidencePqrs'style='display:block;margin:auto;font-size: 15px; color:black;'>Evidencia</span> <br><br><img style='display:block;margin:auto;'src='../../EvidencePqrs/" + field.evidence + "' width='20%' height='20%' alt='Evidencia de la pqrs'/><h3 style='font-size: 15px; color:black; text-align: justify;'id='evidencePqrs'><span id='titleDesPqrs'>Descripción</span><br><br>" + field.description + "</h3>");
                    } else {
                        $('#detallesP').append("<span id='spanEvidencePqrs'style='display:block;margin:auto;font-size: 15px; color:black;'>Evidencia</span><h3 style='font-size: 15px; color:black; text-align: justify;'id='evidencePqrs'>No hay evidencia adjunta a la " + field.type + "</h3><h3 style='font-size: 15px; color:black; text-align: justify;'id='evidencePqrs'><span id='titleDesPqrs'>Descripción</span><br><br>" + field.description + "</h3>");
                    }
                });
            }
        });
    });

}

