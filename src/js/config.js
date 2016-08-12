angular
	.module('joy-global')
	.config(['$urlRouterProvider', '$locationProvider', '$authProvider', 'ENV', 'RestangularProvider', 'PGDeviceReadyProvider', function ($urlRouterProvider, $locationProvider, $authProvider, ENV, RestangularProvider, PGDeviceReadyProvider) {
		RestangularProvider.setBaseUrl(ENV.apiEndpoint);

		$authProvider.loginUrl = ENV.apiEndpoint + 'auth/authenticate';

		$urlRouterProvider.otherwise('/');

		PGDeviceReadyProvider.onReady(function () {
			if(window.device && window.device.platform == 'iOS') {
				window.StatusBar.overlaysWebView(false);
			}
		});
	}])
	.run(['$rootScope', '$state', '$auth', '$window', 'PGDeviceReady', 'LayoutService', 'ViewsService', '$timeout', function ($rootScope, $state, $auth, $window, PGDeviceReady, LayoutService, ViewsService, $timeout) {
		$rootScope.$on('$stateChangeError',
			function (event) {
				event.preventDefault();

				$state.go('auth.login', {r: $window.location.href});
			});

		$rootScope.$state = $state;

		LayoutService.getPageFooter().reset();

		ViewsService.addView('home', 'technician-index');
		ViewsService.addView('sync', 'technician-sync-index');
		ViewsService.addView('settings', 'technician-settings-index');

		$timeout(function() {
			var currentStateName = $state.current.name;

			if(currentStateName.indexOf('settings') != -1) {
				ViewsService.setCurrentView('settings');
			} else if(currentStateName.indexOf('sync') != -1) {
				ViewsService.setCurrentView('sync');
			} else {
				ViewsService.setCurrentView('home');
			}
		}, 50);

		LayoutService.getPageFooter().addTab('home', 'fa fa-fw fa-home', 'Home', function() {
			ViewsService.switchView('home');
		});

		LayoutService.getPageFooter().addTab('sync', 'fa fa-fw fa-download', 'Sync', function() {
			ViewsService.switchView('sync');
		});

		LayoutService.getPageFooter().addTab('settings', 'fa fa-fw fa-cog', 'Settings', function() {
			ViewsService.switchView('settings');
		});
	}]);
