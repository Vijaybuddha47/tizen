window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();
    TAB_INDEX = 0;
    $("span#modal_container").load("modal.html");
    $("div#preview-player").load("preview-video-player.html");
    APP_CHANNEL_DATA_ARRAY["favorite"] = [];
    set_unset_setting_screen_selection();

    spatial_navigation_program();
    register_number_keys();
    parse_main_feed();
    setTimeout(function () {
        clockTime();
    }, 1000);

    webapis.network.addNetworkStateChangeListener(function (value) {
        if (value == webapis.network.NetworkState.GATEWAY_DISCONNECTED) {
            // Something you want to do when network is disconnected
            console.log("disconnected");
        } else if (value == webapis.network.NetworkState.GATEWAY_CONNECTED) {
            // Something you want to do when network is connected again
            console.log("connected");
            if (PAGE_INDEX == 0) checkVideoURL();
            else if (PAGE_INDEX == 1 || PAGE_INDEX == 2 || PAGE_INDEX == 3) webapis.avplay.restoreAsync();
        }
    });

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            console.log("App in background");
            clearTimeout(PING_TIMER);
            if (webapis.avplay.getState() != "NONE") {
                webapis.tvinfo.registerInAppCaptionControl(false);
                webapis.avplay.suspend(); //Mandatory. If you use avplay, you should call this method.
            }
        } else {
            console.log("App in forground");
            userCurrectStatus();
            userStatusPing();
            // $(".progress-container").hide();
            $(".player_progress").hide();
            $(".video-inner").hide();
            $(".preview-video-inner").hide();
            webapis.tvinfo.registerInAppCaptionControl(true);
            webapis.tvinfo.showCaption(false);
            webapis.avplay.restore();
        }
    });
};