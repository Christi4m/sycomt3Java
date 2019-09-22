<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String home = "";

    if (rol.equalsIgnoreCase("Bodega-Jefe")) {
        home = " <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                            <div class=\"subItem \">\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaDespachos\"class=\" incono fa fa-outdent\" href=\"#\"></a> \n"
                + "                                                </div>\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaDespachos\"class=\"textIcono\" href=\"#\">Despachos</a>\n"
                + "                                                </div>\n"
                + "\n"
                + "                                            </div>\n"
                + "                                        </div>\n"
                + "                                        <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                            <div class=\"subItem \">\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaInventario\"class=\" incono fa fa-list-ul\" href=\"#\"></a>\n"
                + "                                                </div>\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaInventario\" href=\"#\" class=\"textIcono\">Inventario</a>\n"
                + "                                                </div>\n"
                + "\n"
                + "                                            </div>\n"
                + "                                        </div>\n"
                + "                                        <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                            <div class=\"subItem \">\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaCompras\"class=\" incono fa fa-cart-plus\" href=\"#\"></a> \n"
                + "                                                </div>\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaCompras\"class=\"textIcono\"href=\"#\">Compras</a>\n"
                + "                                                </div>\n"
                + "\n"
                + "                                            </div>\n"
                + "                                        </div>\n"
                + "                                        <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                            <div class=\"subItem \">\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaEntregasAsignadas\"class=\" incono fa fa-send\" href=\"#\"></a> \n"
                + "                                                </div>\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaEntregasAsignadas\"class=\"textIcono\"href=\"#\">E.Asignadas</a>\n"
                + "                                                </div>\n"
                + "\n"
                + "                                            </div>\n"
                + "                                        </div>\n"
                + "                                        <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                            <div class=\"subItem \">\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaEntregasPedientes\"class=\" incono fa fa-send\" href=\"#\"></a> \n"
                + "                                                </div>\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaEntregasPedientes\"class=\"textIcono\"href=\"#\">E.Pendientes</a>\n"
                + "                                                </div>\n"
                + "\n"
                + "                                            </div>\n"
                + "                                        </div>\n"
                + "                                        \n"
                + "                                        <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                            <div class=\"subItem \">\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaMensajeros\"class=\" incono fa fa-users\" href=\"#\"></a>\n"
                + "                                                </div>\n"
                + "                                                <div>\n"
                + "                                                    <a id=\"tarjetaMensajeros\"class=\"textIcono\" href=\"#\">Mensajeros</a>\n"
                + "                                                </div>                                                \n"
                + "                                            </div>\n"
                + "                                        </div>";
    } else if (rol.equalsIgnoreCase("Administrador")) {
        home = "<div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                <div class=\"subItem \">\n"
                + "                                    <div>\n"
                + "                                        <a id=\"tajetaProveedoresA\" class=\" incono fa fa-desktop\" href=\"#\"></a> \n"
                + "                                    </div>\n"
                + "                                    <div>\n"
                + "                                        <a id=\"tajetaProveedoresA\" class=\"textIcono\" href=\"#\">Proveedores</a>\n"
                + "                                    </div>\n"
                + "                                </div>\n"
                + "                            </div>\n"
                + "                            <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                <div class=\"subItem \">\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaVentasA' class=\" incono fa fa-shopping-cart\" href=\"#\"></a>\n"
                + "                                    </div>\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaVentasA' href=\"#\" class=\"textIcono\">Ventas</a>\n"
                + "                                    </div>\n"
                + "\n"
                + "                                </div>\n"
                + "                            </div>\n"
                + "                            <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                <div class=\"subItem \">\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaComprasA'class=\" incono fa fa-cart-plus\" href=\"#\"></a> \n"
                + "                                    </div>\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaComprasA'class=\"textIcono\"href=\"#\">Compras</a>\n"
                + "                                    </div>\n"
                + "\n"
                + "                                </div>\n"
                + "                            </div>\n"
                + "                            <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                <div class=\"subItem \">\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaInventarioA'class=\" incono fa fa-list\" href=\"#\"></a> \n"
                + "                                    </div>\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaInventarioA'class=\"textIcono\" href=\"#\">Inventario</a>\n"
                + "                                    </div>\n"
                + "\n"
                + "                                </div>\n"
                + "                            </div>\n"
                + "                            <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                <div class=\"subItem \">\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaEmpleadosA'class=\" incono fa fa-users\" href=\"#\"></a>\n"
                + "                                    </div>\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaEmpleadosA'class=\"textIcono\" href=\"#\">Empleados</a>\n"
                + "                                    </div>                                                \n"
                + "                                </div>\n"
                + "                            </div>"
                + "                            <div class=\"col-lg-3 tarjetaItem\">\n"
                + "                                <div class=\"subItem \">\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaReportesA'class=\" incono fa fa-bar-chart\" href=\"#\"></a>\n"
                + "                                    </div>\n"
                + "                                    <div>\n"
                + "                                        <a id='tajetaReportesA'class=\"textIcono\" href=\"#\">Reportes</a>\n"
                + "                                    </div>                                                \n"
                + "                                </div>\n"
                + "                            </div>";

    } else if (rol.equalsIgnoreCase("Mensajero")) {

    }


%>

<!-- **********************************************************************************************************************************************************
    MAIN CONTENT
    *********************************************************************************************************************************************************** -->

<!--main content start-->

<section id="main-content">
    <section class="wrapper">    
        <div class="row">
            <div id="li"class="col-lg-12 col-xl-12 col-md-12 cont " style="height: 100%">
                <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white; padding: 8% 0%;" >
                    <div class=" tarjetas">
                        <div class=" tarjetaRow row">
                            <%= home%>
                        </div>  
                    </div>
                </div>
            </div>
        </div>          
    </section>
</section>


