var lang = "";
var trans = function () {

    $(document).on('click', '#es', function (e) {
        e.preventDefault();
        lang = "es";
        translate(lang);
        idiomaEsp = {
            "decimal": "",
            "emptyTable": "No hay datos",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 registros",
            "infoFiltered": "(Filtro de _MAX_ total registros)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron coincidencias",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": Activar orden de columna ascendente",
                "sortDescending": ": Activar orden de columna desendente"
            }
        }


    });
    $(document).on('click', '#en', function (e) {
        e.preventDefault();
        lang = "en";
        translate(lang);
        idiomaEsp = {
            "sEmptyTable": "No data available in table",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sInfoEmpty": "Showing 0 to 0 of 0 entries",
            "sInfoFiltered": "(filtered from _MAX_ total entries)",
            "sInfoPostFix": "",
            "sInfoThousands": ",",
            "sLengthMenu": "Show _MENU_ entries",
            "sLoadingRecords": "Loading...",
            "sProcessing": "Processing...",
            "sSearch": "Search:",
            "sZeroRecords": "No matching records found",
            "oPaginate": {
                "sFirst": "First",
                "sLast": "Last",
                "sNext": "Next",
                "sPrevious": "Previous"
            },
            "oAria": {
                "sSortAscending": ": activate to sort column ascending",
                "sSortDescending": ": activate to sort column descending"
            }
        }

    });

}
trans();



var translate = function () {
    if (lang == "es") {

        $('#spanFoot').text('Todos los derechos reservados');
        $('#buttonLogout').text('Cerrar Sesión');
        $('#myPerfil').text('Mi Perfil');
          //tradyccion compras admin   
        $('#dateShop').text('Fecha');
        $('#previeder').text('Proveedor');
        $('#obsShop').text('Observaciones');
        $('#totlaShop').text('Precio Total');
        $('#stateShop').text('Estado');
        $('#accions').text('Acciones');
        $('#dateShop1').text('Fecha');
        $('#previeder1').text('Proveedor');
        $('#obsShop1').text('Observaciones');
        $('#totlaShop1').text('Precio Total');
        $('#stateShop1').text('Estado');
        $('#accions1').text('Acciones');
        $('#Purchases').text('Compras');
        $('#titleaddPurchasesbtn').text('Agregar');
        
        $('#dateShop').text('Fecha');
        $('#previeder').text('Proveedor');
        $('#obsShop').text('Observaciones');
        $('#totlaShop').text('Precio Total');
        $('#stateShop').text('Estado');
        $('#accions').text('Acciones');

        $('#linkProveedoresA').text('Gestión Proveedores');
        $('#linkVentasA').text('Gestión Ventas');
        $('#linkComprasA').text('Gestión Compras');
        $('#linkInventarioA').text('Gestión Inventario');
        $('#linkEmpleadosA').text('Gestión Empleados');
        $('#linkReportesA').text('Gestión Reportes');
        $('#linkCorreosA').text('Correos Multiples');

        $('#idInicio').text('Inicio');
        $('#suppliers').text('Proveedor');
        $('#sales').text('Ventas');
        $('#titlePurchaseOrders').text('Compras');
        $('#inventory').text('Inventario');
        $('#employees').text('Empleados');
        $('#reports').text('Reportes');
        $('#emails').text('Correos');

        $('.tajetaProveedoresA').text('Proveedores');
        $('.tajetaVentasA').text('Ventas');
        $('.tajetaComprasA').text('Compras');
        $('.tajetaInventarioA').text('Inventario');
        $('.tajetaEmpleadosA').text('Empleados');
        $('.tajetaReportesA').text('Reportes');
        $('.tajetaCorreosA').text('Correos');

    } else if (lang == "en") {
        $('#spanFoot').text('All rights reserved');
        
        $('#buttonLogout').text('Log Out');
        $('#myPerfil').text('My Profile');
        //tradyccion compras admin   
        $('#dateShop').text('Date');
        $('#previeder').text('Previeder');
        $('#obsShop').text('Observations');
        $('#totlaShop').text('Price Total');
        $('#stateShop').text('State');
        $('#accions').text('Accions');
        $('#dateShop1').text('Date');
        $('#previeder1').text('Previeder');
        $('#obsShop1').text('Observations');
        $('#totlaShop1').text('Price Total');
        $('#stateShop1').text('State');
        $('#accions1').text('Accions');
        $('#Purchases').text('Purchases');
        $('#titleaddPurchasesbtn').text('Add');


        //traduccion sidebar admin
        $('#linkProveedoresA').text('Providers Management');
        $('#linkVentasA').text('Sales Management');
        $('#linkComprasA').text('Purchasing Management');
        $('#linkInventarioA').text('Stock Managment');
        $('#linkEmpleadosA').text('Staff Management');
        $('#linkReportesA').text('AccReport Managementions');
        $('#linkCorreosA').text('Email management');
        $('#idInicio').text('Home');
        $('#suppliers').text('Provider');
        $('#sales').text('Sales');
        $('#titlePurchaseOrders').text('Purchase');
        $('#inventory').text('Stock');
        $('#employees').text('Staff');
        $('#reports').text('Reports');
        $('#emails').text('Emails');
        //Traduccion tarjetas admin        
        $('.tajetaProveedoresA').text('Provider');
        $('.tajetaVentasA').text('Sales');
        $('.tajetaComprasA').text('Purchase');
        $('.tajetaInventarioA').text('Stock');
        $('.tajetaEmpleadosA').text('Staff');
        $('.tajetaReportesA').text('Reports');
        $('.tajetaCorreosA').text('Emails');

        //Traduccion corrreos admin
        $('#emailTittle').text('Multiple Emails');
        $('#addressee').text('Addressee');
        $('#issue').text('Affair');
        $('#sd').text('select addressee');
        $('#client').text('Clients');
        $('#employees').text('Employees');
        
        


    }
}