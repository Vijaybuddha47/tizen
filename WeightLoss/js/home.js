
function parse_main_feed() {
  console.log("parse_main_feed");
  // setTimeout(function() {
  spatial_navigation_program();
  SN.focus("home_container");
  // }, 5000);
}

function spatial_navigation_program() {
  manage_spatial_navigation("main_container"); //For menu container
  // manage_spatial_navigation("home_container"); //For menu container
  // manage_spatial_navigation("row_container_inner"); //For menu container
  // manage_spatial_navigation("row_container_inner"); //For menu container
}

function change_screens(className) {
  console.log("change screens...");
  if (className && $("." + className).css("display") == "none") {
      $(".watch-container, .my-video-library, .contact-us-container,.logout-container, .workout-container,.food-tracker-container, .nutritionist-container,.coaching-container,.tele-health-container,.special-offer-container").removeClass("active").hide();
      $("." + className).addClass("active").show();
  }
}
function selected_menu_data(id) {
  if (id == "menu0" && !$(".watch-container").hasClass("active")) {
    MENU_INDEX = 0;
    first_time = false;
    change_screens("watch-container")
  } else if (id == "menu1" && !$(".my-video-library").hasClass("active")) {
    MENU_INDEX = 1;
    change_screens("my-video-library");
  } else if (id == "menu2" && !$(".contact-us-container").hasClass("active")) {
    MENU_INDEX = 2;
    change_screens("contact-us-container");
  } else if (id == "menu3" && !$(".logout-container").hasClass("active")) {
    MENU_INDEX = 3;
    change_screens("logout-container");
  } else if (id == "menu4" && !$(".workout-container").hasClass("active")) {
    MENU_INDEX = 4;
    // alert(jhhhhhhhhhhhhhhhhhhhh);
    change_screens("workout-container");
    getHomeScreenData();
  } else if (id == "menu5" && !$(".food-tracker-container").hasClass("active")) {
    console.log(id);
    MENU_INDEX = 5;
    change_screens("food-tracker-container");
  } else if (id == "menu6" && !$(".nutritionist-container").hasClass("active")) {
    console.log(id);
    MENU_INDEX = 6;
    change_screens("nutritionist-container");
  } else if (id == "menu7" && !$(".coaching-container").hasClass("active")) {
    console.log(id);
    MENU_INDEX = 7;
    change_screens("coaching-container");
  } else if (id == "menu8" && !$(".tele-health-container").hasClass("active")) {
    console.log(id);
    MENU_INDEX = 8;
    change_screens("tele-health-container");
  } else if (id == "menu9" && !$(".special-offer-container").hasClass("active")) {
    console.log(id);
    MENU_INDEX = 9;
    change_screens("special-offer-container");
  }

}


// function sethomeScreenData() {
//   var id = "",
//     str = "",
//     leftFocus = "",
//     rightFocus = "",
//     downFocus = "",
//     upFocus = "",
//     NAVIGATION_INDEX = 30;

//   var totalContent = _.size(HOME_DATA_ARRAY);
//   //console.log(totalContent);
//   str += '<div class="home-data-container">';
//   str += '<div class="top-banner-detail" id="top_banner_details"></div>';
//   str += '<div class="home-list-container" id="home_list_container">';
//   for (var j = 0; j < totalContent; j++) {
//     var totalItem = _.size(HOME_DATA_ARRAY[j]["streams"]);
//     str += '<div class="row-list">';
//     str += '<h2 class="row-heading">' + HOME_DATA_ARRAY[j]["category"] + "</h2>";
//     str += '<div class="video_listing">';
//     str += '<ul class="list-items" id="row_list_' + j + '" data-index="' + j + '" >';

//     for (var i = 0; i < totalItem; i++) {
//       id = ' id = "item_' + j + "_" + i + '"';

//       upFocus = ' data-sn-up="null" ';
//       downFocus = ' data-sn-down="null" ';

//       if (i == totalItem - 1) rightFocus = ' data-sn-right="null"';
//       else rightFocus = 'data-sn-right="#item_' + j + "_" + (i + 1) + '" ';

//       if (i == 0) leftFocus = ' data-sn-left="#home"';
//       else leftFocus = ' data-sn-left="#item_' + j + "_" + (i - 1) + '" ';

//       str += '<li class="item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
//       if (HOME_DATA_ARRAY[j]["streams"][i]["stream_type"] == "M")
//         str += '<img class="home_thumbnail_image" src="' + HOME_DATA_ARRAY[j]["streams"][i]["stream_thumbnail"] + '" alt="' + HOME_DATA_ARRAY[j]["streams"][i]["stream_title"] + '">';
//       else if (HOME_DATA_ARRAY[j]["streams"][i]["stream_type"] == "S")
//         str += '<img class="home_thumbnail_image" src="' + HOME_DATA_ARRAY[j]["streams"][i]["show_image"] + '" alt="' + HOME_DATA_ARRAY[j]["streams"][i]["show_name"] + '">';

//       str += "</li>";
//     }

//     NAVIGATION_INDEX++;
//     str += "</div>";
//     str += "</div>";
//     str += "</ul>";
//   }
//   str += '</div></div>'

//   show_hide_screens(screen + "_container");
//   $("#" + screen + "_container").html(str);

//   $(".nav-container").addClass("minimize");
//   $(".logo-img").hide();
//   $(".selected").removeClass("selected");
//   $("#" + SELECTED_MENU).addClass("selected");

//   //set_home_item_focus();
//   set_details_item_focus();
//   $("#loader").hide();
//   SN.focus("row_list_0");
// }

