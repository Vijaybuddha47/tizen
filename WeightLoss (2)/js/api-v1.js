// All server side API request
// start signup Api
function signUpAPI() {
  console.log("signUpAPI");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/signup",
    async: true,
    dataType: "json",
    data: {
      name: document.getElementById("signup_username").value,
      email: document.getElementById("signup_email").value,
      password: document.getElementById("signup_password").value,
      password: document.getElementById("signup_confirm_password").value,
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, error) {
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
    },
  });
}


// start verify device api
function VerifyDeviceAPI() {
  console.log("VerifyDeviceAPI");
  var email = document.getElementById("email").value;
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/verifyDevice",
    async: true,
    dataType: "json",
    data: {
      "email": email,
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, error) {
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
    },
  });
}
// end verify device api


// start register token api
function RegisterTokenAPI() {
  console.log("RegisterTokenAPI");
  var email = document.getElementById("email").value;
  var androidType ="TV";
  var deviceType ="android";
  var deviceToken =webapis.network.getMac();
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/registerToken",
    async: true,
    dataType: "json",
    data: {
      "email": email,"androidType":androidType,"deviceToken":deviceToken,"deviceType":deviceType
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, error) {
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
    },
  });
}
// end Register TokenAPI  api

// start forgot password
function ForgotApi() {
  var forgot_email = document.getElementById("forgot_email").value;
  console.log("ForgotApi");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/forgot",
    async: true,
    dataType: "json",
    data: {
      "email":forgot_email ,
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      $("#loader").hide();
      console.log(res);
      if (res.result_code == 0) {
        $(".forget-pass-container").hide();
        $(".change-pass-container").show();
        SN.focus("#change_password");
      }else if (res.result_code == 1){
        login_container_message(res.msg);
      } else {
        login_container_message(res.msg);
        console.log("Something went wrong.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      login_container_message(msg);
    },
  });
}
// end forgot password



