window.onload = function () {
	$('title').text(APP_NAME);
	$('meta[name=description]').attr('content', APP_NAME);

	// TODO:: Do your initialization job
	$("body").removeAttr("style");
	$(".splash-screen").show();

	// Load html files
	$("span#modal_container").load("modal.html");
	$(".splash-screen").css({ 'position': 'absolute', 'z-index': '100' });

	setTimeout(function () { load_main_screen(); }, 5000);

	document.addEventListener('visibilitychange', function () {
		if (document.hidden) {
			console.log("App in background");
			if (webapis.avplay.getState() != "NONE") {
				webapis.tvinfo.registerInAppCaptionControl(false);
				webapis.avplay.suspend(); //Mandatory. If you use avplay, you should call this method.
			}
		} else {
			console.log("App in forground");
			$(".video-inner").hide();
			webapis.tvinfo.registerInAppCaptionControl(true);
			webapis.tvinfo.showCaption(false);
			webapis.avplay.restore();
		}
	});
};

// Remote key Events handle here
document.addEventListener('keydown', function (e) {
	var modalName = $(".modal_container").attr("data-modal-name");
	if ($(".menu_container").hasClass("active")) {
		var leftNav = $("div.left_navigation").find('ul');
		MENU_INDEX = $(leftNav).children(".menu_border").index();

		if (e.keyCode == 38 || e.keyCode == 40) {
			if (MENU_INDEX == 0) {
				set_linear_list();
			} else {
				set_setting_list();
			}
		}
	}

	switch (e.keyCode) {
		case 13:	// Ok
			if ($("#av-player").css('display') == 'block') {
				if (webapis.avplay.getState() == "PAUSED") {
					$(".pause-icon").hide();
					$(".video-title").text('');
					if (webapis.avplay.getState() == "PAUSED") {
						var currentTime = webapis.avplay.getCurrentTime();
						var forwardTime = sessionStorage.video_forward_time;
						var resultant = parseInt(forwardTime) - parseInt(currentTime);
						var resultantTime = Math.abs(resultant);

						if (sessionStorage.FWD_RWD_key_press == 1 && DATA_OBJ[0]['stream_type'] == "M") {
							$(".video-inner").show();
							$(".circle_loader").addClass('circle-loader-middle');

							if (resultant > 0) {
								resultantTime = parseInt(resultantTime - 5000);
								jumpForwardVideo(resultantTime);
							} else {
								resultantTime = parseInt(resultantTime + 5000);
								if (currentTime - resultantTime < 0) resultantTime = currentTime;
								jumpBackwardVideo(resultantTime);
							}
							sessionStorage.FWD_RWD_key_press = 0;
						} else {
							if (webapis.avplay.getState() == "PAUSED") {
								try {
									playVideo();
								} catch (e) {
									playVideo();
									console.log("error in play video: " + e);
								}
							} else if (webapis.avplay.getState() == "PLAYING") {
								$(".pause-icon").show();
								pauseVideo();
								webapis.avplay.pause();
							}
						}
					}

				} else if (webapis.avplay.getState() == "PLAYING") {
					$(".pause-icon").show();
					pauseVideo();
					webapis.avplay.pause();
				}
			}
			break;

		case 415:	// Play
			if ($(".video_container").hasClass("active")) {
				$(".pause-icon").hide();
				$(".video-title").text('');

				if (webapis.avplay.getState() == "PAUSED") {
					var currentTime = webapis.avplay.getCurrentTime();
					var forwardTime = sessionStorage.video_forward_time;
					var resultant = parseInt(forwardTime) - parseInt(currentTime);
					var resultantTime = Math.abs(resultant);

					if (sessionStorage.FWD_RWD_key_press == 1 && DATA_OBJ[0]['stream_type'] == "M") {
						sessionStorage.FWD_RWD_key_press = 0;
						$(".video-inner").show();
						$(".circle_loader").addClass('circle-loader-middle');

						if (resultant > 0) {
							resultantTime = parseInt(resultantTime); //parseInt(resultantTime - 5000);
							jumpForwardVideo(resultantTime);
						} else {
							resultantTime = parseInt(resultantTime); //parseInt(resultantTime + 5000);
							if (currentTime - resultantTime < 0) resultantTime = currentTime;
							jumpBackwardVideo(resultantTime);
						}

					} else {
						if (webapis.avplay.getState() == "PAUSED") {
							try {
								playVideo();
							} catch (e) {
								playVideo();
								console.log("error in play video: " + e);
							}
						} else if (webapis.avplay.getState() == "PLAYING") {
							try {
								//$(".pause-icon").show();
								pauseVideo();
								//webapis.avplay.pause();
							} catch (e) {
								pauseVideo();
								console.log("error in play video: " + e);
							}
						}
					}
				}
			}

			break;

		case 19: // Pause 102
			if ($(".video_container").hasClass("active")) {
				if (webapis.avplay.getState() == "PLAYING" && $('#av-player').is(':visible')) {
					pauseVideo();
				}
			}

			break;

		case 412:	// Rewind 82
			if ($("#av-player").css('display') == 'block' && DATA_OBJ[0]['stream_type'] == "M") {
				if (sessionStorage.video_forward_time > 0 && webapis.avplay.getDuration() > 0) {
					currentTime = sessionStorage.video_forward_time;
					sessionStorage.FWD_RWD_key_press = 1;
					var diffTime = currentTime - MEDIA_REWIND_INTERVAL;

					if (diffTime <= 0)
						backwardInterval = currentTime;
					else
						backwardInterval = MEDIA_REWIND_INTERVAL;

					var ctime = parseInt(currentTime) - parseInt(backwardInterval);
					if (Math.floor(ctime / 3600000) >= 1) {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor(ctime / 3600000)) + ":" + min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					} else {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					}

					show_hide_progress_bar_after_specific_time();

					webapis.avplay.pause();
					if (webapis.avplay.getState() == "PAUSED") $(".pause-icon").show();

					sessionStorage.video_forward_time = ctime;

					var duration = webapis.avplay.getDuration();
					var time = ((Math.floor(ctime / 3600000) * 3600) + Math.floor((ctime / 60000) % 60) * 60 + (Math.floor((ctime / 1000) % 60)));
					var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
					var percentage_Completed = (time / totalTime);

					progress_bar(Math.round(percentage_Completed * (100)));
				}
			}

			break;

		case 417:	// FastForward
			if ($("#av-player").css('display') == 'block' && DATA_OBJ[0]['stream_type'] == "M") {
				var duration = webapis.avplay.getDuration();
				if (sessionStorage.video_forward_time < duration) {

					currentTime = sessionStorage.video_forward_time;
					sessionStorage.FWD_RWD_key_press = 1;
					var diffTime = duration - currentTime;
					if (diffTime <= MEDIA_FORWARD_INTERVAL)
						forwardInterval = diffTime;
					else
						forwardInterval = MEDIA_FORWARD_INTERVAL;

					var ctime = parseInt(currentTime) + parseInt(forwardInterval);
					if (Math.floor(ctime / 3600000) >= 1) {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor(ctime / 3600000)) + ":" + min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					} else {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					}

					show_hide_progress_bar_after_specific_time();

					webapis.avplay.pause();
					if (webapis.avplay.getState() == "PAUSED") $(".pause-icon").show();

					sessionStorage.video_forward_time = ctime;

					var time = ((Math.floor(ctime / 3600000) * 3600) + Math.floor((ctime / 60000) % 60) * 60 + (Math.floor((ctime / 1000) % 60)));
					var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
					var percentage_Completed = (time / totalTime);

					progress_bar(Math.round(percentage_Completed * (100)));
				}
			}

			break;

		case 415: // Play 100
			if ($(".video_container").hasClass("active")) {
				if (webapis.avplay.getState() == "PAUSED" && $('#av-player').is(':visible')) {
					playVideo();
				}
			}
			break;

		// Return key
		case 10009:
			if ($(".video_container").hasClass("active")) {
				closeVideo();

			} else if ($(".modal_container").hasClass("active")) {
				// When exit modal selected
				if (modalName == "EXIT") {
					hide_show_modal(false, modalName);
				}

			} else if ($(".about_desc_container").hasClass("active")) {
				$(".about-desc").html("");
				$("div.about_desc_container").removeClass("about_desc_container").addClass("cat_container");
				set_setting_list(CAT_INDEX);

			} else if ($(".cat_container").hasClass("active")) {
				$(".category-listbox").css("margin-top", "0px");
				$(".menu_container").addClass("active");
				$(".cat_container").removeClass("active");
				$(".about-border").removeClass("about-active");
				set_setting_list();
				$.caph.focus.controllerProvider.getInstance().setDepth(0);
				PREV_DEPTH = 1;

			} else if ($(".menu_container").hasClass("active")) {
				hide_show_modal(true, "EXIT");
			}
			break;

		case 37:	// LEFT arrow
			if ($("#av-player").css('display') == 'block' && DATA_OBJ[0]['stream_type'] == "M") {
				if (sessionStorage.video_forward_time > 0 && webapis.avplay.getDuration() > 0) {
					currentTime = sessionStorage.video_forward_time;
					sessionStorage.FWD_RWD_key_press = 1;
					var diffTime = currentTime - MEDIA_REWIND_INTERVAL;

					if (diffTime <= 0)
						backwardInterval = currentTime;
					else
						backwardInterval = MEDIA_REWIND_INTERVAL;

					var ctime = parseInt(currentTime) - parseInt(backwardInterval);
					if (Math.floor(ctime / 3600000) >= 1) {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor(ctime / 3600000)) + ":" + min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					} else {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					}

					show_hide_progress_bar_after_specific_time();

					webapis.avplay.pause();
					if (webapis.avplay.getState() == "PAUSED") $(".pause-icon").show();

					sessionStorage.video_forward_time = ctime;

					var duration = webapis.avplay.getDuration();
					var time = ((Math.floor(ctime / 3600000) * 3600) + Math.floor((ctime / 60000) % 60) * 60 + (Math.floor((ctime / 1000) % 60)));
					var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
					var percentage_Completed = (time / totalTime);

					progress_bar(Math.round(percentage_Completed * (100)));
				}
			}
			break;

		case 39:	// RIGHT arrow
			if ($("#av-player").css('display') == 'block' && DATA_OBJ[0]['stream_type'] == "M") {
				var duration = webapis.avplay.getDuration();
				if (sessionStorage.video_forward_time < duration) {

					currentTime = sessionStorage.video_forward_time;
					sessionStorage.FWD_RWD_key_press = 1;
					var diffTime = duration - currentTime;
					if (diffTime <= MEDIA_FORWARD_INTERVAL)
						forwardInterval = diffTime;
					else
						forwardInterval = MEDIA_FORWARD_INTERVAL;

					var ctime = parseInt(currentTime) + parseInt(forwardInterval);
					if (Math.floor(ctime / 3600000) >= 1) {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor(ctime / 3600000)) + ":" + min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					} else {
						document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor((ctime / 60000) % 60)) + ":" + min_two_digits(Math.floor((ctime / 1000) % 60));
					}

					show_hide_progress_bar_after_specific_time();

					webapis.avplay.pause();
					if (webapis.avplay.getState() == "PAUSED") $(".pause-icon").show();

					sessionStorage.video_forward_time = ctime;

					var time = ((Math.floor(ctime / 3600000) * 3600) + Math.floor((ctime / 60000) % 60) * 60 + (Math.floor((ctime / 1000) % 60)));
					var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
					var percentage_Completed = (time / totalTime);

					progress_bar(Math.round(percentage_Completed * (100)));
				}
			}

			break;

		case 413:	// Stop button
			if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
				closeVideo();
			}

		default:
			console.log("Key code : " + e.keyCode);
			break;
	}
});

