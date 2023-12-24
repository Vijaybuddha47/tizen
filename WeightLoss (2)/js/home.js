var Second_item_index = "";
var DEPENDENT_PAGE_INDEX = "";  //  11/12
function parse_main_feed() {
  console.log("parse_main_feed");
  spatial_navigation_program();
  SN.focus("images_container");
  first_selected_menu_data("menu4", 0);
  SN.focus("category_list_0");
  PreviewVideoPlayerData();
}

function spatial_navigation_program() {
  manage_spatial_navigation("main_container"); //For menu container
  manage_spatial_navigation("main_details_page_container"); //For menu container
  manage_spatial_navigation("contact_us_container"); //For menu container
  manage_spatial_navigation("food_tracker_container"); //For menu container
  manage_spatial_navigation("logout_container"); //For menu container
  manage_spatial_navigation("full_detail_page_container"); //For menu container
  manage_spatial_navigation("watch_pop_first_container"); //For menu container
  manage_spatial_navigation("watch_pop_second_container"); //For menu container
  manage_spatial_navigation("watch_pop_third_container"); //For menu container
  manage_spatial_navigation("images_container"); //For menu container
  manage_spatial_navigation("my_video_details_container"); //For menu container
  manage_spatial_navigation("program_episodes_container"); //For menu container
  manage_spatial_navigation("modal_container"); //For menu container
}


function change_screens(className) {
  console.log("change screens...");
  if (className && $("." + className).css("display") == "none") {
    $(".outer-container,.logout-container, .food-tracker-container,.video-details-container,.program-episodes-container,.main-details-page-container,.video-container").removeClass("active").hide();
    $("." + className).addClass("active").show();
  }
}


// function second_selected_menu_data(id) {
//   if (id == "menu4") {
//     MENU_INDEX = 4;
//     tabIndex = 0;
//     // alert(jhhhhhhhhhhhhhhhhhhhh);
//     change_screens("outer-container");
//     getHomeScreenData(0, tabIndex);

//   } else if (id == "menu6") {
//     MENU_INDEX = 6;
//     tabIndex = 2;
//     change_screens("outer-container");
//     getHomeScreenData(0, tabIndex);
//   } else if (id == "menu7") {
//     console.log(id);
//     tabIndex = 3;
//     MENU_INDEX = 7;
//     change_screens("outer-container");
//     getHomeScreenData(0, tabIndex);
//   } else if (id == "menu8") {
//     console.log(id);
//     tabIndex = 4;
//     MENU_INDEX = 8;
//     change_screens("outer-container");
//     gettelehelthScreenData(0, tabIndex);
//   } else if (id == "menu9") {
//     console.log(id);
//     MENU_INDEX = 9;
//     tabIndex = 5;
//     change_screens("outer-container");
//     getSpecialofferData();
//   }

// }

function first_selected_menu_data(id) {
  if (id == "menu0" && !$(".watch-container").hasClass("active")) {
    MENU_INDEX = PAGE_INDEX = 0;
    change_screens("watch-container")
  } else if (id == "menu1") {
    MENU_INDEX = PAGE_INDEX  = 11;
    change_screens("video-details-container");
    $(".row-container-inner").hide();
    $(".images-container").hide();
    $(".image-banner-container").hide();
    $(".home-container").hide();
    $(".watch-heading").hide();
    PREVIEW_PLAYER.setSrc("");
    getVideoLibraryData(0);
  } else if (id == "menu2") {
    MENU_INDEX = PAGE_INDEX  = 2;
    change_screens("contact-us-container");
     $(".outer-container").show();
    show_hide_popups(id);
  } else if (id == "menu3" && !$(".login-container").hasClass("active")) {
    MENU_INDEX = PAGE_INDEX  = 3;
    change_screens("login-container");
    $(".logout-container").show();
    SN.focus("#no_okButton");
    // window.location.href = "login.html";
  }else if (id == "menu4") {
    MENU_INDEX = PAGE_INDEX = 4;
    tabIndex = 0;
    // alert(jhhhhhhhhhhhhhhhhhhhh);
    change_screens("outer-container");
    getHomeScreenData(0, tabIndex);

  } else if (id == "menu5") {
    console.log(id);
    MENU_INDEX = PAGE_INDEX  = 5;
    // change_screens("food-tracker-container");
    show_hide_popups(id);
    $(".outer-container").show();
    // getHomeScreenData(type);
  }
   else if (id == "menu6") {
    MENU_INDEX = PAGE_INDEX = 6;
    tabIndex = 2;
    change_screens("outer-container");
    getHomeScreenData(0, tabIndex);
  } else if (id == "menu7") {
    console.log(id);
    tabIndex = 3;
    MENU_INDEX = PAGE_INDEX = 7;
    change_screens("outer-container");
    getHomeScreenData(0, tabIndex);
  } else if (id == "menu8") {
    console.log(id);
    tabIndex = 4;
    MENU_INDEX = PAGE_INDEX  = 8;
    change_screens("outer-container");
    gettelehelthScreenData(0, tabIndex);
  } else if (id == "menu9") {
    console.log(id);
    MENU_INDEX = PAGE_INDEX = 9;
    tabIndex = 5;
    change_screens("outer-container");
    getSpecialofferData();
  }

}


