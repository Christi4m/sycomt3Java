//$(document).ready(function () {
//    $(window).resize(function () {
//        cambio();
//    });
//});

function cambio() {
    if ($(window).width() <= 768) {
        close();
    }
}
function close() {
    if ($('#sidebar > ul').is(":visible") === true) {
        $('#main-content').css({
            'margin-left': '0px'
        });
        $('#sidebar').css({
            'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
    } else {
        $('#main-content').css({
            'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
            'margin-left': '0'
        });
        $("#container").removeClass("sidebar-closed");
    }
}
$(document).ready(function () {
    ready();
});
var ready = function () {
    //main del usuario jefe bodega
    //funciones el menu sidebar

    $(document).on('click', '#linkDespachos', function (e) {
        e.preventDefault();
        $('#main-content').load("Bodega/VentasDespachar.jsp");
        cambio();
    });
    $(document).on('click', '#linkInventario', function (e) {
        e.preventDefault();
        $('#main-content').load("Bodega/Inventario.jsp");
        cambio();
    });
    $(document).on('click', '#linkCompras', function (e) {
        e.preventDefault();
        $('#main-content').load("Bodega/Compras.jsp");
        cambio();
    });
    $(document).on('click', '#linkEntregasAsignadas', function (e) {
        e.preventDefault();
        $('#main-content').load("Bodega/EntregasAsignadas.jsp");
        cambio();
    });
    $(document).on('click', '#linkEntregasPendientes', function (e) {
        e.preventDefault();
        $('#main-content').load("Bodega/EntregasPendientes.jsp");
        cambio();
    });
    $(document).on('click', '#linkMensajeros', function (e) {
        e.preventDefault();
        $('#main-content').load("Bodega/Mensajeros.jsp");
        cambio();
    });
    //funciones del menu tarjetas
    //activar sub-menu despachos
    $(document).on('click', '#tarjetaDespachos', function (e) {
        e.preventDefault();
        $("#linkDespachosOpen").click();
        $("#linkDespachos").click();
        cambio();
    });
    //activar sub-menu Inventario
    $(document).on('click', '#tarjetaInventario', function (e) {
        e.preventDefault();
        $("#linkInventarioOpen").click();
        $("#linkInventario").click();
        cambio();
    });
    //activar sub-menu compras
    $(document).on('click', '#tarjetaCompras', function (e) {
        e.preventDefault();
        $("#linkComprasOpen").click();
        $("#linkCompras").click();
        cambio();
    });
    //activar sub-menu compras
    $(document).on('click', '#tarjetaEntregasAsignadas', function (e) {
        e.preventDefault();
        $("#linkEntregasOpen").click();
        $("#linkEntregasAsignadas").click();
        cambio();
    });
    $(document).on('click', '#tarjetaEntregasPedientes', function (e) {
        e.preventDefault();
        $("#linkEntregasOpen").click();
        $("#linkEntregasPendientes").click();
        cambio();
    });
    $(document).on('click', '#tarjetaMensajeros', function (e) {
        e.preventDefault();
        $("#linkMensajerosOpen").click();
        $("#linkMensajeros").click();
        cambio();
    });
    /////////////////////////////////////////////////////////////////////////////////
    //main del usuario administrador
    /////////////////////////////////////////////////////////////////////////////////
    $(document).on('click', '#linkProveedoresA', function (e) {
        e.preventDefault();
        $('#main-content').load("Administrador/Proveedores.jsp");
        cambio();
    
    });
    $(document).on('click', '#linkVentasA', function (e) {
        e.preventDefault();
        $('#main-content').load("Administrador/Ventas.jsp");
        cambio();
    });
    $(document).on('click', '#linkComprasA', function (e) {
        e.preventDefault();
        $('#main-content').load("Administrador/Compras.jsp");
        cambio();
    });
    $(document).on('click', '#linkInventarioA', function (e) {
        e.preventDefault();
        $('#main-content').load("Administrador/Inventario.jsp");
        cambio();
    });
    $(document).on('click', '#linkEmpleadosA', function (e) {
        e.preventDefault();
        $('#main-content').load("Administrador/Empleados.jsp");
        cambio();
    });
    $(document).on('click', '#linkReportesA', function (e) {
        e.preventDefault();
        $('#main-content').load("Administrador/Reportes.jsp");
        cambio();
    });
    //tarjetas del home Administrador


    $(document).on('click', '#tajetaProveedoresA', function (e) {
        e.preventDefault();
        $("#linkProveedoresOpenA").click();
        $("#linkProveedoresA").click();
        cambio();
    });
    $(document).on('click', '#tajetaVentasA', function (e) {
        e.preventDefault();
        $("#linkVentasOpenA").click();
        $("#linkVentasA").click();
        cambio();
    });
    $(document).on('click', '#tajetaComprasA', function (e) {
        e.preventDefault();
        $("#linkComprasOpenA").click();
        $("#linkComprasA").click();
        cambio();
    });
    $(document).on('click', '#tajetaInventarioA', function (e) {
        e.preventDefault();
        $("#linkInventarioOpenA").click();
        $("#linkInventarioA").click();
        cambio();
    });
    $(document).on('click', '#tajetaEmpleadosA', function (e) {
        e.preventDefault();
        $("#linkEmpleadosOpenA").click();
        $("#linkEmpleadosA").click();
        cambio();
    });
    $(document).on('click', '#tajetaReportesA', function (e) {
        e.preventDefault();
        $("#linkReportesOpenA").click();
        $("#linkReportesA").click();
        cambio();
    });
    
    
    ////////////////////////////////////////////////////////////////////
    //navegacion vistas Mensajero
    //navegacion sidebar
     $(document).on('click', '#linkEntregasPendientesM', function (e) {
        e.preventDefault();
        $('#main-content').load("Mensajero/EntregasPendientes.jsp");
        cambio();    
    });
     $(document).on('click', '#linkEntregasRealizadasM', function (e) {
        e.preventDefault();
        $('#main-content').load("Mensajero/EntregasRealizadas.jsp");
        cambio();    
    });
    //navegacion home
    $(document).on('click', '#tarjetaEntregasPendientesM', function (e) {
        e.preventDefault();
        $("#linkEntregasOpen").click();
        $("#linkEntregasPendientesM").click();
        cambio();
    });
    $(document).on('click', '#tarjetaEntregasRealizadasM', function (e) {
        e.preventDefault();
        $("#linkEntregasOpen").click();
        $("#linkEntregasRealizadasM").click();
        cambio();
    });
}

