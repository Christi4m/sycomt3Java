$(document).ready(function () {
    listar();

});
var listar = function () {
    var table = $("#example").DataTable({

        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../processVenta?action=listVentas",
            dataSrc: "datos"
        },
        columns: [

            {data: "Codigo"},
            {data: "Fecha"},
            {data: "Valor"},
            {data: "Cliente"},
            {data: "Factura"},
            {data: "Estado"},
            {data: "acciones"}
        ],
        language: idiomaEsp
    });
}


