$(document).ready(function () {
    var condition = "All";
    var intemSearch = "";
    PrintAll(condition, intemSearch);

});
$(document).on('keyup', '.inputSearch', function (e) {
    var value = $('.inputSearch').val()
    if (value == "") {
        PrintAll();
    }
});
$('.inputSearch').on('keypress', function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        e.preventDefault();
        search();
    }
});
$('.buttonSearch').on('click', function (e) {
    e.preventDefault();
    search();
});
$('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 700);
});

var PrintAll = function () {
    var $pagination = $('#pagination');
    var defaultOpts = {
        totalPages: 1,
        visiblePages: 6,
        first: 'Primera',
        prev: 'Anterior',
        next: 'Siguiente',
        last: 'Ultima'

    };
    $pagination.twbsPagination(defaultOpts);
    var data = "";
    $.ajax({
        method: "POST",
        url: "methodProduct?accion=list",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {

            var totalPages = Math.round(data.datos.length / 10);
            var contador = 10;
            var contador2 = 10;

            var currentPage = $pagination.twbsPagination('getCurrentPage');
            $pagination.twbsPagination('destroy');
            $pagination.twbsPagination($.extend({}, defaultOpts, {
                startPage: currentPage,
                totalPages: totalPages,
                onPageClick: function (event, page) {
                    //fetch content and render here               


                    var data = "";
                    $.ajax({
                        method: "POST",
                        url: "methodProduct?accion=list",
                        data: data,
                        dataSrc: "datos",
                        dataType: "json",
                        success: function (data) {
                            $('#stockShop').html("");
                            for (var h = (contador * page) - 10; h < contador2 * page; h++) {
                                console.clear();
                                if (data.datos[h] != '\0') {
                                    $('#stockShop').append(' <div class="col-md-4" ><div class="card view overlay zoom"><a id = "' + data.datos[h].Codigo + '"data-name="' + data.datos[h].Nombre + '" data-price="' + data.datos[h].Precio + '" class="btnCharacters" data-toggle="modal" data-target="#modalInsertCant"role="button"><img class="card-img-top img-fluid"  src="' + data.datos[h].Imagen + '" title="' + data.datos[h].Nombre + '"alt="' + data.datos[h].Nombre + '"></a><div class="card-block"><h4 style="font-size:13px;" class="card-title">' + data.datos[h].Nombre + '</h4><p class="card-text">Precio: $' + data.datos[h].Precio + ' Mt²</p><a href="#" id = "' + data.datos[h].Codigo + '"data-name="' + data.datos[h].Nombre + '" data-price="' + data.datos[h].Precio + '" style="background: #2f323a;color: white;border:none; margin-left:2px;" title="Ver Detalles"class="btn btnCharacters colorbtn btn-primary"data-toggle="modal" data-target="#modalInsertCant"><span class ="fa fa-eye"></span></a></div></div></div>');
                                }

                            }

                        }
                    });
                }
            }));
        }
    });

}
var search = function () {
    var $pagination = $('#pagination');
    var defaultOpts = {
        totalPages: 1,
        visiblePages: 6,
        first: 'Primera',
        prev: 'Anterior',
        next: 'Siguiente',
        last: 'Ultima'

    };
    $pagination.twbsPagination(defaultOpts);
    var valSearch = $('.inputSearch').val();
    var data = {valSearch: valSearch};
    $.ajax({
        method: "POST",
        url: "methodProduct?accion=list",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var totalPages = Math.round(data.datos.length / 10);
            var contador = 10;
            var contador2 = 10;

            var currentPage = $pagination.twbsPagination('getCurrentPage');
            $pagination.twbsPagination('destroy');
            $pagination.twbsPagination($.extend({}, defaultOpts, {
                startPage: currentPage,
                totalPages: totalPages,
                onPageClick: function (event, page) {
                    //fetch content and render here             
                    var valSearch = $('.inputSearch').val();
                    var data = {valSearch: valSearch};
                    $.ajax({
                        method: "POST",
                        url: "methodProduct?accion=listSearch",
                        data: data,
                        dataSrc: "datos",
                        dataType: "json",
                        success: function (data) {
                            $('#stockShop').html("");
                            for (var h = (contador * page) - 10; h < contador2 * page; h++) {

                                if (data.datos.length != 0) {
                                    $('#stockShop').append(' <div class="col-md-4" ><div class="card view overlay zoom"><a id = "' + data.datos[h].Codigo + '"data-name="' + data.datos[h].Nombre + '" data-price="' + data.datos[h].Precio + '" class="btnCharacters" data-toggle="modal" data-target="#modalInsertCant"role="button"><img class="card-img-top img-fluid"  src="' + data.datos[h].Imagen + '" title="' + data.datos[h].Nombre + '"alt="' + data.datos[h].Nombre + '"></a><div class="card-block"><h4 style="font-size:13px;" class="card-title">' + data.datos[h].Nombre + '</h4><p class="card-text">Precio: $' + data.datos[h].Precio + ' Mt²</p><a href="#" id = "' + data.datos[h].Codigo + '"data-name="' + data.datos[h].Nombre + '" data-price="' + data.datos[h].Precio + '" style="background: #2f323a;color: white;border:none; margin-left:2px;" title="Ver Detalles"class="btn btnCharacters colorbtn btn-primary"data-toggle="modal" data-target="#modalInsertCant"><span class ="fa fa-eye"></span></a></div></div></div>');
                                } else {
                                    $('#stockShop').html("<h4 style='text-align: center'>Resultados de la busqueda: Ningún producto encontrado</h4>");
                                }
                            }
                        }
                    });
                }
            }));
        }
    });

}

