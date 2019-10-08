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

        <%@include file= "../SI/vistas/dependencias/dependenciasCss.jsp"%>
        <!-- Estilos personalizados -->
        <link href="css/estilosLogin.css" rel="stylesheet">
    </head>
    <body>
        <!-- *****************************
            Formulario de ingreso
          ******************************* -->
        <div id="login-page">
            <div class="container">
                <!--                formulario de inicio de sesión-->
                <form class="form-login" id="formLogin" action="../loginUser" method="post">


                    <h2 id="accerdert" class="form-login-heading"><img src="../img/LogoSycomt3FondoNegro.png" width="200" height="100" alt="Logo"/></h2>
                    <div class="login-wrap">
                        <input name="userAccess"id="userAccess" type="text" class="form-control" placeholder="Usuario" autofocus>
                        <br>
                        <input style="margin-bottom: 10px;" name="paswordAccess"id="paswordAccess" type="password" class="form-control" placeholder="Contraseña">

                        <input  class="remember-me" type="checkbox" value="remember-me">
                        <label style="margin-bottom: 10px;" id="recuerdame"for="[recuerdame]">Recuerdame</label>

                        <button style="margin: auto;margin-bottom: 20px;"id="buttonLogin" type="submit" class="rounded btn-block botonIngreso" href="#" >INGRESAR  <i class="fa fa-sign-in"></i></button>


                        <button onclick="translateEnglish()"id="buttonTranslateEn"class="btn btnAgregar" type="button">EN</button>
                        <button style="float: right;"onclick="translateSpanish()"id="buttonTranslateEs"class="btn btnAgregar" type="button">ES</button>



                    </div>

                </form>
            </div>


        </div>
        <!-- archivos JavaScript -->
        <%@include file="../SI/vistas/dependencias/dependenciasJS.jsp"%>
        <!--seccion de codigo para traducir la pagina-->
        <script>
            function translateEnglish() {

                document.getElementById('buttonLogin').innerHTML = 'LOGIN  ';
                $('#buttonLogin').append('<i class="fa fa-sign-in"></i>');
                document.getElementById('recuerdame').innerHTML = 'Remember Me';
            }
            function translateSpanish() {
                document.getElementById('buttonLogin').innerHTML = 'INGRESAR  ';
                $('#buttonLogin').append('<i class="fa fa-sign-in"></i>');
                document.getElementById('recuerdame').innerHTML = 'Recuerdame';
            }
        </script>
        <!--fin de la seccion de traduccion de la pagina-->


        <script>

//        sección del codigo para logear al usuario
            $('#buttonLogin').click(function (e) {

                e.preventDefault();
                var data = $('#formLogin').serialize();
                $.post("../../loginUser?action=loginUser", data, function (res, est, jqXHR) {
                    console.log(res);
                    if (res === "1") {
                        var data = "";
                        $.post("../../loginUser?action=obtenerRol", data, function (res, est, jqXHR) {
                            console.log(res);
                            if (res === "Administrador" || res === "Bodega-Jefe" || res === "Mensajero") {
                                setTimeout(function () {
                                    window.location = "SI/vistas/Dashboard.jsp";
                                }, 300);
                            } else if(res === "Cliente"){
                                 setTimeout(function () {
                                    window.location = "../index.jsp";
                                }, 300);
                            }else {
                                Swal.fire({
                                    //error
                                    type: 'error',
                                    confirmButtonColor: '#2f323a',
                                    title: '¡Acceso Denegado! ',
                                    text: 'Verifique con el administrador si esta autorizado para el ingreso al sistema',
                                    width: 500,
                                    padding: '5em',
                                    showConfirmButton: false,
                                    timer: 6000 //el tiempo que dura el mensaje en ms
                                });
                            }
                        });

                    } else {
                        Swal.fire({
                            //error
                            type: 'error',
                            confirmButtonColor: '#2f323a',
                            title: '¡Credenciales incorrectas! ',
                            text: 'Intentelo de nuevo',
                            width: 500,
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 4000 //el tiempo que dura el mensaje en ms
                        });
                    }
                });
            });
        </script>
    </body>
</html>
