<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " >
                <h2  id="Purchases">Compras</h2>
                <button  id="btnAgregarShop" class="btn btnAgregar"data-toggle="modal" data-target="#modalCompraNueva">
                    <span id="titleaddPurchasesbtn">Agregar</span>
                    <span class="fa fa-plus"></span>
                </button>
                <table id="tableCrud" class="table  table-hover table-striped table-bordered" style="width:100%">
                    <thead>
                        <tr>
                            <th  id="code">#</th>
                            <th  id="dateShop">Fecha</th>
                            <th  id="previeder">Proveedor</th>
                            <th  id="obsShop">Observaciones</th>
                            <th  id="totlaShop">Precio Total</th>
                            <th  id="stateShop">Estado</th>
                            <th  id="accions">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th  id="code1">#</th>
                            <th  id="dateShop1">Fecha</th>
                            <th  id="previeder1">Proveedor</th>
                            <th  id="obsShop1">Observaciones</th>
                            <th  id="totlaShop1">Precio Total</th>
                            <th  id="stateShop1">Estado</th>
                            <th  id="accions1">Acciones</th>
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
                    <h5  data-translate=""id="sellReport"class="modal-title" id="exampleModalLongTitle">Pedido</h5>
                </div>
                <div class="modal-body" style="color: black;">
                    <!-- Nav -->
                    <nav class="navbar  ">
                        <div class="row container" style="width: 100%;">
                            <div class="col-md-12">
                                <button type="button" id="openCart"class="btn btn-primary" data-toggle="modal" data-target="#cart">Carrito (<span class="total-count"></span>)</button>
                                <button  data-translate=""class="clear-cart btn btn-danger">Vaciar Carrito</button>
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
                    <button  data-translate=""id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>

                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5  data-translate=""class="modal-title" id="exampleModalLabel">Carrito</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="color: black;">
                    <form enctype="multipart/form-data" method="post" action="" name="frmShop" id="frmShop"  class="form-horizontal col-sm-12 text-center">
                        <button  data-translate=""type="submit" id="btnOrderNow"class="btn colorbtn btn-primary">Ordenar Ahora</button>
                        <div class="form-group text-center">

                            <div class="col-sm-6">
                                <label id = "Description" class = "col-md-4 control-label" para = "descripcionShop"> Descripción </label>
                                <textarea placeholder="Acá Descripción producto" class="form-control" id="descripcionShop" cols="30" rows="1"name="descripcionShop"></textarea>
                            </div>

                            <div class="col-sm-6">
                                <label id = "ProveedorTelaje" class = "col-md-4 control-label" para = "proveedorShop"> Proveedor </label>
                                <select id="proveedorShop" name="proveedorShop" class="form-control">
                                    <option  value=""selected="selected">Seleccione un proveedor</option>
                                </select>
                            </div>   
                            <div class="col-sm-6" style="display: none;">
                                <label  data-translate=""class="col-md-4 control-label" for="detailsShop">Detalle Compra</label>  
                                <input id="detailsShop" name="detailsShop" type="text" placeholder="Detalle Compra" class="form-control input-md" required="">
                            </div>   
                            <div class="col-sm-6" style="display: none;">
                                <label  data-translate=""class="col-md-4 control-label" for="totalShop">Total</label>  
                                <input id="totalShop" name="totalShop" type="text" placeholder="Total Compra" class="form-control input-md" required="">
                            </div>   
                        </div>   
                        <table class="show-cart table">

                        </table>
                        <div>Total: $<span class="total-cart"></span></div>
                    </form>


                </div>

                <div class="modal-footer">
                    <button  data-translate=""id="closeModalCart"type="button" class="btn colorbtn btn-primary" data-dismiss="modal">Cerrar</button>

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
                    <h5  data-translate=""class="modal-title" id="exampleModalCenterTitle">Detalles</h5>
                </div>
                <div class="modal-body"style="color: black;">
                    
                    <!--tabla detalle Compra-->
                    <h2 data-translate="">Detalle Compra</h2>
                    <table id="ShopData" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                        <thead>
                            <tr>                                
                                <th>#</th>
                                <th data-translate="">Producto</th>
                                <th data-translate="">Cantidad Mt²</th>
                                <th data-translate="">Precio Unitario</th>
                            </tr>
                        </thead>
                        <tbody id="bodyDC"> 

                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button  data-translate=""id="botonCerrarDC"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
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
                <h5  data-translate=""id="editSupplier" class="modal-title" id="exampleModalCenterTitle">Detalles Proveedor</h5>
            </div>
            <div class="modal-body" style="border: none;color: black;">
                <table id="tabledetailsProveedor" class="table col-md-2 table-condensed table-hover table-striped table-bordered text-center">
                    <thead>
                        <tr>
                            <th  data-translate=""id="nameProveedor">Proveedor</th>
                            <th  data-translate=""id="nitProveedor">Nit</th>
                            
                        </tr>
                    </thead>
                    <tbody id="bodyDP">


                    </tbody>

                </table>
            </div>
            <div class="modal-footer" style="border: none;">
                <button  data-translate=""id="c"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>                                    
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal Detalles -->
</section>

<link rel="stylesheet" href="<%= request.getContextPath()%>/SI/css/styleCart.css">
<script src="Bodega/Js/Compras.js"></script>