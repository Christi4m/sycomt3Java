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
//[                            
//                                {
//                                    text: 'Item 2',
//                                    style: 'itemTitle'
//                                },
//                                
//                           
//                            {
//                                text: '1',
//                                style: 'itemNumber'
//                            },
//                            {
//                                text: '$999.99',
//                                style: 'itemNumber'
//                            },
//                            {
//                                text: '0%',
//                                style: 'itemNumber'
//                            }
//                        ],
//creacion de factura
campos = function (numFactura, total, idVenta) {
    var totalS = parseInt(total)
    var iva = totalS * 0.19;
    var totalN = totalS - iva;
    var dato = {idVenta: idVenta}
    var obj = [];
    var value = [];
    var docDefinition;

    $.ajax({
        url: "../../processVenta?action=detalleVentas",
        type: "post",
        data: dato,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            console.log(data);

            var name;
            var cant;
            var price;
            var priceUni
            obj = {headerRows: 1,
                widths: ['*', 40, 'auto', 'auto'],

                body:
                        // Table Header

                        // Items

                        value
                        // END Items

            }
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
            ]);
            $.each(data.datos, function (i, field) {
                value.push([{text: field.nombreProducto, style: 'itemTitle'}, {text: '' + field.cantidad + '', style: 'itemNumber'},
                    {text: '$999.99', style: 'itemNumber'}, {text: field.precio, style: 'itemNumber'}]);

            });

            docDefinition = {

                info: {
                    title: 'Factura: ' + numFactura,
                    author: 'john doe',
                    subject: 'subject of document',
                    keywords: 'keywords for document',
                    filename: 'gola'
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
                                text: nameUser,
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
                                text: address,
                                style: 'invoiceBillingAddress'
                            },
                        ]
                    },
                    // Line breaks
                    '\n\n',
                    // Items
                    {
                        table: {
                            obj

                        }, // table
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
                                        text: '$ ' + totalN.toString().replace(/\./g, ','),
                                        style: 'itemsFooterSubValue'
                                    }
                                ],
                                [
                                    {
                                        text: 'IVA',
                                        style: 'itemsFooterSubTitle'
                                    },
                                    {
                                        text: '$ ' + iva.toString().replace(/\./g, ','),
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


        }
    });



    return docDefinition;

};