function load_main_screen() {
	$.ajax({
		type: "GET",
		url: FEED_URL,
		dataType: "json",
		async: true,
		cache: false,
		timeout: 90000,
		success: function (data) {
			console.log(data);
			try {
				if (data.status == 200) {
					// var abc = data.Live[0]['url'];
					// console.log(abc);
					DATA_OBJ[0]['videoUrl'] = data.Live[0]['url'];
					DATA_OBJ[0]['videoTitle'] = data.Live[0]['title'];
					DATA_OBJ[0]['stream_type'] = data.Live[0]['stream_type'];
					DATA_OBJ[1]['items'] = data.Page;
					// console.log(DATA_OBJ[1]['items']);
					//  $("body").css('background: url("../images/application_bg.png")');
					set_menu_list();
					set_linear_list();
					// setTimeout(function () { load_video(); }, 2000);
				} else {
					hide_show_modal(true, "RETRY_EXIT", data.msg);
				}

			}
			catch (e) {
				console.log("load_main_screen catch", e);
				if (!navigator.onLine) msg = NET_CONNECTION_ERR;
				else msg = DATA_PARSE_ERR;
				hide_show_modal(true, "RETRY_EXIT", msg);
			}

		},

		error: function (xhr, error) {
			console.log("load_main_screen Message - Error code", error);
			if (!navigator.onLine) msg = NET_CONNECTION_ERR;
			else msg = DATA_PARSE_ERR;
			hide_show_modal(true, "RETRY_EXIT", msg);
		}
	});
}

