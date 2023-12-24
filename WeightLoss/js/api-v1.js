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

// start signinApi
function signinApi() {
  console.log("signinApi");
  $("#loader").show();
  $.ajax({
    type: "POST",
    url:'https://34.225.204.47/api/signin',
    async: true,
    dataType: "json",
    data:  { "email": localStorage.getItem('email'), "password": localStorage.getItem('password')},
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
        $("#loader").hide();
        console.log(data);
        window.location.href = "index.html";
        // if (data.status == 1 && data.subscription_status == "ACTIVE") {
        //     $.each(data, function (index, value) {
        //         localStorage.setItem(index, value);
        //     });
        //     window.location.href = "index.html";
        // } else {
        //     console.log("Something went wrong.")
        //     show_hide_login_error(data.subscription_status, data.msg);
        // }
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
function getHomeScreenData() {
  var id = "393";
  var video_type = "WORKOUT";
  console.log("get data workout.............");
  //$("#loader").show();
  $.ajax({
    type: "POST",
    url:'http://34.225.204.47/api/getVideos',
    async: true,
    dataType: "json",
    cache: false,
    data: { "user_id":id,"video_type":video_type},
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      console.log(data);
      alert(jhhhhhhhhhhhhhhhhhhhh);
      // if (_.size(data) > 0) {
      //   console.log("homepage...");
      //   HOME_DATA_ARRAY = data;
      //   sethomeScreenData();
      //   //setScreenData("home");
      // } else {
      //   // show_hide_login_error("Empty", "Data not found.");
      //   console.log("Data not found.");
      // }
    },
    // error: function (xhr, error) {
    //   console.log("error", xhr, error);
    //   $("#loader").hide();
    //   if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
    //   else msg = NET_CONNECTION_ERR;
    //   hide_show_modal(true, "RETRY_EXIT", msg);
    //   show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
    // },
  });
}
