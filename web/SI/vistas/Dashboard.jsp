<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String rol = "";
    String usuario = "";
    HttpSession sesion = request.getSession();
    if (sesion != null) {

        if (sesion.getAttribute("firstName") != null) {
            rol = sesion.getAttribute("typeTercero").toString();
            usuario = sesion.getAttribute("firstName").toString();
        } else {
            out.print("<script>location.replace('loginAdmin.jsp');</script>");
        }

    } else {
        out.print("<script>location.replace('loginAdmin.jsp');</script>");
    }

%>
<!DOCTYPE html>
<html>
    <%@include file="dependencias/dependenciasCss.jsp"%>
    <%@include file="dependencias/dependenciasJS.jsp"%>
    <body>
        <%@include file="dependencias/header.jsp"%>        
        <%@include file="dependencias/Sidebar.jsp"%>
        <%@include file="dependencias/Home.jsp"%>  
        <%@include file="dependencias/footer.jsp"%>       
    </body>
    
</html>
