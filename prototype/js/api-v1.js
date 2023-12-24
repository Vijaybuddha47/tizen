// All server side API request
// start signup Api
function signUpAPI() {
  console.log("signUpAPI");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/register",
    async: true,
    dataType: "json",
    data: {
      name: document.getElementById("signup_username").value,
      email: document.getElementById("signup_email").value,
      password: document.getElementById("signup_password").value,
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {

      // localStorage.setItem(
      //   "signup_username",
      //   document.getElementById("signup_username").value
      // );
      // localStorage.setItem(
      //   "signup_email",
      //   document.getElementById("signup_email").value
      // );
      // localStorage.setItem(
      //   "signup_password",
      //   document.getElementById("signup_password").value
      // );
      console.log(data);
    },
    error: function (xhr, error) {
      //console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      // show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    },
  });
}

// start signinApi
function signinApi() {
  console.log("signinApi");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/login",
    async: true,
    dataType: "json",
    data: {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      device_id: webapis.network.getMac(),
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      $("#loader").hide();
      console.log(res);
      if (res.status == 200 && res.data.user_status == "A") {
        $.each(res.data, function (index, value) {
          localStorage.setItem(index, value);
        });
        window.location.href = "home.html";
      } else {
        login_container_message(res.msg);
      }
    },
    error: function (xhr, error) {
      //console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      login_container_message(NET_CONNECTION_ERR);
    },
  });
}

// start sendOTP
function sendOTPApi() {
  console.log("sendOTP");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/sendOTP",
    async: true,
    dataType: "json",
    data: {
      email: localStorage.getItem("prototype_forgot_email"),
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      $("#loader").hide();
      console.log(res);
      if (res.status == 200) {
        $(".forget-pass-container").hide();
        // window.location.href = "home.html";
        $("#change_pass_container").show();
        SN.focus("#change_password");
        $("input").val("");
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
// end sendOTP password

// start reset password
function resetPasswordAPI() {
  console.log("resetPasswordAPI");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/resetPassword",
    async: true,
    dataType: "json",
    data: {
      email: localStorage.getItem("prototype_forgot_email"),
      password: localStorage.getItem("prototype_change_password"),
      confirm_password: localStorage.getItem("prototype_confirm_password"),
      otp: localStorage.getItem("prototype_otp"),
    },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      $("#loader").hide();
      console.log(res);
      if (res.status == 201) {
        $(".change-pass-container").hide();
        // window.location.href = "home.html";
        $(".login-container").show();
        SN.focus("#email");
        $("input").val("");
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
      login_container_message(NET_CONNECTION_ERR);
    },
  });
}

//start home api
function getHomeData() {
  console.log("getHomeData");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/home",
    async: true,
    dataType: "json",
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
      if (_.size(data) > 0) {
        console.log("homepage...");
        HOME_DATA_ARRAY = data;
        // setHomeScreen();
        setScreenData("home");
      } else {
        // show_hide_login_error("Empty", "Data not found.");
        console.log("Data not found.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      hide_show_modal(true, "RETRY_EXIT", msg);
      // show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    },
  });
}

function getScreenData(screen) {
  console.log("screen", screen);
  $("#loader").show();
  var url = APP_DOMAIN + "/" + (screen == 'home' ? "home" : (screen + "s"));
  console.log(url);
  $.ajax({
    type: "POST",
    url: url,
    async: true,
    dataType: "json",
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      console.log(res);
      if (_.size(res) > 0) {
        if (MENU_INDEX == 0) HOME_DATA_ARRAY = res;
        else if (MENU_INDEX == 1) HOME_DATA_ARRAY = res.data;
        else if (MENU_INDEX == 2) HOME_DATA_ARRAY = res.data;

        // setHomeScreen();
        setScreenData(screen);
      } else {
        // show_hide_login_error("Empty", "Data not found.");
        console.log("Data not found.");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, "RETRY_EXIT", msg);
      // show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    },
  });
}


//Get api search data
function getSearchData() {
  console.log("hello searching");
  var searchText = get_searched_text();
  console.log("getSearchData");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/search?search_keyword=" + searchText,
    async: true,
    dataType: 'json',
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
      if (_.size(data.app.search_result) > 0) {
        SEARCH_DATA_ARRAY = data.app.search_result;
        set_search_result();
      } else {
        console.log("Result not found");
        $("#loader").hide();
        $("#second_search_div").hide();
        $("#msg_box").html("<h2 class='search_heading'>No record found.</h2>");
      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, 'RETRY_EXIT', msg);
    }
  });
}

//Get api show data
function getShowData() {
  console.log("hello showing data");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/shows",
    async: true,
    dataType: 'json',
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
      if (data.status == 200 || _.size(data) > 0) {
        SHOW_DATA_ARRAY = data;
        setShowScreen();
      } else {
        console.log("Result not found");
        $("#loader").hide();
        $("").hide();
        // $("#msg_box").html("<h2 class='search_heading'>No record found.</h2>");

      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, 'RETRY_EXIT', msg);
    }
  });
}
//Get api Movie data
function getMovieData() {
  console.log("hello Movie data");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/movies",
    async: true,
    dataType: 'json',
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
      if (data.status == 200 || _.size(data) > 0) {
        MOVIE_DATA_ARRAY = data;
        setMovieScreen();
      } else {
        console.log("Result not found");
        $("#loader").hide();
        $("").hide();
        // $("#msg_box").html("<h2 class='search_heading'>No record found.</h2>");

      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, 'RETRY_EXIT', msg);
    }
  });
}

//Get api Seasons data
function getSeasonsData() {
  console.log("hello Season data");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/seasons",
    async: true,
    dataType: 'json',
    data: { "show_id": FOCUSED_ITEM_DATA["id"] },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      console.log(res);
      if (res.status == 1) {
        SEASON_DATA_ARRAY = res.data.seasons;
        setSeasonScreen();
      } else {
        console.log("Result not found");
        $("#loader").hide();
        $("").hide();
        // $("#msg_box").html("<h2 class='search_heading'>No record found.</h2>");

      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, 'RETRY_EXIT', msg);
    }
  });
}

//Get api Episodes data
function getEpisodesData(season_id) {
  console.log("hello episodes data", season_id);
  $("#loader").show();
  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/episodes",
    async: true,
    dataType: 'json',
    data: { "season_id": season_id },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (res) {
      console.log(res);
      if (res.status == 1) {
        EPISODES_DATA_ARRAY = res.data.episodes;
        setEpisodeList();
      } else {
        console.log("Result not found");
        $("#loader").hide();
        $("").hide();
        // $("#msg_box").html("<h2 class='search_heading'>No record found.</h2>");

      }
    },
    error: function (xhr, error) {
      console.log("error", xhr, error);
      $("#loader").hide();
      if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
      else msg = NET_CONNECTION_ERR;
      // hide_show_modal(true, 'RETRY_EXIT', msg);
    }
  });
}