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
				console.log("Error in current playtime: ");
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
			if (PAGE_INDEX == 2) {
				closeVideo();
			} else if (PAGE_INDEX == 5) {
				totalVideo = get_total_video_or_first_video_index(1);
				if ((VOD_COUNTER < totalVideo)) {
					previous_next_video(type = "next");
				} else closeVideo();
			}

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
		} catch (e) {
			retry_error_popup();
			console.log("error in prepare 'In READY state' function: " + e);
		}
	}
}

var errorCallback = function () {
	retry_error_popup();
}

var prepareVideo = function () {
	try {
		console.log("prepare video");
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
		if ($('#video_container').css('display', 'block')) {
			$(".pause-icon").hide();
			$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png');
			webapis.avplay.play();
			show_hide_progress_bar_after_specific_time();
			var totalTrackInfo = webapis.avplay.getTotalTrackInfo();
			for (var i = 0; i < totalTrackInfo.length; i++) {
				if (totalTrackInfo[i]['type'] == 'AUDIO') {
					webapis.avplay.setSelectTrack('AUDIO', i);
				}
				if (totalTrackInfo.type == 'TEXT') {
					webapis.avplay.setSelectTrack('TEXT', totalTrackInfo.index);
				}
			}

		} else {
			closeVideo();
		}
	}
};

var pauseVideo = function () {
	if ($('#video_container').is(':visible')) {
		$(".pause-icon").show();
		$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/play.png');
		webapis.avplay.pause();
		show_hide_progress_bar_after_specific_time();
	}
};

