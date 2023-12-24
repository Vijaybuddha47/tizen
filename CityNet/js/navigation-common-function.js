function manage_spatial_navigation(containerClass, favoriteStatus, vodId) {
	switch (containerClass) {
		case "menu_container":
			set_focus('menuList', 'menu0');

			// When menu foucs
			$('#menuList').on('sn:focused', function (e) {
				console.log("menu focused ...");
				MENU_INDEX = $('#' + e.target.id).closest('li').index();

				$("#menuList > li").removeClass("menu_border");
				$(".menu_container").addClass("active");
				$(".live_page_container, #liveList, [id=movieList], .logout_page_container, .video_details_page_container, .search_box").removeClass("active");

				set_search_default_ui();
				turn_off_list_item_overlay();

				if (MENU_INDEX == 3) $(".search_input_container").hide();
			});
			break;

		case "live_page_container":
			set_focus('liveList', 'live_item_0');
			set_search_focus();

			$('#liveList').on('sn:focused', function (e) {
				console.log("liveList focused ...");
				CAT_ITEM_INDEX = CHANNEL_ITEM_INDEX = $('#' + e.target.id).closest('li').index();

				$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");
				$(".menu_container, .video_container").removeClass("active");
				$("." + containerClass + ", #liveList").addClass("active");

				set_search_default_ui();
				turn_off_list_item_overlay();
				turn_on_list_item_overlay(e.target.id);
			});

			$('#liveList').on('sn:enter-down', function (e) {
				console.log("liveList selected ...");
				$(".video-title").text('');
				$(".live_page_container, .search_box, #liveList").removeClass('active');
				$(".video_container").addClass('active');
				SN.focus('videoPlayer');
				VOD_URL = "";
				VOD_COUNTER = 0;
				CHANNEL_ITEM_INDEX = CAT_ITEM_INDEX = CURRENT_ITEM_INDEX = $('#' + e.target.id).closest('li').index();
				get_video_details(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX]['channel_id'], true);
			});

			break;

		case "movie_page_container":
			SN.remove("[id^=movieList]");
			SN.add({
				id: '[id^=movieList]',
				selector: '[id^=movieList] .focusable',
				defaultElement: '#movie_item_0_0',
				enterTo: 'last-focused'
			});
			SN.makeFocusable();

			set_search_focus();

			$('[id^=movieList]').on('sn:focused', function (e) {
				console.log("movieList focused ...");
				var elementId = e.target.id;
				CAT_ROW_INDEX = $('#' + elementId).attr('data-row');
				CAT_ITEM_INDEX = $('#' + elementId).closest('li').index();

				$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");
				$(".menu_container, .search_box, [id=movieList]").removeClass("active");
				$("." + containerClass + " #movieList" + CAT_ROW_INDEX).addClass("active");
				$("." + containerClass).addClass("active");

				set_search_default_ui();
				turn_off_list_item_overlay();
				turn_on_list_item_overlay(elementId);
			});

			$('[id^=movieList]').on('sn:enter-down', function (e) {
				console.log("movieList selcted ...");
				if (MENU_INDEX == 1) {
					var obj = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX];
					var title = obj['name'],
						description = obj['description'],
						img = IMG_PATH + obj['image'];

					get_video_details(obj['id'], playVodFlag = false);

				} else if (MENU_INDEX == 2) {
					set_shows_seasons_episodes(viewType = "seasons");
				}
			});

			break;
		case "seasons_page_container":
			set_focus('seasonsList', 'seasons_item_0');
			SN.focus("seasonsList");

			$(".episode_listbox li:nth-child(1)").find('.thumbnail_overlay').css('display', 'table');

			$('#seasonsList').on('sn:focused', function (e) {
				console.log("seasons List focused ...");
				var elementId = e.target.id;
				SEASONS_ITEM_INDEX = $('#' + elementId).closest('li').index();

				$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");
				$(".menu_container, #seasonsList").removeClass("active");
				$("." + containerClass + ", #seasonsList").addClass("active");

				turn_off_list_item_overlay();
				turn_on_list_item_overlay(elementId);
			});

			$('#seasonsList').on('sn:enter-down', function (e) {
				set_shows_seasons_episodes(viewType = "episode");
			});
			break;

		case "episode_page_container":
			set_focus('episodeList', 'episode_item_0');
			SN.focus("episodeList");

			$(".episode_listbox li:nth-child(1)").find('.thumbnail_overlay').css('display', 'table');

			$('#episodeList').on('sn:focused', function (e) {
				console.log("movieList focused ...");
				var elementId = e.target.id;
				EPISODE_ITEM_INDEX = $('#' + elementId).closest('li').index();

				$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");
				$(".menu_container, #episodeList").removeClass("active");
				$("." + containerClass + ", #episodeList").addClass("active");

				turn_off_list_item_overlay();
				turn_on_list_item_overlay(elementId);
			});

			$('#episodeList').on('sn:enter-down', function (e) {
				var obj = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['episodes'][EPISODE_ITEM_INDEX],
					id = "";

				id = obj['id'];
				get_video_details(id, playVodFlag = false);
			});

			break;

		case "logout_page_container":
			set_focus('logoutButtonContainer', 'loginButton');

			$('#logoutButtonContainer').on('sn:focused', function (e) {
				console.log("Logout page focused ...");
				$(".menu_container").removeClass("active");
				$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");
				$("." + containerClass).addClass("active");
			});

			$('#logoutButtonContainer').on('sn:enter-down', function (e) {
				hide_show_modal(true, "LOGOUT", APP_LOGOUT_MSG);
				// $.ajax({
				// 	type: "POST",
				// 	url: LOGOUT_API,
				// 	dataType: "JSON",
				// 	data: jQuery.param({ memberId: localStorage.getItem('memberId'), sn: webapis.productinfo.getModel() }),
				// 	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				// 	async: true,
				// 	cache: false,
				// 	timeout: REQUEST_TIMEOUT * 1000,
				// 	success: function (json) {
				// 		if (json.result == 200) {
				// 			localStorage.setItem('username', '');
				// 			localStorage.setItem('password', '');
				// 			localStorage.setItem('token', '');
				// 			localStorage.setItem('memberId', '');
				// 			localStorage.setItem('email', '');
				// 			window.location.href = "login.html";

				// 		} else {
				// 			console.log("logout error.");
				// 		}

				// 	}, error: function (xhr, error) {
				// 		console.log('logout error', xhr, error);
				// 	}
				// });
			});

			break;

		case "video_details_page_container":
			set_focus('videoDetailsPageIcons', 'playIcon');
			SN.focus("videoDetailsPageIcons");

			$('#videoDetailsPageIcons').on('sn:focused', function (e) {
				console.log("Video details page focused ...");
				$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");

				$(".menu_container, .video_container").removeClass("active");
				$(".video_details_page_container").addClass("active");
			});

			$('#videoDetailsPageIcons').on('sn:enter-down', function (e) {
				if ($("#playIcon").is(":focus")) {
					$(".video-title").text('');
					$(".video_details_page_container").removeClass('active');
					SN.focus('videoPlayer');
					$(".video_container").addClass('active');
					VOD_URL = "";
					id = "";

					if (MENU_INDEX == 1) {
						id = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['id'];
						VOD_COUNTER = CAT_ITEM_INDEX;
					} else if (MENU_INDEX == 2) {
						id = CAT_ARRAY[MENU_INDEX][CAT_ROW_INDEX][CAT_ITEM_INDEX]['seasons'][SEASONS_ITEM_INDEX]['episodes'][EPISODE_ITEM_INDEX]['id'];
						VOD_COUNTER = EPISODE_ITEM_INDEX;
					}

					get_video_details(id, true);

				} else {
					console.log("Add / Remove favourite");

					if (favoriteStatus) favoriteStatus = 0;
					else favoriteStatus = 1;
					add_remove_favorite(vodId, favoriteStatus);
				}
			});

			break;

		case "EXIT":
			set_focus('exitModal', 'noButton');
			SN.focus("exitModal");
			$('#exitModal').off('sn:enter-down');
			$('#exitModal').on('sn:enter-down', function (e) {
				console.log("exitModal sn:enter-down");
				if ($('#noButton').is(":focus") && $(".modal_container").attr("data-modal-name") == "EXIT") {
					console.log('hide popup');
					hide_show_modal(false, 'EXIT');

				} else if ($("#yesButton").is(":focus") && $(".modal_container").attr("data-modal-name") == "EXIT") {
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
				if ($('#noButton').is(":focus") && $(".modal_container").attr("data-modal-name") == "LOGOUT") {
					console.log('hide popup');
					hide_show_modal(false, 'LOGOUT');
					SN.focus("#loginButton")

				} else if ($("#yesButton").is(":focus") && $(".modal_container").attr("data-modal-name") == "LOGOUT") {
					console.log('exit app');
					// tizen.application.getCurrentApplication().exit();
					$.ajax({
						type: "POST",
						url: LOGOUT_API,
						dataType: "JSON",
						data: jQuery.param({ memberId: localStorage.getItem('memberId'), sn: webapis.productinfo.getModel() }),
						contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
						async: true,
						cache: false,
						timeout: REQUEST_TIMEOUT * 1000,
						success: function (json) {
							if (json.result == 200) {
								localStorage.setItem('username', '');
								localStorage.setItem('password', '');
								localStorage.setItem('token', '');
								localStorage.setItem('memberId', '');
								localStorage.setItem('email', '');
								window.location.href = "login.html";

							} else {
								console.log("logout error.");
							}

						}, error: function (xhr, error) {
							console.log('logout error', xhr, error);
						}
					});
				}
			});
			break;

		case "RETRY_CANCEL":
			set_focus('retryModal', 'retryButton');
			SN.focus("retryModal");

			$('#retryModal').off('sn:enter-down');
			$('#retryModal').on('sn:enter-down', function (e) {
				console.log("retryModal sn:enter-down");
				var modalName = "RETRY_CANCEL";
				hide_show_modal(false, modalName);
				if ($("#retryButton").is(":focus")) {
					SN.focus('videoPlayer');
					setTimeout(function () { load_video(); }, 1000);

				} else if ($("#cancelButton").is(":focus")) {
					closeVideo();
				}
			});
			break;

		case "live_channel_list_container":
			set_focus('live_channel_list', 'channel_number_0');

			// When menu foucs
			$('#live_channel_list').on('sn:focused', function (e) {
				$(".custom_control_container").hide();
				if (!$('.channel_list_container').hasClass('toggle_channel_list')) {
					SN.focus("#video_container");
				} else {
					$(".custom_control_container").hide();
					clearTimeout(TIME_OUT_SECOND);
					TIME_OUT_SECOND = setTimeout(function () {
						$('.channel_list_container').removeClass('toggle_channel_list');
						SN.focus('videoPlayer');
					}, 3000);
				}

			});

			$("#live_channel_list").on('sn:enter-down', function (e) {
				console.log("channel list enter ...");
				hide_channel_list();
				$(".video-title").text('');
				$(".live_page_container, .search_box, #liveList").removeClass('active');

				$('.channel_list_container').removeClass('toggle_channel_list');
				$(".video-title").text('');
				$(".live_page_container, .search_box, #liveList").removeClass('active');

				$(".video_container").addClass('active');
				VOD_URL = "";
				VOD_COUNTER = 0;
				CAT_ITEM_INDEX = CHANNEL_ITEM_INDEX = CURRENT_ITEM_INDEX = $('#' + e.target.id).closest('li').index();
				console.log(CAT_ITEM_INDEX, CHANNEL_ITEM_INDEX, e.target.id);
				get_video_details(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX]['channel_id'], true);

				$("ul.live_channel_list_container li").removeClass("blued_img");
				$("#channel_number_" + (CHANNEL_ITEM_INDEX)).addClass("blued_img");
				$('.channel_list_container').removeClass('toggle_channel_list');
				SN.focus('videoPlayer');
			});
			break;

		case "channel_number_container":
			set_focus('channel_number_container', 'search_channel_number');

			$('#channel_number_container').on('sn:focused', function (e) {
				console.log("channel search input box focus.");
				clearTimeout(TIME_OUT_FIRST);
				TIME_OUT_FIRST = setTimeout(function () {
					hide_channel_input_box();
				}, 2000);
			});

			$('#channel_number_container').on('sn:enter-down', function (e) {
				console.log("channel search input box enter.");
				play_live_by_channel_number();
			});
			break;

		case "audio_container":
			set_focus('audio_container', 'audio_language');

			$('#audio_container').on('sn:focused', function (e) {
				console.log("audio box focus.");
				$(".audio-option").hide();
				$(".down-arrow").css({ "transform": "rotate(0deg)", "top": '' });
			});

			$('#audio_container').on('sn:enter-down', function (e) {
				console.log("audio box enter.");
				$(".audio-option").show();
				SN.focus("language_option");
				$(".down-arrow").css({ "transform": "rotate(180deg)", "top": "0px" });
			});

			break;

		case "language_option":
			set_focus('language_option', 'language_0');

			$('#language_option').on('sn:focused', function (e) {
				console.log("language_option focus.");
				$(".custom_control_container").show();
				show_hide_programme_details_after_specific_time();
			});

			$('#language_option').on('sn:enter-down', function (e) {
				console.log("language_option enter.");
				var index = Number($("#" + e.target.id).attr("data-value"));
				console.log(index);
				webapis.avplay.setSelectTrack('AUDIO', index);
			});

			break;

		case "custom_control_container":
			set_focus('customControls', 'customHome');

			$('#customControls').on('sn:focused', function (e) {
				console.log("customControls focus.");
				CURRENT_ITEM_INDEX = CHANNEL_ITEM_INDEX;
				$(".custom_control_container").show();
				changeProgrammeDetails();
				$('.channel_list_container').removeClass('toggle_channel_list');
				show_hide_programme_details_after_specific_time();
			});

			$('#customControls').on('sn:enter-down', function (e) {
				console.log("customControls enter.");
			});

			$('#customHome').on('sn:enter-down', function (e) {
				console.log("customHome enter.");
				if (MENU_INDEX == 0) closeVideo();
				else goToHomePage();

			});

			$('#customDVR').on('sn:enter-down', function (e) {
				console.log("customDVR enter.");
				SN.remove("[id^=epgList]");
				$(".custom_control_container").hide();
				if (CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX]["dvr_enabled"] == "1") parse_epg('allEpg');
				else createCustomEPG();
			});

			$('#customPause').on('sn:enter-down', function (e) {
				console.log("customPause enter.");
				if (webapis.avplay.getState() == "PLAYING") pauseVideo();
				else if (webapis.avplay.getState() == "PAUSED") playVideo();
			});

			$('#customStartOver').on('sn:enter-down', function (e) {
				console.log("customStartOver enter.");
				webapis.avplay.close();
				progress_bar(0);
				video_play_statewise();
			});

			$('#customAudio').on('sn:enter-down', function (e) {
				console.log("customAudio enter.");
				$("#language_option").show();
				SN.focus("language_option");
				// if (tizen.tvaudiocontrol.isMute()) {
				// 	var vol = tizen.tvaudiocontrol.getVolume();
				// 	tizen.tvaudiocontrol.setVolume(vol);
				// } else {
				// 	tizen.tvaudiocontrol.setMute(true);
				// }
			});

			$('#customClose').on('sn:enter-down', function (e) {
				console.log("customClose enter.");
			});

			break;

		case "programme_details":
			set_focus('programme_details', 'customLeft');

			$('#programme_details').on('sn:focused', function (e) {
				console.log("programme_details focus.");
				$(".custom_control_container").show();
				show_hide_programme_details_after_specific_time();
			});

			$('#programme_details').on('sn:enter-down', function (e) {
				console.log("programme_details enter.");
			});

			$('#customLeft').on('sn:enter-down', function (e) {
				console.log("customLeft enter.");
				CURRENT_ITEM_INDEX = CURRENT_ITEM_INDEX - 1;
				if (CURRENT_ITEM_INDEX > 0 && CURRENT_ITEM_INDEX < _.size(CAT_ARRAY[MENU_INDEX])) {
					changeProgrammeDetails();
				}
			});

			$('#customDetail').on('sn:enter-down', function (e) {
				console.log("customDetail enter.");
			});

			$('#customRight').on('sn:enter-down', function (e) {
				console.log("customRight enter.");
				CURRENT_ITEM_INDEX = CURRENT_ITEM_INDEX + 1;
				if (CURRENT_ITEM_INDEX > -1 && CURRENT_ITEM_INDEX < _.size(CAT_ARRAY[MENU_INDEX])) {
					changeProgrammeDetails();
				}
			});

			break;
	}
}

