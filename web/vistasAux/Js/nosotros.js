jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });



  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code

});




// Traduccion a ingles

function Traduccion() {


  // Traduccion de la barra de Navegacion
document.getElementById('navInicio').innerHTML= "Home";
document.getElementById('navNosotros').innerHTML= "About Us";
document.getElementById('navServicios').innerHTML= "Services";
document.getElementById('navPortafolio').innerHTML= "List";
document.getElementById('navContacto').innerHTML= "Contac Us";
document.getElementById('navIngresar').innerHTML= "Log In";

document.getElementById('navInicieSesion').innerHTML= "Log In";
document.getElementById('navRegistrese').innerHTML= "Register";
document.getElementById('navOlvideContraseña').innerHTML= "Forgot Password";

//Aqui finaliza la traduccion del menu de Navegacion

//Aqui inicia la traduccion del home o inicio

document.getElementById('IniBienvenido').innerHTML= "Welcome To Luna Textil";
document.getElementById('iniSlogan').innerHTML= "Dream fabrics a click away";
document.getElementById('btnEmpecemos').innerHTML= "get started";

//Aqui finaliza la traduccion del home o inicio

//Aqui inicia la traduccion de la seccion quienes somos
document.getElementById('Quienes').innerHTML= "About Us";
document.getElementById('Quienes1').innerHTML= "Chávez Gómez S.A., is a limited company founded in 1973 through the warehouses \"Luna Textil\" and \"Marfil\" , dedicated to the distribution of national and imported textiles, with a wide range of decorative fabrics for homes and offices.";

document.getElementById('Cantidad').innerHTML= "quantity";
document.getElementById('Cantidad1').innerHTML= "We offer a wide range and variety of fabrics of all types just thinking about your needs";

document.getElementById('ColorImagen').innerHTML= "Color - Image";
document.getElementById('ColorImagen1').innerHTML= "We offer an important range of colors thinking about the design and style most suitable for your designs.";

document.getElementById('Negocio').innerHTML= "busines";
document.getElementById('Negocio1').innerHTML= "Thinking about the future, we implemented an online shopping system only so you can access our services from the comfort of your home or employment.";

//Aqui finaliza la traduccion de la seccion quienes somos

//Aqui inicia la traduccion de la seccion mision y vision

document.getElementById('MVtitulo').innerHTML= "MISSION AND VISION";
document.getElementById('MVtitulo1').innerHTML= "In textile moon we are very clear about our present and our future";

document.getElementById('Mision').innerHTML= "Mission";
document.getElementById('Mision1').innerHTML= "Our fundamental mission is the friendly service, effective service and fast service to our clients, who have distinguished us during almost 40 years of permanence in the textile trade of 7 de agosto, Galleries, and Cedritos in Bogota.";

document.getElementById('Vision').innerHTML= "Vision";
document.getElementById('Vision1').innerHTML= "The vision of the company is to keep updated on the latest trends in fashion, with a wide range of fabrics that meet the needs of homes, hotels and offices.";

//Aqui finaliza la traduccion de la seccion mision y vision

//Aqui inicia la traduccion de la seccion servicios

document.getElementById('Servicios').innerHTML= "SERVICES";
document.getElementById('Servicios1').innerHTML= "In textile moon we offer you different services thinking only of your comfort and satisfaction";

document.getElementById('Cotizar').innerHTML= "Quote";
document.getElementById('Cotizar1').innerHTML= "We offer you the opportunity to quote our products in order that without having to physically move to our warehouse you can know the price of our products, using only a computer.";

document.getElementById('Comprar').innerHTML= "purchase";
document.getElementById('Comprar1').innerHTML= "We offer a complete catalog of different types and characteristics of fabrics, offering a door-to-door delivery service for your convenience, we offer a record in our system which will allow you to see a history of purchases, register guarantees among more options";

document.getElementById('Personalizada').innerHTML= "Customized";
document.getElementById('Personalizada1').innerHTML= "Te ofrecemos la oportunidad de cotizar nuestros productos con el fin de que sin necesidad de desplazarte fisicamente hasta nuestro almacen puedas sabesel precion de nuestros productos, utilizando unicamente un computador.";

//Aqui finaliza la traduccion de la seccion servicios

//Aqui inicia la traduccion de la seccion Portafolio

document.getElementById('Portafolio').innerHTML= "List";
document.getElementById('Protafolio1').innerHTML= "In the LUNA TEXTIL warehouse we have the distribution, wholesale and retail sales nationwide.";



//Aqui finaliza la traduccion de la seccion Portafolio

//Aqui inicia la traduccion de la seccion contacto
document.getElementById('Contacto').innerHTML= "Contact";
document.getElementById('Contacto1').innerHTML= "Next we display all our contact information so that in case you need to communicate with us you can do it with the greatest ease";

//Traduccion del Formulario

document.getElementById('BotonEnviar').innerHTML= "Send Message";

document.getElementsByName('name')[0].placeholder='Name';
document.getElementsByName('email')[0].placeholder='Email';
document.getElementsByName('subject')[0].placeholder='Subject';
document.getElementsByName('message')[0].placeholder='Message';

document.getElementsByName('name')[0].dataset.msg='Please enter at least 4 characters';
document.getElementsByName('email')[0].dataset.msg='Please enter a valid email address';
document.getElementsByName('subject')[0].dataset.msg='Please enter the reason for your message';
document.getElementsByName('message')[0].dataset.msg='Please write something for us';

//Aqui finaliza la traduccion de la seccion contacto

//Aqui inicia la traduccion del footer

document.getElementById('Copyright').innerHTML= "Copyright SiComT3. All rights reserved";
document.getElementById('Credits').innerHTML= "Designed by Gaes !8!";


}
