window.onload = function () {
  window.SN = SpatialNavigation;
  SN.init();
  manage_spatial_navigation("login-container"); // For login container
  manage_spatial_navigation("signup-container"); // For signup container
  manage_spatial_navigation("forget-pass-container"); // For forgot container
  manage_spatial_navigation("change-password-container"); // For forgot container
  SN.focus("#loginButton");

  $(window).keydown(function (evt) {
    console.log("keyDown==>", evt.keyCode);
    switch (evt.keyCode) {
      case 13: // Ok
        console.log("ok");
        break;

      case 10009: // Return key parentalcontrol_popup
        console.log("return key");
        if ($("#forget_pass_container").css("display") == "block") {
          console.log("right heuuu");
          $("#forget_pass_container").hide();
          $("#login_container").show();
          SN.focus("#forgotPass");
          $("input").val("");
        } else if ($("#sign_up_container").css("display") == "block") {
          console.log("right heuuu");
          $("#sign_up_container").hide();
          $("#login_container").show();
          SN.focus("#signUpButton");
          $("input").val("");
        }

        break;

      case 37: // LEFT arrow
        console.log("left key");
        if ($("input").is(":focus")) controlLeftArrowKeys();
        break;

      case 39: // RIGHT arrow
        console.log("right key");
        if ($("input").is(":focus")) controlrightArrowKeys();
        break;

      case 40: //Down key
        console.log("down key");
        break;

      case 38: //Up key
        console.log("up key");

        break;

      case 65376: // Done from IME keyboard
        console.log("OK from keyboard...");
        break;

      case 65385: // Cancel from IME keyboard
        console.log("Cancel from keyboard...");
        break;

      default:
        console.log("Key code : " + evt.keyCode);
        break;
    }
  });
};
var showTimer = '';
document.getElementById('email').value = "mobileapptester777@gmail.com";
document.getElementById('password').value = "a123456";
if (localStorage.getItem('email') && localStorage.getItem('password')) {
  SN.focus("#loginButton");
  signinApi();
}
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

function manage_spatial_navigation(containerClass, favoriteStatus, vodId) {
  switch (containerClass) {
    case "login-container":
      set_focus("login_container", "email");

      $("#login_container").on("sn:focused", function (e) {
        console.log("set focus !");
      });
      $('#loginButton').on("sn:enter-down", function (e) {
        console.log("loginButton enter");
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email == '') {
          show_hide_login_error("Username empty", "Please Enter Email.")
        } else if (password == '') {
          show_hide_login_error("Password empty", "Please Enter Password.")
        }
        //  else if ((!localStorage.getItem(email)) && (!localStorage.getItem(password))){
        //   show_hide_login_error("Something went wrong.Please try again.")
        // }
        else if (email != '' && password != '') {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          signinApi();
        }


      });


      $("#forgotButton").on("sn:enter-down", function (e) {
        console.log("forgot pass container");
        $(".forget-pass-container").show();
        SN.focus("#forgot_email");
      });

      break;

    case "signup-container":
      console.log("test signup..........................");
      set_focus("right_side_signup", "signup_username");

      $("#right_side_signup").on("sn:focused", function (e) {
        console.log("sign_up_container focused.");
        SN.focus("right_side_signup");
      });
      
      $("#signUpButton").on("sn:enter-down", function (e) {
        $(".forget-pass-container").hide();
        $(".signup-container").show();
        $(".login-container").hide();
        SN.focus("right_side_signup");

      });
      $("#SignButton").on("sn:enter-down", function (e) {
        $(".signup-container").hide();
        $(".login-container").show();
        SN.focus("#signUpButton");
      });

      $("#sign_UpButton").on("sn:enter-down", function (e) {
        var signupUsername = document.getElementById("signup_username").value;
        var signupEmail = document.getElementById("signup_email").value;
        console.log(signupEmail);
        var signupPassword = document.getElementById("signup_password").value;
        var signupConfirmPassword = document.getElementById("signup_confirm_password").value;
        var emailRegex = /^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
        function validateEmail(signupEmail) {
          if (!emailRegex.test(signupEmail)) {
            return true;
          }
          else {
            return false;
          }
        }
        // if (signupUsername == "" || signupEmail == "" || signupPassword == ""|| signupConfirmPassword == "") {
        var msg = "";
        if (signupUsername == "") login_container_message("Enter the username.");
        else if (signupEmail == "") login_container_message("Enter the email.");
        else if (signupConfirmPassword == "") login_container_message("Enter the Confirm password");
        else if (signupConfirmPassword != signupPassword) login_container_message("Enter the same password and confirm password.");
        else if (validateEmail(signupEmail)) login_container_message("Enter the correct email.");
        else {
          signUpAPI();
          console.log("Thank You for Sign Up Successsfully.");
          login_container_message("Sign up successsfully done. Please check your email for activation link.");
          $("#error_message").css("color", "#00FF00");
        }

      });



      break;

    case "forget-pass-container":
      set_focus("forget_pass_container", "forgot_email");

      $("#forget_pass_container").on("sn:focused", function (e) {
        console.log("change pass container focused.");
      });
      $("#forget_okButton").on("sn:enter-down", function (e) {
        console.log("forgot pass container");
        var email = localStorage.getItem("email");
        var setEmail = document.getElementById("forgot_email").value;
        if (email == setEmail) {
          ForgotApi();
        } else {
          login_container_message("Enter the correct email.");
        }


      });
      $("#cancel_okButton").on("sn:enter-down", function (e) {
        console.log("cancel button container");
        $(".forget-pass-container").hide();
        $(".login-container").show();
        SN.focus("#forgotButton");

      });

      $("#change_okButton").on("sn:enter-down", function (e) {
        console.log("forgot pass container");
        $(".change-pass-container").hide();
        SetPasswordApi();
        SN.focus("#forgotButton");

      });
      break;
    case "change-password-container":
      set_focus("change_pass_container", "change_password");

      $("#change_pass_container").on("sn:focused", function (e) {
        console.log("change pass container focused.");
      });


  }
}

