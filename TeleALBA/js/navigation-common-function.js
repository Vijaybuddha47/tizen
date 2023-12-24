function manage_spatial_navigation(containerClass, favoriteStatus, vodId) {
    switch (containerClass) {
        case "menu_container":
            set_focus('menu_items', 'menu_0');

            // When menu foucs
            $('#menu_items').on('sn:focused', function (e) {
                $(".search_input_container").find("img").attr("src", "images/search_icon.png");
                $("#search_bar").hide();
                $("#search_bar_box").show();
                $("li.nav_box").removeClass("selected_menu");
                $("li.home_content_box").removeClass("selected_home_item");
                change_menu_focus(e.target.id);
            });

            // Menu button selection
            $('#menu_items').on('sn:enter-down', function (e) {
                var id = SELECTED_MENU = e.target.id;
                change_menu_focus(id);
                $("li.nav_box").removeClass("selected_menu");
                $("#" + id).addClass("selected_menu");
                if (id == "menu_0") {
                    PAGE_INDEX = TAB_INDEX = 0;
                    if (!$(".home_container").hasClass("active")) {
                        $("#loader").hide();
                        hide_show_screens("home_container");
                    }
                } else if (id == "menu_1") {
                    PAGE_INDEX = TAB_INDEX = 6;
                    $("#login_mac").text(webapis.network.getMac());
                    $("#login_ip").text(webapis.network.getIp());
                    $("#login_app").text(localStorage.getItem("telealba_app_user_id"));
                    hide_show_screens("logout_container");
                }
            });

            break;

        case "homepage_container":
            set_focus('homepage_items', 'live_guide');

            // When home page item foucs
            $('#homepage_items').on('sn:focused', function (e) {
                TAB_INDEX = PAGE_INDEX = 0;
                $("#" + SELECTED_MENU).addClass("selected_menu");
                change_menu_focus(SELECTED_MENU);
                var id = e.target.id;
            });

            // Home page item selection
            $('#homepage_items').on('sn:enter-down', function (e) {
                $("li.home_content_box").removeClass("selected_home_item");
                var id = SELECTED_HOME_ITEM = e.target.id;
                $("#" + id).addClass("selected_home_item");
                if (id == 'on_demand') {
                    $("#loader").show();
                    if (_.size(APP_VOD_CONTENT) > 0) {
                        $("#loader").show();
                        hide_show_screens("on_demand_container");
                        $("#loader").hide();
                        SN.focus("ondemand_items");
                    } else {
                        VOD_NUMBER = NUM = 0;
                        hide_show_screens("");
                        $("#loader").show();
                        content_list_Api_size_1000();
                    }
                } else if (id == 'live_guide') {
                    $("#loader").show();
                    hide_show_screens("live_channel_container");
                    $("#loader").hide();
                    SN.focus("channel_number_box");
                }

            });

            break;

        case "on_demand_container":
            set_focus('ondemand_items', 'vod_cat_0');

            // When home page item foucs
            $('#ondemand_items').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 3;
                change_menu_focus(SELECTED_MENU);
                CAT_VOD_LIST = {};
                VOD_BREADCRUMB = [];
            });

            // Home page item selection
            $('#ondemand_items').on('sn:enter-down', function (e) {
                THIRD_PAGE_SELECTED_ITEM = e.target.id;
                var index = $("#" + THIRD_PAGE_SELECTED_ITEM).index();
                VOD_BREADCRUMB[0] = $("#" + e.target.id).find(".demand_name").text();
                set_category_screen(index);
                $(".result_not_found").hide();
                $("#searchInputText").val("");
            });

            break;

        case "sub_category_container":
            set_focus('sub_category_list', 'sub_cat_0');

            // When home page item foucs
            $('#sub_category_list').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 4;
                change_menu_focus(SELECTED_MENU);
                create_bread_crumb();
            });

            // Home page item selection
            $('#sub_category_list').on('sn:enter-down', function (e) {
                $(".result_not_found").hide();
                $("#searchInputText").val("");
                var index = $("#" + e.target.id).index();
                INDEX = $("#" + e.target.id).index();
                CONTENT_TYPE = $("#" + e.target.id).attr("data-id");
                VIDEO_TYPE = $("#" + e.target.id).attr("data-type");
                VOD_BREADCRUMB[1] = $("#" + e.target.id).find(".demand_name").text();
                if (VIDEO_TYPE == "SUB") get_sub_category_videos(index);
                else if (VIDEO_TYPE == "CAT") set_video_list_screen();
            });

            break;


        case "video_list_container":
            set_focus('video_list', 'video_0');

            // When home page item foucs
            $('#video_list').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 5;
                FOCUSED_VIDEO_INDEX = $("#" + e.target.id).index();
                change_menu_focus(SELECTED_MENU);
                $(".search_input_container").find("img").attr("src", "images/search_icon.png");
                $("#search_bar").hide();
                $("#search_bar_box").show();
                set_video_details();
                create_bread_crumb();
            });

            // Home page item selection
            $('#video_list').on('sn:enter-down', function (e) {
                SELECTED_VIDEO_ITEM = e.target.id;
                SELECTED_VIDEO_INDEX = $("#" + e.target.id).index();
                if (_.size(CAT_VOD_LIST) > 0) VOD_URL = CAT_VOD_LIST[SELECTED_VIDEO_INDEX]["vsFile"];
                else if (typeof SUB_CAT_VOD_ARRAY[SELECTED_VIDEO_INDEX] === 'undefined') VOD_URL = SUB_CAT_VOD_ARRAY["vsFile"];
                else VOD_URL = SUB_CAT_VOD_ARRAY[SELECTED_VIDEO_INDEX]["vsFile"];
                hide_show_screens("video_container");
                VOD_COUNTER = SELECTED_VIDEO_INDEX;
                load_video();
            });

            break;

        case "table_heading":
            set_focus('program_day', 'date_0');

            $('#program_day').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 5;

            });

            $('#program_day').on('sn:enter-down', function (e) {
            });

            break;

        case "listing_box_programs":
            set_focus('channel_slider', 'live_0_0');

            // When live guide item foucs
            $('#channel_slider').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 2;
                SECOND_PAGE_FOCUSED_ITEM = e.target.id;
            });


            // live guide item selection
            $('#channel_slider').on('sn:enter-down', function (e) {
                var id = e.target.id;
                SELECTED_CHANNEL_INDEX = Number(e.target.dataset.index);
                SECOND_PAGE_SELECTED_ITEM = id;
                var url = "", restrictedContent = '';
                VOD_URL = "";

                for (var i = 0; i < _.size(APP_LIVE_CHANNEL); i++) {
                    if (APP_LIVE_CHANNEL[i]["number"] == APP_CHANNEL_NUMBERS[SELECTED_CHANNEL_BOX][SELECTED_CHANNEL_INDEX]) {
                        url = APP_DOMAIN + "/xtv-ws-client" + APP_LIVE_CHANNEL[i]["children"] + "/?page=0&restricted=false&showAdultContent=true&size=2000";
                        VOD_URL = APP_LIVE_CHANNEL[i]["hlsUrl"];
                        SELECTED_CHANNEL_NUMBER = APP_LIVE_CHANNEL[i]["number"];
                        $("#channel_title").text(APP_LIVE_CHANNEL[i]["callSign"]);
                        $("#channel_logo_img").attr("src", APP_DOMAIN + "/xtv-ws-client" + APP_LIVE_CHANNEL[i]['thumbnail']);
                        restrictedContent = APP_LIVE_CHANNEL[i]["parentalLevel"]["restricted"];
                        break;
                    }
                }

                if ($("#" + id).hasClass("current")) {
                    if (VOD_URL != '') {
                        if (APP_PARENTAL_CONTROL || !restrictedContent) {
                            checkVideoURL();
                        } else {
                            $("#parentalcontrol_popup").show();
                            SN.focus("#unlock_password");
                        }
                    }
                } else {
                    if (url != '') {
                        $(".current").removeClass("current");
                        $("#" + id).addClass("current");
                        set_program_list(SELECTED_CHANNEL_NUMBER, url);
                    }
                }
            });

            break;

        case "channel_container":
            set_focus('channel_number_box', 'channel_box_0');

            // When home page item foucs
            $('#channel_number_box').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 1;
                change_menu_focus(SELECTED_MENU);
            });

            // Home page item selection
            $('#channel_number_box').on('sn:enter-down', function (e) {
                SELECTED_CHANNEL_BOX = Number(e.target.dataset.index);
                if (_.size(APP_CHANNEL_NUMBERS[SELECTED_CHANNEL_BOX]) > 0) {
                    $("#program_container").html("");
                    hide_show_screens("");
                    set_tv_guide_screen();
                } else {
                }
            });

            break;

        case "program_time_container":
            set_focus('program_container', 'program_1');

            // When home page item foucs
            $('#program_container').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 2;
                SECOND_PAGE_FOCUSED_ITEM = e.target.id;
            });

            // Home page item selection
            $('#program_container').on('sn:enter-down', function (e) {
                var id = e.target.id;
                LIVE_CATCHUP = false;
                var index = $(":focus").index();
                var programIndex = Number(e.target.dataset.index);
                var restrictedContent = '';
                if (APP_PROGRAM_LIST[SELECTED_CHANNEL_NUMBER] !== undefined) {
                    var start = APP_PROGRAM_LIST[SELECTED_CHANNEL_NUMBER][programIndex]["startDateTime"];
                    var end = APP_PROGRAM_LIST[SELECTED_CHANNEL_NUMBER][programIndex]["endDateTime"];
                    $("#current_program").text(APP_PROGRAM_LIST[SELECTED_CHANNEL_NUMBER][programIndex]["title"]);
                    var dayTime = moment(start).format('dddd') + ", " + moment(start).format('LL') + " " + moment(start).format('HH:mm');
                    $("#current_program_time").text(dayTime + " - " + moment(end).format('HH:mm'));
                    var rating = APP_PROGRAM_LIST[SELECTED_CHANNEL_NUMBER][programIndex]["parentalLevel"]["rating"];
                    var info = convertSecondsToHM(APP_PROGRAM_LIST[SELECTED_CHANNEL_NUMBER][programIndex]["duration"]);
                    info += rating ? "<b>" + rating + "</b>" : "";
                    $("#programInfo").html(info);
                    $("#current_program_desc").text(APP_PROGRAM_LIST[SELECTED_CHANNEL_NUMBER][programIndex]["description"]);
                }

                VOD_URL = '';
                for (var i = 0; i < _.size(APP_LIVE_CHANNEL); i++) {
                    if (APP_LIVE_CHANNEL[i]["number"] == APP_CHANNEL_NUMBERS[SELECTED_CHANNEL_BOX][SELECTED_CHANNEL_INDEX]) {
                        VOD_URL = APP_LIVE_CHANNEL[i]["hlsUrl"];
                        SELECTED_CHANNEL_NUMBER = APP_LIVE_CHANNEL[i]["number"];
                        restrictedContent = APP_LIVE_CHANNEL[i]["parentalLevel"]["restricted"];
                        break;
                    }
                }

                SECOND_PAGE_SELECTED_ITEM = id;
                if ($("#" + id).hasClass("live")) {
                    if (VOD_URL != '') {
                        if (APP_PARENTAL_CONTROL || !restrictedContent) {
                            checkVideoURL();
                        } else {
                            $("#parentalcontrol_popup").show();
                            SN.focus("#unlock_password");
                        }
                    }
                } else if ($("#" + id).hasClass("live_catchup")) {
                    VOD_URL = APP_PROGRAM_LIST[APP_CHANNEL_NUMBERS[SELECTED_CHANNEL_BOX][SELECTED_CHANNEL_INDEX]][index]["cuTvUrl"];
                    SELECTED_CHANNEL_NUMBER = APP_CHANNEL_NUMBERS[SELECTED_CHANNEL_BOX][SELECTED_CHANNEL_INDEX];
                    if (VOD_URL !== '') {
                        if (APP_PARENTAL_CONTROL || !restrictedContent) {
                            LIVE_CATCHUP = true;
                            checkVideoURL();
                        } else {
                            $("#parentalcontrol_popup").show();
                            SN.focus("#unlock_password");
                        }
                    }
                }

            });

            break;

        case "parental_control_box":
            set_focus('parentalcontrol_popup', 'unlock_password');

            $('#unlock_cancel').on('sn:enter-down', function (e) {
                document.getElementById("unlock_password").value = "";
                $("#parentalcontrol_popup").hide();
                SN.focus("#" + SECOND_PAGE_FOCUSED_ITEM);

            });
            $('#unlock_ok').on('sn:enter-down', function (e) {
                var text = $.trim($('#unlock_password').val());
                if (text != "") {
                    if (text == localStorage.getItem("telealba_app_password")) {
                        $("#parentalcontrol_popup").hide();
                        hide_show_screens("video_container");
                        load_video();
                        APP_PARENTAL_CONTROL = true;
                        setTimeout(function () {
                            APP_PARENTAL_CONTROL = false;
                            document.getElementById("unlock_password").value = "";
                        }, 600000);
                    } else {
                        $("#password_incorrect").show();
                        SN.focus("#unlock_password");
                        setTimeout(function () {
                            $("#password_incorrect").hide();
                        }, 5000);
                    }
                } else if (text == "") {
                    $("#password_empty").show();
                    SN.focus("#unlock_password");
                    setTimeout(function () {
                        $("#password_empty").hide();
                    }, 5000);
                }

            });

            break;

        case "logout_container":
            set_focus('manage_btn', 'logout_btn');

            // When logout button foucs
            $('#manage_btn').on('sn:focused', function (e) {
                PAGE_INDEX = TAB_INDEX = 6;
            });

            // logout buttn selection
            $('#manage_btn').on('sn:enter-down', function (e) {
                if (e.target.id == "logout_btn") hide_show_modal(true, 'EXIT', APP_EXIT_MSG);
            });

            break;

        case "date_list_container":
            set_focus('date_list', 'date_0');

            // search box selection
            $('#date_list').on('sn:enter-down', function (e) {
                var id = e.target.id;
                var txt = $("#" + id).text();
                SELECTED_EPG_DATE = $("#" + id).attr("data-id");
                $("#selected_day").text(txt);
                $("#date_list").css("display", "none");
                SN.focus("selected_date");
            });

            break;

        case "search_bar_box":
            set_focus('search_bar_box', 'searchBox');

            // When search box foucs
            $('#search_bar_box').on('sn:focused', function (e) {
                $(".search_input_container").find("img").attr("src", "images/search_icon_focused.png");
            });

            // search box selection
            $('#search_bar_box').on('sn:enter-down', function (e) {
                $("#search_bar_box").hide();
                $("#search_bar").show();
                SN.focus("search_bar");
            });

            break;

        case "search_bar":
            set_focus('search_bar', 'searchInputText');

            // When search box foucs
            $('#search_bar').on('sn:focused', function (e) {
                $(".search_bar").addClass("active");
                $(".search_input_container").find("img").attr("src", "images/search_icon_focused.png");
            });

            // search box selection
            $('#search_bar').on('sn:enter-down', function (e) {
                request_search_results();
            });

            break;

        case "EXIT":
            set_focus('exitModal', 'noButton');

            SN.focus("exitModal");
            $('#exitModal').off('sn:enter-down');
            $('#exitModal').on('sn:enter-down', function (e) {
                if ($('#noButton').is(":focus") && PAGE_INDEX == 0) {
                    hide_show_modal(false, 'EXIT');
                    $(".home_container").addClass("active").show();
                    SN.focus("menuList");

                } else if ($('#noButton').is(":focus") && PAGE_INDEX == 6) {
                    hide_show_modal(false, 'EXIT');
                    $(".logout_container").addClass("active").show();
                    SN.focus("manage_btn");

                } else if ($("#yesButton").is(":focus")) {
                    if (PAGE_INDEX == 0 || PAGE_INDEX == 6) {
                        logoutfromApp();
                        tizen.application.getCurrentApplication().exit();
                        window.localStorage.removeItem("ip_address");
                        window.localStorage.removeItem("telealba_app_user_name");
                        window.localStorage.removeItem("mac_address");
                    }
                }
            });
            break;

        case "RETRY_CANCEL":
            set_focus('retryModal', 'retryButton');
            SN.focus("retryModal");

            $('#retryModal').off('sn:enter-down');
            $('#retryModal').on('sn:enter-down', function (e) {
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
                var modalName = "RETRY_EXIT";
                hide_show_modal(false, modalName);
                if ($("#retryButton").is(":focus")) {
                    hide_show_modal(false, modalName);
                } else if ($("#cancelButton").is(":focus")) {
                    console.log('exit app');
                    tizen.application.getCurrentApplication().exit();
                }
            });
            break;
    }
}

function set_focus(containerId, itemId) {
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