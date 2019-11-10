
<%@page import="javax.servlet.http.HttpServletRequest"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="controllers.controllerProduct"%>
<%
    controllerProduct cp = new controllerProduct();


%>
<%    HttpSession sesion = request.getSession(true);
    Object firstName = sesion.getAttribute("firstName") == null ? null : sesion.getAttribute("firstName");
    String htmlcode = "";
   
    String list = "";
    if (firstName != null) {
         String rol = "";
         rol = sesion.getAttribute("typeTercero").toString();
         if(rol.equalsIgnoreCase("Administrador") ||rol.equalsIgnoreCase("Bodega-Jefe") ||rol.equalsIgnoreCase("Mensajero")){
             sesion.invalidate();
             out.print("<script>location.reload()</script>");
         }
    }

    if (firstName != null) {

        list = "<li class=\"dropdown\">\n"
                    + "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">"+firstName+"<span class=\"caret\"></span></a>\n"
                    + "<ul class=\"dropdown-menu\" aria-labelledby=\"about-us\">\n"
                    + "<li><a href=\"LogoutUser\">Cerrar Sesión</a></li>\n"
                    + "<li><a href=\"SI/vistas/Dashboard.jsp\">Mi Perfil</a></li>\n"                    
                    + "</ul>\n"
                    + "</li>";

    } else {
               list = "<li class=\"dropdown\">\n"
                    + "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Iniciar Sesión<span class=\"caret\"></span></a>\n"
                    + "<ul class=\"dropdown-menu\" aria-labelledby=\"about-us\">\n"
                    + "<li><a href=\"vistasAux/login.jsp\">Iniciar Sesión</a></li>\n"
                    + "<li><a href=\"vistasAux/login.jsp\">Registrarme</a></li>\n"
                    + "<li><a href=\"vistasAux/login.jsp\">Olvide Mi Contraseña</a></li>\n"
                    + "</ul>\n"
                    + "</li>";       
    }
