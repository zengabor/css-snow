(function () {
  "use strict"

  /** the container for snow flakes **/
  var snowCloud

  /** returns an integer between 0 and `max` **/
  var randInt = function (max) { return Math.floor(Math.random()*(max + 1)) }

  var addSnowflakes = function (count) {
    count = count || 50
    if (!snowCloud) {
      snowCloud = document.createElement("div")
      snowCloud.className = "zensnow-cloud"
      document.body.insertBefore(snowCloud, document.body.firstChild)
    }
    for (var i = 0; i < count; i++) {
      var snowflake = document.createElement("i")
      snowflake.className = [
          "zensnow", 
          "size-" + randInt(2), 
          "speed-" + randInt(2), 
          "opac-" + randInt(2), 
          "delay-" + randInt(5)
        ].join(" ")
      snowflake.style.left = Math.floor(Math.random()*99) + "%"
      snowCloud.appendChild(snowflake)
    }
  }

  var clearSnowCloud = function () {
    if (snowCloud) {
      snowCloud.parentNode.removeChild(snowCloud)
      snowCloud = null
    }
  }

  window.snow = {
    add: addSnowflakes,
    clear: clearSnowCloud
  }

})();
