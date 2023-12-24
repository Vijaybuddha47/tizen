window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();
    // $("span#modal_container").load("modal.html");
    signinApi();
    // getHomeData();
    parse_main_feed();
};