//$('#boton').click(function () {
//    console.log($('.select1').val());
//
//});


$(document).on('click', '.btnCharacters', function (e) {
    var idProducto = $(this).attr('id');
    var data = {idProducto: idProducto};
    $.ajax({
        url: "methodProduct?accion=modalUpdate",
        type: "post",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            var cartArray = shoppingCart.listCart();
            var output = "";
            $.each(data.datos, function (i, field) {
                $('.colDetails').html("");
                $('.colImg').html("");
                $('.colImg').append("<img class='card-img-top img-fluid'  src='" + field.imagen + "' title='" + field.Nombre + "'alt='" + field.Nombre + "'>");
                $('.colDetails').append("<strong>" + field.Nombre + "</strong><br><br>");
                $('.colDetails').append("<strong>$ " + field.Precio + " Mt²</strong><br><br>");
                $('.colDetails').append("<table><tr><td><div style='margin-left:2px;'class='row'><div class='input-group col-md-8'><span class='minus-item1 input-group-addon btn btn-primary' >-</span>"
                        + "<input type='number' class='item-count form-control' data-name='" + field.Nombre + "' value=''>"
                        + "<span class='plus-item1 btn btn-primary input-group-addon' data-name=" + field.Nombre + ">+</span></td>"
                        + "<td><a title='Añadir al carrito' href='#' id = '" + field.Codigo + "'data-name='" + field.Nombre + "' data-price='" + field.Precio + "' style='background: #2f323a;color: white;border:none;'class='add-to-cart btn colorbtn btn-primary'><span class='fa fa-cart-plus'></span> +</a></td></tr></table>");
                $('.colDetails').append("<br><h5 style='text-align: justify;'>" + field.descripcion + "</h5>");

            });
        }
    });
});
$(document).on('click', '.openModalImg', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $('.btnCharacters').click();
});
// -1
$('.colDetails').on("click", ".minus-item1", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var name = $('.item-count').val();
    var total = Number(name) - 1;
    $('.item-count').val(total);
})
// +1
$('.colDetails').on("click", ".plus-item1", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var name = $('.item-count').val();
    var total = Number(name) + 1;
    $('.item-count').val(total);
})

