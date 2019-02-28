// You can use either a string for the player ID (i.e., `player`), 
// or `document.querySelector()` for any selector
var player = new MediaElementPlayer('player1', {
    pluginPath: "./node_modules/mediaelement/build/",
    // features: ['quality', 'controls'],
    // qualityText: "quality",
    // When using `MediaElementPlayer`, an `instance` argument
    // is available in the `success` callback
    success: function (mediaElement, originalNode, instance) {
        // do things
    }
});