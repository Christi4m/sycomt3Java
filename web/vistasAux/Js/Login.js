//function to load the neighborhoods depending on the locality
$(document).ready(function () {
    listNeighborhoods();
});
//function to destroy the plugin of the validations if it is active, with the button close or accept
$("#botonCerrar").on('click', function () {
    if ($('#frmRegisterUserCustomer').on('init.form.bv').data('bootstrapValidator')) {
        $("#frmRegisterUserCustomer").data('bootstrapValidator').destroy();
    }
    $("#frmRegisterUserCustomer")[0].reset();
});
$("#botonVaciar").on('click', function () {
    if ($('#frmRegisterUserCustomer').on('init.form.bv').data('bootstrapValidator')) {
        $("#frmRegisterUserCustomer").data('bootstrapValidator').destroy();
    }
    $("#frmRegisterUserCustomer")[0].reset();
});

//Function to login user into system
$('#buttonLogin').click(function (e) {
    e.preventDefault();
    //variable to save user and user password
    var data = $('#formLogin').serialize();
    //function to validate if user are registered into system
    $.post("../loginUser?action=loginUser", data, function (res, est, jqXHR) {
        console.log(res);
        if (res === "1") {
            var data = "";
            //function to verify the user's role and redirect it to their profile
            $.post("../loginUser?action=obtenerRol", data, function (res, est, jqXHR) {
                console.log(res);
                if (res === "Administrador" || res === "Bodega-Jefe" || res === "Mensajero") {
                    setTimeout(function () {
                        window.location = "../SI/vistas/Dashboard.jsp";
                    }, 300);
                } else if (res === "Cliente") {
                    setTimeout(function () {
                        window.location = "../index.jsp";
                    }, 300);
                } else {
                    Swal.fire({
                        //error
                        type: 'error',
                        confirmButtonColor: '#2f323a',
                        title: accessDenied,
                        html: '<h4 style="font-size:15px;">' + accessDeneidSub + '</4>',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 3000 //how long the message lasts in ms
                    });
                }
            });
        } else {
            Swal.fire({
                //error
                type: 'error',
                confirmButtonColor: '#2f323a',
                title: accessErrorM,
                html: '<h4 style="font-size:15px;">' + alertRegisteredErrorSub + '</4>',
                width: 500,
                padding: '5em',
                showConfirmButton: false,
                timer: 4000 //how long the message lasts in ms
            });
        }
    });
});


