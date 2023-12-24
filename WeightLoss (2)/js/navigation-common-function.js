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

function manage_spatial_navigation(containerClass) {
  switch (containerClass) {
    case "main_container":
      console.log("images container");
      set_focus("images_container", "menu0");
      console.log("images container..................");
      // When menu foucs
      $("#images_container").on("sn:focused", function (e) {
        $(".main-container").addClass("wide_menu_container");
        FIRST_PAGE_FOCUSED_ITEM = e.target.id;
      });
      // When menu enter
      $("#images_container").on("sn:enter-down", function (e) {
      });
      console.log("images container..................");
      // When menu foucs
      set_focus("menu_list", "menu1");
      $("#menu_list").on("sn:focused", function (e) {
        console.log("left sidebar button enter... " + id);
        var id = e.target.id;
        var index = $("#" + id).index();
        FIRST_PAGE_FOCUSED_ITEM = e.target.id;
        // PAGE_INDEX = TAB_INDEX = MENU_INDEX = $("#" + e.target.id).index();
        // $("#data_category_list li").removeClass("selected");
        // $("#" + e.target.id).addClass("selected");
        // second_selected_menu_data(id, index);
      });

      // When menu enter
      $("#menu_list").on("sn:enter-down", function (e) {
        console.log("left sidebar button enter... " + id);
        var id = e.target.id;
        FIRST_PAGE_FOCUSED_ITEM = e.target.id;
        PAGE_INDEX = TAB_INDEX = MENU_INDEX = $("#" + e.target.id).index();
        var index = $("#" + e.target.id).index();
        // LAST_FOCUSED_ITEM = e.target.id;
        $("#data_category_list li").removeClass("selected");
        $("#" + e.target.id).addClass("selected");
        first_selected_menu_data(id, index);
      });

      break;
    case "main_details_page_container":
      set_focus("main_details_page_container", "play_button");
      // When menu foucs
      $("#play_button").on("sn:focused", function (e) {
      });

      // When menu enter
      $("#play_button").on("sn:enter-down", function (e) {
        console.log("play_button sidebar button enter...");
        VOD_URL = SELECTED_ITEM_DATA["video"];
        console.log(VOD_URL);
        change_screens("video_container");
        $(".main-container").hide();
        // PREVIEW_PLAYER.setSrc("");
        load_video();
      });
      break;

    case "contact_us_container":
      set_focus("contact_us_container", "okButton");
      console.log("contact_us_container container..................");
      // When menu foucs
      $("#contact_us_container").on("sn:focused", function (e) {
      });
      $("#okButton").on("sn:enter-down", function (e) {
        var id = e.target.id;
        $("#contact_us_container").hide();
        SN.focus("#menu2");
      });
      break;

    case "food_tracker_container":
      set_focus("food_tracker_container", "food_okButton");
      console.log("food_tracker_container container..................");
      // When menu foucs
      $("#food_tracker_container").on("sn:focused", function (e) {
      });
      $("#food_okButton").on("sn:enter-down", function (e) {
        var id = e.target.id;
        $("#food_tracker_container").hide();
        SN.focus("#menu5");
      });
      break;
    case "logout_container":
      set_focus("logout_container", "no_okButton");
      console.log("logout_container container..................");
      // When menu foucs
      $("#food_tralogout_containercker_container").on("sn:focused", function (e) {
      });
      $("#no_okButton").on("sn:enter-down", function (e) {
        var id = e.target.id;
        $(".logout-container").hide();
        SN.focus("#menu3");
      });
      $("#yes_okButton").on("sn:enter-down", function (e) {
        var id = e.target.id;
        $(".logout-container").hide();
        window.location.href = "login.html";
      });
      break;
    case "full_detail_page_container":
      set_focus("full_detail_page_container", "watch_button");
      console.log("full_detail_page_container container..................");
      // When menu foucs
      $("#watch_button").on("sn:focused", function (e) {
      });
      $("#watch_button").on("sn:enter-down", function (e) {
        FIRST_PAGE_FOCUSED_ITEM = e.target.id;
        console.log("watch_button button enter...456");
        if (SELECTED_ITEM_DATA['type'] == "NUTRITION" || SELECTED_ITEM_DATA['type'] == "COACHING") {
          $(".watch-pop-second-container").show();
          SN.focus("#pop_second_okButton");
        } else if (SELECTED_ITEM_DATA['type'] == "TELEHEALTH" || SELECTED_ITEM_DATA['type'] == "LIVEFITNESS" || SELECTED_ITEM_DATA['type'] == "LIVENUTRITION") {
          $(".watch-pop-third-container").show();
          SN.focus("#pop_third_okButton");
        } 
        // else if (SELECTED_ITEM_DATA['status'] == "yes") {
        //   VOD_URL = SELECTED_ITEM_DATA['video'];
        //   console.log(VOD_URL);
        //   change_screens("video_container");
        //   $(".main-container").hide();
        //   PREVIEW_PLAYER.setSrc("");
        //   load_video();
        // }
         else if ((SELECTED_ITEM_DATA['type'] == "PROGRAM") && (SELECTED_ITEM_DATA['status'] == "yes")) {
          Second_item_index = 12;
          index = 0;
          console.log(Second_item_index, "testing1111111111111111");
          episodes_page_container(index);
          $(".image-banner-container").hide();
          $(".full-detail-page-container").hide();
          $(".top-second-banner-background").hide();
          $(".program-episodes-container").show();
          $(".outer-container").removeClass("active");
          $(".program-episodes-container").addClass("active");
          SN.focus("program_category_list_0");
        } else {
          $(".watch-pop-first-container").show();
          SN.focus("#pop_first_okButton");
        }

      });
      break;
    case "watch_pop_first_container":
      set_focus("watch_pop_first_container", "pop_first_okbtn");
      console.log("watch_button button enter...123");
      // When menu foucs
      $("#pop_first_okbtn").on("sn:focused", function (e) {

      });

      // When menu enter
      $("#pop_first_okbtn").on("sn:enter-down", function (e) {
        console.log("watch_button button enter...456");
        $(".watch-pop-first-container").hide();
        SN.focus("#watch_button");

      });

      break;
    case "watch_pop_second_container":
      set_focus("watch_pop_second_container", "pop_second_okButton");
      console.log("watch_button button enter...123");
      // When menu foucs
      $("#pop_second_okButton").on("sn:focused", function (e) {

      });

      // When menu enter
      $("#pop_second_okButton").on("sn:enter-down", function (e) {
        console.log("pop_second_okbtn button enter...456");
        $(".watch-pop-second-container").hide();
        SN.focus("#watch_button");

      });

      break;

    case "watch_pop_third_container":
      set_focus("watch_pop_third_container", "pop_third_okButton");
      console.log("watch_button button enter...123");
      // When menu foucs
      $("#pop_third_okButton").on("sn:focused", function (e) {

      });

      // When menu enter
      $("#pop_third_okButton").on("sn:enter-down", function (e) {
        console.log("pop_second_okbtn button enter...456");
        $(".watch-pop-third-container").hide();
        SN.focus("#watch_button");

      });

      break;



    case "EXIT":
      set_focus('exitModal', 'noButton');

      $('#exitModal').on('sn:focused', function (e) {
        console.log("exitModal focus");
      });

      $('#noButton').on('sn:enter-down', function (e) {
        var name = $(".modal_container").attr("data-modal-name");
        // if ($(".modal_container").hasClass("active") && $("#noButton").is(":focus") && name == "EXIT") {
        //   console.log("account_exit focus...");
        //   hide_show_modal(false, 'EXIT');
        //   SN.focus("#menu0");
        // }
        if ($(".modal_container").hasClass("active") && name == "EXIT") {
          console.log("account_exit focus...");
          hide_show_modal(false, 'EXIT');
          SN.focus("#" + FIRST_PAGE_FOCUSED_ITEM);
        }
      });

      $('#yesButton').on('sn:enter-down', function (e) {
        console.log('exit app');
        if ($(".modal_container").attr("data-modal-name") === "EXIT") {
          tizen.application.getCurrentApplication().exit();
        }
      });
      break;
    case "RETRY_CANCEL": set_focus('retryModal', 'retryButton');
      SN.focus("#retryButton");

      $('#retryModal').off('sn:enter-down');
      $('#retryModal').on('sn:enter-down', function (e) {
        console.log("retryModal sn:enter-down");
        var modalName = "RETRY_CANCEL";
        hide_show_modal(false, modalName);
        if ($("#retryButton").is(":focus")) {
          setTimeout(function () { load_video(); }, 1000);
        } else if ($("#cancelButton").is(":focus")) {
          hide_show_modal(false, modalName);

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
          closeVideo();
          tizen.application.getCurrentApplication().exit();
          // window.close();
        }
      });
      break;

  }
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

function set_channel_list_focus(row_num) {
  console.log("set homepage list focus");
  var restrictVal = "self-first";
  var total = _.size(DATA_ARRAY);
  for (i = row_num; i < total; i++) {
    var containerId = "category_list_" + i;
    var itemId = "cat_item_" + i + "_0";
    console.log(itemId);
    // if (SN.focus(containerId)) return;
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
  $('[id^=cat_item_]').on('sn:focused', function (e) {
    console.log("home_list item focus...");
    THIRD_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).index());
    SELECTED_ITEM_DATA = DATA_ARRAY[j][i];
    detail_page_container();
    $(".details-container").show();
    $(".row-container-inner").hide();
    $(".images-container").hide();
    $(".watch-heading").hide();
    $(".top-banner-background").show();
    $(".top-second-banner-background").hide();
    // PREVIEW_PLAYER.setSrc("");

  });

  $('[id^=cat_item_]').on('sn:enter-down', function (e) {
    console.log("home_list item enter...");
    // first_item_index = 4;
    THIRD_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).index());
    SELECTED_ITEM_DATA = DATA_ARRAY[j][i];
    full_detail_page_container();
    $(".details-container").hide();
    $(".full-detail-page-container").show();
    $(".outer-container").hide();
    $(".right-list-container").hide();
    $(".watch-heading").hide();
    $(".menu-list").hide();
    $(".top-banner-background").hide();
    $(".top-second-banner-background").show();
    $(".outer-container").removeClass("active");
    $(".full-detail-page-container").addClass("active");
    $(".full-detail-page-container").addClass("active");
    // PREVIEW_PLAYER.setSrc("");
    SN.focus("#watch_button");

    // if (SELECTED_ITEM_DATA['video_type'] == 'WORKOUT') {
    //       detail_page_container();
    //   }

  });
}

