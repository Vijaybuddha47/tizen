var audioListener = {
	onbufferingstart: function () {
		if (navigator.onLine) {
			$(".video-inner").show();
			$(".circle_loader").addClass('circle-loader-middle');
		}
		else retry_error_popup();
	},

	onbufferingprogress: function (percent) {
		if (navigator.onLine) {
			$(".video-inner").show();
			$(".circle_loader").addClass('circle-loader-middle');
		}
		else retry_error_popup();
	},

	onbufferingcomplete: function () {
		if (navigator.onLine) {
			$(".video-inner").show();
			$(".circle_loader").addClass('circle-loader-middle');
		} else retry_error_popup();
	},

	oncurrentplaytime: function (currentTime) {
		if (document.hidden) {
			console.log("App in background");
			webapis.avplay.suspend(); //Mandatory. If you use avplay, you should call this method.

		} else {
			if (navigator.onLine) {
				$(".video-inner").hide();

				if ($('.retry_modal').css('visibility') == 'visible') {
					webapis.avplay.pause();
				}

				var duration = webapis.avplay.getDuration();
				totalTime = parseInt(min_two_digits(Math.floor((duration / 60000))) * 60) + parseInt(min_two_digits(Math.floor((duration / 1000) % 60)));

				var currentTime = webapis.avplay.getCurrentTime();
				currentTime = parseInt(min_two_digits(Math.floor((currentTime / 60000))) * 60) + parseInt(min_two_digits(Math.floor((currentTime / 1000) % 60)));

				var percentageCompleted = (currentTime / totalTime);
				var percentge = Math.round(percentageCompleted * (100));

				audio_progress_bar(percentge);

				//Current playtime
				updateAudioCurrentTime();

			} else {
				webapis.avplay.pause();
				retry_error_popup();
			}
		}
	},

	onerror: function (eventType) {
		console.log("Error in audio: " + eventType);
		webapis.avplay.close();
		retry_error_popup();
	},

	onstreamcompleted: function () {
		closeAudio();
	}
};

var updateAudioDuration = function () {
	try {
		var duration = webapis.avplay.getDuration();

		if (Math.floor(duration / 3600000) >= 1)
			document.getElementById("podcast_duration").innerHTML = min_two_digits(Math.floor(duration / 3600000)) + ":" + min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
		else
			document.getElementById("podcast_duration").innerHTML = min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
	} catch (e) {
		console.log("Error in update duration");
	}
};

var updateAudioCurrentTime = function (currentTime) {
	try {
		if (currentTime == null)
			currentTime = webapis.avplay.getCurrentTime();

		if (Math.floor(currentTime / 3600000) >= 1)
			document.getElementById("podcast_current_time").innerHTML = min_two_digits(Math.floor(currentTime / 3600000)) + ":" + min_two_digits(Math.floor((currentTime / 60000) % 60)) + ":" + min_two_digits(Math.floor((currentTime / 1000) % 60));
		else
			document.getElementById("podcast_current_time").innerHTML = min_two_digits(Math.floor((currentTime / 60000) % 60)) + ":" + min_two_digits(Math.floor((currentTime / 1000) % 60));

		var time = webapis.avplay.getCurrentTime();
		var duration = webapis.avplay.getDuration();
		var time = ((Math.floor(currentTime / 3600000) * 3600) + Math.floor((currentTime / 60000) % 60) * 60 + (Math.floor((currentTime / 1000) % 60)));
		var totalTime = ((Math.floor(duration / 3600000) * 3600) + Math.floor((duration / 60000) % 60) * 60 + Math.floor((duration / 1000) % 60));
		var percentageCompleted = (time / totalTime);
		var percentge = Math.round(percentageCompleted * (100));
		audio_progress_bar(90);

	} catch (e) {
		console.log("Error in update current time");
	}
};

var openAudio = function () {
	//console.log("openAudio AOD URL", AOD_URL);
	webapis.avplay.open(AOD_URL);
	webapis.avplay.setListener(audioListener);
};

var audioSuccessCallback = function () {
	console.log('The audio has finished preparing');
	if (webapis.avplay.getState() == "READY") {
		try {
			var avPlayerObj = document.getElementById("av-player");
			webapis.avplay.setDisplayRect(avPlayerObj.offsetLeft, avPlayerObj.offsetTop, avPlayerObj.offsetWidth, avPlayerObj.offsetHeight);
			webapis.avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
			updateAudioDuration();
			webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF);
			playAudio();

		} catch (e) {
			retry_error_popup();
			console.log("error in prepare 'In READY state' function: " + e);
		}
	}
}

var audioErrorCallback = function () {
	console.log('The media has failed to prepare');
	retry_error_popup();
}

