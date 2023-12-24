$(document).keydown(function(e){
	if (e.keyCode == 38 || e.keyCode == 40) {
		//Setting description scroll manage here
		if ($(".about_desc_container").hasClass("active")) {
			// Up key
			if (e.keyCode == 38) {
				SETTING_DESC_SCROLLED = SETTING_DESC_SCROLLED - SETTING_SCROLLED_UP_DOWN_HEIGHT;

				if (SETTING_DESC_SCROLLED > -1) {
					$(".about-scroll").scrollTop(SETTING_DESC_SCROLLED);
				} else {
					SETTING_DESC_SCROLLED = 0;
				}
			// Down Key
			} else if (e.keyCode == 40) {
				SETTING_DESC_SCROLLED = SETTING_DESC_SCROLLED + SETTING_SCROLLED_UP_DOWN_HEIGHT;

				if ($(".about-scroll")[0].scrollHeight > SETTING_DESC_SCROLLED) {
					$(".about-scroll").scrollTop(SETTING_DESC_SCROLLED);
				} else {
					SETTING_DESC_SCROLLED = SETTING_DESC_SCROLLED - SETTING_SCROLLED_UP_DOWN_HEIGHT;
				}
			}
		// Scrolling for category and sub category
		} else if ($(".cat_container").hasClass("active") || $(".sub_cat_container").hasClass("active")) {
			var index = 0;
			if ($(".cat_container").hasClass("active")) index = CAT_INDEX;
	
			// Up key
			if (e.keyCode == 38) {
				if (index > 2) {
					var topPosition = $('.category-listbox li:nth-child('+index+')').position();
					setPosition = "-" + parseInt(parseInt(topPosition.top) + parseInt($('.category-listbox li:nth-child(1)').position().top)) + 'px';
					$('.category-listbox').css({'margin-top' : setPosition});
					
				} else {
					$(".category-listbox").css("margin-top", "0px");
				}

			// Down key
			} else if (e.keyCode == 40) {
				setPosition = 0;
				// Category scroll
				if (index > 5) {
					var bottomPosition = $('.category-listbox li:nth-child('+(index + 1)+')').position();
					setPosition = "-" + parseInt(parseInt(bottomPosition.top) - parseInt($('.category-listbox li:nth-child(4)').position().top)) + 'px';
					$('.category-listbox').css({'margin-top' : setPosition});
				}
			}
		}
	}
});