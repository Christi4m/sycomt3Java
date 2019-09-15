<%@page import="controllers.controllerProduct"%>
<%@page import="classes.Producto"%>
<%
    int id = Integer.parseInt(request.getParameter("id"));
    Producto producto = new controllers.controllerProduct().getProducto(id);

%>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Detalle Producto | Luna Textil</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/font-awesome.min.css" rel="stylesheet">
        <link href="css/prettyPhoto.css" rel="stylesheet">
        <link href="css/price-range.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">
        <link href="css/main.css" rel="stylesheet">
        <link href="css/responsive.css" rel="stylesheet">
        <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
        <![endif]-->       
        <link rel="shortcut icon" href="images/ico/favicon.ico">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">
    </head><!--/head-->

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
                        <div class="col-sm-6">
                            <div class="social-icons pull-right">
                                <ul class="nav navbar-nav">
                                    <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/header_top-->

            <div class="header-middle"><!--header-middle-->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="logo pull-left">
                                <a href="index.html"><img style="width:20%;"src="../../img/isologo.png" alt="" /></a>
                            </div>

                        </div>
                        <div class="col-sm-8">
                            <div class="shop-menu pull-right">
                                <ul class="nav navbar-nav">

                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Carrito</a></li>
                                    <li><a href="login.html"><i class="fa fa-lock"></i> Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/header-middle-->


        </header><!--/header-->

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="left-sidebar">

                            <div class="panel-group category-products" id="accordian"><!--category-productsr-->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                                <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                                Categorias
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="sportswear" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <ul>
                                                <li><a href="">Linos</a></li>
                                                <li><a href="">Seda </a></li>
                                                <li><a href="">Paño </a></li>
                                                <li><a href="">Uniforme</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div><!--/category-products-->


                        </div>
                    </div>

                    <div class="col-sm-9 padding-right">
                        <div class="product-details"><!--product-details-->
                            <div class="col-sm-5">
                                <div class="view-product">
                                    <img src="../../<%= producto.getImg()%>" alt="" />
                                </div>
                                <div id="similar-product" class="carousel slide" data-ride="carousel">
                                    <a class="left item-control" href="#similar-product" data-slide="prev">
                                        <i class="fa fa-angle-left"></i>
                                    </a>
                                    <a class="right item-control" href="#similar-product" data-slide="next">
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <div class="product-information"><!--/product-information-->
                                    <img src="images/product-details/new.jpg" class="newarrival" alt="" />
                                    <h2><%= producto.getNombre()%></h2>
                                    <p>Web ID: <%= producto.getId()%></p>
                                    <img src="images/product-details/rating.png" alt="" />
                                    <form action="../../addProduct" method="post">
                                        <span>
                                            <span>COP $<%= producto.getPrecio()%></span>
                                            <label>Cantidad:</label>
                                            <input type="hidden" value="<%= producto.getId()%>" name="idproducto">
                                            <input type="text" value="1" id="txt-cantidad" name="cantidad"/>
                                            <button type="submit" class="btn btn-fefault cart">
                                                <i class="fa fa-shopping-cart"></i>
                                                Agregar al carrito
                                            </button>
                                        </span>
                                    </form>
                                    <p><b>Disponibilidad:</b> En stock</p>
                                    <p><b>Condición:</b> Nuevo</p>
                                    <p><b>Marca:</b> LunaTextil</p>
                                    <p><b>Descripcion:</b> <%= producto.getDescripcion()%></p>

                                </div><!--/product-information-->
                            </div>
                        </div><!--/product-details-->
                    </div><!--/category-tab-->
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




    <script src="js/jquery.js"></script>
    <script src="js/price-range.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="js/main.js"></script>


</body>
</html>