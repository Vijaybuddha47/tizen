var listener = {
	onbufferingstart: function () {
		var onlineStatus = navigator.onLine;
		if (onlineStatus) {
			show_hide_video_loader();
			$(".circle_loader").addClass('circle-loader-middle');
			// $(".progress-container").hide();
			$(".player_progress").hide();
		} else {
			retry_error_popup();
		}
	},

	onbufferingprogress: function (percent) {
		var onlineStatus = navigator.onLine;
		if (onlineStatus) {
			try {
				$(".loader_btnoff").hide();
				// code when video buffers.
				show_hide_video_loader();
				$(".circle_loader").addClass('circle-loader-middle');

				if (webapis.avplay.getState() == "PAUSED") {
					$(".pause-icon").show();
					$(".loader_btnoff").show();
				} else if (webapis.avplay.getState() == "PLAYING") {
					$(".pause-icon").hide();
					$(".loader_btnoff").hide();
				}

				$(".pause-icon").hide();
			} catch (e) {
				retry_error_popup();

			}
		} else {
			retry_error_popup();
		}
	},

	onbufferingcomplete: function () {
		var onlineStatus = navigator.onLine;
		if (onlineStatus) {
			try {
				$(".preview-video-inner").hide();
				$(".video-inner").hide();
				$(".circle_loader").removeClass('circle-loader-middle');

				if (webapis.avplay.getState() == "PAUSED") {
					$(".pause-icon").hide();
					webapis.avplay.play();
				}
			} catch (e) {
				retry_error_popup();

			}
		} else {
			retry_error_popup();

		}
	},

	oncurrentplaytime: function (currentTime) {
		if (document.hidden) {
			console.log("App in background");
			webapis.avplay.suspend(); //Mandatory. If you use avplay, you should call this method.
		} else {
			try {
				$(".video-title").text('');

				if (webapis.avplay.getState() == "PAUSED") {
					webapis.avplay.play();
				} else {
					$(".preview-video-inner").hide();
					$(".video-inner").hide();
				}
				if ($(".video_container").hasClass('active') && $('.video_container').is(':visible')) {

					if ($('.retry_modal').css('visibility') == 'visible' || $(".pause-icon").is(":visible")) {
						webapis.avplay.pause();
					}

					sessionStorage.video_forward_time = currentTime;

					var duration = webapis.avplay.getDuration();
					totalTime = parseInt(min_two_digits(Math.floor((duration / 60000))) * 60) + parseInt(min_two_digits(Math.floor((duration / 1000) % 60)));

					var currentTime = webapis.avplay.getCurrentTime();
					currentTime = parseInt(min_two_digits(Math.floor((currentTime / 60000))) * 60) + parseInt(min_two_digits(Math.floor((currentTime / 1000) % 60)));

					var percentageCompleted = (currentTime / totalTime);
					var percentge = Math.round(percentageCompleted * (100));

					progress_bar(percentge);

					//Current playtime
					updateCurrentTime();
				}

			} catch (e) {
				retry_error_popup();
				console.log("Error in current playtime: " + e);
			}
		}
	},

	onerror: function (eventType) {
		webapis.avplay.stop();
		webapis.avplay.close();
		var message = '';
		if (TAB_INDEX == 0 || TAB_INDEX == 1) {
			$(".preview-video-inner").hide();
			if (navigator.onLine) message = "Content Currently Not Available.";
			else message = NET_CONNECTION_ERR;
			$(".video_player_error_message").show().text(message);
			if (PREVIEW_FULL_DISPLAY) $(".video_player_error_message").addClass("expand_preview_error_msg");
		} else retry_error_popup(eventType);
		console.log("Error in stream: " + eventType);
	},

	onerrormsg: function (eventType, errorMsg) {
		console.log("OnErrorMsg Event Callback with eventType: " + eventType + "Error Message: " + errorMsg);
	},

	onevent: function (eventType, eventData) {
		console.log("event type: " + eventType + ", data: " + eventData);
	},

	onstreamcompleted: function () {
		try {
			console.log("stream completed");
			if (PREVIEW_PLAYER) {
				webapis.avplay.stop();
				webapis.avplay.close();
				webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON);
				if (PAGE_INDEX == 1 || PAGE_INDEX == 2) {
					var categoryName = $(".selected_video").parent().parent().parent().attr("data-category");
					var index = $(".selected_video").index();
					webapis.avplay.stop();
					webapis.avplay.close();
					$("div#video-preview-player").empty();
					$("div#video-preview-player").html('<img src="' + APP_IMAGE_URL + APP_CAT_VIDEO_ARRAY[categoryName][index]["poster"] + '" alt="' + APP_CAT_VIDEO_ARRAY[categoryName][index]["name"] + '">');
				} else if (PAGE_INDEX == 3) {
					var i = $(".selected_searched_item").index();
					webapis.avplay.stop();
					webapis.avplay.close();
					$("div#searchpage_player").empty();
					$("div#searchpage_player").html('<img src="' + APP_IMAGE_URL + SEARCHED_VIDEO_LIST[i]["poster"] + '" alt="' + SEARCHED_VIDEO_LIST[i]["name"] + '"/>');
				}

			} else {
				console.log("close video");
				closeVideo();
				// totalVideo = get_total_video_or_first_video_index(1);
			}

		} catch (e) {
			console.log("Error in stream completed " + e);
		}
	}
};

