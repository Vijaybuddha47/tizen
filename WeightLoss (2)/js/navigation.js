window.addEventListener("load", function () {
  set_focus('videoPlayer', 'video_container');
  $('#videoPlayer').on('sn:focused', function (e) {
  });

  set_focus('videoNextPrevious', 'playPauseVideo');

  $('#videoNextPrevious').on('sn:focused', function (e) {
    $("#playPreviousVideo").find("img").attr("src", "images/previous_video.png");
    $("#playPauseVideo").find("img").attr("src", "images/pause.png");
    $("#playNextVideo").find("img").attr("src", "images/next_video.png");

    if (e.target.id == "playPreviousVideo") $("#playPreviousVideo").find("img").attr("src", "images/previous_video_focus.png");
    if (e.target.id == "playNextVideo") $("#playNextVideo").find("img").attr("src", "images/next_video_focus.png");

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
    //console.log("keyDown==>", evt.keyCode);
    var elementId = evt.target.id;

    switch (evt.keyCode) {
      case 13: // Ok
        console.log("ok");
        if ($(".video_container").hasClass("active")) {
          if ($("#msgButton").is(":focus")) {
            $(".subscription_msg").hide();
            SN.focus("#videoPlayer");
          }
          else if ($("#av-player").css('display') == 'block' && $("#video_container").is(":focus")) {
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
        }
        break;

      case 415: // Play
        console.log("play key");
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
                }
              } else if (webapis.avplay.getState() == "PLAYING") {
                try {
                  pauseVideo();

                } catch (e) {
                  pauseVideo();
                }
              }
            }
          }
        }
        break;

      case 19: // Pause 102
        console.log("pause key");
        if ($(".video_container").hasClass("active")) {
          if (webapis.avplay.getState() == "PLAYING" && $('#av-player').is(':visible')) {
            pauseVideo();
          }
        }
        break;

      case 412: // Rewind 82
        console.log("rewind key");
        rewind_video();
        break;

      case 417: // FastForward
        console.log("fastForward key");
        forward_video();
        break;

      case 10009: // Return key parentalcontrol_popup
        console.log("return key");
        if ($('.full-detail-page-container').hasClass('active') && $('#watch_button').is(":focus")) {
          $(".watch-heading").hide();
          $(".menu-list").show();
          $(".details-container").show();
          $(".image-banner-container").show();
          $(".images-container").hide();
          $(".full-detail-page-container").hide();
          $(".top-banner-background").show();
          $(".outer-container").show();
          $(".outer-container").addClass("active");
          SN.focus("#" + THIRD_PAGE_FOCUSED_ITEM);
        } else if ($(".main-container").hasClass("wide_menu_container") && ($(":focus").parent().attr("id") == 'images_container')) {
          hide_show_modal(true, 'EXIT', APP_EXIT_MSG);
          SN.focus("#noButton");
        } else if ($('.outer-container').hasClass('active') && $('[id^=cat_item_]').is(":focus")) {
          hide_show_modal(true, 'EXIT', APP_EXIT_MSG);
          SN.focus("#noButton");
        } else if ($('.menu-item').is(":focus")) {
          hide_show_modal(true, 'EXIT', APP_EXIT_MSG);
          SN.focus("#noButton");
        } else if ($('.program-episodes-container').is(':visible') && $('.program-episodes-container').hasClass('active') && $('[id^=program_cat_item_0_]').is(":focus")) {
          if (Second_item_index =="12") {
            $(".full-detail-page-container").show();
            $(".top-second-banner-background").show();
            $(".program-episodes-container").hide();
            $(".full-detail-page-container").addClass("active");
            $(".program-episodes-container").removeClass("active");
            SN.focus("#watch_button");
          } else if (DEPENDENT_PAGE_INDEX =="0") {
            $(".video-details-container").show();
            $(".program-episodes-container").hide();
            $(".main-details-page-container").hide();
            $(".video-details-container").addClass("active");
            $(".program-episodes-container").removeClass("active");
            SN.focus("#" + FIVE_PAGE_FOCUSED_ITEM);
          } else if (Second_item_index =="11") {
            $(".video-details-container").show();
            $(".program-episodes-container").hide();
            $(".video-details-container").addClass("active");
            $(".program-episodes-container").removeClass("active");
            SN.focus("#" + SECOND_PAGE_FOCUSED_ITEM);
          } 
        }
        else if ($('.main-details-page-container').is(':visible') && $('.main-details-page-container').hasClass('active') && $('#play_button').is(":focus")) {
          if (Second_item_index == 12) {
            $(".program-episodes-container").show();
            $(".main-details-page-container").hide();
            $(".program-episodes-container").addClass("active");
            $(".main-details-page-container").removeClass("active");
            SN.focus("#" + SECOND_PAGE_FOCUSED_ITEM);
          } else if (Second_item_index == 11) {
            $(".video-details-container").show();
            $(".program-episodes-container").hide();
            $(".main-details-page-container").hide();
            $(".video-details-container").addClass("active");
            $(".program-episodes-container").removeClass("active");
            SN.focus("#" + SECOND_PAGE_FOCUSED_ITEM);
          } else if (DEPENDENT_PAGE_INDEX == 0) {
            Second_item_index = 11;
            $(".program-episodes-container").show();
            $(".main-details-page-container").hide();
            $(".program-episodes-container").addClass("active");
            $(".main-details-page-container").removeClass("active");
            SN.focus("#" + SECOND_PAGE_FOCUSED_ITEM);
          }   

        }
        else if ($('.video-container').hasClass('active')) {
          closeVideo();
          // if(Second_item_index == 9){
          //   $(".main-container").show();
          //   $(".outer-container").show();
          //   $(".video-container").removeClass("active");
          //   $(".outer-container").addClass("active");
          //   SN.focus("#" + THIRD_PAGE_FOCUSED_ITEM);
          // }else if(Second_item_index == 11){
          //   SN.focus("#play_button");
          //   closeVideo();
          // }
        }
        else if ($(".main-details-page-container").hasClass('selected') && $(".video-container").hasClass('active')) {
          $(".main-details-page-container").show();
          closeVideo();
          SN.focus("#play_button");
        } else if ($('.video-details-container').is(':visible') && $('.video-details-container').hasClass('active') && $('[id^=my_video_cat_item_]').is(":focus")) {
          $(".home-container").show();
          $(".images-container").show();
          $(".outer-container").show();
          $(".watch-heading").show();
          $(".video-details-container").hide();
          PreviewVideoPlayerData();
          SN.focus("#menu1");
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=special_cat_item_]').is(":focus")) {
          SN.focus("#menu9");
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=tele_cat_item_]').is(":focus")) {
          SN.focus("#menu8");
        }
        break;

      case 37: // LEFT arrow
        console.log("left key");


        break;

      case 39: //  RIGHT arrow
        console.log("right key");

        break;

      case 413: // Stop button
        console.log("stop key");
        break;

      case 40: //Down key
        console.log("down key");
        if ($("#menu0").is(":focus")) {
          SN.focus("#menu1");
        } else if ($("#menu4").is(":focus") || $("#menu6").is(":focus") || $("#menu7").is(":focus") || $("#menu1").is(":focus")) {
          $(".outer-container").addClass("active");
          SN.focus("category_list_0");
          PREVIEW_PLAYER.setSrc("");
        } else if ($("#menu8").is(":focus")) {
          SN.focus("tele_category_list_0");
          PREVIEW_PLAYER.setSrc("");
        } else if ($("#menu9").is(":focus")) {
          SN.focus("special_category_list_0");
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          SN.focus("category_list_" + (i + 1));
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=tele_cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          SN.focus("tele_category_list_" + (i + 1));
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=special_cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          SN.focus("special_category_list_" + (i + 1));
        } else if ($('.video-details-container').is(':visible') && $('.video-details-container').hasClass('active') && $('[id^=my_video_cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          SN.focus("my_video_category_list_" + (i + 1));
        } else if ($('#menu8').is(":focus")) {
          SN.focus("tele_category_list_0");
        }
        break;

      case 38: //Up key
        console.log("up key");
        if ($('.outer-container').hasClass('active') && $('[id^=tele_cat_item_0_]').is(":focus")) {
          $(".images-container").show();
          $(".images-container").show();
          $(".watch-heading").show();
          $(".details-container").hide();
          $(".top-banner-background").hide();
          PreviewVideoPlayerData()
          SN.focus("#menu8");
        } else if ($('.outer-container').hasClass('active') && $('[id^=special_cat_item_0_]').is(":focus")) {
          PreviewVideoPlayerData()
          SN.focus("#menu9");
        } else if ($('.outer-container').hasClass('active') && $('[id^=cat_item_0_]').is(":focus")) {
          $(".images-container").show();
          $(".images-container").show();
          $(".watch-heading").show();
          $(".details-container").hide();
          $(".top-banner-background").hide();
          PreviewVideoPlayerData()
          SN.focus("menu_list");
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          SN.focus("category_list_" + (i - 1));
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=tele_cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          SN.focus("tele_category_list_" + (i - 1));
        } else if ($('.outer-container').is(':visible') && $('.outer-container').hasClass('active') && $('[id^=special_cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          PreviewVideoPlayerData()
          SN.focus("special_category_list_" + (i - 1));
        } else if ($('.video-details-container').is(':visible') && $('.video-details-container').hasClass('active') && $('[id^=my_video_cat_item_]').is(":focus")) {
          var i = Number($(":focus").parent().attr("data-index"));
          SN.focus("my_video_category_list_" + (i - 1));
        }
        break;

      case 427: //ChannelUp key
        console.log("channelUp");
        break;

      case 428: //ChannelDown key
        console.log("channelDown");
        break;

      case 65376: // Done from IME keyboard
        console.log("OK from keyboard...");
        if ($("#searchInputText").is(":focus")) request_search_results();
        break;

      case 65385: // Cancel from IME keyboard
        console.log("Cancel from keyboard...");
        break;

      default:
        console.log("Key code : " + evt.keyCode);
        break;
    }
  });
});
