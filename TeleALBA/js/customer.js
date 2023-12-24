function adminLogin() {
    console.log("adminLogin");
    var url = APP_DOMAIN + "/dataservices/cdk?SP=md_adm.login_with_session('developer','Dev2016@','mySID',?int status)"
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        cache: false,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json', 'Accept-Language': 'en-US' },
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        crossDomain: true,
        success: function (response, statusCode, xhr) {
            console.log(response, statusCode, xhr);
            createCustomer();
        },
        error: function (xhr, error) {
            console.log(xhr);
            var msg;
            if (navigator.onLine) msg = "Something went wrong. Please contact admin.";
            else msg = NET_CONNECTION_ERR;
            login_error_message(msg);
        }
    });

}


function createCustomer() {
    console.log("createCustomer")
    var ID = webapis.network.getMac();
    ID = ID.replace(/:/g, '').toUpperCase();

    var yyyy = new Date().getFullYear();
    var mm = new Date().getMonth() + 1; // Months start at 0!
    var dd = new Date().getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    var startDate = mm + '/' + dd + '/' + yyyy;

    var url = APP_DOMAIN + "/dataservices/cdk?SP=md_cst.add_customer('mySID', '" + ID + "', '', '2','', '', '" + webapis.network.getIp() + webapis.network.getTVName() + "', 'w', '', '', 'w', 'w', '1001','', '', '', '', '', '','N', '1234', '1234', '1234', '1', 'N', 'N', 'N','Y', '" + startDate + "', '', 'A', '','', '401|46|15', '', '', 'N', 'Y','', '', '', '','', '', '', '', '', '', 'N', 'N', '', '', '', '', 'Y', '', '1', '',?,?int status)";
    console.log(url);
    var settings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        var json = xml2json(response);
        if (localStorage.getItem("telealba_app_user_id") != "") {
            console.log("get account id");
            getCustomerAccount();
        } else {
            console.log("111111");
            var msg;
            if (navigator.onLine) msg = "Something went wrong. Please contact admin.";
            else msg = NET_CONNECTION_ERR;
            login_error_message(msg);
        }
    }).fail(function (xhr, error) {
        console.log(xhr);
        var msg;
        if (navigator.onLine) msg = "Something went wrong. Please contact admin.";
        else msg = NET_CONNECTION_ERR;
        login_error_message(msg);
    });
}

function getCustomerAccount() {
    console.log("getCustomerAccount");
    var url = APP_DOMAIN + "/dataservices/cdk?SP=md_cst.get_customer_account('mySID', '" + localStorage.getItem("telealba_app_user_id") + "',?,?,?,?int status)";
    console.log(url);
    var settings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        accountXML(response);
        if (localStorage.getItem("telealba_app_user_id") != "") {
            console.log("login api");
            loginApi();
        }
    }).fail(function (xhr, error) {
        console.log(xhr);
        var msg;
        if (navigator.onLine) msg = "Something went wrong. Please contact admin.";
        else msg = NET_CONNECTION_ERR;
        login_error_message(msg);
    });
}


function xml2json(xml) {
    var status = "";
    try {
        var obj = {};
        if (xml.children.length > 0) {
            for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var nodeName = item.nodeName;
                if (item.getAttribute('status')) {
                    status = item.getAttribute("status");
                }

                if (status == 0 || status == -99) {
                    if (item.getAttribute('CUSTOMER_ID')) localStorage.setItem("telealba_app_user_id", item.getAttribute("CUSTOMER_ID"));
                } else if (status == -11) {
                    var ID = webapis.network.getMac();
                    ID = ID.replace(/:/g, '').toUpperCase();
                    localStorage.setItem("telealba_app_user_id", ID);
                }

                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = xml2json(item);
                } else {
                    if (typeof (obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];

                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                        if (item.getAttribute('status')) {
                            obj[nodeName].push(item.getAttribute("status"));
                        }
                        if (item.getAttribute('CUSTOMER_ID')) {
                            obj[nodeName].push(item.getAttribute("CUSTOMER_ID"));
                        }
                    }
                    obj[nodeName].push(xml2json(item));
                }
            }
        } else {
            obj = xml.textContent;
        }
        return obj;

    } catch (e) {
        console.log(e.message);
        var msg;
        if (navigator.onLine) msg = "Something went wrong. Please contact admin.";
        else msg = NET_CONNECTION_ERR;
        login_error_message(msg);
    }
}

function accountXML(xml) {
    try {
        var obj = {};
        var status = "";
        if (xml.children.length > 0) {
            for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var nodeName = item.nodeName;
                if (item.getAttribute('status')) {
                    status = item.getAttribute("status");
                }
                if (status == 0) {
                    if (item.getAttribute('ACCOUNT_ID')) localStorage.setItem("telealba_app_user_id", item.getAttribute("ACCOUNT_ID"));
                }

                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = accountXML(item);
                } else {
                    if (typeof (obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];

                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(accountXML(item));
                }
            }
        } else {
            obj = xml.textContent;
        }

        return obj;

    } catch (e) {
        var msg;
        if (navigator.onLine) msg = "Something went wrong. Please contact admin.";
        else msg = NET_CONNECTION_ERR;
        login_error_message(msg);
    }
}