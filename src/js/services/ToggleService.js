angular
	.module('joy-global')
	.service('ToggleService', ['$rootScope', function ($rootScope) {
		this.listeners = [];

		this.fireToggledEvent = function (id, value) {
			$rootScope.$broadcast('toggleService.toggled', {
				id: id,
				value: value
			});

			return this;
		};

		this.onToggled = function (callback) {
			this.listeners.push($rootScope.$on('toggleService.toggled', callback));

			return this;
		};

		this.reset = function () {
			angular.forEach(this.listeners, function (listener) {
				listener();
			});

			this.listeners = [];

			return this;
		};
	}]);