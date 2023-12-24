function spatial_navigation_program() {
  manage_spatial_navigation("menu-container"); //For menu container
  manage_spatial_navigation("account-container"); //For Account container
  manage_spatial_navigation("search-container"); //For Search container
  manage_spatial_navigation("detail_container"); //For Details container
}

function hide_left_side_bar() {
  console.log("hide_left_side_bar");
  if ($(".nav-container").hasClass("minimize")) {
    $(".nav-container").removeClass("minimize");
    $(".logo-img").show();
    SN.focus("#" + SELECTED_MENU);
  } else {
    $(".nav-container").addClass("minimize");
    $(".logo-img").hide();
    $(".selected").removeClass("selected");
    $("#" + SELECTED_MENU).addClass("selected");

    if (MENU_INDEX == 0 || MENU_INDEX == 1 || MENU_INDEX == 2 && $("#menu_container li").is(":focus")) SN.focus("#" + LAST_FOCUSED_ITEM);
    else if (MENU_INDEX == 5) SN.focus("account_information");
    else if (MENU_INDEX == 4) SN.focus("search_box");
  }
  change_menu_focus(SELECTED_MENU);
}

function show_hide_screens(container) {
  console.log("show_hide_screens", container);
  $(".home_container, .show_container, .movie_container, .watchlist_container,.seasons_container,.search_container,.detail_container,.account_container").removeClass("active").hide();
  // console.log("hjhhjhghgygyuyyuyy");
  //   SN.focus("#" + LAST_FOCUSED_ITEM);
  // if($("#"+SELECTED_MENU).index() != MENU_INDEX){
  //   $(".home_container, .show_container, .movie_container, .watchlist_container").removeClass("active").html("");
  // }
  if (container != "") $("." + container).addClass("active").show();
  // $(".search_container,.account_container,.detail_container").removeClass("active").hide();
  if (container != "") $("." + container).addClass("active").show();
  if (MENU_INDEX == 5 || MENU_INDEX == 4) {
    $(".nav-container").addClass("minimize");
    $(".logo-img").hide();
    $(".selected").removeClass("selected");
    $("#" + SELECTED_MENU).addClass("selected");
    if (MENU_INDEX == 5) SN.focus("account_information");
    else if (MENU_INDEX == 4) SN.focus("search_box");
  }
}

function change_menu_focus(id) {
  console.log("change_menu_focus");
  if (id == "search")
    $("#" + id)
      .find("img")
      .attr("src", "./images/Search_Active.png");
  else $("#search").find("img").attr("src", "./images/search_unActive.png");
  if (id == "home")
    $("#" + id)
      .find("img")
      .attr("src", "./images/Home_Active.png");
  else $("#home").find("img").attr("src", "./images/Home_unActive.png");
  if (id == "show")
    $("#" + id)
      .find("img")
      .attr("src", "./images/Tv_Active.png");
  else $("#show").find("img").attr("src", "./images/tv_unActive.png");
  if (id == "movie")
    $("#" + id)
      .find("img")
      .attr("src", "./images/Movies_Active.png");
  else $("#movie").find("img").attr("src", "./images/movies_unActive.png");
  if (id == "watchlist")
    $("#" + id)
      .find("img")
      .attr("src", "./images/Like_Active.png");
  else $("#watchlist").find("img").attr("src", "./images/like_unActive.png");
  if (id == "account")
    $("#" + id)
      .find("img")
      .attr("src", "./images/Profile_Active.png");
  else $("#account").find("img").attr("src", "./images/profile_unActive.png");
}

//home page Api set
// function setHomeScreen() {
//   var id = "",
//     str = "",
//     leftFocus = "",
//     rightFocus = "",
//     downFocus = "",
//     upFocus = "";

//   var totalContent = _.size(HOME_DATA_ARRAY);
//   // str += '<div><img src="images/overlay-img.png" class="overlay-img"></div>';
//   str += '<div class="home-data-container">';
//   str += '<div class="top-banner-detail" id="top_banner_details"></div>';
//   str += '<div class="home-list-container" id="home_list_container">';
//   for (j = 0; j < totalContent; j++) {
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
//       // else rightFocus = 'data-sn-right="#item_null" ';

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
//   show_hide_screens("home_container");
//   $("#home_container").html(str);
//   set_home_item_focus();
//   $("#loader").hide();
//   SN.focus("row_list_0");
// }


