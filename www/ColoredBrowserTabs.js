/*global cordova, module*/
const MODULE = "ColoredBrowserTabs";

module.exports = {
  openTab: function(
    url,
    color,
    controlColor = null,
    successCallback,
    errorCallback
  ) {
    if (url) {
      if (color) {
        cordova.exec(successCallback, errorCallback, MODULE, "openTab", [
          { link: url, tabColor: color, controlColor: controlColor }
        ]);
      } else {
        cordova.exec(successCallback, errorCallback, MODULE, "openTab", [
          { link: url, controlColor: controlColor }
        ]);
      }
    }
  },

  openTabWithAnimation: function(
    url,
    anim,
    color,
    controlColor = null,
    successCallback,
    errorCallback
  ) {
    if (url) {
      if (color) {
        cordova.exec(successCallback, errorCallback, MODULE, "openTab", [
          { link: url, animation: anim, tabColor: color, controlColor }
        ]);
      } else {
        cordova.exec(successCallback, errorCallback, MODULE, "openTab", [
          { link: url, animation: anim, controlColor }
        ]);
      }
    }
  }
};
