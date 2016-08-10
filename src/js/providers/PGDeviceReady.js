angular
	.module('joy-global')
	.provider('PGDeviceReady', [function () {
		var ready = false;
		var listeners = [];

		this.onReady = function (callback) {
			listeners.push(callback);

			return this;
		};

		this.isReady = function() {
			return ready;
		};

		this.runListeners = function () {
			angular.forEach(listeners, function (listener) {
				listener();
			});

			return this;
		};

		this.$get = function () {
			var self = this;

			if (window.cordova) {
				document.addEventListener(
					'deviceready',
					function () {
						self.ready = true;

						self.runListeners();
					},
					false
				);
			} else {
				self.ready = true;

				self.runListeners();
			}

			return {
				onReady: function (callback) {
					if (self.isReady() == true) {
						callback();
					} else {
						self.listeners.push(callback);
					}
				},
				isReady: function () {
					return self.isReady();
				}
			};
		};

		return this;
	}]);