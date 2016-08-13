angular
	.module('joy-global')
	.service('PGDeviceReady', [function () {
		this.ready = false;
		this.listeners = [];

		this.onReady = function (callback) {
			if(this.isReady() == true) {
				callback();
			} else {
				this.listeners.push(callback);
			}

			return this;
		};

		this.isReady = function () {
			return this.ready;
		};

		this.runListeners = function () {
			angular.forEach(this.listeners, function (listener) {
				listener();
			});

			return this;
		};

		this.setReady = function () {
			this.ready = true;

			this.runListeners();

			return this;
		};

		return this;
	}]);