var listener = {
    /* When the download progresses (interval is platform-dependent) */
    onprogress: function (id, receivedSize, totalSize) {
        console.log('Received with id: ' + id + ', ' + receivedSize + '/' + totalSize);
    },

    /* When the user pauses the download */
    onpaused: function (id) {
        console.log('Paused with id: ' + id);
    },

    /* When the user cancels the download */
    oncanceled: function (id) {
        console.log('Canceled with id: ' + id);
    },

    /* When the download is completed */
    oncompleted: function (id, fullPath) {
        console.log('Completed with id: ' + id + ', full path: ' + fullPath);
    },

    /* When the download fails */
    onfailed: function (id, error) {
        console.log('Failed with id: ' + id + ', error name: ' + error.name);
    }
};

var successCallback = function onsuccess(files) {
    for (var i = 0; i < files.length; i++) {
        /* Display the file path with name */
        console.log('File path and name is: ' + files[i]);
    }
}
var errorCallback = function onerror(error) {
    console.log(error);
}


function downloadStart() {
    if (VOD_URL != '') {
        downloadRequest = new tizen.DownloadRequest(VOD_URL, 'removable_sda1');
        downloadId = tizen.download.start(downloadRequest, listener);
        console.log(downloadRequest, downloadId);

        var state = tizen.download.getState(downloadId);
        console.log(state);

        tizen.filesystem.listDirectory('removable_sda1', successCallback, errorCallback);

    } else console.log("URL empty.");
    // else downloadRequest = null;
}