// start set password
function SetPasswordApi() {
  var change_password = document.getElementById("change_password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var otp = document.getElementById("otp").value;
  var pincode = localStorage.getItem("pincode");
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");
  console.log("ForgotApi");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/setPassword",
    async: true,
    dataType: "json",
    data: {
      "email":email,"password":password ,
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      $("#loader").hide();
      console.log(res);
      if (res.result_code == 0 && otp == pincode ) {
        // $(".forget-pass-container").hide();
        // $(".change-pass-container").show();
        // SN.focus("#change_password");
        login_container_message("Sucessfully submit forgot password.");
        console.log("Sucessfully submit forgot password.");
      }else if (res.result_code == 1){
        login_container_message("Pincode and opt doesn't match..");
      } else {
        console.log("Something went wrong.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      login_container_message(msg);
    },
  });
}
// end set password

//start home api
function getHomeScreenData(index,tabIndex) {
  console.log("get data workout.............", index,tabIndex);
  var id = "393";
  // var i = $(".selected").index();
  var k = Number(tabIndex);
  console.log(k);
  // var j = $(".selected").index();
  var s = Number(tabIndex);
  if (MENU_ARRAY[k].length <= index) return;
  else if (MENU_HEADING_ARRAY[s].length <= index) return;
  $("#second_loader").show();

  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/getVideos",
    async: true,
    dataType: "json",
    cache: false,
    data: { "user_id": id, "video_type": MENU_ARRAY[k][index] },
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      $("#second_loader").hide();
      console.log(data);
      if (_.size(data) > 0) {
        console.log("homepage...");
        DATA_ARRAY[index] = data['video_list'];

        var id = "",
          str = "",
          leftFocus = "",
          rightFocus = "",
          downFocus = "",
          upFocus = "",
          NAVIGATION_INDEX = 30;

        var totalItem = _.size(DATA_ARRAY[index]);
        str += '<div class="home-data-container">';
        str += '<div class="row-list">';
        str += '<h2 class="outer-heading">' + MENU_HEADING_ARRAY[s][index] + '</h2>';
        str += '<div class="video_listing">';
        str += '<ul class="category-list" id="category_list_' + index + '" data-index="' + index + '" >';

        for (var i = 0; i < totalItem; i++) {
          id = ' id = "cat_item_' + index + '_' + i + '"';

          upFocus = ' data-sn-up="null" ';
          downFocus = ' data-sn-down="null" ';

          if (i == (totalItem - 1)) rightFocus = ' data-sn-right="null"';
          else rightFocus = ' data-sn-right="#cat_item_' + index + '_' + (i + 1) + '" ';

          if (i == 0) leftFocus = ' data-sn-left="#menu0"';
          else leftFocus = ' data-sn-left="#cat_item_' + index + '_' + (i - 1) + '" ';



          str += '<li class="cat-item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
          str += '<img class="cat-img-thumnails" src="' + DATA_ARRAY[index][i]["image"] + '" alt="' + DATA_ARRAY[index][i]["subtitle"] + '">';
          str += "</li>";
        }

        NAVIGATION_INDEX++;
        str += "</div>";
        str += "</div>";
        str += "</ul>";
        str += '</div>';
        // index = index + 1;
        if (index == 0) $("#outer_container").html(str);
        else $("#outer_container").append(str); set_channel_list_focus(0);
        // index = index + 1;
        //  SN.focus("category_list_0");
      } else {
        // show_hide_login_error("Empty", "Data not found.");
        console.log("Data not found.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      // $("#loader").hide();
      // if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      // else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, "RETRY_EXIT", msg);
      // show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    },
  });

  setTimeout(function () {
    if (MENU_ARRAY[k].length > index) getHomeScreenData(index + 1, tabIndex);
    else if (MENU_HEADING_ARRAY[s].length > index) getHomeScreenData(index + 1, tabIndex);
  }, 500);

}


//start telehealth api
function gettelehelthScreenData(index,tabIndex) {
  console.log("get data workout.............", index,tabIndex);
  var id = "393";
  // var i = $(".selected").index();
  var k = Number(tabIndex);
  console.log(k);
  var s = Number(tabIndex);
  // var j = $(".selected").index();
  if (MENU_ARRAY[k].length <= index) return;
  else if (MENU_HEADING_ARRAY[s].length <= index) return;
  $("#second_loader").show();

  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/getService",
    async: true,
    dataType: "json",
    cache: false,
    data: { "user_id": id, "service_type": MENU_ARRAY[k][index] },
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      $("#second_loader").hide();
      console.log(data);
      if (_.size(data) > 0) {
        console.log("homepage...");
        TELE_DATA_ARRAY[index] = data['service_list'];
        var id = "",
          str = "",
          leftFocus = "",
          rightFocus = "",
          downFocus = "",
          upFocus = "",
          NAVIGATION_INDEX = 30;
        var totalItem = _.size(TELE_DATA_ARRAY[index]);
        str += '<div class="home-data-container">';
        str += '<div class="row-list">';
        str += '<h2 class="outer-heading">' + MENU_HEADING_ARRAY[s][index] + '</h2>';
        str += '<div class="video_listing">';
        str += '<ul class="category-list" id="tele_category_list_' + index + '" data-index="' + index + '" >';
        for (var i = 0; i < totalItem; i++) {

          id = ' id = "tele_cat_item_' + index + '_' + i + '"';

          upFocus = ' data-sn-up="null" ';
          downFocus = ' data-sn-down="null" ';

          if (i == (totalItem - 1)) rightFocus = ' data-sn-right="null"';
          else rightFocus = ' data-sn-right="#tele_cat_item_' + index + '_' + (i + 1) + '" ';

          if (i == 0) leftFocus = ' data-sn-left="#menu0"';
          else leftFocus = ' data-sn-left="#tele_cat_item_' + index + '_' + (i - 1) + '" ';


          str += '<li class="cat-item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
          str += '<img class="cat-img-thumnails" src="' + TELE_DATA_ARRAY[index][i]["image"] + '" alt="' + TELE_DATA_ARRAY[index][i]["subtitle"] + '">';
          str += "</li>";
        }

        NAVIGATION_INDEX++;
        str += "</div>";
        str += "</div>";
        str += "</ul>";
        str += '</div>';

        if (index == 0) $("#outer_container").html(str);
        else $("#outer_container").append(str); set_tele_health_list_focus(0);
        // index = index + 1;
        // SN.focus("tele_category_list_0");

      } else {
        // show_hide_login_error("Empty", "Data not found.");
        console.log("Data not found.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      // $("#loader").hide();
      // if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      // else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, "RETRY_EXIT", msg);
      // show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    },
  });

  setTimeout(function () {
    if (MENU_ARRAY[k].length > index) gettelehelthScreenData(index + 1, tabIndex);
    else if (MENU_HEADING_ARRAY[s].length > index) gettelehelthScreenData(index + 1, tabIndex);
  }, 500);

}


function getSpecialofferData() {
  console.log("getSpecialofferData");
  $("#second_loader").show();
  $.ajax({
    type: "GET",
    url: APP_DOMAIN + "/specialOffers",
    async: true,
    dataType: 'json',
    // data: { "user_code": localStorage.getItem('user_code') },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      $("#second_loader").hide();
      console.log(res);
      if (_.size(res) > 0) {
        SPECIAL_DATA_ARRAY = res;
       setSpecialScreenData();
      } else {
        str += '<span>Content not available.</span>';
      }
    },
    error: function (xhr, error) {
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      hide_show_modal(true, 'RETRY_EXIT', msg);
    }
  });
}