function set_menu_list() {
	var str = "";
	$(".splash-screen").hide();
	$(".container").show();
	var menuGapClass = "";

	try {
		var length = _.size(DATA_OBJ);

		for (i = 0; i < length; i++) {
			if (i == 0) {
				focusTrue = "data-focusable-initial-focus='true'";
				menuGapClass = "class='navigation-gap'";
				upFocus = " data-focusable-next-focus-up='lastMenu' data-focusable-name='firstMenu'";
			} else {
				upFocus = "";
			}

			if (i == length - 1) {
				focusTrue = "";
				downFocus = " data-focusable-next-focus-down='firstMenu' data-focusable-name='lastMenu'";
			} else {
				downFocus = "";
			}

			str += "<li focusable data-focusable-depth='0' data-focusable-next-focus-left='null' " + menuGapClass + focusTrue + upFocus + downFocus + ">" + DATA_OBJ[i]['menuName'] + "</li>";
		}
	} catch (e) {
		if (window.console && console.error("Error in set menu list: " + e));
	}

	$("ul#menuList").html(str);
	$.caph.focus.activate();
	var controllerProvider = $.caph.focus.controllerProvider.getInstance();
	controllerProvider.setDepth(0);
	controllerProvider.focus(controllerProvider.$$getInitialFocusItem());
	console.log("===================== Menu Loaded =====================");
}

