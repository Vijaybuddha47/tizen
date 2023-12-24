window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();
    spatial_navigation_program();
    $(".splash-screen").show();
    $("span#modal_container").load("modal.html");
    register_number_keys();
    get_app_dynamic_val();

    $('.marquee').marquee({
        //speed in milliseconds of the marquee
        duration: 3000,
        // gap in pixels between the tickers
        gap: 10,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        // true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });

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