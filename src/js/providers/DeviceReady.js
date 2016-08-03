angular
	.module('joy-global')
	.provider('DeviceReady', [function () {
		this.onReady = function(callback) {
			if (typeof window.cordova === 'object') {
				document.addEventListener('deviceready', callback, false);
			} else {
				callback();
			}
		};

		this.$get = [function () {
			
		}];
	}]);