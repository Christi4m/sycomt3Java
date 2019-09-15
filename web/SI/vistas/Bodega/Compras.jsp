<section class="wrapper">
    <div class="row">

        <div class="col-lg-12 col-xl-12 col-md-12 cont ">

            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >


                <h2>Compras</h2>
                <button id="agregar" class="btn btnAgregar"data-toggle="modal" data-target="#modalCompra">
                    Agregar
                    <span class="fa fa-plus"></span>
                </button>
                <table id="tableCompras" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th id="code">Id Sistema</th>
                            <th id="name">Fecha</th>
                            <th id="name">Proveedor</th>
                            <th>Observaciones</th>
                            <th id="locationCellar">Estado</th>
                            <th id="edit">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                    <tfoot>
                        <tr>
                            <th id="code">Id Sistema</th>
                            <th id="name">Fecha</th>
                            <th id="name">Proveedor</th>
                            <th>Observaciones</th>
                            <th id="locationCellar">Estado</th>
                            <th id="edit">Acciones</th>

                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>

    </div>
</div>
<!-- Modal para Agregar Compra -->
<div class="modal fade" id="modalCompra" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-close close1"aria-hidden="true"></span>
                </button>
                <h5 id="add" class="modal-title" id="exampleModalLongTitle">Agregar</h5>
            </div>
            <div class="modal-body">
                <form id="ordenCompraFrm" class="form-horizontal">
                    <fieldset>

                        <!-- Form Name -->
                        <legend>Compras</legend>

                        <!-- Text input-->
                        <div class="form-group">

                            <div id="divFechaCompra"class="col-md-6">
                                <label class=" control-label text-center" for="fechaCompra">Fecha</label>  
                                <input id="fechaCompra" name="fechaCompra" type="text" placeholder="Fecha Compra" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-6">
                                <label class="control-label text-center" for="proveedorCompra">Proveedor</label>
                                <select id="proveedorCompra" name="proveedorCompra" class="form-control">
                                    <option value="1">Option one</option>
                                    <option value="2">Option two</option>
                                    hola
                                </select>
                            </div>
                            <div class="col-md-8" style="margin: auto; text-align: center;">
                                <label class="control-label text-center" for="obsCompra">Observaciones </label>
                                <textarea cols="30" rows="1" placeholder="Observaciones de la compra"class="form-control" id="obsCompra" name="obsCompra"></textarea>
                            </div>

                        </div>                                            
                    </fieldset>
                    <div class="modal-footer">
                        <div class="col-sm-12" style="margin-top: 30px;">
                            <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button id="botonRegistrarCompra" type="submit" name="botonEnviar" class="btnUpdateModal colorbtn btn btn-primary">Aceptar</button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    </div>
</div>
<!-- Fin del modal Ingresar Compra -->
<!-- Modal editar -->
<div class="modal fade" id="modalEdicionCompra" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="">
                    <span class="fa fa-close close1" aria-hidden="true"></span>
                </button>
                <h5 class="modal-title" id="exampleModalCenterTitle">Editar</h5>
            </div>
            <div class="modal-body">


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


</section>

<script src="Bodega/Js/Compras.js"></script>
