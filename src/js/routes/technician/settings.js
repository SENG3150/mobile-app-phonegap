angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-settings-index', {
				parent: 'technician',
				url: '/settings',
				templateUrl: 'views/technician/settings/index.html',
				controller: 'TechnicianSettingsControllerIndex',
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}]
				}
			});
	}]);