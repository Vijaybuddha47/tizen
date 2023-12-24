function manage_spatial_navigation(containerClass, favoriteStatus, vodId) {
  switch (containerClass) {
    case "menu-container":
      set_focus("menu_container", "search");

      // When menu foucs
      $("#menu_container").on("sn:focused", function (e) {
        console.log("left sidebar focus...");
        var id = e.target.id;
        change_menu_focus(id);
        $(".selected").removeClass("selected");
        $("#" + id).addClass("selected");
        $(".nav-container").removeClass("minimize");
        $(".logo-img").show();
      });

      // When menu enter
      $("#menu_container").on("sn:enter-down", function (e) {
        console.log("left sidebar button enter...");
        SELECTED_MENU = e.target.id;
        MENU_INDEX = PAGE_INDEX = TAB_INDEX = $("#" + SELECTED_MENU).index();
        var container = SELECTED_MENU + "_container";
        console.log("SELECTED_MENU==> ", SELECTED_MENU);
        if (SELECTED_MENU == "account" || SELECTED_MENU == "search") show_hide_screens(container);
        else if (SELECTED_MENU == "show") getShowData(); else if (SELECTED_MENU == "movie") getMovieData(); else getScreenData(SELECTED_MENU);//setScreenData(SELECTED_MENU);
      });

      break;

    case "account-container":
      set_focus("account_information", "logout");
      // When account page foucs list
      $("#account").on("sn:focused", function (e) {
        console.log("account_information", e.target.id);
      });

      $("#account").on("sn:enter-down", function (e) {
        console.log("account_information", e.target.id);
      });
      break;

    case "search-container":
      console.log("fgfddfg");
      set_focus("search_box", "searchInputText");
      // When search page foucs list

      $('#searchInputText').on('sn:enter-down', function (e) {
        console.log("search_box enter...");
        request_search_results();
      });
      break;

    case "detail_container":
      set_focus("show_details_list", "seasons_episodes");
      console.log("hiiii season container");
      $("#show_details_list").on("sn:focused", function (e) {
        console.log("seasons_episodes", e.target.id);
      });


      $('#seasons_episodes').on('sn:enter-down', function (e) {
        console.log("seasons_episodes enter...");
        $(".detail_container").hide();
        getSeasonsData();
      });
      break;

    case "seasons_container":
      set_focus("seasons", "season_0");
      $("#seasons").on("sn:focused", function (e) {
        console.log("season focus...");
        var id = e.target.id;
        console.log("id");
        //change_menu_focus(id);
        $(".active").removeClass("active");
        $("#" + id).addClass("active");
      });

      $("#seasons").on("sn:enter-down", function (e) {
        console.log("season enter...");
        $(".selected-season").removeClass("selected-season");
        $("#" + e.target.id).addClass("selected-season");
        var index = Number($("#" + e.target.id).index());
        console.log("index=>", index);
        $(".right-container").html("");
        getEpisodesData(SEASON_DATA_ARRAY[index]["season_id_PK"]);
        //SN.focus(index);
      });

      break;

    case "episode_list":
      set_focus("episodeList", "episode_0");
      $("#episodeList").on("sn:focused", function (e) {
        console.log("episode focus...");
      });

      $("#episodeList").on("sn:enter-down", function (e) {
        console.log("episode enter...");
      });

      break;



    // case "EXIT":
    //   set_focus("exitModal", "noButton");

    //   $("#exitModal").on("sn:focused", function (e) {
    //     console.log("exitModal focus");
    //   });
    //   $("#exitModal").on("sn:enter-down", function (e) {
    //     console.log("exitModal enter down");
    //   });
    //   // $('#exitModal').off('sn:enter-down');
    //   $("#noButton").on("sn:enter-down", function (e) {
    //     console.log("no button enter");
    //     console.log("hide popup");
    //     hide_show_modal(false, "EXIT");

    //     var className = "";
    //     if (PAGE_INDEX == 0) className = "home_container";
    //     else if (PAGE_INDEX == 1) className = "video_library_container";
    //     else if (PAGE_INDEX == 2) className = "search_container";
    //     else if (PAGE_INDEX == 3) className = "account_container";
    //     else if (PAGE_INDEX == 4) className = "setting_container";
    //     remove_add_active_class(className);
    //     $(".menu_container").addClass("active");
    //     // set_selected_menu();
    //     $(".menu_container").removeClass("toggle_menu");
    //     SN.focus("left_sidebar");
    //   });

    //   $("#yesButton").on("sn:enter-down", function (e) {
    //     console.log("exit app");
    //     // closeVideo();
    //     // tizen.application.getCurrentApplication().exit();
    //     window.close();
    //   });
    //   break;

    // case "RETRY_CANCEL":
    //   set_focus("retryModal", "retryButton");
    //   SN.focus("retryModal");

    //   $("#retryModal").off("sn:enter-down");
    //   $("#retryModal").on("sn:enter-down", function (e) {
    //     console.log("retryModal sn:enter-down");
    //     var modalName = "RETRY_CANCEL";
    //     hide_show_modal(false, modalName);
    //     if ($("#retryButton").is(":focus")) {
    //       if (PREVIEW_FULL_DISPLAY) SN.focus("previewVideoPlayer");
    //       setTimeout(function () {
    //         load_video();
    //       }, 1000);
    //     } else if ($("#cancelButton").is(":focus")) {
    //       closeVideo();
    //     }
    //   });
    //   break;

    // case "RETRY_EXIT":
    //   set_focus("retryModal", "retryButton");
    //   SN.focus("retryModal");

    //   $("#retryModal").off("sn:enter-down");
    //   $("#retryModal").on("sn:enter-down", function (e) {
    //     console.log("retryModal sn:enter-down");
    //     var modalName = "RETRY_CANCEL";
    //     hide_show_modal(false, modalName);
    //     if ($("#retryButton").is(":focus")) {
    //       console.log("hide popup");
    //       hide_show_modal(false, "EXIT");
    //     } else if ($("#cancelButton").is(":focus")) {
    //       console.log("exit app");
    //       closeVideo();
    //       // tizen.application.getCurrentApplication().exit();
    //       window.close();
    //     }
    //   });
    //   break;
  }
}

