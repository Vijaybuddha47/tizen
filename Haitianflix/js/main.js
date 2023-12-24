window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();
    $("span#modal_container").load("modal.html");
    $(".main_container").hide();
    var email = localStorage.getItem("email");
    console.log(email);
    var subscription_status = localStorage.getItem("subscription_status");
    console.log(subscription_status);
    var days_left = localStorage.getItem("days_left");
    console.log(days_left);
    if (localStorage.getItem("subscription_status") == "ACTIVE" && localStorage.getItem("days_left") != "0") {
        loginStatusApi();
        getHomeData();
        parse_main_feed();
    } else if (localStorage.getItem("subscription_status") == "ACTIVE" && localStorage.getItem("days_left") == "0") {
        loginStatusApi();
        $(".main_container").show();
        $(".navbar_sidebar").show();
        show_left_side_bar();
        show_hide_popups(true, APP_MESSAGE[0], "empty_modal");
        parse_main_feed();
    }

};