var updateDuration = function () {
	try {
		if ($(".video_container").hasClass('active') && $('.video_container').is(':visible')) {
			var duration = webapis.avplay.getDuration();

			if (Math.floor(duration / 3600000) >= 1)
				document.getElementById("totalTime").innerHTML = "/" + min_two_digits(Math.floor(duration / 3600000)) + ":" + min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
			else
				document.getElementById("totalTime").innerHTML = "/" + min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
		}
	} catch (e) {
		console.log("Error in update duration");
	}
};

var updateCurrentTime = function (currentTime) {
	try {
		if ($(".video_container").hasClass('active') && $('.video_container').is(':visible')) {
			if (currentTime == null)
				currentTime = webapis.avplay.getCurrentTime();

			if (Math.floor(currentTime / 3600000) >= 1)
				document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor(currentTime / 3600000)) + ":" + min_two_digits(Math.floor((currentTime / 60000) % 60)) + ":" + min_two_digits(Math.floor((currentTime / 1000) % 60));
			else
				document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor((currentTime / 60000) % 60)) + ":" + min_two_digits(Math.floor((currentTime / 1000) % 60));

			var time = webapis.avplay.getCurrentTime();
			var duration = webapis.avplay.getDuration();
			var time = ((Math.floor(currentTime / 3600000) * 3600) + Math.floor((currentTime / 60000) % 60) * 60 + (Math.floor((currentTime / 1000) % 60)));
			var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
			var percentageCompleted = (time / totalTime);
			var percentge = Math.round(percentageCompleted * (100));
			progress_bar(percentge);
		}
	} catch (e) {
		console.log("Error in update current time");
	}
};



var openVideo = function () {
	try {
		console.log("open video", VOD_URL);
		show_hide_video_loader();
		webapis.tvinfo.registerInAppCaptionControl(true);
		webapis.tvinfo.showCaption(false);
		webapis.avplay.open(VOD_URL);
		webapis.avplay.setListener(listener);
		prepareVideo();

	} catch (e) {
		retry_error_popup();
		console.log("error in open function: " + e);
	}
};

var successCallback = function () {
	console.log('The media has finished preparing');
	if (webapis.avplay.getState() == "READY") {
		try {
			console.log("READY video");
			if ($(".video_container").hasClass('active') && $('.video_container').is(':visible')) var avPlayerObj = document.getElementById("av-player");
			else var avPlayerObj = document.getElementById("preview-av-player");
			webapis.avplay.setDisplayRect(avPlayerObj.offsetLeft, avPlayerObj.offsetTop, avPlayerObj.offsetWidth, avPlayerObj.offsetHeight);
			webapis.avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
			webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF);
			updateDuration();
			register_mediakey();
			playVideo();
		} catch (e) {
			retry_error_popup();
			console.log("error in prepare 'In READY state' function: " + e);
		}
	}
}