function set_tele_health_list_focus(row_num) {
  console.log("set homepage list focus");
  var restrictVal = "self-first";
  var total = _.size(TELE_DATA_ARRAY);
  for (i = row_num; i < total; i++) {
    var containerId = "tele_category_list_" + i;
    var itemId = "tele_cat_item_" + i + "_0";
    console.log(itemId);
    // if (SN.focus(containerId)) return;
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
  $('[id^=tele_cat_item_]').on('sn:focused', function (e) {
    console.log("home_list item focus...");
    THIRD_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).index());
    SELECTED_ITEM_DATA = TELE_DATA_ARRAY[j][i];
    detail_page_container();
    $(".details-container").show();
    $(".row-container-inner").hide();
    $(".images-container").hide();
    $(".watch-heading").hide();
    $(".top-banner-background").show();
    $(".top-second-banner-background").hide();
    // PREVIEW_PLAYER.setSrc("");

  });

  $('[id^=tele_cat_item_]').on('sn:enter-down', function (e) {
    console.log("home_list item enter...");
    THIRD_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).index());
    SELECTED_ITEM_DATA = TELE_DATA_ARRAY[j][i];
    console.log(SELECTED_ITEM_DATA);
    full_detail_page_container();
    $(".details-container").hide();
    $(".full-detail-page-container").show();
    $(".outer-container").hide();
    $(".right-list-container").hide();
    $(".watch-heading").hide();
    $(".menu-list").hide();
    $(".top-banner-background").hide();
    $(".top-second-banner-background").show();
    $(".outer-container").removeClass("active");
    $(".full-detail-page-container").addClass("active");
    // PREVIEW_PLAYER.setSrc("");
    SN.focus("#watch_button");
  });

}

