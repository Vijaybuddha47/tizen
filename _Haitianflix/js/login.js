window.onload = function () {
    console.log("login screen");
    window.SN = SpatialNavigation;
    SN.init();
    register_number_keys();
    set_focus('login_container', 'userName');
    set_focus('code_container', 'getNewCode');
    set_focus('qr_code_container', 'getQrBack');


    document.getElementById('userName').value = "varsha@fusionitechnologies.com";
    document.getElementById('password').value = "12345678";

    SN.focus("#signinButton");

    if (localStorage.getItem('haitianflix_user_name') && localStorage.getItem('haitianflix_user_password')) {
        SN.focus("#signinButton");
        loginApi();
    } else if (localStorage.getItem('haitianflix_qr_code') && localStorage.getItem('user_code')) {
        SN.focus("#signinWithQRCode");
        getLoginQRCode();
    } else if (localStorage.getItem('haitianflix_user_login_code') && localStorage.getItem('user_code')) {
        SN.focus("#signinWithCode");
        checkLoginWithCode();
    } else SN.focus("login_container");

    $('#signinButton').on('sn:enter-down', function (e) {
        console.log("signinButton enter");
        var userName = document.getElementById('userName').value;
        var password = document.getElementById('password').value;

        if (userName == '') {
            show_hide_login_error("Username empty", "Username is required.")
        } else if (password == '') {
            show_hide_login_error("Password empty", "Password is required.")
        } else if (userName != '' && password != '') {
            localStorage.setItem('haitianflix_user_name', userName);
            localStorage.setItem('haitianflix_user_password', password);
            loginApi();
        }
    });

    $('#signinWithQRCode').on('sn:enter-down', function (e) {
        console.log("signinWithQRCode enter");
        QRCode();

    });

    $('#signinWithCode').on('sn:enter-down', function (e) {
        console.log("signinWithCode enter");
        getLoginCode();
    });

    //Code container action
    $('#code_container').on('sn:focused', function (e) {
        console.log("code_container focus");
    });

    $('#getNewCode').on('sn:enter-down', function (e) {
        console.log("getNewCode enter");
        getLoginCode();
    });

    $('#getQrBack').on('sn:enter-down', function (e) {
        console.log("getQrBack enter");
        clearInterval(LOGIN_WITH_CODE_TIMER);
        $("#qr_code_container").removeClass("active").hide();
        $("#login_container").addClass("active").show();
        SN.focus("login_container");
    });

    $('#getBack').on('sn:enter-down', function (e) {
        console.log("getBack enter");
        clearInterval(LOGIN_WITH_CODE_TIMER);
        $("#code_container").removeClass("active").hide();
        $("#login_container").addClass("active").show();
        SN.focus("login_container");
    });

    $('#show_password').on('sn:enter-down', function (e) {
        show_pass();
    });
}

// When something press from remote keys
$(window).keydown(function (evt) {
    console.log("key event", evt.keyCode);
    switch (evt.keyCode) {
        case 10009: //Back/Return
            if ($("#login_container").hasClass("active")) {
                console.log("exit app");
                tizen.application.getCurrentApplication().exit();
            } else if ($("#code_container").hasClass("active")) {
                clearInterval(LOGIN_WITH_CODE_TIMER);
                $("#code_container").removeClass("active").hide();
                $("#login_container").addClass("active").show();
                SN.focus("login_container");
            } else if ($("#qr_code_container").hasClass("active")) {
                clearInterval(LOGIN_WITH_CODE_TIMER);
                $("#qr_code_container").removeClass("active").hide();
                $("#login_container").addClass("active").show();
                SN.focus("login_container");
            }
            break;

        case 37: // LEFT arrow
            console.log("left key");
            if ($('.login_container').hasClass('active') && ($("#userName").is(":focus") || $("#password").is(":focus"))) {
                var textEntered = $.trim($(':focus').val());
                if (textEntered) controlLeftArrowKeys();
            }
            break;

        case 39: // RIGHT arrow
            console.log("right key");
            if ($('.login_container').hasClass('active') && ($("#userName").is(":focus") || $("#password").is(":focus"))) {
                var textEntered = $.trim($(':focus').val());
                var input = document.getElementById($(":focus").attr("id"));
                var currentpos = input.selectionStart;
                if (textEntered && input.value.length > currentpos) controlrightArrowKeys();
            }
            break;

        case 65376: // Done from IME keyboard
            console.log("OK from keyboard...");
            if ($(".login_container").hasClass("active")) {
                if ($('#userName').is(":focus")) SN.focus('#password');
                else if ($('#password').is(":focus")) SN.focus('#signinButton');
            }
            break;

        default:
            console.log("Remote keyCode: ", evt.keyCode);
    }
});

function loginApi() {
    console.log("loginApi");
    $("#login_loader").show();
    $.ajax({
        type: "POST",
        url: APP_DOMAIN + "/login",
        async: true,
        dataType: 'json',
        data: { "email": localStorage.getItem('haitianflix_user_name'), "password": localStorage.getItem('haitianflix_user_password'), "device_id": webapis.network.getMac() },
        cache: false,
        crossDomain: true,
        timeout: REQUEST_TIMEOUT * 1000,
        success: function (data) {
            $("#login_loader").hide();
            console.log(data);
            if (data.status == 1 && data.subscription_status == "ACTIVE") {
                $.each(data, function (index, value) {
                    localStorage.setItem(index, value);
                });
                window.location.href = "home.html";
            } else {
                console.log("Something went wrong.")
                show_hide_login_error(data.subscription_status, data.msg);
            }
        },
        error: function (xhr, error) {
            console.log("error", xhr, error);
            ajaxError(xhr);
        }
    });
}

