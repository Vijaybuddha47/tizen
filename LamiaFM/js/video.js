var listener = {
	onbufferingstart: function() {
		var onlineStatus = navigator.onLine;
		if (onlineStatus) {
			$(".video-inner").show();
			$(".circle_loader").addClass('circle-loader-middle');
			$(".progress-container").hide();

		} else {
			retry_error_popup();
		}
	},
	
	onbufferingprogress: function(percent) {
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
	
	onbufferingcomplete: function() {
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
	
	oncurrentplaytime: function(currentTime) {
		if (document.hidden) {
			console.log("App in background");
			webapis.avplay.suspend(); //Mandatory. If you use avplay, you should call this method.
		} else {
			try {
				VIDEO_CURRENT_PLAY_COUNTER = 1;

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
				totalTime = parseInt(min_two_digits(Math.floor((duration / 60000)))*60) + parseInt(min_two_digits(Math.floor((duration / 1000) % 60)));

				var currentTime = webapis.avplay.getCurrentTime();
				currentTime = parseInt(min_two_digits(Math.floor((currentTime / 60000))) *60) + parseInt(min_two_digits(Math.floor((currentTime / 1000) % 60)));

				var percentageCompleted = (currentTime/totalTime);
				var percentge = Math.round(percentageCompleted*(100));
				
				progress_bar(percentge);

				//Current playtime
				updateCurrentTime();
			
			} catch (e) {
				retry_error_popup();
				console.log("Error in current playtime: "+e);
			}
		}
	},
	
	onerror: function(eventType) {
		webapis.avplay.close();
		retry_error_popup(eventType);
		console.log("Error in stream: "+eventType);
	},
	
	onstreamcompleted: function() {
	   try {
			console.log("stream completed");
			closeVideo();

	    } catch (e) {
			console.log("Error in stream completed "+e);
	    }
    }
};

var updateDuration = function() {
	try {
		if (DATA_OBJ[0]['stream_type'] == "M") {
			var duration = webapis.avplay.getDuration();
			
			if (Math.floor(duration / 3600000) >= 1)
				document.getElementById("totalTime").innerHTML = min_two_digits(Math.floor(duration / 3600000)) + ":" + min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
			else
				document.getElementById("totalTime").innerHTML = min_two_digits(Math.floor((duration / 60000) % 60)) + ":" + min_two_digits(Math.floor((duration / 1000) % 60));
		}

	} catch (e) {
		console.log("Error in update duration");
	}
};

var updateCurrentTime = function(currentTime) {
	try {
		if (DATA_OBJ[0]['stream_type'] == "M") {
			if (currentTime == null) 
				currentTime = webapis.avplay.getCurrentTime();
			
			if (Math.floor(currentTime / 3600000) >= 1)
				document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor(currentTime / 3600000)) + ":" + min_two_digits(Math.floor((currentTime / 60000) % 60)) + ":" + min_two_digits(Math.floor((currentTime / 1000) % 60));
			else
				document.getElementById("currentTime").innerHTML = min_two_digits(Math.floor((currentTime / 60000) % 60)) + ":" + min_two_digits(Math.floor((currentTime / 1000) % 60));
			
			var time 				 = webapis.avplay.getCurrentTime();
			var duration			 = webapis.avplay.getDuration();
			var time 				 = ((Math.floor(currentTime/3600000)*3600)+ Math.floor((currentTime/60000)%60)*60 +(Math.floor((currentTime/1000)%60)));
			var totalTime 			 = ((Math.floor(duration/3600000)*3600)+Math.floor((duration/60000)%60)*60 + Math.floor((duration/1000)%60));
			var percentageCompleted = (time/totalTime);
			var percentge			 = Math.round(percentageCompleted*(100));
			progress_bar(percentge);
		}
	} catch (e) {
		console.log("Error in update current time");
	}
};

var openVideo = function() {
	try {
		//console.log("open video", DATA_OBJ[0].videoUrl);
		$(".video-inner").show();
		webapis.tvinfo.registerInAppCaptionControl(true);
		webapis.tvinfo.showCaption(false);
		webapis.avplay.open(DATA_OBJ[0].videoUrl);
		webapis.avplay.setListener(listener);
	} catch (e) {
		retry_error_popup();
		console.log("error in open function: " + e);
	}
};

var successCallback = function() {
  console.log('The media has finished preparing');
  if (webapis.avplay.getState() == "READY") {
		try {
			console.log("READY video");
			var avPlayerObj = document.getElementById("av-player");
			$("#av-player").show();
			webapis.avplay.setDisplayRect(avPlayerObj.offsetLeft, avPlayerObj.offsetTop, avPlayerObj.offsetWidth, avPlayerObj.offsetHeight);
			webapis.avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
			webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF);
			updateDuration();
			playVideo();
			
		} catch (e) {
			retry_error_popup();
			console.log("error in prepare 'In READY state' function: " + e);
		}
	}
}

