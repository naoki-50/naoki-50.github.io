$(function(){
    $("#menu-icon").hover(
      function(){
          $(this).animate({
              "font-size":40
          },200);

    },function(){
        $(this).animate({
            "font-size":35
        },200);
    })
    $("#twitter").hover(
      function(){
          $(this).animate({
              "font-size":30
          },200);

    },function(){
        $(this).animate({
            "font-size":25
        },200);
    })
    //menuを開く動作
    $("#menu-icon").click(function(){
        $("#white").css("display","block");
        $("#close").fadeIn(1000);
        $("#menu-text").animate({
            "right":0
        },500);
        $("#menu-icon").fadeOut(200);
    })

    //menuを閉じる動作
    $("#close").click(function(){
        $("#menu-text").animate({
            "right":"-500px"
        },500);
        $("#white").fadeOut();
        $("#close").fadeOut();
        $("#menu-icon").fadeIn();
    })

    $(function(){
        $(window).load(function(){
            $.when(
                $("#loading").fadeOut(2000),
                
            ).done(function(){
                $("#wrap").fadeIn(1000),
                $("body").css("background-color","white")
            });
        });
        
    })

    $.fn.skill = function() {

        mSkill = this;
      $(window).on('scroll', function() { // las animaciones se dispararan cuando el recuadro este visible en el viewport
        
        mSkill.find('.skillBar').each(function() {
    
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.90 &&!$(this).hasClass("sk-fired")) {
                //una vez que cada skill bar esta en el viewport
                
                $(this).addClass('sk-fired'); //agregamos una clase como bandera para evitar que se vuelva a reproducir la animacion
                var defaultPercentage = "50%";
                var color = $(this).attr('skill-color');
                var defaultColor = "white";
                //animamos el ancho de cada barra
                if($(this).attr('skill-percentage')) {
                    $(this).width($(this).attr('skill-percentage'));
                } else {
                    $(this).width(defaultPercentage);
                }
    
                //seteamos el color
    
                if(color) {
                    $(this).css('background-color', color);
                } else {
                    $(this).css('background-color',defaultColor);
                }
    
                //buscamos las imagenes para animarlas
                $(this).parent().find(".skill-image").each(function() {
                    var imagen = $(this);
                    setInterval(function() {
    
                        imagen.show().addClass("animated").addClass("bounceIn");
                    }, 2000);
                    
                });
                }
            });
    
    }	);
    
         return mSkill;
    }
    
    $(document).ready(function() {
                $(".habilidades").skill();
            });
})