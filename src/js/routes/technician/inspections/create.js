angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-inspections-create-index', {
				parent: 'technician',
				url: '/inspections/create',
				views: {
					'inspections': {
						templateUrl: 'views/technician/inspections/create/index.html',
						controller: 'TechnicianInspectionsCreateControllerIndex'
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