
<!--header inicio-->
<header class="header black-bg">
    <div id="iconoBars" class="sidebar-toggle-box">
        <div class="fa fa-bars " ></div>
    </div>
    <!--logo inicio-->
    <a href="Dashboard.jsp" class="logo"><b>SYCOM<span>T3</span></b></a>
    <!--logo fin-->
<!--    <div class="nav notify-row" id="top_menu">
          notificaciones inicio 
        <ul class="nav top-menu">
             notificaciones de opciones inicio 
            <li class="dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
                    <i class="fa fa-tasks"></i>
                    <span class="badge bg-theme">4</span>
                </a>

            </li>
             notificaciones de opciones fin 
             notificaciones de mensajes inicio
            <li id="header_inbox_bar" class="dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-theme">5</span>
                </a>
            </li>
             notificaciones de mensajes fin 
             notificaciones o alertar del sistema inicio
            <li id="header_notification_bar" class="dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
                    <i class="fa fa-bell-o"></i>
                    <span class="badge bg-warning">7</span>
                </a>
            </li>
             notificaciones o alertar del sistema fin
        </ul>
          notificaciones fin 
    </div>-->
<!--    <div class="top-menu">
        <ul class="nav pull-right top-menu">
            <li><a id="buttonLogout" class="logout" href="#">Logout</a></li>
        </ul>
    </div>-->
<div class="top-menu" style="padding-top: 10px;">
        
         <li title="Idioma"class="dropdown nav pull-right " style="margin-right: 10px;" >
            <a style="color:white;"href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="fa fa-globe"></span> <span class="caret"></span></a>
            <ul class="dropdown-menu menuIdioma pull-right " aria-labelledby="about-us"style="min-width: 40px;">
                <li><a class="translate"id="es"href="#">Es</a></li>
                <li><a class="translate"id="en"href="#">En</a></li>

            </ul>
        </li> 
        <li class="dropdown nav pull-right" style="margin-right: 10px;" >
            <a style="color:white;"href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><%= usuario%><span class="caret"></span></a>
            <ul class="dropdown-menu pull-right" aria-labelledby="about-us" >
                <li><a id="buttonLogout"href="#">Cerrar Sesión</a></li>
                <%if(rol.equalsIgnoreCase("Cliente")){
                    out.print("<li><a id='buttonIndex'href='../../index.jsp'>Inicio</a></li>");
                    
                }%>
                <li><a id="myPerfil" href="#">Mis Datos</a></li>                   
            </ul>
        </li>
    </div>
            
</header>
<!--header fin-->