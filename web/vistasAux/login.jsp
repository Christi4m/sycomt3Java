<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="utf-8"> <!-- paa que acepte caracteres especiales -->
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <!-- para que se adapte a cualquier dispositivo -->
        <title>Sycomt3 - Ingresar</title><!-- Es el titulo-->
        <link rel="shortcut icon" href="img/isologo-final2.png"><!-- El icono de la pestaña dentro del navegador -->
        <meta content="" name="keywords">
        <meta content="" name="description">



        <!-- Bootstrap core CSS -->
        <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!--Libreria de iconos-->
        <link href="../lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
        <!-- Estilos personalizados -->
        <link href="css/estilosLogin.css" rel="stylesheet">
        <link href="../css/style-responsive.css" rel="stylesheet">


    </head>

    <body>
        <!-- **********************************************************************************************************************************************************
            Formulario de ingreso
            *********************************************************************************************************************************************************** -->
        <div id="login-page">
            <div class="container">
<!--                formulario de inicio de sesión-->
<form class="form-login" id="formLogin" action="../loginUser" method="post" enctype="multipart/form-data">
                    <h2 id="accerdert" class="form-login-heading">Acceder</h2>
                    <div class="login-wrap">
                        <input name="userAccess"id="userAccess" type="text" class="form-control" placeholder="Usuario" autofocus>
                        <br>
                        <input name="paswordAccess"id="paswordAccess" type="password" class="form-control" placeholder="Contraseña">

                        <input  class="remember-me" type="checkbox" value="remember-me">
                        <label id="recuerdame"for="[recuerdame]">Recuerdame</label>
                        <span class="pull-right">
                            <label class="checkbox">
                                <a id="olvide" data-toggle="modal" href="login.html#myModal"> Olvide mi Contraseña?</a>
                        </span>
                        </label>
                        <button id="buttonLogin" type="submit" class="btn btn-theme btn-block botonIngreso" href="#" ><i class="fa fa-lock"></i> INGRESAR</button>
                        <button type="button" name="button" class="btn btn-primary btn-block" onclick="traducir()">Traducir</button>
                        <hr>
                        <div id="registration"class="registration">
                            <h5 id="aunno">Aún no tienes una cuenta?<br/></h5>
                            <a id="crear" class="" href="" data-toggle="modal" data-target="#modalRegisterCustomer">
                                Crea una cuenta
                            </a>
                        </div>
                        
                    </div>
                    <!-- Modal -->
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 id="Recuperar" class="modal-title">Recuperar Contraseña?</h4>
                                </div>
                                <div class="modal-body">
                                    <p id="ingresesu">Ingrese su dirección de correo electrónico a continuación para restablecer su contraseña.</p>
                                    <input id="inputcorreo"type="text" name="email" placeholder="Correo" autocomplete="off" class="form-control placeholder-no-fix">
                                </div>
                                <div class="modal-footer">
                                    <button id="btncancelar"data-dismiss="modal" class="btn btn-default" type="button">Cancelar</button>
                                    <button id="btnenviar"class="btn btn-theme" type="button">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- modal -->
                </form>
            </div>
            <!--            inicio del modal que solicita datos para el registro de clientes-->
            <div class="modal fade col-md-12" id="modalRegisterCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalRegisterCustomerTitle">Registro Usuario</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <!--        modal que solicita los datos necesarios para registrar un cliente-->
                        <div class="modal-body">
                            <form method="post" action="../methodClient?accion=create"style="margin-top: 30px;"id="frmRegisterUserCustomer" class="form-horizontal col-sm-12 text-center" >
                                <div class="form-group text-center" >
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="tipoIdentificacionCliente">Tipo Identificación *</label>
                                        <select id="tipoIdentificacionCliente" name="tipoIdentificacionCliente" class="form-control">
                                            <option value="0">------------------------</option>
                                            <option value="C.C">C.C (Cédula de Ciudadanía)</option>
                                            <option value="C.E">C.E (Cédula de Extranjería)</option>
                                            <option value="Nit">NIT</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="identificacionCliente">Identificación *</label>  
                                        <input style="margin-bottom: 7px;"id="identificacionCliente" name="identificacionCliente" type="text" placeholder="Numero de Identificación " class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="firstName">Nombre *</label>    
                                        <input style="margin-bottom: 7px;"id="firstName" name="firstName" type="text" placeholder="Primer Nombre" class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="secondName">Nombre</label>
                                        <input style="margin-bottom: 7px;"id="secondName" name="secondName" type="text" placeholder="Segundo Nombre" class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="firstLastName">Apellido *</label>  
                                        <input style="margin-bottom: 7px;"id="firstLastName" name="firstLastName" type="text" placeholder="Primer Apellido" class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="secondLastName">Apellido *</label> 
                                        <input style="margin-bottom: 7px;"id="secondLastName" name="secondLastName" type="text" placeholder="Segundo Apellido" class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="email">E-Mail *</label> 
                                        <input style="margin-bottom: 7px;"id="email" name="email" type="text" placeholder="Correo Electrónico" class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="numCellPhone">Celular *</label>  
                                        <input style="margin-bottom: 7px;"id="numCellPhone" name="numCellPhone" type="text" placeholder="Numero de Celular" class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="numLandLine">Fijo *</label>  
                                        <input style="margin-bottom: 7px;"id="numLandLine" name="numLandLine" type="text" placeholder="Numero de Teléfono Fijo " class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="address">Dirección *</label>  
                                        <input style="margin-bottom: 7px;"id="address" name="address" type="text" placeholder="Dirección" class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-12">
                                        <label class="col-md-12" for="detailsAddress">Detalles *</label>
                                        <textarea Rows="3"placeholder="En este campo por favor ingrese todos los detalles de la dirección ingresada tales como barrio nombre de conjunto y alguna característica en especial para ubicar la dirección."style="margin-bottom: 7px;"class="form-control" id="detailsAddress" name="detailsAddress"></textarea>
                                    </div>

                                </div>
                                <div class="form-group text-center" >
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="username">Usuario *</label>  
                                        <input style="margin-bottom: 7px;"id="username" name="username" type="text" placeholder="Usuario de Acceso " class="form-control input-md" required="">
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="col-md-9 text-left" for="password">Contraseña *</label>  
                                        <input tooltip="sdf" id="password" name="password" type="text" placeholder="Contraseña de Acceso" class="form-control input-md" required="">

                                    </div>
                                </div>
                                <div class="col-sm-12" style="margin-top: 30px;">
                                    <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button id="botonVaciar" type="reset" name="botonVaciar" class="colorbtn btn btn-primary">Vaciar</button>
                                    <button id="buttonRegisterCustomerOP" type="submit" name="buttonRegisterCustomer" class="buttonRegisterCustomer colorbtn btn btn-primary">Aceptar</button>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal confirmar registro -->
            <div class="modal fade" id="modalRegisterConfirm" tabindex="-1" role="dialog" aria-labelledby="modalEliminarexampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="">
                                <span class="fa fa-close close1" aria-hidden="true"></span>
                            </button>
                            <h5 class="modal-title" id="exampleModalCenterTitle">Registro</h5>
                        </div>
                        <div class="modal-body">
                            <form class="form-horizontal col-sm-12 text-center">
                                <div class="" style="margin-top:25px;">
                                    <h4>¿Esta seguro que desea realizar registro?</h4>
                                </div>
                                <div class="col-sm-12" style="margin-top: 30px;">
                                    <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button id="buttonRegisterCustomer" type="submit" name="botonEliminar" data-dismiss="modal" class="colorbtn btn btn-primary">Eliminar</button>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin del confirmar registro -->

            <!-- Modal Result -->
            <div class="modal fade" id="modalResult" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="">
                                <span class="fa fa-close close1" aria-hidden="true"></span>
                            </button>

                        </div>
                        <div class="modal-body">
                            <form class="form-horizontal col-sm-12 text-center">
                                <div class="" style="margin-top:25px;">
                                    <h4 id="textoModalResult"></h4>
                                </div>
                                <div class="col-sm-12" style="margin-top: 30px;">
                                    <button id="buttonCloseModal"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin del modal result -->
        </div>
        <!-- archivos JavaScript -->
        <script src="../lib/jquery/jquery.min.js"></script>
        <script src="../lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="../js/main.js"></script>

        <!-- esta funcion permitira poner cualquier imagen de fondo de cualquier tamaÃ±o
         debido a que esta funcion adapta la imagen cualquier tamaÃ±o de pnatalla.-->


        <script type="text/javascript" src="../lib/jquery.backstretch.min.js"></script>
        <script>
                            $.backstretch("img/login-bg.jpg", {
                                speed: 500
                            });
        </script>

        <script>
            function traducir() {
                document.getElementById('usuario').placeholder = 'User';
                document.getElementById('contrasena').placeholder = 'Password';
                document.getElementById('accerdert').innerHTML = "Login";
                document.getElementById('recuerdame').innerHTML = "Remember Me";
                document.getElementById('olvide').innerHTML = "I forgot my password";
                document.getElementById('bingresar').innerHTML = "Login";
                document.getElementById('aunno').innerHTML = "Do not you have an account yet?";
                document.getElementById('crear').innerHTML = "Create an account";
                document.getElementById('Recuperar').innerHTML = "Recover password?";
                document.getElementById('ingresesu').innerHTML = "Enter your email address below to reset your password.";
                document.getElementById('btncancelar').innerHTML = "Cancel";
                document.getElementById('btnenviar').innerHTML = "Send";
                document.getElementById('inputcorreo').placeholder = 'E-mail';

            }

        </script>
        <script>
            $('#buttonRegisterCustomerOP').click(function (e) {
                e.preventDefault();
                $("#modalRegisterConfirm").modal("show");
            });
            $('#buttonRegisterCustomer').click(function (e) {
                e.preventDefault();
                var typeId = document.getElementById('tipoIdentificacionCliente').value;
                var numId = document.getElementById('identificacionCliente').value;
                var firstName = document.getElementById('firstName').value;
                var secondName = document.getElementById('secondName').value;
                var firstLastName = document.getElementById('firstLastName').value;
                var secondLastName = document.getElementById('secondLastName').value;
                var email = document.getElementById('email').value;
                var numCellPhone = document.getElementById('numCellPhone').value;
                var numLandLine = document.getElementById('numLandLine').value;
                var address = document.getElementById('address').value;
                var detailsAddress = document.getElementById('detailsAddress').value;
                var userAccess = document.getElementById('username').value;
                var passwordAccess = document.getElementById('password').value;
                $("#frmRegisterUserCustomer")[0].reset();
                $("#modalRegisterCustomer").modal("toggle");
                $("#modalRegisterConfirm").modal("toggle");

                $.ajax({
                    url: "../methodClient?accion=create",
                    type: "post",
                    data: {
                        typeId: typeId,
                        numId: numId,
                        firstName: firstName,
                        secondName: secondName,
                        firstLastName: firstLastName,
                        secondLastName: secondLastName,
                        email: email,
                        numCellPhone: numCellPhone,
                        numLandLine: numLandLine,
                        address: address,
                        detailsAddress: detailsAddress,
                        userAccess: userAccess,
                        passwordAccess: passwordAccess
                    },

                    success: function (data) {
                        $('#textoModalResult').text(data);
                        $("#modalResult").modal("show");

                    }
                });
            });
//        }sección del codigo para logear al usuario
            $('#buttonLogin').click(function (e) {
                
                e.preventDefault();
                var data = $('#formLogin').serialize();
                $.post("../loginUser?action=loginUser", data, function(res,est,jqXHR){
                 if(res == 1){
                     
                     setTimeout(function(){
                         window.location="../index.jsp"
                     }, 300);
                 }else{
                     $('#textoModalResult').text("Error Credenciales incorrectas intentelo nuevamente");
                        $("#modalResult").modal("show");
                 }
                });
            });
        </script>

    </body>

</html>
