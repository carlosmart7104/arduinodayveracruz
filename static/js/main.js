var smallSizeNavBackground = false;

function scroll_to(el){
	if (el == undefined) {
		//console.log($('.navbar').offset().top);
		if ($('.navbar').offset().top < $('#inicio').offset().top + $('#inicio').height() - 70) {
			el = '#ponentes';
		} else if ($('.navbar').offset().top < $('#ponentes').offset().top + $('#ponentes').height() - 70) {
			el = '#programa';
		} else if ($('.navbar').offset().top < $('#programa').offset().top + $('#programa').height() - 70) {
			el = '#patrocinadores';
		} else if ($('.navbar').offset().top < $('#patrocinadores').offset().top + $('#patrocinadores').height() - 70) {
			el = '#lugar';
		} else if ($('.navbar').offset().top < $('#lugar').offset().top + $('#lugar').height() - 70) {
			el = '#nosotros';
		} else {
			el = '#inicio';
		}
	}
	if ($(el).offset()) {
		$('html, body').animate({
			scrollTop: $(el).offset().top - 70
		}, 500);
	} else {
		console.log('El elemento referenciado no existe o no tiene una propiedad offset');
	}
}

function backgroundNavbar() {
	var scrollTop = $(document).scrollTop();
	var maxLimit = 200;

	$('.navbar').css({ backgroundColor: 'rgba(34, 34, 34, 0.90)' });

	if (scrollTop < maxLimit && !smallSizeNavBackground) {
		var transparencia = scrollTop / maxLimit * 0.90;
		$('.navbar').css({ backgroundColor: 'rgba(34, 34, 34, ' + transparencia + ')' });
	}
}

$(document).ready(()=>{

	backgroundNavbar();

	$(document).on('scroll', backgroundNavbar);

	$('.navbar-nav>li>a').on('click', () => {
	    $('.navbar-collapse').collapse('hide');
	});

	$('.navbar-collapse').on('show.bs.collapse', () => {
		smallSizeNavBackground = true;
		backgroundNavbar();
	});

	$('.navbar-collapse').on('hide.bs.collapse', () => {
		smallSizeNavBackground = false;
	});

});

particlesJS.load('inicio-background', 'js/particles.json');

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
    }, 0);
});

setInterval(() => { $('#inicio-background').height($('#inicio').height()); }, 0);