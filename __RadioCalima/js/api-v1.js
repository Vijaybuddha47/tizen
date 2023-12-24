function checkVideoURL() {
    console.log("checkVideoURL");
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
            console.log(response);
            load_video();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 403) errorMsg = "Your Are Not Authorized To View This Content";
            else if (jqXHR.status === 404) errorMsg = "Content Currently Not Available";
            else if (jqXHR.status === 0) errorMsg = NET_CONNECTION_ERR;
            else errorMsg = "Something went wrong";
            console.log(jqXHR, errorMsg);
            $(".video_container").addClass("active");
            $("#loader").hide();
            $("#error_text").text(errorMsg);
            $(".video-inner").hide();
            $(".video_player_error_message").show();
        }
    });

}

function fetchMetadata(options) {
    if (PLAY_AUDIO) {
        if (options.metadataType === "shout") {
            console.log("11111111");
            getShoutMetadata(options);
            setInterval(function () {
                console.log("222222222");
                getShoutMetadata(options);
            }, 15000);
        }
        else {
            // if (webapis.avplay.getState() == "PLAYING" || webapis.avplay.getState() == "NONE") {
            var stats = new IcecastMetadataStats(options.stream_url, {
                sources: ["icy"],
                paused: true,
                onStats: function (stats) {
                    console.log("333333333", stats);
                    searchSong(stats.icy);
                },
            });
            stats.start();
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
            }
        });
    } catch (e) {
        console.log("fetch Shout radio station error", e);
    }

}


function searchSong(metadata) {
    if (PLAY_AUDIO) {
        console.log("searchSong", metadata);
        // try {
            $.getJSON(getArtURL(metadata), function (data, textStatus) {
                if (textStatus === "success" && PLAY_AUDIO) {
                    console.log("444444444");
                    updateUI($.extend(metadata, data));
                } else if (metadata.length == 0) {
                    onerror();
                }
            });
        }
        else{
        // } catch (error) {
            console.log("Search song error");
        }
    // }

}

// call API METADATA
function updateUI(songData) {
    if (PLAY_AUDIO) {
        console.log("updateUI", songData, songData.results);
        var data = songData.results;
        if (data[0]) {
            var artwork = data[0].artworkUrl100;
            var newArtWork = artwork.replace("100x100bb", "600x600bb");
            $("#music_cover").attr("src", newArtWork);
            $("#current_music_title").text(songData.StreamTitle);
        }
        else if ((data.length == 0 || songData.length == 0)) {
            onerror();
        }

        // songTitle[0].innerHTML = songData.StreamTitle;
        // if (songData.resultCount > 0) {
        //     let data = songData.results;
        //     let artwork = data[0] && data[0].artworkUrl100;
        //     let newArtWork = artwork.replace("100x100bb", "600x600bb");
        //     coverImg.attr("src", newArtWork);
        //     $(".background").css("background-image", `url(${newArtWork})`);
        // } else {
        //     coverImg.attr("src", "./assets/img/radio_logo.png");
        //     $(".background").css(
        //         "background-image",
        //         `url(${"./assets/img/radio_logo.png"})`
        //     );
        // }
    }
}


function getArtURL(metadata) {
    if (PLAY_AUDIO) {
        var itunesSearchEndpoint =
            "https://itunes.apple.com/search?limit=1&version=2";
        var streamtitleArr = metadata.StreamTitle.split("-");
        var artist = encodeURIComponent(streamtitleArr[0]);
        var track = encodeURIComponent(streamtitleArr.pop());
        return `${itunesSearchEndpoint}&term=${artist} ${track}&entity=song`;
    }
}

function onerror() {
    console.log("onerror....");
    $("#music_cover").attr("src", SELECTED_IMG);
    $("#current_music_title").text("Calima TV");
}