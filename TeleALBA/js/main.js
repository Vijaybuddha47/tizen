window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();

    setTimeout(function () {
        $(".splash-screen").hide();
        $(".main-container").show();
        $("span#modal_container").load("modal.html");
        $("#loader").show();
        register_number_keys();
        localStorage.setItem("telealba_app_user_id", "");
        localStorage.setItem("telealba_app_password", 1234);
        adminLogin();
    }, 5000);

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            APP_PARENTAL_CONTROL = false;
            if (webapis.avplay.getState() != "NONE") {
                webapis.tvinfo.registerInAppCaptionControl(false);
                webapis.avplay.suspend(); //Mandatory. If you use avplay, you should call this method.
            }
        } else {
            $(".progress-container").hide();
            $(".video-inner").hide();
            webapis.tvinfo.registerInAppCaptionControl(true);
            webapis.tvinfo.showCaption(false);
            webapis.avplay.restore();
        }
    });
};