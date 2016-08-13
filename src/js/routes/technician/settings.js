angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-settings-index', {
				parent: 'technician',
				url: '/settings',
				views: {
					'settings': {
						templateUrl: 'views/technician/settings/index.html',
						controller: 'TechnicianSettingsControllerIndex'
					}
				},
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}],
					layoutService: ['LayoutService', function (LayoutService) {
						return LayoutService.reset();
					}]
				}
			})
			.state('technician-settings-credits', {
				parent: 'technician',
				url: '/settings/credits',
				views: {
					'settings': {
						templateUrl: 'views/technician/settings/credits.html',
						controller: 'TechnicianSettingsControllerCredits'
					}
				},
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}],
					layoutService: ['LayoutService', function (LayoutService) {
						return LayoutService.reset();
					}]
				}
			});
	}]);