//set home page all list
function set_focus(containerId, itemId) {
  console.log("set focus");
  var restrictVal = "self-first";
  if (containerId == "EXIT" || containerId == "RETRY_CANCEL")
    restrictVal = "self-only";

  SN.remove(containerId);
  SN.add({
    id: containerId,
    selector: "#" + containerId + " .focusable",
    restrict: restrictVal,
    defaultElement: "#" + itemId,
    enterTo: "last-focused",
  });
  SN.makeFocusable();
}
//home page focusable list
function set_home_item_focus() {
  console.log("set_home_item_focus");
  var restrictVal = "self-first",
    containerId = "",
    itemId = "";

  for (var i = 0; i < _.size(HOME_DATA_ARRAY); i++) {
    containerId = "row_list_" + i;
    itemId = "item_" + i + "_0";
    SN.remove(containerId);
    SN.add({
      id: containerId,
      selector: "#" + containerId + " .focusable",
      restrict: restrictVal,
      defaultElement: "#" + itemId,
      enterTo: "last-focused",
    });
    SN.makeFocusable();
  }

  $('[id^=item_]').on('sn:focused', function (e) {
    console.log("home list item focus...");
    PAGE_INDEX = TAB_INDEX = 0;
    LAST_FOCUSED_ITEM = e.target.id;
    console.log(LAST_FOCUSED_ITEM);
    var i = $("#" + LAST_FOCUSED_ITEM).index();
    CURRENT_ROW = $("#" + LAST_FOCUSED_ITEM).parent().attr("data-index");
    //console.log(CURRENT_ROW);
    FOCUSED_ITEM_DATA = HOME_DATA_ARRAY[CURRENT_ROW]["streams"][i];
    home_topbanner_details_page();

  });

  $('[id^=item_]').on('sn:enter-down', function (e) {
    console.log("hello enter down......");
    PAGE_INDEX = TAB_INDEX = 0;
    LAST_FOCUSED_ITEM = e.target.id;
    var i = $("#" + LAST_FOCUSED_ITEM).index();
    CURRENT_ROW = $("#" + LAST_FOCUSED_ITEM).parent().attr("data-index");
    FOCUSED_ITEM_DATA = HOME_DATA_ARRAY[CURRENT_ROW]["streams"][i];
    home_details_page();
  });


}



