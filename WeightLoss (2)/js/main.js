window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();
    $("span#modal_container").load("modal.html");
    document.addEventListener("visibilitychange", visibilityChanged);
    function visibilityChanged() {
        if (document.hidden) {
            console.log('app is in the background');
            pauseVideo();
        } else { 
            console.log('app is in the foreground');
            playVideo();
        }
    }
    parse_main_feed();
};