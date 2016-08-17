angular
	.module('joy-global')
	.service('ViewsService', ['$rootScope', '$state', function ($rootScope, $state) {
		var self = this;

		this.views = [];

		$rootScope.$views = [];

		this.addView = function (view, route, active) {
			$rootScope.$views.push(view);

			this.views[view] = {
				route: route,
				history: []
			};

			if (typeof active != 'undefined' && active != false) {
				this.setCurrentView(view);
			}

			return this;
		};

		this.switchView = function (view) {
			var history = this.views[view].history;

			if(history.length == 0 || view == this.getCurrentView()) {
				$state.go(this.views[view].route);
			} else {
				var lastRoute = history[history.length - 1];

				$state.go(lastRoute[0], lastRoute[1]);
			}

			this.setCurrentView(view);

			return this;
		};

		this.getViews = function() {
			return this.views;
		};

		this.setCurrentView = function (view) {
			$rootScope.$activeView = view;
		};

		this.getCurrentView = function () {
			return $rootScope.$activeView;
		};

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
			console.log(event, toState, toParams);

			if(self.getCurrentView() != null) {
				self.views[self.getCurrentView()].history.push([toState, toParams]);
			}
		});
	}]);