<section class="wrapper">
    <div class="row">
        <div class="col-lg-12 col-xl-12 col-md-12  ">
            <div id="tabla1" class="div2 col-md-12 col-sm-12 col-xl-12 col-lg-12 " style="Background:white" >
                <h2 id="emailTittle">Correos Multiples</h2>
                <form id="frmSendEmail"style="color: black; margin-top: 80px;" enctype="multipart/form-data"class="align-items-center form-horizontal">
                    <fieldset>           

                        <div class="form-group">
                            <label id="addressee" class="col-md-4 control-label" for="Destinatarios">Destinatarios</label>
                            <div class="col-md-6">
                                <select id="Destinatarios" name="Destinatarios" class="form-control">
                                    <option id="sd" value="">Seleccione un destinatario</option>
                                    <option id="client" value="Clientes">Clientes</option>
                                    <option id="employees" value="Empleados">Empleados</option>
                                    <option id="suppliers" value="Proveedores">Proveedores</option>
                                </select>
                            </div>
                        </div>


                        <!-- Text input-->
                        <div class="form-group">
                            <label id="issue" class="col-md-4 control-label" for="Asunto">Asunto</label>  
                            <div class="col-md-6">
                                <input id="Asunto" name="Asunto" type="text" placeholder="Ingrese el asunto" class="form-control input-md" required="">

                            </div>
                        </div>

                        <!-- Text input-->
                        <div class="form-group">
                            <label id="attached" class="col-md-4 control-label" for="Adjunto">Adjunto</label>  
                            <div class="col-md-6">
                                <input id="Adjunto" name="Adjunto" type="file" placeholder="Seleccione un archivo" class="form-control input-md" required="">

                            </div>
                        </div>

                        <!-- Textarea -->
                        <div class="form-group">
                            <label id="message" class="col-md-4 control-label" for="Mensaje">Mensaje</label>
                            <div class="col-md-6">                     
                                <textarea Rows="6" class="form-control" id="Mensaje" name="Mensaje"></textarea>
                            </div>
                        </div>
                        <div class="form-group justify-content-center "style="padding-left: 35%;">
                            <button id="send" style="margin-left: auto;margin-right: auto;"id="sendCorreo" class="btn btnAgregar">
                                Enviar
                                <span class="fas fa-send"></span>
                            </button>
                        </div>

                    </fieldset>

                </form>
            </div>

        </div>

    </div>
</div>

</section>
<script src="Administrador/Js/Correos.js"></script>