var errorCallback = function () {
	console.log('The media has failed to prepare');
	retry_error_popup();
}

var prepareVideo = function () {
	try {
		console.log("prepare video");
		//webapis.avplay.prepare(successCallback, errorCallback);
		webapis.avplay.prepareAsync(successCallback, errorCallback);
	} catch (e) {
		retry_error_popup();
		console.log("error in prepare function: " + e);
	}
};

var playVideo = function () {
	if (document.hidden) {
		console.log("App in background");
	} else {
		console.log("play video");
		if ($('#video_container').css('display', 'block')) {
			$(".pause-icon").hide();
			if ($("#playPauseVideo").is(":focus")) $("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause_focus.png');
			else $("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png')
			webapis.avplay.play();
			show_hide_progress_bar_after_specific_time();
		} else if ($('#preview_video_container').css('display', 'block')) {
			$(".preview-video-inner").hide();
			$(".pause-icon").hide();
			webapis.avplay.play();

		} else {
			closeVideo();
		}
	}
};

var pauseVideo = function () {
	if ($('#video_container').is(':visible')) {
		console.log("pause video");
		$(".pause-icon").show();
		if ($("#playPauseVideo").is(":focus")) $("#videoNextPreviousPlayPauseIcon").attr('src', 'images/play_focus.png');
		else $("#videoNextPreviousPlayPauseIcon").attr('src', 'images/play.png');
		webapis.avplay.pause();
		show_hide_progress_bar_after_specific_time();
	}
};

var closeVideo = function () {
	console.log("close video");
	show_hide_show_deatils(false);
	deleteMediaInfo();
	$("#video_player_about_video").hide();
	$(".circle_loader").removeClass('circle-loader-middle');
	unregister_mediakey();
	webapis.avplay.stop();
	webapis.avplay.close();
	webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON);
	show_hide_video_next_previous(false);
	sessionStorage.FWD_RWD_key_press = 0;
	$("#av-player").css('display', 'none');
	$("#video_container").removeClass("active").hide();
	$(".video-inner").hide();
	$(".loader").hide();
	// $(".progress-container").hide();
	$(".player_progress").hide();

	$(".main_container").show();
	if (PAGE_INDEX == 0) $(".home_container").addClass("active").show();
	else if (PAGE_INDEX == 1) {
		$(".video_library_container").addClass("active").show();
		$(".video_list").show();
		// reset_preview_player(true);
		var index = $("li#" + SECOND_PAGE_SELECTED_ITEM).index();
		var categoryName = $("#" + SECOND_PAGE_SELECTED_ITEM).parent().parent().parent().attr("data-category");
		VOD_URL = APP_CAT_VIDEO_ARRAY[categoryName][index]['promo_url'];
		$("div#video-preview-player").empty();
		$("div#video-preview-player").html('<img src="' + APP_IMAGE_URL + APP_CAT_VIDEO_ARRAY[categoryName][index]["poster"] + '" alt="' + APP_CAT_VIDEO_ARRAY[categoryName][index]["name"] + '">');
		SN.focus("#" + SECOND_PAGE_FOCUSED_ITEM);
	} else if (PAGE_INDEX == 2) {
		$(".video_library_container").addClass("active").show();
		$(".episode_containerr").show();
		var index = $("li#" + SECOND_PAGE_SELECTED_ITEM).index();
		var categoryName = $("#" + SECOND_PAGE_SELECTED_ITEM).parent().parent().parent().attr("data-category");
		VOD_URL = APP_CAT_VIDEO_ARRAY[categoryName][index]['promo_url'];
		$("div#video-preview-player").empty();
		$("div#video-preview-player").html('<img src="' + APP_IMAGE_URL + APP_CAT_VIDEO_ARRAY[categoryName][index]["poster"] + '" alt="' + APP_CAT_VIDEO_ARRAY[categoryName][index]["name"] + '">');
		SN.focus("#episode_" + (SELECTED_EPIOSDE_NUMBER - 1));
	} else if (PAGE_INDEX == 3) {
		$(".search_container").addClass("active").show();
		var i = $("#" + FOURTH_PAGE_SELECTED_ITEM).index();
		$("div#searchpage_player").empty();
		$("div#searchpage_player").html('<img src="' + APP_IMAGE_URL + SEARCHED_VIDEO_LIST[i]["poster"] + '" alt="' + SEARCHED_VIDEO_LIST[i]["name"] + '"/>');
		if ($(".search_episode_list_container").css("display") == "block") SN.focus("search_result_episode_list");
		else SN.focus("#" + FOURTH_PAGE_SELECTED_ITEM);
	}

	$("#video_player_about_video").hide();
	$(".video_container").removeClass("active").hide();
	$(".pause-icon").hide();
	progress_bar(0);
	document.getElementById("currentTime").innerHTML = "00:00";
};

var stopVideo = function () {
	webapis.avplay.stop();
	updateCurrentTime();
	show_hide_video_container();
	closeVideo();
};

var successForwardCallback = function (time) {
	console.log("success in jump forward");
};

var errorForwardCallback = function (time) {
	console.log("error in jump forward");
};

var jumpBackwardVideo = function (time) {
	show_hide_progress_bar_after_specific_time();
	webapis.avplay.jumpBackward(time);
	updateCurrentTime();

	if (webapis.avplay.getState() == "PAUSED") {
		webapis.avplay.play();
	}
};

var jumpForwardVideo = function (time) {
	webapis.avplay.pause();
	show_hide_progress_bar_after_specific_time();
	webapis.avplay.play();
	webapis.avplay.jumpForward(time, successForwardCallback, errorForwardCallback);
	updateCurrentTime();

	if (webapis.avplay.getState() == "PAUSED") {
		webapis.avplay.play();
	}
};

//This function increase/decrease position of progress bar
function progress_bar(percentage) {
	$('.progress-bar').css('width', percentage + "%");
}

//This function is used to hide progress bar after 10 second
function show_hide_progress_bar_after_specific_time() {

	clearInterval(hide_progress_bar);
	if (webapis.avplay.getDuration() > 0 && (webapis.avplay.getState() == "PAUSED" || webapis.avplay.getState() == "PLAYING")) {
		if (PAGE_INDEX == 1 || PAGE_INDEX == 2) show_hide_video_next_previous(true);
		show_hide_player_progress(true);
		if (PAGE_INDEX == 1 || PAGE_INDEX == 2) show_hide_show_deatils(true);
		else show_hide_show_deatils(false);
		totalVideo = get_total_video_or_first_video_index(1);

		hide_progress_bar = setTimeout(function () {
			running = false;
			// $(".progress-container").hide();
			$(".player_progress").hide();
			show_hide_player_progress(false);
			show_hide_show_deatils(false);
			if ($(".video_container").hasClass("active")) SN.focus('videoPlayer');
		}, 10000);
	}
}

function show_hide_video_next_previous(flag) {
	show_hide_player_progress(flag);
	if (PAGE_INDEX == 1 || PAGE_INDEX == 2) show_hide_show_deatils(true);
}

function forward_video() {
	console.log("farword");
	if ($("#av-player").css('display') == 'block') {
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
			if (webapis.avplay.getState() == "PAUSED") {
				$(".pause-icon").show();
				$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/play.png');
			}

			sessionStorage.video_forward_time = ctime;

			var time = ((Math.floor(ctime / 3600000) * 3600) + Math.floor((ctime / 60000) % 60) * 60 + (Math.floor((ctime / 1000) % 60)));
			var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
			var percentage_Completed = (time / totalTime);

			progress_bar(Math.round(percentage_Completed * (100)));
		}
	}
}

