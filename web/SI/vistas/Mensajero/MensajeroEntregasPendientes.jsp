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
        <title>Sycomt3 - Bodega</title>
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
                        <h5 id="idAdmin" class="centered nombreUsuario"><%= usuario%></h5>
                         <!-- Inicio sub menu de home -->
                        <li class="sub-menu">
                            <a class="sub-menu-a" href="MensajeroHome.jsp">
                                <i class="fa fa-home"></i>
                                <span id="idInicio">Inicio</span>
                            </a>

                        </li>
                        <!-- Fin sub menu de home -->
                        <!-- Inicio sub menu de entregas  -->
                        <li class="sub-menu">
                            <a class="sub-menu-a active" href="javascript:;">
                                <i class="fa fa-send"></i>
                                <span id="suppliers">Entregas</span>
                            </a>
                            <ul class="sub text-center">
                                <li><a id="suppliersHistoric" class="sub-a active" href="MensajeroEntregasPendientes.jsp">Pendientes</a></li>
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
                    <button onclick="translateEnglish()"id="buttonTranslateEn"class="btn btnAgregar" type="button">EN</button>
                    <button onclick="translateSpanish()"id="buttonTranslateEs"class="btn btnAgregar" type="button">ES</button>

                    <div class="row">

                        <div class="col-lg-12 col-xl-12 col-md-12  ">

                            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >


                                <h2>Entregas</h2>
                               
                                <table id="example" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Codigo</th>
                                            <th>Fecha</th>
                                            <th>Valor</th>
                                            <th>Cliente</th>
                                            <th>Factura</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>

                                        </tr>
                                    </thead>
                                    <tbody>



                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Codigo</th>
                                            <th>Fecha</th>
                                            <th>Valor</th>
                                            <th>Cliente</th>
                                            <th>Factura</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                        </div>

                    </div>
                    </div>
                    <!-- Modal detalles -->
                    <div class="modal fade" id="modalDetalleVentas" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content modal-lg">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                                        <span class="fa fa-close close1" aria-hidden="true"></span>
                                    </button>
                                    <h5 class="modal-title" id="exampleModalCenterTitle">Detalles</h5>
                                </div>
                                <div class="modal-body">
                                    <h2>Cliente</h2>

                                    <table id="clientData" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Tipo Id</th>
                                                <th>Documento</th>
                                                <th>Nombre</th>
                                                <th>Correo</th>
                                                <th>Celular</th>
                                                <th>Dirección</th>
                                                <th>Detalles</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        <td id="TipoId"></td>
                                        <td id="Documento"></td>
                                        <td id="Nombre"></td>
                                        <td id="Correo"></td>
                                        <td id="Celular"></td>
                                        <td id="Dirección"></td>
                                        <td id="Detalles"></td>


                                        </tbody>

                                    </table>
                                    <!--tabla detalle venta-->
                                    <h2>Detalle Venta</h2>

                                    <table id="clientData" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                                        <thead>
                                            <tr>
                                                 
                                                <th>Id Producto</th>                                                
                                                <th>Nombre Producto</th>                                                
                                                <th>Cantidad</th>
                                                <th>Valor Unitario</th>
                                                <th>Detalles</th>
                                            </tr>
                                        </thead>
                                        <tbody id="bodyDV"> 

                                        </tbody>    

                                    </table>

                                </div>
                                <div class="modal-footer">
                                    <button id="botonCerrarDV"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin del modal Editar -->
                    
                    <!-- Modal Result -->
                    <!--                    <a id="idCliente" role="button" data-toggle='modal' data-target='#modalResult' href="#"></a>-->
                    <div  class="modal fade" id="modalResult" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content modal-lg">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                                        <span class="fa fa-close close1" aria-hidden="true"></span>
                                    </button>

                                </div>
                                <div  class="modal-body">
                                    <h2>Cliente</h2>

                                    <table id="clientData" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Tipo Id</th>
                                                <th>Documento</th>
                                                <th>Nombre</th>
                                                <th>Correo</th>
                                                <th>Celular</th>
                                                <th>Dirección</th>
                                                <th>Detalles</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        <td id="TipoIdC"></td>
                                        <td id="DocumentoC"></td>
                                        <td id="NombreC"></td>
                                        <td id="CorreoC"></td>
                                        <td id="CelularC"></td>
                                        <td id="DirecciónC"></td>
                                        <td id="DetallesC"></td>


                                        </tbody>

                                    </table>

                                </div>
                                <div class="modal-footer">
                                    <button id="buttonCloseModal"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin del modal result -->
                     <!-- Modal detalle producto -->

                    <div  class="modal fade" id="modalDetalleProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content modal-lg">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                                        <span class="fa fa-close close1" aria-hidden="true"></span>
                                    </button>

                                </div>
                                <div  class="modal-body">
                                    <h2>Producto</h2>

                                    <table id="detalleProductoTable" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Ubicación</th>
                                                <th>Proveedor</th>


                                            </tr>
                                        </thead>
                                        <tbody id="bodyDetailsProduct">



                                        </tbody>

                                    </table>
                                    <div class="row">
                                        <div id="detallesP" style="margin: 0px,0px;padding: 0px,0px;width: 100%; height: 20%; text-align: center;">


                                        </div>

                                    </div>

                                </div>
                                <div class="modal-footer">
                                    <button id="buttonCloseModal"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Fin del modal detalle producto -->


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
                    url: "../../../processVenta?action=listEntregas",
                    dataSrc: "datos"
                },
                columns: [
                    {data: "Codigo"},
                    {data: "Fecha"},
                    {data: "Valor"},
                    {data: "Cliente"},
                    {data: "Factura"},
                    {data: "Estado"},
                    {data: "acciones"}
                ],
                language: idiomaEsp
            });
            $(function () {
                $(document).on('click', 'a.idCliente', function (e) {
                    e.preventDefault();
                    var idCliente = $(this).attr('id');
                    var data = {idCliente: idCliente};
                    $.ajax({
                        url: "../../../methodClient?accion=listClientId",
                        type: "post",
                        data: data,
                        dataSrc: "datos",
                        dataType: "json",
                        success: function (data) {
                            console.log(data);
                            $.each(data.datos, function (i, field) {
                                document.getElementById('TipoIdC').innerHTML = field.tipoId;
                                document.getElementById('DocumentoC').innerHTML = field.numId;
                                document.getElementById('NombreC').innerHTML = field.name;
                                document.getElementById('CorreoC').innerHTML = field.email;
                                document.getElementById('CelularC').innerHTML = field.numCellPhone;
                                document.getElementById('DirecciónC').innerHTML = field.address;
                                document.getElementById('DetallesC').innerHTML = field.details;
                                $("#modalResult").modal("show");
                            });
//                    

                        }
                    });
                });
                $(document).on('click', 'button.btnDetalles', function (e) {
                    e.preventDefault();
                    var idVenta = $(this).parents("tr").find("td").eq(0).text();
                    var idCliente = $(this).parents("tr").find("td").eq(3).text();


                    var data = {idCliente: idCliente};
                    $.ajax({
                        url: "../../../methodClient?accion=listClientId&idCliente=" + idCliente + "",
                        type: "post",
                        data: data,
                        dataSrc: "datos",
                        dataType: "json",
                        success: function (data) {
                            console.log(data);
                            $.each(data.datos, function (i, field) {
                                document.getElementById('TipoId').innerHTML = field.tipoId;
                                document.getElementById('Documento').innerHTML = field.numId;
                                document.getElementById('Nombre').innerHTML = field.name;
                                document.getElementById('Correo').innerHTML = field.email;
                                document.getElementById('Celular').innerHTML = field.numCellPhone;
                                document.getElementById('Dirección').innerHTML = field.address;
                                document.getElementById('Detalles').innerHTML = field.details;
                                $("#modalDetalleVentas").modal("show");
                            });
//                    

                        }
                    });
                    var idVenta = $(this).parents("tr").find("td").eq(0).text();
                    var dato = {idVenta: idVenta}
                    $.ajax({
                        url: "../../../processVenta?action=detalleVentas",
                        type: "post",
                        data: dato,
                        dataSrc: "datos",
                        dataType: "json",
                        success: function (data) {
                            console.log(data);
                            $.each(data.datos, function (i, field) {
                                $('#bodyDV').html("");
                                $('#bodyDV').append("<tr><td>" + field.idProducto + "</td><td>" + field.nombreProducto + "</td><td>" + field.cantidad + "</td><td>" + field.precio + "</td><td>" + field.detalles + "</td></tr>");
                                $("#modalDetalleVentas").modal("show");
                            });
//                    

                        }
                    });

                });
            });
            //funcion para llamar los detalles de un producto dentro del detalle de ventas
            $(document).on('click', 'button.btnDetallesProducto', function (e) {
                e.preventDefault();
                $("#modalDetalleProducto").modal("show");
                var idProducto = $(this).attr('id');
                var data = {idProducto: idProducto};
                $.ajax({
                    url: "../../../methodProduct?accion=modalUpdate",
                    type: "post",
                    data: data,
                    dataSrc: "datos",
                    dataType: "json",
                    success: function (data) {
                        $('#bodyDetailsProduct').html("");
                        $('#detallesP').html("");
                        $.each(data.datos, function (i, field) {
                            $('#bodyDetailsProduct').append("<tr><td>" + field.Ubicacion + "</td><td>" + field.proveedor + "</td></tr>");
                            $('#detallesP').append("<img src='../../../" + field.imagen + "' width='20%' height='20%' alt='Imagen del Producto'/><h3 id='detallesProducto'>" + field.descripcion + "</h3>");
                        });
                    }
                });
            });
            //funcion para asignar mensajero y generar entrega
            $(document).on('click', 'button.btnAsignarMensajero', function (e) {
             var idVenta = $(this).parents("tr").find("td").eq(4).find("a").attr('id');
             
             });
            $('#botonCerrarDV').click(function (e) {
                $("#modalDetalleVentas").modal("toggle");
                $('#bodyDV').html("");
            });
        };



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


    <script>
        $('#buttonLogout').click(function (e) {
            var data = "";
            $.post("../../../loginUser?action=logOut", data, function (res, est, jqXHR) {
                console.log(res);
                if (res === "1") {
                    setTimeout(function () {
                        window.location = "../loginAdmin.jsp";
                    }, 300);
                }
            });
        });
    </script>




</html>
