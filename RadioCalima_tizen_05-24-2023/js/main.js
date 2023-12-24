window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();

    $("span#modal_container").load("modal.html");
    register_number_keys();
    spatial_navigation_program();
    parse_main_feed();

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            console.log("App in background");
            if (webapis.avplay.getState() != "NONE") {
                webapis.tvinfo.registerInAppCaptionControl(false);
                webapis.avplay.suspend(); //Mandatory. If you use avplay, you should call this method.
            }
        } else {
            console.log("App in forground");
            $(".progress-container").hide();
            $(".video-inner").hide();
            webapis.tvinfo.registerInAppCaptionControl(true);
            webapis.tvinfo.showCaption(false);
            webapis.avplay.restore();
        }
    });
};