function show_hide_popups(id, message, modalName) {
  if (id == "menu2") {
    $("#contact_us_container").show();
    SN.focus("#okButton");
  } else if (id == "menu5") {
    $("#food_tracker_container").show();
    SN.focus("#food_okButton");
  }
}

function detail_page_container() {
  console.log("detail_page_container.....");
  var str = "";
  str += '<div class="item-description-box">';
  $("#screenBackground").attr("src", SELECTED_ITEM_DATA["image"]);
  str += '<div class="top-item-title" id="streamTitle">' + SELECTED_ITEM_DATA["title"] + '</div>';
  str += ' <div class="top-item-info">' + SELECTED_ITEM_DATA["minidescription"] + '</div>';
  // str += '<div class="top-item-desc" id="streamDisc">' + SELECTED_ITEM_DATA["fulldescription"] + '</div>';

  str += "</div>";
  $("#details_container").html(str);

}

function Sepecial_detail_page_container() {
  console.log("Sepecial_detail_page_container.....");
  var str = "";
  str += '<div class="special-item-description-box">';
  $("#screenBackground").attr("src", SELECTED_ITEM_DATA["image"]);
  str += '<div class="special-item-title" id="streamTitle">' + SELECTED_ITEM_DATA["name"] + '</div>';
  str += ' <div class="special-item-info">' + SELECTED_ITEM_DATA["content"] + '</div>';
  str += ' <div class="special-item-info">' + SELECTED_ITEM_DATA["description"] + '</div>';
  // str += '<div class="top-item-desc" id="streamDisc">' + SELECTED_ITEM_DATA["fulldescription"] + '</div>';

  str += "</div>";
  $("#details_container").html(str);

}

function setSpecialScreenData() {
  var heading = new Array(
    "Free Podcast",
    "Free Video Trailer",
    "Free Education Video",
    "Free Testimonials Video",
    "Free Video Collection"
  );
  var id = "",
    str = "",
    leftFocus = '',
    rightFocus = '',
    downFocus = '',
    upFocus = '',
    sortedData = [];
  var totalContent = _.size(SPECIAL_DATA_ARRAY);
  console.log(totalContent);
  str += '<div class="home-data-container" id="home_data_container">';

  for (var j = 0; j < 5; j++) {
    str += '<div class="row-list">';
    str += '<h2 class="outer-heading">' + heading[j] + '</h2>';
    str += '<div class="video_listing">';
    str += '<ul class="category-list" id="special_category_list_' + j + '" data-index="' + j + '" >';

    var totalItem = _.size(SPECIAL_DATA_ARRAY['special_offers']);
    var k = 0;
    sortedData[j] = [];

    var min = j * 10000;
    var max = (j + 1) * 10000;

    for (var i = 0; i < totalItem; i++) {
      id = ' id = "special_cat_item_' + j + '_' + i + '"';

      upFocus = ' data-sn-up="null" ';
      downFocus = ' data-sn-down="null" ';

      if (i == (totalItem - 1)) rightFocus = ' data-sn-right="null"';
      else rightFocus = ' data-sn-right="#special_cat_item_' + j + '_' + (i + 1) + '" ';

      if (i == 0) leftFocus = ' data-sn-left="#menu2"';
      else leftFocus = ' data-sn-left="#special_cat_item_' + j + '_' + (i - 1) + '" ';

      if ((Number(SPECIAL_DATA_ARRAY["special_offers"][i]["order"]) > min) && (Number(SPECIAL_DATA_ARRAY["special_offers"][i]["order"]) <= max)) {
        console.log(k);
        str += '<li class="cat-item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " data-index="+i+" >";
        str += '<img class="cat-img-thumnails" src="' + SPECIAL_DATA_ARRAY['special_offers'][i]["image"] + '" alt="' + SPECIAL_DATA_ARRAY["special_offers"][i]["subtitle"] + '">';
        str += "</li>";
        sortedData[j][k] = SPECIAL_DATA_ARRAY['special_offers'][i];
        k++;

      }
    }
    NAVIGATION_INDEX++;

    str += '</ul>';
    str += '</div>';
    str += '</div>';
  }
  str += '</div>';
  // console.log(str);
  $("#outer_container").html(str);
  set_special_offer_list_focus(0);
  // SN.focus("special_category_list_0");
  //console.log(sortedData);
}