//home page Api set
function setScreenData(screen) {
  var id = "",
    str = "",
    leftFocus = "",
    rightFocus = "",
    downFocus = "",
    upFocus = "",
    NAVIGATION_INDEX = 30;

  var totalContent = _.size(HOME_DATA_ARRAY);
  //console.log(totalContent);
  str += '<div class="home-data-container">';
  str += '<div class="top-banner-detail" id="top_banner_details"></div>';
  str += '<div class="home-list-container" id="home_list_container">';
  for (var j = 0; j < totalContent; j++) {
    var totalItem = _.size(HOME_DATA_ARRAY[j]["streams"]);
    str += '<div class="row-list">';
    str += '<h2 class="row-heading">' + HOME_DATA_ARRAY[j]["category"] + "</h2>";
    str += '<div class="video_listing">';
    str += '<ul class="list-items" id="row_list_' + j + '" data-index="' + j + '" >';

    for (var i = 0; i < totalItem; i++) {
      id = ' id = "item_' + j + "_" + i + '"';

      upFocus = ' data-sn-up="null" ';
      downFocus = ' data-sn-down="null" ';

      if (i == totalItem - 1) rightFocus = ' data-sn-right="null"';
      else rightFocus = 'data-sn-right="#item_' + j + "_" + (i + 1) + '" ';

      if (i == 0) leftFocus = ' data-sn-left="#home"';
      else leftFocus = ' data-sn-left="#item_' + j + "_" + (i - 1) + '" ';

      str += '<li class="item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
      if (HOME_DATA_ARRAY[j]["streams"][i]["stream_type"] == "M")
        str += '<img class="home_thumbnail_image" src="' + HOME_DATA_ARRAY[j]["streams"][i]["stream_thumbnail"] + '" alt="' + HOME_DATA_ARRAY[j]["streams"][i]["stream_title"] + '">';
      else if (HOME_DATA_ARRAY[j]["streams"][i]["stream_type"] == "S")
        str += '<img class="home_thumbnail_image" src="' + HOME_DATA_ARRAY[j]["streams"][i]["show_image"] + '" alt="' + HOME_DATA_ARRAY[j]["streams"][i]["show_name"] + '">';

      str += "</li>";
    }

    NAVIGATION_INDEX++;
    str += "</div>";
    str += "</div>";
    str += "</ul>";
  }
  str += '</div></div>'

  show_hide_screens(screen + "_container");
  $("#" + screen + "_container").html(str);

  $(".nav-container").addClass("minimize");
  $(".logo-img").hide();
  $(".selected").removeClass("selected");
  $("#" + SELECTED_MENU).addClass("selected");

  set_home_item_focus();
  $("#loader").hide();
  SN.focus("row_list_0");
}


//show page Api set
function setShowScreen() {
  var id = "",
    str = "",
    leftFocus = "",
    rightFocus = "",
    downFocus = "",
    upFocus = "";

  var totalContent = _.size(SHOW_DATA_ARRAY);
  // str += '<div><img src="images/overlay-img.png" class="overlay-img"></div>';
  str += '<div class="home-data-container">';
  str += '<div class="top-banner-detail" id="show_top_banner_details"></div>';
  str += '<div class="home-list-container" id="home_list_container">';
  for (j = 0; j < totalContent; j++) {
    var totalItem = _.size(SHOW_DATA_ARRAY["data"][j]["streams"]);

    str += '<div class="row-list">';
    str += '<h2 class="row-heading">' + SHOW_DATA_ARRAY["data"][j]["category"] + "</h2>";
    str += '<div class="video_listing">';
    str += '<ul class="list-items" id="show_row_list_' + j + '" data-index="' + j + '" >';

    for (var i = 0; i < totalItem; i++) {
      id = ' id = "show_' + j + "_" + i + '"';

      upFocus = ' data-sn-up="null" ';
      downFocus = ' data-sn-down="null" ';

      if (i == totalItem - 1) rightFocus = ' data-sn-right="null"';
      else rightFocus = 'data-sn-right="#show_' + j + "_" + (i + 1) + '" ';

      if (i == 0) leftFocus = ' data-sn-left="#show"';
      else leftFocus = ' data-sn-left="#show_' + j + "_" + (i - 1) + '" ';

      str += '<li class="item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
      str += '<img class="home_thumbnail_image" src="' + SHOW_DATA_ARRAY["data"][j]["streams"][i]["show_image"] + '" alt="' + SHOW_DATA_ARRAY["data"][j]["streams"][i]["show_name"] + '">';
      str += "</li>";
    }

    NAVIGATION_INDEX++;
    str += "</div>";
    str += "</div>";
    str += "</ul>";
  }
  str += '</div></div>'
  show_hide_screens("show_container");
  $("#show_container").html(str);
  $(".nav-container").addClass("minimize");
  $(".logo-img").hide();
  $(".selected").removeClass("selected");
  $("#" + SELECTED_MENU).addClass("selected");
  set_show_item_focus();
  $("#loader").hide();
  SN.focus("show_row_list_0");
}

//Movie page Api set
function setMovieScreen() {
  var id = "",
    str = "",
    leftFocus = "",
    rightFocus = "",
    downFocus = "",
    upFocus = "";

  var totalContent = _.size(MOVIE_DATA_ARRAY);

  str += '<div class="home-data-container">';
  str += '<div class="top-banner-detail" id="movie_banner_details"></div>';
  str += '<div class="home-list-container" id="home_list_container">';
  for (j = 0; j < totalContent; j++) {
    var totalItem = _.size(MOVIE_DATA_ARRAY["data"][j]["streams"]);

    str += '<div class="row-list">';
    str += '<h2 class="row-heading">' + MOVIE_DATA_ARRAY["data"][j]["category"] + "</h2>";
    str += '<div class="video_listing">';
    str += '<ul class="list-items" id="movie_row_list_' + j + '" data-index="' + j + '" >';

    for (var i = 0; i < totalItem; i++) {
      id = ' id = "movie_' + j + "_" + i + '"';

      upFocus = ' data-sn-up="null" ';
      downFocus = ' data-sn-down="null" ';

      if (i == totalItem - 1) rightFocus = ' data-sn-right="null"';
      else rightFocus = 'data-sn-right="#movie_' + j + "_" + (i + 1) + '" ';
      // else rightFocus = 'data-sn-right="#item_null" ';

      if (i == 0) leftFocus = ' data-sn-left="#movie"';
      else leftFocus = ' data-sn-left="#movie_' + j + "_" + (i - 1) + '" ';
      str += '<li class="item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
      str += '<img class="home_thumbnail_image" src="' + MOVIE_DATA_ARRAY["data"][j]["streams"][i]["stream_thumbnail"] + '" alt="' + MOVIE_DATA_ARRAY["data"][j]["streams"][i]["stream_title"] + '">';
      str += '</li>';
    }

    NAVIGATION_INDEX++;
    str += "</div>";
    str += "</div>";
    str += "</ul>";
  }
  str += '</div></div>'
  show_hide_screens("movie_container");
  $("#movie_container").html(str);
  $(".nav-container").addClass("minimize");
  $(".logo-img").hide();
  $(".selected").removeClass("selected");
  $("#" + SELECTED_MENU).addClass("selected");
  set_movie_item_focus();
  $("#loader").hide();
  SN.focus("movie_row_list_0");
}



