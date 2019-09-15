
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    HttpSession sesion = request.getSession(true);
    Object firstName = sesion.getAttribute("firstName") == null ? null : sesion.getAttribute("firstName");
    String htmlcode = "";
            if (firstName != null) {

                htmlcode = " <li class=\"menu-haas-children justify-content-center\"><a href=\"\" id=\"navIngresar\">" + firstName + "</a>\n"
                        + "            <ul>\n"
                        + "              <li><a href='LogoutUser' id=\"navLogOut\">Cerrar Sesión</a></li>\n"
                        + "              <li><a href=\"#\" id=\"navMiPerfil\">Mi Perfil</a></li>\n"
                        + "              <li class=\"dropdown-divider\"></li>\n"
                        + "            </ul>\n"
                        + "          </li>";

            } else {

                htmlcode = " <li class=\"menu-has-children justify-content-center\"><a href=\"\" id=\"navIngresar\">Login</a>\n"
                        + "            <ul>\n"
                        + "              <li><a href=\"vistasAux/login.jsp\" id=\"navInicieSesion\">Inicie Sesión</a></li>\n"
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
        <title>Luna Textil</title>
        <link rel="shortcut icon" href="img/isologo-final2.png">
        <meta content="" name="keywords">
        <meta content="" name="description">

        <!-- Bootstrap CSS -->
        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Librerias CSS -->
        <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="lib/animate/animate.min.css" rel="stylesheet">


        <!-- Estilo css -->
        <link href="css/estilosLandingPage.css" rel="stylesheet">

    </head>

    <body>
       
        <!-- Aqui Inicia el Header-->
        <header id="header">
            <div class="container  fadeIn" data-wow-delay="0.4s">
                <!-- Aqui va el logo -->
                <div id="logo" class="pull-left">
                    <a href="#hero"><img src="img/isologo.png" alt="" title=""  /></a>
                </div>
                <!-- Aqui va la Barra de Navegacion -->
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                        <li class="menu-active"><a href="#hero" id="navInicio">Inicio</a></li>
                        <li><a href="#about" id="navNosotros">Nosotros</a></li>
                        <li><a href="#services" id="navServicios">Servicios</a></li>
                        <li><a href="#portfolio" id="navPortafolio">Catalogo</a></li>
                        <li><a href="#contact" id="navContacto">Contacto</a></li>
                        <li><a href="vistasAux/Catalogo/cart.jsp" id="navContacto">Carrito</a></li>
                            <%=htmlcode%>
                    </ul>
                </nav>
                <!-- Aqui acaba la Barra de Navegacion -->
            </div>
        </header>
        <!-- Aqui Finaliza el Header -->


        <!-- Aqui empieza el Inicio-->
        <section id="hero">

            <div class="hero-container wow fadeIn" data-wow-delay="0.4s">
                <h1 id="IniBienvenido">Bienvenido a Luna Textil</h1>
                <h2 id="iniSlogan">Telas soñadas a un clic de distancia</h2>
                <a href="#about" class="btn-get-started" id="btnEmpecemos">Empecemos</a>
                <button type="button" name="button" class="btn btn-primary" onclick="Traduccion()">Traducir</button>
            </div>

        </section>
        <!-- Aqui finaliza el Inicio -->

        <main id="main">

            <!-- Aqui empieza la Seccion Nosotros-->
            <section id="about">
                <div class="container">
                    <div class="row about-container">

                        <div class="col-lg-12 content order-lg-1 order-2 container wow fadeIn">
                            <h2 class="title text-center" id="Quienes">Quienes Somos</h2>
                            <p class="text-justify text-dark" id="Quienes1">
                                Chávez Gómez S.A., es una sociedad anónima fundada en 1973 a través de los almacenes “Luna Textil” y “Marfil”, dedicados a la distribución de textiles nacionales e importados, con un gran surtido en telas decorativas para hogar y oficinas.
                            </p>

                            <div class="col-lg-6 container">

                                <div class="icon-box wow fadeInUp">
                                    <div class="icon"><i class="fa fa-shopping-bag"></i></div>
                                    <h4 class="title font-weight-bold"><a href=""id="Cantidad">Cantidad</a></h4>
                                    <p class="description text-justify text-dark" id="Cantidad1">Ofrecemos una variada y amplia cantidad de telas de todo tipo únicamente pensando en sus necesidades. </p>
                                </div>

                                <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="icon"><i class="fa fa-photo"></i></div>
                                    <h4 class="title font-weight-bold"><a href="" id="ColorImagen">Colores - Imagen</a></h4>
                                    <p class="description text-justify text-dark" id="ColorImagen1">Ofrecemos una variada y amplia cantidad de telas de todo tipo únicamente pensando en sus necesidades.</p>
                                </div>

                                <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                    <div class="icon"><i class="fa fa-bar-chart"></i></div>
                                    <h4 class="title font-weight-bold"><a href="" id="Negocio" >Negocio</a></h4>
                                    <p class="description text-justify text-dark" id="Negocio1">Pensando en el  futuro implementamos un sistema de compra online para que pueda acceder a nuestros servicios desde la comodidad de su casa o empleo.</p>
                                </div>

                            </div>
                            <div class="col-lg-3">

                            </div>
                        </div>


                    </div>

                </div>
            </section><!-- Fin de la seccion Nosotros -->

            <!--Seccion Mision y Vision -->
            <section id="facts">
                <div class="container wow fadeInDown" data-wow-delay="0.8s">
                    <div class="section-header">
                        <h3 class="section-title font-weight-bold" id="MVtitulo">Misión Y Visión</h3>
                        <p class="section-description text-dark" id="MVtitulo1">En luna textil tenemos muy claro nuestro presente y nuestro futuro</p>
                    </div>
                    <div class="row counters">

                        <div class="col-lg-6 col-6 col-sm-6 text-center">
                            <h3 class="titulo" id="Mision">Nuestra Misión</h3>
                            <p class="text-justify" id="Mision1">Nuestra misión fundamental es el servicio amable, servicio efectivo y servicio rápido a nuestros clientes, que nos han distinguido durante casi 40 años de permanencia en el comercio textilero del 7 de Agosto, Galerías, y Cedritos en Bogotá.</p>
                        </div>

                        <div class="col-lg-6 col-6 col-sm-6 text-center">
                            <h3 class="titulo" id="Vision">Nuestra Visión</h3>
                            <p class="text-justify" id="Vision1">La visión de la empresa es mantenernos actualizados en las últimas tendencias de la moda, disponiendo de un amplio surtido en telas, que satisfagan las necesidades del hogar, hoteles y oficinas.</p>
                        </div>
                    </div>

                </div>
            </section><!-- Fin de la seccion Mision y Vision -->

            <!--Seccion de Servicios-->

            <section id="services">
                <div class="container wow fadeIn"data-wow-delay="0.3s">
                    <div class="section-header">
                        <h3 class="section-title" id="Servicios">Servicios <br> <br> </h3>
                        <p class="section-description text-white text" id="Servicios1">En luna textil te ofrecemos distintos servicios pensando únicamente en tu comodidad y satisfacción</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="0.4s">
                            <div class="box">
                                <h4 class="title" id="Cotizar">Cotizar</h4>
                                <a title="cotizar" href="#portfolio"><img src="img/cotizar.jpg" src="cotizar"></a>
                                <p class="description text-justify text-white" id="Cotizar1">Ofrecemos la oportunidad de cotizar nuestros productos con el fin de evitar el desplazamiento físico hasta nuestro almacén para saber el preció y características de nuestros productos, utilizando únicamente un computador o dispositivo movil.</p>
                            </div>
                        </div>
                        <div class="col-lg-4  col-md-6 wow fadeIn" data-wow-delay="0.8s">
                            <div class="box">
                                <h4 class="title" id="Comprar">Comprar</h4>
                                <a title="cotizar" href="#portfolio"><img src="img/comprar.jpg" src="cotizar"></a>
                                <p class="description text-justify text-white" id="Comprar1">Ofrecemos un catalogo completo de diferentes tipos de telas, junto con un servicio de entrega puerta a puerta para su mayor comodidad y un registro en nuestro sistema el cual va a permitir ver su historial de compras, registrar garantías y otras mas opciones.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 wow fadeInRight" data-wow-delay="0.4s">
                            <div class="box">
                                <h4 class="title" id="Personalizada">Personalizada</h4>
                                <a title="cotizar" href="#portfolio"><img src="img/personalizada.png" src="cotizar"></a>
                                <p class="description text-justify text-white" id="Personalizada1">Ofrecemos la posibilidad de solicitar un producto con caracteristicas unicas en caso de que no encuentres el producto en el catalogo oferta.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section><!-- Fin de la Seccion Servicios -->



            <!--Aqui inicia la seccion Portafolio-->
            <section id="portfolio">
                <div class="container wow fadeIn" data-wow-delay="0.8s">
                    <div class="section-header">
                        <h3 class="section-title pt-5" id="Portafolio">Catalogo</h3>
                        <p class="section-description" id="Protafolio1">En el almacén LUNA TEXTIL contamos con la distribución, ventas al por mayor a nivel nacional.</p>
                    </div>
                    <div class="">

                        <div class="row" id="portfolio-wrapper">

                            <div class="col-lg-3 col-md-6 portfolio-item fadeInLeft">
                                <a href="vistasAux/Catalogo/Linos.jsp">
                                    <ul class="botonesE" id="linos">Linos</ul>
                                    <img src="img/portfolio/lino1.png" alt="">
                                </a>
                            </div>

                            <div class="col-lg-3 col-md-6 portfolio-item filter-uniforme">
                                <a href="vistasAux/Catalogo/Uniformes.jsp">
                                    <ul class="botonesE" id="uniforme">Uniformes</ul>
                                    <img src="img/portfolio/uniforme1.png" alt="">
                                </a>
                            </div>

                            <div class="col-lg-3 col-md-6 portfolio-item filter-paño">
                                <a href="vistasAux/Catalogo/Paños.jsp">
                                    <ul class="botonesE" id="paño">Paños</ul>
                                    <img src="img/portfolio/paño1.png" alt="">
                                </a>
                            </div>


                            <div class="col-lg-3 col-md-6 portfolio-item filter-seda">
                                <a href="vistasAux/Catalogo/Sedas.jsp">
                                    <ul class="botonesE" id="seda">Sedas</ul>
                                    <img src="img/portfolio/seda1.png" alt="">
                                </a>
                            </div>

                        </div>

                    </div>
            </section>
            <!-- Aqui finaliza la seccion portafolio -->



            <!--Aqui inicia la seccion de contacto-->
            <section id="contact">
                <div class="container wow fadeInUp">
                    <div class="section-header">
                        <h3 class="section-title" id="Contacto">Contacto</h3>
                        <p class="section-description text-dark" id="Contacto1">A continuación desplegamos todos nuestros datos de contacto para que en caso tal de que necesite comunicarse con nosotros pueda hacerlo con la mayor facilidad.</p>
                    </div>
                </div>

                <!-- Frame de google maps -->
                <iframe class="wow fadeIn" data-wow-delay="0.8s" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.590153720488!2d-74.071288!3d4.6567872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x587846dea31ecdc3!2salmacen+luna+textil!5e0!3m2!1ses!2sco!4v1553040407527" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>

                <div class="container  mt-5">
                    <div class="row justify-content-center">

                        <div class="col-lg-3 col-md-4 wow fadeInLeft">

                            <div class="info">
                                <div>
                                    <i class="fa fa-map-marker"></i>
                                    <p>Ak. 24 #65 - 19 <br> Bogotá</p>
                                </div>

                                <div>
                                    <i class="fa fa-envelope"></i>
                                    <p>lunatextil@hotmail.com</p>
                                </div>

                                <div>
                                    <i class="fa fa-phone"></i>
                                    <p>+57 (1) 311-6337 <br>+57 (1) 311-1501</p>
                                </div>

                                <div>
                                    <i class="fa fa-fax"></i>
                                    <p>+57 (1) 240-4471</p>
                                </div>
                            </div>

                            <div class="social-links">
                                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                            </div>

                        </div>

                        <div class="col-lg-5 col-md-8 wow fadeInRight">
                            <div class="form">
                                <div id="sendmessage">Tu mensaje ha sido enviado. ¡Gracias!</div>
                                <div id="errormessage"></div>
                                <form action="" method="post" role="form" class="contactForm">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Tu Nombre" data-rule="required" data-msg="Por favor ingrese al menos 4 caracteres" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Tu Correo" data-rule="required" data-msg="Por favor introduzca una dirección de correo electrónico válida" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="required" data-msg="Por favor ingrese el motivo de su mensaje" />
                                        <div class="validation"></div>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" id="mensaje" rows="5" data-rule="required" data-msg="Por favor escribe algo para nosotros" placeholder="Mensaje"></textarea>
                                        <div class="validation"></div>
                                    </div>
                                    <div class="text-center"><button type="submit" id="BotonEnviar">Enviar Mensaje</button></div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <!-- Aqui finaliza la seccion de contact -->

        </main>

        <!--Aca inicia el footer-->
        <footer id="footer">
            <div class="footer-top">
                <div class="container">

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
        </footer>
        <!-- fin de la seccion del footer -->

        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

        <!-- JavaScript Librerias -->
        <!--Biblioteca JS minificada -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <!-- Compilado y minimizado Bootstrap JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>
        <script src="lib/jquery/jquery.min.js"></script>
        <script src="lib/jquery/jquery-migrate.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/superfish/hoverIntent.js"></script>
        <script src="lib/superfish/superfish.min.js"></script>

        <!-- Formulario de contacto Archivo de JavaScript -->
        <script src="contactform/contactform.js"></script>

        <!-- Plantilla de archivo principal de Javascript -->
        <script src="js/main.js"></script>

    </body>
</html>
