angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerIndex', ['$scope', 'LayoutService', function ($scope, LayoutService) {
		LayoutService.setTitle('Settings');
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-sign-out', 'Logout', LayoutService.redirect('auth.logout'));
	}]);