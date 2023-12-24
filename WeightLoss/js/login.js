window.onload = function () {
  window.SN = SpatialNavigation;
  SN.init();
  manage_spatial_navigation("login-container"); // For login container
  manage_spatial_navigation("signup-container"); // For signup container
  manage_spatial_navigation("forgot-container"); // For forgot container
  manage_spatial_navigation("change-password-container"); // For forgot container
  SN.focus("#email");

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
      $("#loginButton").on("sn:enter-down", function (e) {
        console.log("loginButton enter");
        // signinApi();
        window.location.href = "index.html";
        SN.focus("#menu1");
      
        // var email = document.getElementById("email").value;
        // var password = document.getElementById("password").value;
        // console.log("password");
        // if (email == "") {
        //   login_container_message("Email empty");
        // } else if (password == "") {
        //   login_container_message("Password empty");
        // } else if (email && password) {
        //   localStorage.setItem("email", email);
        //   localStorage.setItem("password", password);
        //   signinApi();
        // }
      });

      $("#signUpButton").on("sn:enter-down", function (e) {
        $(".forget-pass-container").hide();
        $(".signup-container").show();
        $(".login-container").hide();
        SN.focus("right_side_signup");
      });
      break;

    case "signup-container":
      console.log("test signup..........................");
      set_focus("right_side_signup", "signup_username");

      $("#right_side_signup").on("sn:focused", function (e) {
        console.log("sign_up_container focused.");
        SN.focus("right_side_signup");
      });

      $("#sign_UpButton").on("sn:enter-down", function (e) {
        var signupUsername = document.getElementById("signup_username").value;
        var signupEmail = document.getElementById("signup_email").value;
        var signupPassword = document.getElementById("signup_password").value;
        var signupConfirmPassword = document.getElementById("signup_confirm_password").value;
        if (signupUsername == "" || signupEmail == "" || signupPassword == ""|| signupConfirmPassword == "") {
          var msg = "";
          if (signupUsername == "") msg = "Enter the username.";
          else if (signupEmail == "") msg = "Enter the email.";
          else if (signupPassword == "") msg = "Enter the password";
          else if (signupConfirmPassword == "") msg = "Enter the Confirm password";
          login_container_message(msg);
        } else {
          signUpAPI();
          console.log("Thank You for Sign Up Successsfully.");
          login_container_message("Sign up successsfully done. Please check your email for activation link.");
          $("#error_message").css("color", "#00FF00");
        }
      });

      $("#SignButton").on("sn:enter-down", function (e) {
        $("#sign_up_container").hide();
        $("#login_container").show();
        SN.focus("#signUpButton");
        $("input").val("");
        $(".error-box-forgot").hide();
        $(".error-box").hide();
        $(".error-box-signup").hide();
      });
      $("#forgotPass").on("sn:enter-down", function (e) {
        $(".forget-pass-container").show();
        $(".sign-up-container").hide();
        $(".login-container").hide();
        SN.focus("forget_pass_container");
      });

      break;

    case "forgot-container":
      set_focus("forget_pass_container", "forgot_email");
      $("#resetButton").on("sn:enter-down", function (e) {
        $(".error-box").hide();
        var forgot_email = document.getElementById("forgot_email").value;
        if (forgot_email == "") {
          console.log("Please enter email.");
          login_container_message("Please enter email.");
        } else if (forgot_email) {
          localStorage.setItem("prototype_forgot_email", forgot_email);
          sendOTPApi();
        }
      });

      // $("#resetButton").on("sn:enter-down", function (e) {
      //   $(".forget-pass-container").hide();
      //   $(".error-box-forgot").hide();
      //   $(".change-pass-container").show();
      //   $(".error-box").hide();
      //   SN.focus("#change_password");
      //   $("input").val("");
      // });
      $("#cencelButton").on("sn:enter-down", function (e) {
        $(".forget-pass-container").hide();
        $(".error-box-forgot").hide();
        $("#login_container").show();
        $(".error-box").hide();
        SN.focus("#forgotPass");
        $("input").val("");
      });

      break;

    case "change-password-container":
      set_focus("change_pass_container", "change_password");

      $("#change_pass_container").on("sn:focused", function (e) {
        console.log("change pass container focused.");
      });

      $("#changeButton").on("sn:enter-down", function (e) {
        console.log("changeButton enter");
        var password = document.getElementById("change_password").value;
        var confirm_password =
          document.getElementById("confirm_password").value;
        var otp = document.getElementById("otp").value;
        console.log("password");
        if (password == "") {
          login_container_message("Password empty");
        } else if (confirm_password == "") {
          login_container_message("Confirm password empty");
        } else if (otp == "") {
          login_container_message("Otp password is required.");
        } else if (password && confirm_password && otp) {
          localStorage.setItem("prototype_change_password", password);
          localStorage.setItem("prototype_confirm_password", confirm_password);
          localStorage.setItem("prototype_otp", otp);
          resetPasswordAPI();
        }
      });

      $("#changeCencelButton").on("sn:enter-down", function (e) {
        $(".forget-pass-container").show();
        $("#change_pass_container").hide();
        $(".error-box-forgot").hide();
        $("#login_container").hide();
        $(".error-box").hide();
        SN.focus("#resetButton");
        $("input").val("");
      });
  }
}

function login_container_message(msg) {
  console.log("login message");

  if (!_.isString(msg)) {
    if (msg.status == 404) msg = "Not found.";
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
