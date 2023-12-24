window.addEventListener("load", function () {
  // When something press from remote keys
  $(window).keydown(function (evt) {
    console.log("keyDown==>", evt.keyCode);
    var elementId = evt.target.id;

    switch (evt.keyCode) {
      case 13: // Ok
        console.log("ok");
        break;

      case 415: // Play
        console.log("play key");

        break;

      case 19: // Pause 102
        console.log("pause key");
        break;

      case 412: // Rewind 82
        console.log("rewind key");
        break;

      case 417: // FastForward
        console.log("fastForward key");
        break;

      case 10009: // Return key parentalcontrol_popup
        console.log("return key");
        if ($("#forget_pass_container").css("display") == "block") {
          console.log("right heuuu");
          $("#forget_pass_container").hide();
          $("#login_container").show();
          SN.focus("#email");
        } else if ($("#sign_up_container").css("display") == "block") {
          console.log("right heuuu");
          $("#sign_up_container").hide();
          $("#login_container").show();
          SN.focus("#email");
        } else if ($("#search_container").css("display") == "block") {
          console.log("search_container");
          // $("#search_container").hide();
          SN.focus("#search");
        } else if ($("#account_container").css("display") == "block") {
          console.log("account_container");
          // $("#account_container").hide();
          SN.focus("#account");
        } else if ($("#detail_container").css("display") == "block") {
          $("#screenBackground").attr("src", "images/fusioni-pro.png");
          var container = SELECTED_MENU + "_container";
          show_hide_screens(container);
          $(".nav-container").show();
          //hide_left_side_bar(container);
          console.log("detail_container");
          // if ($("[id^=item_]").is(":focus")) {
          //   var i = Number($(":focus").parent().attr("data-index"));
          //   var next = "row_list_" + i;
          SN.focus("#" + LAST_FOCUSED_ITEM);
          // }
        } else if ($("#seasons_container").css("display") == "block") {
          var container = SELECTED_MENU + "_container";
          show_hide_screens(container);
          $(".nav-container").show();
          console.log("seasons_container");
          SN.focus("#" + LAST_FOCUSED_ITEM);
        }
        break;

      case 37: // LEFT arrow
        console.log("left key");
        if ($("#episodeList li").is(":focus")) {
          console.log("season list........");
          SN.focus("seasons");
        }

        break;

      case 39: //  RIGHT arrow
        console.log("right key");
        if ($("#menu_container li").is(":focus")) {
          console.log("right key345");
          hide_left_side_bar();
        } else if ($("#seasons li").is(":focus")) {
          console.log("episode list........");
          SN.focus("episodeList");
        }

        break;

      case 413: // Stop button
        console.log("stop key");

        break;

      case 40: //Down key
        console.log("down key");
        if ($(".home_container").hasClass("active") && $(".home_container").css("display") == "block" || $(".show_container").hasClass("active") && $(".show_container").css("display") == "block" || $(".movie_container").hasClass("active") && $(".movie_container").css("display") == "block" || $(".watchlist_container").hasClass("active") && $(".watchlist_container").css("display") == "block") {
          if ($("[id^=item_]").is(":focus")) {
            var i = Number($(":focus").parent().attr("data-index"));
            var next = "row_list_" + (i + 1);
            SN.focus(next);
          } else if ($("[id^=show_]").is(":focus")) {
            var i = Number($(":focus").parent().attr("data-index"));
            var next = "show_row_list_" + (i + 1);
            SN.focus(next);
          }
          else if ($("[id^=movie_]").is(":focus")) {
            var i = Number($(":focus").parent().attr("data-index"));
            var next = "movie_row_list_" + (i + 1);
            SN.focus(next);
          }
        }
        break;

      case 38: //Up key
        console.log("up key");
        if ($(".home_container").hasClass("active") && $(".home_container").css("display") == "block" || $(".show_container").hasClass("active") && $(".show_container").css("display") == "block" || $(".movie_container").hasClass("active") && $(".movie_container").css("display") == "block" || $(".watchlist_container").hasClass("active") && $(".watchlist_container").css("display") == "block") {
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