var prepareAudio = function () {
	console.log("prepare audio");
	webapis.avplay.prepareAsync(audioSuccessCallback, audioErrorCallback);
};

var playAudio = function () {
	PLAY_AUDIO = true;
	callMetadata();
	// var options = APP_MUSIC_URL_ARRAY[RADIO_PAGE_FOCUSED_ITEM];
	// if (webapis.avplay.play()) fetchMetadata(options);
	console.log("play audio");
	$(".poster_heading").show();
	$("#current_music_title").text("");
	$(".sidescroll_time").css("display", "block");
	// $("#music_img_change").attr("src", "./images/waveform.gif");
	$("#" + SELECTED_ITEM).find(".img_box").html('<img class="play_icon" src="./images/pause_audio.png" alt="Pause" />');
	webapis.avplay.play();
};

var pauseAudio = function () {
	PLAY_AUDIO = false;
	console.log("pause audio");
	// $("#music_img_change").attr("src", "./images/dotted_border.png");
	$("#" + SELECTED_ITEM).find(".img_box").html('<img class="play_icon" src="./images/play_audio.png" alt="Play" />');
	webapis.avplay.pause();
};

var closeAudio = function (keyCode) {
	console.log("close audio");
	$(".circle_loader").removeClass('circle-loader-middle').hide();
	webapis.avplay.close();
	audio_progress_bar(0);
	$(".img_box").empty();
	// $("#music_cover").attr("src","./images/poster_img.jpg");
	$("#podcast_current_time").text('00:00');
	$("#podcast_duration").text('00:00');
	unregister_mediakey();
	PLAY_AUDIO = false;
	AOD_URL = "";
	webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON);
	if (keyCode != 10009) {
		$(".subcat_container").addClass("active").show();
		SN.focus("subcatList");
	}
};

var jumpBackwardAudio = function (time) {
	console.log("Backward Audio...");
	if (webapis.avplay.getCurrentTime() > time) {
		webapis.avplay.jumpBackward(time);
	}
};

var jumpForwardAudio = function (time) {
	if (webapis.avplay.getDuration() > (webapis.avplay.getCurrentTime() + time)) {
		webapis.avplay.jumpForward(time);
	}
};

function play_podcast() {

	register_mediakey();
	console.log("start playing Audio code");
	webapis.avplay.close();
	audio_progress_bar(0);
	$("#podcast_current_time").text('00:00');
	$("#podcast_duration").text('00:00');
	$(".video-inner").show();
	$(".circle_loader").css("display", "block").addClass('circle-loader-middle');
	$("#music_cover").attr("src", "./images/splash_screen.png");
	$(".poster_heading").show();
	$("#current_music_title").text("");
	$("#music_img_change").attr("src", "");
	$("#" + SELECTED_ITEM).find(".img_box").html('<img class="play_icon" src="./images/pause_audio.png" alt="Pause" />');

	if (webapis.avplay.getState() == "PAUSED") {
		playAudio();
	} else if (webapis.avplay.getState() == "PLAYING") {
		pauseAudio();
	} else {
		if (webapis.avplay.getState() == "NONE") {
			openAudio();
		}

		if (webapis.avplay.getState() == "IDLE") {
			prepareAudio();
		}

		if (webapis.avplay.getState() == "READY") {
			playAudio();
		}
	}

	// callMetadata();
}

function forward_podcast() {
	$(".loader-way").show();
	if (webapis.avplay.getState() == "PAUSED" || webapis.avplay.getState() == "PLAYING") {
		jumpForwardAudio(MEDIA_FORWARD_INTERVAL);
	}
}

function rewind_podcast() {
	try {
		$(".loader-way").show();
		if (webapis.avplay.getState() == "PAUSED" || webapis.avplay.getState() == "PLAYING") {
			jumpBackwardAudio(MEDIA_REWIND_INTERVAL);
		}

	} catch (e) {
		if (window.console && console.error("Error in podcast rewind: " + e));
	}
}

function retry_podcast() {
	if ($(".pod_cast_container").is(":visible")) {
		$(".loader-way").show();
		if ((webapis.avplay.getState() == "PLAYING" || webapis.avplay.getState() == "PAUSED") && navigator.onLine)
			webapis.avplay.pause();
		else
			webapis.avplay.close();

		setTimeout(function () {
			if (webapis.avplay.getState() == "PAUSED") {
				register_mediakey();
				webapis.avplay.play();
			} else {
				play_podcast();
			}
		}, 100);
	} else {
		webapis.avplay.close();
	}
}

//This function increase/decrease position of progress bar
function audio_progress_bar(percentage) {
	$('#podcast_progress_bar').css('width', percentage + "%");
}