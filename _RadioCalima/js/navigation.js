window.addEventListener('load', function () {
    set_focus('videoPlayer', 'video_container');
    // When search input focus
    $('#videoPlayer').on('sn:focused', function (e) {
        console.log("video player focus");
        TAB_INDEX = 3;
    });

    // When something press from remote keys
    $(window).keydown(function (evt) {
        console.log("key event", evt.keyCode);

        switch (evt.keyCode) {
            case 13: // Ok
                console.log("Ok key");
                if ($(".radio_container").hasClass("active")) {
                    if (webapis.avplay.getState() == "PAUSED") {
                        playAudio();
                        callMetadata();
                    } else if (webapis.avplay.getState() == "PLAYING") {
                        pauseAudio();
                    }
                }
                break;

            case 10009: // Return key parentalcontrol_popup
                console.log("return key");
                if ($(".modal_container").hasClass("active")) {
                    var name = $(".modal_container").attr("data-modal-name");
                    hide_show_modal(false, name);
                    //Exit app
                } else if ($(".home_container").hasClass("active") && $(".home_container").is(":visible") && ($(":focus").attr("id") == 'menu_0')) {
                    hide_show_modal(true, "EXIT", APP_EXIT_MSG);
                    //Exit app
                } else if ($(".home_container").hasClass("active") && $(".home_container").is(":visible") && ($(":focus").parent().attr("id") == 'homeBtn')) {
                    SN.focus("#menu_0");
                } else if ($(".radio_container").hasClass("active")) {
                    console.log("return from radio screen...");
                    hide_show_screens("home_container");
                    closeAudio();
                    $("#music_cover").attr("src", "./images/splash_screen.png");
                    $("#current_music_title").css("display", "none").text("");
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

            default:
                console.log("Key code : " + evt.keyCode);
                break;
        }
    });
});