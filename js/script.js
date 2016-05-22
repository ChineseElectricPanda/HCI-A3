var fadeTime=100;
var currentMode='main';

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

	//Set initial overlay to main
	$('.icon-container').hide();
	$('.icon-container.main').show();
	
	//Click listeners for menu bar items
	$('.menu-bar-item').click(function(){
		if($(this).attr('data-item')==currentMode){
			return;
		}
		currentMode=$(this).data('item');
		$('.menu-bar-item').removeClass('active');
		$('.menu-bar-item[data-item="'+currentMode+'"]').addClass('active');
		$('.icon-container').fadeOut(fadeTime);
		console.log(currentMode);
		setTimeout(function(){
			$('.icon-container.'+currentMode).fadeIn(fadeTime);
		},fadeTime*2);

		alignArrow();
	});
    //Toggling lights
    $('.light-icon').click(function(){
        $(this).toggleClass('on').toggleClass('off');
    });
	//Toggling room overview detail
	$('.room-overview').click(function(){
		$(this).find('.room-overview-detail').toggleClass('hidden');
		centerElements();
	});
	//Toggling switch
	$('.toggle-switch').click(function(){
		$(this).toggleClass('off');
	});

	//Notifications button
	$('#notifications-button,.notifications-container').click(function(event){
		$('.notifications-container').toggleClass('hidden');
		$(this).removeClass('badge');
		event.stopPropagation();
	});
	$('body').not('#notifications-button,.notification').click(function(){
		$('.notifications-container').addClass('hidden');
	})
	centerElements();
	alignArrow();

	setTimeout(function(){
		$(window).resize();
	},100);
});

function centerElements(){
	$('.center-align').each(function(i,el){
		$(el).css({
			"margin-left" :(-($(el).outerWidth()/2)),
			"margin-top":(-($(el).outerHeight()/2))
		});
	});
}

function alignArrow(){
	console.log('.icon-container.'+currentMode);
	$('.menu-pointer').css({
		'left': $('.menu-bar-item[data-item="'+currentMode+'"]').position().left,
		'top': -$('.menu-bar-item[data-item="'+currentMode+'"]').height()-$('.menu-pointer').height()
	});
}

