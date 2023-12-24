//set home page all list
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


function manage_spatial_navigation(containerClass) {
  switch (containerClass) {
    case "main_container":
      console.log("images container");
      set_focus("home_container", "menu0");
      console.log("images container..................");
      // When menu foucs
      $("#home_container").on("sn:focused", function (e) {
        console.log("images container..................123", e.target.id);
        var id = e.target.id;
      });

      // When menu enter
      $("#home_container").on("sn:enter-down", function (e) {
        console.log("left sidebar button enter... " + id);
        var id = e.target.id; 
        selected_menu_data(id);
      });

      break;


      // case "row-container-inner":
      //   set_focus("left_list_container", "menu_list");
  
      //   // When menu foucs
      //   $("#menu_list").on("sn:focused", function (e) {
      //     console.log("images container");
      //     SN.focus("#menu1");
      //   });
  
      //   // When menu enter
      //   $("#menu_container").on("sn:enter-down", function (e) {
      //     console.log("left sidebar button enter...");
      //   });
  
      //   break;
  
  }
}

