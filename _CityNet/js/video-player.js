var listener = {
	onbufferingstart: function () {
		var onlineStatus = navigator.onLine;
		if (onlineStatus) {
			$(".video-inner").show();
			$(".circle_loader").addClass('circle-loader-middle');
			$(".progress-container").hide();

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
				$(".video-inner").show();
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
					$(".video-inner").hide();
				}

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

			} catch (e) {
				retry_error_popup();
				console.log("Error in current playtime: " + e);
			}
		}
	},

	onerror: function (eventType) {
		webapis.avplay.close();
		retry_error_popup(eventType);
		console.log("Error in stream: " + eventType);
	},

	onstreamcompleted: function () {
		try {
			console.log("stream completed");
			totalVideo = get_total_video_or_first_video_index(1);
			if (VOD_COUNTER < totalVideo) previous_next_video(type = "next");
			else closeVideo();

		} catch (e) {
			console.log("Error in stream completed " + e);
		}
	}
};

var updateDuration = function () {
	try {
		var duration = webapis.avplay.getDuration();

		if (Math.floor(duration / 3600000) >= 1)
			document.getElementById("totalTime").innerHTML = min_two_digits(Math.floor(duration / 3600000)) + ":" + min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
		else
			document.getElementById("totalTime").innerHTML = min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
	} catch (e) {
		console.log("Error in update duration");
	}
};

var updateCurrentTime = function (currentTime) {
	try {
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
	} catch (e) {
		console.log("Error in update current time");
	}
};

var openVideo = function () {
	try {
		console.log("open video");
		$(".video-inner").show();
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
			var avPlayerObj = document.getElementById("av-player");
			webapis.avplay.setDisplayRect(avPlayerObj.offsetLeft, avPlayerObj.offsetTop, avPlayerObj.offsetWidth, avPlayerObj.offsetHeight);
			webapis.avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
			webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF);
			updateDuration();
			register_mediakey();
			playVideo();

			// For live menu only

			show_hide_programme_details_after_specific_time();
			$(".language").show();

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
			$("#customPause").find("img").attr("src", "images/pause_icon.png");
			$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png');
			$("#livePlayPause").find("img").attr('src', 'images/pause.png');
			webapis.avplay.play();
			show_hide_progress_bar_after_specific_time();
			if (MENU_INDEX == 0) $(".custom_control_container").show();
			else $(".custom_control_container").hide();
			var totalTrackInfo = webapis.avplay.getTotalTrackInfo();
			// for (var i = 0; i < totalTrackInfo.length; i++) {
			// 	console.log("change 1");
			// 	console.log('Find audio track.',);
			// 	console.log('audio track language is ' + totalTrackInfo[i]['extra_info']['language']);
			// 	totalTrackInfo[i]['extra_info'] = JSON.parse(totalTrackInfo[i]['extra_info']);
			// }
			// console.log("2222222", totalTrackInfo);
			var j = 0, k = 0;
			var snUp = "";
			for (var i = 0; i < totalTrackInfo.length; i++) {
				var str = "";
				if (totalTrackInfo[i]['type'] == 'AUDIO') {
					if (k == 0) {
						snUp = ' data-sn-up="#audio_language" ';
						$("#language_option").html("");
					} else snUp = ' data-sn-up="#language_' + (k - 1) + '"';
					var audioObject = JSON.parse(totalTrackInfo[i]['extra_info']);
					// webapis.avplay.setSelectTrack('AUDIO', i);
					str = '<li class="focusable" tabindex="13" id="language_' + k + '" data-sn-right="null" data-sn-left="null" ' + snUp + ' data-sn-down="#language_' + (k + 1) + '" data-value="' + i + '" >' + audioObject["language"] + '</li>'
					k++;
					$("#language_option").append(str);

				}
				if (totalTrackInfo.type == 'TEXT' && j == 0) {
					webapis.avplay.setSelectTrack('TEXT', totalTrackInfo.index);
					j++;
				}
			}

		} else {
			closeVideo();
		}
	}
};

var pauseVideo = function () {
	if ($('#video_container').is(':visible')) {
		console.log("pause video");
		$(".pause-icon").show();
		$("#customPause").find("img").attr("src", "images/play_icon.png");
		$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/play.png');
		$("#livePlayPause").find("img").attr('src', 'images/play.png');
		webapis.avplay.pause();
		show_hide_progress_bar_after_specific_time();
		if (MENU_INDEX == 0) $(".custom_control_container").show();
	}
};

var closeVideo = function () {
	console.log("close video");
	$(".circle_loader").removeClass('circle-loader-middle');
	unregister_mediakey();
	webapis.avplay.close();
	webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON);
	show_hide_video_next_previous(false);
	sessionStorage.FWD_RWD_key_press = 0;
	$("#language_option").html("");
	$("#av-player").css('display', 'none');
	$("#video_container").hide();
	$(".video-inner").hide();
	$(".loader").hide();
	$(".progress-container").hide();
	$(".language").hide();

	// $("#epgListContainer").html('');
	$(".epg_icon_container").hide();
	$(".custom_control_container").hide();
	$(".channel_dvr_box").hide();

	$(".main_container").show();
	$(".video_container").removeClass('active');
	$(".pause-icon").hide();
	$(".video_next_previous_container").hide();
	progress_bar(0);
	document.getElementById("currentTime").innerHTML = "00:00";
	if (MENU_INDEX == 0) SN.focus('liveList');
	else SN.focus("videoDetailsPageIcons");
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
		if (MENU_INDEX == 2) show_hide_video_next_previous(true);
		if ($('.progress-container').css('display') == 'none') {
			$(".progress-container").show();
		}
		// if ($('.custom_control_container').css('display') == 'none') {
		// 	clearInterval(hide_programme_details);
		// 	$(".custom_control_container").show();
		// 	if (MENU_INDEX == 0) $(".customProgressBar").hide();
		// 	else $(".customProgressBar").show();
		// }

		hide_progress_bar = setTimeout(function () {
			running = false;
			$(".progress-container").hide();
			SN.focus('videoPlayer');
		}, 10000);
	}
}