//function to register a user in the system
$('#buttonRegisterCustomerOP').click(function (e) {
    //function to start forms validation plugin (bootstrapValidator)
    $('#frmRegisterUserCustomer').bootstrapValidator({
        feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
        resetForm: true,
        fields: {
            tipoIdentificacionCliente: {
                validators: {
                    notEmpty: {message: tipoIdentificacionClienteM},
                    callback: function (value, validator, $field) {
                        if (value === '') {
                            return true;
                        }
                        return true;
                    }
                }
            },
            identificacionCliente: {
                validators: {
                    notEmpty: {message: IdentificacionClienteM},
                    digits: {message: digitsM}
                }
            },
            firstName: {
                validators: {
                    notEmpty: {message: firstNameM}
                }
            },
            secondName: {
                validators: {
                    notEmpty: {enabled: false}

                }
            },
            firstLastName: {
                validators: {
                    notEmpty: {message: firstLastNameM}
                }
            },
            secondLastName: {
                validators: {
                    notEmpty: {enabled: false}
                }
            },
            email: {
                validators: {
                    notEmpty: {message: emailM},
                    email: {message: emailMType}
                }
            },
            numCellPhone: {
                validators: {
                    notEmpty: {message: numCellPhoneM},
                    digits: {message: digitsM}
                }
            },
            numLandLine: {
                validators: {
                    notEmpty: {enabled: false},
                    digits: {message: digitsM}
                }
            },
            address: {
                validators: {
                    notEmpty: {message: addressM}
                }
            },
            localidadCliente: {
                validators: {
                    notEmpty: {message: localidadClienteM}
                }
            },
            barrioCliente: {
                validators: {
                    notEmpty: {message: barrioClienteM}
                }
            },
            detailsAddress: {
                validators: {
                    notEmpty: {message: detailsAddressM}
                }
            },
            username: {
                validators: {
                    notEmpty: {message: usernameM}
                }
            },
            password: {
                validators: {
                    identical: {
                        field: 'passwordConfirm',
                        message: passwordConfirmM
                    },
                    notEmpty: {message: passwordM}
                }
            },
            passwordConfirm: {
                validators: {
                    identical: {
                        field: 'password',
                        message: passwordConfirmM
                    },
                    notEmpty: {message: passwordM}
                }
            }

        }

    });

});
$('#frmRegisterUserCustomer').on('success.form.bv', function (e) {
    // Prevent form submission
    e.preventDefault();
    e.stopImmediatePropagation();
    var data = new FormData($('#frmRegisterUserCustomer')[0]);

    for (var entrie of data.entries()) {
        console.log(entrie[0] + ': ' + entrie[1]);
    }
    $("#modalRegisterCustomer").modal("toggle");
    Swal.fire({
        title: areYouSure,
        text: toResgister,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonTextM,
        width: 500,
        padding: '5em'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                url: "../methodClient?accion=create",
                type: "post",
                data: data,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data == 1) {
                        Swal.fire({
                            //error
                            type: 'success',
                            title: '<strong>' + alertRegisteredOk + ' </strong>',
                            width: 500,
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 2000 //el tiempo que dura el mensaje en ms
                        });
                        $("#frmRegisterUserCustomer")[0].reset();
                        $("#frmRegisterUserCustomer").data('bootstrapValidator').destroy();
                    } else {
                        Swal.fire({
                            //error
                            type: 'error',
                            title: '<strong>' + alertRegisteredError + '</strong> ',
                            html: '<h4 style="font-size:15px;">' + alertRegisteredErrorSub + '</4>',
                            width: '62em',
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 7000 //el tiempo que dura el mensaje en ms
                        });
                    }
                }
            });
        }
    })
});
//function to translate the login page in English
$(document).on('click', '#buttonTranslateEn', function (e) {
    if ($('#frmRegisterUserCustomer').on('init.form.bv').data('bootstrapValidator')) {
        $("#frmRegisterUserCustomer").data('bootstrapValidator').destroy();
    }
    e.preventDefault();
    $('#userAccess').attr('placeholder', 'User');
    $('#paswordAccess').attr('placeholder', 'Password');
    $('#recuerdame').text('Remember Me');
    $('#olvide').text('I forgot my password');
    $('#textLogin').text('Login');
    $('#aunno').text('Do not you have an account yet?');
    $('#crear').text('Create an account');
    $('#Recuperar').text('Recover password?');
    $('#ingresesu').text('Enter your email address below to reset your password.');
    $('#btncancelar').text('Cancel');
    $('#btnenviar').text('Send');
    $('#inputcorreo').attr('placeholder', 'E-mail');
    //Translate modal window to register user
    $('#modalRegisterCustomerTitle').text('Register User');
    $('#titleDateContct').text('Contact Information');
    $('#labelTypeIdenty').text('ID Type *');
    $('#typeIdSelect').text('Select an Option');
    $('#typeIdCC').text('C.C (Citizenship Card)');
    $('#typeIdCE').text('C.E (Foreigner ID)');
    $('#ladelID').text('Id *');
    $('#identificacionCliente').attr('placeholder', 'Identification number');
    $('#labelName').text('Name *');
    $('#firstName').attr('placeholder', 'First Name');
    $('#labelSecondName').text('Name');
    $('#secondName').attr('placeholder', 'Second Name');
    $('#labelFirstLastName').text('Last Name *');
    $('#firstLastName').attr('placeholder', 'First Last Name');
    $('#labelSecondLastName').text('Last Name');
    $('#secondLastName').attr('placeholder', 'Second Last Name');
    $('#email').attr('placeholder', 'E-mail');
    $('#labelCellPhone').text('Cell Phone *');
    $('#numCellPhone').attr('placeholder', 'Cell phone number');
    $('#labelLandLineNumber').text('Land Line');
    $('#numLandLine').attr('placeholder', 'Land Line Number');
    $('#labelAddress').text('Address *');
    $('#address').attr('placeholder', 'Address');
    $('#labelLocality').text('Locality *');
    $('#typeIdSelect1').text('Select an Option');
    $('#typeIdSelect2').text('Select an Option');
    $('#labelDetailsAddress').text('Details *');
    $('#textAreaDetailsAddress').attr('placeholder', 'In this field, please enter all the details of your address (neighborhood, residence name or any special feature to locate the address).');
    $('#legendAccessSystem').text('System Access Data');
    $('#labelUserName').text('User *');
    $('#username').attr('placeholder', 'Login User');
    $('#labelPassword').text('Password *');
    $('#password').attr('placeholder', 'Access Password');
    $('#labelConfirmPassword').text('Confirm Password *');
    $('#passwordConfirm').attr('placeholder', 'Confirm your Access Password');
    //Variables to translate plugin of forms validation (bootstrapValidator) and the alerts(sweetalert2)
    tipoIdentificacionClienteM = "The type of identification is required";
    IdentificacionClienteM = "The identification number is required.";
    firstNameM = "The first name is required.";
    firstLastNameM = "The first last name is required.";
    emailM = "Mail is required.";
    emailMType = "Enter a valid email.";
    numCellPhoneM = "Enter the cell number.";
    digitsM = "Enter numbers only.";
    addressM = "The address is required.";
    localidadClienteM = "The locality is required.";
    barrioClienteM = "The neighborhood is required.";
    detailsAddressM = "Address details are required.";
    usernameM = "The access user is required.";
    passwordM = "The access password is required.";
    passwordConfirmM = "Passwords do not match.";
    alertRegisteredOk = "Registered Successfully!";
    alertRegisteredError = "Registration failed!";
    alertRegisteredErrorSub = "Try again";
    confirmButtonText = "Yes, do it!";
    cancelButtonTextM = "Cancel";
    accessDenied = "Access Denied!";
    accessDeneidSub = "Verifique con el administrador si está autorizado para el ingreso al sistema.";
    accessErrorM = "Incorrect username or password!";
    areYouSure = "Are you sure?";
    toResgister = "To register!";
    $('#botonCerrar').text('Cancel');
    $('#botonVaciar').text('Clean');
    $('#buttonRegisterCustomerOP').text('Acept');
});
//function to translate the login page in Spanish
$(document).on('click', '#buttonTranslateEs', function (e) {
    if ($('#frmRegisterUserCustomer').on('init.form.bv').data('bootstrapValidator')) {
        $("#frmRegisterUserCustomer").data('bootstrapValidator').destroy();
    }
    e.preventDefault();
    $('#userAccess').attr('placeholder', 'Usuario');
    $('#paswordAccess').attr('placeholder', 'Contraseña');
    $('#recuerdame').text('Recuerdame');
    $('#olvide').text('Olvide mi Contraseña');
    $('#textLogin').text('Ingresar');
    $('#aunno').text('Aún no tienes una cuenta?');
    $('#crear').text('Crea una cuenta');
    $('#Recuperar').text('¿Recuperar contraseña?');
    $('#ingresesu').text('Ingrese su dirección de correo electrónico a continuación para restablecer su contraseña.');
    $('#btncancelar').text('Cancelar');
    $('#btnenviar').text('Enviar');
    $('#inputcorreo').attr('placeholder', 'Correo');
    //Translate modal window to register user
    $('#modalRegisterCustomerTitle').text('Registro Usuario');
    $('#titleDateContct').text('Datos de contacto');
    $('#labelTypeIdenty').text('Tipo Identificación *');
    $('#typeIdSelect').text('Seleccione una Opción');
    $('#typeIdCC').text('C.C (Cédula de Ciudadanía)');
    $('#typeIdCE').text('C.E (Cédula de Extranjería)');
    $('#ladelID').text('Identificación *');
    $('#identificacionCliente').attr('placeholder', 'Número de Identificación');
    $('#labelName').text('Nombre *');
    $('#firstName').attr('placeholder', 'Primer Nombre');
    $('#labelSecondName').text('Nombre');
    $('#secondName').attr('placeholder', 'Segundo Nombre');
    $('#labelFirstLastName').text('Apellido *');
    $('#firstLastName').attr('placeholder', 'Primer Apellido');
    $('#labelSecondLastName').text('Apellido');
    $('#secondLastName').attr('placeholder', 'Segundo Apellido');
    $('#email').attr('placeholder', 'Correo');
    $('#labelCellPhone').text('Celular *');
    $('#numCellPhone').attr('placeholder', 'Número de Celular');
    $('#labelLandLineNumber').text('Fijo');
    $('#numLandLine').attr('placeholder', 'Número de Teléfono Fijo');
    $('#labelAddress').text('Dirección *');
    $('#address').attr('placeholder', 'Dirección');
    $('#labelLocality').text('Localidad *');
    $('#typeIdSelect1').text('Seleccione una Opción');
    $('#typeIdSelect2').text('Seleccione una Opción');
    $('#labelDetailsAddress').text('Detalles *');
    $('#textAreaDetailsAddress').attr('placeholder', 'En este campo por favor ingrese todos los detalles de su dirección (barrio, nombre de conjunto resindencial o alguna característica en especial para ubicar la dirección).');
    $('#legendAccessSystem').text('Datos de acceso al sistema');
    $('#labelUserName').text('Usuario *');
    $('#username').attr('placeholder', 'Usuario de Acceso');
    $('#labelPassword').text('Contraseña *');
    $('#password').attr('placeholder', 'Contraseña de Acceso');
    $('#labelConfirmPassword').text('Confirmar Contraseña *');
    $('#passwordConfirm').attr('placeholder', 'Confirme su Contraseña de Acceso');
    $('#botonCerrar').text('Cancelar');
    $('#botonVaciar').text('Vaciar');
    $('#buttonRegisterCustomerOP').text('Aceptar');
    //Variables to translate plugin of forms validation (bootstrapValidator) and the alerts(sweetalert2)
    tipoIdentificacionClienteM = "El tipo de identificacion es requerido.";
    IdentificacionClienteM = "El numero de identificacion es requerido.";
    firstNameM = "El primer nombre es requerido.";
    firstLastNameM = "El primer apellido es requerido.";
    emailM = "El correo es requerido.";
    emailMType = "Ingrese un correo valido.";
    numCellPhoneM = "Ingrese el numero celular.";
    digitsM = "Ingrese solo numeros.";
    addressM = "La dirección es requerida.";
    localidadClienteM = "La localidad es requerida.";
    barrioClienteM = "El barrio es requerido.";
    detailsAddressM = "Los detalles de la dirección son requeridos.";
    usernameM = "El usuario de acceso es requerido.";
    passwordM = "La contraseña de acceso es requerida.";
    passwordConfirmM = "Las contraseñas no coinciden.";
    alertRegisteredOk = "¡Registrado Exitosamente!";
    alertRegisteredError = "¡Error al Registrar!";
    alertRegisteredErrorSub = "Intentelo Nuevamente";
    confirmButtonText = "Si, Realizalo!";
    cancelButtonText = "Cancelar";
    accessDenied = "¡Acceso Denegado!";
    accessDeneidSub = "Verifique con el administrador si esta autorizado para el ingreso al sistema";
    accessErrorM = "¡Usuario o Contraseña incorrectos!";
    areYouSure = "¿Estás Seguro?";
    toResgister = "!De realizar el registro!";
});

