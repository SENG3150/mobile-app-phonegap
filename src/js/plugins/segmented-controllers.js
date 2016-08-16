/* ========================================================================
 * Ratchet: segmented-controllers.js v2.0.2
 * http://goratchet.com/components#segmentedControls
 * ========================================================================
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 * ======================================================================== */

!(function () {
	'use strict';

	var getTarget = function (target) {
		var i;
		var segmentedControls = document.querySelectorAll('.segmented-control .control-item');

		for (; target && target !== document; target = target.parentNode) {
			for (i = segmentedControls.length; i--;) {
				if (segmentedControls[i] === target) {
					return target;
				}
			}
		}
	};

	var handle = function(e) {
		var activeTab;
		var activeBodies;
		var targetBody;
		var targetTab = getTarget(e.target);
		var className = 'active';
		var classSelector = '.' + className;

		if (!targetTab) {
			return;
		}

		activeTab = targetTab.parentNode.querySelector(classSelector);

		if (activeTab) {
			activeTab.classList.remove(className);
		}

		targetTab.classList.add(className);

		var targetString = targetTab.hash || targetTab.dataset.target;

		if(!targetString) {
			return;
		}

		targetBody = document.querySelector(targetString);

		if (!targetBody) {
			return;
		}

		activeBodies = targetBody.parentNode.querySelectorAll(classSelector);

		for (var i = 0; i < activeBodies.length; i++) {
			activeBodies[i].classList.remove(className);
		}

		targetBody.classList.add(className);
	};

	window.addEventListener('touchend', function (e) {
		handle(e);
	});

	window.addEventListener('click', function (e) {
		handle(e);
	});
}());
