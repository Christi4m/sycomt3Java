//seccion de variables globales
var typeTercero = "";
var firstName = "";
var idUser = "";
var typeId = "";
var numId = "";
var address = "";
var nameUser = "";
var docDefinition = "";
var now = new Date();
var jsDate = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
var table = [];
var value = [];
var numFacD
var totalD
var idVentaD
var ivaD
var subD
var idClienteP
var typeIdF
var numIdF
var nameUserF
var addressF
var idVenta
// funcion para adjuntar imagenes a documentos pdf en base64
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
}

//Variable para la cracion de la imagen en base 64 o data uri, necesario para mostrar la imagen en el reporte
var newImg = new Image();
newImg.src = '../img/LogoSycomt3FondoNegro.png';

var myGlyph = new Image();
myGlyph.src = '../img/LogoSycomt3FondoBlanco.png';

//funcion que cargar otras funciones al iniciar la pagina
$(document).ready(function () {
    var data = "";
    $.ajax({
        url: "../../loginUser?action=dateJson",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {
                typeTercero = field.typeTercero;
                firstName = field.firstName;
                idUser = field.idUser;
                typeId = field.typeId;
                numId = field.numId;
                nameUser = field.nameUser;
                address = field.address;
            });

        }
    });

});
factura = function () {

    //funcion  para descargar la factura en formato pdf
    $(document).on('click', '#buttonDownload', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        listDatesInvoice(idVenta, 2);
    });
    //funcion para el despliegue de la factura en formato pdf
    $(document).on('click', 'a.idVenta', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var numFactura
        idVenta = $(this).attr('id');
        
        listDatesInvoice(idVenta, 1);

    });

}
listDatesInvoice = function(idVenta, opc){
     
        var data = "";
        $.ajax({
            url: "../../processVenta?action=listVentas",
            type: "post",
            data: data,
            dataSrc: "datos",
            dataType: "json",
            success: function (data) {
                $.each(data.datos, function (i, field) {
                    if (field.Codigo == idVenta) {
                        numFactura = field.FacturaP;
                        total = field.Valor;
                        iva = field.iva;
                        subtotal = field.subtotal;
                        idClienteP = field.idClienteP;
                    }
                });
                var date = "";
                
                $.ajax({
                    url: "../../methodClient?accion=listClientId&idCliente=" + idClienteP + "",
                    type: "post",
                    data: date,
                    dataSrc: "datos",
                    dataType: "json",
                    success: function (data) {
                        $.each(data.datos, function (i, field) {
                            typeIdF = field.typeId;
                            numIdF = field.numId;
                            nameUserF = field.name;
                            addressF = field.address;
                        });
                        numFacD = numFactura;
                        totalD = total;
                        idVentaD = idVenta;
                        ivaD = iva;
                        subD = subtotal;
                
                if(opc == 1){
                    campos(numFactura, total, idVenta, iva, subtotal, 1, nameUserF, addressF);
                }else if(opc == 2){
                    campos(numFactura, total, idVenta, iva, subtotal, 2, nameUserF, addressF);
                }

                

                    }
                });


            }
        });

}

