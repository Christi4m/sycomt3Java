$(document).ready(function () {
    listar();
    Print();
    listarProveedor();
});
var listar = function () {
    var docDefinition = {
        header: 'simple text',
        footer: {
            columns: [
                'Left part',
                {text: 'Right part', alignment: 'right'}
            ]
        }


    };
    var table = $("#tableCrud").DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i style="font-size:25px;"class="fas fa-copy"></i>',
                titleAttr: 'Copiar Dstos',
                className: 'btn btn-info',
                exportOptions: {
                    columns: [0, 1, 3, 4, 5, 'visible']
                }
            },
            {
                extend: 'excelHtml5',
                text: '<i style="font-size:25px;"class="fas fa-file-excel"></i>',
                titleAttr: 'Exportar a Excel',
                className: 'btn btn-success',
                exportOptions: {
                    columns: [0, 1, 3, 4, 5, 'visible']
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i style="font-size:25px;" class="fas fa-file-pdf"></i>',
                titleAttr: 'Exportar a Pdf',
                className: 'btn btn-danger',
                title:'Reporte Compras',
                fileName:'ReporteCompras',
                exportOptions: {
                    columns: [0, 1, 3, 4, 5],
                    title: 'Reporte '

                },
                customize: function (doc) {

                    
                    doc.content[1].table.widths =
                            Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    
                   //Remove the title created by datatTables
//						doc.content.splice(0,1,{
//                                                     margin: [ 0, 0, 0, 30 ],
//                                                     width: 200,
//                                                     title:'reporte',

//                        alignment: 'center',
                        
//                                                });
						//Create a date string that we use in the footer. Format is dd-mm-yyyy
						var now = new Date();

						var jsDate = now.getDate()+'-'+(now.getMonth()+1)+'-'+now.getFullYear();
						// Logo converted to base64
						// var logo = getBase64FromImageUrl('https://datatables.net/media/images/logo.png');
						// The above call should work, but not when called from codepen.io
						// So we use a online converter and paste the string in.
						// Done on http://codebeautify.org/image-to-base64-converter
						// It's a LONG string scroll down to see the rest of the code !!!
						
						// A documentation reference can be found at
						// https://github.com/bpampuch/pdfmake#getting-started
						// Set page margins [left,top,right,bottom] or [horizontal,vertical]
						// or one number for equal spread
						// It's important to create enough space at the top for a header !!!
						doc.pageMargins = [20,60,20,30];
						doc.title='hola';
						// Set the font size fot the entire document
						doc.defaultStyle.fontSize = 10;
						// Set the fontsize for the table header
						doc.styles.tableHeader.fontSize = 10;
						doc.styles.tableHeader.alignment = 'left';
						doc.styles.tableHeader.fillColor= '#000000',
						
						
						
					doc['header']=(function() {
							return {
								columns: [
									{
										image: logo,
										width: 24
									},
									{
										alignment: 'left',
										italics: true,
										text: 'dataTables',
										fontSize: 18,
										margin: [10,0]
									},
									{
										alignment: 'right',
										fontSize: 14,
										text: 'Custom PDF export with dataTables'
									}
								],
								margin: 20
							}
						});
						
						// Create a footer object with 2 columns
						// Left side: report creation date
						// Right side: current page and total pages
						doc['footer']=(function(page, pages) {
							return {
								columns: [
									{
										alignment: 'left',
										text: ['Creado el ', { text: jsDate.toString() }]
									},
									{
										alignment: 'right',
										text: ['Pagina ', { text: page.toString() },	' de ',	{ text: pages.toString() }]
									}
								],
								margin: 10
							}
						});
						// Change dataTable layout (Table styling)
						// To use predefined layouts uncomment the line below and comment the custom lines below
						// doc.content[0].layout = 'lightHorizontalLines'; // noBorders , headerLineOnly
						
                                                
                                                
						
                }


            },
            {
                extend: 'csvHtml5',
                text: '<i style="font-size:25px;"class="fas fa-file-csv"></i>',
                titleAttr: 'Exportar a Csv',
                className: 'btn btn-warning',
                exportOptions: {
                    columns: [0, 1, 3, 4, 5],
                    fieldSeparator: ',',
                    footer: false,
                    header: true
                }
            }

        ],
        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../controllerCompras?accion=listShop",
            dataSrc: "datos"
        },
        columns: [
            {data: "Codigo"},
            {data: "Fecha"},
            {data: "proveedor"},
            {data: "obs"},
            {data: "Valor"},
            {data: "Estado"},
            {data: "acciones"}
        ],
        createdRow: function (row, data, dataIndex) {
            $(row).find('td:eq(0)').attr('data-label', '#')
            $(row).find('td:eq(1)').attr('data-label', 'Fecha')
            $(row).find('td:eq(2)').attr('data-label', 'Proveedor')
            $(row).find('td:eq(3)').attr('data-label', 'Total')
            $(row).find('td:eq(5)').attr('data-label', 'Estado')
            $(row).find('td:eq(6)').attr('data-label', 'Acciones')

        },
        language: idiomaEsp
    });
}

var Print = function () {
    var data = "";
    $.ajax({
        method: "POST",
        url: "../../methodProduct?accion=list",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {
                $('#stockShop').append(' <div class="col-md-4"><div class="card"><img class="card-img-top" src="../../' + field.Imagen + '" alt="' + field.Nombre + '"><div class="card-block"><h4 class="card-title">' + field.Nombre + '</h4><p class="card-text">Precio: $' + field.Precio + ' Mt²</p><a href="#" id = "' + field.Codigo + '"data-name="' + field.Nombre + '" data-price="' + field.Precio + '" class="add-to-cart btn colorbtn btn-primary">Añadir al carrito</a></div></div></div>');
            });
        }
    });
}

