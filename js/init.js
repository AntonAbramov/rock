$(document).ready(function () {
	slider();
	fancy();

});

$(window).resize(function () {

});

$(window).load(function () {

});


var popup = function () {
	$(".overlay").on("click", function () {
		$(this).fadeOut();
		$('.popup').fadeOut();
	})
	$(".popup").find(".close").on("click", function () {
		$(".overlay").fadeOut();
		$('.popup').fadeOut();
	});

}
var tabs = function () {
	var tab = $(".tabs");
	if (tab.length) {
		tab.each(function () {
			var idx = $(this).find(".tab-nav .active").index();
			$(this).find('.tab-content .tab').hide().eq(idx).show();
		});


		tab.find(".tab-nav a").click(function (event) {
			event.preventDefault();

			if ($(this).hasClass("active")) {
				return false;
			} else {
				$(this).parents('.tabs').find(".tab-nav a").removeClass('active');
				var idx = $(this).addClass("active").index();
				$(this).parents('.tabs').find(".tab-content .tab").hide();
				$(this).parents('.tabs').find(".tab-content .tab").eq(idx).show();
			}
		});
	}
}


var slider = function () {
	if ($('.slider').length) {
		$('.slider').slidesjs({
			//	width: 940,
			height: 400
		});
	}
}

var fancy = function () {
	if ($(".fancybox").length) {
		$(".fancybox").fancybox({
			helpers: {
				title: {
					type: 'outside'
				}
			}
		});
	}

	if($(".various").length){
		$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 700,
			fitToView	: false,
			width		: '80%',
			height		: '80%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}
}