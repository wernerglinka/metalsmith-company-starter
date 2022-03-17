// NOTE: main.js is called at the end of the document body - no DOMContentLoaded event needed

import loadResponsiveImage from "./modules/load-responsive-image";
import navigation from "./modules/navigation";

function initPage() {
  navigation.init();
  loadResponsiveImage.init();
}

(function() {
  initPage();
})();