//season page Api set
function setSeasonScreen() {
  var id = "",
    str = "",
    leftFocus = "",
    rightFocus = "",
    downFocus = "",
    upFocus = "";

  var totalContent = _.size(SEASON_DATA_ARRAY);
  console.log("totalContent");
  $("#episodescreenBackground").attr("src", FOCUSED_ITEM_DATA["show_image"]);
  str += '<div class="episodes-screen-background"><img id="episodescreenBackground" src="images/bg.png" alt="Background"></div>';
  str += '<div class="row_container" id="row_container">';
  str += '<div class="left-container">';
  str += '<div class="item-description-box">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="subscriber">SUBSCRIBER</span></div>';
  str += '<div class="top-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["show_name"] + '<span class="home_reddot"></span></div>';
  str += '<div class="top-item-info"><span>' + (FOCUSED_ITEM_DATA["release_year"] ? FOCUSED_ITEM_DATA["release_year"] : new Date().getFullYear()) + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + (FOCUSED_ITEM_DATA["duration"] ? FOCUSED_ITEM_DATA["duration"] : "0 Mins") + '</span><img src="images/HD Icon.png"></div>';

  str += '<ul class="left-season-list" id="seasons">';
  for (i = 0; i < totalContent; i++) {

    id = ' id = "season_' + i + '" ';

    rightFocus = ' data-sn-right="#right_season_0"';
    leftFocus = ' data-sn-left="null"';

    if (i == totalContent - 1) downFocus = ' data-sn-down="null" ';
    else downFocus = 'data-sn-down="#season_' + (i + 1) + '" ';

    if (i == 0) upFocus = ' data-sn-up="null" ';
    else upFocus = ' data-sn-up="#season_' + (i - 1) + '" ';

    str += '<li class="season focusable active" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
    str += '<div class="season-list" id="season_list">' + SEASON_DATA_ARRAY[i]["season_name"] + '</div>';
    str += "</li>";
  }
  str += "</ul>";
  str += '</div>';
  str += '</div>';
  str += '<div class="right-container"></div>';

  getEpisodesData(SEASON_DATA_ARRAY[0]["season_id_PK"]);

  $(".seasons_container").html(str);
}

function setEpisodeList() {
  console.log("setEpisodeList");

  var id = "",
    str = "",
    leftFocus = "",
    rightFocus = "",
    downFocus = "",
    upFocus = "";
  $(".right-container").html("");
  var totalepisode = _.size(EPISODES_DATA_ARRAY);

  str += '<ul class="right-season-list" id="episodeList" >';
  for (j = 0; j < totalepisode; j++) {
    id = ' id = "episode_' + j + '"';

    leftFocus = ' data-sn-left="null" ';
    rightFocus = ' data-sn-right="null"';


    if (j == totalepisode - 1) downFocus = ' data-sn-down="null" ';
    else downFocus = 'data-sn-down="#episode_' + (j + 1) + '" ';

    if (j == 0) upFocus = ' data-sn-up="null" ';
    else upFocus = ' data-sn-up="#episode_' + (j - 1) + '" ';

    str += '<li class="episodes focusable active" tabindex="11" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
    str += '<img class="episodes_thumbnail_image" src="' + EPISODES_DATA_ARRAY[j]["stream_thumbnail"] + '" alt="' + EPISODES_DATA_ARRAY[j]["season_name"] + '"><span class="des_episodes">' + '<h1 class="episodes-headings">' + EPISODES_DATA_ARRAY[j]["stream_title"] + '</h1>' + EPISODES_DATA_ARRAY[j]["stream_short_desc"] + '</span>';
    str += "</li>";
  }
  str += "</ul>";


  show_hide_screens("seasons_container");
  $("#loader").hide();
  $(".right-container").append(str);
  $(".nav-container").addClass("minimize");
  $(".logo-img").hide();
  $(".active").removeClass("active");
  $("#" + SELECTED_SEASON).addClass("active");
  manage_spatial_navigation("seasons_container");
  manage_spatial_navigation("episode_list");
  // SN.focus("seasons");
  SN.focus("episodeList");
}


