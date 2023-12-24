var canvas;
var context;
var clockRadius;

var watchID;
var downloadRequest;
var downloadId;

window.onload = function () {
    console.log("loaded...");
    window.VOD_URL = "";
    window.SN = SpatialNavigation;
    SN.init();
    
    loginApi();

    SN.remove("button_container");
    SN.add({
        id: "button_container",
        selector: "#button_container .focusable",
        restrict: "self-first",
        defaultElement: "#download",
        enterTo: "last-focused",
    });
    SN.makeFocusable();

    SN.focus("button_container");

    $("#button_container").on("sn:focused", function (e) {
        console.log("button focus...");
    });

    $("#button_container").on("sn:enter-down", function (e) {
        console.log("button enter...");
        // VOD_URL = 'http://download.tizen.org/tools/README.txt';
        VOD_URL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
        downloadStart();
    });





    /* Success event handler */
    function checkCorruptedRemovableDrives(storages) {
        console.log("storages", storages);
        for (var i = 0; i < storages.length; i++) {
            if (storages[i].type == 'EXTERNAL') {
                var path = storages[i].label + '/app-storage';
                tizen.filesystem.createDirectory(path, successCallback, errorCallback);
                tizen.filesystem.listDirectory(storages[i].label, onsuccess, onerror);
                break;
            }

            if (storages[i].type != 'EXTERNAL')
                continue;
            if (storages[i].state == 'UNMOUNTABLE')
                console.log('External drive ' + storages[i].label + ' is corrupted.');
        }
    }

    /* Search for the storages */
    tizen.filesystem.listStorages(checkCorruptedRemovableDrives);


    /* Success event handler */
    function onStorage(storage) {
        console.log('Storage found:' + storage.label);
    }

    /* Retrieve a storage */
    tizen.filesystem.getStorage('music', onStorage);


    var newPath = 'documents/subDir'
    var successCallback = function (newPath) {
        console.log('New directory has been created: ' + newPath);
    }
    var errorCallback = function (error) {
        console.log(error);
    }

    tizen.filesystem.createDirectory('documents/newDir', successCallback, errorCallback);

    function onsuccess(files) {
        for (var i = 0; i < files.length; i++) {
            /* Display the file path with name */
            console.log('File path and name is: ' + files[i]);
        }
    }
    function onerror(error) {
        console.log(error);
    }

    tizen.filesystem.listDirectory('documents', onsuccess, onerror);



    // function onsuccess(files) {
    //     for (var i = 0; i < files.length; i++) {
    //         /* Display the file URI */
    //         console.log('File URI is: ' + toURI(files[i]));
    //     }
    // }
    // function onerror(error) {
    //     console.log(error);
    // }
    // tizen.filesystem.listDirectory('documents', onsuccess, onerror);

    function loginApi() {
        try {
            var settings = {
                "url": "https://backend-zxus9.ondigitalocean.app/api/v0/auth/pro/login",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                "data": JSON.stringify({
                    "email": "testing09k@gmail.com",
                    "password": "Test@123",
                    "rememberMe": true,
                }),
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown)
            });
        } catch (error) {
            console.log("Error 1: ", error);
        }
    }





    /* Define the event handler */
    function onStorageStateChanged(storage) {
        if (storage.state == 'MOUNTED')
            console.log('Storage ' + storage.label + ' was added!');
    }

    /* Register the event handler */
    watchID = tizen.filesystem.addStorageStateChangeListener(onStorageStateChanged);

    // To stop receiving the notifications
    // tizen.filesystem.removeStorageStateChangeListener(watchID);





    // canvas = document.querySelector("canvas");
    // context = canvas.getContext("2d");
    // document.width = 600;
    // clockRadius = document.width / 2;

    // //Assigns the area that will use Canvas
    // canvas.width = document.width;
    // canvas.height = canvas.width;

    // // add eventListener for keydown
    // document.addEventListener('keydown', function(e) {
    // 	switch(e.keyCode){
    // 	case 37: //LEFT arrow
    // 		break;
    // 	case 38: //UP arrow
    // 		break;
    // 	case 39: //RIGHT arrow
    // 		break;
    // 	case 40: //DOWN arrow
    // 		break;
    // 	case 13: //OK button
    // 		break;
    // 	case 10009: //RETURN button
    // 	tizen.application.getCurrentApplication().exit();
    // 		break;
    // 	default:
    // 		console.log('Key code : ' + e.keyCode);
    // 		break;
    // 	}
    // });

    // setInterval(watch, 500);
}

function watch() {
    //Erase the previous time
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    //Import the current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;

    hours = hours > 12 ? hours - 12 : hours;
    context.save();

    //Assigns the clock creation location in the middle of the canvas
    context.translate(canvas.width / 2, canvas.height / 2);

    //Assign the style of the number which will be applied to the clock plate
    context.beginPath();
    context.font = "30px monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#555";

    //Create numbers 1 to 12 in a circle
    for (var i = 1; i <= 12; i++) {
        var angle = (i - 3) * (Math.PI * 2) / 12,
            dx = clockRadius * 0.7 * Math.cos(angle),
            dy = clockRadius * 0.7 * Math.sin(angle);
        context.fillText(i, dx, dy);
    }

    //Hour needle
    context.save();
    angle = (hour - 3) * (Math.PI * 2) / 12; //Indicate the current time
    context.rotate(angle);
    context.beginPath();
    context.lineWidth = 4;
    context.lineJoin = "round";
    context.moveTo(-15, -5);
    context.lineTo(-15, 5);
    context.lineTo(clockRadius * 0.4, 0);
    context.closePath();
    context.strokeStyle = "#333";
    context.stroke();
    context.restore(); //Initialize state

    //Minute needle
    context.save();
    angle = (minute - 15) * (Math.PI * 2) / 60;
    context.rotate(angle);
    context.beginPath();
    context.moveTo(-15, -4);
    context.lineTo(-15, 4);
    context.lineTo(clockRadius * 0.7, 1);
    context.lineTo(clockRadius * 0.7, -1);
    context.fill();
    context.restore();

    //Second needle
    context.save();
    angle = (seconds - 15) * (Math.PI * 2) / 60;
    context.rotate(angle);
    context.beginPath();
    context.moveTo(-15, -2);
    context.lineTo(-15, 2);
    context.lineTo(clockRadius * 0.7, 0);
    context.fillStyle = "#f00";
    context.fill();
    context.restore();

    context.restore();
}
