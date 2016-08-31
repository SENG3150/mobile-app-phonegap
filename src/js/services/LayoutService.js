angular
	.module('joy-global')
	.service('LayoutService', ['PageHeaderService', 'PageFooterService', '$rootScope', '$state', function (PageHeaderService, PageFooterService, $rootScope, $state) {
		this.title = null;

		this.setTitle = function (title, pageHeader) {
			this.title = title;

			this.fireUpdatedEvent();

			if (pageHeader == undefined || pageHeader == true) {
				if (angular.isArray(title) == true) {
					title = title[0];
				}

				this.pageHeader.setTitle(title);
			}

			return this;
		};

		this.getTitle = function () {
			return this.title;
		};

		this.pageHeader = PageHeaderService;

		this.getPageHeader = function () {
			return this.pageHeader;
		};

		this.pageFooter = PageFooterService;

		this.getPageFooter = function () {
			return this.pageFooter;
		};

		this.fireUpdatedEvent = function () {
			$rootScope.$broadcast('layoutService.updated');

			return this;
		};

		this.onUpdated = function (callback) {
			$rootScope.$on('layoutService.updated', callback);

			return this;
		};

		this.reset = function () {
			this.title = null;

			this.getPageHeader().reset();

			this.fireUpdatedEvent();

			return this;
		};

		this.redirect = function (state, parameters, redirect) {
			if (typeof redirect == 'undefined' || redirect == false) {
				return function () {
					$state.go(state, parameters);
				};
			} else {
				$state.go(state, parameters);
			}
		};
	}]);