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
  const pic = parseInt((percentage / 100) * frameCount) + 1;
  const ppp = 25; //frameCount / fileCount;
  res.picNum = parseInt(pic / ppp);
  const pip = pic % ppp;
  const pageRowCount = parseInt(ppp / 5);
  const py = parseInt(pip / pageRowCount);
  const px = parseInt(pip % pageRowCount);
  res.x = px * smallPicWidth;
  res.y = py * smallPicHeight;
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

    success: function (mediaElement, originalNode, instance) {
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
        slider.addEventListener("mouseout", function (e) {
            document.getElementById('storyboard-image').classList.add("hidden")
        })
        slider.addEventListener("mousemove", function (e) {
            console.log("j: ", e.layerX);
            var percentage = (e.layerX * 100.0) / fullwidth;
            // imageLocation = {
            //     picNum,
            //     x,
            //     y
            // }
            

            // var imageLocation = {picNum: 0, x: }
            // var renderer = document.getElementById(media.id + '-rendername');
            // console.log(fileCount, frameCount, smallPicWidth, smallPicHeight, percentage)
            var imageLocation = calc(
                fileCount,
                frameCount,
                smallPicWidth,
                smallPicHeight,
                percentage
            );
            console.log('imageLocation: ', imageLocation)
            var playerHeight = document.getElementsByClassName('media-wrapper')[0].clientHeight
            // var imageLocation = { picNum: 0, x: 0, y: 0 }
            var imageElement = document.getElementById('storyboard-image')
            imageElement.classList.remove("hidden")
            Object.assign(imageElement.style,{
                "background-image": `url("${storyBoardImages[imageLocation.picNum]}")`,
                "background-position-x" : `-${imageLocation.x}px`,
                "background-position-y" : `-${imageLocation.y}px`,
                "left" : `${e.screenX - 85}px`,
                "top" : `${playerHeight - smallPicHeight - 30 }px`,
            });
            // .setAttribute('background-image', ``)
            // document.getElementById('storyboard-image').setAttribute('background-position-x', `-${imageLocation.x}`)
            // document.getElementById('storyboard-image').setAttribute('background-position-y', `-${imageLocation.y}`)
        })

    }
});
