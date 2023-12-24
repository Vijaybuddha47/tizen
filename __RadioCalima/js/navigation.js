window.addEventListener('load', function () {
    set_focus('videoPlayer', 'video_container');
    // When search input focus
    $('#videoPlayer').on('sn:focused', function (e) {
        console.log("video player focus");
        TAB_INDEX = 7;
    });
    set_focus('videoNextPrevious', 'playPauseVideo');

    $('#videoNextPrevious').on('sn:focused', function (e) {
        $(".video_next_previous_container").show();
        clearInterval(hide_progress_bar);
        hide_progress_bar = setTimeout(function () {
            $(".video_next_previous_container").hide();
            SN.focus('videoPlayer');
        }, 10000);
    });

    // Next/Previous Video
    $('#videoNextPrevious').on('sn:enter-down', function (e) {
        if ($("#playPreviousVideo").is(":focus")) {
            previous_next_video(type = "previous");

        } else if ($("#playPauseVideo").is(":focus")) {
            if ($("#av-player").css('display') == 'block') {
                if (webapis.avplay.getState() == "PAUSED") {
                    $(".pause-icon").hide();
                    $("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png');
                    $(".video-title").text('');
                    if (webapis.avplay.getState() == "PAUSED") {
                        var currentTime = webapis.avplay.getCurrentTime();
                        var forwardTime = sessionStorage.video_forward_time;
                        var resultant = parseInt(forwardTime) - parseInt(currentTime);
                        var resultantTime = Math.abs(resultant);

                        if (sessionStorage.FWD_RWD_key_press == 1) {
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

        } else if ($("#playNextVideo").is(":focus")) {
            previous_next_video(type = "next");
        }
    });

    // When something press from remote keys
    $(window).keydown(function (evt) {
        console.log("key event", evt.keyCode);
        var elementId = evt.target.id;

        if (evt.keyCode == "37" || evt.keyCode == "39") {
            if ($(".navigation_box").hasClass("active")) {
                TIME_STAMP = Date.now();
                if (id == "menu_1") set_logout_menu_data();
                else parse_data(TIME_STAMP);
            }
        }


        switch (evt.keyCode) {
            case 13: // Ok
                console.log("Ok key");
                if ($(".radio_container").hasClass("active")) {
                    if (webapis.avplay.getState() == "PAUSED") {
                        playAudio();
                        callMetadata();
                    } else if (webapis.avplay.getState() == "PLAYING") {
                        pauseAudio();
                        clearInterval(icecast_time_interval);
                    }
                }
                break;

            case 415: // Play
                console.log("play key");
                if ($(".video_container").hasClass("active")) {
                    $("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png');
                    $(".pause-icon").hide();
                    $(".video-title").text('');

                    if (webapis.avplay.getState() == "PAUSED") {
                        var currentTime = webapis.avplay.getCurrentTime();
                        var forwardTime = sessionStorage.video_forward_time;
                        var resultant = parseInt(forwardTime) - parseInt(currentTime);
                        var resultantTime = Math.abs(resultant);

                        if (sessionStorage.FWD_RWD_key_press == 1) {
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
                                    pauseVideo();

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
                console.log("pause key");
                if ($(".video_container").hasClass("active")) {
                    if (webapis.avplay.getState() == "PLAYING" && $('#av-player').is(':visible')) {
                        pauseVideo();
                    }
                }
                break;

            case 412: // Rewind 82
                console.log("rewind key");
                rewind_video();
                break;

            case 417: // FastForward
                console.log("fastForward key");
                forward_video();
                break;


            case 10009: // Return key parentalcontrol_popup
                console.log("return key");
                if ($(".modal_container").hasClass("active")) {
                    var name = $(".modal_container").attr("data-modal-name");
                    hide_show_modal(false, name);
                    //Exit app
                } else if ($(".home_container").hasClass("active") && $(".home_container").is(":visible") && ($(":focus").attr("id") == 'menu_0')) {
                    PAGE_INDEX = TAB_INDEX = 0;
                    hide_show_modal(true, "EXIT", APP_EXIT_MSG);
                    //Exit app
                } else if ($(".home_container").hasClass("active") && $(".home_container").is(":visible") && ($(":focus").parent().attr("id") == 'homeBtn')) {
                    SN.focus("#menu_0");
                } else if ($(".radio_container").hasClass("active")) {
                    console.log("return from radio screen...");
                    hide_show_screens("home_container");
                    closeAudio();
                    $("#music_cover").attr("src", "./images/splash_screen.png");
                    $(".poster_heading").hide();
                    $("#current_music_title").text("");
                    $(".sidescroll_time").css("display", "none");
                    $("#music_img_change").attr("src", "");
                    $("#" + SELECTED_ITEM).find(".play_icon").attr("src", "");
                    SELECTED_ITEM = '';
                    SN.focus("#" + FOCUSED_ITEM);
                } else if ($(".video_container").hasClass("active") && $(".video_container").is(":visible")) {
                    console.log("return from video screen...");
                    closeVideo();
                }

                break;

            case 37: // LEFT arrow
                console.log("left key");
                break;

            case 39: // RIGHT arrow
                console.log("right key");
                break;

            case 413: // Stop button
                console.log("stop key");
                if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
                    closeVideo();
                }
                break;

            case 40: //Down key
                console.log("down key");
                break;

            case 38: //Up key
                console.log("up key");

                break;

            case 427:    //ChannelUp key
                console.log("channelUp");
                break;

            case 428:    //ChannelDown key
                console.log("channelDown");
                break;


            case 65376: // Done from IME keyboard
                console.log("OK from keyboard...");
                break;

            case 65385: // Cancel from IME keyboard
                console.log("Cancel from keyboard...");
                // set search text in hidden div
                // document.getElementById('searchInputText').blur();
                break;

            default:
                console.log("Key code : " + evt.keyCode);
                break;
        }
    });
});