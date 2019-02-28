// You can use either a string for the player ID (i.e., `player`),
// or `document.querySelector()` for any selector
// var player = new MediaElementPlayer('player1', {
//     pluginPath: "./node_modules/mediaelement/build/",
//     features: ['quality'],
//     qualityText: "quality",
//     // When using `MediaElementPlayer`, an `instance` argument
//     // is available in the `success` callback
//     success: function (mediaElement, originalNode, instance) {
//         // do things
//     }
// });
function calc(
  fileCount,
  frameCount,
  smallPicWidth,
  smallPicHeight,
  percentage
) {
  let res = {};
  const pic = parseInt(percentage * frameCount) + 1;
  const ppp = frameCount / fileCount;
  res.picNum = parseInt(pic / ppp);
  const pip = pic % ppp;
  const pageRowCount = parseInt(ppp / 5) + 1;
  const p = pip / pageRowCount;
  res.x = p * smallPicWidth;
  res.y = p * smallPicHeight;
  return res;
}
var player = new MediaElementPlayer("player1", {
  stretching: true,
  pluginPath: "./node_modules/mediaelement/build/",
  useDefaultControls: true,
  features: ["quality"],
  qualityText: "quality",
  defaultQuality: "720",
  // alwaysShowControls: true,

  success: function(mediaElement, originalNode, instance) {
    var slider = document.getElementsByClassName("mejs__time-slider")[0];
    var fullwidth = slider.offsetWidth;
    var storyBoardImages = [
      "https://quera.ir/qbox/view/HpmNqdhNbk/M0.jpg",
      "https://quera.ir/qbox/view/unIewuaWgF/M1.jpg",
      "https://quera.ir/qbox/view/g021cyaHvA/M2.jpg",
      "https://quera.ir/qbox/view/FVvx16FJmI/M3.jpg"
    ];
    var smallPicWidth = 170,
      smallPicHeight = 90;
    var fileCount = storyBoardImages.length;
    var frameCount = 95;
    slider.addEventListener("mousemove", function(e) {
      console.log("j: ", e.layerX);
      var percentage = (e.layerX * 100.0) / fullwidth;
      // imageLocation = {
      //     picNum,
      //     x,
      //     y
      // }
      var imageLocation = calc(
        fileCount,
        frameCount,
        smallPicWidth,
        smallPicHeight,
        percentage
      );

      // var imageLocation = {picNum: 0, x: }
    });
    // var renderer = document.getElementById(media.id + '-rendername');

    // media.addEventListener('loadedmetadata', function () {
    //     var src = media.originalNode.getAttribute('src').replace('&amp;', '&');
    //     if (src !== null && src !== undefined) {
    //         renderer.querySelector('.src').innerHTML = '<a href="' + src + '" target="_blank">' + src + '</a>';
    //         renderer.querySelector('.renderer').innerHTML = media.rendererName;
    //         renderer.querySelector('.error').innerHTML = '';
    //     }
    // });

    // media.addEventListener('error', function (e) {
    //     renderer.querySelector('.error').innerHTML = '<strong>Error</strong>: ' + e.message;
    // });
  }
});
