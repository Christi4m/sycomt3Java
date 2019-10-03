<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12 cont ">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >
                <h2>Entregas</h2>
                <table id="tableCrud" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Valor</th>
                            <th>Cliente</th>
                            <th>Factura</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Valor</th>
                            <th>Cliente</th>
                            <th>Factura</th>
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

<!-- Modal para asignar un mensajero a una entrega-->
<div class="modal fade" id="ModalAsignarMensajero" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-close close1"aria-hidden="true"></span>
                </button>
                <h5 id = "botonAdd" class = "modal-title" id = "exampleModalLongTitle"> Asignar </h5>
            </div>
            <div class="modal-body">
                <form style="margin-top: 30px;" name="frmAsignarMensajero" id="frmAsignarMensajero" enctype="multipart/form-data"  class="form-horizontal col-sm-12 text-center">
                    <div class="form-group text-center">
                        <h4 id = "productDates" class = "tituloDP"> Datos de Entrega </h4>

                        <div class="col-sm-6">
                            <label class="col-md-9 text-left" for="fechaEntrega">Fecha de Entrega *</label>  
                            <input id="fechaEntrega" name="fechaEntrega" type="date" placeholder="Fecha de entrega" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label id = "labelMensajero" class = "col-md-4 control-label" para = "mesajeroAsignar"> Mensajero *</label>
                            <select id="mesajeroAsignar" name="mesajeroAsignar" class="form-control">
                                <option value="0">---------------------</option>
                            </select>
                        </div>

                        <div class="col-sm-12" style="margin-top: 30px;">
                            <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button id="botonVaciar" type="reset" name="botonVaciar" class="colorbtn btn btn-primary">Limpiar</button>
                            <button id="btnAsignarM" type="submit" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>
<!-- Fin del modal para asignar un mensajero a una entrega -->
</section>

<script src="Bodega/Js/EntregasPendientes.js"></script>