var listarProveedor = function () {
    var data = "";
    $.ajax({
        url: "../../processProveedor?accion=listarProveedores",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {

            $.each(data.datos, function (i, field) {
                $('#proveedorShop').append(' <option value="' + field.idProveedor + '">' + field.razonSocial + '</option>')
            });
        }
    });
};
//$('#boton').click(function () {
//    console.log($('.select1').val());
//
//});

$('#btnOrderNow').click(function (e) {
    $('#frmShop').bootstrapValidator({
        feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},
        fields: {
            proveedorShop: {
                validators: {
                    notEmpty: {message: 'Seleccione un proveedor'},
                }
            },
            decripcionShop: {
                validators: {
                    notEmpty: {message: 'Ingrese la descripción'}

                }
            }

        }

    });
});
$('#frmShop').on('success.form.bv', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var cartArrayOrder = shoppingCart.listCart();
    var detailsShop = "";
    var totalShop = shoppingCart.totalCart();
    var proveedorShop = $('#proveedorShop').val();
    var descripcionShop = $('#decripcionShop').val();
    if (cartArrayOrder.length > 0) {
        for (var i in cartArrayOrder) {
            detailsShop += cartArrayOrder[i].idSis + "," + cartArrayOrder[i].count + "," + cartArrayOrder[i].total + ";";
        }
        $('#detailsShop').val(detailsShop);
        $('#totalShop').val(totalShop);
        var data = new FormData($('#frmShop')[0]);
        for (var entrie of data.entries()) {
            console.log(entrie[0] + ': ' + entrie[1]);
        }



        $.ajax({
            url: "../../controllerCompras?accion=newShop",
            type: "post",
            data: data,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    Swal.fire({
                        //error
                        type: 'success',
                        title: '¡ Compra registrada exitosamente ! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 2000 //el tiempo que dura el mensaje en ms
                    });
                    $("#frmShop")[0].reset();
                    $("#frmShop").data('bootstrapValidator').resetForm();
                    $('#cart').modal('toggle');
                    shoppingCart.clearCart();
                    displayCart();
                    listar();
                } else {
                    Swal.fire({
                        //error
                        type: 'error',
                        title: '¡Error al Registrar! ',
                        text: 'Intentelo de nuevo',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 4000 //el tiempo que dura el mensaje en ms
                    });
                    $('#btnOrderNow').attr("disabled", false);
                    listar();
                }

            }
        });
    } else {

        Swal.fire({
            //error
            type: 'error',
            title: '¡El Carrito Esta Vacio! ',
            text: 'Seleccione los productos que desea solicitar a su proveedor',
            width: 500,
            padding: '10em',
            showConfirmButton: false,
            timer: 4000 //el tiempo que dura el mensaje en ms
        });
        $('#btnOrderNow').attr("disabled", false);
    }
});
$(document).on('click', '#closeModalCart', function (e) {
    $("#frmShop")[0].reset();
    $("#frmShop").data('bootstrapValidator').resetForm();
});
$(document).on('click', 'button.btnDetalles', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var idShop = $(this).attr("id");
    var data = ""
    $.ajax({
        url: "../../controllerCompras?accion=listDetailsShop&idShop=" + idShop + "",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $('#bodyDC').html("");
            $.each(data.datos, function (i, field) {
                $('#bodyDC').append("<tr><td>" + field.idProducto + "</td><td>" + field.nombreProducto + "</td><td>" + field.cantidad + "</td><td>" + field.precio + "</td></tr>");
                $("#modalDetalleVentas").modal("show");
            });
        }
    });
    $('#modalDetalleCompras').modal('show');
});
$(document).on('click', 'a.idproveedor', function (e) {
    var data = "";
    var idProveedorD = $(this).attr("id");
    $.ajax({
        url: "../../processProveedor?accion=listarProveedores",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $('#bodyDP').html("");
            $.each(data.datos, function (i, field) {
                if (idProveedorD == field.idProveedor) {
                    $('#bodyDP').append("<tr><td>" + field.razonSocial + "</td><td>" + field.nit + "</td>");
                    $("#modalDetallesProveedor").modal("show");
                }
            });
        }
    });
});
// ************************************************
// Shopping Cart API
// Seccion de cosigo para el carrito de compras
// ************************************************

var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    // Constructor
    function Item(name, price, count, idSis) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.idSis = idSis;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    // Add to cart
    obj.addItemToCart = function (name, price, count, idSis) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count, idSis);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();
// *****************************************
// Triggers / Events
// ***************************************** 
// Add item

$(document).on('click', '.add-to-cart', function (e) {

    event.preventDefault();
    var name = $(this).data('name');
    var idSis = $(this).attr('id');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1, idSis);
    displayCart();
});
$(document).on('click', '#openCart', function (e) {
    $('#modalCompraNueva').modal('toggle');
});
$(document).on('click', '#closeModalCart', function (e) {
    $('#modalCompraNueva').modal('show');
});
// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});
$(document).ready(function () {
    shoppingCart.clearCart();
    displayCart();
});
function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {


        output += "<tr>"
                + "<td id='tdName'>" + cartArray[i].name + "</td>"
                + "<td>(" + cartArray[i].price + ")</td>"
                + "<td><div class='input-group row'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
                + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
                + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
                + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
                + " = "
                + "<td>" + Math.trunc(cartArray[i].total) + "</td>"
                + "</tr>"

                ;
    }

    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});
displayCart();


var logo = 'data:image/png;base64,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'; 