function login_container_message(msg) {
  console.log("login message");

  if (!_.isString(msg)) {
    if (msg.status == 404) msg = "Something went wrong.Please try again.";
    else msg = msg.responseText;
  }
  var jsonString = msg.search("{");
  if (jsonString > -1) {
    var msgObject = JSON.parse(msg);
    msg = msgObject.MinervaError.message;
  }

  $("#error_message").css("color", "#FF0000");
  $("#error_message").text(msg);
  $(".error-box").show();
  clearTimeout(showTimer);
  showTimer = setTimeout(function () {
    $(".error-box").hide("slow");
  }, 10000);
}

// var leftmove,rightmove;
function controlLeftArrowKeys() {
  var leftmove;
  var input = document.getElementById($(":focus").attr("id"));
  console.log("input");
  var currentpos = input.selectionStart; //getting current postion of cursor
  if (input.value.length > 0 && currentpos > 0) {
    leftmove = currentpos - 1;
    setCaretPosition(input, leftmove);
  }
}

function controlrightArrowKeys() {
  var rightmove;
  var input = document.getElementById($(":focus").attr("id"));
  var currentpos = input.selectionStart; //getting current postion of cursor
  if (input.value.length >= 0 && currentpos >= 0) {
    rightmove = currentpos + 1;
    setCaretPosition(input, rightmove);
  }
}

function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
    // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}
function show_hide_login_error(reason, msg) {
  console.log("show_hide_login_error");
  $("#login_loader").hide();
  $("#error_title").text(reason);
  $("#error_message").text("Something went wrong.Please try again.", msg);
  $("#error_message").text(msg);
  $(".error-box").show();
  $("#error_overlay").show("slow");
  setTimeout(function () {
    $("#error_overlay").hide("slow");
  }, 5000);
}

function signinApi() {
  console.log("signinApi");
  $("#login_loader").show();
  var androidType = "TV";
  var deviceToken = webapis.network.getMac();
  console.log(deviceToken, "demo testing");
  var deviceType = "android"

  $.ajax({
    type: "POST",
    url: APP_DOMAIN + "/signin",
    async: true,
    dataType: 'json',
    data: { "email": localStorage.getItem('email'), "password": localStorage.getItem('password'), "androidType": androidType, "deviceToken": webapis.network.getMac(), "deviceType": deviceType },
    cache: false,
    crossDomain: true,
    timeout: REQUEST_TIMEOUT * 1000,
    success: function (data) {
      $("#login_loader").hide();
      console.log(data);
      // window.location.href = 'index.html';
      // SN.focus("#menu0");
      if (data.result_code == 0) {
        $.each(data, function (index, value) {
          localStorage.setItem(index, value);
        });
        window.location.href = 'index.html';
      } else if (data.result_code == 1) {
        login_container_message("Email doesn't exist");
        // msg ="Email Doesn't Exist";
      } else if (data.result_code == 2) {
        login_container_message("Incorrect password");
      } else if ((data.result_code == 3) || (data.result_code == 4)) {
        VerifyDeviceAPI();
        RegisterTokenAPI();
      }
      else {
        console.log("Something went wrong.");
        login_container_message(data.result_code, data.msg);
      }
    },
    // error: function (xhr, error) {
    //   console.log("error", xhr, error);
    //   ajaxError(xhr);
    // }
  });
}