function set_linear_list() {
	if (MENU_INDEX == 0) {
		$("ul#searchList").attr('id', 'catList');
		$(".loader").hide();

		$("h1#header_title").text(DATA_OBJ[MENU_INDEX]['menuName']);
		str = "<li class='left-none livevideo' focusable data-focusable-depth='1' data-focusable-initial-focus='true'>" +
			"<div class='watch-live-box'>" +
			"<div class='watch-live'>" +
			"<img src='images/linear_live_image_hover.png'>" +
			"</div>" +
			"</div>" +
			"</li>";

		$("ul#catList").html(str);
	}
}

function set_setting_list(focusedIndex) {
	//console.log(set_setting_list);
	$("ul#catList").html('');
	if (MENU_INDEX == 1) {
		str = "";
		$("h1#header_title").text(DATA_OBJ[MENU_INDEX]['menuName']);
		var totalSettingItems = _.size(DATA_OBJ[MENU_INDEX]['items']);
		for (i = 0; i < totalSettingItems; i++) {
			if (typeof focusedIndex !== 'undefined') {
				if (i == focusedIndex) focusTrue = " data-focusable-initial-focus='true'";
				else focusTrue = "";

			} else {
				if (i == 0) focusTrue = " data-focusable-initial-focus='true'";
				else focusTrue = "";
			}

			if (i < 3) var upDisable = " data-focusable-next-focus-up='null'";
			else var upDisable = "";

			if (i == (totalSettingItems - 1)) var rightDisable = " data-focusable-next-focus-right='null'";
			else var rightDisable = "";

			var title = DATA_OBJ[MENU_INDEX]['items'][i]['page_name'];
			
			str += "<li focusable data-focusable-depth='1'" + focusTrue + upDisable + rightDisable + ">" +
				"<div class='category-list'>" +
				"<div class='about-box'>" +
				"<div class='about-border'>" +
				"<div class='about-img'>" +
				"<img src='images/main_au.png' onerror='image_error(this);'>" +
				"</div>" +
				"</div>" +
				// "<div class='about-grid-title'>" + title + "</div>" +
				"</div>" +
				"</div>" +
				"</li>";
		}

		$("ul#catList").html(str);
		$(".category-listbox").css("margin-top", "0px");

		if (typeof focusedIndex != "undefined") {
			$.caph.focus.activate();
			var controllerProvider = $.caph.focus.controllerProvider.getInstance();
			controllerProvider.setDepth(1, '', false);
			controllerProvider.focus(controllerProvider.$$getInitialFocusItem());
			PREV_DEPTH = 2;
		}

	}
}

