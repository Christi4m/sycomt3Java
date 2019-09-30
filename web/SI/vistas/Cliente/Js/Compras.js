$(document).ready(function () {
    listar();
});
var listar = function () {
    var table = $("#example").DataTable({

        destroy: true,
        order: [[0, "desc"]],
        ajax: {
            method: "POST",
            url: "../../../methodProduct?accion=list",
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







