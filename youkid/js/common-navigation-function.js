function manage_spatial_navigation(containerClass, favoriteStatus, vodId) {
    switch (containerClass) {
        case "homepage_header":
            set_focus('homepage_header', 'hamburger');

            // When menu foucs
            $('#homepage_header').on('sn:focused', function (e) {
                console.log("homepage_header focus...");
                change_focused_homepage_button('');
                LAST_FOCUSED_ITEM = e.target.id;

                var elmList = $('ul#talentList li');

                if (isVisible(elmList[0])) $(".talent_right").hide();
                else $(".talent_right").show();

                if (isVisible(elmList[$("ul#talentList li").last().index() - 1])) $(".talent_left").hide();
                else $(".talent_left").show();

                if ($('[id^=talent_]').is(":focus")) {
                    // When talent focus
                    console.log("talent list focus");
                    $("#" + e.target.id).index();
                    FOCUSED_TALENT_ID = e.target.dataset.id;
                    $("#talentBox").css("width", "1048px");
                } else if ($("#hamburger").is(":focus")) {
                    $(".talent_right").hide();
                    $("#homePage").find("img").attr("src", "images/home_icon.png");

                    if ($(".menulist_container").hasClass("active")) $("#menuImg").attr("src", "images/close_menu_focus.png");
                    else $("#menuImg").attr("src", "images/menu_focus.png");

                    $("#talentBox").css("width", "1048px");
                    // When search input focus
                } else if ($("#searchInputText").is(":focus")) {
                    console.log("search input focus");
                    $(".talent_right").hide();
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    $('#searchText').val("");
                    $("#menuImg").attr("src", "images/menu.png");
                    $("#talentBox").css("width", "905px");
                }

            });

            // When search button selection
            $('#homepage_header').on('sn:enter-down', function (e) {
                console.log("homepage_header enter...");
                if (localStorage["youkid_expiry"]) {
                    $("#logoutPage").show();
                    $("#musicPage").attr('data-sn-down', '#logoutPage');
                    $("#exitPage").attr('data-sn-up', '#logoutPage');
                }
                else {
                    $("#musicPage").attr('data-sn-down', '#exitPage');
                    $("#exitPage").attr('data-sn-up', '#musicPage');
                    $("#logoutPage").hide();
                }
                clearTimeout(TIME_OUT);
                TIME_OUT = null;
                TIME_COUNTER_LEFT = 0;
                // When talent enter
                if ($('[id^=talent_]').is(":focus")) {
                    SELECTED_TALENT_ID = e.target.dataset.index;
                    $(".home_container").removeClass("active").hide();
                    $(".homepage_header").hide();
                    get_talent_videos();
                } else if ($("#hamburger").is(":focus")) {
                    change_focused_menu_image("");
                    if (!$(".menulist_container").hasClass("active")) {
                        $(".menulist_container").addClass("active");
                        $("#menuList").addClass("show_menu");
                        $("#menuImg").attr("src", "images/close_menu_focus.png");

                    } else if ($(".menulist_container").hasClass("active")) {
                        $(".menulist_container").removeClass("active");
                        $("#menuList").removeClass("show_menu");
                        $("#menuImg").attr("src", "images/menu_focus.png");
                    }
                    // When search input enter
                } else if ($("#searchInputText").is(":focus")) {
                    show_hide_page_header(false);
                    $(".homepage_header").hide();
                    $(".search_container").addClass("active").show();
                    SN.focus("#searchText");
                }

            });

            break;

        case "hamburger_menu_close":
            set_focus('hamburgerMenuClose', 'hamburgerClose');

            // When menu foucs
            $('#hamburgerMenuClose').on('sn:focused', function (e) {
                console.log("hamburger focus...");
                PAGE_INDEX = 0;
                $("#closeMenuImg").attr("src", "images/close_menu_focus.png");
                if (!$(".menulist_container").hasClass("active")) {
                    $(".menulist_container").addClass("active");
                    $("#menuList").addClass("show_menu");
                    $("#hamburgerMenu").css("display", "none");
                }
            });

            // When search button selection
            $('#hamburgerMenuClose').on('sn:enter-down', function (e) {
                console.log("hamburger close enter...");
                authetication_time_clear();
                if ($(".menulist_container").hasClass("active")) {
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    $("#hamburgerMenu").css("display", "block");
                }
            });

            break;

        case "home_page_item_container":
            set_focus("homePageItem", "home_page_item_0_1");
            // set_focus("homePageList_0", "home_page_item_0_1");

            $('#homePageItem').on('sn:focused', function (e) {
                console.log("home page item focus");
                PAGE_INDEX = 0;
                LAST_FOCUSED_ITEM = e.target.id;
                FIRST_PAGE_FOCUSED_ITEM = e.target.id;
                if ($("#" + FIRST_PAGE_FOCUSED_ITEM).index() > 3) $("#" + FIRST_PAGE_FOCUSED_ITEM).parent().parent().parent().children(':first-child').hide();
                else if ($("#" + FIRST_PAGE_FOCUSED_ITEM).index() < 3) $("#" + FIRST_PAGE_FOCUSED_ITEM).parent().parent().parent().children(':first-child').show();

                $("#menuImg").attr("src", "images/menu.png");
                change_focused_homepage_button('');

                $(".tile-grid").find('img').attr("src", "images/tile_button.png");
                if ($("#" + FIRST_PAGE_FOCUSED_ITEM).hasClass('tile-grid')) {
                    $("#" + FIRST_PAGE_FOCUSED_ITEM).find("img").attr("src", "images/tile_button_focus.png");
                }
                var row = $(":focus").parent().parent().parent().parent().attr("data-row");
                if (row == 0) MOVE_UP_FOCUS = true;
                else MOVE_UP_FOCUS = false;
                var ulID = $("#" + FIRST_PAGE_FOCUSED_ITEM).parent().attr("id");
                var lastLi = $("#" + ulID + " li").last().index();
                if ($("#" + FIRST_PAGE_FOCUSED_ITEM).index() == (lastLi - 1) && $("#" + FIRST_PAGE_FOCUSED_ITEM).index() < _.size(HOME_PAGE_DATA[row])) {
                    lazy_load_items(row, lastLi);
                }
            });

            // When watchlist button focus
            $('#homePageItem').on('sn:enter-down', function (e) {
                console.log("home page item enter");
                var id = e.target.id;
                FIRST_PAGE_SELECTED_ITEM = e.target.id;
                if (!$("#" + id).hasClass('tile-grid')) {
                    VOD_COUNTER = $("#" + id).index();
                    PLAY_LIST_ELEMENT_ID = $("#" + id).parent().attr("id");
                    FIRST_PAGE_SELECTED_DATA_ID = SELECTED_VIDEO_ID = e.target.dataset.id;
                    $("#detail_play_btn").attr("data-id", FIRST_PAGE_SELECTED_DATA_ID);
                    $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);

                    $("#category_detail_heading").text(e.target.parentElement.parentElement.parentElement.childNodes[0].innerText);
                    $("#category_page_heading").text(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].name);
                    $("#category_page_desc").text(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].description);
                    $("#category_page_duration").text(convertSeconds(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].duration));
                    $("#background_slider").attr("src", APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].pictures.sizes[APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].pictures.sizes.length - 1]['link']);
                    show_video_details();

                } else if ($("#" + id).hasClass('tile-grid')) {
                    var row = $(":focus").parent().parent().attr("data-row");
                    $("#screen_name").text($("#" + id).parent().parent().find("span.category_list_heading").text());
                    show_category_page(row, id);
                }
            });

            break;

        case "home_page_menu_wise_item_container":
            set_focus("homePageMenuWiseItem", "home_page_menu_wise_item_0_1");

            $('#homePageMenuWiseItem').on('sn:focused', function (e) {
                console.log("home page item focus");
                PAGE_INDEX = 0;
                LAST_FOCUSED_ITEM = e.target.id;
                FIRST_PAGE_FOCUSED_ITEM = e.target.id;
                if ($("#" + FIRST_PAGE_FOCUSED_ITEM).index() > 3) $("#" + FIRST_PAGE_FOCUSED_ITEM).parent().parent().parent().children(':first-child').hide();
                else if ($("#" + FIRST_PAGE_FOCUSED_ITEM).index() < 3) $("#" + FIRST_PAGE_FOCUSED_ITEM).parent().parent().parent().children(':first-child').show();

                $("#menuImg").attr("src", "images/menu.png");
                change_focused_homepage_button('');

                $(".tile-grid").find('img').attr("src", "images/tile_button.png");
                if ($("#" + FIRST_PAGE_FOCUSED_ITEM).hasClass('tile-grid')) {
                    $("#" + FIRST_PAGE_FOCUSED_ITEM).find("img").attr("src", "images/tile_button_focus.png");
                }
            });

            // When watchlist button focus
            $('#homePageMenuWiseItem').on('sn:enter-down', function (e) {
                var id = e.target.id;
                FIRST_PAGE_SELECTED_ITEM = e.target.id;
                console.log("home page item enter");
                if (!$("#" + id).hasClass('tile-grid')) {
                    VOD_COUNTER = $("#" + id).index();
                    PLAY_LIST_ELEMENT_ID = $("#" + id).parent().attr("id");
                    FIRST_PAGE_SELECTED_DATA_ID = SELECTED_VIDEO_ID = e.target.dataset.id;
                    $("#detail_play_btn").attr("data-id", FIRST_PAGE_SELECTED_DATA_ID);
                    $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);

                    $("#category_detail_heading").text(e.target.parentElement.parentElement.parentElement.childNodes[0].innerText);
                    $("#category_page_heading").text(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].name);
                    $("#category_page_desc").text(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].description);
                    $("#category_page_duration").text(convertSeconds(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].duration));
                    $("#background_slider").attr("src", APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].pictures.sizes[APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].pictures.sizes.length - 1]['link']);
                    show_video_details();

                } else if ($("#" + id).hasClass('tile-grid')) {
                    console.log("show category page.");
                    var row = $(":focus").parent().parent().attr("data-row");
                    $("#screen_name").text($("#" + id).parent().parent().find("span.category_list_heading").text());
                    show_category_page(row, id);
                }
            });

            break;

        case "menulist_container":
            console.log("set menulist_container");
            set_focus('home_tablist', 'homePage');

            // When talent focus
            $('#home_tablist').on('sn:focused', function (e) {
                console.log("menu list focus");
                PAGE_INDEX = 0;
                $("#closeMenuImg").attr("src", "images/close_menu.png");
                let id = e.target.id;
                change_focused_menu_image(id);
            });

            // When talent enter
            $('#home_tablist').on('sn:enter-down', function (e) {
                console.log("menu left side list enter");
                var id = e.target.id;
                SELECTED_MENU_TYPE = e.target.dataset.type;
                if (SELECTED_MENU_TYPE == "HOME") {
                    $(".home_page_menu_wise_list_box").hide();
                    $(".home_page_list_box").show();

                    get_home_page_featured_data();
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    $("#hamburgerMenuClose").css("display", "none");
                    $("#hamburgerMenu").css("display", "block");
                    // set focus on home page button
                    SN.focus("homepageButton");
                } else if (SELECTED_MENU_TYPE == "FAVORITE") {
                    console.log("favorite page");
                    show_hide_page_header(false);
                    $(".homepage_header").hide();
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    show_favorite_video_list();

                } else if (id == "logoutPage") {
                    console.log("logout popup..");
                    $("#hamburger").find("img").attr("src", "./images/menu.png");
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    hide_show_modal(true, 'LOGOUT', APP_LOGOUT_MSG);
                    SN.focus("#noButton");
                } else if (id == "exitPage") {
                    console.log("exit popup..");
                    $("#hamburger").find("img").attr("src", "./images/menu.png");
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    hide_show_modal(true, "EXIT", APP_EXIT_MSG);
                    SN.focus("#noButton");
                } else {
                    $(".menulist_container").removeClass("active");
                    $("#menuList").removeClass("show_menu");
                    $("#hamburgerMenuClose").css("display", "none");
                    $("#hamburgerMenu").css("display", "block");

                    // set focus on home page button
                    set_home_page_by_menu();
                    get_home_page_featured_data();
                }
            });

            break;

        case "homepage_button":
            console.log("set homepage_button");
            set_focus('homepageButton', 'playBtn');

            // When home page button focus
            $('#homepageButton').on('sn:focused', function (e) {
                console.log("home page button focus");
                // TAB_INDEX = 0;
                PAGE_INDEX = 0;
                LAST_FOCUSED_ITEM = e.target.id;
                PLAY_PAGE_INDEX = 1;
                $("#hamburger").find("img").attr("src", "images/menu.png");
                let id = e.target.id;
                $(".tile-grid").find('img').attr("src", "images/tile_button.png");
                change_focused_homepage_button(id);
                $("#talentBox").css("width", "1048px");
            });

            // When home page button enter
            $('#homepageButton').on('sn:enter-down', function (e) {
                console.log("home page buttons focus");
                var favoriteDataId = $("#favBtn").attr("data-id");
                var check = false;
                if (favoriteDataId) {
                    for (var i = 0; i < localStorage.length; i++) {
                        var keyArray = localStorage.key(i).split("_");
                        if (keyArray[1] == favoriteDataId) check = true;
                    }

                    if (check) {
                        if ($("#favBtn").is(":focus")) $("#favBtn").find('img').attr("src", "images/favorite_added_focused.png");
                        else $("#favBtn").find('img').attr("src", "images/favorite_added.png");
                    }
                    else {
                        if ($("#favBtn").is(":focus")) $("#favBtn").find('img').attr("src", "images/favorite_button_focus.png");
                        else $("#favBtn").find('img').attr("src", "images/favorite_button.png");
                    }
                }
            });

            // When Play button enter
            $('#playBtn').on('sn:enter-down', function (e) {
                console.log("home page play btn enter...");
                PAGE_INDEX = 0;
                VIDEO_ID = e.target.dataset.id;
                var valid_date = localStorage.getItem("youkid_expiry");
                var todayTime = new Date().getTime();
                if (valid_date > todayTime) {
                    set_video_counter();
                    get_video_url();
                } else show_instruction_page();

            });

            // When fav button enter
            $('#favBtn').on('sn:enter-down', function (e) {
                console.log("favorite button enter");
                var id = e.target.id;
                var DataId = e.target.dataset.id;
                if (DataId) {
                    setTimeout(function () {
                        let check = check_favorite_video_list(DataId, '');

                        if (check) {
                            add_remove_favorite_video(DataId, "SUB", id);
                            $("#favBtn").find('img').attr("src", "images/favorite_button_focus.png");
                        }
                        else {
                            add_remove_favorite_video(DataId, "ADD", id);
                            $("#favBtn").find('img').attr("src", "images/favorite_added_focused.png");
                        }

                    }, 50);
                }
            });

            // When NEXT button enter
            $('#leftArrow').on('sn:enter-down', function (e) {
                console.log("NEXT button enetr");
                var id = e.target.id;
                var nextIndex = Number(e.target.dataset.id);
                var nextDataId = APP_HOME_FEATURED_LIST[nextIndex];
                SELECTED_HOME_FEATURED_DATA_ID = nextDataId;
                if (nextIndex == _.size(HOME_PAGE_FEATURED_DATA) - 1) $("#" + id).attr("data-id", 0);
                else $("#" + id).attr("data-id", nextIndex + 1);
                $("#background_slider").attr("src", HOME_PAGE_FEATURED_DATA[nextDataId].pictures.sizes[HOME_PAGE_FEATURED_DATA[nextDataId].pictures.sizes.length - 1]['link']);

                if (nextIndex == 0) $("#rightArrow").attr("data-id", _.size(HOME_PAGE_FEATURED_DATA) - 1);
                else $("#rightArrow").attr("data-id", nextIndex - 1);

                $("#favBtn").attr("data-id", APP_HOME_FEATURED_LIST[nextIndex]);
                $("#playBtn").attr("data-id", APP_HOME_FEATURED_LIST[nextIndex]);
            });

            // When PREVIOUS button enter
            $('#rightArrow').on('sn:enter-down', function (e) {
                console.log("PREVIOUS button enetr");
                var id = e.target.id;
                var nextIndex = Number(e.target.dataset.id);
                var nextDataId = APP_HOME_FEATURED_LIST[nextIndex];
                var prevIndex = Number(e.target.dataset.id);
                var prevDataId = APP_HOME_FEATURED_LIST[prevIndex];
                SELECTED_HOME_FEATURED_DATA_ID = prevDataId;
                if (prevIndex == 0) $("#" + id).attr("data-id", _.size(HOME_PAGE_FEATURED_DATA) - 1);
                else $("#" + id).attr("data-id", prevIndex - 1);

                $("#background_slider").attr("src", HOME_PAGE_FEATURED_DATA[prevDataId].pictures.sizes[HOME_PAGE_FEATURED_DATA[prevDataId].pictures.sizes.length - 1]['link']);

                if (prevIndex == _.size(HOME_PAGE_FEATURED_DATA) - 1) $("#leftArrow").attr("data-id", 0);
                else $("#leftArrow").attr("data-id", prevIndex + 1);

                $("#favBtn").attr("data-id", APP_HOME_FEATURED_LIST[prevIndex]);
                $("#playBtn").attr("data-id", APP_HOME_FEATURED_LIST[prevIndex]);
            });

            break;

        case "cancel_button_container":
            console.log("set cancel button");
            set_focus('CancelButton', 'BackBtn');

            // When cancel button focus
            $('#CancelButton').on('sn:focused', function (e) {
                if (e.target.id == 'BackBtn') {
                    $("#home_icon").attr("src", "images/home_top.png");
                    $("#" + e.target.id).attr("src", "images/close_focus.png");
                } else if (e.target.id == 'home_icon') {
                    $("#BackBtn").attr("src", "images/close.png");
                    $("#" + e.target.id).attr("src", "images/home_top_focus.png");
                }

            });

            // When cancel button enter
            $('#CancelButton').on('sn:enter-down', function (e) {
                $("#home_icon").attr("src", "images/home_top.png");
                $("#BackBtn").attr("src", "images/close.png");

                if (e.target.id == 'home_icon') {
                    show_page_by_index(0);
                } else if (e.target.id == 'BackBtn') {
                    if ($(".talent_page_container").hasClass("active")) {
                        $(".talent_page_container").removeClass("active").hide();
                        $(".common_header").hide();
                        set_home_background();
                        $(".home_container").addClass("active").show();
                        $(".homepage_header").show();
                        $("#" + e.target.id).attr("src", "images/close.png");
                        SN.focus("homepage_header");
                    } else if ($(".detail_page_main_container").hasClass("active")) {
                        console.log("detail page close enter...");
                        set_background("");
                        $(".detail_page_main_container").removeClass("active").hide();
                        $(".common_header").hide();
                        THIRD_PAGE_SELECTED_DATA_ARRAY = {};
                        THIRD_PAGE_SELECTED_DATA_ID = '';
                        show_page_by_index(PAGE_INDEX);

                    } else if ($(".category_container").hasClass("active")) {
                        console.log("category container close enter...");
                        $(".category_container").removeClass("active").hide();
                        $(".common_header").hide();
                        set_home_background();

                        $(".home_container").addClass("active").show();
                        $(".homepage_header").show();

                        if ($(".home_page_list_box").css("display") != "none") SN.focus("homePageItem");
                        else if ($(".home_page_menu_wise_list_box").css("display") != "none") SN.focus("homePageMenuWiseItem");

                    } else if ($(".search_result_main_container").hasClass("active")) {
                        $(".search_result_main_container").removeClass("active").hide();
                        $(".common_header").hide();
                        $(".screen_name_box").hide();
                        $("#searchResultList").html("");
                        set_background("");

                        $(".search_container").addClass("active").show();

                        APP_SEARCH_DATA_ARRAY = {};
                        SN.focus("searchPage");

                    } else if ($(".favorite_page_container").hasClass("active")) {
                        $(".favorite_page_container").removeClass("active").hide();
                        $(".common_header").hide();
                        $(".screen_name_box").hide();
                        $(".no_favorite_msg").hide();
                        $("#favoriteList").html("");

                        $(".home_container").addClass("active").show();
                        $(".homepage_header").show();

                        set_home_background();
                        SN.focus("homepage_header");

                    } else if ($(".instruction_main_container").hasClass("active")) {

                        set_home_background();
                        $(".instruction_main_container").removeClass("active").hide();
                        $("#screen_name").hide();
                        $(".common_header").hide();
                        $("#auth_code").html("");
                        TIME_COUNTER_LEFT = 0;
                        countdown("count_down", 10, 0, false);
                        hide_instruction_screen();
                    }
                }
            });

            break;

        case "talent_page_container":
            console.log("set talent_container");
            set_focus('creator_video_list', 'creator_video_list_0');

            // When talent focus
            $('#creator_video_list').on('sn:focused', function (e) {
                console.log("creator video focus");
                PAGE_INDEX = TAB_INDEX = 1;

                var dataId = e.target.dataset.id;
                $("#background_slider").attr("src", SELECTED_TALENT_DATA[dataId].pictures.sizes[SELECTED_TALENT_DATA[dataId].pictures.sizes.length - 1]['link']);
                $("#focused_talent_video_name").text(SELECTED_TALENT_DATA[dataId].name);
                $("#focused_talent_video_desc").text(SELECTED_TALENT_DATA[dataId].description);
                $("#focused_talent_video_time").text(convertSeconds(SELECTED_TALENT_DATA[dataId].duration));
                $("#BackBtn").attr("src", "images/close.png");
            });

            // When talent enter
            $('#creator_video_list').on('sn:enter-down', function (e) {
                console.log("creator video enter");
                var id = e.target.id;
                VOD_COUNTER = $("#" + id).index();
                PLAY_LIST_ELEMENT_ID = $("#" + id).parent().attr("id");
                SELECTED_VIDEO_ID = e.target.dataset.id;

                $("#detail_play_btn").attr("data-id", SELECTED_VIDEO_ID);
                $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);

                $("#category_page_heading").text(SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].name);
                $("#category_page_desc").text(SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].description);
                $("#category_page_duration").text(convertSeconds(SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].duration));
                $("#background_slider").attr("src", SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].pictures.sizes[SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].pictures.sizes.length - 1]['link']);
                show_video_details();
            });

            break;

        case "search_container":
            console.log("search_container input page");
            set_focus('searchPage', 'searchText');

            // When search input focus
            $('#searchPage').on('sn:focused', function (e) {
                console.log("search input focus");
                PAGE_INDEX = 3;
                $("#background_slider").attr("src", "images/bg.png");
                SN.remove("searchResultList");
            });

            $('#searchText').on('sn:enter-down', function (e) {
                console.log("search input selected");
            });

            $('#searchEnter').on('sn:enter-down', function (e) {
                console.log("search input selected");
                request_search_results();

            });

            break;

        case "search_result_main_container":
            set_focus('searchResultList', 'search_item_0');

            $('#searchResultList').on('sn:focused', function (e) {
                console.log("search item focus...");
                PAGE_INDEX = 4;
                $("#BackBtn").attr("src", "images/close.png");
                var id = e.target.id;
                var dataId = e.target.dataset.id;
                $("#background_slider").attr("src", APP_SEARCH_DATA_ARRAY[dataId].pictures.sizes[APP_SEARCH_DATA_ARRAY[dataId].pictures.sizes.length - 1]['link']);
                $("#search_page_heading").text(APP_SEARCH_DATA_ARRAY[dataId].name);
                $("#search_page_desc").text(APP_SEARCH_DATA_ARRAY[dataId].description);
                $("#search_page_duration").text(convertSeconds(APP_SEARCH_DATA_ARRAY[dataId].duration));

            });

            $('#searchResultList').on('sn:enter-down', function (e) {
                console.log("search item enter...");
                var id = e.target.id;
                SELECTED_VIDEO_ID = e.target.dataset.id;
                VOD_COUNTER = $("#" + id).index();
                PLAY_LIST_ELEMENT_ID = $("#" + id).parent().attr("id");

                $("#detail_play_btn").attr("data-id", SELECTED_VIDEO_ID);
                $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);

                $("#category_page_heading").text(APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].name);
                $("#category_page_desc").text(APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].description);
                $("#category_page_duration").text(convertSeconds(APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].duration));
                $("#background_slider").attr("src", APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].pictures.sizes[APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].pictures.sizes.length - 1]['link']);
                show_video_details();
            });

            break;

        case "favorite_page_container":
            set_focus('favoriteList', 'search_item_0');

            $('#favoriteList').on('sn:focused', function (e) {
                console.log("favorite item focus...");
                PAGE_INDEX = TAB_INDEX = 5;
                $("#BackBtn").attr("src", "images/close.png");
                var id = e.target.id;
                var dataId = e.target.dataset.id;
                var favoriteData = JSON.parse(localStorage["id_" + dataId]);
                $("#background_slider").attr("src", favoriteData.pictures.sizes[favoriteData.pictures.sizes.length - 1]['link']);
            });

            $('#favoriteList').on('sn:enter-down', function (e) {
                console.log("favorite item enter...");
                var id = e.target.id;
                SELECTED_VIDEO_ID = e.target.dataset.id;
                var favoriteData = JSON.parse(localStorage["id_" + SELECTED_VIDEO_ID]);

                VOD_COUNTER = $("#" + id).index();
                PLAY_LIST_ELEMENT_ID = $("#" + id).parent().attr("id");

                $("#detail_play_btn").attr("data-id", SELECTED_VIDEO_ID);
                $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);
                $("#category_page_heading").text(favoriteData.name);
                $("#category_page_desc").text(favoriteData.description);
                $("#category_page_duration").text(convertSeconds(favoriteData.duration));
                $("#background_slider").attr("src", favoriteData.pictures.sizes[favoriteData.pictures.sizes.length - 1]['link']);
                show_video_details();
            });

            break;

        case "category_container":
            set_focus('categoryitems', 'category_row_video_list_0');

            $('#categoryitems').on('sn:focused', function (e) {
                console.log("category matrix page focus.");
                PAGE_INDEX = TAB_INDEX = 2;
                $("#BackBtn").attr("src", "images/close.png");
                var id = e.target.dataset.id;
                $("#catVideoTitle").text(APP_HOME_PAGE_MIXED_DATA[id].name);
                $("#catVideoDesc").text(APP_HOME_PAGE_MIXED_DATA[id].description);
                $("#catVideoDuration").text(convertSeconds(APP_HOME_PAGE_MIXED_DATA[id].duration));
                $("#background_slider").attr("src", APP_HOME_PAGE_MIXED_DATA[id].pictures.sizes[APP_HOME_PAGE_MIXED_DATA[id].pictures.sizes.length - 1]['link']);
                if ($("#home_icon").hasClass('focusable')) {
                    $("#home_icon").attr("src", "images/home_top.png");
                }
            });

            $('#categoryitems').on('sn:enter-down', function (e) {
                console.log("category items focus");
                var id = e.target.id;
                SELECTED_VIDEO_ID = e.target.dataset.id;
                VOD_COUNTER = $("#" + id).index();
                PLAY_LIST_ELEMENT_ID = $("#" + id).parent().attr("id");

                $("#detail_play_btn").attr("data-id", SELECTED_VIDEO_ID);
                $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);
                $("#category_page_heading").text(APP_HOME_PAGE_MIXED_DATA[SELECTED_VIDEO_ID].name);
                $("#category_page_desc").text(APP_HOME_PAGE_MIXED_DATA[SELECTED_VIDEO_ID].description);
                $("#category_page_duration").text(convertSeconds(APP_HOME_PAGE_MIXED_DATA[SELECTED_VIDEO_ID].duration));
                $("#background_slider").attr("src", APP_HOME_PAGE_MIXED_DATA[SELECTED_VIDEO_ID].pictures.sizes[APP_HOME_PAGE_MIXED_DATA[SELECTED_VIDEO_ID].pictures.sizes.length - 1]['link']);
                show_video_details();
            });

            break;

        case "detail_page_buttons":
            set_focus('DetailPageButton', 'detail_play_btn');

            $('#detail_play_btn').on('sn:focused', function (e) {
                console.log("deatil page button focus");
                PLAY_PAGE_INDEX = 2;
                PAGE_INDEX = 6;
                $("#home_icon").attr("src", "images/home_top.png");
                $("#BackBtn").attr("src", "images/close.png");
                var favoriteId = $("#detail_fav_btn").attr("data-id");
                check_favorite_video_list(favoriteId, "detail_fav_btn");

                if (THIRD_PAGE_SELECTED_DATA_ID == '' && PAGE_INDEX == 1) {
                    $("#detail_play_btn").attr("data-id", SELECTED_VIDEO_ID);
                    $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);
                    $("#category_page_heading").text(SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].name);
                    $("#category_page_desc").text(SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].description);
                    $("#category_page_duration").text(convertSeconds(SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].duration));
                    $("#background_slider").attr("src", SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].pictures.sizes[SELECTED_TALENT_DATA[SELECTED_VIDEO_ID].pictures.sizes.length - 1]['link']);
                } else if (THIRD_PAGE_SELECTED_DATA_ID == '' && PAGE_INDEX == 4) {
                    $("#detail_play_btn").attr("data-id", SELECTED_VIDEO_ID);
                    $("#detail_fav_btn").attr("data-id", SELECTED_VIDEO_ID);
                    $("#category_page_heading").text(APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].name);
                    $("#category_page_desc").text(APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].description);
                    $("#category_page_duration").text(convertSeconds(APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID].duration));
                    $("#background_slider").attr("src", APP_SEARCH_DATA_ARRAY[SELECTED_VIDEO_ID]['image']);

                } else if (THIRD_PAGE_SELECTED_DATA_ID == '' && PAGE_INDEX == 0) {
                    $("#category_page_desc").text(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].description);
                    $("#category_page_duration").text(convertSeconds(APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].duration));
                    $("#background_slider").attr("src", APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].pictures.sizes[APP_HOME_PAGE_MIXED_DATA[FIRST_PAGE_SELECTED_DATA_ID].pictures.sizes.length - 1]['link']);
                    $("#detail_fav_btn").attr("data-id", FIRST_PAGE_SELECTED_DATA_ID);
                    $("#detail_play_btn").attr("data-id", FIRST_PAGE_SELECTED_DATA_ID);
                } else if (THIRD_PAGE_SELECTED_DATA_ID != '') {
                    $("#category_page_desc").text(THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].description);
                    $("#category_page_duration").text(convertSeconds(THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].duration));
                    $("#background_slider").attr("src", THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].pictures.sizes[THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].pictures.sizes.length - 1]['link']);
                    $("#detail_fav_btn").attr("data-id", THIRD_PAGE_SELECTED_DATA_ID);
                    $("#detail_play_btn").attr("data-id", THIRD_PAGE_SELECTED_DATA_ID);
                }
            });

            $('#detail_fav_btn').on('sn:enter-down', function (e) {
                console.log("detail fav btn enter");
                var id = e.target.id;
                var DataId = e.target.dataset.id;
                if (DataId) {
                    setTimeout(function () {
                        let check = check_favorite_video_list(DataId, '');

                        if (check) add_remove_favorite_video(DataId, "SUB", id)
                        else add_remove_favorite_video(DataId, "ADD", id)

                    }, 200);
                }

            });

            $('#detail_play_btn').on('sn:enter-down', function (e) {
                console.log("detail play button enter.");
                VIDEO_ID = e.target.dataset.id;
                var valid_date = localStorage.getItem("youkid_expiry");
                var todayTime = new Date().getTime();
                if (valid_date > todayTime) {
                    get_video_url();
                } else show_instruction_page();
            });

            break;

        case "detail_page_video_items":
            set_focus('deatilPageVideoList', 'deatil_page_video_item_0');

            // When search input focus
            $('#deatilPageVideoList').on('sn:focused', function (e) {
                console.log("category video focus");
                PAGE_INDEX = 6;
            });

            // When search input enter
            $('#deatilPageVideoList').on('sn:enter-down', function (e) {
                console.log("detail page video item selected");
                THIRD_PAGE_SELECTED_ID = e.target.id;
                THIRD_PAGE_SELECTED_DATA_ID = e.target.dataset.id;
                $("#detail_fav_btn").attr("data-id", THIRD_PAGE_SELECTED_DATA_ID);
                $("#detail_play_btn").attr("data-id", THIRD_PAGE_SELECTED_DATA_ID);
                check_favorite_video_list(THIRD_PAGE_SELECTED_DATA_ID, "detail_fav_btn");
                if (_.size(THIRD_PAGE_SELECTED_DATA_ARRAY) > 0 && THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID]) {
                    $("#category_page_heading").text(THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].name);
                    $("#category_page_desc").text(THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].description);
                    $("#category_page_duration").text(convertSeconds(THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].duration));
                    $("#background_slider").attr("src", THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].pictures.sizes[THIRD_PAGE_SELECTED_DATA_ARRAY[THIRD_PAGE_SELECTED_DATA_ID].pictures.sizes.length - 1]['link']);
                }
                show_inner_video_details();
            });

            break;

        case "EXIT":
            set_focus('exitModal', 'noButton');

            SN.focus("exitModal");
            $('#exitModal').off('sn:enter-down');
            $('#exitModal').on('sn:enter-down', function (e) {
                console.log("exitModal sn:enter-down");
                if ($('#noButton').is(":focus")) {
                    console.log('hide popup');
                    $(".home_container").addClass("active");
                    hide_show_modal(false, 'EXIT');
                    SN.focus("hamburger");

                } else if ($("#yesButton").is(":focus")) {
                    console.log('exit app');
                    tizen.application.getCurrentApplication().exit();
                }
            });
            break;

        case "LOGOUT":
            set_focus('exitModal', 'noButton');

            SN.focus("exitModal");
            $('#exitModal').off('sn:enter-down');
            $('#exitModal').on('sn:enter-down', function (e) {
                console.log("exitModal sn:enter-down");
                if ($('#noButton').is(":focus")) {
                    console.log('hide popup');
                    $(".home_container").addClass("active");
                    hide_show_modal(false, 'LOGOUT');
                    SN.focus("hamburger");

                } else if ($("#yesButton").is(":focus")) {
                    hide_show_modal(false, 'LOGOUT');
                    localStorage.removeItem("youkid_expiry");
                    localStorage.removeItem("youkid_id");
                    $(".home_container").addClass("active");
                    SN.focus("#hamburger");
                }
            });
            break;

        case "RETRY_CANCEL": set_focus('retryModal', 'retryButton');
            SN.focus("retryModal");

            $('#retryModal').off('sn:enter-down');
            $('#retryModal').on('sn:enter-down', function (e) {
                var id = e.target.id;
                console.log("retryModal sn:enter-down");
                var modalName = "RETRY_CANCEL";
                hide_show_modal(false, modalName);
                if (id == "retryButton") {
                    console.log("retry button enter....");
                    SN.focus('videoPlayer');
                    setTimeout(function () { get_video_url(); }, 1000);

                }
                else if (id == "cancelButton") {
                    console.log("cancel button enter....");
                    closeVideo();
                }
            });
            break;

        case "RETRY_EXIT": set_focus('retryModal', 'retryButton');
            SN.focus("retryModal");

            $('#retryModal').off('sn:enter-down');
            $('#retryModal').on('sn:enter-down', function (e) {
                console.log("retryModal sn:enter-down");
                var modalName = "RETRY_CANCEL";
                hide_show_modal(false, modalName);
                if ($("#retryButton").is(":focus")) {
                    console.log('hide popup');
                    hide_show_modal(false, 'EXIT');

                } else if ($("#cancelButton").is(":focus")) {
                    console.log('exit app');
                    tizen.application.getCurrentApplication().exit();
                    closeVideo();
                }
            });
            break;
    }
}

function set_search_focus() {
    var prefix = get_search_id_prefix();
    set_focus(prefix + 'Searchbox', prefix + 'menu_button_1');
    set_focus(prefix + 'SearchInputBox', prefix + 'SearchInput');

    $('#' + prefix + 'Searchbox, #' + prefix + 'SearchInputBox').on('sn:focused', function (e) {
        $("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");

        turn_off_list_item_overlay();
        $(".search_box").addClass("active");
        $(".menu_container, .live_page_container, #liveList, [id=movieList], .logout_page_container, .video_details_page_container").removeClass("active");
    });

    $('#' + prefix + 'Searchbox').on('sn:enter-down', function (e) {
        var prefix = get_search_id_prefix();

        $('#' + prefix + 'Searchbox').hide();
        $('#' + prefix + 'SearchInputBox').show();
        SN.focus(prefix + 'SearchInputBox');
    });
}

function set_focus(containerId, itemId) {
    console.log("set focus");
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

function set_search_default_ui() {
    var prefix = get_search_id_prefix();
    $('#' + prefix + 'SearchInputBox').hide();
    $('#' + prefix + 'Searchbox').show();
}