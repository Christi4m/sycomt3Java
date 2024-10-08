<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  ">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >
                <h2>PQR's</h2>
                <button class="btn btnAgregar"data-toggle="modal" data-target="#modalPqrs">
                    <span id="btnAgregarPq">Agregar</span>
                    <span class="fa fa-plus"></span>
                </button>
                <table id="tableCrud" class="table table-striped table-bordered dt-responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th id="datePqC">Fecha</th>
                            <th>CUN</th>
                            <th id="typePqC">Tipo</th>
                            <th id="accions">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th id="datePqC1">Fecha</th>
                            <th>CUN</th>
                            <th id="typePqC1">Tipo</th>
                            <th id="accions1">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <!-- modal ingresar nueva pqrs -->

    <div style="color: black;"class="modal fade" id="modalPqrs" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header">
                    <h5 class="modal-title" id="motalTitlePqrs">PQR's</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="formPqrs"class="form-horizontal">
                        <fieldset>
                            <h4 id="alertPqrs" style="font-size: 16px; text-align: justify;"> LunaTextilCom ha dispuesto este formulario al servicio de nuestros clientes,
                                como una alternativa para facilitar la radicaci�n de PQRS que comprenden 
                                asuntos como: peticiones, quejas, reclamos y/o  sugerencias.  </h4>
                            <!-- Select Basic -->
                            <div class="form-group">
                                <label id="labelPqrsC"class="col-md-4 control-label" for="typePqrs">Tipo de PQR's *</label>
                                <div class="col-md-6">
                                    <select id="typePqrs" name="typePqrs" class="form-control">
                                        <option id="selectOption" value="" selected>Seleccione una opci�n</option>
                                        <option id="peticion" value="Petici�n">Petici�n</option>
                                        <option id="queja" value="Queja">Queja</option>
                                        <option id="reclamo" value="Reclamo">Reclamo</option>
                                        <option id="sugerencia" value="Sugerencia">Sugerencia</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Textarea -->
                            <div class="form-group">
                                <label id="labelDesPqC"class="col-md-4 control-label" for="descriptionPqrs">Descripci�n</label>
                                <div class="col-md-6">                     
                                    <textarea placeholder="Ingrese la descripci�n de su PQR's detallando punto por punto los detalles de su solicitud."rows="4" class="form-control" id="descriptionPqrs" name="descriptionPqrs"></textarea>
                                </div>
                            </div>
                             <h4 id="AdvertenPqrsC"style="font-size: 12px; text-align: justify;">
                             Para asegurar un mejor proceso a la hora de generar una respuesta a su PQR's puede 
                             adjuntar una imagen que soporte su solicitud en caso de tal de que cuente con la imagen, la
                             imagen no es obligatoria pero garantiza mas exactitud a la hora de dar respuesta a su PQR's
                             </h4>
                            <!-- File input-->
                            <div class="form-group">
                                <label id="labelEvidenPqC"class="col-md-4 control-label" for="filePqrs">Evidencias</label>  
                                <div class="col-md-6">
                                    <input id="filePqrs" name="filePqrs" type="file" placeholder="Adjunte archivos de evidencia" class="form-control input-md" >

                                </div>
                            </div>
                            <!-- Multiple Radios -->
                            <div class="form-group">
                                <div class="col-md-12">
                                    <div style="text-align: justify;"class="radio">
                                        <label for="radios-0">
                                            <input type="radio" name="radios" id="radios-0" value="si" >
                                            <span id="autorizaPqC">Autoriza a LunaTextilCom para comunicarse con usted a trav�s del correo 
                                            electr�nico suministrado y responder a su solicitud. De antemano aseg�rese 
                                            de que su correo electr�nico se encuentre activo.</span>
                                        </label>
                                    </div>

                                </div>
                                
                            </div>


                        </fieldset>
                        <div class="modal-footer">
                            <div class="col-sm-12" style="margin-top: 30px;">
                                <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button id="botonVaciar" type="reset" name="botonVaciar" class="colorbtn btn btn-primary">Limpiar</button>
                                <button id="btncrearpqrs" type="submit" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </div>
     <!-- Modal detalle pqrs -->

    <div  class="modal fade" id="modalDetallePqrs" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content modal-lg">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="">
                        <span class="fa fa-close close1" aria-hidden="true"></span>
                    </button>
                    <h5 class="modal-title" id="exampleModalCenterTitle">PQR's</h5>
                </div>
                <div  class="modal-body">
                    

                    
                    <div class="row">
                        <div id="detallesP" style="padding: 5%;width: 100%; height: 20%;  font-size: 10px;">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="buttonCloseModal "type="button" style="color: white;"class="btn btn-secondary colorbtn" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Fin del modal detalle pqrs -->
</section>       
<script src="Cliente/Js/pqrs.js"></script>
