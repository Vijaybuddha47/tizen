function set_menu() {
	var str = '',
		containerClass = 'menu_container',
		totalMenu = MENU_ARRAY.length;

	if (totalMenu > 0) {
		for (var i = 0; i < totalMenu; i++) {
			var iconClass = (create_menu_icon_class(MENU_ARRAY[i]['name']) + "_icon").toLowerCase(),
				menuBorderClass = '',
				tabindex = 0,
				leftFocus = '',
				rightFocus = '',
				downFocus = '',
				upFocus = ' data-sn-up="null"';

			// Actual Menu
			if (i == 0) {
				leftFocus = ' data-sn-left="null"';
				menuBorderClass = 'menu_border';
			}

			if (i == (totalMenu - 1)) rightFocus = ' data-sn-right="null"';

			str += '<li class="focusable ' + menuBorderClass + '" tabindex="' + tabindex + '" id="menu' + i + '" ' + leftFocus + rightFocus + downFocus + upFocus + '>';
			str += '<span class="menu_icon ' + iconClass + '"></span><span class="menu_title">' + MENU_ARRAY[i]['name'] + '</span>';
			str += '</li>';
		}

		$("#menuList").html(str);
		$("#menu1").hide();
		$("#menu2").hide();
		$(".menu_list_container").addClass("sort_menu_container");
		$("." + containerClass).addClass("active");

		manage_spatial_navigation(containerClass);
		SN.focus("menuList");

		MENU_INDEX = 0;
		TIME_STAMP = Date.now();
		parse_data(TIME_STAMP);
	}
}

function create_menu_icon_class(menuName) {
	if (menuName == undefined && menuName == "") return "";
	return menuName.replace(/[ /]/g, "_");
}


function parse_data(timestamp) {
	$("#loader").show();
	$(".live_page_container, .movie_page_container, #liveList, .video_details_page_container, .logout_page_container, .seasons_page_container, .episode_page_container").html("").show();
	$("#pageTitle").text("");
	$(".no-record-box").remove();

	var param = { memberId: localStorage.getItem('memberId') };
	if (MENU_INDEX == 0) {
		url = LIVE_MENU_API;
		param.keyword = "";
		param.sort = 0;
		param.isFav = false;

	} else if (MENU_INDEX == 1 || MENU_INDEX == 2) {
		url = MOVIES_AND_SHOWS_MENU_API;
		if (MENU_INDEX == 1) param.type = 0;
		else if (MENU_INDEX == 2) param.type = 1;
	}

	$.ajax({
		type: "GET",
		url: url,
		data: jQuery.param(param),
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType: "JSON",
		async: true,
		cache: false,
		timeout: REQUEST_TIMEOUT * 1000,
		success: function (json) {
			if (timestamp == TIME_STAMP) {
				if (json.package_info.live_disabled == "1" && MENU_INDEX == 0) {
					$("#menu0").hide();
					$(".menu_list_container").addClass("three_menu_show");
					SELECTED_MENU_INDEX = MENU_INDEX = 1;
					TIME_STAMP = Date.now();
					parse_data(TIME_STAMP);
					SN.focus("menuList");
				} else {
					if (json.package_info.live_disabled != "1" && json.package_info.vod_disabled == "1") {
						$(".menu_list_container").addClass("sort_menu_container");
						$("#menu1").hide();
						$("#menu2").hide();
						if (MENU_INDEX == 0) set_home_menu_data(json);
					} else if (json.package_info.vod_disabled != "1" && json.package_info.live_disabled == "1") {
						if (MENU_INDEX == 1 || MENU_INDEX == 2) set_movies_and_shows_menu_data(json);
					} else if (json.package_info.vod_disabled == "0" && json.package_info.live_disabled == "0") {
						$("#menu0").show();
						$("#menu1").show();
						$("#menu2").show();
						if (MENU_INDEX == 1 || MENU_INDEX == 2) set_movies_and_shows_menu_data(json);
						else if (MENU_INDEX == 0) set_home_menu_data(json);

					} else {
						$("#menu0").hide();
						$("#menu1").hide();
						$("#menu2").hide();
						$(".menu_list_container").addClass("one_menu_show");
						set_logout_menu_data();
						SN.focus("menuList");
					}
				}
			}

		}, error: function (xhr, textStatus, errorThrown) {
			console.log(xhr);
			if (timestamp == TIME_STAMP) {
				if (MENU_INDEX == 0) set_home_menu_data({});
				else if (MENU_INDEX == 1 || MENU_INDEX == 2) set_movies_and_shows_menu_data({});
			}
		}
	});
}

function set_home_menu_data(json) {
	$(".live_page_container").show();
	CAT_ARRAY[MENU_INDEX] = new Array();

	var j = 0,
		str = "",
		tabindex = 1,
		leftFocus = '',
		rightFocus = '',
		downFocus = '',
		upFocus = '',
		containerClass = "live_page_container";

	if (_.size(json) > 0) {
		if (json.result == 200) {
			if (json.channels.length > 0) {
				// CAT_ARRAY[MENU_INDEX] = json.channels;

				//str +=	'<div class="page_title" id="pageTitle">'+ MENU_ARRAY[MENU_INDEX]['name'] +'</div>'
				str += search_html(tabindex);
				str += '<div class="live_list_container">'
				str += '<ul class="live_list" id="liveList">'

				for (i = 0; i < json.channels.length; i++) {
					if (json.channels[i]['has_access']) {
						CAT_ARRAY[MENU_INDEX][j] = json.channels[i];
						rightFocus = "";
						leftFocus = "";
						if (i == (json.channels.length - 1)) rightFocus = ' data-sn-right="null"';

						leftFocus = "";
						if (j == 0) leftFocus = ' data-sn-left="null"';

						str += '<li class="visible focusable" tabindex="' + tabindex + '" id="live_item_' + j + '" ' + leftFocus + rightFocus + downFocus + upFocus + '>'
						str += '<div class="item_img_container">';
						str += '<img src="' + IMG_PATH + json.channels[i]['image'] + '" class="item_img">';
						str += set_overlay_on_list_item(json.channels[i]['name'], containerClass);
						str += '</div>';
						str += '</li>';
						j++;
					}
				}
				str += '</ul>';
				str += '</div>';

				$("." + containerClass).html(str);
				$("#loader").hide();

				manage_spatial_navigation(containerClass);
				set_live_channel_list();

			} else {
				$("#loader").hide();
				set_error_message(containerClass, tabindex);
			}

		} else {
			$("#loader").hide();
			set_error_message(containerClass, tabindex);
		}
	} else {
		$("#loader").hide();
		set_error_message(containerClass, tabindex);
	}
}

