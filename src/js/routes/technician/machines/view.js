angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-machines-view-index', {
				parent: 'technician',
				url: '/machines/:machine',
				views: {
					'machines': {
						templateUrl: 'views/technician/machines/view/index.html',
						controller: 'TechnicianMachinesViewControllerIndex'
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
			.state('technician-machines-view-majorAssembly', {
				parent: 'technician',
				url: '/machines/:machine/:majorAssembly',
				views: {
					'machines': {
						templateUrl: 'views/technician/machines/view/majorAssembly.html',
						controller: 'TechnicianMachinesViewControllerMajorAssembly'
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