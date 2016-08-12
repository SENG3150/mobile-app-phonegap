angular
	.module('joy-global')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('technician-sync-index', {
				parent: 'technician',
				url: '/sync',
				views: {
					'sync': {
						templateUrl: 'views/technician/sync/index.html',
						controller: 'TechnicianSyncControllerIndex'
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