function set_movies_and_shows_menu_data(json) {
	$(".live_page_container").hide();
	CAT_ARRAY[MENU_INDEX] = new Array();
	var str = "",
		img = "",
		totalRow = 0,
		totalItem = 0,
		tabindex = 1,
		leftFocus = '',
		rightFocus = '',
		downFocus = '',
		upFocus = '',
		counter = 0,
		name = "",
		containerClass = "movie_page_container";

	if (_.size(json) > 0) {
		if (json.result == 200) {
			totalRow = json.vods.length;
			if (totalRow > 0) {
				str += search_html(tabindex);
				str += '<div class="movie_container_box">';

				for (i = 0; i < totalRow; i++) {
					if (MENU_INDEX == 1) obj = json.vods[i]['movies'];
					else obj = json.vods[i]['shows'];

					totalItem = obj.length;
					if (totalItem > 0) {
						CAT_ARRAY[MENU_INDEX][counter] = new Array();
						CAT_ARRAY[MENU_INDEX][counter] = obj;
						CAT_ARRAY[MENU_INDEX][counter]['category_name'] = json.vods[i]['category_name'];

						str += '<div class="movie_container">';
						str += '<div class="movie_titlebox">' + json.vods[i]['category_name'] + '</div>';
						str += '<div class="listbox_movie">';
						str += '<ul class="movie_list" id="movieList' + counter + '">';

						for (j = 0; j < totalItem; j++) {
							rightFocus = "";
							if (j == (totalItem - 1)) rightFocus = ' data-sn-right="null"';

							leftFocus = "";
							if (j == 0) leftFocus = ' data-sn-left="null"';

							name = "";
							if (MENU_INDEX == 1) name = obj[j]['name'];
							else name = obj[j]['show_name'];

							img = IMG_PATH + obj[j]['image'];
							str += '<li class="visible focusable" data-row="' + counter + '" tabindex="' + tabindex + '" id="movie_item_' + i + '_' + j + '" ' + leftFocus + rightFocus + downFocus + upFocus + '>';
							str += '<div class="movie_imgbox">';
							str += '<img src="' + img + '" class="img_movie">';
							str += set_overlay_on_list_item(name, containerClass);
							str += '</div>';
							str += '</li>';
						}

						str += '</ul>';
						str += '</div>';
						str += '</div>';

						if (totalRow == i + 1)
							str += '</div>';

						$("." + containerClass).html(str);
						counter++;
					}
				}

				$("#loader").hide();

				manage_spatial_navigation(containerClass);

			} else {
				$("#loader").hide();
				set_error_message(containerClass, tabindex);
			}

		} else {
			$("#loader").hide();
			set_error_message(containerClass, tabindex);
		}

	} else {
		$("#loader").hide();
		set_error_message(containerClass, tabindex);
	}
}

function set_shows_seasons_episodes(viewType) {
	var param = { showId: CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['show_id'] },
		containerClass = "",
		tabindex = 0,
		str = "",
		leftFocus = '',
		rightFocus = '',
		downFocus = '',
		upFocus = '',
		nav = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX]['category_name'] + ' <img src="images/episode_arrow_icon.png"> ' + CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['show_name'],
		thumbnail = "",
		thumbnailTitle = "",
		totalItem = 0;

	if (viewType == "seasons") {
		$(".movie_page_container").hide();
		$(".movie_page_container, [id=movieList]").removeClass("active");
		CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'] = {};
		tabindex = 2;
		containerClass = "seasons_page_container";

	} else {
		$(".movie_page_container, .seasons_page_container").hide();
		$(".movie_page_container, [id=movieList], .seasons_page_container, #seasonsList").removeClass("active");
		CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['episodes'] = {};

		param.season = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['season'];
		tabindex = 3;
		containerClass = "episode_page_container";

	}
	$("#loader").show();

	$.ajax({
		type: "POST",
		url: SHOWS_EPISODE_API,
		dataType: "JSON",
		data: jQuery.param(param),
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		async: true,
		cache: false,
		timeout: REQUEST_TIMEOUT * 1000,
		success: function (json) {
			if (json.result == 200) {
				if (viewType == "seasons") {
					totalItem = json.seasons.length;
					CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'] = json.seasons;

				} else {
					totalItem = json.vods.length;
					CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['episodes'] = json.vods;
					nav += ' <img src="images/episode_arrow_icon.png"> Season ' + CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['season'];
				}

				if (totalItem > 0) {
					str = '<div class="episode_navigation_path"> ' + nav + '</div>';

					str += '<div class="episode_innercontainer">';
					str += '<ul class="episode_listbox" id="' + viewType + 'List">';
					for (i = 0; i < totalItem; i++) {
						rightFocus = "";
						leftFocus = "";
						if (i == (totalItem - 1)) rightFocus = ' data-sn-right="null"';

						leftFocus = "";
						if (i == 0) leftFocus = ' data-sn-left="null"';

						if (viewType == "seasons") {
							thumbnail = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['image'];
							thumbnailTitle = "Season " + json.seasons[i]['season'];

						} else {
							thumbnail = json.vods[i]['image'];
							thumbnailTitle = json.vods[i]['name'];
						}

						str += '<li class="episode_img focusable visible" tabindex="' + tabindex + '" id="' + viewType + '_item_' + i + '" ' + leftFocus + rightFocus + downFocus + upFocus + '>'
						str += '<div class="episode_img">';
						str += '<img src="' + IMG_PATH + thumbnail + '" class="img_episode">';
						str += set_overlay_on_list_item(thumbnailTitle, containerClass);
						str += '</div>';
						str += '</li>';
					}
					str += '</ul>';
					str += '</div>';

					$("." + containerClass).html(str).addClass('active').show();
					$("#" + viewType + "List").addClass('active');
					$("#loader").hide();

					manage_spatial_navigation(containerClass);

				} else {
					set_error_message(containerClass, tabindex);
				}

			} else {
				set_error_message(containerClass, tabindex);
			}

		}, error: function (xhr, error) {
			set_error_message(containerClass, tabindex);
		}
	});
}