function getLoginCode() {
    console.log("getLoginCode");
    $("#login_loader").show();
    $.ajax({
        type: "GET",
        url: APP_DOMAIN + "/code",
        async: true,
        cache: false,
        crossDomain: true,
        timeout: REQUEST_TIMEOUT * 1000,
        success: function (data) {
            $("#login_loader").hide();
            console.log(data);
            if (data.login_code) {
                $("#loginCodeText").text(data.login_code);
                $("#login_container").removeClass("active").hide();
                $("#code_container").addClass("active").show();
                $("#login_loader").hide();
                SN.focus("#getNewCode");
                localStorage.setItem('haitianflix_user_login_code', data.login_code);
                checkLoginWithCode();
            } 
            // else {
            //     show_hide_login_error("Login Code", "Something went wrong.");
            // }
        },
        error: function (xhr, error) {
            console.log("error", xhr, error);
            // ajaxError(xhr);
        }
    });
}

function QRCode() {
    console.log("QRCode");
    $("#login_loader").show();
    $.ajax({
        type: "GET",
        url: APP_DOMAIN + "/qr-code",
        async: true,
        cache: false,
        crossDomain: true,
        timeout: REQUEST_TIMEOUT * 1000,
        success: function (data) {
            $("#login_loader").hide();
            console.log(data);
            if (data.code) {
                $("#login_loader").hide();
                $("#loginCodeText").text(data.login_code);
                $("#login_container").removeClass("active").hide();
                $("#qr_code_container").addClass("active").show();
                SN.focus("qr_code_container");
                localStorage.setItem('haitianflix_qr_code', data.code);
                localStorage.setItem('haitianflix_qr_img', data.qrcode);
                $("#loginQRCodeImg").attr('src', localStorage.getItem('haitianflix_qr_img'));
                LOGIN_WITH_CODE_TIMER = setInterval(function () {
                    getLoginQRCode();
                }, 5000);
            } 
            // else {
            //     show_hide_login_error("Login QR Code", "Something went wrong.");
            // }
        },
        error: function (xhr, error) {
            console.log("error", xhr, error);
            // ajaxError(xhr);
        }
    });
}

function getLoginQRCode() {
    console.log("getLoginQRCode");
    $.ajax({
        type: "POST",
        url: APP_DOMAIN + "/login-with-qr-code",
        async: true,
        cache: false,
        data: { "qr_code": localStorage.getItem('haitianflix_qr_code') },
        crossDomain: true,
        timeout: REQUEST_TIMEOUT * 1000,
        success: function (data) {
            console.log(data);
            if (data.status == 1) {
                clearInterval(LOGIN_WITH_CODE_TIMER);
                $.each(data, function (index, value) {
                    localStorage.setItem(index, value);
                });
                window.location.href = "home.html";
            } 
            // else {
            //     show_hide_login_error("Login QR Code", "Something went wrong.");
            // }
        },
        error: function (xhr, error) {
            console.log("error", xhr, error);
            // ajaxError(xhr);
        }
    });
}


function loginWithCodeApi() {
    console.log("loginApi");
    $.ajax({
        type: "POST",
        url: APP_DOMAIN + "/code_login",
        async: true,
        dataType: 'json',
        data: { "login_code": localStorage.getItem('haitianflix_user_login_code') },
        cache: false,
        crossDomain: true,
        timeout: REQUEST_TIMEOUT * 1000,
        success: function (data) {
            $("#login_loader").hide();
            console.log(data);
            if (data.status == 1 && data.subscription_status == "ACTIVE") {
                clearInterval(LOGIN_WITH_CODE_TIMER);
                $.each(data, function (index, value) {
                    localStorage.setItem(index, value);
                });
                window.location.href = "home.html";
            }
            //  else {
            //     console.log("Something went wrong.")
            //     show_hide_login_error("Error: ", "Please contact with admin.");
            // }
        },
        error: function (xhr, error) {
            console.log("error", xhr, error);
            // ajaxError(xhr);
        }
    });
}

function checkLoginWithCode() {
    clearInterval(LOGIN_WITH_CODE_TIMER);
    if ($("#code_container").hasClass("active")) {
        LOGIN_WITH_CODE_TIMER = setInterval(function () {
            loginWithCodeApi();
        }, 10000);
    }
}


function show_hide_login_error(reason, msg) {
    console.log("show_hide_login_error");
    $("#login_loader").hide();
    $("#error_title").text(reason);
    $("#error_message").text(" :" + msg);
    $("#error_overlay").show("slow");
    setTimeout(function () {
        $("#error_overlay").hide("slow");
    }, 5000);
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

function show_pass() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
        $("img.checkbox_image").attr("src", './images/checkbox_selected.png');
    } else {
        password.type = "password";
        $("img.checkbox_image").attr("src", './images/checkbox.png');
    }
}


function ajaxError(xhr) {
    $("#login_loader").hide();
    if (navigator.onLine) msg = SOMETHING_WENT_WRONG;
    else msg = NET_CONNECTION_ERR;
    show_hide_login_error("Network Connection", NET_CONNECTION_ERR);
}