$('#btnOrderNow').click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var cartArrayOrder = shoppingCart.listCart();
    var detailsShop = "";
    var totalShop = shoppingCart.totalCartNeto();
  
    if (cartArrayOrder.length > 0) {
        for (var i in cartArrayOrder) {
            detailsShop += cartArrayOrder[i].idSis + "," + cartArrayOrder[i].count + "," + cartArrayOrder[i].total + ";";
        }
        $('#detailsShop').val(detailsShop);
        $('#totalShop').val(totalShop);
        var datos = new FormData($('#frmShop')[0]);
        for (var entrie of datos.entries()) {
            console.log(entrie[0] + ': ' + entrie[1]);
        }

        var data = "";
        var ventaGuardada = "Venta guardada y en proceso, en un plazo no mayor a 2 dias se estara realizando la entrega de sus productos, en el caso de que ocurra alguna novedad se le informara a travez de correo electronico";
        var iniciarSesion = "Para continuar debe iniciar sesion";
        var cartVacio = "No hay articulos en el carrito! si desea continuar llene el carrito con los articulos de su gusto";
        var errorVenta = "Error al generar su venta, vuelva a intentarlo por favor!";
        // validar si el usuario se encuentra logueado en el sistema
        $.post("loginUser?action=validarLogin", data, function (res, est, jqXHR) {
            if (res == 1) {
                Swal.fire({
                    title: 'Estás Seguro?',
                    text: "De realizar esta compra!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Realizala!',
                    cancelButtonText: 'Cancelar',
                    width: 500,
                    padding: '5em',
                }).then((result) => {
                    $.ajax({
                        url: "processVenta?action=newVenta",
                        type: "post",
                        data: datos,
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
                                $('#cart').modal('toggle');
                                shoppingCart.clearCart();
                                displayCart();

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
                            }
                        }
                    });
                });
                // fin del proceso de validar si el carrito esta lleno
            } else {

                Swal.fire({
                    //error
                    type: 'warning',
                    title: '¡ Para Continuar con la compra debe iniciar sesion ! ',
                    width: 500,
                    padding: '5em',
                    showConfirmButton: false,
                    timer: 2000 //el tiempo que dura el mensaje en ms
                });
                setTimeout(function () {
                    window.location = "vistasAux/login.jsp"
                }, 300);
            }
        });

        // fin del proceso de validar si el usuario esta logueado o no


    } else {

        Swal.fire({
            //error
            type: 'error',
            title: '¡El Carrito Esta Vacio! ',
            text: 'Seleccione los productos que desea Comprar',
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
    obj.totalLength = function () {
        var totalCount = cha;

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
    obj.totalCartIva = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        var totalI = totalCart * 0.19
        return Number(totalI.toFixed(2));
    }
    obj.totalCartNeto = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        var totalI = totalCart * 0.19
        var totalN = totalCart +totalI;
        return Number(totalN.toFixed(2));
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
    var num = Number($('.item-count').val());
    if (num <= 0 || num == "") {
        Swal.fire({
            //error
            type: 'error',
            title: '¡Error! ',
            html: '<strong style="font-size:15px;">Ingrese una cantidad valida</strong>',
            width: 500,
            padding: '5em',
            showConfirmButton: false,
            timer: 2000 //el tiempo que dura el mensaje en ms
        });
    } else {
        var name = $(this).data('name');
        var idSis = $(this).attr('id');
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(name, price, num, idSis);
        displayCart();
        Swal.fire({
            //error
            type: 'success',
            title: '¡ Producto agregado exitosamente ! ',
            width: 500,
            padding: '5em',
            showConfirmButton: false,
            timer: 2000 //el tiempo que dura el mensaje en ms
        });

        setTimeout(function () {
            $('#modalInsertCant').modal('toggle')
        }, 2500);
    }

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

});
var cleanCart = function () {
    shoppingCart.clearCart();
    displayCart();
}
function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {


        output += "<tr>"
                + "<td id='tdName'>" + cartArray[i].name + "</td>"
                + "<td>(" + cartArray[i].price + ")</td>"
                + "<td><div class='input-group'><span class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</span>"
                + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
                + "<span class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</span></div></td>"
                + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
                + " = "
                + "<td>" + Math.trunc(cartArray[i].total) + "</td>"
                + "</tr>"

                ;
    }

    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-cart-iva').html(shoppingCart.totalCartIva());
    $('.total-cart-neto').html(shoppingCart.totalCartNeto());
    $('.total-count').html(shoppingCart.listCart().length);
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


