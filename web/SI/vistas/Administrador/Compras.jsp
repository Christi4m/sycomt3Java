<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " >
                <h2 id="historicalPurchases">Compras</h2>
                <button id="generateReport" class="btn btnAgregar"data-toggle="modal" data-target="#modalNuevo">
                    Agregar
                    <span class="fa fa-plus"></span>
                </button>
                <table id="tableCrud" class="table col-md-2 table-condensed  table-hover table-striped table-bordered text-center" style="width:100%">
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
<!-- Modal para registros nuevos -->
<div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-close close1"aria-hidden="true"></span>
                </button>
                <h5 id="sellReport"class="modal-title" id="exampleModalLongTitle">Reporte Ventas</h5>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
                <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button id="botonVaciar" name="botonVaciar" class="colorbtn btn btn-primary">Vaciar</button>
                <button id="botonGuardar" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
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
                <h5 id="editPurchase" class="modal-title" id="exampleModalCenterTitle">Editar Compra</h5>
            </div>
            <div class="modal-body">
                <form class="form-horizontal col-sm-12 text-center">
                    <div class="form-group text-center">
                        <h4 id="purchaseData" class="tituloDP">Datos de la Compra</h4>
                        <div class="col-sm-6">
                            <label id="code" class="col-md-4 control-label" for="codigoCompra">Código</label>
                            <input id="codigoCompra" name="codigoCompra" type="text" placeholder="Código Compra " class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id="Value" class="col-md-4 control-label" for="valorCompra">Valor</label>
                            <input id="valorCompra" name="valorCompra" type="text" placeholder="Valor Compra" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id="date" class="col-md-4 control-label" for="fechaCompra">Fecha</label>
                            <input id="fechaCompra" name="fechaCompra" type="text" placeholder="Fecha Compra" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id="products" class="col-md-4 control-label" for="productosCompra">Productos</label>
                            <select id="productosCompra" name="productosCompra" class="form-control" multiple="multiple">
                                <option id="product1" value="1">Producto 1</option>
                                <option id="product2" value="2">Producto 2</option>
                                <option id="product3"  value="3">Producto 3</option>
                                <option id="product4" value="4">Producto 4</option>
                                <option id="product5"  value="5">Producto 5</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label id="state" class="col-md-4 control-label" for="estadoCompra">Estado</label>
                            <select id="estadoCompra" name="estadoCompra" class="form-control">
                                <option id="requested"  value="1">Solicitada</option>
                                <option id="dispatched"  value="2">Despachada</option>
                                <option id="delivered"  value="3">Entregada</option>
                                <option id="refund-guaranted"  value="4">Devolución - Garantía</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label id="provider" class="col-md-4 control-label" for="Proveedor">Proveedor</label>
                            <input id="Proveedor" name="Proveedor" type="text" placeholder="Proveedor Compra" class="form-control input-md" required="">
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button id="botonVaciar" name="botonVaciar" class="colorbtn btn btn-primary">Vaciar</button>
                <button id="botonGuardar" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal Editar -->
</section>

<script src="Administrador/Js/Compras.js"></script>
<script src="<%= request.getContextPath()%>/SI/vistas/Js/responsiveTable.js"></script>