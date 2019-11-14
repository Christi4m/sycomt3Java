$(document).ready(function () {
    listar();
    listarProveedor();
    translate();
    trans();

    

});
var listarProveedor = function () {
    var data = "";
    $.ajax({
        url: "../../processProveedor?accion=listarProveedores",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {

            $.each(data.datos, function (i, field) {
                $('#proveedorProducto').append(' <option value="' + field.idProveedor + '">' + field.razonSocial + '</option>')
            });
        }
    });
};
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
                title: 'Stock',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5],
                },
                customize: function (doc) {
                    //Dar el 100% de ancho a la tabla 
                    doc.content[1].table.widths = ['10%', '22,2%', '16,6%', '21,2%', '16,6%', '12%'];
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
                                    text: 'Listado del Stock del Almacen'
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
        responsive: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../methodProduct?accion=list",
            dataSrc: "datos"
        },
        columns: [

            {data: "Codigo"},
            {data: "Nombre"},
            {data: "Telaje"},
            {data: "Ubicacion"},
            {data: "Precio"},
            {data: "Stock"},
            {data: "acciones"}
        ],
        createdRow: function (row, data, dataIndex) {
            $(row).find('td:eq(0)').attr('data-label', '#')
            $(row).find('td:eq(1)').attr('data-label', 'Nombre')
            $(row).find('td:eq(2)').attr('data-label', 'Telaje')
            $(row).find('td:eq(3)').attr('data-label', 'Ubicación')
            $(row).find('td:eq(4)').attr('data-label', 'Precio')
            $(row).find('td:eq(5)').attr('data-label', 'Stock')
            $(row).find('td:eq(6)').attr('data-label', 'Acciones')
            
             
        
        
        
        },
        language: idiomaEsp
    });
};
$(function () {
    $('#btncrearproducto').click(function (e) {
        var nombreP = $('#nombreProducto').val();
        var contenido = ""
        for (var i = 0; i < nombreP.length; i++) {
            contenido += (nombreP.charAt(i) == " ") ? "-" : nombreP.charAt(i);
        }//fin del for

        $('#nombreProducto').val(contenido);
        $('#frmCrearProducto').bootstrapValidator({
            feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
            fields: {
                nombreProducto: {
                    validators: {
                        notEmpty: {message: 'Ingrese el nombre'}
                    }
                },
                decripcionProducto: {
                    validators: {
                        notEmpty: {message: 'Ingrese la descripción'}
                    }
                },
                telajeProducto: {
                    validators: {
                        notEmpty: {message: 'Ingrese el tipo de tela'},
                        callback: {
                            message: 'Ingrese el numero de hijos del empleado',
                            callback: function (value, validator, $field) {
                                if (value === '') {
                                    return true;
                                }
                                return true;
                            }
                        }
                    }
                },
                proveedorProducto: {
                    validators: {
                        notEmpty: {message: 'Seleccione el proveedor'},
                        callback: {
                            message: 'Ingrese el numero de hijos del empleado',
                            callback: function (value, validator, $field) {
                                if (value === '') {
                                    return true;
                                }
                                return true;
                            }
                        }
                    }
                },
                ubicacionBodega: {
                    validators: {
                        notEmpty: {message: 'Ingrese la ubicación'}
                    }
                },
                precioMC: {
                    validators: {
                        notEmpty: {message: 'Ingrese el precio'},
                        digits: {message: 'Ingrese un precio valido'}
                    }
                },
                stock: {
                    validators: {
                        notEmpty: {message: 'Ingrese la cantidad del stock'},
                        digits: {message: 'Ingrese solo numeros'}
                    }
                },
                imagenProducto: {
                    validators: {
                        notEmpty: {message: 'Adjunte la imagen'},
                        file: {
                            extension: 'jpeg,png,jpg',
                            type: 'image/jpeg,image/png,img/jpg',
                            maxSize: 2048 * 1024,
                            message: 'El archivo seleccionado no es valido'
                        }
                    }
                }

            }

        });
        $('#frmCrearProducto').on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();
            e.stopImmediatePropagation();
            var data = new FormData($('#frmCrearProducto')[0]);

            for (var entrie of data.entries()) {
                console.log(entrie[0] + ': ' + entrie[1]);
            }

            $("#frmCrearProducto")[0].reset();
            $("#frmCrearProducto").data('bootstrapValidator').resetForm();
            $("#modalNuevo").modal("toggle");

            $.ajax({
                url: "../../methodProduct?accion=create",
                type: "post",
                data: data,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data == 1) {
                        Swal.fire({
                            //error
                            type: 'success',
                            title: '¡ Producto creado exitosamente ! ',
                            width: 500,
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 2000 //el tiempo que dura el mensaje en ms
                        });

                    } else {
                        Swal.fire({
                            //error
                            type: 'error',
                            title: '¡Error al Crear! ',
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


    });
    $(document).on('click', 'button.btnEliminar', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var idProducto = $(this).attr('id');
        var fila = $(this).parent().parent();

        Swal.fire({
            title: 'Estás Seguro?',
            text: "no podrás revertir esto!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Bórralo!',
            cancelButtonText: 'Cancelar',
            width: 500,
            padding: '5em',
        }).then((result) => {
            if (result.value) {
                var data = {iDProducto: idProducto};
                $.ajax({
                    url: "../../methodProduct?accion=delete",
                    type: "post",
                    data: data,
                    success: function (data) {
                        if (data == 1) {
                            Swal.fire({
                                //error
                                type: 'success',
                                title: '<strong>¡ Producto eliminado exitosamente ! </strong>',
                                width: 500,
                                padding: '5em',
                                showConfirmButton: false,
                                timer: 2000 //el tiempo que dura el mensaje en ms
                            });
                        } else {
                            Swal.fire({
                                //error
                                type: 'error',
                                title: '<strong>¡Error al Eliminar!</strong> ',
                                html: '<h4 style="font-size:15px;">El Producto se encuentra asigando en alguna venta o compra, si desea eliminarlo debe eliminar este producto de las compras o ventas que lo tengan incluido</4>',
                                width: '62em',
                                padding: '5em',
                                showConfirmButton: false,
                                timer: 7000 //el tiempo que dura el mensaje en ms
                            });
                        }
                        listar();
                    }
                });
            }
        })

    });


    var fila;
    //funcion para cargar los datos en el modal de editar
    $(document).on('click', 'button.btnUpdate', function (e) {
        var idProducto = $(this).attr('id');
        var data = {idProducto: idProducto};
        $.ajax({
            url: "../../methodProduct?accion=modalUpdate",
            type: "post",
            data: data,
            dataSrc: "datos",
            dataType: "json",
            success: function (data) {
                $.each(data.datos, function (i, field) {
                    $('#idProductoA').val(field.Codigo);
                    $('#nombreProductoA').val(field.Nombre);
                    $('#telajeProductoA').val(field.Telaje);
                    $('#ubicacionBodegaA').val(field.Ubicacion);
                    $('#precioMCA').val(field.Precio);
                    $('#stockA').val(field.Stock);
                });
            }
        });


    });

    //funcion actualizar

    $('#botonUpdateModal').click(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $("#modalEdicion").modal("toggle");
        var data = new FormData($('#frmUpdateProducto')[0]);

        for (var entrie of data.entries()) {
            console.log(entrie[0] + ': ' + entrie[1]);
        }



        $.ajax({
            url: "../../methodProduct?accion=update",
            type: "post",
            data: data,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    Swal.fire({
                        //error
                        type: 'success',
                        title: '¡ Producto Actualizado exitosamente ! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 2000 //el tiempo que dura el mensaje en ms
                    });

                } else {
                    Swal.fire({
                        //error
                        type: 'error',
                        title: '¡Error al Actualizar! ',
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
                console.log(data);
                $('#bodyDetailsProduct').html("");
                $('#detallesP').html("");
                $.each(data.datos, function (i, field) {
                    $('#bodyDetailsProduct').append("<tr><td>" + field.Ubicacion + "</td><td>" + field.proveedor + "</td></tr>");
                    $('#detallesP').append("<img src='../../" + field.imagen + "' width='20%' height='20%' alt='Imagen del Producto'/><h4 id='detallesProducto'>" + field.descripcion + "</h4>");
                });
            }
        });
    });

});