var errorCallback = function() {
	console.log('The media has failed to prepare');
	retry_error_popup();
}

var prepareVideo = function() {
	try {
		console.log("prepare video");
		webapis.avplay.prepareAsync(successCallback,errorCallback);
	} catch (e) {
		retry_error_popup();
		console.log("error in prepare function: " + e);
	}
};
	
var playVideo = function() {
	if (document.hidden) {
		console.log("App in background");
	} else {
		console.log("play video");
		if ($('#video_container').css('display', 'block')) {
			$(".pause-icon").hide();
			webapis.avplay.play();
			show_hide_progress_bar_after_specific_time();

		} else {
			closeVideo();
		}
	}
};
	
var pauseVideo = function() {
	if ($('#video_container').is(':visible')) {
		console.log("pause video");
		$(".pause-icon").show();
		webapis.avplay.pause();
		show_hide_progress_bar_after_specific_time();
	}
};
	
var closeVideo = function() {
	console.log("close video");
	clearInterval(VIDEO_CURRENT_PLAY_COUNTER_INTERVAL);
	VIDEO_CURRENT_PLAY_COUNTER = 1;
	$(".circle_loader").removeClass('circle-loader-middle');
	unregister_mediakey();
	webapis.avplay.close();	
	webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON);
	sessionStorage.FWD_RWD_key_press = 0;
	$("#av-player").css('display','none');
	$("#video_container").hide();
	$(".video-inner").hide();
	$(".loader").hide();
	$(".progress-container").hide();
	
	$(".menu_container").show().addClass('active');
	$(".video_container").removeClass('active');
	$(".pause-icon").hide();
	
	$(".subcat_container").addClass("active");
	$.caph.focus.controllerProvider.getInstance().setDepth(3);
};

var stopVideo = function() {
	webapis.avplay.stop();
	updateCurrentTime();
	show_hide_video_container();
	closeVideo();
};

var successForwardCallback = function(time) {
	console.log("success in jump forward");
};

var errorForwardCallback = function(time) {
	console.log("error in jump forward");
};

var jumpBackwardVideo = function(time) {
	show_hide_progress_bar_after_specific_time();
	webapis.avplay.jumpBackward(time);    	
	updateCurrentTime();

	if (webapis.avplay.getState() == "PAUSED") {
		webapis.avplay.play();
	}
};

var jumpForwardVideo = function(time) {
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
function progress_bar(percentage)
{
	if (DATA_OBJ[0]['stream_type'] == "M") $('.progress-bar').css('width', percentage + "%");
}

//This function is used to hide progress bar after 10 second
function show_hide_progress_bar_after_specific_time()
{
	clearInterval(hide_progress_bar);
	if (DATA_OBJ[0]['stream_type'] == "M") {
		if (webapis.avplay.getDuration() > 0 && (webapis.avplay.getState() == "PAUSED" || webapis.avplay.getState() == "PLAYING")) {
			if ($('.progress-container').css('display') == 'none') {
				$(".progress-container").show();
			}

			hide_progress_bar = setTimeout(function() {
				running = false;
				$(".progress-container").hide();
			}, 10000);
		}
	}
}