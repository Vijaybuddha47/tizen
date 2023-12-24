window.addEventListener('load', function () {
    set_focus('videoPlayer', 'video_container');
    // When search input focus
    $('#videoPlayer').on('sn:focused', function (e) {
        console.log("video player focus");
        TAB_INDEX = 5;
    });

    set_focus('videoNextPrevious', 'playPauseVideo');

    $('#videoNextPrevious').on('sn:focused', function (e) {
        $(".video_next_previous_container").show();
        $(".progress-container").show();
        hide_progress_bar = setTimeout(function () {
            running = false;
            $(".video_next_previous_container").hide();
            $(".progress-container").hide();
            SN.focus('videoPlayer');
        }, 10000);
    });

    // Next/Previous Video
    $('#videoNextPrevious').on('sn:enter-down', function (e) {
        if ($("#playPreviousVideo").is(":focus")) {
            if (VIDEO_COUNT != 0) VIDEO_COUNT = 0;
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
            if (VIDEO_COUNT != 0) VIDEO_COUNT = 0;
            previous_next_video(type = "next");
        }
    });

    // When something press from remote keys
    $(window).keydown(function (evt) {
        console.log("key event", evt.keyCode);
        if (!$("#playBtn").is(":focus") && !$(".tile-grid").is(":focus")) GRID_FOCUS = false;

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
                if ($(".modal_container").hasClass("active")) {
                    if (TAB_INDEX == 0) {
                        $(".home_container").addClass("active");
                        hide_show_modal(false, 'EXIT');
                        SN.focus("hamburger");
                    } else if (TAB_INDEX == 7) {
                        closeVideo();
                    }
                }
                else if ($(".upgrade_container").css("display") == "block") {
                    tizen.application.getCurrentApplication().exit();
                }
                else if ($(".home_container").hasClass("active") && $(".menulist_container").hasClass("active") && $("#menuList").hasClass("show_menu")) {
                    set_default_widget_image();
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    $("#menuImg").attr("src", "images/menu_focus.png");
                    SN.focus("#hamburger");

                    //Exit from app
                } else if ($(".home_container").hasClass("active") && !$(".menulist_container").hasClass("active") && $("#hamburger").is(":focus") && !$(".splash-screen").is(':visible')) {
                    console.log("show exit popup...");
                    hide_show_modal(true, "EXIT", APP_EXIT_MSG);

                    //shift focus on hamburger menu
                } else if ($(".home_container").hasClass("active") && (($('[id^=home_page_item_]').is(":focus")) || $('[id^=home_page_menu_wise_item_]').is(":focus") || ($(":focus").parent().attr("id") == "homepageButton"))) {
                    // SN.focus("homepage_header");
                    if ($("#" + FIRST_PAGE_FOCUSED_ITEM).hasClass('tile-grid')) {
                        $("#" + FIRST_PAGE_FOCUSED_ITEM).find("img").attr("src", "images/tile_button.png");
                    }
                    SN.focus("#hamburger");

                    //Back from talent page to home page
                } else if ($(".talent_page_container").hasClass("active") && ($('[id^=creator_video_list_]').is(":focus") || ($(":focus").parent().parent().attr("id") == "CancelButton"))) {
                    console.log("return focus from talent page to home page");
                    $(".talent_page_container").removeClass("active").hide();
                    $(".common_header").hide();

                    $(".homepage_header").show();
                    $(".home_container").addClass("active").show();
                    SN.focus("homepage_header");
                    TAB_INDEX = '';

                } else if ($(".category_container").hasClass("active") && ($('[id^=category_row_video_list_]').is(":focus") || ($(":focus").parent().parent().attr("id") == "CancelButton"))) {
                    console.log("return focus from category to home page");
                    $(".category_container").removeClass("active").hide();
                    $(".common_header").hide();
                    set_home_background();
                    $(".home_container").addClass("active").show();
                    $(".homepage_header").show();
                    SN.focus("homePageItem");
                    TAB_INDEX = '';

                } else if ($(".detail_page_main_container").hasClass("active") && ($('[id^=deatil_page_video_item_]').is(":focus") || ($(":focus").parent().attr("id") == "DetailPageButton") || ($(":focus").parent().parent().attr("id") == "CancelButton"))) {
                    console.log("category detail page close enter...");
                    $(".detail_page_main_container").removeClass("active").hide();
                    $(".common_header").hide();
                    THIRD_PAGE_SELECTED_DATA_ARRAY = {};
                    THIRD_PAGE_SELECTED_DATA_ID = '';
                    show_page_by_index(PAGE_INDEX);

                } else if ($(".search_container").hasClass("active") && ($("#searchEnter").is(":focus") || $("#searchText").is(":focus"))) {
                    console.log("return focus from search input to home page");
                    $(".search_container").removeClass("active").hide();
                    $(".common_header").hide();
                    $(".header_container").show();
                    set_home_background();
                    $(".home_container").addClass("active").show();
                    $(".homepage_header").show();
                    SN.focus("#searchInputText");

                } else if ($(".search_result_main_container").hasClass("active") && ($('[id^=search_item_]').is(":focus") || ($(":focus").parent().parent().attr("id") == "CancelButton"))) {
                    console.log("return focus from search result to search input page");
                    $(".search_result_main_container").removeClass("active").hide();
                    $(".common_header").hide();
                    set_home_background();
                    $("#searchResultList").html("");
                    $(".search_container").addClass("active").show();
                    SN.focus("searchPage");

                } else if ($(".favorite_page_container").hasClass("active") && ($('[id^=favorite_video_list_]').is(":focus") || ($(":focus").parent().parent().attr("id") == "CancelButton"))) {
                    console.log("return focus favorite to home page");
                    $(".favorite_page_container").removeClass("active").hide();
                    $(".common_header").hide();
                    set_home_background();
                    $("#favoriteList").html("");
                    $(".home_container").addClass("active").show();
                    $(".homepage_header").show();
                    SN.focus("#hamburger");
                    TAB_INDEX = '';

                } else if ($(".instruction_main_container").hasClass("active")) {
                    console.log("return focusfrom instruction to home page");
                    clearTimeout(TIME_OUT);
                    TIME_OUT = null;
                    TIME_COUNTER_LEFT = 0;
                    $(".instruction_main_container").removeClass("active").hide();
                    $(".common_header").hide();
                    set_home_background();
                    $(".home_container").addClass("active").show();
                    $(".homepage_header").show();
                    SN.focus("homepageButton");
                }
                // Back video player to home page
                else if ($(".video_container").hasClass("active")) {
                    console.log("return focus from video player to home page");
                    closeVideo();
                }

                break;

            case 37: // LEFT arrow
                console.log("left key");
                if ($(".menulist_container").hasClass("active") && ($(":focus").parent().attr("id") == "home_tablist")) {
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    $("#menuImg").attr("src", "images/menu.png");
                    SN.focus("#" + LAST_FOCUSED_ITEM);
                    GRID_FOCUS = true;
                } else if ($(".search_container").hasClass("active") && ($("#searchText").is(":focus"))) {
                    controlLeftArrowKeys();
                }
                break;

            case 39: // RIGHT arrow
                console.log("right key");
                if (!$(".menulist_container").hasClass("active") && ($("#playBtn").is(":focus") || $(".tile-grid").is(":focus")) && GRID_FOCUS) {
                    if ($("#playBtn").is(":focus")) change_focused_homepage_button('');
                    else if ($(".tile-grid").is(":focus")) $(".tile-grid").find('img').attr("src", "images/tile_button.png");
                    $(".menulist_container").addClass("active");
                    $("#menuList").addClass("show_menu");
                    $("#menuImg").attr("src", "images/close_menu.png");
                    SN.focus("home_tablist");
                    GRID_FOCUS = false;
                } else if ($("#hamburger").is(":focus") || $("#playBtn").is(":focus") || $(".tile-grid").is(":focus")) GRID_FOCUS = true;
                else if ($(".search_container").hasClass("active") && ($("#searchText").is(":focus"))) {
                    controlrightArrowKeys();
                }
                break;

            case 413: // Stop button
                console.log("stop key");
                break;

            case 40: //Down key
                console.log("down key");
                if ($(".video_container").hasClass("active")) {
                    $(".video_next_previous_container").show();
                    SN.focus("videoNextPrevious");
                } else if ($(".menulist_container").hasClass("active") && $("#hamburger").is(":focus")) {
                    $("#menuImg").attr("src", "images/close_menu.png");
                    console.log("focus menu list");
                    SN.focus("home_tablist");
                } else if ($(".home_container").hasClass("active") && $("#searchInputText").is(":focus")) {
                    SN.focus("homepageButton");
                } else if ($(".home_container").hasClass("active") && $('[id^=talent_]').is(":focus")) {
                    console.log("focus home page button");
                    SN.focus("homepageButton");
                } else if (!$(".menulist_container").hasClass("active") && $("#hamburger").is(":focus")) {
                    $("#menuImg").attr("src", "images/menu.png");
                    SN.focus("homepageButton");
                } else if ($(".home_container").hasClass("active") && ($(":focus").parent().attr("id") == "homepageButton") && $('#homePageItem').is(':visible')) {
                    console.log("focus home page button");
                    SN.focus("homePageItem");
                    //Focus show items
                } else if ($(".home_container").hasClass("active") && ($(":focus").parent().attr("id") == "homepageButton") && $('#homePageMenuWiseItem').is(':visible')) {
                    console.log("focus shows element");
                    SN.focus("homePageMenuWiseItem");
                } else if ($(".detail_page_main_container").hasClass("active") && $("#BackBtn").is(":focus")) {
                    console.log("focus shift to detail_play_btn");

                } else if ($(".talent_page_container").hasClass("active") && $("#BackBtn").is(":focus")) {
                    console.log("focus shift to talent's video list");
                    $("#BackBtn").attr("src", "images/close.png");
                    SN.focus("creator_video_list");
                }
                break;

            case 38: //Up key
                console.log("up key");
                break;


            case 65376: // Done from IME keyboard
                console.log("OK from keyboard...");
                if ($(".search_container").hasClass("active") && $("#searchText").is(":focus") && $("#searchText").val() != '') {
                    request_search_results();
                }
                break;

            case 65385: // Cancel from IME keyboard
                console.log("Cancel from keyboard...");
                // set search text in hidden div
                // set_search_text();
                break;

            default:
                console.log("Key code : " + evt.keyCode);
                break;
        }
    });
});