// function setMyvideoScreenData() {
//   var id = "";
//   var str = "",
//     leftFocus = "",
//     rightFocus = "",
//     downFocus = "",
//     upFocus = "",
//     NAVIGATION_INDEX = 30;
//   var totalItem = _.size(SPECIAL_DATA_ARRAY);
//   var index = 0;
//   //console.log(totalItem);
//   str += '<div class="home-data-container" id="home_data_container">';
//   for (var j = 0; j < totalItem; j++) {
//     str += '<div class="row-list">';
//     str += '<h2 class="outer-heading">Free Podcast</h2>';
//     str += '<div class="video_listing">';
//     var totalItem = _.size(SPECIAL_DATA_ARRAY['special_offers']);
//     str += '<ul class="category-list" id="special_category_list_' + index + '" data-index="' + index + '" >';
//     for (var i = 0; i < totalItem; i++) {
//       if (SPECIAL_DATA_ARRAY["special_offers"][i]["order"] > 0 && SPECIAL_DATA_ARRAY["special_offers"][i]["order"] <= 10000) {
//         id = ' id = "special_cat_item_' + index + '_' + i + '"';

//         upFocus = ' data-sn-up="null" ';
//         downFocus = ' data-sn-down="null" ';

//         if (i == (totalItem - 1)) rightFocus = ' data-sn-right="null"';
//         else rightFocus = ' data-sn-right="#special_cat_item_' + index + '_' + (i + 1) + '" ';

//         if (i == 0) leftFocus = ' data-sn-left="#menu0"';
//         else leftFocus = ' data-sn-left="#special_cat_item_' + index + '_' + (i - 1) + '" ';



//         str += '<li class="cat-item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
//         str += '<img class="cat-img-thumnails" src="' + SPECIAL_DATA_ARRAY['special_offers'][i]["image"] + '" alt="' + SPECIAL_DATA_ARRAY["special_offers"][i]["subtitle"] + '">';
//         str += "</li>";
//       }
//     }
//     index = index + 1;
//     i++;
//     str += "</div>";
//     str += "</div>";
//     str += "</ul>";
//   }
//   str += '</div>';
//   // console.log(str);
//   $("#outer_container").html(str);
//   set_special_offer_list_focus(0);
//   SN.focus("special_category_list_0");
//   console.log(sortedData);
// }

function main_details_page_container() {
  PAGE_INDEX = 13;
  console.log("detail_page_container.....");
  var str = "";
  str += '<div class="item-description-box" id="main_details_box">';
  str += '<div class="item">';
  str += '<div class="bg-image">';
  str += '<img class="background-thumnails" src="' + SELECTED_ITEM_DATA["image"] + '" >';
  str += "</div>";
  str += '<div class="border-background">';
  str += "</div>";
  str += '<div class="image-list" id="image_list">';
  str += '<img class="thumnails" src="' + SELECTED_ITEM_DATA["image"] + '" >';
  str += '<span class="play-button focusable" id="play_button">PLAY</span>';
  str += '</div>';
  str += '<div class="row-container">';
  str += '<div class="details-item-title" id="streamTitle">' + SELECTED_ITEM_DATA["title"] + '</div>';
  str += '<div class="subtitle-item-title" id="streamTitle">' + SELECTED_ITEM_DATA["subtitle"] + '</div>';
  str += ' <div class="details-item-info">' + SELECTED_ITEM_DATA["minidescription"] + '</div>';
  str += '<div class="details-item-desc" id="streamDisc">' + SELECTED_ITEM_DATA["fulldescription"] + '</div>';
  str += "</div>";
  str += "</div>";
  str += "</div>";
  $("#main_details_page_container").html(str);
  $(".main-details-page-container").show();

}

function full_detail_page_container() {
  PAGE_INDEX  = 14;
  // var Item_Index = PAGE_INDEX  = 14;
  // console.log(Item_Index);
  console.log("full_detail_page_container.....");
  var str = "";
  str += '<div class="item-desc-box">';
  $("#second_screenBackground").attr("src", SELECTED_ITEM_DATA["image"]);
  str += '<div class="top-item-title" id="streamTitle">' + SELECTED_ITEM_DATA["title"] + '</div>';
  str += ' <div class="top-item-info">' + SELECTED_ITEM_DATA["minidescription"] + '</div>';
  str += '<div class="top-item-desc" id="streamDisc">' + SELECTED_ITEM_DATA["fulldescription"] + '</div>';
  str += "</div>";
  $("#watch_details_container").html(str);
 

}