function PreviewVideoPlayerData() {
  console.log("PreviewVideoPlayerData");
  // $("#loader").show();
  $.ajax({
    type: "GET",
    url: APP_DOMAIN + "/specialOffers",
    async: true,
    dataType: 'json',
    // data: { "user_code": localStorage.getItem('user_code') },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      // $("#loader").hide();
      console.log(res);
      if (_.size(res) > 0) {
        SPECIAL_DATA_ARRAY = res;
        let i = Math.floor((Math.random() * 100) + 1);
        VOD_URL = SPECIAL_DATA_ARRAY['special_offers'][i]['url'];
        //console.log(VOD_URL);
        load_preview_player();
      } else {
        str += '<span>Content not available.</span>';
      }
    },
    // error: function (xhr, error) {
    //   $("#loader").hide();
    //   if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
    //   else msg = NET_CONNECTION_ERR;
    //   hide_show_modal(true, 'RETRY_EXIT', msg);
    // }
  });
}


function getVideoLibraryData(index) {
  PAGE_INDEX == 11;
  console.log("getVideoLibraryData");
  var id = "393";
  var i = $(".selected").index();
  var heading = TYPE_ARRAY[i][index];
  console.log(heading);
  if (TYPE_ARRAY[i].length <= index) return;
  $("#loader").show();

  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/getLocalVideo",
    async: true,
    dataType: "json",
    cache: false,
    data: { "user_id": id, "type": TYPE_ARRAY[i][index] },
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
      $("#loader").hide();
      if (_.size(data) > 0) {
        console.log("homepage...");
        MY_VIDEO_DATA_ARRAY[index] = data['local_list'];
        var id = "",
          str = "",
          leftFocus = "",
          rightFocus = "",
          downFocus = "",
          upFocus = "",
          NAVIGATION_INDEX = 30;
        var totalItem = _.size(MY_VIDEO_DATA_ARRAY[index]);
        str += '<div class="home-data-container">';
        str += '<div class="row-list">';
        str += '<h2 class="outer-heading">' + heading + '</h2>';
        str += '<div class="video_listing">';
        str += '<ul class="category-list" id="my_video_category_list_' + index + '" data-index="' + index + '" >';
        for (var i = 0; i < totalItem; i++) {

          id = ' id = "my_video_cat_item_' + index + '_' + i + '"';

          upFocus = ' data-sn-up="null" ';
          downFocus = ' data-sn-down="null" ';

          if (i == (totalItem - 1)) rightFocus = ' data-sn-right="null"';
          else rightFocus = ' data-sn-right="#my_video_cat_item_' + index + '_' + (i + 1) + '" ';

          if (i == 0) leftFocus = ' data-sn-left="#menu0"';
          else leftFocus = ' data-sn-left="#my_video_cat_item_' + index + '_' + (i - 1) + '" ';


          str += '<li class="cat-item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
          str += '<img class="cat-img-thumnails" src="' + MY_VIDEO_DATA_ARRAY[index][i]["image"] + '" alt="' + MY_VIDEO_DATA_ARRAY[index][i]["subtitle"] + '">';
          str += "</li>";
        }

        NAVIGATION_INDEX++;
        str += "</div>";
        str += "</div>";
        str += "</ul>";
        str += '</div>';

        if (index == 0) $("#my_video_details_container").html(str);
        else $("#my_video_details_container").append(str);
        set_my_video_list_focus(0);
        // index = index + 1;
        SN.focus("my_video_category_list_0");

      } else {
        // show_hide_login_error("Empty", "Data not found.");
        console.log("Data not found.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      // $("#loader").hide();
      // if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      // else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, "RETRY_EXIT", msg);
      // show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    },
  });

  setTimeout(function () {
    if (TYPE_ARRAY[i].length > index) getVideoLibraryData(index + 1);
  }, 500);

}


