<section class="wrapper">    
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >
                <h2>Stock</h2>
                <button id="add" class="btn btnAgregar"data-toggle="modal" data-target="#modalNuevo">
                    Agregar
                    <span class="fa fa-plus"></span>
                </button>
                <table id="listProductos" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th id="code">Codigo</th>
                            <th id="nombre">Nombre</th>
                            <th>Telaje</th>
                            <th id="locationCellar">Ubicacion Bodega</th>
                            <th id="price">Precio M²</th>
                            <th>Stock</th>
                            <th id="actions">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                    <tfoot>
                        <tr>
                            <th id="code1">Codigo</th>
                            <th id="name1">Nombre</th>
                            <th>Telaje</th>
                            <th id="locationCellar1">Ubicacion Bodega</th>
                            <th id="price1">Precio M²</th>
                            <th>Stock</th>
                            <th id="actions1">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>

    </div>
</div>
<!-- Modal para Agregar Producto -->
<div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-close close1"aria-hidden="true"></span>
                </button>
                <h5 id = "botonAdd" class = "modal-title" id = "exampleModalLongTitle"> Agregar </h5>
            </div>
            <div class="modal-body">
                <form method="post" action="../../../methodProduct?accion=create" name="frmCrearProducto" id="frmCrearProducto" enctype="multipart/form-data"  class="form-horizontal col-sm-12 text-center">
                    <div class="form-group text-center">
                        <h4 id = "productDates" class = "tituloDP"> Datos Del Producto </h4>
                        <div class="col-sm-6">
                            <label id = "nameTitle" class = "col-md-4 control-label" para = "nombreProducto"> Nombre </label>
                            <input id="nombreProducto" name="nombreProducto" type="text" placeholder="Nombre Producto" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id = "Description" class = "col-md-4 control-label" para = "decripcionProducto"> Descripción </label>
                            <textarea placeholder="Acá escripción producto" class="form-control" id="decripcionProducto" cols="30" rows="1"name="decripcionProducto"></textarea>
                        </div>
                        <div class="col-sm-6">
                            <label id = "ProductTelaje" class = "col-md-4 control-label" para = "telajeProducto"> Telaje </label>
                            <select id="telajeProducto" name="telajeProducto" class="form-control">
                                <option value="0">---------------------</option>
                                <option id = "paño" value = "Paño"> Paño </option>
                                <option id = "Lino" value = "Lino"> Lino </option>
                                <option id = "Seda" value = "Seda"> Seda </option>
                                <option id = "Uniforme" value = "Uniforme"> Uniforme </option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label id = "ProveedorTelaje" class = "col-md-4 control-label" para = "proveedorProducto"> Proveedor </label>
                            <select id="proveedorProducto" name="proveedorProducto" class="form-control">
                                <option value="0">---------------------</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label id = "location" class = "col-md-4 control-label" para = "ubicacionBodega"> Ubicación </label>
                            <input id="ubicacionBodega" name="ubicacionBodega" type="text" placeholder="Ubicación Bodega" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id = "price2" class = "col-md-4 control-label" para = "precioMC"> Precio </label>
                            <input id="precioMC" name="precioMC" type="text" placeholder="Precio Metro Cuadrado" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label class="col-md-4 control-label" for="stock">Stock</label>
                            <input id="stock" name="stock" type="text" placeholder="Stock Bodega" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-12">
                            <label id="image" class="col-md-7 control-label" for="imagenProducto">Imagen </label>
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
                <h5 id="edit" class="modal-title" id="exampleModalCenterTitle">Editar</h5>
            </div>
            <div class="modal-body">

                <form class="form-horizontal col-sm-12 text-center">
                    <div class="form-group text-center">
                        <h4 id="productDates1" class="tituloDP">Datos Del Producto</h4>
                        <div class="col-sm-6">
                            <label id="ID" class="col-md-4 control-label" for="idProducto">Id</label>
                            <input id="idProductoA" readonly="readonly"  name="idProducto" type="text" placeholder="Id Producto" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id="name3" class="col-md-4 control-label" for="nombreProducto">Nombre</label>
                            <input id="nombreProductoA" name="nombreProducto" type="text" placeholder="Nombre Producto" class="form-control input-md" required="">
                        </div>

                        <div class="col-sm-6">
                            <label class="col-md-4 control-label" for="telajeProducto">Telaje</label>
                            <select id="telajeProductoA" name="telajeProducto" class="form-control">
                                <option value="0">---------------------</option>
                                <option id="cloth1" value="Paño">Paño</option>
                                <option id="linen1" value="Lino">Lino</option>
                                <option id="silk1" value="Seda">Seda</option>
                                <option id="uniform1" value="Uniforme">Uniforme</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <label id="location1" class="col-md-4 control-label" for="ubicacionBodega">Ubicación</label>
                            <input id="ubicacionBodegaA" name="ubicacionBodega" type="text" placeholder="Ubicación Bodega" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id="price3" class="col-md-4 control-label" for="precioMC">Precio</label>
                            <input id="precioMCA" name="precioMC" type="text" placeholder="Precio Metro Cuadrado" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label class="col-md-4 control-label" for="stock">Stock</label>
                            <input id="stockA" name="stock" type="text" placeholder="Stock Bodega" class="form-control input-md" required="">
                        </div>
                    </div>
                    <div class="col-sm-12" style="margin-top: 30px;">
                        <button id="botonCerrarC"type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
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

<script src="Bodega/Js/Inventario.js"></script>
