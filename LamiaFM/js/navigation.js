$(document).ready(function() {
	$.caph.focus.activate(function(nearestFocusableFinderProvider, controllerProvider) {
		// Before key down handler
		controllerProvider.addBeforeKeydownHandler(function(context, controller) {
			if (context.event.keyCode === $.caph.focus.Constant.DEFAULT.KEY_MAP.ENTER) {
				if ($(".menu_container").hasClass("active")) {
					if (!navigator.onLine) {
						hide_show_modal(true, "NET_ERROR", NET_CONNECTION_ERR);
						return false;
					}
					
				}
			}

			if (context.event.keyCode === $.caph.focus.Constant.DEFAULT.KEY_MAP.LEFT) {
				if ($(".cat_container").hasClass("active")) {
					
					if ($("div.about-active").length) {
						CAT_INDEX = $("div.about-active").parents().eq(2).index();
					}

					var catIndexModulus = 1;
					catIndexModulus = CAT_INDEX % 3;
					
					if (catIndexModulus == 0) {
						$(".category-listbox").css("margin-top", "0px");
						$(".menu_container").addClass("active");
						$(".cat_container").removeClass("active");
						$(context.currentFocusItem).find(".about-border").removeClass("about-active");
						set_setting_list();
						$.caph.focus.controllerProvider.getInstance().setDepth(0);
						PREV_DEPTH = 1;
					}
				}
			}
		});
		// After key down handler
		controllerProvider.addAfterKeydownHandler(function(context, controller) {
			if (context.event.keyCode === $.caph.focus.Constant.DEFAULT.KEY_MAP.RIGHT) {
				if ($(".menu_container").hasClass("active") && MENU_INDEX != 0) {
					//console.log('right key');
					$(".menu_container").removeClass("active");
					$(".cat_container").addClass("active");
					$.caph.focus.controllerProvider.getInstance().setDepth(1, '', false);
					PREV_DEPTH = 0;
				}
			}
		});

		// Focus handler
		controllerProvider.onFocused(function(event, originalEvent) {
			if ($(".menu_container").hasClass("active")) {
				$(event.currentTarget).addClass("menu_border");

			// When category focused
			} else if ($(".cat_container").hasClass("active")) {
				$(event.currentTarget).find(".about-border").addClass("about-active");
				
				if ($("div.about-active").length) {
					CAT_INDEX = $("div.about-active").parents().eq(2).index(); 
				}
				//console.log(CAT_INDEX);

				if (typeof originalEvent != 'undefined') {
					$(event.currentTarget).find(".category-list").addClass("zoom-in");
					setTimeout(function() {
						$(event.currentTarget).find(".category-list").removeClass("zoom-in");
					}, 500);
				}

			} else if ($(".modal_container").hasClass("active")) {
				console.log("focus on modal");

				MBUTTON_INDEX = $(event.currentTarget).index();
				$(event.currentTarget).css({"background-color": window.MODAL_ACTIVE_BUTTON_BG_COLOR, "color" : window.MODAL_ACTIVE_BUTTON_TEXT_COLOR});
				
			}			
		});
   
		// Blur handler
		controllerProvider.onBlurred(function(event, originalEvent) {
			if ($(".menu_container").hasClass("active") && (typeof originalEvent != 'undefined')) {
				$("#menuList > li").removeClass("menu_border");

			// When category blured
			} else if ($(".cat_container").hasClass("active") && (typeof originalEvent != 'undefined')) {
				$(event.currentTarget).find(".about-border").removeClass("about-active");

			} else if ($(".modal_container").hasClass("active") && (typeof originalEvent != 'undefined')) {
				console.log("Blur modal handler");
				$(event.currentTarget).css({"background-color": window.MODAL_DEACTIVE_BUTTON_BG_COLOR, "color" : window.MODAL_DEACTIVE_BUTTON_TEXT_COLOR});
			}			
		});

		// Select handler
		controllerProvider.onSelected(function(event, originalEvent) {
			console.log("navigation.js on press on select");
			if ($(".menu_container").hasClass("active")) {
				$(".menu_container").removeClass("active");
				if (MENU_INDEX == 0) {
					load_video();
					
				} else {
					
					$(".cat_container").addClass("active");
					$.caph.focus.controllerProvider.getInstance().setDepth(1, '', false);
				}

			} else if ($(".modal_container").hasClass("active")) {				
				var modalName = $(".modal_container").attr("data-modal-name");
				// When exit modal selected
				if (modalName == "EXIT") {
					if (MBUTTON_INDEX == 0) {
						hide_show_modal(false, modalName);

					} else { 
						tizen.application.getCurrentApplication().exit();
						console.log("yes selected");
					}
				
				// When retry/cancel modal selected
				} else if (modalName == "RETRY_CANCEL") {
					// For video
					if (PREV_DEPTH == 3) {
						hide_show_modal(false, modalName);
						// code will come here
						if (MBUTTON_INDEX == 0) {
							load_video();
							
						} else {
							$("#av-player").css('display','none');
							$("#video_container").hide();
							$(".progress-container").hide();
							$(".video-inner").hide();
							$(".loader").hide();
							
							$(".main-container").show();
							$(".category-box").show();
							$(".video_container").removeClass('active');
							$(".menu_container").addClass("active");
							unregister_mediakey();
							$.caph.focus.activate();
							var controllerProvider = $.caph.focus.controllerProvider.getInstance();
							controllerProvider.setDepth(0);
						}
					}
					
				// When retry/exit modal selected
				} else if (modalName == "RETRY_EXIT") {

					if (MBUTTON_INDEX == 0) {
						hide_show_modal(false, modalName);
						load_main_screen();
						
					} else {
						hide_show_modal(false, modalName);
						tizen.application.getCurrentApplication().exit();
					}
				// When net connection error modal selected
				} else if (modalName == "NET_ERROR") {				
					if (MBUTTON_INDEX == 0) {						
						hide_show_modal(false, modalName);
					}
				}
			} else if ($(".cat_container").hasClass("active")) {
				set_setting_content();
			}	 
		});			
	});	
});