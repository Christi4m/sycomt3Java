<section class="wrapper">
        <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  cont">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " >
                <h2 id="principalEmployees">Empleados</h2>
                <button id="botonGenerateReport" class="btn btnAgregar"data-toggle="modal" data-target="#ModalCrearEmpleado">
                    Agregar
                    <span class="fa fa-plus"></span>
                </button>
                <table id="tableCrud" class="table table-striped table-bordered dt-responsive nowrap" style="width:100% ">
                    <thead>
                        <tr>
                            <th id="titleIdentification">Id Sistema</th>
                            <th id="titleName">Nombre</th>                            
                            <th id="titleCharge">Cargo</th>
                            <th id="titleDetails">Estado</th>
                            <th id="titleDetails">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th id="titleIdentification">Id Sistema</th>
                            <th id="titleName2">Nombre</th>
                            <th id="titleCharge2">Cargo</th>
                            <th id="titleDetails2">Estado</th>
                            <th id="titleDetails2">Acciones</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- Modal para Agregar Empleado -->
<div class="modal fade" id="ModalCrearEmpleado" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-close close1"aria-hidden="true"></span>
                </button>
                <h5 id = "botonAdd" class = "modal-title" id = "exampleModalLongTitle"> Agregar </h5>
            </div>
            <div class="modal-body">
                <form  method="post" action="../../../methodClient?accion=crearEmpleado" style="margin-top: 30px;" name="frmCrearEmpleado" id="frmCrearEmpleado" enctype="multipart/form-data"  class="form-horizontal col-sm-12 text-center">
                    <div class="form-group text-center">
                        <h4 id = "productDates" class = "tituloDP"> Datos Del Empleado </h4>
                        <div class="col-sm-6 inputForm">
                            <label class=" col-md-9 text-left" for="typeUser">Tipo Empleado</label>
                            <select id="typeUser" name="typeUser" class="form-control" >
                                <option value="0">------------------------</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Bodega-Jefe">Bodega-Jefe</option>
                                <option value="Mensajero">Mensajero</option>
                                <option value="Vendedor">Vendedor</option>
                            </select>
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="tipoIdentificacionCliente">Tipo Identificación *</label>
                            <select id="tipoIdentificacionEmpleado" name="tipoIdentificacionEmpleado" class="form-control ">
                                <option value="0">------------------------</option>
                                <option value="C.C">C.C (Cédula de Ciudadanía)</option>
                                <option value="C.E">C.E (Cédula de Extranjería)</option>
                                <option value="Nit">NIT</option>
                            </select>
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="identificacionTercero">Identificación *</label>  
                            <input id="identificacionTercero" name="identificacionTercero" type="text" placeholder="Numero de Identificación " class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="firstName">Nombre *</label>    
                            <input id="firstName" name="firstName" type="text" placeholder="Primer Nombre" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="secondName">Nombre</label>
                            <input id="secondName" name="secondName" type="text" placeholder="Segundo Nombre" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="firstLastName">Apellido *</label>  
                            <input id="firstLastName" name="firstLastName" type="text" placeholder="Primer Apellido" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="secondLastName">Apellido *</label> 
                            <input id="secondLastName" name="secondLastName" type="text" placeholder="Segundo Apellido" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="email">E-Mail *</label> 
                            <input id="email" name="email" type="text" placeholder="Correo Electrónico" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="numCellPhone">Telefono Celular *</label>  
                            <input id="numCellPhone" name="numCellPhone" type="text" placeholder="Numero de Celular" class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="numLandLine">Telefono Fijo *</label>  
                            <input id="numLandLine" name="numLandLine" type="text" placeholder="Numero de Teléfono Fijo " class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6 inputForm">
                            <label class="col-md-9 text-left" for="address">Dirección *</label>  
                            <input id="address" name="address" type="text" placeholder="Dirección" class="form-control input-md" required="">
                        </div>

                    </div>
                    <div class="form-group text-center" >
                        <h4 id = "productDates" class = "tituloDP"> Datos Del Contrato </h4>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="tipoContrato">Tipo Contrato </label>
                            <select id="tipoContrato" name="tipoContrato" class="form-control">
                                <option value="Termino Fijo">Termino Fijo</option>
                                <option value="Termino Indefinido">Termino Indefinido</option>
                                <option value="Obra o Labor">Obra o Labor</option>
                            </select>
                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="numContrato">Numero De Contrato *</label>  
                            <input id="numContrato" name="numContrato" type="text" placeholder="Numero Contrato" class="form-control input-md" required="">


                        </div>
                        <div class="col-md-6 c">
                            <label class=" col-md-9 text-left" for="fechaInicioContrato">Fecha Inicial *</label>
                            <input id="fechaInicioContrato" name="fechaInicioContrato" type="date" placeholder="Fecha Inicial " class="form-control input-md" required="">

                        </div>
                        <div class="col-md-6 inputForm">
                            <label class="col-md-9 text-left" for="FechaFinContrato">Fecha Final *</label>   
                            <input id="FechaFinContrato" name="FechaFinContrato" type="date" placeholder="Fecha Final " class="form-control input-md" required="">

                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="estadoCivil">Estado Civil *</label>
                            <select id="estadoCivil" name="estadoCivil" class="form-control" >
                                <option value="0">------------------------</option>
                                <option value="Casado">Casado</option>
                                <option value="Soltero">Soltero</option>
                                <option value="Union Libre">Union Libre</option>
                            </select>
                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="numHijos">Numero De Hijos </label>
                            <select id="numHijos" name="numHijos" class="form-control" >
                                <option value="0">------------------------</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="2">3</option>
                                <option value="2">4</option>
                                <option value="2">5</option>
                                <option value="Mas de 5">Mas de 5</option>
                            </select>
                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="eps">Eps *</label> 
                            <input id="eps" name="eps" type="text" placeholder="Eps " class="form-control input-md" required="">

                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="pensiones">Pensiones *</label> 
                            <input id="pensiones" name="pensiones" type="text" placeholder="Entidad Prestadora de Pensiones " class="form-control input-md" required="">

                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="cesantias">censantias *</label> 
                            <input id="cesantias" name="cesantias" type="text" placeholder="Entidad prestadora de Censantias" class="form-control input-md" required="">

                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="arl">ARL *</label>
                            <input id="arl" name="arl" type="text" placeholder="ARL" class="form-control input-md" required="">

                        </div>
                        <div class="col-md-6 inputForm">
                            <label class=" col-md-9 text-left" for="cajaCompesscion">Compensación *</label> 
                            <input id="cajaCompensacion" name="cajaCompensacion" type="text" placeholder="Caja de Compensación" class="form-control input-md" required="">

                        </div>
                    </div>
                    <div class="col-sm-12" style="margin-top: 30px;">
                        <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button id="botonVaciar" type="reset" name="botonVaciar" class="colorbtn btn btn-primary">Limpiar</button>
                        <button id="btncrearempleado" type="submit" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>
