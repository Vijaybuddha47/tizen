function load_preview_player() {
    console.log("load_preview_player");
    $(".video_player_error_message").hide();
    webapis.avplay.stop();
    webapis.avplay.close();
    console.log("VOD_URL==>", VOD_URL);
    $(".preview-video-inner").show();
    video_play_statewise();
    PREVIEW_PLAYER = true;
}

// Start video fucntion from here
function load_main_player() {
    try {
        console.log("start playing video");
        PREVIEW_PLAYER = false;
        TAB_INDEX = 6;
        $(".pause-icon").hide();
        show_hide_video_container();
        unregister_mediakey();
        webapis.avplay.stop();
        webapis.avplay.close();
        sessionStorage.FWD_RWD_key_press = 0;
        $(".player_progress").hide();
        progress_bar(0);
        document.getElementById("currentTime").innerHTML = "00:00:00";
        document.getElementById("totalTime").innerHTML = "/00:00:00";

        var totalVideo = get_total_video_or_first_video_index(1),
            firstItem = get_total_video_or_first_video_index(0);
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

        if (PAGE_INDEX == 1) {
            $("#playPreviousVideo").css('visibility', 'hidden');
            $("#playNextVideo").css('visibility', 'hidden');
            $("#playPauseVideo").attr('data-sn-left', 'null');
            $("#playPauseVideo").attr('data-sn-right', 'null');
        }

        if (PAGE_INDEX == 1) show_hide_video_next_previous(false);
        else show_hide_video_next_previous(true);

        video_play_statewise();
        SN.focus("videoPlayer");
    } catch (e) {
        var msg = "";
        if (navigator.onLine) msg = "The content is currently unavailable. Please check back later.";
        else msg = NET_CONNECTION_ERR;
        if (webapis.avplay.getState() == "NONE" || webapis.avplay.getState() == "IDLE" && !PREVIEW_PLAYER) {
            if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
                hide_show_modal(true, 'RETRY_CANCEL', msg);
            }
        }
        console.log("Error in load video: " + e);
    }
}

function video_play_statewise() {
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
}

function show_hide_video_loader() {
    if ($(".video_container").hasClass('active') && $('.video_container').is(':visible')) $(".video-inner").show();
    else $(".preview-video-inner").show();
}

// Open video screen
function show_hide_video_container() {
    $(".pause-icon").hide();
    $(".video-inner").show();
    $(".video-loader").show();
    $(".main_conatiner, .home_container, .setting_container, .account_container, .search_container, .video_library_container").removeClass("active").hide();
    $(".main_container").hide();
    $("#video_container").addClass("active").show();
    $("#av-player").css("display", "block");
}


//This function is used to register Media Key of Remote
function register_mediakey() {
    tizen.tvinputdevice.registerKey("MediaFastForward");
    tizen.tvinputdevice.registerKey("MediaRewind");
    tizen.tvinputdevice.registerKey("MediaPlay");
    tizen.tvinputdevice.registerKey("MediaPause");
    tizen.tvinputdevice.registerKey("MediaStop");
    return;
}

//This function is used to Unregister Media Key of Remote
function unregister_mediakey() {
    tizen.tvinputdevice.unregisterKey("MediaFastForward");
    tizen.tvinputdevice.unregisterKey("MediaRewind");
    tizen.tvinputdevice.unregisterKey("MediaPlay");
    tizen.tvinputdevice.unregisterKey("MediaPause");
    tizen.tvinputdevice.unregisterKey("MediaStop");
    return;
}

function retry_error_popup(playerErrorType) {
    console.log("retry_error_popup() " + webapis.avplay.getState(), playerErrorType);
    var onlineStatus = navigator.onLine;
    unregister_mediakey();

    progress_bar(0);

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
    if (webapis.avplay.getState() == "NONE" || webapis.avplay.getState() == "IDLE" && !PREVIEW_PLAYER) {
        if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
            if (errorMsg != "" && onlineStatus) msg = errorMsg;
            hide_show_modal(true, 'RETRY_CANCEL', msg);
        }

    }
}

// It returns current vod object while playing video
function get_video_obj() {
    var obj = "";
    var countryName = "";
    var index = "";
    switch (PAGE_INDEX) {
        case 0:
            countryName = $("#" + FIRST_PAGE_SELECTED_ITEM).parent().attr("data-name");
            index = $("#" + FIRST_PAGE_SELECTED_ITEM).index();
            obj = APP_CHANNEL_DATA_ARRAY[countryName][index];
            break;
    }

    return obj;
}

//This function is used for display two digit number from 1-9
function min_two_digits(number) {
    return (number < 10 ? '0' : '') + number;
}


