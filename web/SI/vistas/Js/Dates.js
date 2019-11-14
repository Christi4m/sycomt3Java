var typeTercero = "";
var firstName = "";
var idUser = "";
var typeId = "";
var numId = "";
var nameUser = "";

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
            });

        }
    });

});

