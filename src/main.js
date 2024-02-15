// houdini //
(async function () {
  // Polyfill for older browsers//
  if (CSS["paintWorklet"] === undefined)
    await import(
      "https://unpkg.com/css-paint-polyfill@next/dist/css-paint-polyfill.js"
    );
  // Paint Worklet https://github.com/hazmi/curved-line //
  CSS.paintWorklet.addModule(
    "https://unpkg.com/curved-line@1.0.0/curved-line.js"
  );
})();

var menuUL = document.getElementsByTagName("ul");
var heightOful = menuUL[0].scrollHeight;
var btnToggle = document.getElementsByClassName("btn-toggle");
btnToggle[0].addEventListener("click", function () {
  if (menuUL[0].style.maxHeight) {
    menuUL[0].style.maxHeight = null;
  } else {
    menuUL[0].style.maxHeight = menuUL[0].scrollHeight + "px";
  }
});