function set_search_focus() {
	var prefix = get_search_id_prefix();
	set_focus(prefix + 'Searchbox', prefix + 'SearchButton');
	set_focus(prefix + 'SearchInputBox', prefix + 'SearchInput');

	$('#' + prefix + 'Searchbox, #' + prefix + 'SearchInputBox').on('sn:focused', function (e) {
		console.log(prefix + 'Searchbox focused ...');
		$("#menuList li:nth-child(" + (MENU_INDEX + 1) + ")").addClass("menu_border");

		turn_off_list_item_overlay();
		$(".search_box").addClass("active");
		$(".menu_container, .live_page_container, #liveList, [id=movieList], .logout_page_container, .video_details_page_container").removeClass("active");
	});

	$('#' + prefix + 'Searchbox').on('sn:enter-down', function (e) {
		var prefix = get_search_id_prefix();
		console.log(prefix + 'Searchbox enter-down ...');

		$('#' + prefix + 'Searchbox').hide();
		$('#' + prefix + 'SearchInputBox').show();
		SN.focus(prefix + 'SearchInputBox');
	});
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

function set_search_default_ui() {
	var prefix = get_search_id_prefix();
	//$('#'+ prefix +'SearchInput').val('');
	$('#' + prefix + 'SearchInputBox').hide();
	$('#' + prefix + 'Searchbox').show();
}