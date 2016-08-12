angular
	.module('joy-global')
	.service('PageFooterService', ['$rootScope', function ($rootScope) {
		this.tabs = [];

		this.listeners = {
			onUpdated: [],
			onClicked: []
		};

		this.addTab = function (view, icon, text, callback) {
			var index = this.tabs.length;

			this.tabs.push({
				view: view,
				icon: icon,
				text: text
			});

			this.listeners.onClicked.push([]);

			if (typeof callback != 'undefined') {
				this.onClicked(index, callback);
			}

			this.fireUpdatedEvent();

			return this;
		};

		this.getTabs = function () {
			return this.tabs;
		};

		this.fireUpdatedEvent = function () {
			$rootScope.$broadcast('pageFooterService.updated');

			return this;
		};

		this.fireClickedEvent = function (tab) {
			$rootScope.$broadcast('pageFooterService.clicked-' + tab);

			return this;
		};

		this.onUpdated = function (callback) {
			this.listeners.onUpdated.push($rootScope.$on('pageFooterService.updated', callback));

			return this;
		};

		this.onClicked = function (tab, callback) {
			this.listeners.onClicked[tab].push($rootScope.$on('pageFooterService.clicked-' + tab, callback));

			return this;
		};

		this.reset = function () {
			this.tabs = [];

			angular.forEach(this.listeners.onUpdated, function (listener) {
				listener();
			});

			angular.forEach(this.listeners.onClicked, function (listeners) {
				angular.forEach(listeners, function (listener) {
					listener();
				});
			});

			this.listeners = {
				onUpdated: [],
				onClicked: []
			};

			this.fireUpdatedEvent();

			return this;
		};
	}]);