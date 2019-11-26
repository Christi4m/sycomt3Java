
<section class="wrapper">
    <div class="row">        
        <div class="col-lg-12 col-xl-12 col-md-12 cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " >
                <h2 id="historicalSales2">Ventas</h2>
                <button id="generateReport" class="btn btnAgregar"data-toggle="modal" data-target="#modalReporteVentas">
                    Reporte
                    <span class="fas fa-chart-bar"></span>
                </button>
                <table id="tableCrud" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th id="date">Fecha</th>
                            <th id="value">Valor</th>
                            <th id="client">Cliente</th>
                            <th id="invoice">Factura</th>
                            <th id="state">Estado</th>
                            <th id="actions">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th id="date1">Fecha</th>
                            <th id="value1">Valor</th>
                            <th id="client1">Cliente</th>
                            <th id="invoice1">Factura</th>
                            <th id="state1">Estado</th>
                            <th id="actions1">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <!-- Modal para reporte ventas  -->
    <div class="modal fade" id="modalReporteVentas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="overflow: scroll;">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header" style="">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="fa fa-close close1"aria-hidden="true"></span>
                    </button>
                    <h5 id="salesReport"class="modal-title" id="exampleModalLongTitle">ReporteVentas</h5>
                </div>
                <div class="modal-body" style="color: black;">
                    <div id="reporteVentas1" style="min-width: 310px; height: 700px; max-width: 800px; margin: 0 auto"></div>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>

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
                    <h5 id="details" class="modal-title" id="exampleModalCenterTitle">Detalles</h5>
                </div>
                <div class="modal-body">
                    <h2 id="client2">Cliente</h2>
                    <table id="clientData" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                        <thead>
                            <tr>
                                <th id="typeId">Tipo Id</th>
                                <th id="document">Documento</th>
                                <th id="name">Nombre</th>
                                <th id="correo">Correo</th>
                                <th id="cellPhone">Celular</th>
                                <th id="address">Dirección</th>
                                <th id="details1">Detalles</th>
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
                    <h2 id="detailSell">Detalle Venta</h2>
                    <table id="clientData" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th id="idProduct">Id Producto</th>
                                <th id="nameP">Nombre P</th>
                                <th id="detailP">Detalles P</th>
                                <th id="quantity">Cantidad</th>
                                <th id="price">Precio</th>
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
    <!-- Fin del modal detalles -->

    <!-- Modal Detalle Cliente -->
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
                    <button id="buttonCloseModal "type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin del modal detalle producto -->

</section>

<script src="Administrador/Js/Ventas.js"></script>