function set_logout_menu_data() {
	$("#loader").hide();
	$(".movie_page_container, #liveList, .video_details_page_container, .seasons_page_container, .episode_page_container").html("").show();
	$("#pageTitle").text("");
	$(".no-record-box").remove();

	var str = '',
		containerClass = "logout_page_container";

	str += '<div class="logout_containerbox">';
	str += '<div class="logout_screen" id="logoutButtonContainer">';
	str += '<div class="logout_para">Bienvenidos ' + localStorage.getItem('email') + '</div>';
	str += '<div class="logout_btn button_box focusable" id="loginButton" tabindex="1" data-sn-right="null" data-sn-left="null" data-sn-down="null">Salir</div>';
	str += '</div>';
	str += '</div>';

	$("." + containerClass).html(str);

	manage_spatial_navigation(containerClass);
}

// get video detail page OR play video
function get_video_details(id, playVodFlag) {
	var url = "",
		param = { memberId: localStorage.getItem('memberId'), token: localStorage.getItem('token'), box: "yes" },
		videoTitle = "";

	// when video play
	if (playVodFlag) {
		VOD_URL = "";
		show_hide_video_container();
		webapis.avplay.close();
		// For live menu only
		// if (MENU_INDEX == 0) {
		// 	parse_epg("singleEpg");
		// }

		// when video details page open
	} else {
		var obj = "";
		// when Movies menu
		if (MENU_INDEX == 1) {
			obj = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX];

			// when shows menu 
		} else if (MENU_INDEX == 2) {
			obj = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['episodes'][EPISODE_ITEM_INDEX];
		}

		var img = IMG_PATH + obj['image'],
			title = obj['name'],
			description = obj['description'],
			favorite = 0;

		$(".movie_page_container, .episode_page_container").hide();
		$("#loader").show();
	}

	// when live menu
	if (MENU_INDEX == 0) {
		url = AUTHENTICATE_LIVE_API;
		param.channelId = id;

		// when rest menu
	} else {
		url = AUTHENTICATE_VOD_API;
		param.vodId = id;
	}

	$.ajax({
		type: "GET",
		url: url,
		data: param,
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType: "JSON",
		async: true,
		cache: false,
		timeout: REQUEST_TIMEOUT * 1000,
		success: function (json) {
			localStorage.setItem('token', json.token);

			// when video play
			if (playVodFlag) {
				// for live menu
				if (MENU_INDEX == 0) {
					VOD_URL = json.channel.stream_url;
					videoTitle = json.channel.name;
				} else {
					VOD_URL = json.vod.stream_url;
					videoTitle = json.vod.name;
				}
				$(".video-title").text(videoTitle);
				load_video();

				// when video details page open
			} else {
				img = IMG_PATH + json.vod.image;
				title = json.vod.name;
				description = json.vod.description;
				favorite = json.vod.favorite;
				set_video_details_page(img, title, description, favorite, id);
			}

		}, error: function (xhr, textStatus, errorThrown) {
			console.log("error: ", xhr);
			if (playVodFlag) load_video();
			else set_video_details_page(img, title, description, favorite, id);
		}
	});
}

function set_video_details_page(img, title, description, favoriteStatus, id) {
	var str = "",
		favoriteImg = FAVORITE_IMG,
		favoriteText = FAVORITE_TEXT,
		containerClass = "video_details_page_container";

	if (favoriteStatus) {
		favoriteImg = FAVORITE_FOCUSED_IMG;
		favoriteText = FAVORITE_FOCUSED_TEXT;
	}

	str = '<img src="' + img + '" class="movie_detailbox">';
	str += '<div class="movie_detail_panelbox">';
	str += '<img src="' + img + '" class="movie_detailimg">';
	str += '<h4 class="movie_titleview">' + title + '</h4>';
	str += '<p>' + description + '</p>';
	str += '<ul class="movie_listbox" id="videoDetailsPageIcons">';
	str += '<li id="playIcon" class="focusable" tabindex="4" data-sn-right="#favIcon" data-sn-left="null" data-sn-down="null">';
	str += '<a><img src="images/play_icon.png" class="play_icon"><span class="addtofav">Reproducir</span><a/>';
	str += '</li>';
	str += '<li id="favIcon" class="focusable fav-icon" tabindex="4" data-sn-right="null" data-sn-left="#playIcon" data-sn-down="null">';
	str += '<a><img src="' + favoriteImg + '" class="star_icon" id="favIconImg"><span class="addtofav" id="favText">' + favoriteText + '</span></a>';
	str += '</li>';

	/*str += 			'<li id="favIcon" class="focusable" tabindex="4" data-sn-right="#playIcon" data-sn-left="null" data-sn-down="null">';	
	str += 				'<a><img src="'+ favoriteImg +'" class="star_icon" id="favIconImg"><span class="addtofav" id="favText">'+ favoriteText +'</span></a>';
	str +=			'</li>';
	str += 			'<li id="playIcon" class="focusable" tabindex="4" data-sn-right="null" data-sn-left="#favIcon" data-sn-down="null">';
	str += 				'<a><img src="images/play_icon.png" class="play_icon"><span class="addtofav">Play</span><a/>';
	str +=			'</li>';*/

	str += '</ul>';
	str += '</div>';

	$("#loader").hide();
	$(".movie_page_container, [id^=movieList], .menu_container, .episode_page_container, #episodeList").removeClass("active");
	$("." + containerClass).html(str).addClass("active");

	manage_spatial_navigation(containerClass, favoriteStatus, id);
}

