//funcion para desloguear el usuario
$(document).ready(function () {
    $(document).on('click', '#buttonLogout', function (e) {
        var data = "";
        $.post("../../loginUser?action=logOut", data, function (res, est, jqXHR) {
            console.log(res);
            if (res === "1") {
                setTimeout(function () {
                    window.location = "loginAdmin.jsp";
                }, 300);
            }
        });
    });
});

