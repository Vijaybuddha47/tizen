function manage_spatial_navigation(containerClass, favoriteStatus, vodId) {
    switch (containerClass) {
        case "menu_container":
            set_focus('menu_items', 'menu_0');
            // When menu foucs
            $('#menu_items').on('sn:focused', function (e) {
                console.log("menu button focus...");
                SELECTED_MENU = e.target.id;
                $("li.nav_box").removeClass("selected_menu");
                $("#" + SELECTED_MENU).addClass("selected_menu");
                if (SELECTED_MENU == "menu_0") {
                    PAGE_INDEX = TAB_INDEX = 0;
                    hide_show_screens("home_container");
                } else if (SELECTED_MENU == "menu_1") {
                    PAGE_INDEX = TAB_INDEX = 2;
                    hide_show_screens("about_container");
                }
            });

            // Menu button selection
            $('#menu_items').on('sn:enter-down', function (e) {
                console.log("menu button enter...");
            });
            break;

        case "home_container":
            set_focus('homeBtn', 'home_0');
            // Home button foucs
            $('#homeBtn').on('sn:focused', function (e) {
                console.log("home button focus...");
                PAGE_INDEX = TAB_INDEX = 0;
            });

            // Home button selection
            $('#homeBtn').on('sn:enter-down', function (e) {
                console.log("home button enter...");
            });

            // radio button selection
            $('#home_0').on('sn:enter-down', function (e) {
                console.log("home button enter...");
                FOCUSED_ITEM = e.target.id;
                $(".main-container").hide();
                $("#video_container").show();
                $("#loader").show();
                checkVideoURL();
            });

            $('#home_1').on('sn:enter-down', function (e) {
                console.log("home button enter...");
                hide_show_screens("radio_container");
                FOCUSED_ITEM = e.target.id;
                SN.focus("musicList");
            });
            break;

        case "music_container":
            set_focus('musicList', 'music_0');
            // music list foucs
            $('#musicList').on('sn:focused', function (e) {
                console.log("music list focus...");
                PAGE_INDEX = TAB_INDEX = 1;
            });

            // music list selection
            $('#musicList').on('sn:enter-down', function (e) {
                console.log("music list enter...");
                var index = $("#" + e.target.id).index();
                var id = e.target.id;
                RADIO_PAGE_FOCUSED_ITEM = $("#" + e.target.id).index();
                AUDIO_PLAYER = true;
                if (SELECTED_ITEM == id) AUDIO_PLAYER = false;
                SELECTED_ITEM = id;
                play_icon_focus(id);
                if (index > -1 && index <= _.size(APP_MUSIC_URL_ARRAY) && AUDIO_PLAYER) {
                    AOD_URL = APP_MUSIC_URL_ARRAY[index]["stream_url"];
                    SELECTED_IMG = $("#" + SELECTED_ITEM).find(".list_thumbnail").attr("src");
                    console.log(AOD_URL, SELECTED_ITEM);
                    $(".img_box").empty();
                    play_podcast();
                    if(PLAY_AUDIO) callMetadata();
                }
            });
            break;

        case "EXIT":
            set_focus('exitModal', 'noButton');

            SN.focus("exitModal");
            $('#exitModal').off('sn:enter-down');
            $('#exitModal').on('sn:enter-down', function (e) {
                console.log("exitModal sn:enter-down");
                if ($('#noButton').is(":focus")) {
                    console.log('hide popup');
                    hide_show_modal(false, 'EXIT');
                    $(".home_container").addClass("active").show();
                    SN.focus("menu_items");

                } else if ($("#yesButton").is(":focus")) {
                    console.log('exit app');
                    tizen.application.getCurrentApplication().exit();
                }
            });
            break;

        case "RETRY_CANCEL":
            set_focus('retryModal', 'retryButton');
            SN.focus("retryModal");

            $('#retryModal').off('sn:enter-down');
            $('#retryModal').on('sn:enter-down', function (e) {
                console.log("retryModal sn:enter-down");
                var modalName = "RETRY_CANCEL";
                if ($("#retryButton").is(":focus")) {
                    hide_show_modal(false, modalName);
                    SN.focus('videoPlayer');
                    load_video();
                } else if ($("#cancelButton").is(":focus")) {
                    hide_show_modal(false, modalName);
                    closeVideo();
                }
            });
            break;

        case "RETRY_EXIT":
            set_focus('retryModal', 'retryButton');
            SN.focus("retryModal");

            $('#retryModal').off('sn:enter-down');
            $('#retryModal').on('sn:enter-down', function (e) {
                console.log("retryModal sn:enter-down");
                var modalName = "RETRY_CANCEL";
                hide_show_modal(false, modalName);
                if ($("#retryButton").is(":focus")) {
                    console.log('hide popup');
                    hide_show_modal(false, 'EXIT');
                } else if ($("#cancelButton").is(":focus")) {
                    console.log('exit app');
                    tizen.application.getCurrentApplication().exit();
                    // closeVideo();
                }
            });
            break;

    }
}

function set_focus(containerId, itemId) {
    console.log("set focus");
    var restrictVal = "self-first";
    if (containerId == "EXIT" || containerId == "RETRY_CANCEL") restrictVal = "self-only";

    SN.remove(containerId);
    SN.add({
        id: containerId,
        selector: '#' + containerId + ' .focusable',
        restrict: restrictVal,
        defaultElement: '#' + itemId,
        enterTo: 'last-focused'
    });
    SN.makeFocusable();
}