//top banner details
function home_topbanner_details_page() {
  console.log("home_topbanner_details_page.....");
  var str = "";
  str += '<div class="item-description-box">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="subscriber">SUBSCRIBER</span></div>';

  if (FOCUSED_ITEM_DATA["stream_type"] == "M") {
    $("#screenBackground").attr("src", FOCUSED_ITEM_DATA["stream_banner"]);
    var totalhours = Math.floor(FOCUSED_ITEM_DATA["duration"] / 60) + "hr " + (FOCUSED_ITEM_DATA["duration"] % 60) + "Min ";

    str += '<div class="top-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["stream_title"] + '<span class="home_reddot"></span></div>';
    str += ' <div class="top-item-info"><span>' + FOCUSED_ITEM_DATA["release_year"] + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + totalhours + '</span><img src="images/HD Icon.png"></div>';
    str += '<div class="top-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["stream_short_desc"] + '</div>';
  } else {
    $("#screenBackground").attr("src", FOCUSED_ITEM_DATA["show_image"]);
    str += '<div class="top-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["show_name"] + '<span class="home_reddot"></span></div>';
    str += ' <div class="top-item-info"><span>' + (FOCUSED_ITEM_DATA["release_year"] ? FOCUSED_ITEM_DATA["release_year"] : new Date().getFullYear()) + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + (FOCUSED_ITEM_DATA["duration"] ? FOCUSED_ITEM_DATA["duration"] : "0 Mins") + '</span><img src="images/HD Icon.png"></div>';
    str += '<div class="top-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["show_short_desc"] + '</div>';
  }
  str += "</div>";
  //$("#top_banner_details").html("");
  $("#top_banner_details").html(str);

}


//top banner details
function show_topbanner_details_page() {
  console.log("show_topbanner_details_page.....");
  var str = "";
  str += '<div class="item-description-box">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="subscriber">SUBSCRIBER</span></div>';
  var totalhours = Math.floor(FOCUSED_ITEM_DATA["duration"] / 60) + "hr " + (FOCUSED_ITEM_DATA["duration"] % 60) + "Min ";
  $("#screenBackground").attr("src", FOCUSED_ITEM_DATA["show_image"]);
  str += '<div class="top-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["show_name"] + '<span class="home_reddot"></span></div>';
  console.log("hiiiiiiiiiiiiii");
  str += ' <div class="top-item-info"><span>' + (FOCUSED_ITEM_DATA["release_year"] ? FOCUSED_ITEM_DATA["release_year"] : new Date().getFullYear()) + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + (FOCUSED_ITEM_DATA["duration"] ? FOCUSED_ITEM_DATA["duration"] : "0 Mins") + '</span><img src="images/HD Icon.png"></div>';
  str += '<div class="top-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["short_description"] + '</div>';

  str += "</div>";

  //$("#top_banner_details").html("");
  $("#show_top_banner_details").html(str);

}


//top banner details
function movie_topbanner_details_page() {
  console.log("movie_topbanner_details_page.....");
  var str = "";
  str += '<div class="item-description-box">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="subscriber">SUBSCRIBER</span></div>';
  var totalhours = Math.floor(FOCUSED_ITEM_DATA["duration"] / 60) + "hr " + (FOCUSED_ITEM_DATA["duration"] % 60) + "Min ";

  $("#screenBackground").attr("src", FOCUSED_ITEM_DATA["stream_banner"]);
  str += '<div class="top-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["stream_title"] + '<span class="home_reddot"></span></div>';
  str += ' <div class="top-item-info"><span>' + FOCUSED_ITEM_DATA["release_year"] + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + totalhours + '</span><img src="images/HD Icon.png"></div>';
  str += '<div class="top-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["stream_short_desc"] + '</div>';
  str += "</div>";
  //$("#top_banner_details").html("");
  $("#movie_banner_details").html(str);

}


//account details
function account_details_page() {
  console.log("account_details_page.....");
  $("#username").text(localStorage.getItem("name"));
  $("#email").text(localStorage.getItem("email"));
  $("#expiry").text("Weekly Subscription $1/ week valid until");
}


function request_search_results() {
  console.log('search results request...');
  searchText = get_searched_text();
  if (searchText != "") {
    getSearchData();
  } else {
    console.log('input text enter');
    $(".result_not_found").hide();
    $("#searchInputText").attr("placeholder", "Please enter text here.");

  }
}

function get_searched_text() {
  return $.trim($('#searchInputText').val());
}

function set_search_result() {
  console.log("set_search_result");
  var id = "",
    str = "",
    leftFocus = '',
    rightFocus = '',
    downFocus = '',
    upFocus = '';

  var totalItem = _.size(SEARCH_DATA_ARRAY);
  str += '<h2 class="heading-search">Search Result(' + totalItem + ')</h2>';
  str += '<div class="search-list">';
  str += '<div class="video_listing">';
  str += '<ul class="list-search active" id="row_list_search">';
  if (totalItem > 0) {

    for (var i = 0; i < totalItem; i++) {
      id = ' id = "search_item_' + i + '"';

      if (i < 7) upFocus = ' data-sn-up="#searchInputText" ';
      else upFocus = ' data-sn-up="#search_item_' + (i - 7) + '" ';

      if (i > (totalItem - 7)) downFocus = ' data-sn-down="null" ';
      else downFocus = ' data-sn-down="#search_item_' + (i + 7) + '" ';

      if (i == totalItem) rightFocus = ' data-sn-right="null" ';
      else rightFocus = ' data-sn-right="#search_item_' + (i + 1) + '" ';

      if (i == 0) leftFocus = ' data-sn-left="null" ';
      else leftFocus = ' data-sn-left="#search_item_' + (i - 1) + '" ';

      str += '<li class="item-search focusable" tabindex="10" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
      if (SEARCH_DATA_ARRAY[i]["stream_type"] == "M")
        str += '<img class="home_thumbnail_image" src="' + SEARCH_DATA_ARRAY[i]["stream_thumbnail"] + '" alt="' + SEARCH_DATA_ARRAY[i]["stream_title"] + '">';
      else if (SEARCH_DATA_ARRAY[i]["stream_type"] == "S")
        str += '<img class="home_thumbnail_image" src="' + SEARCH_DATA_ARRAY[i]["show_image"] + '" alt="' + SEARCH_DATA_ARRAY[i]["show_name"] + '">';
      str += "</li>";
    }

    str += '</div>';
    str += '</div>';
    str += '</ul>';

    $(".search_container").show();
    $("#msg_box").empty();
    $("#second_search_div").show();
    $("#loader").hide();
    $("#second_search_div").html(str);
    SN.focus('#search_item_0');
    set_search_item_focus();
  } else {
    console.log("Result not found");
    $("#loader").hide();
    $("#second_search_div").hide();
    $("#msg_box").css("display", "block");
    $("#msg_box").html("<h2 class='search_heading'>No record found.</h2>");
  }

  // }
}