function set_special_offer_list_focus(index) {
  console.log("set homepage list focus");
  var restrictVal = "self-first";
  var total = _.size(SPECIAL_DATA_ARRAY);
  console.log(total);
  for (i = index; i < 5; i++) {
    var containerId = "special_category_list_" + i;
    var itemId = "special_cat_item_" + i + "_0";
    console.log(itemId, i);
    // if (SN.focus(containerId)) return;
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
  $('[id^=special_cat_item_]').on('sn:focused', function (e) {
    console.log("home_list item focus...");
    THIRD_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).attr("data-index"));
    // SELECTED_ITEM_DATA = DATA_ARRAY[j][i];
    SELECTED_ITEM_DATA = SPECIAL_DATA_ARRAY['special_offers'][i];
    Sepecial_detail_page_container();
    $(".details-container").show();
    $(".row-container-inner").hide();
    $(".images-container").hide();
    $(".watch-heading").hide();
    $(".top-banner-background").show();
    $(".top-second-banner-background").hide();
  });

  $('[id^=special_cat_item_]').on('sn:enter-down', function (e) {
    // Second_item_index == 9;
    console.log("home_list item enter...");
    THIRD_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + THIRD_PAGE_FOCUSED_ITEM).attr("data-index"));
    console.log(i);
    SELECTED_ITEM_DATA = SPECIAL_DATA_ARRAY['special_offers'][i];
    VOD_URL = SELECTED_ITEM_DATA['url'];
    console.log(SELECTED_ITEM_DATA, VOD_URL);
    change_screens("video_container");
    $(".main-container").hide();
    PREVIEW_PLAYER.setSrc("");
    load_video();
    //  i = i+1;
  });
}


