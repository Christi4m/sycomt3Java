<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12 cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " >
                <h2 id="historicalSuppliers">Proveedores</h2>
                <button  id="addNew" class="btn btnAgregar"data-toggle="modal" data-target="#modalRegistrarProveedor">
                    Agregar
                    <span class="fa fa-plus"></span>
                </button>
                <table id="tableCrud" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th id="businessName">Razón Social</th>
                            <th >Nit</th>                                           
                            <th id="state">Estado</th>
                            <th id="actions">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th id="businessName">Razón Social</th>
                            <th >Nit</th>                                           
                            <th id="state">Estado</th>
                            <th id="actions">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- Modal para registros nuevos -->
<div class="modal fade" id="modalRegistrarProveedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-close close1"aria-hidden="true"></span>
                </button>
                <h5 id="supplierRegistration" class="modal-title" id="exampleModalLongTitle">Registro de proveedores </h5>
            </div>
            <div class="modal-body">
                <form enctype="multipart/form-data" id="frmRegisterP"class="form-horizontal">
                    <fieldset>
                        <!-- Form Name -->
                        <legend>Registrar Proveedor</legend>
                        <!-- Text input-->
                        <div class="form-group row">
                            <div class="col-md-4" >
                                <label class="control-label" for="razonSocial">Razón Social * </label>  
                                <input id="razonSocial" name="razonSocial" type="text" placeholder="Razón Social" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class="control-label" for="nit">Nit *</label>  
                                <input style="margin-bottom: 2%;" id="nit" name="nit" type="text" placeholder="Nit" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="emailP">Email *</label>  
                                <input style="margin-bottom: 2%;" id="emailP" name="emailP" type="text" placeholder="Email" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class="control-label" for="numCellPhoneP">Numero *</label>  
                                <input style="margin-bottom: 2%;" id="numCellPhoneP" name="numCellPhoneP" type="text" placeholder="Celular" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="numLandLineP">Numero *</label>  
                                <input style="margin-bottom: 2%;" id="numLandLineP" name="numLandLineP" type="text" placeholder="Fijo" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="addressP">Dirección *</label>  
                                <input style="margin-bottom: 2%;" id="addressP" name="addressP" type="text" placeholder="Dirección" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="representanteLegal">Representante Legal *</label>  
                                <input style="margin-bottom: 2%;" id="representanteLegal" name="representanteLegal" type="text" placeholder="Representante Legal" class="form-control input-md" required="">
                            </div>
                        </div>                                           
                    </fieldset>
                    <div class="modal-footer">
                        <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button id="botonVaciarP" type="reset" name="botonVaciar" class="colorbtn btn btn-primary">Vaciar</button>
                        <button id="btnRegisterP" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
<!-- Fin del modal Ingresar Nuevo -->
<!-- Modal editar -->
<div class="modal fade" id="modalEdicion" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="">
                    <span class="fa fa-close close1" aria-hidden="true"></span>
                </button>
                <h5 id="editSupplier" class="modal-title" id="exampleModalCenterTitle">Editar Proveedor</h5>
            </div>
            <div class="modal-body">
                <form enctype="multipart/form-data" id="frmUpdateP"class="form-horizontal">
                    <fieldset>                      
                        <div class="form-group row">
                            <div class="col-md-4">
                                <label class=" control-label" for="idU">Id</label>  
                                <input readonly="readonly" id="idU" name="idU" type="text" placeholder="Id" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class="control-label" for="razonSocial">Razón Social </label>  
                                <input id="razonSocialU" name="razonSocial" type="text" placeholder="Razón Social" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class="control-label" for="nit">Nit </label>  
                                <input disabled style="margin-bottom: 2%;" id="nitU" name="nit" type="text" placeholder="Nit" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="emailP">Email </label>  
                                <input style="margin-bottom: 2%;" id="emailPU" name="emailP" type="text" placeholder="Email" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class="control-label" for="numCellPhoneP">Numero Celular</label>  
                                <input style="margin-bottom: 2%;" id="numCellPhonePU" name="numCellPhoneP" type="text" placeholder="Celular" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="numLandLineP">Numero Fijo</label>  
                                <input style="margin-bottom: 2%;" id="numLandLinePU" name="numLandLineP" type="text" placeholder="Fijo" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="addressP">Dirección </label>  
                                <input style="margin-bottom: 2%;" id="addressPU" name="addressP" type="text" placeholder="Dirección" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4" >
                                <label class=" control-label" for="representanteLegal">Representante Legal </label>  
                                <input style="margin-bottom: 2%;" id="representanteLegalU" name="representanteLegal" type="text" placeholder="Representante Legal" class="form-control input-md" required="">
                            </div>
                            <div class="col-md-4">
                                <label class="control-label" for="estadoU">Estado</label>  
                                <input readonly="readonly" id="estadoU" name="estadoU" type="text" placeholder="Estado" class="form-control input-md" required="">
                            </div>
                        </div>                                           
                    </fieldset>
                    <div class="modal-footer">
                        <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button id="btnUpdateP" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal Editar -->
<!-- Modal Detalles -->
<div class="modal fade" id="modalDetallesProveedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">                                    
                <h5 id="editSupplier" class="modal-title" id="exampleModalCenterTitle">Detalles Proveedor</h5>
            </div>
            <div class="modal-body">
                <table id="tableCrud" class="table col-md-2 table-condensed table-hover table-striped table-bordered text-center">
                    <thead>
                        <tr>
                            <th id="email">Correo</th>
                            <th id="cellPhone">Tel Celular</th>
                            <th id="telephono">Tel Fijo</th>
                            <th id="address">Dirección</th>
                            <th id="nameLegal">Nombre R.Legal</th>
                        </tr>
                    </thead>
                    <tbody id="bodyDV">


                    </tbody>

                </table>
            </div>
            <div class="modal-footer">
                <button id="c"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>                                    
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal Detalles -->
<!-- Modal Detalles -->
<div class="modal fade" id="modalresult" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">                                    
                <h5 id="editSupplier" class="modal-title" id="exampleModalCenterTitle">Detalles Proveedor</h5>
            </div>
            <div class="modal-body">
                <h4>registro exitoso</h4>
            </div>
            <div class="modal-footer">
                <button id="c"type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>                                    
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal Detalles -->
</section>


<script src="Administrador/Js/Proveedores.js"></script>
<script src="<%= request.getContextPath()%>/SI/vistas/Js/responsiveTable.js"></script>