//Sizing and repositioning for overlay elements on top of map image on resize
$(window).load(function(){
    $(window).resize(function(){
        $('.icon-container').css('position','relative');
        $('.icon-container').css('width',$('#map-image').width());
        $('.icon-container').css('height',$('#map-image').height());
        $('.icon-container').css('top',-$('#map-image').height());
        $('.icon-container').css('margin-left',$('#map-image').css('marginLeft'));
        $('.icon-container').css('margin-right',$('#map-image').css('marginRight'));
        $('.img-container').height($('#map-image').height());
    });
    $(window).resize();
    $(window).resize();

    //Toggling lights
    $('.light-icon').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).addClass('off');
        }else{
            $(this).removeClass('off');
            $(this).addClass('on');
        }
    });
});

