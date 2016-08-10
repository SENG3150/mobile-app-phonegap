angular
	.module('joy-global')
	.service('PageHeaderService', ['$rootScope', function ($rootScope) {
		this.title = null;

		this.leftButton = {
			display: false,
			icon: '',
			text: ''
		};

		this.rightButton = {
			display: false,
			icon: '',
			text: ''
		};

		this.listeners = {
			onUpdated: [],
			onLeftClicked: [],
			onRightClicked: []
		};

		this.setTitle = function (title) {
			this.title = title;

			this.fireUpdatedEvent();

			return this;
		};

		this.setLeftButton = function (icon, text, callback) {
			if(typeof callback != 'undefined') {
				this.onLeftClicked(callback);
			}

			this.leftButton.icon = icon;
			this.leftButton.text = text;
			this.leftButton.display = true;

			this.fireUpdatedEvent();

			return this;
		};

		this.setRightButton = function (icon, text, callback) {
			if(typeof callback != 'undefined') {
				this.onRightClicked(callback);
			}

			this.rightButton.icon = icon;
			this.rightButton.text = text;
			this.rightButton.display = true;

			this.fireUpdatedEvent();

			return this;
		};

		this.setBackButton = function (callback) {
			return this.setLeftButton('icon icon-left-nav', 'Back', callback);
		};

		this.setHeroButton = function (icon, text, callback) {
			return this.setRightButton(icon, text, callback);
		};

		this.getTitle = function () {
			return this.title;
		};

		this.getLeftButton = function () {
			return this.leftButton;
		};

		this.getRightButton = function () {
			return this.rightButton;
		};

		this.fireUpdatedEvent = function () {
			$rootScope.$broadcast('pageHeaderService.updated');

			return this;
		};

		this.fireLeftClickedEvent = function () {
			$rootScope.$broadcast('pageHeaderService.leftClicked');

			return this;
		};

		this.fireRightClickedEvent = function () {
			$rootScope.$broadcast('pageHeaderService.rightClicked');

			return this;
		};

		this.onUpdated = function (callback) {
			this.listeners.onUpdated.push($rootScope.$on('pageHeaderService.updated', callback));

			return this;
		};

		this.onLeftClicked = function (callback) {
			this.listeners.onLeftClicked.push($rootScope.$on('pageHeaderService.leftClicked', callback));

			return this;
		};

		this.onRightClicked = function (callback) {
			this.listeners.onRightClicked.push($rootScope.$on('pageHeaderService.rightClicked', callback));

			return this;
		};

		this.reset = function () {
			this.title = null;

			this.leftButton = {
				display: false,
				icon: '',
				text: ''
			};

			this.rightButton = {
				display: false,
				icon: '',
				text: ''
			};

			angular.forEach(this.listeners.onUpdated, function (listener) {
				listener();
			});

			angular.forEach(this.listeners.onLeftClicked, function (listener) {
				listener();
			});

			angular.forEach(this.listeners.onRightClicked, function (listener) {
				listener();
			});

			this.fireUpdatedEvent();

			return this;
		};
	}]);