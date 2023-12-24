function set_modal_color(name)
{
	// $('.mod_bg_color').css('background', 'url("images/exit.png")');	
	if (name == "EXIT") {
		$(".mod_text_color").css("color", MODAL_TEXT_COLOR).html(APP_EXIT_MSG);		

	} else {
		$(".mod_text_color").css("color", MODAL_TEXT_COLOR)
	}

	$(".mod_button_sel").css({"background-color": MODAL_ACTIVE_BUTTON_BG_COLOR, "color" : MODAL_ACTIVE_BUTTON_TEXT_COLOR});
}		
		
function hide_show_modal(action, name, message)
{
	var modalName = $(".modal_container").attr("data-modal-name");
	
	if (action == true && !modalName) {
		set_modal_color(name);

		// Set previous depth before open modal box
		if ($(".menu_container").hasClass("active")) {
			PREV_DEPTH = 0;
			
		} else if ($(".cat_container").hasClass("active")) {
			PREV_DEPTH = 1;
			
		} else if ($(".video_container").hasClass("active")) {
			PREV_DEPTH = 3;
		}

		// Remove active class from all container and add to modal box
		$(".menu_container, .cat_container, .video_container, .about_desc_container").removeClass("active");
		$(".modal_container").addClass("active");

		if (name == "EXIT") {
			$(".exit_modal").addClass("exit_modal_show");	
			$('.mod_button_un_sel').text("YES");

		} else if (name == "RETRY_CANCEL" || name == "RETRY_EXIT") {
			$(".retry_modal").addClass("popup_new_box");
			$(".mod_text_color").html(message);
			$(".mod_name").html(APP_NAME);
			
			if (name == "RETRY_CANCEL") {
				$('.mod_button_un_sel').text("CANCEL");
			} else {
				$('.mod_button_un_sel').text("EXIT");
			}
		} else if (name == "NET_ERROR") {
			$(".net_error_modal").addClass("popup_new_box");
			$(".mod_name").html(APP_NAME);
			$(".mod_text_color").html(message);	
		}
		
		$(".modal_container").attr("data-modal-name", name);
		
		setTimeout(function() {   
			$.caph.focus.activate();
			var controllerProvider = $.caph.focus.controllerProvider.getInstance();
			controllerProvider.setDepth(4);
			controllerProvider.focus(controllerProvider.$$getInitialFocusItem());

			$(".mod_button_un_sel").css({"background-color": MODAL_DEACTIVE_BUTTON_BG_COLOR, "color" : MODAL_DEACTIVE_BUTTON_TEXT_COLOR});	
		}, 500);  // Don't change this value else modal focus will not work 

	} else if (action == false) {
		if (name == "EXIT") {
			$(".exit_modal").removeClass("exit_modal_show");

		} else if (name == "RETRY_CANCEL" || name == "RETRY_EXIT") {
			$(".retry_modal").removeClass("popup_new_box");

		} else if (name == "NET_ERROR") {
			$(".net_error_modal").removeClass("popup_new_box");
		}
		
		$(".modal_container").removeClass("active");
		$(".modal_container").attr("data-modal-name", "");
		
		$.caph.focus.activate();
		var controllerProvider = $.caph.focus.controllerProvider.getInstance();

		// Set focus on previous active container
		if (PREV_DEPTH == 0) {
			$(".menu_container").addClass("active");

		} else if (PREV_DEPTH == 1) {
			$(".cat_container").addClass("active");

		} else if (PREV_DEPTH == 2) {
			$(".about_desc_container").addClass("active");
			
		} else if (PREV_DEPTH == 3) {
			$(".video_container").addClass("active");
		}

		controllerProvider.setDepth(PREV_DEPTH);
	}	
}