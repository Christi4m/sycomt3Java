
<%@page import="javax.servlet.http.HttpServletRequest"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="controllers.controllerProduct"%>
<%
    controllerProduct cp = new controllerProduct();


%>
<%    HttpSession sesion = request.getSession(true);
    Object firstName = sesion.getAttribute("firstName") == null ? null : sesion.getAttribute("firstName");
    String htmlcode = "";
    if (firstName != null) {

        htmlcode = " <li class=\"menu-has-children justify-content-center\"><a href=\"\" id=\"navIngresar\">" + firstName + "</a>\n"
                + "            <ul>\n"
                + "              <li><a href='../../LogoutUser' id=\"navLogOut\">Cerrar Sesión</a></li>\n"
                + "              <li><a href=\"#\" id=\"navMiPerfil\">Mi Perfil</a></li>\n"
                + "              <li class=\"dropdown-divider\"></li>\n"
                + "            </ul>\n"
                + "          </li>";

    } else {

        htmlcode = " <li class=\"menu-has-children justify-content-center\"><a href=\"\" id=\"navIngresar\">Login</a>\n"
                + "            <ul>\n"
                + "              <li><a href=\"vistasAux/login.jsp\" id=\"navInicieSesion\">Inicieñ Sesión</a></li>\n"
                + "              <li><a href=\"vistasAux/login.jsp\" id=\"navRegistrese\">Regístrese</a></li>\n"
                + "              <li class=\"dropdown-divider\"></li>\n"
                + "              <li><a href=\"#\" id=\"navOlvideContraseña\">Olvide Mi Contraseña </a></li>\n"
                + "            </ul>\n"
                + "          </li>";
    }
%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>Luna Textil - Linos</title>
        <link rel="shortcut icon" href="../../img/isologo-final2.png">
        <meta content="" name="keywords">
        <meta content="" name="description">

        <!-- Bootstrap CSS -->
        <link href="<%= request.getContextPath()%>/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Librerias CSS -->

        <!--        <link href="../../lib/animate/animate.min.css" rel="stylesheet">-->


        <!-- Estilo css -->


        <link href="css/font-awesome.min.css" rel="stylesheet">
                <link href="css/prettyPhoto.css" rel="stylesheet">
                <link href="css/price-range.css" rel="stylesheet">
                <link href="css/animate.css" rel="stylesheet">
                <link href="css/main.css" rel="stylesheet">
        <link href="css/responsive.css" rel="stylesheet">

                <script src="js/html5shiv.js"></script>
                <script src="js/respond.min.js"></script>


    </head>

    <body>



        
        <header id="header"><!--header-->
            <div class="header_top"><!--header_top-->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="contactinfo">
                                <ul class="nav nav-pills">
                                    <li><a href=""><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
                                    <li><a href=""><i class="fa fa-envelope"></i> info@lunatextil.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="">
                            <div class="social-icons pull-right">
                                <ul class="nav navbar-nav list-inline list-group list-group-horizontal">
                                    <li><a href=""><i class="fa fa-facebook list-group-item"></i></a></li>
                                    <li><a href=""><i class="fa fa-twitter list-group-item"></i></a></li>
                                    <li><a href=""><i class="fa fa-linkedin list-group-item"></i></a></li>
                                    <li><a href=""><i class="fa fa-dribbble list-group-item"></i></a></li>
                                    <li><a href=""><i class="fa fa-google-plus list-group-item"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/header_top-->
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="header-middle bg-success"><!--header-middle-->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="logo pull-left">
                                <a href="index.jsp"><img style="width:15%;"src="<%= request.getContextPath()%>/images/img/isologo-final2.png" alt="" /></a>
                            </div>

                        </div>
                        <div class="col-sm-8">

                        </div>
                    </div>
                </div>
            </div><!--/header-middle-->


        </header><!--/header-->
        <!-- Aqui Finaliza el Header -->

        <section id="catalogo">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="left-sidebar">
                            <h2>Categorias</h2>
                            <div class="panel-group category-products" id="accordian"><!--category-productsr-->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                                <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                                Telajes
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="sportswear" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ul>
                                                <li><a href="">Paño </a></li>
                                                <li><a href="">Lino </a></li>
                                                <li><a href="">Seda </a></li>
                                                <li><a href="">Uniforme </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div><!--/category-productsr-->
                        </div>
                    </div>

                    <div class="col-sm-9 padding-right">
                        <div id="carProduct"class="features_items"><!--features_items-->
                            <h2 class="title text-center">Stock -Telas</h2>
                            <!--Cargar productos-->


                            <%= cp.PrintCart(request)%>

                        </div><!--features_items-->
                        <ul class="pagination">
                            <li class="active "><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">&raquo;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <footer id="footer"><!--Footer-->
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="companyinfo col-sm-12">
                                <h2><span>Luna</span>-Textil</h2>
                                <p>Telas soñadas a un clic de distancia</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="address">
                                <img src="images/home/map.png" alt="" />
                                <p class="text-center">Ak. 24 #65 - 19, Bogotá</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="footer-widget">
                    <div class="container">

                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2>Servicios</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="">Ayuda en linea</a></li>
                                    <li><a href="">Contáctenos</a></li>
                                    <li><a href="">Estado del pedido</a></li>
                                    <li><a href="">Cambiar locación</a></li>
                                    <li><a href="">Preguntas frecuentes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2>Compra Rápida</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="">Paño</a></li>
                                    <li><a href="">Lino</a></li>
                                    <li><a href="">Seda</a></li>
                                    <li><a href="">Uniforme</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2>Políticas</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="">Términos de Uso</a></li>
                                    <li><a href="">Política de privacidad</a></li>
                                    <li><a href="">Politica de reembolso</a></li>
                                    <li><a href="">Sistema de cobranza</a></li>
                                    <li><a href="">Sistema de entradas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2>Acerca de Luna Textil</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a href="">Información de la empresa</a></li>
                                    <li><a href="">Ubicación de la tienda</a></li>
                                    <li><a href="">Copyright</a></li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
                <div class="container">
                    <div class="copyright" id="Copyright">
                        &copy; Copyright SiComT3. Todos los derechos reservados
                    </div>
                    <div class="credits" id="Credits">
                        Diseñado por Gaes !8!
                    </div>
                </div>


        </footer><!--/Footer-->




        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

        <!-- JavaScript Librerias -->
        <!--Biblioteca JS minificada -->

        <script src="<%= request.getContextPath()%>/lib/jquery/jquery.min.js"></script>
        <script src="<%= request.getContextPath()%>/lib/bootstrap/js/bootstrap.js"></script>
        
                <script src="js/price-range.js"></script>
                <script src="js/jquery.scrollUp.min.js"></script>
                
                <script src="js/jquery.prettyPhoto.js"></script>
        


    </body>
</html>
