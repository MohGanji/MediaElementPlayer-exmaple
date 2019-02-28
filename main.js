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

var player = new MediaElementPlayer('player1', {
    stretching: true,
    pluginPath: './node_modules/mediaelement/build/',
    useDefaultControls: true,
    features: ['quality'],
    qualityText: 'quality',
    defaultQuality: '720',
    // alwaysShowControls: true,
    
    success: function (mediaElement, originalNode, instance) {

        var slider = document.getElementsByClassName('mejs__time-slider')[0]
        var fullwidth = slider.offsetWidth
        slider.addEventListener('mousemove', function(e) {
            console.log('j: ', e.layerX)
            var percentage = (e.layerX * 100.0) / fullwidth
            // imageLocation = {
            //     picNum,
            //     x,
            //     y
            // }
            var imageLocation = calc(percentage)
        } )
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