function show_hide_video_next_previous(flag) {
	if (flag) $("#videoNextPrevious").css('display', 'table');
	else $("#videoNextPrevious").hide();
}

function forward_video() {
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

	$(".progress-container").hide();
	$(".video-title").text('');

	// hide next video button
	if (totalVideo == VOD_COUNTER) {
		$("#playNextVideo").css('visibility', 'hidden');
		$("#playPauseVideo").attr('data-sn-right', 'null');
	}

	// hide previous video button
	if (VOD_COUNTER == $("#movieList" + CAT_ROW_INDEX + " li.visible").first().index()) {
		$("#playPreviousVideo").css('visibility', 'hidden');
		$("#playPauseVideo").attr('data-sn-left', 'null');
	}

	switch (type) {
		case "previous":
			if (VOD_COUNTER > 0) {
				if (MENU_INDEX == 0) {
					VOD_COUNTER = $("#liveList li:nth-child(" + (VOD_COUNTER + 1) + ")").prevAll('li.visible').index();

				} else if (MENU_INDEX == 1) {
					VOD_COUNTER = $("#movieList" + CAT_ROW_INDEX + " li:nth-child(" + (VOD_COUNTER + 1) + ")").prevAll('li.visible').index();

				} else VOD_COUNTER = VOD_COUNTER - 1;

				if (MENU_INDEX == 0) id = obj[VOD_COUNTER]['channel_id'];
				else id = obj[VOD_COUNTER]['id'];

				get_video_details(id, true);
			}

			break;

		case "next": if (VOD_COUNTER < totalVideo) {
			if (MENU_INDEX == 0) {
				VOD_COUNTER = $("#liveList li:nth-child(" + (VOD_COUNTER + 1) + ")").nextAll('li.visible').index();

			} else if (MENU_INDEX == 1) {
				VOD_COUNTER = $("#movieList" + CAT_ROW_INDEX + " li:nth-child(" + (VOD_COUNTER + 1) + ")").nextAll('li.visible').index();

			} else VOD_COUNTER = VOD_COUNTER + 1;

			if (MENU_INDEX == 0) id = obj[VOD_COUNTER]['channel_id'];
			else id = obj[VOD_COUNTER]['id'];

			get_video_details(id, true);
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

	switch (MENU_INDEX) {
		case 0:	// for live menu
			totalVideo = $("#liveList li.visible").last().index();
			firstItem = $("#movieList" + CAT_ROW_INDEX + " li.visible").first().index();
			break;

		case 1: // For Movies menu
			totalVideo = $("#movieList" + CAT_ROW_INDEX + " li.visible").last().index();
			firstItem = $("#movieList" + CAT_ROW_INDEX + " li.visible").first().index();
			break;

		case 2: // For Show menu
			totalVideo = $("#episodeList li.visible").last().index();
			firstItem = $("#episodeList li.visible").first().index();
			break;

	}

	if (type == 1) return totalVideo;
	else return firstItem;

}

//This function is used to hide progress bar after 10 second
function show_hide_programme_details_after_specific_time() {
	clearInterval(hide_programme_details);

	if ($('.epg_icon_container').css('display') == 'none') {
		$(".epg_icon_container").show();
		if (MENU_INDEX == 0) {
			$(".custom_control_container").show();
			$(".custom_control_container").css("display", "block");
			$(".customProgressBar").hide();
		} else {
			$(".custom_control_container").hide();
			$(".custom_control_container").css("display", "none");
			$(".customProgressBar").show();
		}
	}

	hide_programme_details = setTimeout(function () {
		running = false;
		$(".epg_icon_container").hide();
		$(".custom_control_container").hide();
		$("#language_option").hide();
		if ($(".video_container").hasClass("active") && !$(".channel_dvr_box").is(":visible")) SN.focus('videoPlayer');
	}, 10000);
}

function updateVideoPlayer() {
	console.log("updateVideoPlayer");
	try {
		var successCallback = function () {
			console.log("success");
		}
		var errorCallback = function (err) {
			throw new Error('Error:' + err.name);
		}
		webapis.avplay.restoreAsync(VOD_URL, 0, false, successCallback, errorCallback);
	} catch (e) {
		console.log(e)
	}
}

function show_hide_controls() {
	if (MENU_INDEX == 2) $("#videoNextPrevious").show();
	clearTimeout(HIDE_SHOW_ERROR);
	HIDE_SHOW_ERROR = setTimeout(function () {
		$("#videoNextPrevious").hide();
	}, 3000);
}