//Global Variables
var tipoIdentificacionClienteM = "El tipo de identificacion es requerido.";
var IdentificacionClienteM = "El numero de identificacion es requerido.";
var firstNameM = "El primer nombre es requerido.";
var firstLastNameM = "El primer apellido es requerido.";
var emailM = "El correo es requerido.";
var emailMType = "Ingrese un correo valido.";
var numCellPhoneM = "Ingrese el numero celular.";
var digitsM = "Ingrese solo numeros.";
var addressM = "La dirección es requerida.";
var localidadClienteM = "La localidad es requerida.";
var barrioClienteM = "El barrio es requerido.";
var detailsAddressM = "Los detalles de la dirección son requeridos.";
var usernameM = "El usuario de acceso es requerido.";
var passwordM = "La contraseña de acceso es requerida.";
var passwordConfirmM = "Las contraseñas no coinciden.";
var alertRegisteredOk = "¡Registrado Exitosamente!";
var alertRegisteredError = "¡Error al Registrar!";
var alertRegisteredErrorSub = "Intentelo Nuevamente";
var confirmButtonText = "Si, Realizalo!";
var cancelButtonTextM = "Cancelar";
var accessDenied = "¡Acceso Denegado!";
var accessDeneidSub = "Verifique con el administrador si esta autorizado para el ingreso al sistema";
var accessErrorM = "¡Usuario o Contraseña incorrectos!";
var areYouSure = "¿Estás Seguro?";
var toResgister = "!De realizar el registro!";


