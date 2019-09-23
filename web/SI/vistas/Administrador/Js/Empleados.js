$(document).ready(function () {
    listar();

});
var listar = function () {
    //funcion que lista todos los empleados utilizando el plugin datatable
    //trayendo los datos por medio de una funcion ajax que conecta con  el controlador 
    //terceros que es el que controla la gestion de los empleados, este a su vez
    //se conecta con el modelo que trae los datos desde la base de datos                            
    var table = $("#tableCrud").DataTable({

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

        language: idiomaEsp
    });
};

$(function () {
    //funcion para crear un empleado en la base de datos. en esta funcion capturamos
    //todos los datos que previamente se llenaron en el formulario por medio de la funcion de
    //jquey formdata, luego de capturar los datos se envian al controlador por medio de una 
    //funcion ajax y dependiendo de la respuesta del controlador se emite una alerta creada
    //con el plugin de jquery sweetalert2
    $('#btncrearempleado').click(function (e) {

        $('#frmCrearEmpleado').bootstrapValidator({

            feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},

            fields: {

                typeUser: {
                    validators: {
                        notEmpty: {message: 'Ingrese el tipo de empleado'}
                    }
                },
                tipoIdentificacionEmpleado: {
                    validators: {
                        notEmpty: {message: 'Ingrese el tipo de identificación'}

                    }
                },
                identificacionTercero: {
                    validators: {
                        notEmpty: {message: 'Ingrese el numero de documento'},
                        digits: {message: 'Ingrese solo numeros'}
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
                        notEmpty: {message: 'Ingrese el numero de hijos del empleado'}
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
        $('$frmCrearEmpleado').on('success.form.bv', function (e) {
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
});


