function extractUrlLastString(url) {
    var string = url.substring(url.lastIndexOf('/') + 1);
    if (string) return string
    else return;
}

function create_object() {
    APP_HOME_FEATURED_LIST["recommendate"] = new Array();
    APP_HOME_FEATURED_LIST["recommendate"]['totalItemCount'] = 0;
    APP_HOME_FEATURED_LIST["recommendate"]['count'] = 0;
    return;
}

function set_background(bgImg) {
    if (bgImg != "") $("img#background_slider").attr("src", bgImg).attr("alt", "Background");
    else $("img#background_slider").attr("src", DEFAULT_BG).attr("alt", "Default Background");
}

function set_home_background() {
    $("img#background_slider").attr("src", HOME_PAGE_FEATURED_DATA[SELECTED_HOME_FEATURED_DATA_ID].pictures.sizes[HOME_PAGE_FEATURED_DATA[SELECTED_HOME_FEATURED_DATA_ID].pictures.sizes.length - 1]['link']);
}

function set_video_counter() {
    for (var i = 0; i < _.size(APP_HOME_FEATURED_LIST) - 1; i++) {
        if (APP_HOME_FEATURED_LIST[i] == VIDEO_ID) {
            VOD_COUNTER = i;
            break;
        }
    }
}

function set_default_widget_image() {
    $('.title-grid').each(function () {
        $(this).find('img').attr("src", "images/tile_button.png");
    });
}

function convertSeconds(seconds) {
    var convert = function (x) { return (x < 10) ? "0" + x : x; }
    return convert(parseInt(seconds / (60 * 60))) + ":" +
        convert(parseInt(seconds / 60 % 60)) + ":" +
        convert(seconds % 60)
}

function remove_add_active_class(className) {
    console.log("remove add active class");
    if ($("body").find(".active").length > 0) {
        $("body").find(".active").each(function () {
            if ($(this).className != className) $(this).removeClass("active");
        });
    }
    if (className != "modal_container") {
        $(".home_container").addClass("active");
    }
    $("." + className).addClass("active");
}

function asign_pageindex_by_container() {
    if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) TAB_INDEX = 7;
    else if ($('.home_container').is(':visible') && $('.home_container').hasClass('active')) PAGE_INDEX = TAB_INDEX = 0;
    else if ($('.talent_page_container').is(':visible') && $('.talent_page_container').hasClass('active')) PAGE_INDEX = TAB_INDEX = 1;
    else if ($('.detail_page_main_container').is(':visible') && $('.detail_page_main_container').hasClass('active')) PAGE_INDEX = TAB_INDEX = 2;
}

function show_hide_page_header(flag = false) {
    if (flag) { //Show pages
        console.log("show pages");

    } else { //Hide pages
        $(".home_container").removeClass("active").hide();
        $(".homepage_header").hide();
        $(".creator_profile_box").hide();
    }
    $("#BackBtn").attr("src", "images/close.png");
}

/* Add remove shows in local storage */
function add_remove_favorite_video(Id, Action, ElementId = '') {
    console.log("add/remove to watchlist");
    var dataObj;
    if (Action == 'ADD') {
        if (APP_HOME_PAGE_MIXED_DATA[Id]) dataObj = JSON.stringify(APP_HOME_PAGE_MIXED_DATA[Id]);
        else if (SELECTED_TALENT_DATA[Id]) dataObj = JSON.stringify(SELECTED_TALENT_DATA[Id]);
        else if (APP_HOME_PAGE_MIXED_DATA[Id]) dataObj = JSON.stringify(APP_HOME_PAGE_MIXED_DATA[Id]);
        else if (APP_SEARCH_DATA_ARRAY[Id]) dataObj = JSON.stringify(APP_SEARCH_DATA_ARRAY[Id]);
        else if (THIRD_PAGE_SELECTED_DATA_ARRAY[Id]) dataObj = JSON.stringify(THIRD_PAGE_SELECTED_DATA_ARRAY[Id]);

        localStorage.setItem("id_" + Id, dataObj);
    }
    else if (Action == "SUB") {
        localStorage.removeItem("id_" + Id);

    }

    if (ElementId) {
        let check2 = check_favorite_video_list(Id, '');
        if (check2) {
            console.log("added");
            $("#" + ElementId).find('img.fav_added').attr("src", "images/favorite_added_focused.png");
            $("#" + ElementId).find('img.fav_removed').attr("src", "images/favorite_added.png");
        }
        else {
            console.log("removed");
            $("#" + ElementId).find('img.fav_added').attr("src", "images/favorite_button_focus.png");
            $("#" + ElementId).find('img.fav_removed').attr("src", "images/favorite_button.png");
        }
    }
}

/* Check shows/video in local storage */
function check_favorite_video_list(Id, elementId = '') {
    var check = false;
    for (var i = 0; i < localStorage.length; i++) {
        const keyArray = localStorage.key(i).split("_");
        if (keyArray[1] == Id) check = true;
    }

    if (elementId) {
        if (check) {
            $("#" + elementId).find('img.fav_added').attr("src", "images/favorite_added_focused.png");
            $("#" + elementId).find('img.fav_removed').attr("src", "images/favorite_added.png");
        }
        else {
            $("#" + elementId).find('img.fav_added').attr("src", "images/favorite_button_focus.png");
            $("#" + elementId).find('img.fav_removed').attr("src", "images/favorite_button.png");
        }
    }

    return check;
}

function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    var elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    var pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}

function spatial_navigation_program() {
    console.log("spatial_navigation_program");

    manage_spatial_navigation("category_container") // For category items in matrix form 

    manage_spatial_navigation("favorite_page_container"); // For favorite screen

    manage_spatial_navigation("category_detail_page_close"); //For category detail page close 

    manage_spatial_navigation("detail_page_video_items"); //For category detail page items

    manage_spatial_navigation("detail_page_buttons"); //For category datail page button

    manage_spatial_navigation("talent_page_container"); //For creator page video list 

    manage_spatial_navigation("homepage_search_box"); // For home page header search box

    manage_spatial_navigation("search_container"); //For search input page

    manage_spatial_navigation("home_page_menu_wise_item_container"); // For home page content by right side hidden menu list

    manage_spatial_navigation("menulist_container");//For right side hidden menulist

    manage_spatial_navigation("cancel_button_container"); // Cancel button or page close button

    manage_spatial_navigation("home_page_item_container"); // For Home page category items

    manage_spatial_navigation("homepage_button"); // For homepage middle buttons

    manage_spatial_navigation("homepage_header") // For category items in matrix form 
}

function requestAppStore() {
    var applicationInformation = tizen.application.getCurrentApplication();
    var appStoreUrl = "tizenstore://ProductDetail/" + applicationInformation.appInfo.packageId;	//or your application's Package ID
    var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view", appStoreUrl, function () { console.log("Service launched"); }, function (err) { console.log("Service launch failed: " + " " + err.message); }, null);
    var storeId = "com.samsung.tv.store";// "org.tizen.tizenstore";
    try {
        tizen.application.launchAppControl(appControl, storeId, null, null, null);
        console.log("Succeeded to Launch your app on appStore.");
    }
    catch (exc) {
        console.log("Failed to launch your app on appStore.");
        console.log("AppControl Exception:" + exc.message);
    }
}