<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >
                <h2 id="sales">Ventas</h2>
                <table id="tableCrud" class="table  table-hover table-striped table-bordered" style="width:100%; color:black">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th id="date">Fecha</th>
                            <th id="value">Valor</th>
                            <th id="client">Cliente</th>
                            <th id="invoice">Factura</th>
                            <th id="state">Estado</th>
                            <th id="accions">Acciones</th>

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
                            <th id="accions1">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>

    </div>
</div>

<!-- Modal detalles venta-->
<div class="modal fade" id="modalDetalleVentas" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="">
                    <span class="fa fa-close close1" aria-hidden="true"></span>
                </button>
                <h5 id="details" class="details" id="exampleModalCenterTitle">Detalles</h5>
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

                            <th id="idProduct">Id Producto</th>
                            <th id="productName">Nombre Producto</th>                                                
                            <th id="quantity">Cantidad</th>
                            <th id="unitValue">Valor Unitario</th>
                            <th id="details2">Detalles</th>
                        </tr>
                    </thead>
                    <tbody id="bodyDV"> 

                    </tbody>

                </table>

            </div>
            <div class="modal-footer">
                <button id="acept"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>

            </div>
        </div>
    </div>
</div>
<!-- Fin del modal detalle venta -->

<!-- Modal Detalle cliente -->

<div  class="modal fade" id="modalDetalleCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
<!-- Fin del modal detalle cliente -->
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
                <h2 id="product">Producto</h2>

                <table id="detalleProductoTable" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th id="location">Ubicación</th>
                            <th id="supplier">Proveedor</th>


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
                <button id="botonCerrarDV "type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal detalle producto -->
</section>

<script src="Bodega/Js/VentasDespachar.js"></script>