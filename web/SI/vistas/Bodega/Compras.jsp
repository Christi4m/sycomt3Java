<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " >
                <h2 id="historicalPurchases">Compras</h2>
                <button id="generateReport" class="btn btnAgregar"data-toggle="modal" data-target="#modalCompraNueva">
                    Agregar
                    <span class="fa fa-plus"></span>
                </button>
                <table id="tableCrud" class="table  table-hover table-striped table-bordered" style="width:100%">
                    <thead>
                        <tr>
                            <th id="code">#</th>
                            <th id="dateShop">Fecha</th>
                            <th id="name">Proveedor</th>
                            <th id="obsShop">Observaciones</th>
                            <th id="totlaShop">Total</th>
                            <th id="stateShop">Estado</th>
                            <th id="accions">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <<th id="code">#</th>
                            <th id="dateShop">Fecha</th>
                            <th id="name">Proveedor</th>
                            <th id="obsShop">Observaciones</th>
                            <th id="totlaShop">Total</th>
                            <th id="stateShop">Estado</th>
                            <th id="accions">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal para registros nuevos -->
    <div class="modal fade" id="modalCompraNueva" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" style="overflow: scroll;">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header" style="">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="fa fa-close close1"aria-hidden="true"></span>
                    </button>
                    <h5 id="sellReport"class="modal-title" id="exampleModalLongTitle">Pedido</h5>
                </div>
                <div class="modal-body" style="color: black;">
                    <!-- Nav -->
                    <nav class="navbar  ">
                        <div class="row container" style="width: 100%;">
                            <div class="col-md-12">
                                <button type="button" id="openCart"class="btn btn-primary" data-toggle="modal" data-target="#cart">Carrito (<span class="total-count"></span>)</button>
                                <button class="clear-cart btn btn-danger">Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>


                    <!-- Main -->
                    <div class="container" style="width: 100%;"  >
                        <div id="stockShop"class="row">

                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>

                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Carrito</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="color: black;">
                    <form enctype="multipart/form-data" method="post" action="" name="frmShop" id="frmShop"  class="form-horizontal col-sm-12 text-center">
                        <button type="submit" id="btnOrderNow"class="btn colorbtn btn-primary">Ordenar Ahora</button>
                        <div class="form-group text-center">

                            <div class="col-sm-6">
                                <label id = "Description" class = "col-md-4 control-label" para = "descripcionShop"> Descripción </label>
                                <textarea placeholder="Acá Descripción producto" class="form-control" id="descripcionShop" cols="30" rows="1"name="descripcionShop"></textarea>
                            </div>

                            <div class="col-sm-6">
                                <label id = "ProveedorTelaje" class = "col-md-4 control-label" para = "proveedorShop"> Proveedor </label>
                                <select id="proveedorShop" name="proveedorShop" class="form-control">
                                    <option selected="selected">Seleccione un proveedor</option>
                                </select>
                            </div>   
                            <div class="col-sm-6" style="display: none;">
                                <label class="col-md-4 control-label" for="detailsShop">Detalle Compra</label>  
                                <input id="detailsShop" name="detailsShop" type="text" placeholder="Detalle Compra" class="form-control input-md" required="">
                            </div>   
                            <div class="col-sm-6" style="display: none;">
                                <label class="col-md-4 control-label" for="totalShop">Total</label>  
                                <input id="totalShop" name="totalShop" type="text" placeholder="Total Compra" class="form-control input-md" required="">
                            </div>   
                        </div>   
                        <table class="show-cart table">

                        </table>
                        <div>Total: $<span class="total-cart"></span></div>
                    </form>


                </div>

                <div class="modal-footer">
                    <button id="closeModalCart"type="button" class="btn colorbtn btn-primary" data-dismiss="modal">Cerrar</button>

                </div>
            </div>
        </div>
    </div> 
    <!-- Fin del modal Ingresar Nuevo -->
    <!-- Modal detalles compras-->
    <div class="modal fade" id="modalDetalleCompras" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                        <span class="fa fa-close close1" aria-hidden="true"></span>
                    </button>
                    <h5 class="modal-title" id="exampleModalCenterTitle">Detalles</h5>
                </div>
                <div class="modal-body">
                    
                    <!--tabla detalle Compra-->
                    <h2>Detalle Compra</h2>
                    <table id="ShopData" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                        <thead>
                            <tr>                                
                                <th>#</th>
                                <th>Producto</th>
                                <th>Cantidad Mt²</th>
                                <th>Precio Unitario</th>
                            </tr>
                        </thead>
                        <tbody id="bodyDC"> 

                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarDC"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
<!--    fin modal detalle compras-->
<!-- Modal Detalles -->
<div class="modal fade" id="modalDetallesProveedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">                                    
                <h5 id="editSupplier" class="modal-title" id="exampleModalCenterTitle">Detalles Proveedor</h5>
            </div>
            <div class="modal-body" style="border: none;">
                <table id="tabledetailsProveedor" class="table col-md-2 table-condensed table-hover table-striped table-bordered text-center">
                    <thead>
                        <tr>
                            <th id="nameProveedor">Proveedor</th>
                            <th id="nitProveedor">Nit</th>
                            
                        </tr>
                    </thead>
                    <tbody id="bodyDP">


                    </tbody>

                </table>
            </div>
            <div class="modal-footer" style="border: none;">
                <button id="c"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>                                    
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal Detalles -->
</section>

<link rel="stylesheet" href="<%= request.getContextPath()%>/SI/css/styleCart.css">
<script src="Bodega/Js/Compras.js"></script>