angular
	.module('joy-global')
	.run(['$rootScope', '$state', 'AuthService', '$window', 'PGDeviceReady', 'LayoutService', 'ViewsService', '$timeout', 'NetworkInformationService', 'SettingsService', 'SyncService', function ($rootScope, $state, AuthService, $window, PGDeviceReady, LayoutService, ViewsService, $timeout, NetworkInformationService, SettingsService, SyncService) {
		$rootScope.$on('$stateChangeError',
			function (event) {
				event.preventDefault();

				$state.go('auth.login', {r: $window.location.href});
			});

		$rootScope.$on('$stateChangeSuccess',
			function (event, toState) {
				if (toState.name.indexOf('settings') != -1) {
					ViewsService.setCurrentView('settings');
				} else if (toState.name.indexOf('sync') != -1) {
					ViewsService.setCurrentView('sync');
				} else if (toState.name.indexOf('machines') != -1) {
					ViewsService.setCurrentView('machines');
				} else {
					ViewsService.setCurrentView('inspections');
				}
			});

		$rootScope.$state = $state;

		LayoutService.getPageFooter().reset();

		ViewsService.addView('inspections', 'technician-inspections-index');
		ViewsService.addView('machines', 'technician-machines-index');
		ViewsService.addView('sync', 'technician-sync-index');
		ViewsService.addView('settings', 'technician-settings-index');

		$timeout(function () {
			var currentStateName = $state.current.name;

			if (currentStateName.indexOf('settings') != -1) {
				ViewsService.setCurrentView('settings');
			} else if (currentStateName.indexOf('sync') != -1) {
				ViewsService.setCurrentView('sync');
			} else if (currentStateName.indexOf('machines') != -1) {
				ViewsService.setCurrentView('machines');
			} else {
				ViewsService.setCurrentView('inspections');
			}
		}, 50);

		LayoutService.getPageFooter().addTab('inspections', 'fa fa-fw fa-wrench', 'Inspections', function () {
			ViewsService.switchView('inspections');
		});

		LayoutService.getPageFooter().addTab('machines', 'fa fa-fw fa-car', 'Machines', function () {
			ViewsService.switchView('machines');
		});

		LayoutService.getPageFooter().addTab('sync', 'fa fa-fw fa-download', 'Sync', function () {
			ViewsService.switchView('sync');
		});

		LayoutService.getPageFooter().addTab('settings', 'fa fa-fw fa-cog', 'Settings', function () {
			ViewsService.switchView('settings');
		});

		SettingsService.setDefaults({
			'auto-sync': true
		});

		PGDeviceReady.onReady(function () {
			if (window.device && window.device.platform == 'iOS') {
				window.StatusBar.overlaysWebView(false);
				window.StatusBar.styleDefault();
			}

			if (window.navigator.connection) {
				NetworkInformationService.setOnline(window.navigator.connection.type != 'none');

				document.addEventListener(
					'online',
					function () {
						NetworkInformationService.setOnline(true);
					},
					false);

				document.addEventListener(
					'offline',
					function () {
						NetworkInformationService.setOnline(false);
					},
					false);
			} else {
				NetworkInformationService.setOnline(true);
			}

			if (SettingsService.get('auto-sync') == true && AuthService.isAuthenticated() == true) {
				if (NetworkInformationService.isOnline() == true) { // Check if device is already online
					SyncService.downloadAll();
				} else { // Add timeout to allow online event to fire
					$timeout(
						function () {
							if (NetworkInformationService.isOnline() == true) {
								SyncService.downloadAll();
							}
						},
						1000
					);
				}
			}
		});

		if (window.cordova) {
			document.addEventListener(
				'deviceready',
				function () {
					PGDeviceReady.setReady();
				},
				false
			);
		} else {
			PGDeviceReady.setReady();
		}
	}]);