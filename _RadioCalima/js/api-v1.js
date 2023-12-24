function checkVideoURL() {
    var errorMsg = "";
    $.ajax({
        type: "GET",
        url: VOD_URL,
        async: true,
        cache: false,
        headers: { 'Accept': 'application/json', 'Accept-Language': 'en-US', 'UA-Resolution': 240 },
        crossDomain: true,
        timeout: REQUEST_TIMEOUT * 1000,
        success: function (response) {
            load_video();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 403) errorMsg = "Your Are Not Authorized To View This Content";
            else if (jqXHR.status === 404) errorMsg = "Content Currently Not Available";
            else if (jqXHR.status === 0) errorMsg = NET_CONNECTION_ERR;
            else errorMsg = "Something went wrong";
            console.log(jqXHR, errorMsg);
            $(".video_container").removeClass("active");
            $("#loader").hide();
            $("#error_text").text(errorMsg);
            $(".video-inner").hide();
            $(".video_player_error_message").show();
            hide_show_modal(true, "RETRY_CANCEL", errorMsg);
        }
    });

}

function fetchMetadata(options) {
    if (options.metadataType === "shout") {
        getShoutMetadata(options);
        setInterval(function () {
            getShoutMetadata(options);
        }, 15000);
    }
    else {
        try {
            stats = new IcecastMetadataStats(options.stream_url, {
                sources: ["icy"],
                interval: "10",
                onStats: function (stats) {
                    searchSong(stats.icy);
                },
            });
            stats.start();
        } catch (e) {
            console.log("Error: ", e);
            onerror();
        }
    }
}

function getShoutMetadata(options) {
    console.log("getShoutMetadata", options);
    var requestUrl = options.stream_url + "/statistics?json=1";
    try {
        $.getJSON(requestUrl, function (data, jqXHR) {
            if (jqXHR === "success") {
                if (data.streams && data.streams[0]) {
                    searchSong({ StreamTitle: data.streams[0].songtitle });
                }
            } else onerror();
        });
    } catch (e) {
        console.log("fetch Shout radio station error", e);
        onerror();
    }

}


function searchSong(metadata) {
    console.log("searchSong", metadata);
    try {
        $.getJSON(getArtURL(metadata), function (data, textStatus) {
            if (textStatus === "success" && (webapis.avplay.getState() == "PLAYING")) {
                updateUI($.extend(metadata, data));
            } else if (metadata.length == 0) {
                onerror();
            }
        });
    } catch (e) {
        console.log("Search song error: ", e);
        onerror();
    }

}

// call API METADATA
function updateUI(songData) {
    console.log("updateUI", songData, songData.results);
    var data = songData.results;
    try {
        if (data[0]) {
            var artwork = data[0].artworkUrl100;
            var newArtWork = artwork.replace("100x100bb", "600x600bb");
            $("#music_cover").attr("src", newArtWork);
            $("#current_music_title").text(songData.StreamTitle);
        } else if (songData.results.length == 0 && songData.StreamTitle !== "") {
            if (songData.StreamTitle != "") $("#current_music_title").text(songData.StreamTitle);
            $("#music_cover").attr("src", $("#" + SELECTED_ITEM).find(".list_thumbnail").attr("src"));
        }
        else if ((data.length == 0 || songData.length == 0)) {
            onerror();
        }
    } catch (e) {
        console.log("getArtURL error: ", e);
        onerror();
    }
}


function getArtURL(metadata) {
    try {
        var itunesSearchEndpoint =
            "https://itunes.apple.com/search?limit=1&version=2";
        var streamtitleArr = metadata.StreamTitle.split("-");
        var artist = encodeURIComponent(streamtitleArr[0]);
        var track = encodeURIComponent(streamtitleArr.pop());
        return `${itunesSearchEndpoint}&term=${artist} ${track}&entity=song`;
    } catch (e) {
        console.log("getArtURL error: ", e);
        onerror();
    }
}

function onerror() {
    console.log("onerror....");
    $("#music_cover").attr("src", "images/cover_" + $("#" + SELECTED_ITEM).index() + ".png");
    $("#current_music_title").text("RADIO CALIMA - " + $("#" + SELECTED_ITEM)[0].innerText);
}