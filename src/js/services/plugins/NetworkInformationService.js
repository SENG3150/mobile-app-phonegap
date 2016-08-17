angular
	.module('joy-global')
	.service('NetworkInformationService', ['PGDeviceReady', function (PGDeviceReady) {
		return {
			online: false,
			setOnline: function (online) {
				this.online = online;
			},
			isOnline: function () {
				return this.online;
			}
		};
	}]);