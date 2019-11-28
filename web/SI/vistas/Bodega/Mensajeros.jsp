<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >
                <h2 id="messengers">Mensajeros</h2>
                <table id="example" class="table   table-hover table-striped table-bordered " style="width: 100%; color: black">
                    <thead>
                        <tr>
                            <th id="titleIdentification">#</th>
                            <th id="titleIdentification3">Identificación</th>
                            <th id="titleName">Nombre</th>
                            <th id="titleEmail">Correo</th>
                            <th id="titleCellphone">Celular</th>                                            
                            <th id="titleDetails">Estado</th>
                            <th id="actions">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th id="titleIdentification">#</th>
                            <th id="identification">Identificación</th>
                            <th id="titleName2">Nombre</th>
                            <th id="titleEmail2">Correo</th>
                            <th id="titleCellphone2">Celular</th>                                            
                            <th id="titleDetails2">Estado</th>
                            <th id="actions1">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    <!-- Button trigger modal -->
    
    <!-- Modal -->
    <div class="modal fade" id="modalAsignarZona" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Asignación de zona</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="frmAsignarZona" class="form-horizontal">
                        <fieldset>

                            <!-- Form Name -->
                            
                            <!-- Select Basic -->
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="zonaEntrega">Zona</label>
                                <div class="col-md-6">
                                    <select id="zonaEntrega" name="zonaEntrega" class="form-control">
                                        <option value="">Seleccione una opción</option>
                                        <option value="zona1">Zona 1</option>
                                        <option value="zona2">Zona 2</option>
                                        <option value="zona3">Zona 3</option>
                                        <option value="zona4">Zona 4</option>
                                        <option value="zona5">Zona 5</option>
                                    </select>
                                </div>
                            </div>

                        </fieldset>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button id="btnAsignarZonaEntrega" type="submit" class="btn btn-primary btnAgregar">Guardar</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </div>
</section>

<script src="Bodega/Js/Mensajeros.js"></script>