function episodes_page_container(index,item_demo) {
  console.log(item_demo,Second_item_index,index,"it is true");
  // PAGE_INDEX  = 12;
  $("#loader").show();
  console.log("episodes_page_container");
  var id = "393";
  var productid = "3";
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/getProgramVideos",
    async: true,
    dataType: "json",
    cache: false,
    data: { "user_id": id, "product_id": SELECTED_ITEM_DATA['id'] },
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      $("#loader").hide();
      console.log(data);
      if (_.size(data) > 0) {
        console.log("homepage...");
        MY_PROGRAM_DATA_ARRAY[index] = data['programvideo_list'];
        var id = "",
          str = "",
          leftFocus = "",
          rightFocus = "",
          downFocus = "",
          upFocus = "",
          NAVIGATION_INDEX = 30;
        var totalItem = _.size(MY_PROGRAM_DATA_ARRAY[index]);
        str += '<div class="home-data-container">';
        str += '<div class="row-list">';
        // str += '<h2 class="outer-heading">' + heading + '</h2>';
        str += '<div class="video_listing">';
        str += '<ul class="category-list" id="program_category_list_' + index + '" data-index="' + index + '" >';
        for (var i = 0; i < totalItem; i++) {

          id = ' id = "program_cat_item_' + index + '_' + i + '"';

          upFocus = ' data-sn-up="null" ';
          downFocus = ' data-sn-down="null" ';

          if (i == (totalItem - 1)) rightFocus = ' data-sn-right="null"';
          else rightFocus = ' data-sn-right="#program_cat_item_' + index + '_' + (i + 1) + '" ';

          if (i == 0) leftFocus = ' data-sn-left="#menu0"';
          else leftFocus = ' data-sn-left="#program_cat_item_' + index + '_' + (i - 1) + '" ';


          str += '<li class="cat-item focusable" tabindex="' + NAVIGATION_INDEX + '" ' + id + rightFocus + leftFocus + upFocus + downFocus + " >";
          str += '<img class="cat-img-thumnails" src="' + MY_PROGRAM_DATA_ARRAY[index][i]["image"] + '" alt="' + MY_PROGRAM_DATA_ARRAY[index][i]["subtitle"] + '">';
          str += "</li>";
        }

        NAVIGATION_INDEX++;
        str += "</div>";
        str += "</div>";
        str += "</ul>";
        str += '</div>';

        $("#program_episodes_container").html(str);
        set_program_list_focus(0);
        manage_spatial_navigation("program_episodes_container");
        SN.focus("program_category_list_0");

      } else {
        // show_hide_login_error("Empty", "Data not found.");
        console.log("Data not found.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      // $("#loader").hide();
      // if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      // else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, "RETRY_EXIT", msg);
      // show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    },
  });

}
