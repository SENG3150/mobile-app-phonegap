angular
	.module('joy-global')
	.config(['$urlRouterProvider', '$locationProvider', '$authProvider', 'ENV', 'RestangularProvider', function ($urlRouterProvider, $locationProvider, $authProvider, ENV, RestangularProvider) {
		RestangularProvider.setBaseUrl(ENV.apiEndpoint);

		$authProvider.loginUrl = ENV.apiEndpoint + 'auth/authenticate';

		$urlRouterProvider.otherwise('/');
	}])
	.run(['$rootScope', '$state', '$auth', '$window', 'PGDeviceReady', 'LayoutService', 'ViewsService', '$timeout', function ($rootScope, $state, $auth, $window, PGDeviceReady, LayoutService, ViewsService, $timeout) {
		$rootScope.$on('$stateChangeError',
			function (event) {
				event.preventDefault();

				$state.go('auth.login', {r: $window.location.href});
			});

		$rootScope.$state = $state;

		LayoutService.getPageFooter().reset();

		ViewsService.addView('inspections', 'technician-inspections-index');
		ViewsService.addView('machines', 'technician-machines-index');
		ViewsService.addView('sync', 'technician-sync-index');
		ViewsService.addView('settings', 'technician-settings-index');

		$timeout(function() {
			var currentStateName = $state.current.name;

			if(currentStateName.indexOf('settings') != -1) {
				ViewsService.setCurrentView('settings');
			} else if(currentStateName.indexOf('sync') != -1) {
				ViewsService.setCurrentView('sync');
			} else if(currentStateName.indexOf('machines') != -1) {
				ViewsService.setCurrentView('machines');
			} else {
				ViewsService.setCurrentView('inspections');
			}
		}, 50);

		LayoutService.getPageFooter().addTab('inspections', 'fa fa-fw fa-wrench', 'Inspections', function() {
			ViewsService.switchView('inspections');
		});

		LayoutService.getPageFooter().addTab('machines', 'fa fa-fw fa-car', 'Machines', function() {
			ViewsService.switchView('machines');
		});

		LayoutService.getPageFooter().addTab('sync', 'fa fa-fw fa-download', 'Sync', function() {
			ViewsService.switchView('sync');
		});

		LayoutService.getPageFooter().addTab('settings', 'fa fa-fw fa-cog', 'Settings', function() {
			ViewsService.switchView('settings');
		});

		PGDeviceReady.onReady(function () {
			if(window.device && window.device.platform == 'iOS') {
				window.StatusBar.overlaysWebView(false);
			}
		});

		if (window.cordova) {
			document.addEventListener(
				'deviceready',
				function() {
					PGDeviceReady.setReady();
				},
				false
			);
		} else {
			PGDeviceReady.setReady();
		}
	}]);