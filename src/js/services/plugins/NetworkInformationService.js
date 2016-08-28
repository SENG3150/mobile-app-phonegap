angular
	.module('joy-global')
	.service('NetworkInformationService', [function () {
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