//creacion de factura
campos = function (numFactura, total, idVenta, iva, subtotal, opcion, nameUserF, addressF) {



    var dato = {idVenta: idVenta}

    $.ajax({
        url: "../../processVenta?action=detalleVentas",
        type: "post",
        data: dato,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            var body2 = [];
            var aux = 1;
            value = [];
            value.push([
                {
                    text: 'DESCRIPCIÓN',
                    style: 'itemsHeader'
                },

                {
                    text: 'CANT',
                    style: ['itemsHeader', 'center']
                },
                {
                    text: 'PRECIO UNITARIO',
                    style: ['itemsHeader', 'center']
                },
                {
                    text: 'MONTO',
                    style: ['itemsHeader', 'center']
                }
            ],
                    );
            $.each(data.datos, function (i, field) {
                value.push([{text: field.nombreProducto, style: 'itemTitle'}, {text: '' + field.cantidad + '', style: 'itemNumber'},
                    {text: '' + field.precioUnitario + '', style: 'itemNumber'}, {text: field.precio, style: 'itemNumber'}]);
                
            });





            table = {headerRows: 1,
                widths: ['*', 40, 'auto', 'auto'],

                body:
                        // Table Header

                        // Items

                        value

                        // END Items

            }


            

            var docDefinition = {

                info: {
                    title: 'Factura: ' + numFactura,
                    author: 'Sycomt3',

                },

                footer: function (currentPage, pageCount) {

                    return {
                        columns: [
                            {text: ['Creado el ', {text: jsDate.toString()}], style: 'documentFooterLeft'},

                            {text: ['Pagina ', {text: pageCount.toString()}, ' de ', {text: currentPage.toString()}], style: 'documentFooterRight'}
                        ]
                    }
                },

                content: [
                    // Header
                    {
                        columns: [
                            {
                                image: getBase64Image(myGlyph),
                                width: 150
                            },

                            [
                                {
                                    text: 'FACTURA',
                                    style: 'invoiceTitle',
                                    width: '*'
                                },
                                {
                                    stack: [
                                        {
                                            columns: [
                                                {
                                                    text: 'Factura #',
                                                    style: 'invoiceSubTitle',
                                                    width: '*'

                                                },
                                                {
                                                    text: numFactura,
                                                    style: 'invoiceSubValue',
                                                    width: 100

                                                }
                                            ]
                                        },
                                        {
                                            columns: [
                                                {
                                                    text: 'Fecha de Emisión',
                                                    style: 'invoiceSubTitle',
                                                    width: '*'
                                                },
                                                {
                                                    text: jsDate.toString(),
                                                    style: 'invoiceSubValue',
                                                    width: 100
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ],
                        ],
                    },
                    // Billing Headers
                    {
                        columns: [
                            {
                                text: 'Facturación desde',
                                style: 'invoiceBillingTitle',

                            },
                            {
                                text: 'Facturación a',
                                style: 'invoiceBillingTitle',

                            },
                        ]
                    },
                    // Billing Details
                    {
                        columns: [
                            {
                                text: 'Almacen Luna Textil S.A',
                                style: 'invoiceBillingDetails'
                            },
                            {
                                text: nameUserF,
                                style: 'invoiceBillingDetails'
                            },
                        ]
                    },
                    // Billing Address Title
                    {
                        columns: [
                            {
                                text: 'Dirección',
                                style: 'invoiceBillingAddressTitle'
                            },
                            {
                                text: 'Dirección',
                                style: 'invoiceBillingAddressTitle'
                            },
                        ]
                    },
                    // Billing Address
                    {
                        columns: [
                            {
                                text: ' Carrera 24 #65-19, Bogotá',
                                style: 'invoiceBillingAddress'
                            },
                            {
                                text: addressF,
                                style: 'invoiceBillingAddress'
                            },
                        ]
                    },
                    // Line breaks
                    '\n\n',
                    // Items
                    {
                        table
                                //  layout: 'lightHorizontalLines'
                    },
                    // TOTAL
                    {
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 0,
                            widths: ['*', 80],

                            body: [
                                // Total
                                [
                                    {
                                        text: 'Subtotal',
                                        style: 'itemsFooterSubTitle'
                                    },
                                    {
                                        text: '$ ' + subtotal,
                                        style: 'itemsFooterSubValue'
                                    }
                                ],
                                [
                                    {
                                        text: 'IVA',
                                        style: 'itemsFooterSubTitle'
                                    },
                                    {
                                        text: '$ ' + iva,
                                        style: 'itemsFooterSubValue'
                                    }
                                ],
                                [
                                    {
                                        text: 'TOTAL',
                                        style: 'itemsFooterTotalTitle'
                                    },
                                    {
                                        text: '$ ' + total,
                                        style: 'itemsFooterTotalValue'
                                    }
                                ],
                            ]
                        }, // table
                        layout: 'lightHorizontalLines'
                    },
                    // Signature
                    {
                        columns: [
                            {
                                text: '',
                            },
                            {
                                stack: [
                                    {
                                        text: '_________________________________',
                                        style: 'signaturePlaceholder'
                                    },
                                    {
                                        text: 'Harold Garcia',
                                        style: 'signatureName'

                                    },
                                    {
                                        text: 'Administrador',
                                        style: 'signatureJobTitle'

                                    }
                                ],
                                width: 180
                            },
                        ]
                    }
                ],
                styles: {
                    // Document Header
                    documentHeaderLeft: {
                        fontSize: 10,
                        margin: [5, 5, 5, 5],
                        alignment: 'left'
                    },
                    documentHeaderCenter: {
                        fontSize: 10,
                        margin: [5, 5, 5, 5],
                        alignment: 'center'
                    },
                    documentHeaderRight: {
                        fontSize: 10,
                        margin: [5, 5, 5, 5],
                        alignment: 'right'
                    },
                    // Document Footer
                    documentFooterLeft: {
                        fontSize: 10,
                        margin: [5, 5, 5, 5],
                        alignment: 'left'
                    },
                    documentFooterCenter: {
                        fontSize: 10,
                        margin: [5, 5, 5, 5],
                        alignment: 'center'
                    },
                    documentFooterRight: {
                        fontSize: 10,
                        margin: [5, 5, 5, 5],
                        alignment: 'right'
                    },
                    // Invoice Title
                    invoiceTitle: {
                        fontSize: 22,
                        bold: true,
                        alignment: 'right',
                        margin: [0, 0, 0, 15]
                    },
                    // Invoice Details
                    invoiceSubTitle: {
                        fontSize: 12,
                        alignment: 'right'
                    },
                    invoiceSubValue: {
                        fontSize: 12,
                        alignment: 'right'
                    },
                    // Billing Headers
                    invoiceBillingTitle: {
                        fontSize: 14,
                        bold: true,
                        alignment: 'left',
                        margin: [0, 20, 0, 5],
                    },
                    // Billing Details
                    invoiceBillingDetails: {
                        alignment: 'left'

                    },
                    invoiceBillingAddressTitle: {
                        margin: [0, 7, 0, 3],
                        bold: true
                    },
                    invoiceBillingAddress: {

                    },
                    // Items Header
                    itemsHeader: {
                        margin: [0, 5, 0, 5],
                        bold: true
                    },
                    // Item Title
                    itemTitle: {
                        bold: true,
                    },
                    itemSubTitle: {
                        italics: true,
                        fontSize: 11
                    },
                    itemNumber: {
                        margin: [0, 5, 0, 5],
                        alignment: 'center',
                    },
                    itemTotal: {
                        margin: [0, 5, 0, 5],
                        bold: true,
                        alignment: 'center',
                    },

                    // Items Footer (Subtotal, Total, Tax, etc)
                    itemsFooterSubTitle: {
                        margin: [0, 5, 0, 5],
                        bold: true,
                        alignment: 'right',
                    },
                    itemsFooterSubValue: {
                        margin: [0, 5, 0, 5],
                        bold: true,
                        alignment: 'center',
                    },
                    itemsFooterTotalTitle: {
                        margin: [0, 5, 0, 5],
                        bold: true,
                        alignment: 'right',
                    },
                    itemsFooterTotalValue: {
                        margin: [0, 5, 0, 5],
                        bold: true,
                        alignment: 'center',
                    },
                    signaturePlaceholder: {
                        margin: [0, 70, 0, 0],
                    },
                    signatureName: {
                        bold: true,
                        alignment: 'center',
                    },
                    signatureJobTitle: {
                        italics: true,
                        fontSize: 10,
                        alignment: 'center',
                    },
                    notesTitle: {
                        fontSize: 10,
                        bold: true,
                        margin: [0, 50, 0, 3],
                    },
                    notesText: {
                        fontSize: 10
                    },
                    center: {
                        alignment: 'center',
                    },
                },
                defaultStyle: {
                    columnGap: 20,
                }
            }

            
            if (opcion == 1) {
                const pdfDocGenerator = pdfMake.createPdf(docDefinition);
                pdfDocGenerator.getBase64((data) => {
                    $('#pdfModalFactura').attr('src', "data:application/pdf;base64," + data);
                   
                    $("#modalFacturaCompra").modal("show");
                });
            } else if (opcion == 2) {
                pdfMake.createPdf(docDefinition).download('Factura-' + numFactura + '');
            }




        }
    });



};

