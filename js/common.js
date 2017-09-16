
$(function() {



 $(document).ready(function(){


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".form").submit(function(e){

    e.preventDefault();
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $(this).serialize()
		}).done(function(result) {
      $.magnificPopup.close();
      $.magnificPopup.open({
        type: 'inline',
        items: {
          src: '#thanks',
        },
        preloader: 0,
        mainClass: 'thanks-popup',
      });

			$(this).find("input").val("");
			$(".form").trigger("reset");

		})
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {

    });
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
    $("body").on("click", "a.navig", function(){
      var idtop = $($(this).attr("href")).offset().top;
      $('html,body').animate({scrollTop: idtop}, 1500);
      return false;
    });

    $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      //focus: '#username',
      modal: true
    });

    $('.popup1').magnificPopup({
      type: 'inline',
      preloader: false,

      modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });

    // goole
    $('.markers').click(function(event){
      //event.preventDefault();
      console.log(google.maps.GLatLng);
      var dataPoint = $(this).attr('data-point').split(',');
      console.log();
      map.setCenter(new google.maps.LatLng(dataPoint[0], dataPoint[1]));
      map.setZoom(13);

    });

   });
});


/* SLICK SLIDER */

$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
});

/* POPUP */


// 	//conf-politic
	$('.section-17 .copy').click(function(){
		$('.section-17 .pol-conf').show();
	});

	$('.section-17 .close').click(function(){
		$('.section-17 .pol-conf').hide();
	});

	/*  Input phone mask */
	$("input[name='uphone").inputmask({"mask": "+7(999) 999-9999"});

/* Scroll to anchor */
