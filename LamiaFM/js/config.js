window.APP_NAME = "LamiaFM";
// window.FEED_URL = "http://projects.fusionitechnologies.com/lamiafm-cms/apis/feeds/v1/app-details-feed.php";
window.FEED_URL = "https://lamiafm.com/cms/api/feed_data";

// Variables for modal color setting
window.MODAL_BG_COLOR = "transparent";
window.MODAL_TEXT_COLOR = "#000000";
window.MODAL_ACTIVE_BUTTON_BG_COLOR = "#ec364f";
window.MODAL_ACTIVE_BUTTON_TEXT_COLOR = "#FFFFFF";
window.MODAL_DEACTIVE_BUTTON_BG_COLOR = "#515151";
window.MODAL_DEACTIVE_BUTTON_TEXT_COLOR = "#ffffff";

window.SETTING_DESC_SCROLLED = 0;
window.SETTING_SCROLLED_UP_DOWN_HEIGHT = 300;

window.MENU_INDEX = 0;
window.CAT_INDEX = 0;
window.LAMIA_DATA_ARRAY = "";

// These all static variables must be overwrite after successfully data parsing
window.NET_CONNECTION_ERR = "Please check your Internet connection and try again.";
window.TIMEOUT_MSG = "Request Timeout";
window.DATA_PARSE_ERR = "Data Parse Error";
window.APP_EXIT_MSG = "Are you sure you want to exit?";
window.PREV_DEPTH = 0;
window.PLAYER = "";
window.PLAYER_ERROR = 0;
window.PLAYER_STATE = "";
window.PLAYER_ERROR_STR = "The content is currently unavailable. Please check back later.";
window.INTERVAL = "";
window.VIDEO_CURRENT_PLAY_COUNTER = 1;
window.VIDEO_CURRENT_PLAY_COUNTER_INTERVAL = "";

// Forward/Backward interval
window.MEDIA_FORWARD_INTERVAL = 15000;
window.MEDIA_REWIND_INTERVAL = 10000;

window.hide_progress_bar = "";

window.DATA_OBJ =	{	0:	{
								menuName: "Watch",
							}, 
						1:	{
								menuName:	"Settings", 
								items:	{}
							}
					};