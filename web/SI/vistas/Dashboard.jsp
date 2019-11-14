<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String rol = "";
    String usuario = "";
    String idUser = "";
    String nameUser = "";
    HttpSession sesion = request.getSession();
    if (sesion != null) {

        if (sesion.getAttribute("firstName") != null) {
            rol = sesion.getAttribute("typeTercero").toString();
            usuario = sesion.getAttribute("firstName").toString();
            idUser = sesion.getAttribute("idUser").toString();

            nameUser = sesion.getAttribute("nameUser").toString();

            
        } else {
            out.print("<script>location.replace('../../vistasAux/login.jsp');</script>");
        }

    } else {
        out.print("<script>location.replace('../../vistasAux/login.jsp');</script>");
    }

%>
<!DOCTYPE html>
<html lang="es">
    <%@include file="dependencias/dependenciasCss.jsp"%>
    
    <body>
        <%@include file="dependencias/header.jsp"%>     
        <%@include file="dependencias/Sidebar.jsp"%>   
        <%@include file="dependencias/Home.jsp"%>  
        <%@include file="dependencias/footer.jsp"%>       
    </body>
    <%@include file="dependencias/dependenciasJS.jsp"%>
</html>