var listNeighborhoods = function () {
    var arrayAntonioNariño = ['Caracas', 'Ciudad Berna', 'Ciudad Jardín', 'Eduardo Frey', 'Fragua', 'Hortua',
        'Policarpa', 'Restrepo', 'San Antonio', 'Santander', 'Sena', 'Sevilla', 'Villa Mayor Oriental'];
    var arrayBarriosUnidos = ['Alcazares', 'Alcazares Norte', 'Baquero', 'Benjamin Herrera', 'Colombia', 'Concepción Norte',
        'Doce de Octubre', 'El Rosario', 'Entrerios', 'Escuela Militar', 'Jorge Eliecer Gaitan', 'Jose Joaquin Vargas',
        'Juan XVIII', 'La Aurora', 'La Castellana', 'La Esperanza', 'La Libertad', 'La Merced Norte', 'La Patria',
        'La Patria', 'La Paz', 'Los Andes', 'Metropolis', 'Muequeta', 'Once de Noviembre', 'Parque El Salitre', 'Parque PopularSalitre',
        'Polo Club', 'Popular Modelo', 'Quinta Mutis', 'Rafael Uribe', 'Rio Negro', 'San Felipe', 'San Fernando',
        'San Miguel', 'Santa Sofia', 'Siete de Agosto', 'Simon Bolívar'
    ];
    var arrayBosa = ['Andalucia II', 'Antonio Santos', 'Betania', 'Bosa', 'Bosa Nova', 'Brasil', 'Brasilia', 'Canaveralejo',
        'Charles de Gaulle', 'Chicala', 'Chico Sur', 'El Corzo', 'El Porvenir', 'El Remanso', 'El Retazo', 'Escosia',
        'Estación Bosa', 'Gran Britalia', 'Gran Colombiano', 'Gualoche', 'Islandia', 'Jardin Del Apogeo', 'Jimenez de Quesada',
        'Jorge Uribe Botero', 'Jose Antonio Galan', 'Jose Maria Carbonel', 'La Cabana', 'La Independencia', 'La Libertad', 'La Paz Bosa',
        'Las Margaritas', 'Los Laureles', 'Nueva Granada', 'Olarte', 'Osorio Diez', 'Osorio XXIII', 'Parcela El Porvenir',
        'Paso Ancho', 'San Antonio', 'San Bernardino', 'San Bernardino XVII', 'San Bernardino XIX', 'San Bernardino XVIII',
        'San Jose', 'San Pablo', 'San Pedro', 'Santa Fe de Bosa'];
    var arrayCandelaria = ['Belen', 'Centro Administrativo', 'Egipto', 'La Catedral', 'La Concordia', 'Las Aguas',
        'Santa Barbara'];
    var arrayChapinero = ['Antiguo Country', 'Bellavista', 'Bosque Calderon', 'Cataluna', 'Chapinero Central', 'Chapinero Norte',
        'Chico', 'Chico Norte', 'Chico Norte II', 'Chico Norte III', 'La Espartillal', 'El Nogal', 'El Paraiso', 'El Refugio',
        'El Retiro', 'El Seminario', 'Emaus', 'Granada', 'Ingemar', 'La Cabrera', 'La Porciuncula', 'La Salle',
        'Lago Gaitan', 'Las Acasias', 'Los Rosales', 'Maria Cristina', 'Marly', 'Pardo Rubio', 'Quinta Camacho',
        'San Martin', 'Santa Ana', 'Sucre', 'Via a La Calera'];
    var arrayEngativa = ['Alamos Norte', 'Autopista Medellin', 'Bellavista Occidental', 'Bochica', 'Bochica II',
        'Bolivia', 'Bonanza', 'Bosque Polular', 'Boyaca', 'Centro Engativa', 'Ciudad Bachue', 'Ciudadela Colsubsidio',
        'El Cedro', 'El Cortijo', 'El Dorado', 'El Encanto', 'El Laurel', 'El Madrigal', 'El Muelle', 'El Real',
        'Engativa', 'Florencia', 'Florida Blanca', 'Garces Navas', 'Jardin Botanico', 'La Cabana', 'La Estrada',
        'La Estradita', 'La Granja', 'La Primavera', 'La Serena', 'La Soledad Norte', 'Las Ferias', 'Los Alamos',
        'Los Cerezos', 'Minuto de Dios', 'Normadia', 'Paloblanco', 'Paris', 'Paris Gaitan', 'Qintas de Sta. Barbara',
        'Quirigua', 'San Ignacio', 'San Joaquin', 'Santa Helenita', 'Santa Cecilia', 'Santa Marta', 'Santa Monica',
        'Sn. Antonio Engativa', 'Tabora', 'Villa Amalia', 'Villa Del Mar', 'Villa Gladis', 'Villa Luz', 'Villas de Granada'];
    var arrayFontibon = ['Aereopuerto el Dorado', 'Atahualpa', 'Belen Fontibon', 'Bosque de Modelia', 'Brisas Aldea-Fontibon',
        'Capellania', 'Centro Fontibon', 'Ciud. Salitre Universal', 'El Carmen Fontibon', 'El Chango', 'El Refugio-La Zelfita',
        'El Tintal', 'Ferrocaja Fontibon', 'Flandes', 'Franco', 'Granjas de Techo', 'Guadual Fontibon', 'La Cabana Fontibon',
        'La Esperanza Norte', 'La Esperanza Sur', 'La laguna Fontibon', 'Modelia', 'Montevideo', 'Predio Caldas', 'Puente Grande',
        'Puerta de Teja', 'San Jose Fontibon', 'San Pablo-Jerico Fontibon', 'Santa Cecilia', 'Terminar de Transportes',
        'Versalles-Fontibon', 'Villemar'];
    var arrayKennedy = ['Alqueria', 'Alqueria la Fragua', 'Bavara', 'Boita', 'Calandaima', 'Campo Alegre',
        'Campohermoso', 'Casablanca', 'Castilla', 'Catalina', 'Catalina II', 'Chucua de la Vaca', 'Ciud. Kennedy Occidental',
        'Ciudad de Cali', 'Ciudad Kennedy', 'Class', 'Coop. De Sub Oficiales', 'Corabastos', 'Dindalito', 'Division Monterrey',
        'El Jazmin', 'El Paraiso', 'El Rubi', 'El Tintal', 'Galam', 'Gran Britalia I', 'Hipotecho', 'Jacqueline', 'Kennedy',
        'La Campina', 'La Cecilia', 'La Pampa', 'Las Acasias', 'Las Delicias', 'Las Dos Avenidas', 'Las Margaritas', 'Las Torres',
        'Llano Grande', 'Los Almendros', 'Lusitania', 'Mandalay', 'Margaritas', 'Marsella', 'Monterrey', 'Morabia II', 'Nuevo Techo',
        'Osorio XI', 'Osorio XII', 'Paraiso', 'Pastrana', 'Pastranita', 'Patio Bonito', 'Pio XII', 'Provivienda', 'Roma',
        'Saucedal', 'Tayrona', 'Techo', 'Timiza', 'Tintalito', 'Tocarema', 'Tundama', 'Villa Alsacia 2', 'Visión de Colombia'];
    var arrayLosMartires = ['Colseguros', 'Eduardo Santos', 'El Liston', 'El Progreso', 'El Vergel', 'La Estanzuela', 'La Favorita',
        'La Florida', 'La Pepita', 'La Sabana', 'Paloquemao', 'Ricaurte', 'Samper Mendoza', 'San Victorino',
        'Santa Fe', 'Santa Isable', 'Usatama', 'Veraguas', 'Voto Nacional'];
    var arrayPuenteAranda = ['Alcala', 'Autopista del Sur', 'Autopista Muzu', 'Barcelona', 'Batallon Caldas',
        'Bochica', 'Centro Industrial', 'Ciudad Montes', 'Colon', 'Comuneros', 'Cundinamarca', 'El Ejido',
        'El Telar', 'Estación Central', 'Galan', 'Gorgonzola', 'Industrial Centenario', 'Jorge Cortes',
        'La Alqueria', 'La Asunción', 'La Camelia', 'La Florida Occidental', 'La Pradera', 'la Trinidad',
        'Los Ejidos', 'Ortezal', 'Ospina Perez', 'Pensilvania', 'Primavera Occidental', 'Provivienda Norte',
        'Puente Aranda', 'Remanso', 'Salazar Gomez', 'San Eusebio', 'San Francisco', 'San Gabriel', 'San Rafael',
        'Santamatilde', 'Tibana'];
    var arrayRafaelUribe = ['Bravo Paez', 'Callejon De Santa Barbara', 'Centenario', 'Cerros de Oriente',
        'Claret', 'Puerto Rico', 'Diana Turbay', 'División Picota', 'El Playon', 'Granjas San Pablo', 'Granjas Santa Sofia',
        'Guiparma', 'Gustavo Restrepo', 'Hospital San Carlos', 'Ingles', 'La Arboleda Sur', 'La Picota', 'La Resurreción',
        'Libertador', 'Los Arrayanes', 'Los Molinos', 'Marco Fidel Suarez', 'Marruecos', 'Murillo Toro', 'Olaya', 'Palermo Sur',
        'Quiroga', 'San Agustin', 'San Jorge Sur', 'San Jose', 'San Luis', 'Santa Lucia', 'Santiago Perez',
        'Sociego Sur', 'Villa Mayor'];
    var arraySanCristobal = ['20 de Julio', 'Altamira', 'Altos del Poblado', 'Altos del Zuque', 'Atenas', 'Barcelona Sur',
        'Bellavista Sur', 'Bello Orizonte', 'Buenos Aires', 'Calvo Sur', 'Canada o Guira', 'Cordoba', 'El Paraiso',
        'El Pinar', 'El Triangulo', 'Granada Sur', 'Juan Rey', 'La Belleza', 'La Gloria', 'La Nueva Gloria', 'La Victoria',
        'Las Brisas', 'Las Gaviotas', 'Las Guacamayas', 'Las Lomas', 'Las Mercedes', 'Los Alpes', 'Los Libertadores',
        'Modelo Sur', 'Molino de Oriente', 'Monte Carlo', 'Montebello', 'Moralba', 'Nariño Sur', 'Nueva Nelly',
        'Primero de Mayo', 'Puente Colorado', 'Quindio', 'Quinta Ramos', 'Ramajal', 'San Blas 2 Sector',
        'San Cristobal', 'San Isidro', 'San Javier', 'San Jose Sur', 'San Martin', 'San Pedro', 'San Rafael',
        'San Vicente', 'Santa Ana Sur', 'Santa Ines', 'Santa Maria', 'Santa Rita Sur Oriental', 'Sociego',
        'Suramerica', 'Tivaque', 'Velodromo', 'Villa de los Alpes', 'Villa de los Alpes II Sec', 'Villabel'];
    var arraySantaFe = ['Bosque Izquierdo', 'Cerros', 'El Dorado', 'El Guavio', 'El Rocio', 'Girardor',
        'La Alameda', 'La Capuchina', 'La Macarena', 'La Merced', 'La Pena', 'La Perseverencia', 'La Veracruz',
        'Las Cruces', 'Las Nieves', 'Los Laches', 'Lourdes', 'Parque Nacional', 'Ramirez', 'Sagrado Corazon',
        'Samper', 'San Bernardo', 'San Diego', 'San Martin', 'Santa Ines', 'Vitelma'];
    var arraySuba = ['Altos de Suba', 'Atenas', 'Aures', 'Aures II', 'Bosque de san Jorge', 'Britalia',
        'Campanela', 'Canodromo', 'Cantagallo', 'Casa Blanca', 'Ciudad Hunza', 'Ciudad Jardin Norte', 'Club Los Lagartos',
        'Conejero', 'Costa Azul', 'Division de Tibabuyes Occ', 'El Batan', 'El Capitolio', 'El Pino', 'El Poa', 'El Rincos',
        'El Salitre', 'Escuela de Carabineros', 'Estoril', 'Gilmar', 'Julio Florez', 'La Chucua', 'La Gaitana',
        'Lago de Suba', 'Las Flores', 'Las Mercedes Suba', 'Las Villas', 'Las Villas', 'Lisboa', 'Lombardia',
        'Los Andes Norte', 'Los Naranjos', 'Mazuren', 'Mirandela', 'Monaco', 'Naranjos', 'Niza', 'Nizasuba', 'Nueva Tibabuyes',
        'Nueva Zelanda', 'Pasadena', 'Portales del Norte', 'Potosi', 'Potrerillos', 'Prado Veraniego', 'Puente Largo',
        'Puerta del Sol', 'Rincon de Santa Ines', 'Sabana de Tibabuyes', 'San Cayetano', 'San Cecilia', 'San Jorge',
        'San Jose de Bavaria', 'San Jose del Prado', 'San Jose V Sector', 'San Pedro de Suba', 'Santa Helena',
        'Santa Helena I', 'Santa Rosa', 'Suba Naranjos', 'Suba Urbano', 'Tibabuyes', 'Tuna', 'Victoria Norte', 'Villa del Prado',
        'Villa Elisa', 'Villa Maria', 'Walessa'];
    var arrayTeusaquillo = ['Acevedo Tejada', 'Alfonso Lopez', 'Armenia', 'Banco Central', 'Belalcazar', 'Campin Occidental',
        'Centro Nariño', 'Chapinero Sur Occidental', 'Ciud. Salitre Nor-Oriental', 'Ciud. Salitre Sur-Oriental',
        'Ciudad Universitaria', 'Ctro Admivo. Occidente', 'El Campin', 'El Recuerdo', 'El Salitre', 'Estrella', 'Gran America',
        'La Esmeralda', 'La Magdalena', 'La Soledad', 'Las Americas', 'Nicolas de Federman', 'Palermo', 'Parque Simon Bolívar',
        'Paulo VI', 'Quesada', 'Quinta Paredes', 'Rafael Nunez', 'San Luis', 'Santa Teresita', 'Sears', 'Teusaquillo', 'Abraham Lincoln',
        'Area Artillera', 'El Carmen', 'El Tunal', 'Escuela General Santander', 'Fatima', 'Isla del Sol', 'La Ronda',
        'Muzu', 'Nuevo Muzu', 'Samore', 'San Benito', 'San Carlos', 'San Vicente', 'Tunjuelito', 'Venecia'];
    var arrayUsaquen = ['Acasias Usaquen', 'Barrancas', 'Bella Suiza', 'Bosque de Pinos', 'Canaima', 'Caobos Salazar',
        'Cedritos', 'Cedro Narvaez', 'Cedro Salazar', 'Country Club', 'Ct.Norte Km 23', 'El Cerezo', 'El Codito', 'El Contador',
        'El Pite', 'El Redil', 'El Verenal', 'Escuela De Caballeria', 'Escuela de Infanteria', 'Estrella del Norte', 'Ginebra',
        'Horizontes', 'La Calleja', 'La Carolina', 'La Cita', 'La Liberia', 'La Uribe', 'Las Granjas del Norte', 'Las Margaritas',
        'Las Orquideas', 'Lisboa', 'Los Cedros', 'Molinos Norte', 'Rincon del Chico', 'San Antonio', 'San Cristobal Norte',
        'San Gabriel Norte', 'San Isidro', 'San Jose  de Usaquen', 'San Patricio', 'Santa Ana', 'Santa Barbara',
        'Santa Bibiana', 'Santa Teresa', 'Soratama', 'Sta Celilia Nte Pate Alta', 'Tibabita', 'Toberin', 'Torca', 'Unicentro',
        'Usaquen'];
    var arrayUsme = ['Alfonso Lopez', 'Arrayanes', 'Barranquillita', 'Barsuelos', 'Bolonia', 'Centro Usme', 'Charala', 'Chuniza', 'Comuneros',
        'Danubio', 'Duitama', 'El Bosque', 'El Portal', 'El Uval', 'Gran Yomasa', 'Granada Sur', 'Juan Jose Rondon', 'La Andrea',
        'La Aurora', 'La Cabana', 'La Picota Sur', 'Liliana', 'Los Arrayanes', 'Los Soches', 'Marichuela', 'Monte Blanco',
        'Pepinitos', 'Porvenir', 'San Andres de los Altos', 'San Juan Bautista', 'San Pedro', 'Santa Librada', 'Serranias',
        'Tibaque Sur', 'Tocaimita', 'Tunjuelito', 'Usminia', 'Villa Diana', 'Villa Israel', 'Virrey', 'Yomasa'];

    $(document).on('change', '#localidadCliente', function (e) {
//        e.preventDefault();
//        e.stopImmediatePropagation();

        if ($(this).val() === "Antonio Nariño") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayAntonioNariño.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayAntonioNariño[i] + "'>" + arrayAntonioNariño[i] + "</option>");
            }
        }
        if ($(this).val() === "Barrios Unidos") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayBarriosUnidos.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayBarriosUnidos[i] + "'>" + arrayBarriosUnidos[i] + "</option>");
            }
        }
        if ($(this).val() === "Bosa") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayBosa.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayBosa[i] + "'>" + arrayBosa[i] + "</option>");
            }
        }
        if ($(this).val() === "La Candelaria") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayCandelaria.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayCandelaria[i] + "'>" + arrayCandelaria[i] + "</option>");
            }
        }

        if ($(this).val() === "Chapinero") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayChapinero.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayChapinero[i] + "'>" + arrayChapinero[i] + "</option>");
            }
        }
        if ($(this).val() === "Engativá") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayEngativa.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayEngativa[i] + "'>" + arrayEngativa[i] + "</option>");
            }
        }
        if ($(this).val() === "Fontibón") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayFontibon.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayFontibon[i] + "'>" + arrayFontibon[i] + "</option>");
            }
        }
        if ($(this).val() === "Kennedy") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayKennedy.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayKennedy[i] + "'>" + arrayKennedy[i] + "</option>");
            }
        }
        if ($(this).val() === "Los Mártires") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayLosMartires.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayLosMartires[i] + "'>" + arrayLosMartires[i] + "</option>");
            }
        }
        if ($(this).val() === "Puente Aranda") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayPuenteAranda.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayPuenteAranda[i] + "'>" + arrayPuenteAranda[i] + "</option>");
            }
        }
        if ($(this).val() === "Rafael Uribe Uribe") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayRafaelUribe.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayRafaelUribe[i] + "'>" + arrayRafaelUribe[i] + "</option>");
            }
        }
        if ($(this).val() === "San Cristobal") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arraySanCristobal.length; i++) {
                $("#barrioCliente").append("<option value='" + arraySanCristobal[i] + "'>" + arraySanCristobal[i] + "</option>");
            }
        }
        if ($(this).val() === "Santa Fe") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arraySantaFe.length; i++) {
                $("#barrioCliente").append("<option value='" + arraySantaFe[i] + "'>" + arraySantaFe[i] + "</option>");
            }
        }
        if ($(this).val() === "Suba") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arraySuba.length; i++) {
                $("#barrioCliente").append("<option value='" + arraySuba[i] + "'>" + arraySuba[i] + "</option>");
            }
        }
        if ($(this).val() === "Teusaquillo") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayTeusaquillo.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayTeusaquillo[i] + "'>" + arrayTeusaquillo[i] + "</option>");
            }
        }
        if ($(this).val() === "Usaquén") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayUsaquen.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayUsaquen[i] + "'>" + arrayUsaquen[i] + "</option>");
            }
        }
        if ($(this).val() === "Usme") {
            $("#barrioCliente").prop("disabled", false);
            $("#barrioCliente").append("<option value=''></option>");
            $("#barrioCliente").html("");
            for (var i = 0; i < arrayUsme.length; i++) {
                $("#barrioCliente").append("<option value='" + arrayUsme[i] + "'>" + arrayUsme[i] + "</option>");
            }
        }

    });
}





