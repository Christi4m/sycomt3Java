var listar = "";
var lang = "";
var xx;

var trans = function () {

    $(document).on('click', '#es', function (e) {
        e.preventDefault();
        lang = "es";

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
        if ($.fn.DataTable.isDataTable('#tableCrud')) {
            listar();
        }
        translate(lang);

    });
    $(document).on('click', '#en', function (e) {
        e.preventDefault();
        lang = "en";
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
        if ($.fn.DataTable.isDataTable('#tableCrud')) {
            listar();
        }

        translate(lang);
    });

}
trans();



var translate = function () {
    if (lang == "es") {

        $('#spanFoot').text('Todos los derechos reservados');
        $('#buttonLogout').text('Cerrar Sesión');
        $('#myPerfil').text('Mi Perfil');
        //traducción compras admin   
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
        //Traducción Sidebar Cliente
        $('#linkPqrsC').text("'PQR's Managment");
        $('#shopSpan').text("Shops");
        $('#linkCOmprasC').text("Shops Managment");
        //Traduccion home cliente
        $('#spanCompras').text("Shops");
        //Traduccion compras cliente
        $('#titleShopC').text("Shopping");
        $('#dateC').text("Date");
        $('#valorC').text("Value");
        $('#facturaC').text("Invoice");
        $('#estadoC').text("State");
        $('#accions').text("Actions");
        $('#dateC1').text("Date");
        $('#valorC1').text("Value");
        $('#facturaC1').text("Invoice");
        $('#estadoC1').text("State");
        $('#accions1').text("Actions");
        $('#details').text("Details");
        $('#detailsShopTitle').text("Purchase Detail");
        $('#detailNom').text("P name");
        $('#detailPP').text("Details P");
        $('#detailCant').text("Quantity");
        $('#detailPrice').text("Price");
        $('#titleShopProduct').text("Product");
        $('#buttonCloseModal').text("Accept");
        $('#titleShopFacC').text("Invoice");
        //Traduccion pqrs Cliente
        $('#btnAgregarPq').text("Add");
        $('#datePqC').text("Date");
        $('#typePqC').text("Type");
        $('#accions').text("Actions");
        $('#datePqC1').text("Date");
        $('#typePqC1').text("Type");
        $('#accions1').text("Actions");
        $('#alertPqrs').text("LunaTextilCom has provided this form to the service of our clients, as an alternative to facilitate the filing of PQRS that include matters such as: requests, complaints, claims and / or suggestions.");
        $('#selectOption').text("Select an option");
        $('#peticion').text("Petition");
        $('#queja').text("Complain");
        $('#reclamo').text("Claim");
        $('#sugerencia').text("Suggestion");
        $('#labelPqrsC').text("Description");
        $('#AdvertenPqrsC').text("To ensure a better process when generating a response to your PQR's, you can attach an image that supports your request in case you have the image, the image is not mandatory but guarantees more accuracy when responding to your PQR's");
        $('#labelEvidenPqC').text("Evidences");
        $('#autorizaPqC').text("Authorize LunaTextilCom to communicate with you via the email provided and respond to your request. In advance, make sure your email is active.");
        $('#botonCerrar').text("Close");
        $('#botonVaciar').text("Clean");
        $('#btncrearpqrs').text("Save");
        $('#buttonCloseModal').text("Accept");

        //Traduccion Sidebar Bodega
        $('#dispatch').text('Dispatch');
        $('#linkDespachos').text('Dispatch Magnament');
        $('#stock').text('Stock');
        $('#linkInventario').text('Stock Magnament');
        $('#shopping').text('Shopping');
        $('#linkCompras').text('Shopping Magnament');
        $('#deliveries').text('Deliveries');
        $('#linkEntregasAsignadas').text('Assigned');
        $('#linkEntregasPendientes').text('Slopes');
        $('#messenger').text('Messenger');
        $('#linkMensajeros').text('Messenger Management');
        //traducción compras admin   
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

        //Traduccion correos admin
        $('#emailTittle').text('Multiple Emails');
        $('#addressee').text('Address');
        $('#issue').text('Affair');
        $('#sd').text('select address');
        $('#client').text('Clients');
        $('#attached').text('Attached');
        $('#message').text('Message');
        $('#send').text('Send');

        //Traduccion empleados admin
        $('#principalEmployees').text('Employees');
        $('#botonGenerateReport').text('Add');
        $('#titleName').text('Name');
        $('#titleCharge').text('Charge');
        $('#titleDetails').text('State');
        $('#titleDetails1').text('Actions');
        $('#titleName2').text('Name');
        $('#titleCharge2').text('Charge');
        $('#titleDetails2').text('State');
        $('#titleDetails3').text('Actions');
        $('#typeEmployee').text('type of employee');
        $('#productDates').text('Employee Information');
        $('#botonAdd').text('Add');
        $('#selectOption').text('select an option');
        $('#idType').text('ID Type');
        $('#selectOption1').text('select an option');
        $('#identification').text('Identification');
        $('#name').text('Name');
        $('#secondName').text('Second Name');
        $('#lastName').text('Last Name');
        $('#secondLastName').text('Second Last Name');
        $('#cellPhone').text('Cell Phone');
        $('#landline').text('Landline');
        $('#addressP').text('Address');
        $('#productDates').text('Contract Data');
        $('#typeContract').text('Type Contract');
        $('#contractData').text('Contract Data');
        $('#so').text('Select option');
        $('#contractNum').text('Contract Number');
        $('#initialDate').text('Initial Date');
        $('#titleDetails3').text('Actions');
        $('#finalDate').text('Final Date');
        $('#estadoCivil').text('State Civil');
        $('#numberChildren').text('number of children');
        $('#pensiones1').text('Pensions');
        $('#layoffs').text('Layoffs');
        $('#compensation').text('Compensation');
        $('#botonCerrar').text('Close');
        $('#botonVaciar').text('Clean');
        $('#btncrearempleado').text('Save');
        $('#editSell').text('Employee Details');
        $('#titleIdentification0').text('type of contract');
        $('#titleIdentification1').text('Contract Number');
        $('#titleName1').text('Initial Date');
        $('#titleEmail').text('final Date');
        $('#titleCellphone').text('State Civil');
        $('#titleCharge1').text('Sons');
        $('#titleDetails12').text('Pensions');
        $('#titleDetails13').text('Layoffs');
        $('#titleDetails14').text('compensation box ');
        $('#botonCerrar1').text('Acept');
        $('#botonAdd1').text('to assign');
        $('#productDates1').text('Access Data');
        $('#user').text('User');
        $('#password').text('Password');
        $('#botonCerra').text('Close');
        $('#botonVacia').text('Clean');
        $('#btnCrearUserAccess').text('Save');

        //Traducción reportes admin
        $('#historicalSales2').text('Reports');

        //Traducción inventario admin
        $('#add1').text('Add');
        $('#name2').text('Name');
        $('#clothMaterial').text('Cloth Material');
        $('#cellarLocation').text('Cellar Location');
        $('#price').text('Price M²');
        $('#actions2').text('Actions');
        $('#name').text('Name');
        $('#clothMaterial1').text('Cloth Material');
        $('#cellarLocation1').text('Cellar Location');
        $('#price1').text('Price M²');
        $('#actions1').text('Actions');
        $('#botonAdd').text('Add');
        $('#nameTitle').text('Name');
        $('#Description').text('description');
        $('#ProductTelaje').text('Weaving');
        $('#ProveedorTelaje').text('Supplier');
        $('#location').text('Location');
        $('#price2').text('Price');
        $('#image').text('Img');
        $('#btncrearproducto').text('Save');
        $('#edit').text('Edit');
        $('#datesProduct').text('Dates Product');
        $('#name1').text('Name');
        $('#weaving').text('Weaving');
        $('#location1').text('Location');
        $('#price3').text('Price');
        $('#botonCerrar1').text('Cancel');
        $('#botonUpdateModal').text('Acept');
        $('#product').text('Product');
        $('#supplier').text('Supplier');
        $('#acept').text('Acept');


        //traducción proveedores admin
        $('#historicalSuppliers1').text('Suppliers');
        $('#addNew').text('Add');
        $('#businessName').text('Business Name');
        $('#state').text('State');
        $('#actions').text('Actions');
        $('#businessName1').text('Business Name');
        $('#state1').text('State');
        $('#actions3').text('Actions');
        $('#supplierRegistration').text('Supplier Registration');
        $('#supplierRegistration12').text('Supplier Registration');
        $('#socialReason').text('Social Reason');
        $('#num').text('Number');
        $('#num1').text('Number');
        $('#address1').text('Address');
        $('#legalRepresentative').text('Legal Representative');
        $('#botonVaciarP').text('Empty');
        $('#btnRegisterP').text('Save');
        $('#editSupplier1').text('Edit Supplier');
        $('#socialReason1').text('Social Reason');
        $('#cellPhone1').text('CellPhone');
        $('#landline1').text('Landline');
        $('#address2').text('Address');
        $('#legalRepresentative1').text('Legal Representative');
        $('#state2').text('State');
        $('#botonCerrar2').text('Close');
        $('#btnUpdateP').text('Save');
        $('#editSupplier').text('Supplier Details');
        $('#c').text('Acept');

        //Traducción ventas administrador
        $('#historicalSales2').text('Sales');
        $('#generateReport').text('Generate Report');
        $('#date').text('Date');
        $('#value').text('Value');
        $('#client').text('Client');
        $('#invoice').text('Invoice');
        $('#state').text('State');
        $('#actions').text('Actions');
        $('#date1').text('Date');
        $('#value1').text('Value');
        $('#client1').text('Client');
        $('#invoice1').text('Invoice');
        $('#state1').text('State');
        $('#actions1').text('Actions');
        $('#salesReport').text('Sales Report');
        $('#details').text('Details');
        $('#client2').text('Client');
        $('#typeId').text('Type Id');
        $('#document').text('Document');
        $('#name').text('Name');
        $('#correo').text('Email');
        $('#cellPhone').text('Cell Phone');
        $('#address').text('Address');
        $('#details1').text('Details');
        $('#detailSell').text('Detail Sell');
        $('#idProduct').text('Id Product');
        $('#nameP').text('Name Product');
        $('#detailP').text('Detail Product');
        $('#quantity').text('Quantity');
        $('#price').text('Price');
        $('#botonCerrarDV').text('Close');

        //Traducción compras bodega
        $('#historicalPurchases').text('Purchases');
        $('#generateReport').text('Add');
        $('#dateShop').text('Date');
        $('#name').text('Supplier');
        $('#obsShop').text('Observations');
        $('#totlaShop').text('Total');
        $('#stateShop').text('State');
        $('#accions').text('Actions');
        $('#dateShop1').text('Date');
        $('#name1').text('Supplier');
        $('#obsShop1').text('Observations');
        $('#totlaShop1').text('Total');
        $('#stateShop1').text('State');
        $('#accions1').text('Actions');
        $('#details').text('Details');
        $('#purchasesDetails').text('Purchases Details');
        $('#product').text('Product');
        $('#quantity').text('Quantity Mt²');
        $('#unitPrice').text('Unit Price');
        $('#botonCerrarDC').text('Acept');
        $('#sellReport').text('Order');

        //Traduccion Entregas asignadas bodega
        $('#deliveries').text('Deliveries');
        $('#code').text('Code');
        $('#date').text('date');
        $('#value').text('Value');
        $('#client').text('Client');
        $('#bill').text('Bill');
        $('#state').text('State');
        $('#actions').text('Actions');
        $('#code1').text('Code');
        $('#date1').text('date');
        $('#value1').text('Value');
        $('#client1').text('Client');
        $('#bill1').text('Bill');
        $('#state1').text('State');
        $('#actions1').text('Actions');
        $('#details').text('Details');
        $('#client2').text('Client');
        $('#typeId').text('Type Id');
        $('#document').text('Document');
        $('#name').text('Name');
        $('#email').text('E-mail');
        $('#cellPhone').text('Celphone');
        $('#address').text('Address');
        $('#details1').text('Details');
        $('#saleDetail').text('Sale Detail');
        $('#ip').text('Id Product');
        $('#np').text('Product Name');
        $('#quantity').text('Quantity');
        $('#unitValue').text('Unit Value');
        $('#details2').text('Details');
        $('#botonCerrarDV').text('Acept');

        //Traducción entregas pendiente bodega
        $('#delivieres').text('Delivieres');
        $('#date').text('Date');
        $('#value').text('Value');
        $('#client').text('Client');
        $('#invoice').text('Invoice');
        $('#actions').text('Actions');
        $('#date1').text('Date');
        $('#value1').text('Value');
        $('#client1').text('Client');
        $('#invoice1').text('Invoice');
        $('#actions1').text('Actions');

        //Traducción Inventario bodega
        $('#edit').text('Edit');
        $('#productDates1').text('Product Dates');
        $('#name2').text('Name');
        $('#weaving').text('weaving');
        $('#cloth').text('Cloth');
        $('#linen').text('Linen');
        $('#silk').text('Silk');
        $('#uniform').text('Uniform');
        $('#location1').text('Location');
        $('#price3').text('Price');
        $('#botonCerra').text('Cancel');
        $('#product').text('Product');
        $('#supplier').text('Supplier');
        $('#acept').text('Acept');
        $('#add1').text('Add');

        //Traducción mensajero Bodega// igual no se tradujo por no notar cambios
        $('#messengers').text('Messengers');





    }
}