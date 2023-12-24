function load_preview() {
  // $(".loader").show();
  console.log("load_preview")
  PREVIEW_VOD_URL = VOD_URL;
  VOD_URL = "";
  PREVIEW_PLAYER = "";
  var previewFeatures = [],
    type = "video/",
    url = "";

  if ((PREVIEW_VOD_URL.toLowerCase()).indexOf(".m3u") > -1) type += "hls";
  else type += "mp4";

  $("#preview_video_player").html(
    // '<div class="video-heading">'+SPECIAL_DATA_ARRAY['special_offers'][i]['title']+'</div>',
    '<video controls id="previewVideoPlayer1" style="max-width:100%;" poster="" preload="none" class="video_box"><source src="" type="' +
    type +
    '" id="previewVideoURL"></video>'
  );
  $("#previewVideoURL").attr("src", PREVIEW_VOD_URL);

  PREVIEW_MEDIA_OBJ = new MediaElementPlayer("previewVideoPlayer1", {
    features: previewFeatures,
    customError: "&nbsp;",
    pauseOtherPlayers: true,
    clickToPlayPause: false,
    alwaysShowControls: false,
    stretching: 'fill',
    success: function (previewMedia) {
      console.log("preview success...");
      // $(".loader").hide();
      $(".preview-video-inner").hide();
      $(".mejs__controls").hide();
      previewMedia.load();
      previewMedia.play();
      PREVIEW_PLAYER = previewMedia;
      previewMedia.addEventListener("loadstart", function (e) {
        console.log("loadstart....");
        if (PREVIEW_PLAYER) PREVIEW_PLAYER.play();
      });

      previewMedia.addEventListener('progress', function (e) {
        console.log("progress...");
      });

      previewMedia.addEventListener('ended', function (e) {
        console.log("preview end video...............");
        if (PAGE_INDEX != 0) set_vod_cover();
      });

      previewMedia.addEventListener('playing', function (e) {
        console.log("preview playing...............");
        $(".mejs__overlay-button").css("display", "none");
      });

      previewMedia.addEventListener('pause', function (e) {
        console.log("preview pause...............");
        $(".mejs__overlay-button").css("display", "none");
      });

      // previewMedia.addEventListener('timeupdate', function (e) {
      //   console.log("preview timeupdate...............");
      //   // $(".preview-video-inner").hide();
      // });

      previewMedia.addEventListener('canplay', function (e) {
        PLAY_VIDEO = true;
      });

      previewMedia.addEventListener("hlsError", function (e) {
        console.log("preview hlsError....");
        if (!e.data.fatal && PLAY_VIDEO) {
          PREVIEW_PLAYER.pause();
          PREVIEW_PLAYER.play();
        } else if (e.data.fatal && PLAY_VIDEO) {
          PREVIEW_PLAYER.pause();
          $(".video_player_error_message").text(CONTENT_NOT_AVAILABLE).css("display", "block");
          $(".mejs__overlay-button").css("display", "none");
        }
      });

      previewMedia.addEventListener('error', function (e) {
        console.log("preview error");
        $(".video_player_error_message").text(CONTENT_NOT_AVAILABLE).css("display", "block");
        $(".mejs__overlay-button").css("display", "none");
      });

    }
  });
}

var closePreviewVideo = function () {
  console.log("close Preview Video");
  PREVIEW_PLAYER.pause();
  PLAY_VIDEO = false;
};


function load_preview_player() {
  $(".video_player_error_message").hide();
  console.log("VOD_URL==>", VOD_URL);
  $(".video_player_error_message").hide();
  PLAYER_STATE = 1;
  if (PREVIEW_PLAYER) {
      PREVIEW_PLAYER.pause();
      PREVIEW_PLAYER.setSrc(VOD_URL);
      PREVIEW_PLAYER.load();
  } else {
      setTimeout(function () {
          load_preview();
      }, 1000);
  }
}
