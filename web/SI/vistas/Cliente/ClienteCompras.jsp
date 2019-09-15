<%@page import="java.util.ArrayList"%>
<%@page import="classes.Producto"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="javax.servlet.http.HttpServletRequest"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>



<%
HttpSession sesion = request.getSession();
    String htmlcode = "";
    htmlcode = sesion.getAttribute("firstName").toString();
    String rol = "";
    rol = sesion.getAttribute("typeTercero").toString();
    if(!rol.equalsIgnoreCase("Administrador")){
         out.print("<script>location.replace('../loginAdmin.jsp');</script>");
    }
//    HttpSession sesion = request.getSession();
//    String htmlcode = "";
//    String firstName = "";
//    Object typeTercero = null;
//    if (sesion.getAttribute("firstName") != null && sesion.getAttribute("typeTercero") != null) {
//        if (!typeTercero.equals("Cleinte")) {
//            out.print("<script>location.replace('../../../vistasAux/login.jsp');</script>");
//        } else {
//            htmlcode = sesion.getAttribute("firstName").toString();
//            typeTercero = sesion.getAttribute("typeTercero").toString();
//        }
//        
//    }else{
//        out.print("<script>location.replace('../../../vistasAux/login.jsp');</script>");
//    }
//    
    
    
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
        <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">
        <link href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap4.min.css" rel="stylesheet">




    </head>

    <body onload="funcion()">
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
                <a href="AdministradorHistorialProveedores.html" class="logo"><b>SYCOM<span>T3</span></b></a>
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
                        <li><a class="logout" href="../../../vistasAux/login.jsp">Logout</a></li>
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
                        <h5 class="centered nombreUsuario"><%= htmlcode%></h5>

                        <!-- Inicio sub menu de proveedores -->
                        <li class="sub-menu">
                            <a class="sub-menu-a" href="javascript:;">
                                <i class="fa fa-desktop"></i>
                                <span>Poveedores</span>
                            </a>
                            <ul class="sub text-center">
                                <li><a class="sub-a" href="AdministradorHistorialProveedores.jsp">Historico Proveedores</a></li>
                            </ul>
                        </li>
                        <!-- Fin sub menu de proveedores -->
                        <!-- Inicio sub menu de ventas -->
                        <li class="sub-menu">
                            <a class="sub-menu-a " href="javascript:;">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Ventas</span>
                            </a>
                            <ul class="sub text-center">
                                <li><a class="sub-a " href="AdministradorHistorialVentas.jsp">Historico Ventas</a></li>
                            </ul>
                        </li>
                        <!-- Fin sub menu de ventas -->
                        <!-- Inicio sub menu de orden de compra -->
                        <li class="sub-menu">
                            <a class="sub-menu-a" href="javascript:;">
                                <i class="fa fa-cart-plus"></i>
                                <span>Ordenes de Compra</span>
                            </a>
                            <ul class="sub text-center">
                                <li><a class="sub-a" href="AdministradorHistorialCompras.jsp">Historico Compras</a></li>
                            </ul>
                        </li>
                        <!-- Fin sub menu de orden de compra -->
                        <!-- Inicio sub menu de inventario -->
                        <li class="sub-menu">
                            <a class="sub-menu-a active" href="javascript:;">
                                <i class="fa fa-list"></i>
                                <span>Inventario</span>
                            </a>
                            <ul class="sub text-center">
                                <li><a class="sub-a active" href="AdministradorHistorialInventario.jsp">Consultar Inventario</a></li>
                            </ul>
                        </li>
                        <!-- Fin sub menu de inventario -->
                        <!-- Inicio sub menu de inventario -->
                        <li class="sub-menu">
                            <a class="sub-menu-a" href="javascript:;">
                                <i class="fa fa-users"></i>
                                <span>Empleados</span>
                            </a>
                            <ul class="sub text-center">
                                <li><a class="sub-a" href="AdministradorHistorialEmpleados.jsp">Lista Empleados</a></li>
                            </ul>
                        </li>


                        <!-- Fin sub menu de inventario -->
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
                    <div class="row">

                        <div class="col-lg-12 col-xl-12 col-md-12  ">

                            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >


                                <h2>Stock</h2>
                                <button class="btn btnAgregar"data-toggle="modal" data-target="#modalNuevo">
                                    Agregar
                                    <span class="fa fa-plus"></span>
                                </button>
                                <table id="example" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Codigo</th>
                                            <th>Nombre</th>
                                            <th>Telaje</th>
                                            <th>Ubicacion Bodega</th>
                                            <th>Precio M²</th>
                                            <th>Stock</th>
                                            <th>Acciones</th>

                                        </tr>
                                    </thead>
                                    <tbody>



                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Codigo</th>
                                            <th>Nombre</th>
                                            <th>Telaje</th>
                                            <th>Ubicacion Bodega</th>
                                            <th>Precio M²</th>
                                            <th>Stock</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                        </div>

                    </div>
                    </div>
                    <!-- Modal para Agregar Producto -->
                    <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span class="fa fa-close close1"aria-hidden="true"></span>
                                    </button>
                                    <h5 class="modal-title" id="exampleModalLongTitle">Agregar</h5>
                                </div>
                                <div class="modal-body">
                                    <form method="post" action="../../../methodProduct?accion=create" name="frmCrearProducto" id="frmCrearProducto" enctype="multipart/form-data"  class="form-horizontal col-sm-12 text-center">
                                        <div class="form-group text-center">
                                            <h4 class="tituloDP">Datos Del Producto</h4>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="nombreProducto">Nombre</label>
                                                <input id="nombreProducto" name="nombreProducto" type="text" placeholder="Nombre Producto" class="form-control input-md" required="">
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="decripcionProducto">Descripción</label>
                                                <textarea placeholder="Acá escripción producto" class="form-control" id="decripcionProducto" cols="30" rows="1"name="decripcionProducto"></textarea>
                                            </div><!--
                                            -->                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="telajeProducto">Telaje</label>
                                                <select id="telajeProducto" name="telajeProducto" class="form-control">
                                                    <option value="0">---------------------</option>
                                                    <option value="Paño">Paño</option>
                                                    <option value="Lino">Lino</option>
                                                    <option value="Seda">Seda</option>
                                                    <option value="Uniforme">Uniforme</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="ubicacionBodega">Ubicación</label>
                                                <input id="ubicacionBodega" name="ubicacionBodega" type="text" placeholder="Ubicación Bodega" class="form-control input-md" required="">
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="precioMC">Precio</label>
                                                <input id="precioMC" name="precioMC" type="text" placeholder="Precio Metro Cuadrado" class="form-control input-md" required="">
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="stock">Stock</label>
                                                <input id="stock" name="stock" type="text" placeholder="Stock Bodega" class="form-control input-md" required="">
                                            </div>
                                            <div class="col-sm-12">
                                                <label class="col-md-7 control-label" for="imagenProducto">Imagen </label>
                                                <input id="imagenProducto" name="imagenProducto" type="file" placeholder="Imagen Producto" class="form-control input-md" required="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12" style="margin-top: 30px;">
                                            <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                            <button id="botonVaciar" type="reset" name="botonVaciar" class="colorbtn btn btn-primary">Limpiar</button>
                                            <button id="btncrearproducto" type="submit" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin del modal Ingresar Nuevo -->
                    <!-- Modal editar -->
                    <div class="modal fade" id="modalEdicion" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                                        <span class="fa fa-close close1" aria-hidden="true"></span>
                                    </button>
                                    <h5 class="modal-title" id="exampleModalCenterTitle">Editar</h5>
                                </div>
                                <div class="modal-body">

                                    <form class="form-horizontal col-sm-12 text-center">
                                        <div class="form-group text-center">
                                            <h4 class="tituloDP">Datos Del Producto</h4>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="idProducto">Id</label>
                                                <input id="idProductoA" readonly="readonly"  name="idProducto" type="text" placeholder="Id Producto" class="form-control input-md" required="">
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="nombreProducto">Nombre</label>
                                                <input id="nombreProductoA" name="nombreProducto" type="text" placeholder="Nombre Producto" class="form-control input-md" required="">
                                            </div>

                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="telajeProducto">Telaje</label>
                                                <select id="telajeProductoA" name="telajeProducto" class="form-control">
                                                    <option value="0">---------------------</option>
                                                    <option value="Paño">Paño</option>
                                                    <option value="Lino">Lino</option>
                                                    <option value="Seda">Seda</option>
                                                    <option value="Uniforme">Uniforme</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="ubicacionBodega">Ubicación</label>
                                                <input id="ubicacionBodegaA" name="ubicacionBodega" type="text" placeholder="Ubicación Bodega" class="form-control input-md" required="">
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="precioMC">Precio</label>
                                                <input id="precioMCA" name="precioMC" type="text" placeholder="Precio Metro Cuadrado" class="form-control input-md" required="">
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="col-md-4 control-label" for="stock">Stock</label>
                                                <input id="stockA" name="stock" type="text" placeholder="Stock Bodega" class="form-control input-md" required="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12" style="margin-top: 30px;">
                                            <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button id="botonUpdateModal" type="submit" name="botonEnviar" class="btnUpdateModal colorbtn btn btn-primary">Aceptar</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin del modal Editar -->
                    <!-- Modal Eliminar -->
                    <div class="modal fade" id="modalEliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                                        <span class="fa fa-close close1" aria-hidden="true"></span>
                                    </button>
                                    <h5 class="modal-title" id="exampleModalCenterTitle">Eliminar</h5>
                                </div>
                                <div class="modal-body">
                                    <form class="form-horizontal col-sm-12 text-center">
                                        <div class="" style="margin-top:25px;">
                                            <h4>Esta seguro que desea eliminar este registro?</h4>
                                        </div>
                                        <div class="col-sm-12" style="margin-top: 30px;">
                                            <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button id="botonModalEliminar" type="submit" name="botonEliminar" data-dismiss="modal" class="colorbtn btn btn-primary">Eliminar</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin del modal Eliminar -->
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
    <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap4.min.js"></script>


    <!--    <script src="../../dataTable/cargar.js"></script>-->



    <script>
        $(document).ready(function () {


            listar();
        });
        var listar = function () {
            var table = $("#example").DataTable({

                destroy: true,
                order: [[0, "desc"]],
                ajax: {
                    method: "POST",
                    url: "../../../methodProduct?accion=list",
                    dataSrc: "datos"
                },
                columns: [
                    {data: "Codigo"},
                    {data: "Nombre"},
                    {data: "Telaje"},
                    {data: "Ubicacion"},
                    {data: "Precio"},
                    {data: "Stock"},
                    {data: "acciones"}
                ],
                language: idiomaEsp
            });
        }

        $(function () {


        });
        var idiomaEsp = {
            "decimal": "",
            "emptyTable": "No hay datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 registros",
            "infoFiltered": "(Filtro de _MAX_ total registros)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron coincidencias",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": Activar orden de columna ascendente",
                "sortDescending": ": Activar orden de columna desendente"
            }
        }




    </script>





</html>
