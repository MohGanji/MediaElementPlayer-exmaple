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
 */(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

mejs.i18n.en['mejs.close'] = 'Close';

Object.assign(mejs.MepDefaults, {
	prerollCloseText: null
});

Object.assign(MediaElementPlayer.prototype, {
	buildpreroll: function buildpreroll(player, controls, layers) {
		var t = this,
		    prerollTitle = mejs.Utils.isString(t.options.prerollCloseText) ? t.options.prerollCloseText : mejs.i18n.t('mejs.close'),
		    prerollLink = t.container.querySelector('link[rel="preroll"]');

		if (prerollLink) {
			player.preroll = document.createElement('div');
			player.preroll.className = t.options.classPrefix + 'preroll-layer ' + t.options.classPrefix + 'layer';
			player.preroll.innerHTML = '<a class="' + t.options.classPrefix + 'preroll-close" href="#">' + prerollTitle + '</a>' + ('<div class="' + t.options.classPrefix + 'preroll-layer-content"></div>');
			player.preroll.style.display = 'none';

			layers.insertBefore(player.preroll, layers.firstChild);

			player.preroll.querySelector('.' + t.options.classPrefix + 'preroll-close').addEventListener('click', function (e) {
				t.media.play()
				this.parentNode.style.display = 'none';
				e.preventDefault();
				e.stopPropagation();
			});

			t.media.addEventListener('loadedmetadata', function () {
				t.media.pause()
				mejs.Utils.ajax(prerollLink.getAttribute('href'), 'html', function (data) {
					layers.querySelector('.' + t.options.classPrefix + 'preroll-layer-content').innerHTML = data;
				});
				player.preroll.style.display = 'block';
			}, false);
		}
	}
});

},{}]},{},[1]);
