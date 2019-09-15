    $(document).ready(function () {
        listar();

    });
    var listar = function () {
        var table = $("#example").DataTable({

            destroy: true,
            order: [[0, "desc"]],
            ajax: {
                method: "POST",
                url: "../../methodClient?accion=listarMensajeros",
                dataSrc: "datos"
            },
            columns: [

                {data: "id"},
                {data: "numId"},
                {data: "name"},
                {data: "email"},
                {data: "numCellPhone"},
                {data: "estadoTercero"},
                {data: "acciones"}

            ],

            language: idiomaEsp
        });

    }
    
   