function set_my_video_list_focus(row_num) {
  console.log("set homepage list focus");
  var restrictVal = "self-first";
  var total = _.size(MY_VIDEO_DATA_ARRAY);
  for (i = row_num; i < total; i++) {
    var containerId = "my_video_category_list_" + i;
    var itemId = "my_video_cat_item_" + i + "_0";
    console.log(itemId);
    // if (SN.focus(containerId)) return;
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
  $('[id^=my_video_cat_item_]').on('sn:focused', function (e) {
    console.log("home_list item focus...");
    PAGE_INDEX = 11;
    // Second_item_index = 11;
  });

  $('[id^=my_video_cat_item_]').on('sn:enter-down', function (e) {
    PAGE_INDEX = 11;
    Second_item_index = 11;
    index = 0;
    console.log(Second_item_index);
    console.log("home_list item enter...");
    SECOND_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + SECOND_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + SECOND_PAGE_FOCUSED_ITEM).index());
    SELECTED_ITEM_DATA = MY_VIDEO_DATA_ARRAY[j][i];
    console.log(SELECTED_ITEM_DATA);
    if (SELECTED_ITEM_DATA['type'] == "PROGRAM") {
      DEPENDENT_PAGE_INDEX = 0;
      // SECOND_PAGE_FOCUSED_ITEM ="";
      FIVE_PAGE_FOCUSED_ITEM = e.target.id;
      Second_item_index = "";
      episodes_page_container(index);
      $(".video-details-container").hide();
      $(".program-episodes-container").show();
      $(".video-details-container").removeClass("active");
      $(".program-episodes-container").addClass("active");
      // manage_spatial_navigation("program_episodes_container");
      // SN.focus("program_category_list_0");
    }
    else {
      main_details_page_container();
      $(".video-details-container").hide();
      $(".video-details-container").removeClass("active");
      $(".main-details-page-container").addClass("selected");
      $(".main-details-page-container").addClass("active");
      manage_spatial_navigation("main_details_page_container");
      SN.focus("#play_button");
    }
  });

}


function set_program_list_focus(row_num) {
  console.log("set homepage list focus");
  var restrictVal = "self-first";
  var total = _.size(MY_PROGRAM_DATA_ARRAY);
  for (i = row_num; i < total; i++) {
    var containerId = "program_category_list_" + i;
    var itemId = "program_cat_item_" + i + "_0";
    console.log(itemId);
    // if (SN.focus(containerId)) return;
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
  $('[id^=program_cat_item_]').on('sn:focused', function (e) {
    console.log("home_list item focus...");
    PAGE_INDEX = TAB_INDEX = 12;
  });

  $('[id^=program_cat_item_]').on('sn:enter-down', function (e) {
    PAGE_INDEX = TAB_INDEX = 12;
    //Second_item_index = 12;
    console.log("home_list item enter...");
    SECOND_PAGE_FOCUSED_ITEM = e.target.id;
    var j = Number($("#" + SECOND_PAGE_FOCUSED_ITEM).parent().attr("data-index"));
    var i = Number($("#" + SECOND_PAGE_FOCUSED_ITEM).index());
    SELECTED_ITEM_DATA = MY_PROGRAM_DATA_ARRAY[j][i];
    console.log(SELECTED_ITEM_DATA, "tseting................")
    main_details_page_container()
    $(".program-episodes-container").hide();
    $(".program-episodes-container").removeClass("active");
    $(".main-details-page-container").addClass("active");
    manage_spatial_navigation("main_details_page_container");
    SN.focus("#play_button");
  });

}