function set_setting_content(index) {
	try {
		SETTING_DESC_SCROLLED = 0;
		$("ul#catList").html("");
		$("h1#header_title").text(DATA_OBJ[MENU_INDEX]['items'][CAT_INDEX]['page_name']);
		$("div.cat_container").removeClass("cat_container").addClass("about_desc_container active");
		str = "";
		//var img = DATA_OBJ[MENU_INDEX]['items'][CAT_INDEX]['itemInnerImage'];
		var description = DATA_OBJ[MENU_INDEX]['items'][CAT_INDEX]['page_description'];
        console.log(description);
		/*str =	'<div class="about-content-img">'+
					'<img src="'+ img +'">'+
				'</div>';*/

		str += '<div focusable data-focusable-depth="2" class="image-scroll">' +
		"<img src='images/inner_au.png' onerror='image_error(this);'>" +
			'</div>';
		str += '<div focusable data-focusable-depth="2" class="about-scroll">' +
			'<div class="about-text">' + description + '</div>' +
			'</div>';

		$(".about-desc").html(str);

		$.caph.focus.activate();
		var controllerProvider = $.caph.focus.controllerProvider.getInstance();
		controllerProvider.setDepth(2);
		PREV_DEPTH = 1;
	}
	catch (e) {
		console.log("About content has error : " + e);
	}
}

function load_video() {
	console.log("start playing video");
	clearInterval(VIDEO_CURRENT_PLAY_COUNTER_INTERVAL);
	VIDEO_CURRENT_PLAY_COUNTER = 1;
	show_hide_video_container();
	$(".video-loader").show();
	$(".video-container").show();
	$(".video-inner .video-title").text(DATA_OBJ[0].videoTitle).show();
	$(".menu_container").removeClass('active');
	$(".video_container").addClass('active');
	$("#av-player").css("display", "block");
	document.getElementById("currentTime").innerHTML = "00:00";
	progress_bar(0);
	VIDEO_CURRENT_PLAY_COUNTER_INTERVAL = setInterval(function () { check_video_status(); }, 1000);
	webapis.avplay.close();
	register_mediakey();
	video_play_statewise();
}

function check_video_status() {
	VIDEO_CURRENT_PLAY_COUNTER++;
	if (VIDEO_CURRENT_PLAY_COUNTER > 60) {
		clearInterval(VIDEO_CURRENT_PLAY_COUNTER_INTERVAL);
		load_video();
	}
}

