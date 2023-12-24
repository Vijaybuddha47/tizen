window.addEventListener("load", function () {
  set_focus('videoPlayer', 'video_container');
  $('#videoPlayer').on('sn:focused', function (e) {
    console.log("videoPlayer player focus");
  });

  set_focus('videoNextPrevious', 'playPauseVideo');

  $('#videoNextPrevious').on('sn:focused', function (e) {
    console.log("videoNextPrevious player focus");
    $("#playPreviousVideo").find("img").attr("src", "images/previous_video.png");
    $("#playPauseVideo").find("img").attr("src", "images/pause.png");
    $("#playNextVideo").find("img").attr("src", "images/next_video.png");

    if (e.target.id == "playPreviousVideo") $("#playPreviousVideo").find("img").attr("src", "images/previous_video_focus.png");
    if (e.target.id == "playNextVideo") $("#playNextVideo").find("img").attr("src", "images/next_video_focus.png");
    if (TIMER) {
      clearTimeout(TIMER); //cancel the previous TIMER.
      TIMER = null;
    }

  });

  // Next/Previous Video
  $('#videoNextPrevious').on('sn:enter-down', function (e) {
    console.log("hello testing...............");
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
        if ($("#av-player").css('display') == 'block' && TAB_INDEX == 10) {
          console.log("hiiiiiiiiiiiiiiiiiii");
          if (webapis.avplay.getState() == "PAUSED") {
            console.log(webapis.avplay.getState(), "will play");
            try {
              playVideo();
            } catch (e) {
              playVideo();
              console.log("error in play video: " + e);
            }
          } else if (webapis.avplay.getState() == "PLAYING") {
            console.log(webapis.avplay.getState(), "will pause");
            $(".pause-icon").show();
            pauseVideo();
            webapis.avplay.pause();
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
                  console.log("error in play video: " + e);
                }
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
        if ($(".modal_container").hasClass("active")) {
          console.log("no button enter");
          var modalName = $(".modal_container").attr("data-modal-name");
          hide_show_modal(false, modalName);
          SN.focus("account_information");
          if(MENU_INDEX != 5){
            if (MENU_INDEX == 0 && $(".home_container").addClass("active")){
                $(".nav-container").addClass("minimize");
                $(".logo-img").show();
                SN.focus("#home");
            } 
            else if (MENU_INDEX == 1 && $(".show_container").addClass("active")){
              $(".nav-container").addClass("minimize");
              $(".logo-img").show();
              SN.focus("#show");;
            } 
            else if (MENU_INDEX == 2 && $(".movie_container").addClass("active")){
              $(".nav-container").addClass("minimize");
              $(".logo-img").show();
                SN.focus("#movie");
            }
            else if (MENU_INDEX == 3 && $(".watchlist_container").addClass("active")){
              $(".nav-container").addClass("minimize");
              $(".logo-img").show();
                SN.focus("#watchlist");
            }
            else if (MENU_INDEX == 4 && $(".search_container").addClass("active")){
              $(".nav-container").addClass("minimize");
              $(".logo-img").show();
                SN.focus("#search");
            }
           
          
            }
             else if (MENU_INDEX == 5){
                $(".account_container").addClass("active");
                SN.focus("#account");
             } 
            
        }else if ($(".video_container").hasClass("active")) {
          closeVideo();
        } else if ($("#forget_pass_container").css("display") == "block") {
          console.log("right heuuu");
          $("#forget_pass_container").hide();
          $("#login_container").show();
          SN.focus("#email");
        } else if ($("#sign_up_container").css("display") == "block") {
          console.log("right heuuu");
          $("#sign_up_container").hide();
          $("#login_container").show();
          SN.focus("#email");
        }


        //  else if ($("#search_container").css("display") == "block") {
        //   console.log("search_container");
        //   // $("#search_container").hide();
        //   SN.focus("#search");
        //   //  var container = SELECTED_MENU + "_container";
        //   //  show_hide_screens(container);
        //   //  $(".nav-container").show();
        //   //  console.log("search_container");
        //   //  SN.focus("#" + LAST_FOCUSED_ITEM);
        // }
        //  else if ($("#account_container").css("display") == "block") {
        //   console.log("account_container");
        //   // $("#account_container").hide();
        //   SN.focus("#account");
        // }
         else if ($("#detail_container").css("display") == "block") {
          $("#screenBackground").attr("src", "images/fusioni-pro.png");
          var container = SELECTED_MENU + "_container";
          show_hide_screens(container);
          $(".nav-container").show();
          console.log("detail_container");
          SN.focus("#" + LAST_FOCUSED_ITEM);
          // }
        } else if ($("#seasons_container").css("display") == "block") {
          console.log("hhhhhhhhhhhhhhhhh.............");
          console.log("container");
          show_hide_screens(container);
          $(".detail_container").show();
          console.log("seasons_container");
          SN.focus("#seasons_episodes");
        // } else if ($(".video_container").hasClass("active")) {
        //   console.log("44444444444444444444.............");
        //   console.log("container");
        //   closeVideo();
        //   show_hide_screens(container);
        //   $(".detail_container").show();
        //   $(".screen-background").show();
        //   console.log("seasons_container");
            
        }

         else if (!$(".nav-container").hasClass("minimize") && ($(":focus").parent().attr("id") == 'menu_container')) {
          console.log("11111......");
          $(".nav-container").addClass("minimize");
          hide_show_modal(true, 'EXIT', APP_EXIT_MSG);
        }
        else if ($(".nav-container").hasClass("minimize") && ($(":focus").parent().attr("id") == 'menu_container')) {
          console.log("22222......");
          SN.focus("#home");
        }
        else if ($(".home_container").hasClass("active") && $("[id^='item_']").is(":focus")) {
          // if ($(".nav-container").hasClass("minimize")) {
          $(".nav-container").removeClass("minimize");
          $(".logo-img").show();
          SN.focus("#" + SELECTED_MENU);
          // }
          console.log("return frome home list...");
        } else if ($(".show_container").hasClass("active") && $("[id^='show_']").is(":focus")) {
          // if ($(".nav-container").hasClass("minimize")) {
          $(".nav-container").removeClass("minimize");
          $(".logo-img").show();
          SN.focus("#" + SELECTED_MENU);
          // }
          console.log("return frome home list...");
        } else if ($(".movie_container ").hasClass("active") && $("[id^='movie_']").is(":focus")) {
          // if ($(".nav-container").hasClass("minimize")) {
          $(".nav-container").removeClass("minimize");
          $(".logo-img").show();
          SN.focus("#" + SELECTED_MENU);
          // }
          console.log("return frome home list...");
        } else if ($(".watchlist_container ").hasClass("active") && $("[id^='watch_item_']").is(":focus")) {
          // if ($(".nav-container").hasClass("minimize")) {
          $(".nav-container").removeClass("minimize");
          $(".logo-img").show();
          SN.focus("#" + SELECTED_MENU);
          // }
          console.log("return frome home list...");
        } else if ($(".search_container ").hasClass("active") && $('[id^=search_item_]').is(":focus")) {
          // if ($(".nav-container").hasClass("minimize")) {
          $(".nav-container").removeClass("minimize");
          $(".logo-img").show();
          SN.focus("#" + SELECTED_MENU);
          // }
          console.log("return frome home list...");
        }else if ($(".search_container").hasClass("active")) {
          if ($(".search_container").hasClass("active") && $("[id^='search_item_']").is(":focus")) {
          console.log("search list........");
          $(".nav-container").removeClass("minimize");
          $(".logo-img").show();
          SN.focus("#" + SELECTED_MENU);
          } else if ($(".search_container").hasClass("active") && $("#searchInputText").is(":focus")) {
            console.log("search input........");
            $(".nav-container").removeClass("minimize");
            $(".logo-img").show();
            SN.focus("#" + SELECTED_MENU);
          }
        }
        else if ($(".account_container").hasClass("active") && $("#logout").is(":focus")) {
          // if ($(".nav-container").hasClass("minimize")) {
            $(".nav-container").removeClass("minimize");
            $(".logo-img").show();
            SN.focus("#" + SELECTED_MENU);
          // }
              console.log("return frome home list...");
          }
          // else if ($(".video_container").hasClass("active")) {
          //   // if ($(".nav-container").hasClass("minimize")) {
          //     $(".home_container").addClass("active");
          //    SN.focus("#" + FIRST_PAGE_FOCUSED_ITEM);
          //   // }
          //       console.log("return frome home list...");
          //   }

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
       
        break;

      case 38: //Up key
        console.log("up key");
        if ($(".home_container").hasClass("active") && $(".home_container").css("display") == "block" || $(".show_container").hasClass("active") && $(".show_container").css("display") == "block" || $(".movie_container").hasClass("active") && $(".movie_container").css("display") == "block" || $(".watchlist_container").hasClass("active") && $(".watchlist_container").css("display") == "block" || $(".details_container").hasClass("active") && $(".details_container").css("display") == "block") {
          if ($("[id^=item_]").is(":focus")) {
            var i = Number($(":focus").parent().attr("data-index"));
            var next = "row_list_" + (i - 1);
            SN.focus(next);
          } else if ($("[id^=show_]").is(":focus")) {
            var i = Number($(":focus").parent().attr("data-index"));
            var next = "show_row_list_" + (i - 1);
            SN.focus(next);
          }
          else if ($("[id^=movie_]").is(":focus")) {
            var i = Number($(":focus").parent().attr("data-index"));
            var next = "movie_row_list_" + (i - 1);
            SN.focus(next);
          } else if ($("[id^=watch_item_]").is(":focus")) {
            var i = Number($(":focus").parent().attr("data-index"));
            var next = "row_list_watch" + (i - 1);
            SN.focus(next);
          }
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
