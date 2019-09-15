<%@page import="java.io.PrintWriter"%>
<%@page import="javax.servlet.http.HttpServletRequest"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    String rol = "";
    String usuario = "";
    HttpSession sesion = request.getSession();
    if (sesion != null) {

        if (sesion.getAttribute("firstName") != null) {
            rol = sesion.getAttribute("typeTercero").toString();
            usuario = sesion.getAttribute("firstName").toString();

            if (!rol.equalsIgnoreCase("Mensajero")) {
                out.print("<script>location.replace('../loginAdmin.jsp');</script>");
            }
        } else {
            out.print("<script>location.replace('../loginAdmin.jsp');</script>");
        }

    } else {
        out.print("<script>location.replace('../loginAdmin.jsp');</script>");
    }

%>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="content-type"name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <title>Sycomt3 - Admin</title>
        <!-- Dependencias Css -->
        <link href="../../../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="../../../lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
        <!--        <link href="../../css/estilosTablas.css" rel="stylesheet">-->
        <link href="../../css/estilosPerfilUsuario.css" rel="stylesheet">
        <link href="../../css/estilosTablas.css" rel="stylesheet">
        <link href="../../../css/estilos-responsive.css" rel="stylesheet">
        <link rel="stylesheet" href="../../css/estilosTarjetas.css">
        <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">
        <link href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap4.min.css" rel="stylesheet">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.min.css">



    </head>

    <body>
        <section id="container">
            <!-- **********************************************************************************************************************************************************
                CONTENIDO DE LA BARRA SUPERIOR Y NOTIFICACIONES
                *********************************************************************************************************************************************************** -->
            <!--header inicio-->
            <header class="header black-bg">
                <div class="sidebar-toggle-box">
                    <div class="fa fa-bars " ></div>
                </div>
                <!--logo inicio-->
                <a href="MensajeroHome.jsp" class="logo"><b>SYCOM<span>T3</span></b></a>
                <!--logo fin-->
                <div class="nav notify-row" id="top_menu">
                    <!--  notificaciones inicio -->
                    <ul class="nav top-menu">
                        <!-- notificaciones de opciones inicio -->
                        <li class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
                                <i class="fa fa-tasks"></i>
                                <span class="badge bg-theme">4</span>
                            </a>

                        </li>
                        <!-- notificaciones de opciones fin -->
                        <!-- notificaciones de mensajes inicio-->
                        <li id="header_inbox_bar" class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
                                <i class="fa fa-envelope-o"></i>
                                <span class="badge bg-theme">5</span>
                            </a>
                        </li>
                        <!-- notificaciones de mensajes fin -->
                        <!-- notificaciones o alertar del sistema inicio-->
                        <li id="header_notification_bar" class="dropdown">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
                                <i class="fa fa-bell-o"></i>
                                <span class="badge bg-warning">7</span>
                            </a>
                        </li>
                        <!-- notificaciones o alertar del sistema fin-->
                    </ul>
                    <!--  notificaciones fin -->
                </div>
                <div class="top-menu">
                    <ul class="nav pull-right top-menu">
                        <li><a id="buttonLogout" class="logout" href="#">Logout</a></li>
                    </ul>
                </div>
            </header>
            <!--header fin-->
            <!-- **********************************************************************************************************************************************************
                MAIN SIDEBAR MENU
                *********************************************************************************************************************************************************** -->
            <!--sidebar inicio-->
            <aside>
                <div id="sidebar" class="nav-collapse menumio">
                    <!-- sidebar menu start-->
                    <ul class="sidebar-menu" id="nav-accordion">
                        <p class="centered"><a class=""href="#" ><img src="../../img/usuario.png" class="img-circle" width="80"></a></p>
                        <h5 id="admin" class="centered nombreUsuario"><%= usuario%></h5>


                        <!-- Inicio sub menu de home -->
                        <li class="sub-menu">
                            <a class="sub-menu-a active" href="MensajeroHome.jsp">
                                <i class="fa fa-home"></i>
                                <span id="idInicio">Inicio</span>
                            </a>

                        </li>
                        <!-- Fin sub menu de home -->
                        <!-- Inicio sub menu de entregas  -->
                        <li class="sub-menu">
                            <a class="sub-menu-a" href="javascript:;">
                                <i class="fa fa-send"></i>
                                <span id="suppliers">Entregas</span>
                            </a>
                            <ul class="sub text-center">
                                <li><a id="suppliersHistoric" class="sub-a" href="MensajeroEntregasPendientes.jsp">Pendientes</a></li>
                                <li><a id="suppliersHistoric" class="sub-a" href="MensajeroEntregasRealizadas.jsp">Realizadas</a></li>
                            </ul>
                        </li>
                        <!-- Fin sub menu de entregas  -->
                   
                    </ul>
                    <!-- sidebar menu end-->
                </div>
            </aside>
            <!--sidebar end-->
            <!-- **********************************************************************************************************************************************************
                MAIN CONTENT
                *********************************************************************************************************************************************************** -->

            <!--main content start-->
            <section id="main-content">
                <section class="wrapper">
                    <button id="btnEnglish"class="btn btnAgregar">EN</button>
                    <button id="btnSpanish"class="btn btnAgregar">ES</button>    
                    <div class="row">

                        <div class="col-lg-12 col-xl-12 col-md-12  ">

                            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white; height: 400px; padding: 8% 0%;" >

                                <div class=" tarjetas">
                                    <div class=" tarjetaRow" >
                                        <div class="col-lg-6 tarjetaItem"   >
                                            <div class="subItem" style="height: 120px;">
                                                <div>
                                                   <a class=" incono fa fa-send" href="MensajeroEntregasPendientes.jsp"></a> 
                                                </div>
                                                <div>
                                                    <a class="textIcono" href="MensajeroEntregasPendientes.jsp">Entregas Pendientes</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="col-lg-6 tarjetaItem">
                                            <div class="subItem "style="height: 120px;">
                                                <div>
                                                    <a class=" incono fa fa-check-square" href="MensajeroEntregasRealizadas.jsp"></a>
                                                </div>
                                                <div>
                                                    <a href="MensajeroEntregasRealizadas.jsp" class="textIcono">Entregas Realizadas</a>
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </div>  
                                </div>



                            </div>

                        </div>

                    </div>
                    </div>




                </section>
            </section>
            <!--main content end-->
            <!--footer start-->
            <footer class="site-footer footer">
                <div class="text-center">
                    <p>
                        &copy; Copyrights <strong>Sycomt3</strong>. Todos los derechos reservados
                    </p>
                    <br>
                    <a href="index.html#" class="go-top">
                        <i class="fa fa-angle-up"></i>
                    </a>
                </div>
            </footer>
            <!--Fin de Footer o pie de pagina-->
        </section>
    </body>

    <script src="../../../lib/jquery/jquery.min.js"></script>
    <script class="include" type="text/javascript" src="../../../lib/jquery.dcjqaccordion.2.7.js"></script>
    <script src="../../../lib/jquery.scrollTo.min.js"></script>
    <script src="../../../lib/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="../../../lib/jquery.sparkline.js"></script>
    <script src="../../../lib/bootstrap/js/bootstrap.js"></script>
    <script src="../../dataTable/jquery.dataTables.min.js"></script>
    <script src="../../dataTable/dataTables.bootstrap4.min.js"></script>
    <!--guión común para todas las páginas-->
    <script src="../../../lib/common-scripts.js"></script>
    <script src="../../js/ocultar.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.all.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/8.11.8/sweetalert2.min.js"></script>

    <!--    <script>
            $(document).ready(function () {
                var contador = isNaN(parseInt(window.name)) ? 1 : parseInt(window.name);
    
                if (contador === 1) {
                    Swal.fire({
                        title: '¡Bienvenido ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 2000 //el tiempo que dura el mensaje en msn
                    });
                }
    
            });
    
        </script>-->


    <script>
        $('#buttonLogout').click(function (e) {
            var data = "";
            $.post("../../../loginUser?action=logOut", data, function (res, est, jqXHR) {
                console.log(res);
                if (res === "1") {
                    setTimeout(function () {
                        window.location = "../loginAdmin.jsp";
                        storage.clear();
                    }, 300);
                }
            });
        });
    </script>

    <script>

        //Funcion para traducir en ingles
        $('#btnEnglish').click(function () {
            document.getElementById('admin').innerHTML = "Admin";
            document.getElementById('suppliers').innerHTML = "Suppliers";
            document.getElementById('suppliersHistoric').innerHTML = "Suppliers List";
            document.getElementById('sales').innerHTML = "Sales";
            document.getElementById('salesList').innerHTML = "Sales List";
            document.getElementById('titlePurchaseOrders').innerHTML = 'Purchase Orders';
            document.getElementById('purchasesList').innerHTML = 'Historic Purchase';
            document.getElementById('inventory').innerHTML = 'Inventory';
            document.getElementById('checkInventory').innerHTML = 'Check Inventory';
            document.getElementById('employees').innerHTML = 'Employees';
            document.getElementById('employeesList').innerHTML = 'Employees List';
            document.getElementById('add').innerHTML = 'Add';
            document.getElementById('code').innerHTML = 'Code';
            document.getElementById('name').innerHTML = 'Name';
            document.getElementById('clothMaterial').innerHTML = 'Cloth Material';
            document.getElementById('cellarLocation').innerHTML = 'Cellar Location';
            document.getElementById('price').innerHTML = 'Price M²';
            document.getElementById('actions').innerHTML = 'Actions';
            document.getElementById('code1').innerHTML = 'Code';
            document.getElementById('name1').innerHTML = 'Name';
            document.getElementById('clothMaterial1').innerHTML = 'Cloth Material';
            document.getElementById('cellarLocation1').innerHTML = 'Cellar Location';
            document.getElementById('price1').innerHTML = 'Price M²';
            document.getElementById('actions1').innerHTML = 'Actions';
            document.getElementById('botonAdd').innerHTML = 'Add';
            document.getElementById('productDates').innerHTML = 'Product Dates';
            document.getElementById('nameTitle').innerHTML = 'Name';
            document.getElementById('Description').innerHTML = 'Description';
            document.getElementById('ProductTelaje').innerHTML = 'Telaje';
            document.getElementById('paño').innerHTML = 'Cloth';
            document.getElementById('Lino').innerHTML = 'Linen';
            document.getElementById('Seda').innerHTML = 'Silk';
            document.getElementById('Uniforme').innerHTML = 'Uniform';
            document.getElementById('location').innerHTML = 'Location';
            document.getElementById('price2').innerHTML = 'Price';
            document.getElementById('image').innerHTML = 'Image';
            document.getElementById('botonCerrar').innerHTML = 'Open';
            document.getElementById('botonVaciar').innerHTML = 'Empty';
            document.getElementById('btncrearproducto').innerHTML = 'Save';
            document.getElementById('Editar').innerHTML = 'Editar';
            document.getElementById('ProductDates1').innerHTML = 'Product Dates';
        });
        $('#btnSpanish').click(function () {
            document.getElementById('admin').innerHTML = "Administrador";
            document.getElementById('suppliers').innerHTML = "Proveedores";
            document.getElementById('suppliersHistoric').innerHTML = "Lista Proveedores";
            document.getElementById('sales').innerHTML = "Ventas";
            document.getElementById('salesList').innerHTML = "Lista Ventas";
            document.getElementById('titlePurchaseOrders').innerHTML = 'Ordenes Compra';
            document.getElementById('purchasesList').innerHTML = 'Lista de compras';
            document.getElementById('inventory').innerHTML = 'Inventario';
            document.getElementById('checkInventory').innerHTML = 'Consultar Inventario';
            document.getElementById('employees').innerHTML = 'Empleados';
            document.getElementById('employeesList').innerHTML = 'Lista de empleados';
            document.getElementById('add').innerHTML = 'Agregar';
            document.getElementById('code').innerHTML = 'Código';
            document.getElementById('name').innerHTML = 'Nombre';
            document.getElementById('clothMaterial').innerHTML = 'Material de Tela';
            document.getElementById('cellarLocation').innerHTML = 'Ubicación Bodega';
            document.getElementById('price').innerHTML = 'Precio M²';
            document.getElementById('actions').innerHTML = 'Acciones';
            document.getElementById('code1').innerHTML = 'Código';
            document.getElementById('name1').innerHTML = 'Nombre';
            document.getElementById('clothMaterial1').innerHTML = 'Material de Tela';
            document.getElementById('cellarLocation1').innerHTML = 'Ubicación Bodega';
            document.getElementById('price1').innerHTML = 'Precio M²';
            document.getElementById('actions1').innerHTML = 'Acciones';
            document.getElementById('botonAdd').innerHTML = 'Agregar';
            document.getElementById('productDates').innerHTML = 'Datos del Producto';
            document.getElementById('nameTitle').innerHTML = 'Nombre';
            document.getElementById('Description').innerHTML = 'Descripción';
            document.getElementById('paño').innerHTML = 'Paño';
            document.getElementById('Lino').innerHTML = 'Lino';
            document.getElementById('Seda').innerHTML = 'Seda';
            document.getElementById('Uniforme').innerHTML = 'Uniforme';
            document.getElementById('location').innerHTML = 'Ubicación';
            document.getElementById('price2').innerHTML = 'Precio';
            document.getElementById('image').innerHTML = 'Imagen';
            document.getElementById('botonCerrar').innerHTML = 'Cerrar';
            document.getElementById('botonVaciar').innerHTML = 'Vaciar';
            document.getElementById('btncrearproducto').innerHTML = 'Guardar';
            document.getElementById('Editar').innerHTML = 'Editar';
        });



    </script>





</html>
