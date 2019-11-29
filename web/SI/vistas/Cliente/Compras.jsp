<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12 cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >
                <h2 id="titleShopC">Compras</h2>

                <table id="tableCrud" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th id="">#</th>
                            <th id="dateC">Fecha</th>
                            <th id="valorC">Valor</th>
                            <th id="facturaC">Factura</th>
                            <th id="estadoC">Estado</th>
                            <th id="accions">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th id="dateC1">Fecha</th>
                            <th id="valorC1">Valor</th>
                            <th id="facturaC1">Factura</th>
                            <th id="estadoC1">Estado</th>
                            <th id="accions1">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>

    </div>
    <!-- Modal detalles -->
    <div class="modal fade" id="modalDetalleComprasC" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                        <span class="fa fa-close close1" aria-hidden="true"></span>
                    </button>
                    <h5 class="modal-title" id="details">Detalles</h5>
                </div>
                <div class="modal-body">

                    <!--tabla detalle venta-->
                    <h2 id="detailsShopTitle">Detalle Compra</h2>
                    <table id="clientData" class="table table-striped table-bordered dt-responsive nowrap" style="color: black;width:100%">
                        <thead>
                            <tr>

                                <th>#</th>
                                <th id="detailNom">Nombre P</th>
                                <th id="detailPP">Detalles P</th>
                                <th id="detailCant">Cantidad</th>
                                <th id="detailPrice">Precio</th>
                            </tr>
                        </thead>
                        <tbody id="bodyDV"> 

                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarDV"type="button" style="color: white;"class="btn btn-secondary colorbtn" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin del modal detalles -->
    <!-- Modal detalle producto -->

    <div  class="modal fade" id="modalDetalleProducto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header">
                    <div class="row">
                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                        <span class="fa fa-close close1" aria-hidden="true"></span>
                    </button>
                    <h5 class="" id="titleShopProduct">Producto</h5>
                    </div>
                </div>
                <div  class="modal-body">



                    <div class="row">
                        <div id="detallesP" style="padding: 5%;width: 100%; height: 20%;  font-size: 10px;">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="buttonCloseModal"type="button" style="color: white;"class="btn colorbtn btn-secondary" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin del modal detalle producto -->
    <!-- Modal factura compra -->

    <div  class="modal fade" id="modalFacturaCompra" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header">
                    <button style="float: right;background: #2f323a;border: none"type="button" class="" data-dismiss="modal" aria-label="">
                        <span style="color: white; font-size: 25px; font-family: sans-serif"class="fa fa-close close1" aria-hidden="true">x</span>
                    </button>
                    <button id="buttonDownload" style="margin-right: 5px;color: black;background: white;float: left"class="btn colorbtn btn-secondary" ><span class="fa fas-arrow-circle-o-down"></span></button>
                    <h5 style="float: left" class="modal-title" id="titleShopFacC">Factura</h5>
                </div>
                <div  class="modal-body">

                    <embed id="pdfModalFactura" src="" type="application/pdf" width="100%" height="600px"data="helloworld.pdf" />

                </div>
                <div class="modal-footer">
                    <button id="buttonCloseModal "type="button" style="color: white;"class="btn colorbtn btn-secondary" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin del modal factura compra -->



</section>
<script src="Cliente/Js/Compras.js"></script>