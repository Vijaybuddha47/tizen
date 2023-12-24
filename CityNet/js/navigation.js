window.addEventListener('load', function () {
	manage_spatial_navigation("custom_control_container");
	manage_spatial_navigation("programme_details");
	manage_spatial_navigation("language_option");
	manage_spatial_navigation("audio_container");
	manage_spatial_navigation("epg_icon_container");

	set_focus('videoPlayer', 'video_container');
	set_focus('videoNextPrevious', 'playPauseVideo');

	$("#videoNextPrevious").on('sn:focused', function (e) {
		show_hide_controls();
	});

	$('#videoPlayer').on('sn:focused', function (e) {
		$(".channel-img").attr("src", IMG_PATH + CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX].image);
		$("#programmeTitle").text(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX].name);
		show_hide_controls();
	});

	// EPG list
	$('[id^=epgList]').on('sn:enter-down', function (e) {
		console.log('EPG List sn:enter-down');
		if (_.size(All_EPG_OBJ) > 0) {
			var elementId = e.target.id,
				url = "",
				transcodeLevels = 5;

			rowIndex = $('#' + elementId).attr('data-row');
			itemIndex = $('#' + elementId).closest('li').index() - 1;

			if (CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]['transcode_levels'] != "undefined") transcodeLevels = CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]['transcode_levels'];

			if (CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]['dvrDir'] != "undefined") url += CAT_ARRAY[MENU_INDEX][CAT_ITEM_INDEX]['dvrDir']; // domain

			if (_.size(All_EPG_OBJ) > 0) url += All_EPG_OBJ[rowIndex][itemIndex]['filepath'] + "_"; // filepath

			if (transcodeLevels <= 1) url += 'hi.mp4/master.m3u8';
			else if (transcodeLevels = 2) url += ',low,hi,.mp4.urlset/master.m3u8';
			else if (transcodeLevels = 3) url += ',low,med,hi,.mp4.urlset/master.m3u8';

			webapis.avplay.close();
			$("#epgListContainer").html('');
			$(".epg_icon_container").hide();

			console.log("seleted DVR URL", url);

			$("#programmeTitle").html(All_EPG_OBJ[rowIndex][itemIndex]['program_name']);
			$("#programmeDesc").html(All_EPG_OBJ[rowIndex][itemIndex]['description']);

			VOD_URL = url;
			$(".video-title").text('');
			load_video();
		}
	});

	// Next/Previous Video
	$('#videoNextPrevious').on('sn:enter-down', function (e) {
		if ($("#playPreviousVideo").is(":focus")) {
			previous_next_video(type = "previous");

		} else if ($("#playPauseVideo").is(":focus")) {
			if ($("#av-player").css('display') == 'block') {
				if (webapis.avplay.getState() == "PAUSED") {
					$(".pause-icon").hide();
					$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png');
					$(".video-title").text('');
					if (webapis.avplay.getState() == "PAUSED") {
						var currentTime = webapis.avplay.getCurrentTime();
						var forwardTime = sessionStorage.video_forward_time;
						var resultant = parseInt(forwardTime) - parseInt(currentTime);
						var resultantTime = Math.abs(resultant);

						if (sessionStorage.FWD_RWD_key_press == 1) {
							$(".video-inner").show();
							$(".circle_loader").addClass('circle-loader-middle');

							if (resultant > 0) {
								resultantTime = parseInt(resultantTime - 5000);
								jumpForwardVideo(resultantTime);
							} else {
								resultantTime = parseInt(resultantTime + 5000);
								if (currentTime - resultantTime < 0) resultantTime = currentTime;
								jumpBackwardVideo(resultantTime);
							}
							sessionStorage.FWD_RWD_key_press = 0;
						} else {
							if (webapis.avplay.getState() == "PAUSED") {
								try {
									playVideo();
								} catch (e) {
									playVideo();
									console.log("error in play video: " + e);
								}
							} else if (webapis.avplay.getState() == "PLAYING") {
								$(".pause-icon").show();
								pauseVideo();
								webapis.avplay.pause();
							}
						}
					}

				} else if (webapis.avplay.getState() == "PLAYING") {
					$(".pause-icon").show();
					pauseVideo();
					webapis.avplay.pause();
				}
			}

		} else if ($("#playNextVideo").is(":focus")) {
			previous_next_video(type = "next");
		}
	});

	// When something press from remote keys
	$(window).keydown(function (evt) {
		if (evt.keyCode == "37" || evt.keyCode == "39") {
			if ($(".menu_container").hasClass("active")) {
				TIME_STAMP = Date.now();
				if (MENU_INDEX == 3) set_logout_menu_data();
				else parse_data(TIME_STAMP);
			}
		}

		// When number key pressed
		if (evt.keyCode <= 57 && evt.keyCode >= 48) {
			console.log("Number key pressed...");
			show_channel_input_box(evt.key);
		}

		var modalName = $(".modal_container").attr("data-modal-name");
		switch (evt.keyCode) {
			case 13:	// Ok
				if ($("#av-player").css('display') == 'block' && $("#video_container").is(":focus")) {
					console.log("inner 12211");
					// For live menu only
					if (MENU_INDEX == 0 && webapis.avplay.getState() != "NONE" && webapis.avplay.getState() != "IDLE" && webapis.avplay.getState() != "READY") {
						show_hide_programme_details_after_specific_time();
					}

					if (webapis.avplay.getState() == "PAUSED") {
						$(".pause-icon").hide();
						$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png');
						$(".video-title").text('');
						if (webapis.avplay.getState() == "PAUSED") {
							var currentTime = webapis.avplay.getCurrentTime();
							var forwardTime = sessionStorage.video_forward_time;
							var resultant = parseInt(forwardTime) - parseInt(currentTime);
							var resultantTime = Math.abs(resultant);

							if (sessionStorage.FWD_RWD_key_press == 1) {
								$(".video-inner").show();
								$(".circle_loader").addClass('circle-loader-middle');

								if (resultant > 0) {
									resultantTime = parseInt(resultantTime - 5000);
									jumpForwardVideo(resultantTime);
								} else {
									resultantTime = parseInt(resultantTime + 5000);
									if (currentTime - resultantTime < 0) resultantTime = currentTime;
									jumpBackwardVideo(resultantTime);
								}
								sessionStorage.FWD_RWD_key_press = 0;
							} else {
								if (webapis.avplay.getState() == "PAUSED") {
									try {
										playVideo();
										show_hide_controls();
									} catch (e) {
										playVideo();
										console.log("error in play video: " + e);
									}
								} else if (webapis.avplay.getState() == "PLAYING") {
									$(".pause-icon").show();
									pauseVideo();
									webapis.avplay.pause();
								}
							}
						}

					} else if (webapis.avplay.getState() == "PLAYING") {
						$(".pause-icon").show();
						pauseVideo();
						webapis.avplay.pause();
					}

				} else if ($("#av-player").css('display') == 'block' && $("#customClose").is(":focus") && !$('[id^=channel_number]').is(":focus") && !$('#search_channel_number').is(":focus")) {
					$(".custom_control_container").hide();
					SN.focus("videoPlayer");
				}
				break;

			case 415:	// Play
				if ($(".video_container").hasClass("active")) {
					$("#videoNextPreviousPlayPauseIcon").attr('src', 'images/pause.png');
					$(".pause-icon").hide();
					$(".video-title").text('');

					if (webapis.avplay.getState() == "PAUSED") {
						var currentTime = webapis.avplay.getCurrentTime();
						var forwardTime = sessionStorage.video_forward_time;
						var resultant = parseInt(forwardTime) - parseInt(currentTime);
						var resultantTime = Math.abs(resultant);

						if (sessionStorage.FWD_RWD_key_press == 1) {
							sessionStorage.FWD_RWD_key_press = 0;
							$(".video-inner").show();
							$(".circle_loader").addClass('circle-loader-middle');

							if (resultant > 0) {
								resultantTime = parseInt(resultantTime); //parseInt(resultantTime - 5000);
								jumpForwardVideo(resultantTime);
							} else {
								resultantTime = parseInt(resultantTime); //parseInt(resultantTime + 5000);
								if (currentTime - resultantTime < 0) resultantTime = currentTime;
								jumpBackwardVideo(resultantTime);
							}

						} else {
							if (webapis.avplay.getState() == "PAUSED") {
								try {
									playVideo();

								} catch (e) {
									playVideo();
									console.log("error in play video: " + e);
								}
								hide_channel_list();
							} else if (webapis.avplay.getState() == "PLAYING") {
								try {
									pauseVideo();

								} catch (e) {
									pauseVideo();
									console.log("error in play video: " + e);
								}
							}
						}
					}
				}
				break;

			case 19:   // Pause 102
				if ($(".video_container").hasClass("active")) {
					if (webapis.avplay.getState() == "PLAYING" && $('#av-player').is(':visible')) {
						pauseVideo();
					}
				}

				break;

			case 412:	// Rewind 82
				rewind_video();
				break;

			case 417:	// FastForward
				forward_video();
				break;


			case 10009:	// Return key
				// Back from menu
				if ($(".modal_container").hasClass("active")) {
					var name = $(".modal_container").attr("data-modal-name");
					hide_show_modal(false, name);
					SN.focus('#loginButton');
					//Exit app
				} else if ($(".menu_container").hasClass("active") && !$(".splash-screen").is(':visible')) {
					console.log("show exit popup...");
					hide_show_modal(true, "EXIT", APP_EXIT_MSG);

					// Return from video screen
				} else if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
					// return back from EPG
					if ($('#epgListContainer').html().length > 0) {
						$("#epgListContainer").html('');
					} else if ($(".channel_dvr_box").is(':visible') && ($("[id^=time_]").is(":focus") || $("[id^=day_]").is(":focus"))) {
						$(".channel_dvr_box").hide();
						$(".custom_control_container").show();
						SN.focus("#customDVR");
					} else if ($(".custom_control_container").is(':visible') && ($(":focus").parent().attr("id") == "customControls" || $(":focus").parent().attr("id") == "programme_details")) {
						$(".custom_control_container").hide();
						SN.focus("videoPlayer");
					} else if ($(".custom_control_container").is(':visible') && $(":focus").parent().attr("id") == "language_option") {
						$("#language_option").hide();
						$(".custom_control_container").show();
						SN.focus("#customAudio");
					} else if ($('.channel_list_container').hasClass("toggle_channel_list") && ($(":focus").parent().attr("id") == "live_channel_list")) {
						hide_channel_list();
						SN.focus('videoPlayer');
					} else {
						closeVideo();
					}

					// Back to menu from first page items
				} else if ($(".live_page_container").hasClass("active") || $(".movie_page_container").hasClass("active")) {
					$(".live_page_container, .movie_page_container, #liveList, [id^=movieList]").removeClass("active");
					$(".menu_container").addClass("active");
					SN.focus("menuList");

					// Back from season page to shows page
				} else if ($(".seasons_page_container").hasClass('active')) {
					$(".seasons_page_container").removeClass('active').html('');
					$(".movie_page_container").show().addClass("active");
					SN.focus('[id^=movieList]');

					// Back from episode page to season page
				} else if ($(".episode_page_container").hasClass('active')) {
					$(".episode_page_container").removeClass('active').html('');
					$(".seasons_page_container").show().addClass("active");
					SN.focus('seasonsList');

					// Back to items from detials page
				} else if ($(".video_details_page_container").hasClass("active")) {
					// Back to Movies
					if ($('[id^=movieList]').hasClass("active") || MENU_INDEX == 1) {
						$(".video_details_page_container").removeClass('active').html('');
						$(".movie_page_container").show().addClass("active");
						SN.focus('[id^=movieList]');

						// Back to episodes
					} else if ($('#episodeList').hasClass("active") || MENU_INDEX == 2) {
						$(".video_details_page_container").removeClass('active').html('');
						$(".episode_page_container").show().addClass("active");
						SN.focus('episodeList');
					}

					// Return from popup to channel list
				} else if ($(".modal_container").hasClass("active")) {
					// When exit modal selected
					if (modalName == "EXIT") {
						hide_show_modal(false, modalName);

					} else if (modalName == "RETRY_CANCEL") {
						hide_show_modal(false, modalName);
						closeVideo();
					}
				}
				break;

			case 37:	// LEFT arrow
				if ($('.search_box').hasClass('active') && ($("#liveSearchInput").is(":focus") || $("#moviesSearchInput").is(":focus") || $("#showsSearchInput").is(":focus"))) {
					console.log("pointer move left ");
					var textEntered = get_search_input_value();
					if (textEntered) controlLeftArrowKeys();
				}
				else if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && $('.channel_list_container').hasClass("toggle_channel_list")) {
					console.log("video container 1111");
					if (webapis.avplay.getState() == "PAUSED" && $('#av-player').is(':visible')) {
						SN.focus("#channel_number_" + CHANNEL_ITEM_INDEX);
					}
				} else if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && !$('.channel_list_container').hasClass("toggle_channel_list")) {
					console.log("show channel list");
					var leftId = "#channel_number_" + CHANNEL_ITEM_INDEX;
					$("#customHome").attr("data-sn-left", leftId);
					$("#customLeft").attr("data-sn-left", leftId);
					if ($('#av-player').is(':visible') && ($('#video_container').is(':focus'))) {
						show_channel_list();
					}

				} else if ($("ul.video_next_previous_icon_list li:focus").size() < 1) rewind_video();
				break;

			case 39:	// RIGHT arrow
				if ($('.search_box').hasClass('active') && ($("#liveSearchInput").is(":focus") || $("#moviesSearchInput").is(":focus") || $("#showsSearchInput").is(":focus"))) {
					console.log("pointer move right ");
					var textEntered = get_search_input_value();
					if (textEntered) controlrightArrowKeys();
				}
				else if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && $('.channel_list_container').hasClass("toggle_channel_list")) {
					if ($('#av-player').is(':visible')) {
						// $('.channel_list_container').removeClass('toggle_channel_list');
						hide_channel_list();
						SN.focus('videoPlayer');
					}
				} else if ($("ul.video_next_previous_icon_list li:focus").size() < 1) forward_video();
				break;

			case 413:	// Stop button
				if ($('#video_container').is(':visible') && $('#video_container').hasClass('active')) {
					closeVideo();
				}
				break;

			case 40:    //Down key
				if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && $("#video_container").is(":focus")) {
					$(".custom_control_container").show();
					SN.focus("customControls");
				} else if ($(".video_container").hasClass("active") && (MENU_INDEX != 0) && $("#video_container").is(":focus")) {
					show_hide_controls();
					SN.focus("videoNextPrevious");
				} else if ($(".video_container").hasClass("active") && $("#audio_language").is(":focus")) {
					SN.focus("#video_container");
				}
				break;

			case 38:    //Up key
				break;

			case 427:    //ChannelUp key
				console.log("channelUp", evt.keyCode);
				if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && $('.channel_list_container').hasClass("toggle_channel_list")) {
					if (webapis.avplay.getState() == "PLAYING" && $('#av-player').is(':visible')) {
						CHANNEL_ITEM_INDEX = CHANNEL_ITEM_INDEX - 1;
						SN.focus("#channel_number_" + (CHANNEL_ITEM_INDEX));

						clearTimeout(CHANNEL_TIME_OUT_SECOND);
						CHANNEL_TIME_OUT_SECOND = setTimeout(function () {
							console.log("channel click up");
							VOD_URL = "";
							VOD_COUNTER = 0;
							CAT_ITEM_INDEX = CHANNEL_ITEM_INDEX;
							get_video_details(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX]['channel_id'], true);
							$("ul.live_channel_list_container li").removeClass("blued_img");
							$("#channel_number_" + (CHANNEL_ITEM_INDEX)).addClass("blued_img");
							$('.channel_list_container').removeClass('toggle_channel_list');
							SN.focus('videoPlayer');
						}, 1000);
					}
				} else if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && !$('.channel_list_container').hasClass("toggle_channel_list")) {
					console.log("show channel list");
					if ($("#av-player").css('display') == 'block' && $('#av-player').is(':visible')) {
						show_channel_list();
					}
				}
				break;

			case 428:    //ChannelDown key
				console.log("channelDown", evt.keyCode);
				if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && $('.channel_list_container').hasClass("toggle_channel_list")) {
					if (webapis.avplay.getState() == "PLAYING" && $('#av-player').is(':visible')) {
						CHANNEL_ITEM_INDEX = CHANNEL_ITEM_INDEX + 1;
						SN.focus("#channel_number_" + (CHANNEL_ITEM_INDEX));

						clearTimeout(CHANNEL_TIME_OUT_SECOND);
						CHANNEL_TIME_OUT_SECOND = setTimeout(function () {
							console.log("channel click down");
							VOD_URL = "";
							VOD_COUNTER = 0;
							CAT_ITEM_INDEX = CHANNEL_ITEM_INDEX - 1;
							get_video_details(CAT_ARRAY[MENU_INDEX][CHANNEL_ITEM_INDEX]['channel_id'], true);
							$("ul.live_channel_list_container li").removeClass("blued_img");
							$("#channel_number_" + (CHANNEL_ITEM_INDEX)).addClass("blued_img");
							$('.channel_list_container').removeClass('toggle_channel_list');
							SN.focus('videoPlayer');
						}, 1000);
					}
				} else if ($(".video_container").hasClass("active") && (MENU_INDEX == 0) && !$('.channel_list_container').hasClass("toggle_channel_list")) {
					console.log("show channel list");
					if ($("#av-player").css('display') == 'block' && $('#av-player').is(':visible')) {
						show_channel_list();
					}
				}
				break;


			case 65376: // Done from IME keyboard
				console.log("OK from keyboard...");
				var prefix = get_search_id_prefix(),
					visible = false,
					searchText = get_search_input_value(),
					containerClass = "",
					tabindex = 1,
					row = 0;

				if (MENU_INDEX > 0) $('.movie_container').show();

				// set search text in hidden div
				set_search_text();

				$(".movie_list li, .live_list li").each(function () {
					title = $(this).find(".thumbnail_overlay_text").text().toLowerCase().normalize("NFKD").replace(/[\u0300-\u036F]/g, "");
					if (title.indexOf(searchText) != -1) {
						$(this).show().removeClass('unvisible').addClass('visible');
						$(".no-record-box").remove();
						visible = true;
					} else {
						$(this).hide().removeClass('visible').addClass('unvisible');
					}
				});

				if (MENU_INDEX > 0) {
					$(".movie_container").each(function () {
						var htmlObj = $(this).find("ul.movie_list li.visible");
						if (htmlObj.length == 0) $(this).hide();
						else {
							htmlObj.removeAttr('data-sn-right');
							htmlObj.removeAttr('data-sn-left');
							htmlObj.first().attr('data-sn-left', 'null');
							htmlObj.last().attr('data-sn-right', 'null');
						}
					});
				} else {
					$("ul.live_list li.visible").removeAttr('data-sn-right');
					$("ul.live_list li.visible").last().attr('data-sn-right', 'null');
				}

				if (!visible) {
					if (MENU_INDEX == 0) containerClass = "live_page_container";
					else containerClass = "movie_page_container";
					set_error_message(containerClass, tabindex)
				}
				break;

			case 65385: // Cancel from IME keyboard
				console.log("Cancel from keyboard...");
				// set search text in hidden div
				set_search_text();
				break;

			default: console.log("Key code : " + evt.keyCode);
				break;
		}
	});
});
