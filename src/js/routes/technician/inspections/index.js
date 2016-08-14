angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-inspections-index', {
				parent: 'technician',
				url: '/inspections',
				views: {
					'inspections': {
						templateUrl: 'views/technician/inspections/index.html',
						controller: 'TechnicianInspectionsControllerIndex'
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