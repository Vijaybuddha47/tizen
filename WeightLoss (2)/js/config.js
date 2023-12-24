window.APP_NAME = "Tizen weight loss";
//projects.fusionitechnologies.com/fusioni-proto/public/api/v1/register
window.APP_DOMAIN = "http://34.225.204.47/api";

window.MENU_ARRAY = [
  [
    "WORKOUT",
    "PROGRAM"
  ],
  [
    ""
  ],
  [
    "NUTRITION",
    "NUTRITION_VIDEO"
  ],
  [
    "COACHING",
    "COACHING_VIDEO"
  ],
  [
    "TELEHEALTH",
    "LIVEFITNESS",
    "LIVENUTRITION"
  ],
  [
    ""
  ]
];

window.MENU_HEADING_ARRAY = [
  [
    "INDIVIDUAL VIDEOS",
    "COMPLETE PROGRAM"
  ],
  [
    ""
  ],
  [
    "NUTRITION",
    "NUTRITION VIDEO"
  ],
  [
    "COACHING",
    "COACHING VIDEO"
  ],
  [
    "TELEHEALTH",
    "LIVEFITNESS",
    "LIVENUTRITION"
  ],
  [
    ""
  ]
];

window.TYPE_ARRAY = [
  [
    "WORKOUT",
    "NUTRITIONIST",
    "COACHING",
    "TELEHEALTH"
  ]
];

//All global array
window.DATA_ARRAY = {};
window.TELE_DATA_ARRAY = {};
window.SELECTED_ITEM_DATA = {};
window.MY_VIDEO_DATA_ARRAY = {};
window.MY_PROGRAM_DATA_ARRAY = {};

//Common variables used in app
window.FOCUSED_ITEM_DATA = '';
window.FIRST_PAGE_FOCUSED_ITEM = '';
window.THIRD_PAGE_FOCUSED_ITEM = '';
window.FOURTH_PAGE_FOCUSED_ITEM = '';
window.SELECTED_MENU = "";
window.SHOW_FOCUSED_ITEM = "";
window.LAST_FOCUSED_ITEM = "";
window.LAST_SELECTED_ITEM = "";
window.MENU_INDEX = 0;
window.TAB_INDEX = 0;
window.PAGE_INDEX = 0;
window.NAVIGATION_INDEX = 30;
//season variable used in app
window.SELECTED_SEASON = "season_0";
//Video related variables
window.TIMER = null;
window.VOD_COUNTER = 0;
window.VOD_URL = '';
window.PLAY_TIMER = "";

//Static last tabindex 0
//8,9,10 tabindex reserved

// Forward/Backward interval
window.MEDIA_FORWARD_INTERVAL = 15000;
window.MEDIA_REWIND_INTERVAL = 10000;
window.hide_progress_bar = "";
window.hide_programme_details = "";

// Preview player related variable
window.PREVIEW_PLAYER = '';
window.PREVIEW_VOD_URL = '';
window.PREVIEW_MEDIA_OBJ = '';
window.VOD_URL = '';

//Error messages
window.REQUEST_TIMEOUT = 90; // In second
window.NET_CONNECTION_ERR =
  "Please check your Internet connection and try again.";
window.TIMEOUT_MSG = "Request Timeout";
window.DATA_PARSE_ERR = "Data Parse Error";
window.APP_EXIT_MSG = "Do you want to exit app?";
window.PLAYER_ERR =
  "The content is currently unavailable. Please check back later.";
window.NOT_AVAILABLE = "No content available";
window.TIME_STAMP = "";
window.NO_RECORD_MSG = "No record found.";
window.SOMETHING_WENT_WRONG = "something error";
window.CONTENT_NOT_AVAILABLE = "Content Currently Not Available";
