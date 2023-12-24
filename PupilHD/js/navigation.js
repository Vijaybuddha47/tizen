window.addEventListener('load', function () {
    manage_spatial_navigation("Favorite_button");

    set_focus('videoPlayer', 'video_container');

    set_focus('previewVideoPlayer', 'preview_video_container');
    //when preview player focused
    $('#preview_video_container').on('sn:focused', function (e) {
        console.log("preview video container player focus");
        $("#video_content_details").show();
        if (TIMER) {
            clearTimeout(TIMER); //cancel the previous TIMER.
            TIMER = null;
        }
        TIMER = setTimeout(function () {
            $("#video_content_details").hide();
            if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
        }, 3000);
        TAB_INDEX = 6;
    });

    set_focus('videoNextPrevious', 'playPauseVideo');

    $('#videoNextPrevious').on('sn:focused', function (e) {
        console.log("videoNextPrevious player focus");
        $("#playPreviousVideo").find("img").attr("src", "images/previous_video.png");
        $("#playPauseVideo").find("img").attr("src", "images/pause.png");
        $("#playNextVideo").find("img").attr("src", "images/next_video.png");

        if (e.target.id == "playPreviousVideo") $("#playPreviousVideo").find("img").attr("src", "images/previous_video_focus.png");
        if (e.target.id == "playNextVideo") $("#playNextVideo").find("img").attr("src", "images/next_video_focus.png");
        if (e.target.id == "playPauseVideo") {
            if (webapis.avplay.getState() == "PAUSED")
                $("#playPauseVideo").find("img").attr("src", "images/play_focus.png");
            else if (webapis.avplay.getState() == "PLAYING")
                $("#playPauseVideo").find("img").attr("src", "images/pause_focus.png");
        } else {
            if (webapis.avplay.getState() == "PAUSED")
                $("#playPauseVideo").find("img").attr("src", "images/play.png");
            else if (webapis.avplay.getState() == "PLAYING")
                $("#playPauseVideo").find("img").attr("src", "images/pause.png");
        }

        if (TIMER) {
            clearTimeout(TIMER); //cancel the previous TIMER.
            TIMER = null;
        }
        TIMER = setTimeout(function () {
            show_hide_player_progress(false);
            show_hide_show_deatils(false);
        }, 3000);

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
                                    webapis.avplay.play();
                                } catch (e) {
                                    playVideo();
                                    webapis.avplay.play();
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

        // When number key pressed
        if (evt.keyCode <= 57 && evt.keyCode >= 48 && PREVIEW_FULL_DISPLAY) {
            console.log("Number key pressed...");
            show_channel_input_box(evt.key);
        }

        switch (evt.keyCode) {
            case 13: // Ok
                console.log("Ok key");
                if ($("#av-player").css('display') == 'block' && $("ul.video_next_previous_icon_list li:focus").size() < 1) {
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
                } else if ($("#av-player").css('display') == 'block' && $("ul.video_next_previous_icon_list li:focus").size() > 0) {
                    console.log("next and preview button clicked");

                } else if (PREVIEW_FULL_DISPLAY && (PAGE_INDEX == 0 || PAGE_INDEX == 3)) {
                    console.log("focus fav button");
                    $("#video_content_details").show();
                    if (PAGE_INDEX == 0) SN.focus("favorite_button");
                    if (TIMER) {
                        clearTimeout(TIMER); //cancel the previous TIMER.
                        TIMER = null;
                    }
                    TIMER = setTimeout(function () {
                        $("#video_content_details").hide();
                        if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
                    }, 3000);
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


            case 10009: // Return key
                console.log("return key");
                if ($('.modal_container').hasClass('active')) {
                    var name = $(".modal_container").attr("data-modal-name");
                    hide_show_modal(false, name);
                } else if ((PAGE_INDEX == 0 || PAGE_INDEX == 3) && PREVIEW_FULL_DISPLAY) {
                    minimize_preview_player();
                } else if ($("#left_sidebar li").is(":focus")) {
                    $('.menu_container').addClass('toggle_menu');
                    if ($('.account_container').is(':visible')) SN.focus("account_btns");
                    else if ($('.setting_container').is(':visible')) SN.focus("alpha_numeric");
                    else if ($('.search_container').is(':visible')) {
                        if (_.size(SEARCHED_VIDEO_LIST) > 0 || _.size(SEARCHED_TV_CHANNELS_LIST) > 0) SN.focus("#" + FOURTH_PAGE_FOCUSED_ITEM);
                        else SN.focus("searchBox");
                    } else if ($('.home_container').is(':visible')) SN.focus("#" + FIRST_PAGE_FOCUSED_ITEM);
                    else if ($('.video_library_container').is(':visible') && $('.video_list').is(':visible')) {
                        var parentId = $("#" + SECOND_PAGE_FOCUSED_ITEM).parent().attr("id");
                        SN.focus(parentId);
                        $('.menu_container').addClass('toggle_menu');
                    } else if ($('.video_library_container').is(':visible') && $('.episode_container').is(':visible')) {
                        SN.focus("episode_list");
                        $('.menu_container').addClass('toggle_menu');
                    }
                } else if ($('.home_container').hasClass('active') && !PREVIEW_FULL_DISPLAY) {
                    SN.focus("left_sidebar");
                } else if ($('.search_container').hasClass('active')) {
                    if (($("#search_result_episode_container").css("display") == "block")) {
                        $("#search_result_episode_container").hide();
                        $("#search_tv_channels").show();
                        $("#search_videos").show();
                        SN.focus("video_result");
                    } else if (!PREVIEW_FULL_DISPLAY && ($("#av-player").css("display") != "block")) SN.focus("left_sidebar");
                    else if (PREVIEW_FULL_DISPLAY && ($("#av-player").css("display") == "block")) minimize_preview_player();
                } else if ($('.account_container').hasClass('active')) {
                    if (($(":focus").parent().attr("id") == "account_btns")) SN.focus("left_sidebar");
                    else if ($("#manage_popup").is(":focus")) {
                        $("#manage_modal").hide();
                        SN.focus("account_btns");
                    } else if (($(":focus").parent().attr("id") == "logout_modal")) {
                        $(".account_form .logout_modal").hide();
                        SN.focus("account_btns");
                    }
                } else if ($('.setting_container').is(':visible') && $('.setting_container').hasClass('active')) {
                    if ($('[id^=country_number_1_').is(":focus") && ($("#first_country_list").css("display") == "block")) {
                        $("#first_country_list").css("display", "none");
                        SN.focus("#first_country");
                    } else if ($('[id^=country_number_2_').is(":focus") && ($("#second_country_list").css("display") == "block")) {
                        $("#second_country_list").css("display", "none");
                        SN.focus("#second_country");
                    } else if ($('[id^=country_number_3_').is(":focus") && ($("#third_country_list").css("display") == "block")) {
                        $("#third_country_list").css("display", "none");
                        SN.focus("#third_country");
                    } else {
                        SN.focus("left_sidebar");
                    }
                } else if ($(".exit_container").hasClass("active") && $("#exitOk").is(":focus")) {
                    SN.focus("left_sidebar");
                } else if ($(".video_container").hasClass("active")) {
                    console.log("close main video player");
                    closeVideo();
                } else if ($(".video_library_container").hasClass("active")) {
                    if ($(".episode_container").css("display") == "block") {
                        $(".episode_container").hide();
                        $(".video_list").show();
                        SN.focus("#" + SECOND_PAGE_FOCUSED_ITEM);
                    } else if ($("#av-player").css("display") != "block") {
                        SN.focus("left_sidebar");
                    }
                }
                break;

            case 37: // LEFT arrow
                console.log("left key");
                if (PREVIEW_FULL_DISPLAY && (PAGE_INDEX == 0 || PAGE_INDEX == 3)) {
                    $("#video_content_details").show();
                    SN.focus("favorite_button");
                    if (TIMER) {
                        clearTimeout(TIMER); //cancel the previous TIMER.
                        TIMER = null;
                    }
                    TIMER = setTimeout(function () {
                        $("#video_content_details").hide();
                        if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
                    }, 3000);
                } else if ($('.search_container').hasClass('active') && $("#searchInputText").is(":focus")) {
                    var textEntered = get_searched_text();
                    if (textEntered) controlLeftArrowKeys();
                }
                break;

            case 39: // RIGHT arrow
                console.log("right key");
                if ($("#left_sidebar li").is(":focus")) {
                    hide_left_sidebar();
                    if ($('.account_container').is(':visible')) SN.focus("account_btns");
                    else if ($('.setting_container').is(':visible')) SN.focus("alpha_numeric");
                    else if ($('.search_container').is(':visible')) {
                        if (_.size(SEARCHED_VIDEO_LIST) > 0 || _.size(SEARCHED_TV_CHANNELS_LIST) > 0) SN.focus("#" + FOURTH_PAGE_FOCUSED_ITEM);
                        else SN.focus("searchBox");
                    } else if ($('.home_container').is(':visible')) SN.focus("#" + FIRST_PAGE_FOCUSED_ITEM);
                    else if ($('.video_library_container').is(':visible') && $('.video_list').is(':visible')) {
                        var parentId = $("#" + SECOND_PAGE_FOCUSED_ITEM).parent().attr("id");
                        SN.focus(parentId);
                        $('.menu_container').addClass('toggle_menu');
                    } else if ($('.video_library_container').is(':visible') && $('.episode_container').is(':visible')) {
                        SN.focus("episode_list");
                        $('.menu_container').addClass('toggle_menu');
                    } else if ($('.exit_container').hasClass('active') && $('.exit_container').is(':visible')) {
                        $('.menu_container').addClass('toggle_menu');
                        SN.focus("#exitOk");
                    }
                } else if (PREVIEW_FULL_DISPLAY && (PAGE_INDEX == 0 || PAGE_INDEX == 3)) {
                    $("#video_content_details").show();
                    SN.focus("favorite_button");
                    if (TIMER) {
                        clearTimeout(TIMER); //cancel the previous TIMER.
                        TIMER = null;
                    }
                    TIMER = setTimeout(function () {
                        $("#video_content_details").hide();
                        if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
                    }, 3000);
                } else if ($('.search_container').hasClass('active') && $("#searchInputText").is(":focus")) {
                    var textEntered = get_searched_text();
                    if (textEntered) controlrightArrowKeys();
                }
                break;

            case 413: // Stop button
                console.log("stop key");
                if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
                    closeVideo();
                }
                break;

            case 40: //Down key
                console.log("down key");
                if ($('.home_container').is(':visible') && $('.home_container').hasClass('active') && $('[id^=row_item]').is(":focus")) {
                    var id = $(":focus").attr("id");
                    var i = Number($("#" + id).parent().attr("data-id"));
                    SN.focus("channel_list_" + (Number(i) + 1));
                } else if ($('.home_container').is(':visible') && $('.home_container').hasClass('active') && $('[id^=fav_channel_]').is(":focus")) {
                    SN.focus("channel_list_0");
                } else if ($('.setting_container').is(':visible') && $('.setting_container').hasClass('active')) {
                    console.log("setting_container country button");
                }
                else if ($('.video_library_container').is(':visible') && $('.video_library_container').hasClass('active') && $('[id^=video_item_]').is(":focus")) {
                    var id = $(":focus").attr("id");
                    var i = Number($("#" + id).parent().attr("data-id"));
                    if (i < _.size(APP_VIDEO_CATEGORY)) {
                        var f = SN.focus("video_list_" + (i + 1));
                        if (!f) {
                            focus_video_list((i + 1));
                            SN.focus("video_list_" + (i + 1));
                        }
                    }
                } else if ($('.search_container').is(':visible') && $('.search_container').hasClass('active') && $('#searchInputText').is(":focus")) {
                    if (SEARCHED_TV_CHANNELS_LIST.length > 0) SN.focus("channel_result");
                    else if (SEARCHED_VIDEO_LIST.length > 0) SN.focus("video_result");

                } else if ($(".video_container").hasClass("active")) {
                    if (PAGE_INDEX == 1 || PAGE_INDEX == 2 || PAGE_INDEX == 3) {
                        show_hide_player_progress(true);
                        if (PAGE_INDEX == 1 || PAGE_INDEX == 2) show_hide_show_deatils(true);
                        SN.focus("videoNextPrevious");
                    }
                }
                break;

            case 38: //Up key
                console.log("up key");
                if ($('.home_container').is(':visible') && $('.home_container').hasClass('active') && $('[id^=row_item]').is(":focus")) {
                    var id = $(":focus").attr("id");
                    var i = $("#" + id).parent().attr("data-id");
                    if (i > 0) SN.focus("channel_list_" + (Number(i) - 1));
                    else if (i == 0 && _.size(FAVORITE_LIST) > 0) SN.focus("favorite_list");
                } else if ($('.video_library_container').is(':visible') && $('.video_library_container').hasClass('active') && $('[id^=video_item_]').is(":focus")) {
                    var i = Number($(":focus").parent().attr("data-id"));
                    if (i - 1 < _.size(APP_VIDEO_CATEGORY)) SN.focus("video_list_" + (i - 1));
                } else if ($('.search_container').is(':visible') && $('.search_container').hasClass('active') && $('[id^=video_result_]').is(":focus")) {
                    if (SEARCHED_TV_CHANNELS_LIST.length > 0) SN.focus("channel_result");
                }
                break;

            case 427:    //ChannelUp key
                console.log("channelUp");
                if ((MENU_INDEX == 0) && PREVIEW_FULL_DISPLAY) {
                    if ($('#preview-av-player').is(':visible')) {
                        if (SELECTED_CHANNEL_TYPE == "FAV") {
                            if (SELECTED_CHANNEL_INDEX < (_.size(FAVORITE_LIST) - 1)) {
                                SELECTED_CHANNEL_INDEX = $("#favorite_list_0 li:nth-child(" + (SELECTED_CHANNEL_INDEX + 1) + ")").next('li').index();
                                FIRST_PAGE_SELECTED_ITEM = FIRST_PAGE_FOCUSED_ITEM = $("#favorite_list_0 li:nth-child(" + (SELECTED_CHANNEL_INDEX) + ")").next('li').attr("id")
                                SELECTED_CAT_INDEX = $("#" + FIRST_PAGE_SELECTED_ITEM).parent().attr("data-name");
                                SELECTED_CHANNEL_NUMBER = Number($("#" + FIRST_PAGE_SELECTED_ITEM).attr("data-id"));
                                get_player_channel_epg(APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]["id"]);
                                webapis.avplay.stop();
                                webapis.avplay.close();
                                VOD_URL = APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]['url'];
                                checkVideoURL();
                                if (APP_CHANNEL_DATA_ARRAY[SELECTED_CAT_INDEX][SELECTED_CHANNEL_INDEX]['favorite'] || typeof FAVORITE_DATA[SELECTED_CHANNEL_NUMBER] !== 'undefined') {
                                    $("#player_fav").addClass("added");
                                    $("#player_fav").text("- FAV");
                                }
                                else {
                                    $("#player_fav").removeClass("added");
                                    $("#player_fav").text("+ FAV");
                                }

                                set_info_bar();
                                $("#video_content_details").show();
                                SN.focus("favorite_button");
                            }

                        } else if (SELECTED_CHANNEL_TYPE == "CHA") {
                            var data = {};
                            if (SELECTED_COUNTRY_GENRE == "COUNTRY") data = COUNTRY_WISE_CHANNEL_DATA;
                            else if (SELECTED_COUNTRY_GENRE == "GENRE") data = GENRE_WISE_CHANNEL_DATA;
                            if (SELECTED_CHANNEL_INDEX < (_.size(data[SELECTED_CAT_INDEX]) - 1)) {
                                SELECTED_CHANNEL_INDEX = $("#" + SELECTED_CHANNEL_ROW + " li:nth-child(" + (SELECTED_CHANNEL_INDEX + 1) + ")").next('li').index();
                                FIRST_PAGE_SELECTED_ITEM = FIRST_PAGE_FOCUSED_ITEM = $("#" + SELECTED_CHANNEL_ROW + " li:nth-child(" + (SELECTED_CHANNEL_INDEX) + ")").next('li').attr("id")
                                SELECTED_CAT_INDEX = $("#" + FIRST_PAGE_SELECTED_ITEM).parent().attr("data-name");
                                SELECTED_CHANNEL_NUMBER = Number($("#" + FIRST_PAGE_SELECTED_ITEM).attr("data-channel"));
                                get_player_channel_epg(APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]["id"]);
                                webapis.avplay.stop();
                                webapis.avplay.close();
                                VOD_URL = APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]['url'];
                                checkVideoURL();
                                if (data[SELECTED_CAT_INDEX][SELECTED_CHANNEL_INDEX]['favorite'] || typeof FAVORITE_DATA[SELECTED_CHANNEL_NUMBER] !== 'undefined') {
                                    $("#player_fav").addClass("added");
                                    $("#player_fav").text("- FAV");
                                }
                                else {
                                    $("#player_fav").removeClass("added");
                                    $("#player_fav").text("+ FAV");
                                }

                                set_info_bar();
                                $("#video_content_details").show();
                                SN.focus("favorite_button");
                            }
                        }
                    }
                }
                break;

            case 428:    //ChannelDown key
                console.log("channelDown");
                if ((MENU_INDEX == 0) && PREVIEW_FULL_DISPLAY) {
                    if ($('#preview-av-player').is(':visible')) {
                        if (SELECTED_CHANNEL_TYPE == "FAV") {
                            if (SELECTED_CHANNEL_INDEX < _.size(FAVORITE_LIST) && SELECTED_CHANNEL_INDEX > 0) {
                                SELECTED_CHANNEL_INDEX = SELECTED_CHANNEL_INDEX - 1;
                                FIRST_PAGE_SELECTED_ITEM = FIRST_PAGE_FOCUSED_ITEM = $("#favorite_list_0 li:nth-child(" + (SELECTED_CHANNEL_INDEX + 1) + ")").attr("id")
                                SELECTED_CAT_INDEX = $("#" + FIRST_PAGE_SELECTED_ITEM).parent().attr("data-name");
                                SELECTED_CHANNEL_NUMBER = Number($("#" + FIRST_PAGE_SELECTED_ITEM).attr("data-id"));
                                get_player_channel_epg(APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]["id"]);
                                webapis.avplay.stop();
                                webapis.avplay.close();
                                VOD_URL = APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]['url'];
                                checkVideoURL();
                                if (APP_CHANNEL_DATA_ARRAY[SELECTED_CAT_INDEX][SELECTED_CHANNEL_INDEX]['favorite'] || typeof FAVORITE_DATA[SELECTED_CHANNEL_NUMBER] !== 'undefined') {
                                    $("#player_fav").addClass("added");
                                    $("#player_fav").text("- FAV");
                                }
                                else {
                                    $("#player_fav").removeClass("added");
                                    $("#player_fav").text("+ FAV");
                                }

                                set_info_bar();
                                $("#video_content_details").show();
                                SN.focus("favorite_button");
                            }

                        } else if (SELECTED_CHANNEL_TYPE == "CHA") {
                            var data = {};
                            if (SELECTED_COUNTRY_GENRE == "COUNTRY") data = COUNTRY_WISE_CHANNEL_DATA;
                            else if (SELECTED_COUNTRY_GENRE == "GENRE") data = GENRE_WISE_CHANNEL_DATA;
                            if (SELECTED_CHANNEL_INDEX < _.size(data[SELECTED_CAT_INDEX]) && SELECTED_CHANNEL_INDEX > 0) {
                                SELECTED_CHANNEL_INDEX = SELECTED_CHANNEL_INDEX - 1;
                                FIRST_PAGE_SELECTED_ITEM = FIRST_PAGE_FOCUSED_ITEM = $("#" + SELECTED_CHANNEL_ROW + " li:nth-child(" + (SELECTED_CHANNEL_INDEX + 1) + ")").attr("id")
                                SELECTED_CAT_INDEX = $("#" + FIRST_PAGE_SELECTED_ITEM).parent().attr("data-name");
                                SELECTED_CHANNEL_NUMBER = Number($("#" + FIRST_PAGE_SELECTED_ITEM).attr("data-channel"));
                                get_player_channel_epg(APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]["id"]);
                                webapis.avplay.stop();
                                webapis.avplay.close();
                                VOD_URL = APP_CHANNEL_DATA[SELECTED_CHANNEL_NUMBER]['url'];
                                checkVideoURL();
                                if (data[SELECTED_CAT_INDEX][SELECTED_CHANNEL_INDEX]['favorite'] || typeof FAVORITE_DATA[SELECTED_CHANNEL_NUMBER] !== 'undefined') {
                                    $("#player_fav").addClass("added");
                                    $("#player_fav").text("- FAV");
                                }
                                else {
                                    $("#player_fav").removeClass("added");
                                    $("#player_fav").text("+ FAV");
                                }
                                set_info_bar();
                                $("#video_content_details").show();
                                SN.focus("favorite_button");
                            }
                        }
                    }
                }
                break;


            case 65376: // Done from IME keyboard
                console.log("OK from keyboard...");
                if ($(".search_container").hasClass("active")) {
                    if (!$('#searchInputText').is(":focus")) $('#searchInputText').focus();
                    else request_search_results();
                }
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