function rewind_video() {
	console.log("rewind");
	if ($("#av-player").css('display') == 'block') {
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
			if (webapis.avplay.getState() == "PAUSED") {
				$(".pause-icon").show();
				$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/play.png');
			}

			sessionStorage.video_forward_time = ctime;

			var duration = webapis.avplay.getDuration();
			var time = ((Math.floor(ctime / 3600000) * 3600) + Math.floor((ctime / 60000) % 60) * 60 + (Math.floor((ctime / 1000) % 60)));
			var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
			var percentage_Completed = (time / totalTime);

			progress_bar(Math.round(percentage_Completed * (100)));
		}
	}
}

/***************************************
	This is for next / previous video
****************************************/
function previous_next_video(type) {
	var obj = get_video_obj(),
		id = "",
		totalVideo = get_total_video_or_first_video_index(1),
		firstItem = get_total_video_or_first_video_index(0);

	$(".player_progress").hide();
	$(".video-title").text('');

	// hide next video button
	if (VOD_COUNTER == totalVideo) {
		$("#playNextVideo").css('visibility', 'hidden');
		$("#playPauseVideo").attr('data-sn-right', 'null');
	}
	// hide previous video button
	else if (VOD_COUNTER == $("#episodeList li.visible").first().index()) {
		$("#playPreviousVideo").css('visibility', 'hidden');
		$("#playPauseVideo").attr('data-sn-left', 'null');
	}

	switch (type) {
		case "previous":
			if (VOD_COUNTER > 0) {
				if (PAGE_INDEX == 2) VOD_COUNTER = $("#episode_list li:nth-child(" + (VOD_COUNTER + 1) + ")").prevAll('li').index();
				else if (PAGE_INDEX == 3 && $("#search_result_episode_container").css("display") == "block") VOD_COUNTER = $("#search_result_episode_list li:nth-child(" + (VOD_COUNTER + 1) + ")").prevAll('li').index();
				VOD_URL = SELECTED_EPISODES[VOD_COUNTER];
				SELECTED_EPIOSDE_NUMBER = SELECTED_EPIOSDE_NUMBER - 1;
				show_hide_show_deatils(true);
				load_main_player();
			}

			break;

		case "next":
			if (VOD_COUNTER < totalVideo) {
				if (PAGE_INDEX == 2) VOD_COUNTER = $("#episode_list li:nth-child(" + (VOD_COUNTER + 1) + ")").next('li').index();
				else if (PAGE_INDEX == 3 && $("#search_result_episode_container").css("display") == "block") VOD_COUNTER = $("#search_result_episode_list li:nth-child(" + (VOD_COUNTER + 1) + ")").next('li').index();
				VOD_URL = SELECTED_EPISODES[VOD_COUNTER];
				SELECTED_EPIOSDE_NUMBER = SELECTED_EPIOSDE_NUMBER + 1;
				show_hide_show_deatils(true);
				load_main_player();
			}
			break;
	}

}

