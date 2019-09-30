$(document).ready(function () {
    listar();
});
//Funcion para listar los provedores registrados, usando el plugin dataTable.
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
    var table = $("#tableCrud").DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i style="font-size:25px;"class="fas fa-copy"></i>',
                titleAttr: 'Copiar Datos',
                className: 'btn btn-info',
                exportOptions: {
                    columns: [0, 1, 2, 3]
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
                title: 'Proveedores',
                exportOptions: {
                    columns: [0, 1, 2, 3],
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
                                    text: 'Listado de Proveedores del Almacen'
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
        //Funcion ajax para traer los datos desde la capa logica que a su vez trae los datos desde la base de datos
        ajax: {
            method: "POST",
            url: "../../processProveedor?accion=listarProveedores",
            dataSrc: "datos"
        },
        //Funcion de datatable para asignar a cada columna de la tabla los datos que previamente 
        //se listaron en la funcion ajax
        columns: [
            {data: "idProveedor"},
            {data: "razonSocial"},
            {data: "nit"},
            {data: "estadoProveedor"},
            {data: "acciones"}
        ],
        //Funcion para agregar a los datos el atributo data label necesario para los estilos responsive
        //de la tabla
        createdRow: function (row, data, dataIndex) {
            $(row).find('td:eq(0)').attr('data-label', '#')
            $(row).find('td:eq(1)').attr('data-label', 'Razón Social')
            $(row).find('td:eq(2)').attr('data-label', 'Nit')
            $(row).find('td:eq(3)').attr('data-label', 'Estado')
            $(row).find('td:eq(4)').attr('data-label', 'Acciones')
        },
        //Funcion que asigna el idioma principal del plugin dataTable
        language: idiomaEsp
    });
};
//Funcion de trae los datos detalles de los provedores debido a que son demasiados datos para mostrarlos en la tabla
//principal, estos datos son pintados en una ventana modal
$(document).on('click', 'button.btnDetails', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idProveedor = $(this).attr('id');
    var data = {idProveedor: idProveedor};
    //Funcion ajax que lista todos los campos detalles
    $.ajax({
        url: "../../processProveedor?accion=listarDetallesId",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            console.log(data);
            //funcion que agrega los datos a la ventan modal creando una tabla
            $.each(data.datos, function (i, field) {
                $('#bodyDV').html("");
                $('#bodyDV').append("<tr><td data-label='Correo'>" + field.emailP + "</td><td data-label='Celular'>" + field.numCellPhoneP + "</td><td data-label='Fijo'>" + field.numLandLineP + "</td><td data-label='Dirección'>" + field.addressP + "</td><td data-label='Representante Legal'>" + field.representanteLegal + "</td></tr>");

            });
        }
    });
});
//Funcion para validar el formulario utilizando el plugin bootstrap validator
$('#btnRegisterP').click(function (e) {
    $('#frmRegisterP').bootstrapValidator({message: 'Este valor no es valido',
        feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
        fields: {
            razonSocial: {
                validators: {
                    notEmpty: {message: 'La razon social  es requerida'}
                }
            },
            nit: {
                validators: {
                    notEmpty: {message: 'El nit es requerido'},
                    digits: {message: 'Ingrese solo numeros'},
                }
            },
            emailP: {
                validators: {
                    notEmpty: {message: 'El email es requerido'},
                    emailAddress: {message: 'Ingrese un correo valido'}
                }
            },
            numCellPhoneP: {
                validators: {
                    notEmpty: {message: 'El celular es requerido'},
                    regexp: {
                        regexp: /^\d{10}$/,
                        message: 'Proporcione un número de teléfono celular válido'
                    }
                }
            },
            numLandLineP: {
                validators: {
                    notEmpty: {enabled: false},
                    regexp: {
                        regexp: /^\d{7}$/,
                        message: 'Proporcione un número de teléfono fijo válido'
                    }
                }
            },
            addressP: {
                validators: {
                    notEmpty: {message: 'La direccion es requerida'},
                    stringLength: {
                        max: 60,
                        min: 6,
                        message: 'Ingrese una direccion valida, minimo 6 caracteres maximo 60'
                    }
                }
            },
            representanteLegal: {
                validators: {
                    notEmpty: {message: 'El representante legal es requerido'},

                }
            }
        }
    });
    //Funcion que envia los datos a la capa logica para crear un proveedor, funcion que unicamente se activa
    //si el formulario es validado con exito.
    $('#frmRegisterP').on('success.form.bv', function (e) {
        // Prevent form submission
        e.preventDefault();
        e.stopImmediatePropagation();
        //Valiable FormData que lista todos los datos registrados en el formulario para registrar el proveedor
        var data = new FormData($('#frmRegisterP')[0]);
        //Seccion de codigo para mostrar en consola los datos de la variable data
        //ya que es un arreglo form data con esta seccion de codigo se imprime en consola
        //esto para poder hacer pruebas de ingenieria
        for (var entrie of data.entries()) {
            console.log(entrie[0] + ': ' + entrie[1]);
        }
        //Funcion ajax que envia los datos a la capa logica
        $.ajax({
            url: "../../processProveedor?accion=crearProveedor",
            type: "post",
            data: data,
            contentType: false,
            processData: false,
            //Funcion para mostrar los resultados del proceso de la funcion ajax 
            //dependiendo de la respuesta de la parte logica
            success: function (data) {
                console.log(data);
                //Seccion de codigo para cerrar el modal del formulario que crea el proveedor,
                //vaciar el formulario y resetearlo para que quede en blanco y poder reutilizarlo
                $("#modalRegistrarProveedor").modal("toggle");
                $("#frmRegisterP")[0].reset();
                $("#frmRegisterP").data('bootstrapValidator').resetForm();
                if (data == 1) {
                    //alerta del plugin sweetalert en caso tal de que el proceso sea exitoso
                    Swal.fire({
                        type: 'success',
                        title: '¡Registro Existoso! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 4000 //el tiempo que dura el mensaje en ms
                    });
                    listar();
                } else {
                    //alerta del plugin sweetalert en caso tal de que el proceso sea erroneo
                    Swal.fire({
                        //error
                        type: 'error',
                        confirmButtonColor: '#2f323a',
                        title: '¡Error al Registrar! ',
                        text: 'Intentelo de nuevo',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 4000 //el tiempo que dura el mensaje en ms
                    });
                }
            }
        });
    });
});