//detail_container page Api set
function home_details_page() {
  console.log("home_details_page.....");
  var str = "";
  leftFocus = '',
    rightFocus = '',
    downFocus = '',
    upFocus = '';
  LIKE_DATA = "images/like.png";
  DISLIKE_DATA = "images/dislike.png";
  str += '<div class="item-detail-des-box" id="item-detail-des">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="details_subscriber">SUBSCRIBER</span></div>';
  var totalhours = Math.floor(FOCUSED_ITEM_DATA["duration"] / 60) + "hr " + (FOCUSED_ITEM_DATA["duration"] % 60) + "Min ";

  if (FOCUSED_ITEM_DATA["stream_type"] == "M") {
    if (FOCUSED_ITEM_DATA["stream_title"] != "undefined") str += '<div class="detail-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["stream_title"] + '<span class="home_reddot"></span></div>';
    str += ' <div class="detail-item-info"><span>' + FOCUSED_ITEM_DATA["release_year"] + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + totalhours + '</span><img src="images/HD Icon.png"></div>';
    if (FOCUSED_ITEM_DATA["stream_long_description"] != "undefined") str += '<div class="detail-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["stream_short_desc"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Cast:</label>' + FOCUSED_ITEM_DATA["actors"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Directed By:</label>' + FOCUSED_ITEM_DATA["directors"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Language:</label>' + FOCUSED_ITEM_DATA["language"] + '</div>';
    str += '<ul class="details-list active" id="row_details_list">';
    str += '<li class="detail-like-dislike-btn focusable" id="like" tabindex="0" data-sn-up="null" data-sn-right="#dislike" data-sn-left="null" data-sn-down="#play_video"><img class="thumbs_up" src="images/thumbs-up.png" alt="Thumbs up" style="width: 58px;"></li>';
    str += '<li class="detail-like-dislike-btn focusable" id="dislike" tabindex="0" data-sn-up="null" data-sn-right="null" data-sn-left="#like" data-sn-down="#play_video"><img class="thumbs_down" src="images/thumbs-down.png" alt="Thumbs down" style="width: 58px;"></li>';
    str += '<li class="detail-btn focusable" id="play_video" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="null" data-sn-down="#watch_trailer"><img class="play-video" src="images/play_active.png">Play Now</li>';
    str += '<li class="detail-btn focusable" id="watch_trailer" tabindex="0" data-sn-up="#play_video" data-sn-right="null" data-sn-left="null" data-sn-down="#add_watchlist"><img src="images/trailer_active.png" class="menu-icons" />Watch trailer</li>';
    str += '<li class="detail-btn focusable" id="add_watchlist" tabindex="0" data-sn-up="#watch_trailer" data-sn-right="null" data-sn-left="null" data-sn-down="null"><img src="images/watch_later_plus.png" class="menu-icons" />Add to watchlist</li>';
    str += "</ul>";
  }
  else if (FOCUSED_ITEM_DATA["stream_type"] == "S") {
    if (FOCUSED_ITEM_DATA["show_name"] != "undefined") str += '<div class="detail-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["show_name"] + '<span class="home_reddot"></span></div>';
    str += ' <div class="detail-item-info"><span>' + FOCUSED_ITEM_DATA["release_year"] + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + FOCUSED_ITEM_DATA["duration"] + '</span><img src="images/HD Icon.png"></div>';
    if (FOCUSED_ITEM_DATA["show_short_desc"] != "undefined") str += '<div class="detail-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["show_short_desc"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Cast</label><p>' + FOCUSED_ITEM_DATA["actors"] + '</p></div>';
    str += '<div class="" id = "streamDisc" > <label>Directed By:</label>' + FOCUSED_ITEM_DATA["directors"] + '</div > ';
    str += '<div class="" id="streamDisc"><label>Language:</label>' + FOCUSED_ITEM_DATA["language"] + '</div>';
    str += '<ul class="details-list active" id="show_details_list">';
    str += '<li class="detail-like-dislike-btn  focusable" id="like" tabindex="0" data-sn-up="null" data-sn-right="#dislike" data-sn-left="null" data-sn-down="#resume"><img class="thumbs_up" src="images/thumbs-up.png" alt="Thumbs up" style="width: 58px;"></li>';
    str += '<li class="detail-like-dislike-btn  focusable" id="dislike" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="#like" data-sn-down="#resume"><img class="thumbs_down" src="images/thumbs-down.png" alt="Thumbs down" style="width: 58px;"></li>';
    str += '<li class="detail-btn focusable" id="resume" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="null" data-sn-down="#seasons_episodes"><img src="images/pause.png" class="menu-pause">Resume</li>';
    str += '<li class="detail-btn focusable" id="seasons_episodes" tabindex="0" data-sn-up="#resume" data-sn-right="null" data-sn-left="null" data-sn-down="#add_watchlist">Seasons & Episodes</li>';
    str += '<li class="detail-btn focusable" id="add_watchlist" tabindex="0" data-sn-up="#seasons_episodes" data-sn-right="null" data-sn-left="null" data-sn-down="null"><img src="images/watch_later_plus.png" class="menu-icons" />Add to watchlist</li>';
  }
  str += "</ul>";
  str += "</div>";

  show_hide_screens("detail_container");
  $("#detail_container").html("");
  $("#nav_container").hide();
  $("#detail_container").html(str);
  if (FOCUSED_ITEM_DATA["stream_type"] == "M") {
    SN.remove("row_details_list");
    SN.add({
      id: "row_details_list",
      selector: "#row_details_list .focusable",
      restrict: "self-first",
      defaultElement: "#like",
      enterTo: "last-focused",
    });
    SN.makeFocusable();
    SN.focus('#play_video');
  } else if (FOCUSED_ITEM_DATA["stream_type"] == "S") {
    manage_spatial_navigation("detail_container");
    //   SN.remove("show_details_list");
    // SN.add({
    //   id: "show_details_list",
    //   selector: "#show_details_list .focusable",
    //   restrict: "self-first",
    //   defaultElement: "#like",
    //   enterTo: "last-focused",
    // });
    // SN.makeFocusable();
    SN.focus('#seasons_episodes');
  }
}


//show_detail_container page Api set
function show_details_page() {
  console.log("show_details_page.....");
  var str = "";
  leftFocus = '',
    rightFocus = '',
    downFocus = '',
    upFocus = '';
  LIKE_DATA = "images/like.png";
  DISLIKE_DATA = "images/dislike.png";
  str += '<div class="item-detail-des-box">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="details_subscriber">SUBSCRIBER</span></div>';
  var totalhours = Math.floor(FOCUSED_ITEM_DATA["duration"] / 60) + "hr " + (FOCUSED_ITEM_DATA["duration"] % 60) + "Min ";
  if (FOCUSED_ITEM_DATA["show_name"] != "undefined") str += '<div class="detail-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["show_name"] + '<span class="home_reddot"></span></div>';
  str += ' <div class="top-item-info"><span>' + (FOCUSED_ITEM_DATA["release_year"] ? FOCUSED_ITEM_DATA["release_year"] : new Date().getFullYear()) + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + (FOCUSED_ITEM_DATA["duration"] ? FOCUSED_ITEM_DATA["duration"] : "0 Mins") + '</span><img src="images/HD Icon.png"></div>';
  if (FOCUSED_ITEM_DATA["short_description"] != "undefined") str += '<div class="detail-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["short_description"] + '</div>';
  str += '<div class="" id="streamDisc"><label>Cast</label><p>' + FOCUSED_ITEM_DATA["actors"] + '</p></div>';
  str += '<div class="" id = "streamDisc" ><label>Directed By:</label>' + FOCUSED_ITEM_DATA["director"] + '</div > ';
  str += '<div class="" id="streamDisc"><label>Language:</label>' + FOCUSED_ITEM_DATA["language"] + '</div>';
  str += '<ul class="details-list active" id="show_list_details">';
  str += '<li class="detail-like-dislike-btn focusable" id="like" tabindex="0" data-sn-up="null" data-sn-right="#dislike" data-sn-left="null" data-sn-down="#resume"><img class="thumbs_up" src="images/thumbs-up.png" alt="Thumbs up" style="width: 58px;"></li>';
  str += '<li class="detail-like-dislike-btn focusable" id="dislike" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="#like" data-sn-down="#resume"><img class="thumbs_down" src="images/thumbs-down.png" alt="Thumbs down" style="width: 58px;"></li>';
  str += '<li class="detail-btn  focusable" id="resume" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="null" data-sn-down="#seasons_episodes"><img src="images/pause.png" class="menu-pause">Resume</li>';
  str += '<li class="detail-btn  focusable" id="seasons_episodes" tabindex="0" data-sn-up="#resume" data-sn-right="null" data-sn-left="null" data-sn-down="#add_watchlist">Seasons & Episodes</li>';
  str += '<li class="detail-btn focusable" id="add_watchlist" tabindex="0" data-sn-up="#seasons_episodes" data-sn-right="null" data-sn-left="null" data-sn-down="null"><img src="images/watch_later_plus.png" class="menu-icons" />Add to watchlist</li>';
  str += "</ul>";
  str += "</div>";

  show_hide_screens("detail_container");
  //$("#detail_container").html("");
  $("#nav_container").hide();
  $("#detail_container").html(str);
  SN.remove("show_list_details");
  SN.add({
    id: "show_list_details",
    selector: "#show_list_details .focusable",
    restrict: "self-first",
    defaultElement: "#like",
    enterTo: "last-focused",
  });
  SN.makeFocusable();
  SN.focus('#seasons_episodes');
}

//movie_container page Api set
function movie_details_page() {
  console.log("movie_details_page.....");
  var str = "";
  leftFocus = '',
    rightFocus = '',
    downFocus = '',
    upFocus = '';
  LIKE_DATA = "images/like.png";
  DISLIKE_DATA = "images/dislike.png";
  str += '<div class="item-detail-des-box">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="details_subscriber">SUBSCRIBER</span></div>';
  var totalhours = Math.floor(FOCUSED_ITEM_DATA["duration"] / 60) + "hr " + (FOCUSED_ITEM_DATA["duration"] % 60) + "Min ";
  if (FOCUSED_ITEM_DATA["stream_title"] != "undefined") str += '<div class="detail-item-title" id="streamTitle">' + FOCUSED_ITEM_DATA["stream_title"] + '<span class="home_reddot"></span></div>';
  str += ' <div class="detail-item-info"><span>' + FOCUSED_ITEM_DATA["release_year"] + '</span><span>' + FOCUSED_ITEM_DATA["genres"] + '</span><span>' + totalhours + '</span><img src="images/HD Icon.png"></div>';
  if (FOCUSED_ITEM_DATA["stream_long_description"] != "undefined") str += '<div class="detail-item-desc" id="streamDisc">' + FOCUSED_ITEM_DATA["stream_short_desc"] + '</div>';
  str += '<div class="" id="streamDisc"><label>Cast:</label>' + FOCUSED_ITEM_DATA["actors"] + '</div>';
  str += '<div class="" id="streamDisc"><label>Directed By:</label>' + FOCUSED_ITEM_DATA["directors"] + '</div>';
  str += '<div class="" id="streamDisc"><label>Language:</label>' + FOCUSED_ITEM_DATA["language"] + '</div>';
  str += '<ul class="details-list active" id="movie_details_list">';
  str += '<li class="detail-like-dislike-btn focusable" id="like" tabindex="0" data-sn-up="null" data-sn-right="#dislike" data-sn-left="#like" data-sn-down="#play_video"><img class="thumbs_up" src="images/thumbs-up.png" alt="Thumbs up" style="width: 58px;"></li>';
  str += '<li class="detail-like-dislike-btn focusable" id="dislike" tabindex="0" data-sn-up="null" data-sn-right="null" data-sn-left="#like" data-sn-down="#play_video"><img class="thumbs_down" src="images/thumbs-down.png" alt="Thumbs down" style="width: 58px;"></li>';
  str += '<li class="detail-btn focusable" id="play_video" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="null" data-sn-down="#watch_trailer"><img class="play-video" src="images/play_active.png">Play Now</li>';
  str += '<li class="detail-btn focusable" id="watch_trailer" tabindex="0" data-sn-up="#play_video" data-sn-right="null" data-sn-left="null" data-sn-down="#add_watchlist"><img src="images/trailer_active.png" class="menu-icons" />Watch trailer</li>';
  str += '<li class="detail-btn focusable" id="add_watchlist" tabindex="0" data-sn-up="#watch_trailer" data-sn-right="null" data-sn-left="null" data-sn-down="null"><img src="images/watch_later_plus.png" class="menu-icons" />Add to watchlist</li>';
  str += "</ul>";

  str += "</ul>";
  str += "</div>";

  show_hide_screens("detail_container");
  $("#detail_container").html("");
  $("#nav_container").hide();
  $("#detail_container").html(str);
  SN.remove("movie_details_list");
  SN.add({
    id: "movie_details_list",
    selector: "#movie_details_list .focusable",
    restrict: "self-first",
    defaultElement: "#like",
    enterTo: "last-focused",
  });
  SN.makeFocusable();
  SN.focus('#play_video');

}

//search detail container page Api set
function search_details_page(index) {
  console.log("search_details_page.....");
  var str = "",
    leftFocus = '',
    rightFocus = '',
    downFocus = '',
    upFocus = '';
  // LIKE_DATA = "images/like.png";
  // DISLIKE_DATA = "images/dislike.png";

  str += '<div class="item-detail-des-box" id="item-detail-des">';
  str += '<div class="crown-image"><img src="images/crown.png"><span class="details_subscriber">SUBSCRIBER</span></div>';
  var totalhours = Math.floor(SEARCH_DATA_ARRAY[index]["duration"] / 60) + "hr " + (SEARCH_DATA_ARRAY[index]["duration"] % 60) + "Min ";

  if (SEARCH_DATA_ARRAY[index]["stream_type"] == "M") {
    $("#screenBackground").attr("src", SEARCH_DATA_ARRAY[index]["stream_banner"]);
    if (SEARCH_DATA_ARRAY[index]["stream_title"] != "undefined") str += '<div class="detail-item-title" id="streamTitle">' + SEARCH_DATA_ARRAY[index]["stream_title"] + '<span class="home_reddot"></span></div>';
    str += ' <div class="detail-item-info"><span>' + SEARCH_DATA_ARRAY[index]["release_year"] + '</span><span>' + SEARCH_DATA_ARRAY[index]["genres"] + '</span><span>' + totalhours + '</span><img src="images/HD Icon.png"></div>';
    if (SEARCH_DATA_ARRAY[index]["stream_long_description"] != "undefined") str += '<div class="detail-item-desc" id="streamDisc">' + SEARCH_DATA_ARRAY[index]["stream_short_desc"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Cast:</label>' + SEARCH_DATA_ARRAY[index]["actors"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Directed By:</label>' + SEARCH_DATA_ARRAY[index]["directors"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Language:</label>' + SEARCH_DATA_ARRAY[index]["language"] + '</div>';
    str += '<ul class="details-list active" id="search_row_details_list">';
    str += '<li class="detail-like-dislike-btn focusable" id="like" tabindex="0" data-sn-up="null" data-sn-right="#dislike" data-sn-left="null" data-sn-down="#play_video"><img class="thumbs_up" src="images/thumbs-up.png" alt="Thumbs up" style="width: 58px;"></li>';
    str += '<li class="detail-like-dislike-btn focusable" id="dislike" tabindex="0" data-sn-up="null" data-sn-right="null" data-sn-left="#like" data-sn-down="#play_video"><img class="thumbs_down" src="images/thumbs-down.png" alt="Thumbs down" style="width: 58px;"></li>';
    str += '<li class="detail-btn focusable" id="play_video" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="null" data-sn-down="#watch_trailer"><img class="play-video" src="images/play_active.png">Play Now</li>';
    str += '<li class="detail-btn focusable" id="watch_trailer" tabindex="0" data-sn-up="#play_video" data-sn-right="null" data-sn-left="null" data-sn-down="#add_watchlist"><img src="images/trailer_active.png" class="menu-icons" />Watch trailer</li>';
    str += '<li class="detail-btn focusable" id="add_watchlist" tabindex="0" data-sn-up="#watch_trailer" data-sn-right="null" data-sn-left="null" data-sn-down="null"><img src="images/watch_later_plus.png" class="menu-icons" />Add to watchlist</li>';
    str += "</ul>";
  }
  else if (SEARCH_DATA_ARRAY[index]["stream_type"] == "S") {
    $("#screenBackground").attr("src", SEARCH_DATA_ARRAY[index]["show_image"]);
    if (SEARCH_DATA_ARRAY[index]["show_name"] != "undefined") str += '<div class="detail-item-title" id="streamTitle">' + SEARCH_DATA_ARRAY[index]["show_name"] + '<span class="home_reddot"></span></div>';
    str += ' <div class="detail-item-info"><span>' + SEARCH_DATA_ARRAY[index]["release_year"] + '</span><span>' + SEARCH_DATA_ARRAY[index]["genres"] + '</span><span>' + SEARCH_DATA_ARRAY[index]["duration"] + '</span><img src="images/HD Icon.png"></div>';
    if (SEARCH_DATA_ARRAY[index]["show_short_desc"] != "undefined") str += '<div class="detail-item-desc" id="streamDisc">' + SEARCH_DATA_ARRAY[index]["show_short_desc"] + '</div>';
    str += '<div class="" id="streamDisc"><label>Cast</label><p>' + SEARCH_DATA_ARRAY[index]["actors"] + '</p></div>';
    str += '<div class="" id = "streamDisc" > <label>Directed By:</label>' + SEARCH_DATA_ARRAY[index]["directors"] + '</div > ';
    str += '<div class="" id="streamDisc"><label>Language:</label>' + SEARCH_DATA_ARRAY[index]["language"] + '</div>';
    str += '<ul class="details-list active" id="search_show_details_list">';
    str += '<li class="detail-like-dislike-btn  focusable" id="like" tabindex="0" data-sn-up="null" data-sn-right="#dislike" data-sn-left="null" data-sn-down="#resume"><img class="thumbs_up" src="images/thumbs-up.png" alt="Thumbs up" style="width: 58px;"></li>';
    str += '<li class="detail-like-dislike-btn  focusable" id="dislike" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="#like" data-sn-down="#resume"><img class="thumbs_down" src="images/thumbs-down.png" alt="Thumbs down" style="width: 58px;"></li>';
    str += '<li class="detail-btn focusable" id="resume" tabindex="0" data-sn-up="#like" data-sn-right="null" data-sn-left="null" data-sn-down="#seasons_episodes"><img src="images/pause.png" class="menu-pause">Resume</li>';
    str += '<li class="detail-btn focusable" id="seasons_episodes" tabindex="0" data-sn-up="#resume" data-sn-right="null" data-sn-left="null" data-sn-down="#add_watchlist">Seasons & Episodes</li>';
    str += '<li class="detail-btn focusable" id="add_watchlist" tabindex="0" data-sn-up="#seasons_episodes" data-sn-right="null" data-sn-left="null" data-sn-down="null"><img src="images/watch_later_plus.png" class="menu-icons" />Add to watchlist</li>';
  }
  str += "</ul>";
  str += "</div>";


  // $("#detail_container").html("");
  $("#nav_container").hide();
  $("#search_container").hide();
  show_hide_screens("detail_container");
  $("#detail_container").html(str);
  if (SEARCH_DATA_ARRAY[index]["stream_type"] == "M") {
    SN.remove("search_row_details_list");
    // SN.add({
    //   id: "search_row_details_list",
    //   selector: "#search_row_details_list .focusable",
    //   restrict: "self-first",
    //   defaultElement: "#like",
    //   enterTo: "last-focused",
    // });
    // SN.makeFocusable();
    SN.focus('#play_video');
  } else if (SEARCH_DATA_ARRAY[index]["stream_type"] == "S") {
    manage_spatial_navigation("detail_container");
    //SN.remove("search_show_details_list");
    // SN.add({
    //   id: "show_details_list",
    //   selector: "#show_details_list .focusable",
    //   restrict: "self-first",
    //   defaultElement: "#like",
    //   enterTo: "last-focused",
    // });
    // SN.makeFocusable();
    SN.focus('#seasons_episodes');
  }
}