<!-- Fin del modal Ingresar Nuevo -->
<!-- Modal Detalles -->
<div  class="modal fade" id="modalDetalles" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div style="width: 1300px;"class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div style="width: 1300px;"class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="">
                    <span class="fa fa-close close1" aria-hidden="true"></span>
                </button>
                <h5 id="editSell" class="modal-title" id="exampleModalCenterTitle">Detalles Empleado</h5>
            </div>
            <div class="modal-body">
                <table id="example" class="table col-md-2 table-condensed  table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th id="titleIdentification">Tipo Contrato</th>
                            <th id="titleIdentification">Numero Contrato</th>
                            <th id="titleName">Fecha Inicio</th>
                            <th id="titleEmail">Fecha Fin</th>
                            <th id="titleCellphone">Estado Civil</th>
                            <th id="titleCharge">Hijos</th>
                            <th id="titleDetails">Eps</th>
                            <th id="titleDetails">Pensiones</th>
                            <th id="titleDetails">Cesantias</th>
                            <th id="titleDetails">Arl</th>
                            <th id="titleDetails">Caja Compensación</th>
                        </tr>
                    </thead>
                    <tbody id="bodyDV">

                    </tbody>

                </table>
            </div>
            <div class="modal-footer">

                <button id="botonCerrar1"type="button" class="colorbtn btn btn-primary" data-dismiss="modal">Aceptar</button>

            </div>
        </div>
    </div>
</div>
<!-- Fin del modal detalles -->
<!-- Modal para Agregar Acceso al sistema para un empleado -->
<div class="modal fade" id="ModalUserAccess" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-lg">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="fa fa-close close1"aria-hidden="true"></span>
                </button>
                <h5 id = "botonAdd" class = "modal-title" id = "exampleModalLongTitle"> Asignar </h5>
            </div>
            <div class="modal-body">
                <form method="post" action="../../../methodClient?accion=insertUserAccesEmpleado" style="margin-top: 30px;" name="frmUserAccesEmpleado" id="frmUserAccesEmpleado" enctype="multipart/form-data"  class="form-horizontal col-sm-12 text-center">
                    <div class="form-group text-center">
                        <h4 id = "productDates" class = "tituloDP"> Datos de Acceso </h4>

                        <div class="col-sm-6">
                            <label class="col-md-9 text-left" for="username">Usuario *</label>  
                            <input id="userAccess" name="userAccess" type="text" placeholder="Usuario de Acceso " class="form-control input-md" required="">
                        </div>
                        <div class="col-sm-6">
                            <label class="col-md-9 text-left" for="password">Contraseña *</label>  
                            <input  id="passwordAccess" name="passwordAccess" type="text" placeholder="Contraseña de Acceso" class="form-control input-md" required="">

                        </div>

                        <div class="col-sm-12" style="margin-top: 30px;">
                            <button id="botonCerrar"type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button id="botonVaciar" type="reset" name="botonVaciar" class="colorbtn btn btn-primary">Limpiar</button>
                            <button id="btnCrearUserAccess" type="submit" name="botonEnviar" class="colorbtn btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>
<!-- Fin del modal para agregar acceso al sistema para un empleado -->
</section>
<script src="Administrador/Js/Empleados.js"></script>
<script src="<%= request.getContextPath()%>/SI/vistas/Js/responsiveTable.js"></script>