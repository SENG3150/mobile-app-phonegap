angular
	.module('joy-global')
	.controller('TechnicianIndexControllerIndex', ['$scope', 'LayoutService', function ($scope, LayoutService) {
		LayoutService.setTitle(['Home']);
		LayoutService.getPageHeader().setLeftButton('fa fa-fw fa-sign-out', 'Logout', LayoutService.redirect('auth.logout'));
	}]);