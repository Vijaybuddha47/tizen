function manage_spatial_navigation(containerClass, favoriteStatus, vodId) {
    switch (containerClass) {
        case "menu_container":
            set_focus('left_sidebar', 'tv_channel');

            // When menu foucs
            $('#left_sidebar').on('sn:focused', function (e) {
                if ($(".menu_container").hasClass("toggle_menu")) $(".menu_container").removeClass("toggle_menu");
                set_page_index();
                PREVIEW_FULL_DISPLAY = false;
                change_sidebar_focus_image(e.target.id);
            });

            $('#tv_channel').on('sn:focused', function (e) {
                if (!$(".home_container").hasClass("active")) {
                    $("#home_spinner").hide();
                    MENU_INDEX = TAB_INDEX = PAGE_INDEX = 0;
                    reset_preview_player(true);
                    $('.menu_container').removeClass('toggle_menu');
                    $(".home_container, .account_container, .setting_container, .search_container, .video_library_container, .video_container, .exit_container").removeClass("active").hide();
                    $("#home_spinner").show();
                    if ((SELECTED_COUNTRY_GENRE == COUNTRY_GENRE) && (SELECTED_ALPHA_NUMERIC == ALPHA_NUMERIC)) {
                        reset_global_variable();
                        if (_.size(COUNTRY_CHOICE) > 0) {
                            var tempArray = JSON.parse(JSON.stringify(APP_COUNTRY_ARRAY));
                            var tempArr = [];
                            for (var c = _.size(COUNTRY_CHOICE) - 1; c > -1; c--) {
                                for (var i = 0; i < _.size(tempArray); i++) {
                                    if (tempArray[i]["id"] == COUNTRY_CHOICE[c]) {
                                        tempArr = tempArray[i];
                                        tempArray.splice(i, 1);
                                        tempArray.unshift(tempArr);
                                        tempArr = [];
                                    }
                                }
                            }
                            APP_GENRE_COUNTRY_LIST = tempArray.slice(0);
                        } else {
                            APP_GENRE_COUNTRY_LIST = JSON.parse(JSON.stringify(APP_COUNTRY_ARRAY));
                        }
                        if (SELECTED_COUNTRY_GENRE == "GENRE") APP_GENRE_COUNTRY_LIST = JSON.parse(JSON.stringify(APP_GENRE_LIST));
                        set_homepage_genre_country_channel();
                    } else {
                        if (SELECTED_COUNTRY_GENRE == "COUNTRY") {
                            if (_.size(COUNTRY_WISE_CHANNEL_DATA) > 0) {
                                reset_global_variable();
                                if (_.size(COUNTRY_CHOICE) > 0) {
                                    var tempArray = APP_COUNTRY_ARRAY.slice(0);
                                    var tempArr = [];
                                    for (var c = _.size(COUNTRY_CHOICE) - 1; c > -1; c--) {
                                        for (var i = 0; i < _.size(tempArray); i++) {
                                            if (tempArray[i]["id"] == COUNTRY_CHOICE[c]) {
                                                tempArr = tempArray[i];
                                                tempArray.splice(i, 1);
                                                tempArray.unshift(tempArr);
                                                tempArr = [];
                                            }
                                        }
                                    }
                                    APP_GENRE_COUNTRY_LIST = tempArray.slice(0);
                                } else {
                                    APP_GENRE_COUNTRY_LIST = JSON.parse(JSON.stringify(APP_COUNTRY_ARRAY));
                                }
                                set_homepage_genre_country_channel();
                            }
                            else getListOfCountries();

                        } else if (SELECTED_COUNTRY_GENRE == "GENRE") {
                            if (_.size(APP_GENRE_LIST) > 0) {
                                reset_global_variable();
                                APP_GENRE_COUNTRY_LIST = JSON.parse(JSON.stringify(APP_GENRE_LIST));
                                set_homepage_genre_country_channel();
                            } else getGenreList();

                        }
                    }
                }

            });

            $('#video_library').on('sn:focused', function (e) {
                if (!$(".video_library_container").hasClass("active")) {
                    MENU_INDEX = TAB_INDEX = PAGE_INDEX = 1;
                    SECOND_PAGE_FOCUSED_ITEM = "video_item_0_0";
                    $('.menu_container').removeClass('toggle_menu');
                    reset_preview_player(true);
                    $(".home_container, .setting_container, .search_container, .account_container, .video_library_container, .video_container, .exit_container").removeClass("active").hide();
                    $(".main_container").show();
                    $(".episode_container").hide();
                    $("#home_spinner").show();
                    if (_.size(APP_VIDEO_CATEGORY) > 0) set_video_library_screen();
                    else get_new_release_video();
                }
            });


            $('#search').on('sn:focused', function (e) {
                if (!$(".search_container").hasClass("active")) {
                    $("#home_spinner").hide();
                    MENU_INDEX = TAB_INDEX = PAGE_INDEX = 3;
                    reset_preview_player(true);
                    reset_search_result_container();
                    $('.menu_container').addClass('toggle_menu');
                    show_hide_screens("search_container");
                    $(".result_not_found").text("");
                    $('#searchInputText').val("");
                }
            });

            $('#account').on('sn:focused', function (e) {
                if (!$(".account_container").hasClass("active")) {
                    reset_preview_player(false);
                    MENU_INDEX = TAB_INDEX = PAGE_INDEX = 4;
                    show_hide_screens("account_container");
                    var applicationInformation = tizen.application.getCurrentApplication();
                    $("#expiry_date").text(localStorage.getItem('pupilhd_app_expiry_date'));
                    $("#service_name").text(localStorage.getItem('pupilhd_app_service_name'));
                    $("#user_name").text(localStorage.getItem('pupilhd_app_user_name'));
                    $("#mac_address").text(localStorage.getItem('pupilhd_app_mac_address'));
                    $("#system_ip").text(localStorage.getItem('pupilhd_app_ip_address'));
                    $("#app_version").text(applicationInformation["appInfo"]["version"]);
                }
            });

            $('#setting').on('sn:focused', function (e) {
                if (!$(".setting_container").hasClass("active")) {
                    reset_preview_player(false);
                    MENU_INDEX = TAB_INDEX = PAGE_INDEX = 5;
                    $(".country_sub_list").css("display", "none");

                    if (_.size(COUNTRY_CHOICE) > 0) {
                        for (var i = 0; i < _.size(COUNTRY_CHOICE); i++) {
                            if (i == 0) {
                                $("#first_country_name").text(COUNTRY_CHOICE[i]);
                                $("#first_country_name").addClass("selected_country_choice_text");
                            } else if (i == 1) {
                                $("#second_country_name").text(COUNTRY_CHOICE[i]);
                                $("#second_country_name").addClass("selected_country_choice_text");
                            } else if (i == 2) {
                                $("#third_country_name").text(COUNTRY_CHOICE[i]);
                                $("#third_country_name").addClass("selected_country_choice_text");
                            }
                        }
                    }
                    show_hide_screens("setting_container");
                } //else hide_left_sidebar();
            });

            $('#exit').on('sn:focused', function (e) {
                show_hide_screens("exit_container");
            });

            break;

        case "account_container":
            set_focus('account_btns', 'manage');

            $('#manage').on('sn:enter-down', function (e) {
                console.log("account button enter...");
                $("#manage_modal").show();
                SN.focus("manage_modal");
            });

            //Sign out button clicked
            $('#sign_out').on('sn:enter-down', function (e) {
                $(".logout_modal").show();
                SN.focus("logout_modal");
            });
            break;

        case "alpha_numeric_container":
            set_focus('alpha_numeric', 'alphabet');

            $('#alpha_numeric').on('sn:enter-down', function (e) {
                var id = e.target.id;
                if (id == 'alphabet') ALPHA_NUMERIC = "ALPHA";
                else if (id == 'number') ALPHA_NUMERIC = "NUMERIC";
                localStorage.setItem('pupilhd_app_alpha_numeric', ALPHA_NUMERIC);
                sort_channel_list();
                change_sorting_selection(id, 0);
                change_sorting_icon_image(id, 0);
            });
            break;

        case "country_genre_container":
            set_focus('country_genre', 'genre');

            $('#country_genre').on('sn:enter-down', function (e) {
                var id = e.target.id;
                COUNTRY_GENRE = SELECTED_COUNTRY_GENRE;
                if (id == 'genre') {
                    SELECTED_COUNTRY_GENRE = "GENRE";
                    $("#genre").attr("data-sn-down", "null");
                    $("#country").attr("data-sn-down", "null");
                }
                else if (id == 'country') {
                    SELECTED_COUNTRY_GENRE = "COUNTRY";
                    $("#genre").attr("data-sn-down", "#first_country");
                    $("#country").attr("data-sn-down", "#first_country");
                }
                localStorage.setItem('pupilhd_app_country_genre', SELECTED_COUNTRY_GENRE);
                change_sorting_selection(id, 1);
                change_sorting_icon_image(id, 1);
            });
            break;

        case "country_choice_container":
            set_focus('country_choice', 'first_country');

            $('#country_choice').on('sn:enter-down', function (e) {
                var id = e.target.id;
                if (SELECTED_COUNTRY_GENRE == "COUNTRY") {
                    if ((id == 'first_country') || (id == 'second_country') || (id == 'third_country')) {
                        $("#country_sub_list").hide();
                        if (id == 'first_country') {
                            set_country_list(18)
                        } else if (id == 'second_country') {
                            set_country_list(19)
                        } else if (id == 'third_country') {
                            set_country_list(20)
                        }
                    }
                }
            });
            break;

        case "first_country_container":
            set_focus('first_country_list', 'country_number_1_0');

            $('#first_country_list').on('sn:enter-down', function (e) {
                var id = e.target.id;
                var country = $("#" + id).attr("data-name");
                if (country == "NULL") {
                    $("#first_country_name").text('---');
                    $("#second_country_name").text('---');
                    $("#third_country_name").text('---');
                    $(".selected_country_choice_text").removeClass("selected_country_choice_text");
                    COUNTRY_CHOICE = [];
                } else {
                    if (COUNTRY_CHOICE[0] != country && COUNTRY_CHOICE[1] != country && COUNTRY_CHOICE[2] != country) {
                        $("#first_country_name").text(country);
                        $("#first_country_name").addClass("selected_country_choice_text");
                        COUNTRY_CHOICE[0] = country;
                    }
                }
                localStorage.setItem("pupilhd_app_country_choice", JSON.stringify(COUNTRY_CHOICE));
            });
            break;

        case "second_country_container":
            set_focus('second_country_list', 'country_number_2_0');

            $('#second_country_list').on('sn:enter-down', function (e) {
                var id = e.target.id;
                if (_.size(COUNTRY_CHOICE) > 0) {
                    var country = $("#" + id).attr("data-name");
                    if (country == "NULL") {
                        $("#second_country_name").text('---');
                        $("#third_country_name").text('---');
                        $("#second_country_name").removeClass("selected_country_choice_text");
                        $("#third_country_name").removeClass("selected_country_choice_text");
                        var temp = COUNTRY_CHOICE[0];
                        COUNTRY_CHOICE = [];
                        COUNTRY_CHOICE[0] = temp;
                    } else {
                        if (COUNTRY_CHOICE[0] != country && COUNTRY_CHOICE[1] != country && COUNTRY_CHOICE[2] != country) {
                            $("#second_country_name").text(country);
                            $("#second_country_name").addClass("selected_country_choice_text");
                            COUNTRY_CHOICE[1] = country;
                        }
                    }
                    localStorage.setItem("pupilhd_app_country_choice", JSON.stringify(COUNTRY_CHOICE));
                }
            });
            break;

        case "third_country_container":
            set_focus('third_country_list', 'country_number_3_0');

            $('#third_country_list').on('sn:enter-down', function (e) {
                var id = e.target.id;
                if (_.size(COUNTRY_CHOICE) > 1) {
                    var country = $("#" + id).attr("data-name");
                    if (country == "NULL") {
                        $("#third_country_name").text('---');
                        $("#third_country_name").rempveClass("selected_country_choice_text");
                        var temp1 = COUNTRY_CHOICE[0];
                        var temp2 = COUNTRY_CHOICE[1];
                        COUNTRY_CHOICE = [];
                        COUNTRY_CHOICE[0] = temp1;
                        COUNTRY_CHOICE[1] = temp2;
                    } else {
                        if (COUNTRY_CHOICE[0] != country && COUNTRY_CHOICE[1] != country && COUNTRY_CHOICE[2] != country) {
                            $("#third_country_name").text(country);
                            $("#third_country_name").addClass("selected_country_choice_text");
                            COUNTRY_CHOICE[2] = country;
                        }
                    }
                    localStorage.setItem("pupilhd_app_country_choice", JSON.stringify(COUNTRY_CHOICE));
                }

            });
            break;

        case "tv_channel_search_result":
            set_focus('channel_result', 'channel_result_0');

            // When menu foucs
            $('#channel_result').on('sn:focused', function (e) {
                MENU_INDEX = TAB_INDEX = PAGE_INDEX = 3;
                FOURTH_PAGE_FOCUSED_ITEM = e.target.id;
                SELECTED_CHANNEL_TYPE = "CHA";
                var parentId = $("#" + FOURTH_PAGE_FOCUSED_ITEM).parent().attr('id');
                search_screen_next_previous_item(parentId);
            });

            $('#channel_result').on('sn:enter-down', function (e) {
                MENU_INDEX = TAB_INDEX = PAGE_INDEX = 3;
                var id = FOURTH_PAGE_SELECTED_ITEM = e.target.id;
                var i = $("#" + id).index();
                if ($("#" + id).hasClass("selected_searched_item")) {
                    $(".searchbar_box").css("display", "none");
                    $("#preview-av-player").removeClass("video-player-minimize").addClass("video-player-expand");
                    $(".preview-video-buffered").removeClass("live-preview-player-loader").addClass("live-main-player-loader");
                    $("#player_fav").attr("data-id", SEARCHED_TV_CHANNELS_LIST[i]["id"]);
                    get_player_channel_epg(SEARCHED_TV_CHANNELS_LIST[i]["id"]);

                    $("#player_channel_name").text(SEARCHED_TV_CHANNELS_LIST[i]['number'] + ". " + SEARCHED_TV_CHANNELS_LIST[i]['name']);

                    if (SEARCHED_TV_CHANNELS_LIST[i]['favorite']) $("#player_fav").text("- FAV");
                    else $("#player_fav").text("+ FAV");

                    if (SEARCHED_TV_CHANNELS_LIST[i]['hd'] != 0) $("#player_hd").show();
                    else $("#player_hd").hide();

                    $("#channel_logo_expend").html('<img src="' + APP_IMAGE_URL + SEARCHED_TV_CHANNELS_LIST[i]["logo"] + '" alt="' + SEARCHED_TV_CHANNELS_LIST[i]["name"] + '" onerror="imageError(this);" />');

                    $("#video_content_details").show();
                    if (webapis.avplay.getState() != "NONE" && webapis.avplay.getState() != "IDLE") {
                        webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
                        sendMediaInfo("tv-channel", SEARCHED_TV_CHANNELS_LIST[i]['number']);
                    }
                    PREVIEW_FULL_DISPLAY = true;
                    SN.focus("favorite_button");
                } else {
                    $(".selected_searched_item").removeClass("selected_searched_item");
                    $("#" + id).addClass("selected_searched_item");
                    $("#channel_result_name").text(SEARCHED_TV_CHANNELS_LIST[i]["number"] + ". " + SEARCHED_TV_CHANNELS_LIST[i]["name"]);
                    $("#channel_result_country").text(SEARCHED_TV_CHANNELS_LIST[i]["country_id"]);
                    $("#channel_result_lang").text(SEARCHED_TV_CHANNELS_LIST[i]["language_id"]);

                    if (SEARCHED_TV_CHANNELS_LIST[i]["hd"]) $("#channel_result_hd").css("display", "inline-block");
                    else $("#channel_result_hd").css("display", "none");
                    if (SEARCHED_TV_CHANNELS_LIST[i]["favorite"]) $("#channel_result_fav").css("display", "inline-block");
                    else $("#channel_result_fav").css("display", "none");

                    $("#video_search_details").hide();
                    $("#channel_search_details").show();
                    $("#" + id).addClass("selected_searched_item");

                    reset_preview_player(false);
                    $("div#searchpage_player").load("preview-video-player.html");
                    webapis.avplay.stop();
                    webapis.avplay.close();
                    VOD_URL = SEARCHED_TV_CHANNELS_LIST[i]["url"];
                    checkVideoURL();
                }
            });
            break;

        case "video_search_result":
            set_focus('video_result', 'video_result_0');

            // When menu foucs
            $('#video_result').on('sn:focused', function (e) {
                MENU_INDEX = TAB_INDEX = PAGE_INDEX = 3;
                FOURTH_PAGE_FOCUSED_ITEM = e.target.id;
                SELECTED_CHANNEL_TYPE = "VOD";
                var parentId = $("#" + FOURTH_PAGE_FOCUSED_ITEM).parent().attr('id');
                search_screen_next_previous_item(parentId);
            });

            $('#video_result').on('sn:enter-down', function (e) {
                MENU_INDEX = TAB_INDEX = PAGE_INDEX = 3;
                webapis.avplay.stop();
                webapis.avplay.close();
                var id = FOURTH_PAGE_SELECTED_ITEM = e.target.id;
                var i = $("#" + id).index();
                if (TIMER) {
                    clearTimeout(TIMER); //cancel the previous TIMER.
                    TIMER = null;
                }
                if ($("#" + id).hasClass("selected_searched_item") && (_.size(SEARCHED_VIDEO_LIST[i]['series']) == 0)) {
                    console.log("load full screen player");
                    webapis.avplay.stop();
                    webapis.avplay.close();
                    reset_preview_player(false);
                    VOD_URL = SEARCHED_VIDEO_LIST[i]['url'];
                    VOD_COUNTER = 0;
                    load_main_player();
                    sendMediaInfo("video", SEARCHED_VIDEO_LIST[i]['id']);

                } else if ($("#" + id).hasClass("selected_searched_item") && (_.size(SEARCHED_VIDEO_LIST[i]['series']) > 0)) {
                    $("#video_list").hide();
                    $(".episode_container").show();
                    $("#loader").show();
                    SELECTED_VIDEO_DATA = {};
                    SECOND_PAGE_SELECTED_SHOW_CATEGORY = SEARCHED_VIDEO_LIST[i]["category"];
                    SELECTED_VIDEO_DATA = SEARCHED_VIDEO_LIST[i];
                    extractVideoCategory();
                    $("#search_result_episode_list").html("");
                    get_episode_url();
                } else {
                    $(".selected_searched_item").removeClass("selected_searched_item");
                    $("#" + id).addClass("selected_searched_item");

                    $("#video_result_name").text(SEARCHED_VIDEO_LIST[i]["name"]);

                    if (_.size(SEARCHED_VIDEO_LIST[i]['series']) > 0) {
                        $("#video_result_time").hide();
                        $("#result_vod_type").css("display", "inline-block");
                        $("#result_count").text(_.size(SEARCHED_VIDEO_LIST[i]['series']))
                    } else {
                        $("#result_count").text("");
                        $("#vod_time").show();
                        $("#result_vod_type").hide();
                        $("#video_result_time").text(SEARCHED_VIDEO_LIST[i]['time'] + "m").show();
                    }

                    $("#video_result_year").text(SEARCHED_VIDEO_LIST[i]["year"]);
                    $("#video_result_country").text(SEARCHED_VIDEO_LIST[i]["country"]);
                    $("#video_result_genre").text(SEARCHED_VIDEO_LIST[i]["genres"]);
                    $("#video_result_rating").text(SEARCHED_VIDEO_LIST[i]["rating_mpaa"]);
                    $("#video_result_director").text(SEARCHED_VIDEO_LIST[i]["director"]);

                    if (SEARCHED_VIDEO_LIST[i]["hd"]) $("#video_result_quality").show();
                    else $("#video_result_quality").hide();
                    if (SEARCHED_VIDEO_LIST[i]["favorite"]) $("#channel_result_fav").show();
                    else $("#channel_result_fav").hide();

                    $("#" + id).addClass("selected_searched_item");
                    $("div#searchpage_player").empty();
                    $("div#searchpage_player").html('<img src="' + APP_IMAGE_URL + SEARCHED_VIDEO_LIST[i]["poster"] + '" alt="' + SEARCHED_VIDEO_LIST[i]["name"] + '" onerror="imageError(this);" />');

                    if ($("#" + id).hasClass("selected_searched_item")) {
                        if (SEARCHED_VIDEO_LIST[i]["promo_url"]) {
                            TIMER = setTimeout(function () {
                                $("div#searchpage_player").empty();
                                $("div#searchpage_player").load("preview-video-player.html");
                                webapis.avplay.stop();
                                webapis.avplay.close();
                                VOD_URL = SEARCHED_VIDEO_LIST[i]["promo_url"];
                                load_preview_player();
                            }, 4000);
                        }
                    }
                    $("#channel_search_details").hide();
                    $("#video_search_details").show();
                }
            });
            break;

        case "result_episode_container":
            set_focus('search_result_episode_list', 'search_episode_0');

            // When menu foucs
            $('#search_result_episode_list').on('sn:focused', function (e) {
                PAGE_INDEX = MENU_INDEX = TAB_INDEX = 3;
                set_next_previous_searched_result_episodes();
                if ($("#" + e.target.id).index() == 0) $("#result_episode_left_shadow_box").hide();
                if ($("#" + e.target.id + "li:last").is(':last-child')) $("#result_episode_right_shadow_box").hide();

            });

            $('#search_result_episode_list').on('sn:enter-down', function (e) {
                PAGE_INDEX = MENU_INDEX = TAB_INDEX = 3;
                var id = e.target.id;
                var index = $("#" + id).index();
                SELECTED_EPIOSDE_NUMBER = index + 1;
                webapis.avplay.stop();
                webapis.avplay.close();
                VOD_COUNTER = index;
                VOD_URL = SELECTED_EPISODES[index];
                load_main_player();
                sendMediaInfo("video", SELECTED_VIDEO_DATA["id"]);
                show_hide_show_deatils(true);
            });
            break;

        case "LOGOUT":
            set_focus('logout_modal', 'no_logout');

            $('#no_logout').on('sn:enter-down', function (e) {
                $(".logout_modal").hide();
                SN.focus("account_btns");
            });

            $('#yes_logout').on('sn:enter-down', function (e) {
                signOutApp();
            });
            break;

        case "MANAGE_POPUP":
            set_focus('manage_modal', 'manage_popup');

            $('#manage_modal').on('sn:enter-down', function (e) {
                $("#manage_modal").hide();
                SN.focus("account_btns");
            });
            break;

        case "Favorite_button":
            set_focus('favorite_button', 'player_fav');

            // When menu foucs
            $('#favorite_button').on('sn:focused', function (e) {
                $("#video_content_details").show();
                if (TIMER) {
                    clearTimeout(TIMER); //cancel the previous TIMER.
                    TIMER = null;
                }

                TIMER = setTimeout(function () {
                    $("#video_content_details").hide();
                    if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
                }, 3000);
            });

            $('#favorite_button').on('sn:enter-down', function (e) {
                if (SELECTED_CHANNEL_TYPE == "CHA") {
                    var channelId = $("#" + e.target.id).attr("data-id");
                    if ($("#" + e.target.id).hasClass("added")) remove_favorite_channel(channelId);
                    else add_favorite_channel(channelId);
                    recreateFavoriteChannelList();
                }
            });
            break;

        case "favorite_container":
            set_focus('favorite_list', 'fav_channel_0_0');

            // When menu foucs
            $('#favorite_list').on('sn:focused', function (e) {
                PAGE_INDEX = MENU_INDEX = TAB_INDEX = 0;
                FIRST_PAGE_FOCUSED_ITEM = e.target.id;
                var parentId = $("#" + FIRST_PAGE_FOCUSED_ITEM).parent().attr('id');
                var countryIndex = $("#" + FIRST_PAGE_FOCUSED_ITEM).parent().parent().parent().find("h1").attr('id');
                set_first_last_unfocusable_list(parentId, countryIndex);
            });

            $('#favorite_list').on('sn:enter-down', function (e) {
                var dataId = $("#" + e.target.id).attr("data-id");
                PAGE_INDEX = MENU_INDEX = TAB_INDEX = 0;
                SELECTED_CHANNEL_TYPE = "FAV";
                var id = FIRST_PAGE_SELECTED_ITEM = e.target.id;
                SELECTED_CHANNEL_INDEX = $("li#" + id).index();
                SELECTED_CAT_INDEX = $("#" + id).parent().attr("data-name");
                if (TIMER) {
                    clearTimeout(TIMER); //cancel the previous TIMER.
                    TIMER = null;
                }

                if ($("#" + id).hasClass("selected_channel")) {
                    $("#preview-av-player").removeClass("video-player-minimize").addClass("video-player-expand");
                    $(".preview-video-buffered").removeClass("live-preview-player-loader").addClass("live-main-player-loader");
                    $(".video_player_error_message").addClass("expand_preview_error_msg");

                    $("#player_fav").attr("data-id", dataId);

                    get_player_channel_epg(dataId);

                    $("#player_channel_name").text(FAVORITE_DATA[dataId]['number'] + ". " + FAVORITE_DATA[dataId]['name']);

                    if (FAVORITE_DATA[dataId]['favorite'] || typeof FAVORITE_DATA[dataId] !== 'undefined') {
                        $("#player_fav").addClass("added");
                        $("#player_fav").text("- FAV");
                    }
                    else {
                        $("#player_fav").removeClass("added");
                        $("#player_fav").text("+ FAV");
                    }

                    if (FAVORITE_DATA[dataId]['hd'] != 0) $("#player_hd").show();
                    else $("#player_hd").hide();

                    $("#channel_logo_expend").html('<img src="' + APP_IMAGE_URL + FAVORITE_DATA[dataId]['logo'] + '" alt="' + FAVORITE_DATA[dataId]["name"] + '" onerror="imageError(this);" />');

                    $("#video_content_details").show();
                    if (webapis.avplay.getState() != "NONE" && webapis.avplay.getState() != "IDLE") {
                        webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
                        sendMediaInfo("tv-channel", FAVORITE_DATA[dataId]['number']);
                    }
                    PREVIEW_FULL_DISPLAY = true;
                    SN.focus("favorite_button");

                    TIMER = setTimeout(function () {
                        $("#video_content_details").hide();
                        if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
                    }, 3000);
                } else {
                    $('.selected_channel').removeClass('selected_channel');
                    $("#" + id).addClass("selected_channel");
                    $("#selected_channel_name").text(FAVORITE_DATA[dataId]['number'] + ". " + FAVORITE_DATA[dataId]['name']);
                    $("#selected_channel_country").text(FAVORITE_DATA[dataId]['country_id']);
                    $("#selected_channel_language").text(FAVORITE_DATA[dataId]['language_id']);
                    get_channel_epg(FAVORITE_DATA[dataId]['id']);

                    if (FAVORITE_DATA[dataId]['favorite']) $(".fav").css("display", "inline-block");
                    else $(".fav").hide();

                    if (FAVORITE_DATA[dataId]['hd'] != 0) $(".hd").css("display", "inline-block");
                    else $(".hd").hide();

                    webapis.avplay.stop();
                    webapis.avplay.close();
                    VOD_URL = FAVORITE_DATA[dataId]['url'];
                    checkVideoURL();
                }
            });
            break;

        case "episode_container":
            set_focus('episode_list', 'episode_0');

            // When episode item foucs
            $('#episode_list').on('sn:focused', function (e) {
                PAGE_INDEX = MENU_INDEX = TAB_INDEX = 2;
                set_next_previous_episodes();
                if ($("#" + e.target.id).index() == 0) $("#episode_left_shadow_box").hide();
                if ($("#" + e.target.id + "li:last").is(':last-child')) $("#episode_right_shadow_box").hide();
            });

            $('#episode_list').on('sn:enter-down', function (e) {
                PAGE_INDEX = MENU_INDEX = TAB_INDEX = 2;
                var id = e.target.id;
                var index = $("#" + id).index();
                SELECTED_EPIOSDE_NUMBER = index + 1;
                webapis.avplay.stop();
                webapis.avplay.close();
                VOD_COUNTER = index;
                VOD_URL = SELECTED_EPISODES[index];
                load_main_player();
                sendMediaInfo("video", SELECTED_VIDEO_DATA["id"]);
                show_hide_show_deatils(true);
            });
            break;

        case "search_container":
            set_focus('searchBox', 'searchInputText');

            // When menu foucs
            $('#searchBox').on('sn:focused', function (e) {
                $(".menu_container").addClass("toggle_menu");
            });

            $('#searchBox').on('sn:enter-down', function (e) {
                request_search_results();
            });
            break;

        case "channel_number_container":
            set_focus('channel_input_box', 'channel_input');

            $('#channel_input_box').on('sn:focused', function (e) {
                clearTimeout(TIME_OUT_FIRST);
                TIME_OUT_FIRST = setTimeout(function () {
                    hide_channel_input_box();
                }, 10000);
            });

            $('#channel_input_box').on('sn:enter-down', function (e) {
                play_live_by_channel_number();
            });

            break;


        case "exit_container_box":
            set_focus('exit_container', 'exitOk');

            $('#exit_container').on('sn:enter-down', function (e) {
                tizen.application.getCurrentApplication().exit();
            });
            break;

        case "EXIT":
            set_focus('exitModal', 'noButton');

            $('#noButton').on('sn:enter-down', function (e) {
                hide_show_modal(false, 'EXIT');

                var className = '';
                if (PAGE_INDEX == 0) className = 'home_container';
                else if (PAGE_INDEX == 1) className = 'video_library_container';
                else if (PAGE_INDEX == 2) className = 'episode_container';
                else if (PAGE_INDEX == 3) className = 'search_container';
                else if (PAGE_INDEX == 4) className = 'account_container';
                else if (PAGE_INDEX == 5) className = 'setting_container';

                remove_add_active_class(className);
                $(".menu_container").addClass("active");
                set_selected_menu();
                $(".menu_container").removeClass("toggle_menu");
                SN.focus("left_sidebar");
            });

            $('#yesButton').on('sn:enter-down', function (e) {
                // closeVideo();
                tizen.application.getCurrentApplication().exit();
            });
            break;

        case "RETRY_CANCEL": set_focus('retryModal', 'retryButton');
            SN.focus("retryModal");

            $('#retryModal').off('sn:enter-down');
            $('#retryButton').on('sn:enter-down', function (e) {
                if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
                load_main_player();
                // webapis.avplay.restoreAsync(VOD_URL, 0, false);
            });

            $('#cancelButton').on('sn:enter-down', function (e) {
                closeVideo();
            });

            $('#retryModal').on('sn:enter-down', function (e) {
                var modalName = "RETRY_CANCEL";
                hide_show_modal(false, modalName);
            });
            break;

        case "RETRY_EXIT": set_focus('retryModal', 'retryButton');
            SN.focus("retryModal");

            $('#retryModal').on('sn:enter-down', function (e) {
                if ($("#retryButton").is(":focus")) {
                    hide_show_modal(false, 'RETRY_EXIT');
                } else if ($("#cancelButton").is(":focus")) {
                    if (TAB_INDEX != -1) closeVideo();
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

function focus_channel_list() {
    var restrictVal = "self-first";
    var containerId = "channel_list_" + ROW_INDEX;
    var itemId = "row_item_" + ROW_INDEX + "_0";
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

function set_channel_list_focus(row_num) {
    var restrictVal = "self-first";
    var total = 0;
    if (SELECTED_COUNTRY_GENRE == "COUNTRY") total = _.size(APP_COUNTRY_LIST);
    else if (SELECTED_COUNTRY_GENRE == "GENRE") total = _.size(APP_GENRE_LIST);
    for (i = row_num; i < total; i++) {
        var containerId = "channel_list_" + i;
        var itemId = "row_item_" + i + "_0";
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

    // When menu foucs
    $('[id^=channel_list_]').on('sn:focused', function (e) {
        PAGE_INDEX = MENU_INDEX = TAB_INDEX = 0;
        var id = FIRST_PAGE_FOCUSED_ITEM = e.target.id;
        if (!$('.menu_container').hasClass("toggle_menu")) $('.menu_container').toggleClass('toggle_menu');
        var parentId = $("#" + id).parent().attr('id');
        var countryIndex = $("#" + id).parent().parent().parent().find("h1").attr('id');

        set_first_last_unfocusable_list(parentId, countryIndex);
    });

    $('[id^=channel_list_]').on('sn:enter-down', function (e) {
        PAGE_INDEX = MENU_INDEX = TAB_INDEX = 0;
        SELECTED_CHANNEL_TYPE = "CHA";
        var id = FIRST_PAGE_SELECTED_ITEM = e.target.id;
        var index = SELECTED_CHANNEL_INDEX = $("li#" + id).index();
        var countryName = SELECTED_CAT_INDEX = $("#" + id).parent().attr("data-name");
        SELECTED_CHANNEL_ROW = $("#" + id).parent().attr("id");
        var channel_id = APP_CHANNEL_DATA_ARRAY[countryName][index]["id"];
        if (TIMER) {
            clearTimeout(TIMER); //cancel the previous TIMER.
            TIMER = null;
        }

        if ($("#" + id).hasClass("selected_channel")) {
            $("#preview-av-player").removeClass("video-player-minimize").addClass("video-player-expand");
            $(".video_player_error_message").addClass("expand_preview_error_msg");
            $(".preview-video-buffered").removeClass("live-preview-player-loader").addClass("live-main-player-loader");

            $("#player_fav").attr("data-id", APP_CHANNEL_DATA_ARRAY[countryName][index]["id"]);

            get_player_channel_epg(APP_CHANNEL_DATA_ARRAY[countryName][index]["id"]);

            $("#player_channel_name").text(APP_CHANNEL_DATA_ARRAY[countryName][index]['number'] + ". " + APP_CHANNEL_DATA_ARRAY[countryName][index]['name']);

            if (APP_CHANNEL_DATA_ARRAY[countryName][index]['favorite'] || typeof FAVORITE_DATA[channel_id] !== 'undefined') {
                $("#player_fav").addClass("added");
                $("#player_fav").text("- FAV");
            }
            else {
                $("#player_fav").removeClass("added");
                $("#player_fav").text("+ FAV");
            }

            if (APP_CHANNEL_DATA_ARRAY[countryName][index]['hd'] != 0) $("#player_hd").show();
            else $("#player_hd").hide();

            $("#channel_logo_expend").html('<img src="' + APP_IMAGE_URL + APP_CHANNEL_DATA_ARRAY[countryName][index]['logo'] + '" alt="' + APP_CHANNEL_DATA_ARRAY[countryName][index]["name"] + '" onerror="imageError(this);" />');

            $("#video_content_details").show();
            if (webapis.avplay.getState() != "NONE" && webapis.avplay.getState() != "IDLE") {
                webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
                sendMediaInfo("tv-channel", APP_CHANNEL_DATA_ARRAY[countryName][index]['number']);
            }
            PREVIEW_FULL_DISPLAY = true;
            SN.focus("favorite_button");

            TIMER = setTimeout(function () {
                $("#video_content_details").hide();
                if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
            }, 3000);
        } else {
            SELECTED_CHANNEL_NUMBER = APP_CHANNEL_DATA_ARRAY[countryName][index]['number'];
            $('.selected_channel').removeClass('selected_channel');
            $("#" + id).addClass("selected_channel");
            $("#selected_channel_name").text(APP_CHANNEL_DATA_ARRAY[countryName][index]['number'] + ". " + APP_CHANNEL_DATA_ARRAY[countryName][index]['name']);
            $("#selected_channel_country").text(APP_CHANNEL_DATA_ARRAY[countryName][index]['country_id']);
            $("#selected_channel_language").text(APP_CHANNEL_DATA_ARRAY[countryName][index]['language_id']);
            get_channel_epg(APP_CHANNEL_DATA_ARRAY[countryName][index]['id']);

            if (APP_CHANNEL_DATA_ARRAY[countryName][index]['favorite']) $(".fav").css("display", "inline-block");
            else $(".fav").hide();

            if (APP_CHANNEL_DATA_ARRAY[countryName][index]['hd'] != 0) $(".hd").css("display", "inline-block");
            else $(".hd").hide();

            webapis.avplay.stop();
            webapis.avplay.close();
            VOD_URL = APP_CHANNEL_DATA_ARRAY[countryName][index]['url'];
            checkVideoURL();
        }

    });
}


function focus_video_list(index) {
    var restrictVal = "self-first";
    var containerId = "video_list_" + index;
    var itemId = "video_item_" + index + "_0";
    SN.remove(containerId);
    SN.add({
        id: containerId,
        selector: '#' + containerId + ' .focusable',
        restrict: restrictVal,
        defaultElement: '#' + itemId,
        enterTo: 'last-focused',
    });
    SN.makeFocusable();
}


function set_video_list_focus(index) {
    var restrictVal = "self-first";
    var containerId = "video_list_" + index;
    var itemId = "video_item_" + index + "_0";
    SN.remove(containerId);
    SN.add({
        id: containerId,
        selector: '#' + containerId + ' .focusable',
        restrict: restrictVal,
        defaultElement: '#' + itemId,
        enterTo: 'last-focused',
    });
    SN.makeFocusable();

    $('[id^=video_list_]').on('sn:focused', function (e) {
        PAGE_INDEX = MENU_INDEX = TAB_INDEX = 1;
        if (!$('.menu_container').hasClass("toggle_menu")) $('.menu_container').toggleClass('toggle_menu');
        SECOND_PAGE_FOCUSED_ITEM = e.target.id;
        var parentId = $("#" + SECOND_PAGE_FOCUSED_ITEM).parent().attr('id');
        var categoryIndex = $("#" + SECOND_PAGE_FOCUSED_ITEM).parent().parent().parent().attr('id');
        set_video_library_next_previous_list(parentId, categoryIndex);
        if ($("#" + SECOND_PAGE_FOCUSED_ITEM).index() == 0) $("#half_video_left_side_" + categoryIndex).hide();
        if ($("#" + SECOND_PAGE_FOCUSED_ITEM + "li:last").is(':last-child')) $("#half_video_right_side_" + categoryIndex).hide();
    });

    $('[id^=video_list_]').on('sn:enter-down', function (e) {
        var id = SECOND_PAGE_SELECTED_ITEM = e.target.id;
        var index = $("li#" + id).index();
        var categoryName = $("#" + id).parent().parent().parent().attr("data-category");
        if (TIMER) {
            clearTimeout(TIMER); //cancel the previous TIMER.
            TIMER = null;
        }
        if ($("#" + id).hasClass("selected_video") && (_.size(APP_CAT_VIDEO_ARRAY[categoryName][index]['series']) > 0)) {
            $("#video_list").hide();
            $(".episode_container").show();
            $("#loader").show();
            SELECTED_VIDEO_DATA = {};
            SECOND_PAGE_SELECTED_SHOW_CATEGORY = categoryName;
            SELECTED_VIDEO_DATA = APP_CAT_VIDEO_ARRAY[categoryName][index];
            extractVideoCategory();
            $("#episode_list").html("");
            $(".episode_list").hide();
            get_episode_url();

        } else if ($("#" + id).hasClass("selected_video") && (_.size(APP_CAT_VIDEO_ARRAY[categoryName][index]['series']) == 0)) {
            //Open main video player
            webapis.avplay.stop();
            webapis.avplay.close();
            VOD_COUNTER = index;
            VOD_URL = APP_CAT_VIDEO_ARRAY[categoryName][index]['url'];
            SELECTED_VIDEO_DATA = APP_CAT_VIDEO_ARRAY[categoryName][index];
            show_hide_show_deatils(true);
            load_main_player();
            sendMediaInfo("video", APP_CAT_VIDEO_ARRAY[categoryName][index]['id']);

        } else {
            $(".selected_video").removeClass("selected_video");
            $("#" + id).addClass("selected_video");
            $("#video_name").text(APP_CAT_VIDEO_ARRAY[categoryName][index]['name']);
            if (_.size(APP_CAT_VIDEO_ARRAY[categoryName][index]['series']) > 0) {
                $("#vod_time").hide();
                $("#vod_type").css("display", "inline-block");
                $("#count").text(_.size(APP_CAT_VIDEO_ARRAY[categoryName][index]['series']))
            } else {
                $("#count").text("");
                $("#vod_time").show();
                $("#vod_type").hide();
                $("#vod_time").text(APP_CAT_VIDEO_ARRAY[categoryName][index]['time'] + "m");
            }
            $("#vod_year").text(APP_CAT_VIDEO_ARRAY[categoryName][index]['year']);
            $("#vod_country").text(APP_CAT_VIDEO_ARRAY[categoryName][index]['country']);
            $("#vod_genre").text(APP_CAT_VIDEO_ARRAY[categoryName][index]['genres']);
            $("#vod_rating").text(APP_CAT_VIDEO_ARRAY[categoryName][index]['rating_mpaa']);
            $("#director_name").text(APP_CAT_VIDEO_ARRAY[categoryName][index]["director"]);
            $("#actors").text(APP_CAT_VIDEO_ARRAY[categoryName][index]["actors"]);
            $("#video_desc").text(APP_CAT_VIDEO_ARRAY[categoryName][index]["description"]);

            if (APP_CAT_VIDEO_ARRAY[categoryName][index]['hd']) $(".video_hd").css("display", "inline-block");
            else $(".video_hd").hide();

            // if (APP_CAT_VIDEO_ARRAY[categoryName][index]['favorite']) $(".fav").css("display", "inline-block");
            // else $(".fav").hide();

            webapis.avplay.stop();
            webapis.avplay.close();
            $("div#video-preview-player").empty();
            $("div#video-preview-player").html('<img src="' + APP_IMAGE_URL + APP_CAT_VIDEO_ARRAY[categoryName][index]["poster"] + '" alt="' + APP_CAT_VIDEO_ARRAY[categoryName][index]["name"] + '" onerror="imageError(this);" />');

            //play preview video
            if (APP_CAT_VIDEO_ARRAY[categoryName][index]['promo_url']) {
                TIMER = setTimeout(function () {
                    $("div#video-preview-player").empty();
                    $("div#video-preview-player").load("preview-video-player.html");
                    VOD_URL = APP_CAT_VIDEO_ARRAY[categoryName][index]['promo_url'];
                    load_preview_player();
                }, 4000);
            }
        }

    });

}