function add_remove_favorite(id, favoriteStatus) {
	$.ajax({
		type: "POST",
		url: FAVORITE_API,
		data: jQuery.param({ content_id: id, member_id: localStorage.getItem('memberId'), status: favoriteStatus }),
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType: "JSON",
		async: true,
		cache: false,
		timeout: REQUEST_TIMEOUT * 1000,
		success: function (json) {
			var favoriteImg = FAVORITE_IMG,
				favoriteText = FAVORITE_TEXT;

			if (favoriteStatus) {
				favoriteImg = FAVORITE_FOCUSED_IMG;
				favoriteText = FAVORITE_FOCUSED_TEXT;
			}

			$("#favIconImg").attr('src', favoriteImg);
			$("#favText").text(favoriteText);

		}, error: function (xhr, textStatus, errorThrown) {
			console.log("Error in favorite API and status is", favoriteStatus);
		}
	});
}

function set_error_message(containerClass, tabindex) {
	$("#loader").hide();
	str = '<div class="no-record-box" id="noRecordMsg"><div class="no_record focusable" id="noRecordMsgText" tabindex="' + tabindex + '">' + EMPTY_CATSET + '</div></div>';

	$("." + containerClass).append(str);

	if (containerClass == "episode_page_container" || containerClass == "seasons_page_container") {
		$("." + containerClass).addClass("active");
		$(".menu_container").removeClass("active");
		$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");

		SN.remove("noRecordMsg");
		SN.add({
			id: 'noRecordMsg',
			selector: '#noRecordMsg .focusable',
			defaultElement: '#noRecordMsgText',
			restrict: 'self-only',
			enterTo: 'last-focused'
		});
		SN.makeFocusable();
		SN.focus('noRecordMsg');
	}
}

// Start video fucntion from here
function load_video() {
	try {
		console.log("start playing video");
		$(".pause-icon").hide();
		unregister_mediakey();
		webapis.avplay.close();
		show_hide_video_next_previous(false);
		sessionStorage.FWD_RWD_key_press = 0;
		$(".progress-container").hide();
		$(".video_next_previous_container").hide();
		progress_bar(0);
		document.getElementById("currentTime").innerHTML = "00:00";
		if (MENU_INDEX == 0) {
			if (CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX]["dvr_enabled"] == "0") {
				$("#customDVR").css("display", "none");
				$("#customHome").attr("data-sn-right", "#customPause");
				$("#customPause").attr("data-sn-left", "#customHome");
			} else {
				$("#customDVR").css("display", "block");
				$("#customHome").attr("data-sn-right", "#customDVR");
				$("#customPause").attr("data-sn-left", "#customDVR");
			}

			// $(".custom_control_container").show();
			$(".channel-img").attr("src", IMG_PATH + CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX].image);
			$("#programmeTitle").text(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX].name);
			// $("#programmeDesc").text(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX].description);
		} else {
			$(".custom_control_container").hide();
		}

		var totalVideo = get_total_video_or_first_video_index(1),
			firstItem = get_total_video_or_first_video_index(0),
			obj = get_video_obj();

		// show next video button
		if (totalVideo > VOD_COUNTER) {
			$("#playNextVideo").css('visibility', 'visible');
			$("#playPauseVideo").attr('data-sn-right', '#playNextVideo');

		} else {
			$("#playNextVideo").css('visibility', 'hidden');
			$("#playPauseVideo").attr('data-sn-right', 'null');
		}

		// show previous video button
		if (VOD_COUNTER > firstItem) {
			$("#playPreviousVideo").css('visibility', 'visible');
			$("#playPauseVideo").attr('data-sn-left', '#playPreviousVideo');
		} else {
			$("#playPreviousVideo").css('visibility', 'hidden');
			$("#playPauseVideo").attr('data-sn-left', 'null');
		}

		show_hide_video_next_previous(false);
		video_play_statewise();

	} catch (e) {
		console.log("Error in load video: " + e);
	}
}

function video_play_statewise() {
	if ($(".video_container").hasClass('active') && $('#video_container').is(':visible')) {
		if (webapis.avplay.getState() == "PAUSED") playVideo();
		else if (webapis.avplay.getState() == "PLAYING") pauseVideo();
		else {
			if (webapis.avplay.getState() == "NONE") {
				try {
					openVideo();
				} catch (e) {
					retry_error_popup();
				}
			} else if (webapis.avplay.getState() == "IDLE") {
				try {
					prepareVideo();
				} catch (e) {
					retry_error_popup();
				}
			} else if (webapis.avplay.getState() == "READY") {
				try {
					playVideo();
				} catch (e) {
					retry_error_popup();
				}
			}
		}
	}
}

// Open video screen
function show_hide_video_container() {
	$(".pause-icon").hide();
	$(".video-inner").show();
	$(".video-loader").show();
	$(".main_container").hide();
	$("#video_container").show();
	$("#av-player").css("display", "block");
}

//This function is used to register Media Key of Remote
function register_mediakey() {
	tizen.tvinputdevice.registerKey("MediaFastForward");
	tizen.tvinputdevice.registerKey("MediaRewind");
	tizen.tvinputdevice.registerKey("MediaPlay");
	tizen.tvinputdevice.registerKey("MediaPause");
	tizen.tvinputdevice.registerKey("MediaStop");
	return;
}

//This function is used to Unregister Media Key of Remote
function unregister_mediakey() {
	tizen.tvinputdevice.unregisterKey("MediaFastForward");
	tizen.tvinputdevice.unregisterKey("MediaRewind");
	tizen.tvinputdevice.unregisterKey("MediaPlay");
	tizen.tvinputdevice.unregisterKey("MediaPause");
	tizen.tvinputdevice.unregisterKey("MediaStop");
	return;
}

