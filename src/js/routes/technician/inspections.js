angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-inspections-index', {
				parent: 'technician',
				url: '/inspections',
				templateUrl: 'views/technician/inspections/index.html',
				controller: 'TechnicianInspectionsControllerIndex',
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}]
				}
			})
			.state('technician-inspections-view', {
				parent: 'technician',
				url: '/inspections/:inspection',
				templateUrl: 'views/technician/inspections/view.html',
				controller: 'TechnicianInspectionsControllerView',
				resolve: {
					loggedIn: ['AuthService', function (AuthService) {
						return AuthService.checkPermissions(true);
					}]
				}
			});
	}]);