//Funcion para llenar el formulario"actualizar"
$(document).on('click', 'button.btnUpdate', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idProveedor = $(this).attr('id');
    var data = {idProveedor: idProveedor};
    $.ajax({
        url: "../../processProveedor?accion=listarProveedorId",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data.datos, function (i, field) {
                $('#idU').val(idProveedor);
                $('#razonSocialU').val(field.razonSocial);
                $('#nitU').val(field.nit);
                $('#emailPU').val(field.emailP);
                $('#numCellPhonePU').val(field.numCellPhoneP);
                $('#numLandLinePU').val(field.numLandLineP);
                $('#addressPU').val(field.addressP);
                $('#representanteLegalU').val(field.representanteLegal);
                $('#estadoU').val(field.estado);
            });
        }
    });
});
//Funciòn para actualizar un proveedor
$('#btnUpdateP').click(function (e) { //Funcion para validar el formulario
    $('#frmUpdateP').bootstrapValidator({message: 'Este valor no es valido',
        feedbackIcons: {alid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
        fields: {
            razonSocial: {
                validators: {
                    notEmpty: {message: 'La razon social  es requerida'}
                }
            },
            nit: {
                validators: {
                    notEmpty: {message: 'El nit es requerido'},
                    digits: {message: 'Ingrese solo numeros'},
                }
            },
            emailP: {
                validators: {
                    notEmpty: {message: 'El email es requerido'},
                    emailAddress: {message: 'Ingrese un correo valido'}
                }
            }
        }
    });
    $('#frmUpdateP').on('success.form.bv', function (e) {
        // Prevent form submission
        e.preventDefault();
        e.stopImmediatePropagation();
        var data = new FormData($('#frmUpdateP')[0]);

        for (var entrie of data.entries()) {
            console.log(entrie[0] + ': ' + entrie[1]);
        }

        $.ajax({
            url: "../../processProveedor?accion=ActualizarProveedor",
            type: "post",
            data: data,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    $("#modalEdicion").modal("toggle");
                    $("#frmUpdateP")[0].reset();
                    $("#frmUpdateP").data('bootstrapValidator').resetForm();
                    Swal.fire({
                        //error
                        type: 'success',
                        title: '¡ Proveedor actualizado exitosamente ! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 2000 //el tiempo que dura el mensaje en ms
                    });
                    listar();
                } else {
                    Swal.fire({
                        //error
                        type: 'error',
                        confirmButtonColor: '#2f323a',
                        title: '¡Error al Actualizar! ',
                        text: 'Intentelo de nuevo',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 4000 //el tiempo que dura el mensaje en ms
                    });
                }
            }
        });
    });
});



