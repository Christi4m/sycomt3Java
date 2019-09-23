$(document).ready(function () {
    listar();// funcion que inicializa el data table y las funciones del crud
    listarProveedor();// funcion que lista los provedores en la listadesplegable de proveedro
    //en el formulario crear producto


});
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
                $('#proveedorProducto').append(' <option value="' + field.idProveedor + '">' + field.razonSocial + '</option>')
            });
        }
    });
};
var listar = function () {
    var table = $("#listProductos").DataTable({

        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../methodProduct?accion=list",
            dataSrc: "datos"
        },
        columns: [
            {data: "Codigo"},
            {data: "Nombre"},
            {data: "Telaje"},
            {data: "Ubicacion"},
            {data: "Precio"},
            {data: "Stock"},
            {data: "acciones"}
        ],

        language: idiomaEsp
    });
}

$(function () {

    $('#btncrearproducto').click(function (e) {

        $('#frmCrearProducto').bootstrapValidator({

            feedbackIcons: {valid: 'glyphicon glyphicon-ok', invalid: 'glyphicon glyphicon-remove', validating: 'glyphicon glyphicon-refresh'},

            fields: {

                nombreProducto: {
                    validators: {
                        notEmpty: {message: 'Ingrese el nombre'}
                    }
                },
                decripcionProducto: {
                    validators: {
                        notEmpty: {message: 'Ingrese la descripción'}
                    }
                },
                telajeProducto: {
                    validators: {
                        notEmpty: {message: 'Ingrese el tipo de tela'}

                    }
                },
                proveedorProducto: {
                    validators: {
                        notEmpty: {message: 'Seleccione el proveedor'}
                    }
                },
                ubicacionBodega: {
                    validators: {
                        notEmpty: {message: 'Ingrese la ubicación'}
                    }
                },
                precioMC: {
                    validators: {
                        notEmpty: {message: 'Ingrese el precio'},
                        digits: {message: 'Ingrese un precio valido'}
                    }
                },
                stock: {
                    validators: {
                        notEmpty: {message: 'Ingrese la cantidad del stock'},
                        digits: {message: 'Ingrese solo numeros'}
                    }
                },
                imagenProducto: {
                    validators: {
                        notEmpty: {message: 'Adjunte la imagen'}
                    }
                }

            }

        });
        $('#frmCrearProducto').on('success.form.bv', function (e) {
            // Prevent form submission
            e.preventDefault();
            e.stopImmediatePropagation();
            var data = new FormData($('#frmCrearProducto')[0]);

            for (var entrie of data.entries()) {
                console.log(entrie[0] + ': ' + entrie[1]);
            }

            $("#frmCrearProducto")[0].reset();
            $("#frmCrearProducto    ").data('bootstrapValidator').resetForm();
            $("#modalNuevo").modal("toggle");

            $.ajax({
                url: "../../methodProduct?accion=create",
                type: "post",
                data: data,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data == 1) {
                        Swal.fire({
                            //error
                            type: 'success',
                            title: '¡ Producto creado exitosamente ! ',
                            width: 500,
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 2000 //el tiempo que dura el mensaje en ms
                        });
                        listar();
                    } else {
                        Swal.fire({
                            //error
                            type: 'error',
                            title: '¡Error al Crear! ',
                            text: 'Intentelo de nuevo',
                            width: 500,
                            padding: '5em',
                            showConfirmButton: false,
                            timer: 4000 //el tiempo que dura el mensaje en ms
                        });
                        listar();
                    }

                }
            });

        });


    });
    $(document).on('click', 'button.btnEliminar', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var idProducto = $(this).attr('id');
        var fila = $(this).parent().parent();
    });
    $('#botonModalEliminar').click(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var data = {iDProducto: idProducto};
        $.ajax({
            url: "../../methodProduct?accion=delete",
            type: "post",
            data: data,
            success: function (data) {
                $('#textoModalResult').text("Producto Eliminado exitosamente");
                $("#modalResult").modal("show");
                listar();
            }
        });
    });


    //funcion para cargar los datos en el modal de editar
    $(document).on('click', 'button.btnUpdate', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var idProducto = $(this).attr('id');
        var data = {idProducto: idProducto};
        $.ajax({
            url: "../../methodProduct?accion=modalUpdate",
            type: "post",
            data: data,
            dataSrc: "datos",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $.each(data.datos, function (i, field) {
                    $('#idProductoA').val(field.Codigo);
                    $('#nombreProductoA').val(field.Nombre);
                    $('#telajeProductoA').val(field.Telaje);
                    $('#ubicacionBodegaA').val(field.Ubicacion);
                    $('#precioMCA').val(field.Precio);
                    $('#stockA').val(field.Stock);


                });
            }
        });


    });

    //funcion actualizar

    $('#botonUpdateModal').click(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $("#modalEdicion").modal("toggle");
        var id = document.getElementById('idProductoA').value;
        var nombre = document.getElementById('nombreProductoA').value;
        var telaje = document.getElementById('telajeProductoA').value;
        var ubicacion = document.getElementById('ubicacionBodegaA').value;
        var precioMC = document.getElementById('precioMCA').value;
        var stock = document.getElementById('stockA').value;
        $.ajax({
            url: "../../methodProduct?accion=update",
            type: "post",
            data: {
                id: id,
                nombre: nombre,
                telaje: telaje,
                ubicacion: ubicacion,
                precioMC: precioMC,
                stock: stock,
            },
            success: function (data) {
                if (data == 1) {
                    Swal.fire({
                        //error
                        type: 'success',
                        title: '¡ Producto Actualizado exitosamente ! ',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 2000 //el tiempo que dura el mensaje en ms
                    });

                } else {
                    Swal.fire({
                        //error
                        type: 'error',
                        title: '¡Error al Actualizar! ',
                        text: 'Intentelo de nuevo',
                        width: 500,
                        padding: '5em',
                        showConfirmButton: false,
                        timer: 4000 //el tiempo que dura el mensaje en ms
                    });
                }
                listar();



            }
        });
    });
    //funcion para llamar los detalles de un producto dentro del detalle de ventas
    $(document).on('click', 'button.btnDetallesProducto', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $("#modalDetalleProducto").modal("show");
        var idProducto = $(this).attr('id');
        var data = {idProducto: idProducto};
        $.ajax({
            url: "../../methodProduct?accion=modalUpdate",
            type: "post",
            data: data,
            dataSrc: "datos",
            dataType: "json",
            success: function (data) {
                $('#bodyDetailsProduct').html("");
                $('#detallesP').html("");
                $.each(data.datos, function (i, field) {
                    $('#bodyDetailsProduct').append("<tr><td>" + field.proveedor + "</td></tr>");
                    $('#detallesP').append("<img src='../../" + field.imagen + "' width='20%' height='20%' alt='Imagen del Producto'/><h4 id='detallesProducto'>" + field.descripcion + "</h4>");
                });
            }
        });
    });

});








