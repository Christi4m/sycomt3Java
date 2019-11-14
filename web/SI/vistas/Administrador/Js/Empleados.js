$(document).ready(function () {
    listar();
    translate();
    trans();

});
listar = function () {
    //seccion de cosigo que controla la el campo date fecha inicio contrato para que no se puedan ingresar fechas anteriores al dia en curso
    //variiable que captura la fecha del dia en curso
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var jsDate = d.getFullYear() + '-' + (month) + '-' + day;
    var jsDate1 = d.getFullYear() + '-' + (month) + '-' + (day + 1);
    //asigancion de atributo min del campo fecha inicio contrato
    $("#fechaInicioContrato").attr({
        "min": jsDate
    });


    ///////////////////////////////////
    $(document).on('change', '#tipoContrato', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        if ($(this).val() === "Termino Indefinido" || $(this).val() === "" || $(this).val() === "Obra o Labor") {
            $("#FechaFinContrato").prop("disabled", true);
        } else {
            $("#FechaFinContrato").prop("disabled", false);
            $("#FechaFinContrato").attr({
                "min": jsDate1
            });
        }
    });

    //funcion que crea el cavas para poder convertir la imagen a data uri base 64
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
    //funcion que lista todos los empleados utilizando el plugin datatable
    //trayendo los datos por medio de una funcion ajax que conecta con  el controlador 
    //terceros que es el que controla la gestion de los empleados, este a su vez
    //se conecta con el modelo que trae los datos desde la base de datos
    var table = $("#tableCrud").DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i style="font-size:25px;"class="fas fa-copy"></i>',
                titleAttr: 'Copiar Dstos',
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
                title: 'Empleados',
                exportOptions: {
                    columns: [0, 1, 2, 3],
                },
                customize: function (doc) {

                    //Dar el 100% de ancho a la tabla 
                    doc.content[1].table.widths = ['10%', '50%', '20%', '20%'];
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
                                    fontSize: 10,
                                    text: 'Listado de Empleados Contratados en el Almacen'
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
                title: 'Empleados',
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
            url: "../../methodClient?accion=listarEmpleados",
            dataSrc: "datos"
        },
        columns: [

            {data: "id"},
            {data: "name"},
            {data: "typeTercero"},
            {data: "estadoTercero"},
            {data: "acciones"}

        ],
        createdRow: function (row, data, dataIndex) {
            $(row).find('td:eq(0)').attr('data-label', '#')
            $(row).find('td:eq(1)').attr('data-label', 'Nombre')
            $(row).find('td:eq(2)').attr('data-label', 'Cargo')
            $(row).find('td:eq(3)').attr('data-label', 'Estado')
            $(row).find('td:eq(4)').attr('data-label', 'Acciones')
            $(row).find('td:eq(1)').css({'-ms-word-break':'break-all','word-break':'break-all','word-break':'break-word',
                '-ms-hyphens':'auto','-moz-hyphens':'auto','-webkit-hyphens':'auto','hyphens':'auto'})
             
        
        
        
        },
        language: idiomaEsp
    });
};