/*************************************
	if type is 1 return total video
	else first li item index
**************************************/
function get_total_video_or_first_video_index(type) {
	var totalVideo = 0,
		firstItem = 0;

	switch (PAGE_INDEX) {
		case 1: // For first page
			totalVideo = 1;
			firstItem = 0;
			break;

		case 2: // For second page
			totalVideo = $("#episode_list li").last().index();
			firstItem = $("#episode_list li").first().index();
			break;

		case 3: // For shearch  episode list
			if ($("#search_result_episode_container").css("display") == "block") {
				totalVideo = $("#search_result_episode_list li").last().index();
				firstItem = $("#search_result_episode_list li").first().index();
			}
			break;
	}

	if (type == 1) return totalVideo;
	else return firstItem;

}

//This function is used to hide progress bar after 10 second
function show_hide_programme_details_after_specific_time() {
	clearInterval(hide_programme_details);

	hide_programme_details = setTimeout(function () {
		running = false;
		if ($(".video_container").hasClass("active")) SN.focus('videoPlayer');
	}, 10000);
}

//show player progress and button
function show_hide_player_progress(flag) {
	if (flag) {
		$(".player_progress").show();
		$(".progress-container").show();
		$("#videoNextPrevious").show();
		$("#playPreviousVideo").show();
		$("#playNextVideo").show();
	} else {
		$(".player_progress").hide();
		$(".progress-container").hide();
		$("#videoNextPrevious").hide();
		if ($(".video_container").hasClass("active")) SN.focus("videoPlayer");
	}
}



