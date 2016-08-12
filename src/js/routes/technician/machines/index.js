angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-machines-index', {
				parent: 'technician',
				url: '/machines',
				views: {
					'home': {
						templateUrl: 'views/technician/machines/index.html',
						controller: 'TechnicianMachinesControllerIndex'
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