// Open error popup when error will occur during video playing.
function retry_error_popup(playerErrorType) {
	console.log("retry_error_popup() " + webapis.avplay.getState(), playerErrorType);
	var onlineStatus = navigator.onLine;
	unregister_mediakey();
	$("#epgListContainer").html('');
	$(".epg_icon_container").hide();
	$(".custom_control_container").hide();

	progress_bar(0);
	show_hide_video_next_previous(false);
	AD_URL = "";

	var errorMsg = '';
	switch (playerErrorType) {
		case "PLAYER_ERROR_NONE": errorMsg = "Operation has successfully completed."; break;
		case "PLAYER_ERROR_INVALID_PARAMETER": errorMsg = "Unable to find the parameter"; break;
		case "PLAYER_ERROR_NO_SUCH_FILE": errorMsg = "Unable to find the specified media content"; break;
		case "PLAYER_ERROR_INVALID_OPERATION": errorMsg = "Invalid API Call at the moment"; break;
		case "PLAYER_ERROR_SEEK_FAILED": errorMsg = "Failed to perform seek operation, or seek operation called during an invalid state"; break;
		case "PLAYER_ERROR_INVALID_STATE": errorMsg = "AVPlay API method was called during an invalid state"; break;
		case "PLAYER_ERROR_NOT_SUPPORTED_FILE": errorMsg = "Multimedia file format not supported"; break;
		case "PLAYER_ERROR_INVALID_URI": errorMsg = "Input URI is in an invalid format"; break;
		case "PLAYER_ERROR_CONNECTION_FAILED": errorMsg = "Failed multiple attempts to connect to the specified content server"; break;
		case "PLAYER_ERROR_GENEREIC": errorMsg = "Failed to create the display window"; break;
	}

	if (onlineStatus) msg = "The content is currently unavailable. Please check back later.";
	else msg = NET_CONNECTION_ERR;

	if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
		if (errorMsg != "" && onlineStatus) msg = errorMsg;
		hide_show_modal(true, 'RETRY_CANCEL', msg);
	}
}

//This function is used for display two digit number from 1-9
function min_two_digits(number) {
	return (number < 10 ? '0' : '') + number;
}

// Login Process
function loginIntoApp(page) {
	if (page == "login") $(".login_loader").css({ "display": "inline-table" });

	var date = new Date(),
		un = "",
		pwd = "";
	if (page == "login") {
		un = document.getElementById('username').value;
		pwd = document.getElementById('password').value;
	} else {
		un = localStorage.getItem('username');
		pwd = localStorage.getItem('password');
	}

	$.ajax({
		type: "POST",
		url: LOGIN_API,
		dataType: "JSON",
		data: jQuery.param({ user: un, pw: calcMD5(pwd), sn: webapis.productinfo.getModel(), device_name: "Tizen", push_token: "", login_type: "email", user_timezone: date.getTimezoneOffset() }),
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		async: true,
		cache: false,
		timeout: REQUEST_TIMEOUT * 1000,
		success: function (json) {
			if (page == "login") $(".login_loader").hide();

			if (json.result == 200) {
				localStorage.setItem('username', un);
				localStorage.setItem('password', pwd);
				localStorage.setItem('token', json.token);
				localStorage.setItem('memberId', json.userInfo.member_id);
				localStorage.setItem('email', json.userInfo.email);
				localStorage.setItem('timezoneDifference', json.timezone_difference);
				window.location.href = "home.html";

			} else {
				if (page == "login") hideShowError(json.message);
				else window.location.href = "login.html";
			}

		}, error: function (xhr, error) {
			console.log(xhr, error);
			if (page == "login") {
				$(".login_loader").hide();
				hideShowError(xhr.statusText);
			} else {
				window.location.href = "login.html";
			}
		}
	});
}

// It returns current vod object while playing video
function get_video_obj() {
	var obj = "";
	switch (MENU_INDEX) {
		case 0: obj = CAT_ARRAY[MENU_INDEX];
			break;

		case 1: obj = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX];
			break;

		case 2: obj = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['episodes'];
			break;
	}

	return obj;
}

function set_overlay_on_list_item(thumbnailTitle, containerClass) {
	var movieOveryClass = "",
		movieOverlayText = "",
		title = "";

	if (containerClass == "movie_page_container" || containerClass == "episode_page_container" || containerClass == "seasons_page_container") {
		movieOveryClass = "movie_overlay";
		movieOverlayText = "movie_overlay_text";
	}

	if (thumbnailTitle != undefined && thumbnailTitle != "") {
		title = thumbnailTitle;
	}

	return '<div class="thumbnail_overlay ' + movieOveryClass + '"><span class="thumbnail_overlay_text_container"><span class="thumbnail_overlay_text ' + movieOverlayText + '">' + title + '</span></span></div>';
}

function turn_on_list_item_overlay(elementId) {
	$('#' + elementId).find('.thumbnail_overlay').css('display', 'table');
}

function turn_off_list_item_overlay() {
	$('.thumbnail_overlay').css('display', 'none');
}

function search_html(tabindex) {
	var prefix = get_search_id_prefix(),
		menuName = MENU_ARRAY[MENU_INDEX]['name'],
		str = "";

	str = '<div class="search_box">';
	str += '<div class="search_input_container" id="' + prefix + 'Searchbox">';
	str += '<div class="search_input focusable" id="' + prefix + 'SearchButton" tabindex="' + tabindex + '" data-sn-left="null" data-sn-right="null">';
	str += '<div id="' + prefix + 'SearchText">Buscar ' + menuName + '</div>';
	str += '</div>';
	str += '</div>';
	str += '<div class="search_input_container" id="' + prefix + 'SearchInputBox" style="display:none;">';
	str += '<input type="text" placeholder="Buscar ' + menuName + '" class="search_input focusable" id="' + prefix + 'SearchInput" tabindex="' + tabindex + '" data-sn-left="null" data-sn-right="null">';
	str += '</div>';
	str += '</div>';

	return str;
}

function get_search_id_prefix() {
	var prefix = "";
	switch (MENU_INDEX) {
		case 0: prefix = "live"; break;
		case 1: prefix = "movies"; break;
		case 2: prefix = "shows"; break;
	}
	return prefix;
}

function get_search_input_value() {
	var prefix = get_search_id_prefix();
	return $("#" + prefix + "SearchInput").val();
}

// set search text in hidden div
function set_search_text() {
	var prefix = get_search_id_prefix(),
		searchText = get_search_input_value(),
		menuName = MENU_ARRAY[MENU_INDEX]['name'];

	if (searchText == "") $('#' + prefix + 'SearchText').text('Buscar ' + menuName);
	else $('#' + prefix + 'SearchText').text(searchText);
}