function video_play_statewise() {
	if ($(".video_container").hasClass('active') && $('#video_container').is(':visible')) {
		if (webapis.avplay.getState() == "PAUSED") {
			playVideo();

		} else if (webapis.avplay.getState() == "PLAYING") {
			pauseVideo();

		} else {
			if (webapis.avplay.getState() == "NONE") {
				try {
					openVideo();
				} catch (e) {
					retry_error_popup();
				}
			}

			if (webapis.avplay.getState() == "IDLE") {
				try {
					prepareVideo();
				} catch (e) {
					retry_error_popup();
				}
			}

			if (webapis.avplay.getState() == "READY") {
				try {
					playVideo();
				} catch (e) {
					retry_error_popup();
				}
			}
		}
	}
}

// Open error popup when error will occur during video playing.
function retry_error_popup(playerErrorType) {
	console.log("retry_error_popup() " + webapis.avplay.getState(), playerErrorType);
	var onlineStatus = navigator.onLine;
	unregister_mediakey();
	webapis.avplay.close();
	clearInterval(VIDEO_CURRENT_PLAY_COUNTER_INTERVAL);
	VIDEO_CURRENT_PLAY_COUNTER = 1;

	var errorMsg = '';
	switch (playerErrorType) {
		case "PLAYER_ERROR_NONE": errorMsg = "Operation has successfully completed."; break;
		case "PLAYER_ERROR_INVALID_PARAMETER": errorMsg = "Unable to find the parameter"; break;
		case "PLAYER_ERROR_NO_SUCH_FILE": errorMsg = "Unable to find the specified media content"; break;
		case "PLAYER_ERROR_INVALID_OPERATION": errorMsg = "Invalid API Call at the moment"; break;
		case "PLAYER_ERROR_SEEK_FAILED": errorMsg = "Failed to perform seek operation, or seek operation called during an invalid state"; break;
		case "PLAYER_ERROR_INVALID_STATE": errorMsg = "AVPlay API method was called during an invalid state"; break;
		case "PLAYER_ERROR_NOT_SUPPORTED_FILE": errorMsg = "Multimedia file format not supported"; break;
		case "PLAYER_ERROR_INVALID_URI": errorMsg = "Input URI is in an invalid format"; break;
		case "PLAYER_ERROR_CONNECTION_FAILED": errorMsg = "Failed multiple attempts to connect to the specified content server"; break;
		case "PLAYER_ERROR_GENEREIC": errorMsg = "Failed to create the display window"; break;
	}

	if (onlineStatus) msg = "The content is currently unavailable. Please check back later.";
	else msg = NET_CONNECTION_ERR;

	if (errorMsg != "") msg = errorMsg;
	if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
		if (errorMsg != "") msg = errorMsg;
		hide_show_modal(true, 'RETRY_CANCEL', msg);
	}
}

//This function is used to register Media Key of Remote
function register_mediakey() {
	tizen.tvinputdevice.registerKey("MediaFastForward");
	tizen.tvinputdevice.registerKey("MediaRewind");
	tizen.tvinputdevice.registerKey("MediaPlay");
	tizen.tvinputdevice.registerKey("MediaPause");
	tizen.tvinputdevice.registerKey("MediaStop");
}

//This function is used to Unregister Media Key of Remote
function unregister_mediakey() {
	tizen.tvinputdevice.unregisterKey("MediaFastForward");
	tizen.tvinputdevice.unregisterKey("MediaRewind");
	tizen.tvinputdevice.unregisterKey("MediaPlay");
	tizen.tvinputdevice.unregisterKey("MediaPause");
	tizen.tvinputdevice.unregisterKey("MediaStop");
}

function show_hide_video_container() {
	$(".pause-icon").hide();
	$(".video-inner").show();
	$("#video_container").show();
}


//Manage default image if item generate error while loading image  
function image_error(image) {
	image.onerror = "";
	return image.src = "../images/box.jpg";
}

//This function is used for display two digit number from 1-9
function min_two_digits(number) {
	return (number < 10 ? '0' : '') + number;
}