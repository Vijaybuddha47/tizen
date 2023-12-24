window.onload = function () {
    window.SN = SpatialNavigation;
    SN.init();
    spatial_navigation_program();
    change_menu_focus("home");
    getHomeData();
}
