'use strict';
// Window's full width and height (excludes Window Manager’s upper decoration bar)
console.log(window.outerWidth + " - " + window.outerHeight);
// Opens a new window (returns a reference to that window so you can close it from here).
// window.open("https://www.google.com");
// screen object properties
console.log(window.screen.width + " - " + window.screen.height); // Screen width and height (screen resolution)
console.log(window.screen.availWidth + " - " + window.screen.availHeight); // Excludes Operating System bars
// navigator object properties
console.log(window.navigator.userAgent); // Prints browser information
window.navigator.geolocation.getCurrentPosition(function(position) {
 console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
});
// Global variables
var glob = "Hello"; // ONLY WITH var
console.log(window.glob); // Prints "Hello". Global variables are stored in the window object.
// Like global variables, we can omit the window object (it's implicit)
console.log(history.length); // Number of pages in history. Same as window.history.length

console.log(location.href); // Prints current URL
console.log(location.host); // Prints server's hostname (or ip) like "localhost" or "192.168.0.34"
console.log(location.port); // Prints server's port number (usually 80)
console.log(location.protocol); // Prints used protocol (http or https)

document.getElementById("go")
        .addEventListener("click", e => {
            location.assign("https://google.es");
        });