%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>Luna Textil - Shop</title>
        <link rel="shortcut icon" href="../../img/isologo-final2.png">
        <meta content="" name="keywords">
        <meta content="" name="description">

        <!-- Bootstrap CSS -->
        <link href="<%= request.getContextPath()%>/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="<%= request.getContextPath()%>/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="<%= request.getContextPath()%>/lib/sweetAlert2/sweetalert2.min.css">
        <link rel="stylesheet" href="<%= request.getContextPath()%>/lib/BootstrapValidator/bootstrapValidator.css">
        <link rel="stylesheet" href="<%= request.getContextPath()%>/lib/BootstrapValidator/bootstrapValidator.min.css">

        <!-- Estilo css -->
        <link rel="stylesheet" href="vistasAux/css/styleCart.css">
        <link rel="stylesheet" href="vistasAux/css/estilos-responsive.css">
    </head>
    <body>
        <header id="header"><!--header-->
            <div class="header_top wow fadeInDown" data-wow-delay="0.8s" style="margin-bottom: 40px;"><!--header_top-->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="contactinfo">
                                <ul class="nav nav-pills">
                                    <li><a href=""><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
                                    <li><a href=""><i class="fa fa-envelope"></i> info@lunatextil.com</a></li>
                                </ul>
                            </div>

                        </div>
                        <div class="">
                            <div class="social-icons ">
                                <ul class="nav navbar-nav socialPerson" >
                                    <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="">
                            <div class="menu" id="" >
                                <ul class="nav navbar-nav nav-pills" style="float: right">

                                    <li><a href="<%= request.getContextPath()%>/vistasAux/Nosotros.jsp">Nosotros</a></li>                                    
                                    <%= list%>
                                    <li title="Idioma"class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span style="font-size: 20px;"class="fa fa-globe"></span> <span class="caret"></span></a>
                                        <ul class="dropdown-menu menuIdioma" aria-labelledby="about-us">
                                            <li><a href="#">Es</a></li>
                                            <li><a href="#">En</a></li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/header_top-->

            <div class="header-middle"><!--header-middle-->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 rowHead">
                            <div class="row wow fadeInUp">
                                <div class="logo pull-left">
                                    <a href="index.jsp" class="logo"><span><img style="width: 10%;"src="images/img/isologo-final2.png" alt="Lina Textil Logo"></span><b> LUNATEXTIL<span>.com</span></b></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 rowHead">
                            <div class="flipkart-navbar-search smallsearch ">
                                <div class="row itemRow">
                                    <input class="flipkart-navbar-input inputSearch col-xs-11" type="" placeholder="Busque productos, marcas y más" name="">
                                    <button class="flipkart-navbar-button buttonSearch col-xs-1">

                                        <span class="fa fa-search"></span>

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 rowBtnCart rowHead">
                            <div class="itemRow">
                                <button title="Carrito de Compras"type="button" id="openCart"class="btn btn-primary btnCart" data-toggle="modal" data-target="#cart"><span class="fa fa-cart-plus"></span> (<span class="total-count"></span>)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/header-middle-->


        </header><!--/header-->
        <!-- Aqui Finaliza el Header -->

        <section id="catalogo fadeInRight">
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="left-sidebar">
                            <h2>Categorias</h2>
                            <div class="panel-group category-products" id="accordian"><!--category-productsr-->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                                <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                                Telas
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="sportswear" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ul id="listCategorias">
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

                    <div class="col-sm-10 padding-right">
                        <div id="carProduct"class="features_items"><!--features_items-->
                            <h2 class="title text-center">Stock -Telas</h2>
                            <!--Cargar productos-->
                            <!-- Nav -->
                            <nav class="navbar  ">
                                <div class="row container" style="width: 100%;">
                                    <div class="col-md-12">


                                    </div>
                                </div>
                            </nav>


                            <!-- Main -->
                            <div class="container" style="width: 100%;"  >
                                <div id="stockShop"class="row">

                                </div>
                            </div>

                        </div>
                        <div class="pagination " style=" justify-content: center;display: flex;">
                            <ul id="pagination"class="pagination pagination-sm" style="margin: auto;">
                                <li class="active "><a href="">1</a></li>

                            </ul>
                        </div>
                    </div><!--features_items-->
                    <!-- modal insertar cantidad-->
                    <!-- The modal -->
                    <div class="modal fade" id="modalInsertCant" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content modal-lg">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 class="modal-title" id="modalLabel">Caracteristicas</h4>
                                </div>
                                <div class="modal-body modalCPr">
                                    <div class="row">
                                        <div style="padding-top: 30px;"class="col-md-6 colImg"></div> 
                                        
                                        <div class="col-md-6 colDetails"></div> 
                                        
                                    </div>                                  
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title" id="exampleModalLabel">Carrito</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body" style="color: black; border: none">
                                    <form enctype="multipart/form-data" method="post" action="" name="frmShop" id="frmShop"  class="form-horizontal col-sm-12 text-center">
                                        <button type="submit" id="btnOrderNow"class="btn colorbtn btn-primary">Ordenar Ahora</button>
                                        <button class="clear-cart btn btn-danger">Vaciar Carrito</button>
                                        <div class="form-group text-center">


                                            <div class="col-sm-6" style="display: none">
                                                <label class="col-md-4 control-label" for="detailsShop">Detalle Compra</label>  
                                                <input id="detailsShop" name="detailsShop" type="text" placeholder="Detalle Compra" class="form-control input-md" required="">
                                            </div>   
                                            <div class="col-sm-6" style="display: none">
                                                <label class="col-md-4 control-label" for="totalShop">Total</label>  
                                                <input id="totalShop" name="totalShop" type="text" placeholder="Total Compra" class="form-control input-md" required="">
                                            </div>   
                                        </div>   
                                        <table class="show-cart table">

                                        </table>
                                        <div>Total: $<span class="total-cart"></span></div>
                                    </form>


                                </div>

                                <div class="modal-footer" style="border:none    ">
                                    <button id="closeModalCart"type="button" class="btn colorbtn btn-primary" data-dismiss="modal">Cerrar</button>

                                </div>
                            </div>
                        </div>
                    </div> 
                    <!-- Fin del modal Ingresar Nuevo -->

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
            <div class="container containerCopyRiht">
                <div class="copyright" id="Copyright">
                    &copy; Copyright SiComT3. Todos los derechos reservados
                </div>
                <div class="credits" id="Credits">
                    Diseñado por Gaes !8!
                </div>
            </div>


    </footer><!--/Footer-->



    <div class="up">
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </div>


    <!-- JavaScript Librerias -->
    <!--Biblioteca JS minificada -->

    <script src="<%= request.getContextPath()%>/lib/jquery/jquery.min.js"></script>
    <script src="<%= request.getContextPath()%>/lib/bootstrap/js/bootstrap.js"></script>
    <script src="<%= request.getContextPath()%>/lib/sweetAlert2/sweetalert2.all.min.js"></script>
    <script src="<%= request.getContextPath()%>/lib/BootstrapValidator/bootstrapValidator.js"></script>
    <script src="<%= request.getContextPath()%>/lib/BootstrapValidator/bootstrapValidator.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.2/jquery.twbsPagination.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.2/jquery.twbsPagination.min.js"></script>


    <script src="Js/index.js"></script>





</body>
</html>