//show page focusable list
function set_show_item_focus() {
  console.log("set_show_item_focus");
  var restrictVal = "self-first",
    containerId = "",
    itemId = "";

  for (var i = 0; i < _.size(SHOW_DATA_ARRAY); i++) {
    containerId = "show_row_list_" + i;
    itemId = "show_" + i + "_0";
    SN.remove(containerId);
    SN.add({
      id: containerId,
      selector: "#" + containerId + " .focusable",
      restrict: restrictVal,
      defaultElement: "#" + itemId,
      enterTo: "last-focused",
    });
    SN.makeFocusable();
  }

  $('[id^=show_]').on('sn:focused', function (e) {
    console.log("show list item focus...");
    PAGE_INDEX = TAB_INDEX = 1;
    LAST_FOCUSED_ITEM = e.target.id;
    console.log(LAST_FOCUSED_ITEM);
    var i = $("#" + LAST_FOCUSED_ITEM).index();
    CURRENT_ROW = $("#" + LAST_FOCUSED_ITEM).parent().attr("data-index");
    //console.log(CURRENT_ROW);
    FOCUSED_ITEM_DATA = SHOW_DATA_ARRAY["data"][CURRENT_ROW]["streams"][i];
    show_topbanner_details_page();

  });

  $('[id^=show_]').on('sn:enter-down', function (e) {
    console.log("hello enter down......");
    PAGE_INDEX = TAB_INDEX = 1;
    LAST_FOCUSED_ITEM = e.target.id;
    var i = $("#" + LAST_FOCUSED_ITEM).index();
    CURRENT_ROW = $("#" + LAST_FOCUSED_ITEM).parent().attr("data-index");
    FOCUSED_ITEM_DATA = SHOW_DATA_ARRAY["data"][CURRENT_ROW]["streams"][i];
    show_details_page();
  });

}


//Movie page focusable list
function set_movie_item_focus() {
  console.log("set_movie_item_focus");
  var restrictVal = "self-first",
    containerId = "",
    itemId = "";

  for (var i = 0; i < _.size(MOVIE_DATA_ARRAY); i++) {
    containerId = "movie_row_list_" + i;
    itemId = "movie_" + i + "_0";
    SN.remove(containerId);
    SN.add({
      id: containerId,
      selector: "#" + containerId + " .focusable",
      restrict: restrictVal,
      defaultElement: "#" + itemId,
      enterTo: "last-focused",
    });
    SN.makeFocusable();
  }

  $('[id^=movie_]').on('sn:focused', function (e) {
    console.log("movie list item focus...");
    PAGE_INDEX = TAB_INDEX = 2;
    LAST_FOCUSED_ITEM = e.target.id;
    console.log(LAST_FOCUSED_ITEM);
    var i = $("#" + LAST_FOCUSED_ITEM).index();
    CURRENT_ROW = $("#" + LAST_FOCUSED_ITEM).parent().attr("data-index");
    //console.log(CURRENT_ROW);
    FOCUSED_ITEM_DATA = MOVIE_DATA_ARRAY["data"][CURRENT_ROW]["streams"][i];
    movie_topbanner_details_page();

  });



  $('[id^=movie_]').on('sn:enter-down', function (e) {
    console.log("hello enter down......");
    PAGE_INDEX = TAB_INDEX = 2;
    LAST_FOCUSED_ITEM = e.target.id;
    var i = $("#" + LAST_FOCUSED_ITEM).index();
    CURRENT_ROW = $("#" + LAST_FOCUSED_ITEM).parent().attr("data-index");
    FOCUSED_ITEM_DATA = MOVIE_DATA_ARRAY["data"][CURRENT_ROW]["streams"][i];
    movie_details_page();
  });

}



//Search page focusable list
function set_search_item_focus() {
  console.log("set_search_item_focus");
  var restrictVal = "self-first",
    containerId = "",
    itemId = "";

  for (var i = 0; i < _.size(SEARCH_DATA_ARRAY); i++) {
    containerId = "search_list_" + i;
    itemId = "search_item_" + i + "_0";
    SN.remove(containerId);
    SN.add({
      id: containerId,
      selector: "#" + containerId + " .focusable",
      restrict: restrictVal,
      defaultElement: "#" + itemId,
      enterTo: "last-focused",
    });
    SN.makeFocusable();
  }

  $('[id^=search_item_]').on('sn:focused', function (e) {
    console.log("home list item focus...");
    PAGE_INDEX = TAB_INDEX = 4;
    LAST_FOCUSED_ITEM = e.target.id;

  });

  $('[id^=search_item_]').on('sn:enter-down', function (e) {
    console.log("hello enter down......");
    var i = $("#" + e.target.id).index();
    search_details_page(i);
  });


}


