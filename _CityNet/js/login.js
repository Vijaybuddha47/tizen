window.onload = function () {
	TAB_INDEX = -1;
	var userName = localStorage.getItem('username'),
		password = localStorage.getItem('password'),
		lastFocused = 1;

	window.SN = SpatialNavigation;
	SN.init();

	$("span#modal_container").load("modal.html");

	SN.add({
		id: 'loginPage',
		selector: '#loginPage .focusable',
		defaultElement: "#username",
		enterTo: 'last-focused',
		restrict: 'self-only'
	});

	SN.makeFocusable();
	SN.focus('loginPage');

	register_number_keys();

	$(window).keydown(function (evt) {
		var modalName = $(".modal_container").attr("data-modal-name");
		switch (evt.keyCode) {
			case 13:	// Ok
				if (!$(".modal_container").hasClass("active")) {
					// on login button click
					if (lastFocused == 3) {
						console.log('login button ok');
						if (document.getElementById('username').value == "" || document.getElementById('password').value == "") {
							hideShowError("Por favor ingrese sus credenciales.");

						} else {
							loginIntoApp(page = "login");
						}

						// on password click
					} else if (lastFocused == 2) {
						$("#username, #loginButton").blur().removeClass("active");
						$("#password").focus().addClass("active");
						lastFocused = 2;

						// on username click
					} else if (lastFocused == 1) {
						$("#password, #loginButton").blur().removeClass("active");
						$("#username").focus().addClass("active");
						lastFocused = 1;

					}

				} else if ($(".modal_container").hasClass("active")) {
					$(".modal_container").removeClass("active");
				}

				break;

			case 10009:	// Return key

				// Return from popup to channel list
				if ($(".modal_container").hasClass("active")) {
					// When exit modal selected
					if (modalName == "EXIT") {
						hide_show_modal(false, modalName);
						$(".modal_container").removeClass("active");
					}

				} else if (($("#username").is(":focus") || $("#password").is(":focus")) || $("#loginButton").is(":focus")) {
					console.log('exit popup');
					tizen.application.getCurrentApplication().exit();
					// hide_show_modal(true, "EXIT", APP_EXIT_MSG);
				}
				break;

			case 37: // LEFT arrow
				console.log("left key");
				if ($("#username").is(":focus") || $("#password").is(":focus")) {
					var textEntered = $.trim($(':focus').val());
					if (textEntered) controlLeftArrowKeys();
				}
				break;

			case 39: // RIGHT arrow
				console.log("right key");
				if ($("#username").is(":focus") || $("#password").is(":focus")) {
					var textEntered = $.trim($(':focus').val());
					var input = document.getElementById($(":focus").attr("id"));
					var currentpos = input.selectionStart;
					if (textEntered && input.value.length > currentpos) controlrightArrowKeys();
				}
				break;

			case 40:	//Down key
				if (!$(".modal_container").hasClass("active")) {
					if (!$("#username").hasClass("active") && lastFocused == 1) {
						$("#username").blur().removeClass("active");
						$("#password").focus().addClass("active");
						lastFocused = 2;

					} else if (!$("#password").hasClass("active") && lastFocused == 2) {
						$("#password").blur().removeClass("active");
						$("#loginButton").focus().addClass("active");
						lastFocused = 3;
					}
				}
				break;

			case 38:	//Up key
				if (!$(".modal_container").hasClass("active")) {
					if ($("#loginButton").hasClass("active") && lastFocused == 3) {
						$("#loginButton").blur().removeClass("active");
						$("#password").focus().addClass("active");
						lastFocused = 2;

					} else if (!$("#password").hasClass("active") && lastFocused == 2) {
						$("#password").blur().removeClass("active");
						$("#username").focus().addClass("active");
						lastFocused = 1;
					}
				}
				break;

			case 65385: // cancel/return from keyboard
				$("#username, #password").removeClass("active");
				break;

			case 65376: // ok from keyboard
				$("#username, #password").removeClass("active");
				break;

			default:
				console.log("Key code : " + evt.keyCode);
				break;
		}
	});
};

function hideShowError(text) {
	clearInterval(HIDE_SHOW_ERROR);
	if ($(".error_overlay").css("display") == "none") $(".error_overlay").text(text).css({ "display": "inline-table" });

	HIDE_SHOW_ERROR = setTimeout(function () {
		$(".error_overlay").css({ "display": "none" });
	}, 10000);
}