$(function () {
	AOS.init();

	$('[data-fancybox]').fancybox({
		loop: true,
	});

	$("body").on('click', '[href*="#"]', function (e) {
		var fixedOffset = 0;
		if ($(document).width() <= 600) {
			fixedOffset = 200;
		}
		if ($(document).width() <= 440) {
			fixedOffset = 300;
		}
		if ($(document).width() <= 320) {
			fixedOffset = 400;
		}
		$('html,body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset }, 1000);
		e.preventDefault();
	});

	function modal() {
		$(".open__modal").click(function () {
			$.fancybox.open($(".modal"), {
				infobar: false,
				touch: false,
			})
		})

		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function (e) {
					$('.file img').attr('src', e.target.result).css("display", "block");
				};
				reader.readAsDataURL(input.files[0]);
			}
		}

		$(".modal .input__file").on("change", function () {
			readURL(this);
		});

		$(".modal form").submit(function (e) {
			e.preventDefault()
			$(this).removeClass("active");
			$(".send__window").addClass("active");
			$(".modal .name__input").val("")
			$(".modal .modal__area").val("")
			$(".modal .file img").attr("src", "").css("display", "none")
			delayClose()
		})
		function delayClose() {
			setTimeout(function () {
				$(".modal form").addClass("active");
				$(".send__window").removeClass("active");
				$(".modal .fancybox-close-small").click();
			}, 5000);
		}
	}

	// modal()
})
