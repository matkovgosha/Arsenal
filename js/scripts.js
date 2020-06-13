$(document).ready(function() {

	// Плавный переход по ссылкам якорям и добавление подчеркивания
   $('a[href^="#"]').click(function () {
    	elementClick = $(this).attr("href");
    	destination = $(elementClick).offset().top;
    	$('html').animate( { scrollTop: destination }, 700 );

    	$('.js-menu-link').each(function(){
    		$(this).removeClass("is-active");
    	});

    	$(this).addClass("is-active");
   });



   	//Логика слайдера
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      direction: 'vertical',
      spaceBetween: 16,
      slidesPerView: 3,
      loop: true,
      freeMode: true,
      loopedSlides: 7, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 7, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });




 });
