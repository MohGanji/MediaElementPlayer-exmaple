/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */(function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
	 1: [function (_dereq_, module, exports) {
		 'use strict';

		 mejs.i18n.en['mejs.hd'] = 'hd';

		 Object.assign(mejs.MepDefaults, {
			 hdText: 'HD',
			 hdDefault: true,
		 });

		 Object.assign(MediaElementPlayer.prototype, {
			 buildhd: function buildhd(player, controls, layers, media) {
				 var t = this,
					 hdTitle = mejs.Utils.isString(t.options.hdText) ? t.options.hdText : mejs.i18n.t('mejs.hd'),
					 button = document.createElement('div');

				 button.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'hd-button ' + t.options.classPrefix + 'hd';
				 button.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + hdTitle + '" aria-label="' + hdTitle + '" tabindex="0">HD</button>';

				 t.addControlElement(button, 'HD');
				 var audio = document.getElementById(`${media.id}-audio`)
				 
				//  media.addEventListener('canplay', function() {
				// 	 audio.play()
				//  })

				// audio.play()
				 media.addEventListener('pause', function() {
					 console.log('pause')
					 audio.pause()
				 })

				 media.addEventListener('play', function() {
					console.log('play')
					audio.play()
				 })

				 media.addEventListener('playing', function() {
					console.log('playing')
					audio.play()
				 })
				 media.addEventListener('seeked', function() {
					console.log('seeked')
					audio.currentTime = media.currentTime
				 })

				 media.addEventListener('seeking', function() {
					console.log('seeking')
					audio.currentTime = media.currentTime
				 })

				 media.addEventListener('stalled', function() {
					console.log('stalled')
					audio.pause()
				})

				// media.addEventListener('suspend', function() {
				// 	console.log('suspend')
				// 	audio.pause()
				// })

				media.addEventListener('waiting', function() {
					console.log('waiting')
					audio.pause()
				})

				media.addEventListener('volumechange', function() {
					console.log('volumechange')
					audio.volume = media.volume
				})

				 setInterval(function() { 
					 audio.currentTime = media.currentTime
				 }, 1000)
				//  button.addEventListener('click', function () {
				// 	 console.log(media.id)
				//  });
			 }
		 });

	 }, {}]
 }, {}, [1]);