// epg for single epg and allEpg for all epg
function parse_epg(viewType) {
	var url = API_COMMON_PATH,
		channelId = CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]['channel_id'],
		timestamp = Math.floor(Date.now() / 1000),
		obj = {},
		timestampParam = "",
		timezoneDifference = localStorage.getItem('timezoneDifference');

	$("#epgListContainer").html('');
	if (viewType == "allEpg") {
		url += "serviceGetPastDailyEpgInfo";
		All_EPG_OBJ = {};
		timestampParam += "&date=" + timestamp;

	} else {
		url += "serviceGetEpgInfo";
		$("#programmeTitle, #programmeDesc").html('&nbsp;');
		timestampParam += "&timeNow=" + (timestamp - (timezoneDifference * 1000));
	}

	//channelId = 103;
	//timestamp = 1622332800;

	url += "?channelId=" + channelId + timestampParam;
	$.ajax({
		type: "GET",
		url: url,
		dataType: "JSON",
		async: true,
		cache: false,
		timeout: REQUEST_TIMEOUT * 1000,
		success: function (json) {
			if (json.result == 200) {
				if (json.allEpg.length > 0) set_allEpg(json);
				// if (viewType == "allEpg") {
				// 	set_allEpg(json);
				// } else {
				// 	if (json.epgs.length) {
				// 		$("#programmeTitle").html(json.epgs[0]['program_name']);
				// 		$("#programmeDesc").html(json.epgs[0]['description']);
				// 	}
				// }
			}

		}, error: function (xhr, textStatus, errorThrown) {
			console.log(xhr);
			if (viewType == "allEpg") set_no_epg_msg();
		}
	});
}

function set_allEpg(json) {
	var epgObj = json.allEpg,
		epgDetailObj = '',
		totalEpgRow = 0,
		totalEpgRowItem = 0,
		str = '',
		date = new Date(),
		dayName = "Today",
		monthNamesArr = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
		weekDayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		hasEpg = false;

	totalEpgRow = epgObj.length;

	if (totalEpgRow > 0) {
		str = '<h4 class="channel_dvr_title">' + CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]['name'] + '</h4>';
		str += '<div class="epg_right_side_time">' + format_AM_PM(date) + '</div>';
		str += '<div class="epgUlContainer">';

		for (var i = 0; i < totalEpgRow; i++) {
			epgDetailObj = epgObj[i];
			totalEpgRowItem = epgDetailObj.length;
			//date = new Date();

			if (totalEpgRowItem > 0) {
				hasEpg = true;
				if (i > 0) {
					date.setDate(date.getDate() - i);
					dayName = i == 1 ? "Yesterday" : weekDayArr[date.getDay()]; // Days name
				}

				monthName = monthNamesArr[date.getMonth()]; // month name
				monthDate = min_two_digits(date.getDate()); // date of the day

				str += '<ul class="dvr_list" id="epgList' + i + '">';
				str += '<li>';
				str += '<div class="dvr_bluebox">' + dayName + ' (' + monthName + ' ' + monthDate + ')</div>';
				str += '</li>';

				for (var j = 0; j < totalEpgRowItem; j++) {
					str += '<li class="focusable" id="epg_item_' + i + '_' + j + '" tabindex="9" data-row="' + i + '">';
					str += '<div class="dvr_bluebox">';
					str += '<div class="time_list">' + get_time(epgDetailObj[j]['show_time'] * 1000) + ' - ' + get_time((epgDetailObj[j]['show_time'] * 1000) + (epgDetailObj[j]['duration'] * 1000)) + '</div>'
					str += '<div class="time_text">' + epgDetailObj[j]['program_name'] + '</div>';
					str += '</div>';
					str += '</li>';
				}

				str += '</ul>';
			}
		}
		str += '</div>';
		if (hasEpg) {
			All_EPG_OBJ = epgObj;
			$(".channel_dvr_box").show();
			$("#epgListContainer").append(str);
			$($("ul.dvr_list").last()).find("li").attr('data-sn-down', 'null');
			$($("ul.dvr_list").first()).find("li").attr('data-sn-up', 'null');
			$("ul.dvr_list li:last-child").attr('data-sn-right', 'null');
			$("ul.dvr_list li:first-child").attr('data-sn-left', 'null');

			SN.remove("[id^=epgList]");
			SN.add({
				id: '[id^=epgList]',
				selector: '[id^=epgList] .focusable',
				defaultElement: '#epg_item_0_0',
				enterTo: 'last-focused'
			});
			SN.makeFocusable();
			SN.focus("[id^=epgList]");

		} else {
			set_no_epg_msg();
		}

	} else {
		set_no_epg_msg();
	}
}

function set_no_epg_msg() {
	$("#epgListContainer").append('<div class="no_epg" id="noEpg"><span class="focusable" id="noEpgMsg" data-sn-right="null" data-sn-left="null" data-sn-up="null" data-sn-down="null" tabindex="9">' + EMPTY_CATSET + '<span></div>');
	$(".channel_dvr_box").show();
	set_focus('noEpg', 'noEpgMsg');
	SN.focus("noEpg");
}

function format_AM_PM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

function get_time(timestamp) {
	var date = new Date(timestamp);
	return min_two_digits(date.getHours()) + ":" + min_two_digits(date.getMinutes());
}

//This function is used for display two digit number from 1-9
function min_two_digits(number) {
	return (number < 10 ? '0' : '') + number;
}