var closeVideo = function () {
	webapis.avplay.close();
	LIVE_CATCHUP = false;
	$(".main_container").show();
	if (PAGE_INDEX == 2) {
		hide_show_screens("epg_container");
		SN.focus("#" + SECOND_PAGE_SELECTED_ITEM);
	} else if (PAGE_INDEX == 5) {
		hide_show_screens("video_list_container");
		SN.focus("#" + SELECTED_VIDEO_ITEM);
	}
	$(".circle_loader").removeClass('circle-loader-middle');
	unregister_mediakey();
	webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON);
	show_hide_video_next_previous(false);
	sessionStorage.FWD_RWD_key_press = 0;
	$("#av-player").css('display', 'none');
	$("#video_container").hide();
	$(".video-inner").hide();
	$(".loader").hide();
	$(".progress-container").hide();
	$(".video_container").removeClass("active").hide();
	$(".pause-icon").hide();
	$(".video_next_previous_container").hide();
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
	if ((webapis.avplay.getState() == "PAUSED" || webapis.avplay.getState() == "PLAYING")) {

		if (PAGE_INDEX == 5 || LIVE_CATCHUP) {
			show_hide_video_next_previous(true);
			$(".progress-container").show();
			$(".progress-time").show();
		}
		else if (PAGE_INDEX == 2) {
			show_hide_video_next_previous(false);
			$(".progress-container").hide();
		}

		totalVideo = get_total_video_or_first_video_index(1);
		if (totalVideo < 1) {
			$("#videoNextPrevious").hide();
		}

		hide_progress_bar = setTimeout(function () {
			running = false;
			$(".video_next_previous_container").hide();
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
	if (VOD_COUNTER == totalVideo) {
		$("#playNextVideo").css('visibility', 'hidden');
		$("#playPauseVideo").attr('data-sn-right', 'null');
	}
	// hide previous video button
	else if (VOD_COUNTER == $("#video_list li.visible").first().index()) {
		$("#playPreviousVideo").css('visibility', 'hidden');
		$("#playPauseVideo").attr('data-sn-left', 'null');

	}

	switch (type) {
		case "previous":
			if (VOD_COUNTER > 0) {
				if (PAGE_INDEX == 5) {
					VOD_COUNTER = $("#video_list li:nth-child(" + (VOD_COUNTER + 1) + ")").prevAll('li').index();
					SELECTED_VIDEO_ITEM = $("#video_list li:nth-child(" + (VOD_COUNTER + 1) + ")").attr('id');
					if (_.size(CAT_VOD_LIST) > 0) VOD_URL = CAT_VOD_LIST[VOD_COUNTER]["vsFile"];
					else if (typeof SUB_CAT_VOD_ARRAY[VOD_COUNTER] === 'undefined') VOD_URL = SUB_CAT_VOD_ARRAY["vsFile"];
					else VOD_URL = SUB_CAT_VOD_ARRAY[VOD_COUNTER]["vsFile"];
					VOD_COUNTER = VOD_COUNTER - 1;
					load_video();
				}
			}

			break;

		case "next":
			if (VOD_COUNTER < totalVideo) {
				if (PAGE_INDEX == 5) {
					VOD_COUNTER = $("#video_list li:nth-child(" + (VOD_COUNTER + 1) + ")").next('li').index();
					SELECTED_VIDEO_ITEM = $("#video_list li:nth-child(" + (VOD_COUNTER + 1) + ")").attr('id');
					if (_.size(CAT_VOD_LIST) > 0) VOD_URL = CAT_VOD_LIST[VOD_COUNTER]["vsFile"];
					else if (typeof SUB_CAT_VOD_ARRAY[VOD_COUNTER] === 'undefined') VOD_URL = SUB_CAT_VOD_ARRAY["vsFile"];
					else VOD_URL = SUB_CAT_VOD_ARRAY[VOD_COUNTER]["vsFile"];
					VOD_COUNTER = VOD_COUNTER + 1;
					load_video();
				}
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
		case 2: // For video list menu
			totalVideo = 0;
			firstItem = 0;
			break;
		case 5: // For video list menu
			totalVideo = $("#video_list li").last().index();
			firstItem = $("#video_list li").first().index();
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

function load_video() {
	try {
		console.log("start playing video");
		$(".pause-icon").hide();
		show_hide_video_container();
		unregister_mediakey();
		webapis.avplay.close();
		$(".video_container").addClass("active");
		TAB_INDEX = 7;
		sessionStorage.FWD_RWD_key_press = 0;
		$(".progress-container").hide();
		$(".video_next_previous_container").hide();
		progress_bar(0);
		document.getElementById("currentTime").innerHTML = "00:00";

		var totalVideo = get_total_video_or_first_video_index(1),
			firstItem = get_total_video_or_first_video_index(0),
			obj = get_video_obj();

		// show next video button
		if (totalVideo > VOD_COUNTER) {
			$("#playNextVideo").css('visibility', 'visible');
			$("#playPauseVideo").attr('data-sn-right', '#playNextVideo');

		} else {
			$("#playNextVideo").css('visibility', 'hidden');
			$("#playPauseVideo").attr('data-sn-right', 'null');
		}

		// show previous video button
		if (VOD_COUNTER > firstItem) {
			$("#playPreviousVideo").css('visibility', 'visible');
			$("#playPauseVideo").attr('data-sn-left', '#playPreviousVideo');
		} else {
			$("#playPreviousVideo").css('visibility', 'hidden');
			$("#playPauseVideo").attr('data-sn-left', 'null');
		}

		show_hide_video_next_previous(false);

		video_play_statewise();

	} catch (e) {
		console.log("Error in load video: " + e);
	}
}

function video_play_statewise() {
	if ($(".video_container").hasClass('active') && $('#video_container').is(':visible')) {
		if (webapis.avplay.getState() == "PAUSED") playVideo();
		else if (webapis.avplay.getState() == "PLAYING") pauseVideo();
		else {
			if (webapis.avplay.getState() == "NONE") {
				try {
					openVideo();
				} catch (e) {
					retry_error_popup();
				}
			} else if (webapis.avplay.getState() == "IDLE") {
				try {
					prepareVideo();
				} catch (e) {
					retry_error_popup();
				}
			} else if (webapis.avplay.getState() == "READY") {
				try {
					playVideo();
				} catch (e) {
					retry_error_popup();
				}
			}
		}
		SN.focus('videoPlayer');
	}
}


