<%@page import="classes.Producto"%>
<%@page import="controllers.controllerProduct"%>
<%@page import="classes.Articulo"%>
<%@page import="java.util.ArrayList"%>
<%
    HttpSession sesion = request.getSession(true);
    ArrayList<Articulo> articulos = sesion.getAttribute("carrito") == null ? null : (ArrayList) sesion.getAttribute("carrito");
    Object firstName = sesion.getAttribute("firstName") == null ? null : sesion.getAttribute("firstName");
    String htmlcode = "";
    if (firstName != null) {

        htmlcode = " <li class=\"menu-has-children justify-content-center\"><a href='' id=\"navIngresar\">" + firstName + "</a>\n"
                + "            <ul>\n"
                + "              <li><a href='../../LogoutUser' id=\"navLogOut\">Cerrar Sesiòn</a></li>\n"
                + "              <li><a href=\"#\" id=\"navMiPerfil\">Mi Perfil</a></li>\n"
                + "              <li class=\"dropdown-divider\"></li>\n"
                + "            </ul>\n"
                + "          </li>";

    } else {

        htmlcode = " <li class=\"menu-has-children justify-content-center\"><a href=\"../login.jsp\" id=\"navIngresar\">Login</a>\n" + " </li>";
    }
%>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Cart | E-Shopper</title>
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
            <button id="btnEnglish"class="btn btnAgregar">EN</button>
            <button id="btnSpanish"class="btn btnAgregar">ES</button>
            <div class="header-middle"><!--header-middle-->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="logo pull-left">
                                <a href="index.jsp"><img style="width:20%;"src="../../img/isologo.png" alt="" /></a>
                            </div>

                        </div>
                        <div class="col-sm-8">
                            <div class="shop-menu pull-right">
                                <ul class="nav navbar-nav">

                                    <li><a clas="fa fa-shopping-cart"id="cart"href="cart.jsp">Carrito</a></li>
                                        <%=htmlcode%>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/header-middle-->


        </header><!--/header-->


        <section id="cart_items">
            <div class="container">

                <div class="table-responsive cart_info" id="cart-container">
                    <table class="table table-condensed" id="shop-table">
                        <thead>
                            <tr class="cart_menu">
                                <td id="tdProduct" class="image">Producto</td>
                                <td id="tdDes" class="description"></td>
                                <td id="tdId" class="id">Id</td>
                                <td id="tdPrice" class="price">Precio</td>
                                <td id="tdQuantity" class="quantity">Cantidad</td>
                                <td id="tdTotal" class="total">Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>


                            <%
                                controllerProduct cp = new controllerProduct();
                                double total = 0;
                                if (articulos != null) {

                                    for (Articulo a : articulos) {
                                        Producto producto = cp.getProducto(a.getIdProducto());
                                        total += a.getCantidad() * producto.getPrecio();


                            %>

                            <tr>
                                <td class="cart_product">
                                    <a href=""><img src="../../<%= producto.getImg()%>" alt="" width="120"></a>
                                </td>
                                <td class="cart_description">
                                    <h4><a href=""><%= producto.getNombre()%></a></h4>
                                    <p>       </p>
                                </td>
                                <td class="cart_price">
                                    <p><%= producto.getId()%></p>

                                </td>

                                <td class="cart_price numero">
                                    <p>$<%= producto.getPrecio()%></p>
                                </td>
                                <td class="cart_quantity">
                                    <div class="cart_quantity_button">

                                        <input class="cart_quantity_input" type="text" name="quantity" value="<%= a.getCantidad()%>" autocomplete="off" size="2">

                                    </div>
                                </td>
                                <td class="cart_total">
                                    <p class="cart_total_price">$<%= Math.round(producto.getPrecio() * a.getCantidad())%></p>
                                </td>
                                <td class="cart_delete">
                                    <span id="idarticulo" style="display:none;"><%= producto.getId()%></span>
                                    <a class="cart_quantity_delete" href="" id="deleteitem"><i class="fa fa-times"></i></a>
                                </td>
                            </tr>

                            <%}
                                    sesion.setAttribute("factura", articulos);

                                }%>
                        </tbody>

                    </table>
                    <% if (articulos == null) {%>
                    <h4 id="notArtCart">No hay Articulos en el carro</h4>
                    <%}%>

                    <div class="container">
                        <div class="heading">
                            <h3 id="detallefact">Detalle Factura Compra</h3>

                        </div>
                        <div class="row">

                            <div class="col-sm-6">
                                <div class="total_area">
                                    <ul>
                                        <li id="cartSubTotal">Carrito Sub Total <span id="txt-subtotal">$<%= Math.round(total * 100.0) / 100.0%></span></li>

                                        <li id="costEnvio">Costo de envío<span id="gratis">Gratis</span></li>
                                        <li>Total <span id="txt-total"><%= Math.round(total * 100.0) / 100.0%></span></li>
                                    </ul>

                                    <button id="generarCompra" class="btn btn-default check_out" >Realizar Compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#"id="segirComprando">Seguir Comprando</a>
            </div>
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
                                    <button id="buttonCloseModal"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button id="buttonLogin"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin del modal result -->
            <!-- Modal Result -->
            <div class="modal fade" id="modalResultCarrito" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                    <h4 id="textoModalResultCarrito"></h4>
                                </div>
                                <div class="col-sm-12" style="margin-top: 30px;">
                                    <button id="buttonCloseModal"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button id="buttonllenarCarrito"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin del modal result -->
            <!-- Modal Result -->
            <div class="modal fade" id="modalResultVenta" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                    <h4 id="textoModalResultVenta"></h4>
                                </div>
                                <div class="col-sm-12" style="margin-top: 30px;">
                                    <button id="buttonCloseModalVenta"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    <button id="buttonllenarCarrito"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            <!-- Fin del modal result -->

        </section> <!--/#cart_items-->

        <section id="do_action">

        </section><!--/#do_action-->

        <footer id="footer"><!--Footer-->
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="companyinfo col-sm-12">
                                <h2><span>Luna</span>-Textil</h2>
                                <p id="slogan">Telas soñadas a un clic de distancia</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="address">
                                <img src="images/home/map.png" alt="" />
                                <p class="text-center">Ak. 24 #65 - 19, Bogotà</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="footer-widget">
                    <div class="container">

                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2 id="services">Servicios</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a id="help"href="">Ayuda en linea</a></li>
                                    <li><a id="contact"href="">Contáctenos</a></li>
                                    <li><a id="estado"href="">Estado del pedido</a></li>
                                    <li><a id="cambiarLocacion"href="">Cambiar locación</a></li>
                                    <li><a id="preguntas"href="">Preguntas frecuentes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2 id="shop">Compra Rápida</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a id="paÃ±o"href="">Paño</a></li>
                                    <li><a id="lino"href="">Lino</a></li>
                                    <li><a id="seda"href="">Seda</a></li>
                                    <li><a id="uniforme"href="">Uniforme</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2 id="politicas">Políticas</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a id="terminos"href="">Términos de Uso</a></li>
                                    <li><a id="politica"href="">Política de privacidad</a></li>
                                    <li><a id="politicar"href="">Política de reembolso</a></li>
                                    <li><a id="sistemCobran"href="">Sistema de cobranza</a></li>
                                    <li><a id="sistemEntra"href="">Sistema de entradas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="single-widget">
                                <h2 id="acercade">Acerca de Luna Textil</h2>
                                <ul class="nav nav-pills nav-stacked">
                                    <li><a id="infem"href="">Información de la empresa</a></li>
                                    <li><a id="ubicacion"href="">Ubicación de la tienda</a></li>
                                    <li><a href="">Copyright</a></li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
                <div class="container">
                    <div class="copyright" id="Copyright">
                        &copy; Copyright SiComT3.
                    </div>
                    <div class="credits" id="Credits">
                        Diseñado por Gaes !12!
                    </div>
                </div>


        </footer><!--/Footer-->

        <style>
            .btnAgregar{
                background: #2f323a;
                box-shadow:  4px 0px 10px #2f323a;
                border: none;
                color: white;
                margin-bottom: 20px;
                float: right;
            }
            .btnAgregar:hover{
                background: #4ECDC4;
                box-shadow:  4px 0px 10px #2f323a;
                color: white;
            }
            .btnAgregar:focus{

                color: white;
                border: none;
            }

        </style>

        <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.scrollUp.min.js"></script>
        <script src="js/jquery.prettyPhoto.js"></script>
        <script src="js/main.js"></script>
        <script src="js/carrito.js"></script>
        <script>
            $('#segirComprando').click(function (e) {
                location.href = "index.jsp";
            });
        </script>


        <script>

            $(function () {
                $('tr #deleteitem').click(function (e) {
                    e.preventDefault();
                    var elemento = $(this);
                    var idproducto = elemento.parent().find('#idarticulo').text();
                    $.ajax({
                        url: '../../deleteProduct',
                        type: 'post',
                        data: {idproducto: idproducto},
                        success: function (r) {
                            elemento.parent().parent().remove();
                            var elementostabla = $('#shop-table tr');
                            if (elementostabla.length <= 1) {
                                $('#cart-container').append("<h4>No hay Articulos en el carro</h4>");
                            }
                            $('#txt-subtotal').text(r);
                            $('#txt-total').text(r);
                        }
                    })
                });
                //validar si el ususario se encuentra logeado//
                $('#generarCompra').click(function (e) {

//                    setTimeout(function () {
//                        window.location = "../../processVenta?action=newVenta"
//                    }, 300);
                    var data = "";
                    var ventaGuardada = "Venta guardada y en proceso, en un plazo no mayor a 2 dias se estara realizando la entrega de sus productos, en el caso de que ocurra alguna novedad se le informara a travez de correo electronico";
                    var iniciarSesion = "Para continuar debe iniciar sesion";
                    var cartVacio = "No hay articulos en el carrito! si desea continuar llene el carrito con los articulos de su gusto";
                    var errorVenta = "Error al generar su venta, vuelva a intentarlo por favor!";
                        // validar si el usuario se encuentra logueado en el sistema
                    $.post("../../loginUser?action=validarLogin", data, function (res, est, jqXHR) {
                        if (res == 1) {
                            // validar si el carrito de compras esta vacio o no
                            $.post("../../processVenta?action=validarCarrito", data, function (res, est, jqXHR) {
                                if (res == 1) {
                                    // crear la venta
                                    $.post("../../processVenta?action=newVenta", data, function (res, est, jqXHR) {
                                        if (res == 1) {
                                            $('#textoModalResultCarrito').text(ventaGuardada);
                                            $("#modalResultCarrito").modal("show");
                                        } else {
                                            $('#textoModalResultCarrito').text(errorVenta);
                                            $("#modalResultCarrito").modal("show");
                                        }
                                    });
                                    // fin del proceso de crear venta
                                } else {
                                    $('#textoModalResultCarrito').text(cartVacio);
                                    $("#modalResultCarrito").modal("show");
                                }
                            });
                            // fin del proceso de validar si el carrito esta lleno
                        } else {
                            $('#textoModalResult').text(iniciarSesion);
                            $("#modalResult").modal("show");
                        }
                    });
                    
                    // fin del proceso de validar si el usuario esta logueado o no
                });
                $('#buttonLogin').click(function (e) {

                    setTimeout(function () {
                        window.location = "../login.jsp"
                    }, 300);
                });


            });
        </script>
        <script>

            //funcion para traducir en ingles
            $('#btnEnglish').click(function () {
                document.getElementById('cart').innerHTML = "Cart";
                document.getElementById('tdProduct').innerHTML = "Product";
                document.getElementById('tdPrice').innerHTML = "Price";
                document.getElementById('tdQuantity').innerHTML = "Quantity";
                document.getElementById('notArtCart').innerHTML = "No items in the cart";
                document.getElementById('detallefact').innerHTML = "invoice detail";
                document.getElementById('cartSubTotal').innerHTML = "Cart Sub Total";
                document.getElementById('costEnvio').innerHTML = "shipping cost";
                document.getElementById('generarCompra').innerHTML = "Make a purchase";
                document.getElementById('segirComprando').innerHTML = "Continue Shopping";
                document.getElementById('slogan').innerHTML = "Dream fabrics a click away";
                document.getElementById('services').innerHTML = "Services";
                document.getElementById('help').innerHTML = "Online Help";
                document.getElementById('contact').innerHTML = "Contact Us";
                document.getElementById('estado').innerHTML = "Order status";
                document.getElementById('cambiarLocacion').innerHTML = "Change location";
                document.getElementById('preguntas').innerHTML = "frequent questions";
                document.getElementById('shop').innerHTML = "Quick purchase";
                document.getElementById('paÃ±o').innerHTML = "Cloth";
                document.getElementById('lino').innerHTML = "Linen";
                document.getElementById('seda').innerHTML = "Silk";
                document.getElementById('uniforme').innerHTML = "Uniform";
                document.getElementById('politicas').innerHTML = "Policies";
                document.getElementById('terminos').innerHTML = "Terms of use";
                document.getElementById('politica').innerHTML = "Privacy policies";
                document.getElementById('politicar').innerHTML = "Refund policy";
                document.getElementById('sistemCobran').innerHTML = "Collection system";
                document.getElementById('sistemEntra').innerHTML = "Ticket system";
                document.getElementById('acercade').innerHTML = "About Luna-Textil";
                document.getElementById('infem').innerHTML = "Company information";
                document.getElementById('ubicacion').innerHTML = "Store location";

            });

            $('#btnSpanish').click(function () {
                document.getElementById('cart').innerHTML = "Carriro";
                document.getElementById('tdProduct').innerHTML = "Producto";
                document.getElementById('tdPrice').innerHTML = "Precio";
                document.getElementById('tdQuantity').innerHTML = "Cantidad";
                document.getElementById('notArtCart').innerHTML = "No hay articulos en el carrito";
                document.getElementById('detallefact').innerHTML = "Detalles de la factura";
                document.getElementById('cartSubTotal').innerHTML = "Carrito Sub Total";
                document.getElementById('costEnvio').innerHTML = "Costo de Envio";
                document.getElementById('generarCompra').innerHTML = "Realizar Compra";
                document.getElementById('segirComprando').innerHTML = "Seguir Comprando";
                document.getElementById('slogan').innerHTML = "Telas soñadas a un clic de distancia";
                document.getElementById('services').innerHTML = "Servicios";
                document.getElementById('help').innerHTML = "Ayuda en Linea";
                document.getElementById('contact').innerHTML = "Contactenos";
                document.getElementById('estado').innerHTML = "Estado del pedido";
                document.getElementById('cambiarLocacion').innerHTML = "Cambiar Locacion";
                document.getElementById('preguntas').innerHTML = "frequent questions";
                document.getElementById('shop').innerHTML = "Quick purchase";
                document.getElementById('paÃ±o').innerHTML = "Cloth";
                document.getElementById('lino').innerHTML = "Linen";
                document.getElementById('seda').innerHTML = "Silk";
                document.getElementById('uniforme').innerHTML = "Uniform";
                document.getElementById('politicas').innerHTML = "Policies";
                document.getElementById('terminos').innerHTML = "Terms of use";
                document.getElementById('politica').innerHTML = "Privacy policies";
                document.getElementById('politicar').innerHTML = "Refund policy";
                document.getElementById('sistemCobran').innerHTML = "Collection system";
                document.getElementById('sistemEntra').innerHTML = "Ticket system";
                document.getElementById('acercade').innerHTML = "About Luna-Textil";
                document.getElementById('infem').innerHTML = "Company information";
                document.getElementById('ubicacion').innerHTML = "Store location";

            });



        </script>
    </body>
</html>