function set_live_channel_list() {
	var str = "",
		tabindex = 10,
		leftFocus = '',
		rightFocus = '',
		downFocus = '',
		upFocus = '',
		activeChannel = '',
		containerClass = "live_channel_list_container";

	if (_.size(CAT_ARRAY[MENU_INDEX]) > 0) {

		for (i = 0; i < _.size(CAT_ARRAY[MENU_INDEX]); i++) {
			if (CAT_ARRAY[MENU_INDEX][i]) {
				rightFocus = "";
				leftFocus = "";
				var j = i + 1;

				if (i == (_.size(CAT_ARRAY[MENU_INDEX]) - 1)) downFocus = ' data-sn-down="null"';
				else downFocus = ' data-sn-down="#channel_number_' + (i + 1) + '"';

				upFocus = "";
				if (i == 0) upFocus = ' data-sn-up="null"';
				else upFocus = ' data-sn-up="#channel_number_' + (i - 1) + '"';

				// activeChannel = '';
				// if (i == 0) activeChannel = "blued_img";

				str += '<li class="visible focusable" tabindex="' + tabindex + '" id="channel_number_' + i + '" ' + leftFocus + rightFocus + downFocus + upFocus + '>'
				str += j + ' <img class="channel_list_image" src="' + IMG_PATH + CAT_ARRAY[MENU_INDEX][i]['image'] + '"><span class="video_title">' + CAT_ARRAY[MENU_INDEX][i]['name'] + '</span>'
				str += '</li>';
			}
		}
		$("." + containerClass).html('');
		$("." + containerClass).html(str);
		manage_spatial_navigation(containerClass);
	} else {
		console.log("Hide vertical channel list");
	}
}

function show_channel_list() {
	if (MENU_INDEX == 0) {
		CAT_ITEM_INDEX = CHANNEL_ITEM_INDEX;
		$("ul.live_channel_list_container li").removeClass("blued_img");
		$("#channel_number_" + (CHANNEL_ITEM_INDEX)).addClass("blued_img");
		$('.channel_list_container').addClass('toggle_channel_list');
		SN.focus("#channel_number_" + (CHANNEL_ITEM_INDEX));
	}
}

function hide_channel_list() {
	if ($(".channel_list_container").hasClass("toggle_channel_list") && !$("#live_channel_list").is(":focus")) {
		$('.channel_list_container').removeClass('toggle_channel_list');
		// SN.focus('videoPlayer');
	}
}

function hide_channel_input_box() {
	$(".channel_number_container").hide();
	$("#search_channel_number").val("");
	SN.focus('videoPlayer');
}

function show_channel_input_box(num) {
	if (MENU_INDEX == 0) {
		manage_spatial_navigation("channel_number_container");
		SN.focus("#search_channel_number");

		var value = $("#search_channel_number").val();
		if (value.length == 0) manage_spatial_navigation("channel_number_container");

		if (value.length < 3) {
			if (value.length > 0) $("#search_channel_number").val("" + value + num);
			else $("#search_channel_number").val("" + num);
		}

		$(".channel_number_container").show();
		clearTimeout(PLAY_TIMER);
		PLAY_TIMER = setTimeout(function () {
			play_live_by_channel_number();
		}, 3000);

		SN.focus("#search_channel_number");
	}
}

function play_live_by_channel_number() {
	var searchNumber = Number($("#search_channel_number").val());
	if ((searchNumber > 0) && (searchNumber < CAT_ARRAY[MENU_INDEX].length)) {
		if (CAT_ARRAY[MENU_INDEX][searchNumber]['channel_id']) {
			VOD_COUNTER = 0;
			CAT_ITEM_INDEX = CHANNEL_ITEM_INDEX = searchNumber;
			get_video_details(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX]['channel_id'], true);
			hide_channel_input_box();
		}
	} else {
		$(".channel_number_container").hide();
		$("#search_channel_number").val("");
		$(".channel_number_error_mesg").show();
		setTimeout(function () {
			$(".channel_number_error_mesg").hide();
		}, 3000);
	}
}

function createCustomEPG() {
	$(".channel_dvr_box").hide();
	var str = "",
		tabindex = 16,
		leftFocus = '',
		rightFocus = '',
		downFocus = '',
		upFocus = '',
		activeChannel = '',
		containerClass = "live_channel_list_container";
	$("#epgListContainer").html("");
	$("#customTimeSlotContainer").html("");
	str += '<div class="date-selection-container" id="dateContainer"><div class="dropText focusable" tabindex="17" id="day_0" data-sn-up="null" data-sn-right="null" data-sn-left="null" data-sn-down="#time_0" data-index="0">Select Day</div>';
	str += '<ul class="date_Options">';
	for (var k = 0; k < 10; k++) {
		var d = new Date();
		d.setDate(d.getDate() - k);
		var l = k + 1;

		var indexVal = ' data-index ="' + k + '" ';

		if (l == 10) downFocus = ' data-sn-down="null"';
		else downFocus = ' data-sn-down="#day_' + (l + 1) + '"';

		if (l == 1) upFocus = ' data-sn-up="null"';
		else upFocus = ' data-sn-up="#day_' + (l - 1) + '"';

		str += '<li class="focusable" tabindex="17" id="day_' + l + '"  data-sn-right="null" data-sn-left="null" ' + downFocus + upFocus + indexVal + '>' + formatDate(d) + '</li>';
	}
	str += '</ul></div>';
	str += '<ul class="timeSlotContainer" id="timeSlotContainer">';

	for (var i = 0; i < 24; i++) {
		rightFocus = "";
		leftFocus = "";
		var j = i + 1;

		if (j == 24) j = 0;
		var time = (i < 10 ? '0' + i + ':00 - ' : i + ':00 - ') + (j < 10 ? '0' + j + ':00' : j + ':00');

		if (i < 24) rightFocus = ' data-sn-right="#time_' + (i + 1) + '"';
		else rightFocus = ' data-sn-right="null"';

		if (i == 0) leftFocus = ' data-sn-left="null"';
		else leftFocus = ' data-sn-left="#time_' + (i - 1) + '"';

		if (i < 21) downFocus = ' data-sn-down="#time_' + (i + 4) + '"';
		else downFocus = ' data-sn-down="null"';

		upFocus = "";
		if (i < 4) upFocus = ' data-sn-up="#day_0"';
		else upFocus = ' data-sn-up="#time_' + (i - 4) + '"';

		str += '<li class="timeSlotBox focusable" tabindex="' + tabindex + '" id="time_' + i + '" ' + leftFocus + rightFocus + downFocus + upFocus + '>';
		str += '<p> ' + time + '</p>';
		str += '</li>';

	}
	str += '</ul>';
	$("#customTimeSlotContainer").html(str);
	$(".channel_dvr_box").show();
	$("#day_0").text(formatDate(new Date()));
	setFocusDayList();

	SN.remove("timeSlotContainer");
	SN.add({
		id: 'timeSlotContainer',
		selector: '#timeSlotContainer .focusable',
		defaultElement: '#time_0',
		restrict: 'self-only',
		enterTo: 'last-focused'
	});
	SN.makeFocusable();
	SN.focus("timeSlotContainer");

	$('#timeSlotContainer').on('sn:focused', function (e) {
		clearTimeout(GLOBAL_TIME_OUT);
		GLOBAL_TIME_OUT = setTimeout(function () {
			$(".channel_dvr_box").hide();
			SN.focus("videoPlayer");
		}, 5000);
	});

	$('#timeSlotContainer').on('sn:enter-down', function (e) {
		var index = $("#" + e.target.id).index();
		var i = $("#day_0").attr("data-index");
		var d = new Date();
		d.setDate(d.getDate() - i);
		playCustomeEPG(index, d);
	});

}