$(function () {
    //funcion para crear un empleado en la base de datos. en esta funcion capturamos
    //todos los datos que previamente se llenaron en el formulario por medio de la funcion de
    //jquey formdata, luego de capturar los datos se envian al controlador por medio de una 
    //funcion ajax y dependiendo de la respuesta del controlador se emite una alerta creada
    //con el plugin de jquery sweetalert2
    //messaje de las validaciones
    var notEmptyTipeEmpleado = "Ingrese el tipo de empleado";

    $('#btncrearempleado').click(function (e) {
        $('#frmCrearEmpleado').bootstrapValidator({
            feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
            fields: {
                typeUser: {
                    validators: {
                        notEmpty: {message: notEmptyTipeEmpleado}

                    }
                },
                tipoIdentificacionEmpleado: {
                    validators: {
                        notEmpty: {message: 'Ingrese el tipo de identificación'},
                        digits: {message: 'Ingrese solo numeros'}
                    }
                },
                identificacionTercero: {
                    validators: {
                        notEmpty: {message: 'Ingrese el numero de documento'},
                        digits: {message: 'Ingrese solo numeros'},

                    }
                },
                firstName: {
                    validators: {
                        notEmpty: {message: 'Ingrese el primer nombre'}
                    }
                },
                firstLastName: {
                    validators: {
                        notEmpty: {message: 'Ingrese el primer apellido'}
                    }
                },
                secondName: {
                    validators: {
                        notEmpty: {enabled: false}
                    }
                },
                secondLastName: {
                    validators: {
                        notEmpty: {enabled: false}
                    }
                },
                email: {
                    validators: {
                        notEmpty: {message: 'Ingrese el E-mail'},
                        emailAddress: {message: 'Ingrese un correo valido'}
                    }
                },
                numCellPhone: {
                    validators: {
                        notEmpty: {message: 'Ingrese el numero celular'},
                        digits: {message: 'Ingrese solo numeros'}
                    }
                },
                numLandLine: {
                    validators: {
                        digits: {message: 'Ingrese solo numeros'}
                    }
                },
                address: {
                    validators: {
                        notEmpty: {message: 'Ingrese la dirección'}
                    }
                },
                tipoContrato: {
                    validators: {
                        notEmpty: {message: 'Ingrese el tipo de contrato'}
                    }
                },
                numContrato: {
                    validators: {
                        notEmpty: {message: 'Ingrese el numero del contrato'}
                    }
                },
                fechaInicioContrato: {
                    validators: {
                        notEmpty: {message: 'Ingrese la fecha inicial del contrato'}

                    }
                },
                FechaFinContrato: {
                    validators: {
                        notEmpty: {message: 'Ingrese la fecha final del contrato'}
                    }
                },
                estadoCivil: {
                    validators: {
                        notEmpty: {message: 'Ingrese el estado civil del empleado'}
                    }
                },
                numHijos: {
                    validators: {
                        notEmpty: {message: 'Ingrese el numero de hijos del empleado'},
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
                eps: {
                    validators: {
                        notEmpty: {message: 'Ingrese la eps del empleado'}
                    }
                },
                pensiones: {
                    validators: {
                        notEmpty: {message: 'Ingrese la entidad de pensiones del empleado'}
                    }
                },
                cesantias: {
                    validators: {
                        notEmpty: {message: 'Ingrese la entidad de censantias del empleado'}
                    }
                },
                arl: {
                    validators: {
                        notEmpty: {message: 'Ingrese la arl del empleado'}
                    }
                },
                cajaCompensacion: {
                    validators: {
                        notEmpty: {message: 'Ingrese la caja de compensación del empleado'}
                    }
                }

            }


        });
    });
    $('#frmCrearEmpleado').on('success.form.bv', function (e) {
        // Prevent form submission
        e.preventDefault();
        e.stopImmediatePropagation();
        var data = new FormData($('#frmCrearEmpleado')[0]);
//                                for (var entrie of data.entries()) {
//                                    console.log(entrie[0] + ': ' + entrie[1]);
//                                }
        //funcion ajax para mandar los datos capturados en la vista hacia el controlador
        $.ajax({
            url: "../../methodClient?accion=crearEmpleado",
            type: "post",
            data: data,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                $("#ModalCrearEmpleado").modal("toggle");
                $("#frmCrearEmpleado")[0].reset();
                if (data == 1) {
                    //alerta postiva sweetalert2 emitida dependiendo la respuesta del controlador
                    Swal.fire({
                        type: 'success',
                        title: '¡Registro Existoso! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 3000 //el tiempo que dura el mensaje en ms
                    });
                    listar();
                } else {
                    //alerta negativa sweetalert2 emitida dependiendo la respuesta del controlador
                    Swal.fire({
                        //error
                        type: 'error',
                        title: '¡Error al Registrar! ',
                        text: 'Intentelo de nuevo',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 3000 //el tiempo que dura el mensaje en ms
                    });
                }
            }
        });

    });


});
//funcion para traer los datos detalles de un empleado capturado el id del empleado
//en la variable idDetails y enviandolo como parametro en la funcion ajax la cual va al
//controlador y trae los datos asignados a ese empleado en particular
$(document).on('click', 'button.btnDetalles', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idDetails = $(this).attr('id');
    var data = {idDetails: idDetails};
    //Funcion ajax que trae los datos detalle del empleado                         
    $.ajax({
        url: "../../methodClient?accion=listarDetalleEmpleado",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {
                $('#bodyDV').html("");
                $('#bodyDV').append("<tr><td>" + field.tipoContrato + "</td><td>" + field.numContrato + "</td><td>" + field.fechaInicio + "</td><td>" + field.fechaFin + "</td><td>" + field.estadoCivil + "</td><td>" + field.numHijos + "</td><td>" + field.eps + "</td><td>" + field.pensiones + "</td><td>" + field.cesantias + "</td><td>" + field.arl + "</td><td>" + field.cajaCompensacion + "</td></tr>");
                $("#modalDetalles").modal("show");
            });
        }
    });
});
// funcion para asignarle usuario y contraseña al empleado en caso de ser necesario
//esta funcion promero verifica si el usuario ya tiene asignado un usuario y una contraseña
// en caso tal de que si emite una alerta diciendo que ya tiene acceso al sistema
// en caso tal de que  no despliega un modal solicitando el usuario y la contraseña a aignar
$(document).on('click', 'button.btnInsertUserAccess', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idEmpleado = $(this).attr('id');
    var data = {idEmpleado: idEmpleado};
    $.ajax({
        url: "../../methodClient?accion=validarUserAcces",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data === 1) {
                Swal.fire({
                    type: 'warning',
                    title: '¡Cuidado! ',
                    text: 'Este usuario ya cuenta con usuario y contraseña de acceso al sistema',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 3000 //el tiempo que dura el mensaje en ms
                });
            } else {
                $("#ModalUserAccess").modal("show");
                $(document).on('click', 'button#btnCrearUserAccess', function (e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    var data = new FormData($('#frmUserAccesEmpleado')[0]);

                    $.ajax({
                        url: "../../methodClient?accion=insertUserAccesEmpleado&idEmpleado=" + idEmpleado + "",
                        type: "post",
                        data: data,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            $("#frmUserAccesEmpleado")[0].reset();
                            $("#ModalUserAccess").modal("toggle");
                            console.log(data);
                            if (data == 1) {
                                Swal.fire({
                                    type: 'success',
                                    title: '¡Acceso Creado Exitosamente! ',
                                    width: 500,
                                    padding: '5em',
                                    showConfirmButton: false,
                                    timer: 2000 //el tiempo que dura el mensaje en ms
                                });
                            } else {
                                Swal.fire({
                                    //error
                                    type: 'error',
                                    title: '¡Error al Asignar Acceso! ',
                                    text: 'Intentelo de nuevo',
                                    width: 500,
                                    padding: '5em',
                                    showConfirmButton: false,
                                    timer: 2000 //el tiempo que dura el mensaje en ms
                                });
                            }
                        }
                    });
                });
            }
        }
    });
});



