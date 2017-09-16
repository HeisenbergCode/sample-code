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

   });
});

/*$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});*/

/* TIMER */
// var timeend= new Date();
		// IE и FF по разному отрабатывают getYear()
		/*timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);*/
		// timeend = new Date(2017,7,01,08,00);
	/*Timer*/
	// function time() {
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
//     today = new Date();
//     today = Math.floor((timeend-today)/1000);
//     tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
//     tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
//     thour=today%24; today=Math.floor(today/24);
//     timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
//     document.getElementById('days').innerHTML = today;
//     document.getElementById('hours').innerHTML = thour;
//     document.getElementById('minutes').innerHTML = tmin;
//     document.getElementById('seconds').innerHTML = tsec;
//     /*document.getElementById('t').innerHTML=timestr;*/
//     window.setTimeout("time()",1000);
// }
/* TIMER END */

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