function formatDate(date) {
	var dd = date.getDate();
	var day = date.getDay();
	var mm = date.getMonth() + 1;
	var yyyy = date.getFullYear();
	if (dd < 10) { dd = '0' + dd }
	if (mm < 10) { mm = '0' + mm }
	date = DAY_ARRAY[day] + " (" + mm + '/' + dd + ")";
	return date
}


function changeProgrammeDetails() {
	if (MENU_INDEX == 0) {
		$(".channel-img").attr("src", IMG_PATH + CAT_ARRAY[MENU_INDEX][CURRENT_ITEM_INDEX].image);
		$("#programmeTitle").text(CAT_ARRAY[MENU_INDEX][CURRENT_ITEM_INDEX].name);
		// $("#programmeDesc").text(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX].description);
	}
}

function goToHomePage() {
	$(".circle_loader").removeClass('circle-loader-middle');
	unregister_mediakey();
	webapis.avplay.close();
	webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON);
	show_hide_video_next_previous(false);
	sessionStorage.FWD_RWD_key_press = 0;
	$("#language_option").html("");
	$("#av-player").css('display', 'none');
	$("#video_container").hide();
	$(".video-inner").hide();
	$(".loader").hide();
	$(".progress-container").hide();
	$(".language").hide();

	$("#epgListContainer").html('');
	$(".epg_icon_container").hide();
	$(".custom_control_container").hide();
	$(".channel_dvr_box").hide();

	$(".main_container").show();
	$(".video_container").removeClass('active');
	$(".pause-icon").hide();
	$(".video_next_previous_container").hide();
	progress_bar(0);
	document.getElementById("currentTime").innerHTML = "00:00";
	$(".logout_page_container, .video_details_page_container, .episode_page_container, .seasons_page_container, .movie_page_container, .seasons_page_container").removeClass('active')
	$(".live_page_container").addClass('active');
	SN.focus('menuList');
}


function playCustomeEPG(selectedIndex, selectedDate) {
	var time = "";
	if (selectedIndex < 10) time = '_0' + selectedIndex + "-00";
	else time = '_' + selectedIndex + "-00";

	var adaptive = "_hi.mp4/master.m3u8";
	if (CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]["transcode_levels"] == 2)
		adaptive = "_,low,hi,.mp4.urlset/master.m3u8";
	else if (CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]["transcode_levels"] == 3)
		adaptive = "_,low,med,hi,.mp4.urlset/master.m3u8";

	var currentDate = new Date();
	var month = (selectedDate.getMonth() + 1) < 10 ? '0' + (selectedDate.getMonth() + 1) : '' + (selectedDate.getMonth() + 1);
	var date = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate() : '' + selectedDate.getDate();

	var urlDate = "_" + selectedDate.getFullYear() + "-" + month + "-" + date + time;
	var dvrUrl = DVR_URL + CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]["dvrDir"] + "/channel-" + CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]["channel_id"] + urlDate + adaptive;

	$(".channel_dvr_box").hide();
	VOD_URL = dvrUrl;
	load_video();
}

function setFocusDayList() {
	SN.remove("dateContainer");
	SN.add({
		id: 'dateContainer',
		selector: '#dateContainer .focusable',
		defaultElement: '#day_0',
		restrict: 'self-only',
		enterTo: 'last-focused'
	});
	SN.makeFocusable();
	SN.focus("dateContainer");

	$('#dateContainer').on('sn:focused', function (e) {
		clearTimeout(GLOBAL_TIME_OUT);
		GLOBAL_TIME_OUT = setTimeout(function () {
			$(".channel_dvr_box").hide();
			SN.focus("videoPlayer");
		}, 5000);
	});

	$('#dateContainer').on('sn:enter-down', function (e) {
		// var index = $("#" + e.target.id).index();
		if (e.target.id == "day_0") {
			$(".date_Options").show();
			SN.focus("#day_1");
		} else {
			var dateText = $("#" + e.target.id).text();
			var i = $("#" + e.target.id).index();
			$("#day_0").text(dateText);
			$("#day_0").attr("data-index", i);
			$(".date_Options").hide();
			SN.focus("#day_0");
		}

	});
}

function controlLeftArrowKeys() {
	var leftmove;
	var input = document.getElementById($(":focus").attr("id"));
	var currentpos = input.selectionStart; //getting current postion of cursor
	if ((input.value.length > 0) && (currentpos > 0)) {
		leftmove = currentpos - 1;
		setCaretPosition(input, leftmove);
	}
}

function controlrightArrowKeys() {
	var rightmove;
	var input = document.getElementById($(":focus").attr("id"));
	var currentpos = input.selectionStart;  //getting current postion of cursor
	if ((input.value.length > 0) && (currentpos < input.value.length)) {
		rightmove = currentpos + 1;
		setCaretPosition(input, rightmove);
	}
}
function setCaretPosition(ctrl, pos) {
	// Modern browsers
	if (ctrl.setSelectionRange) {
		ctrl.focus();
		ctrl.setSelectionRange(pos, pos);

		// IE8 and below
	} else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}
