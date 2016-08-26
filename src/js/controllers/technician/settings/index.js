angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerIndex', ['$scope', 'LayoutService', 'SettingsService', function ($scope, LayoutService, SettingsService) {
		LayoutService.setTitle('Settings');
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-sign-out', 'Logout', LayoutService.redirect('auth.logout'));

		$scope.settingsService = SettingsService;

		document
			.querySelector('#auto-sync')
			.addEventListener('toggle', function (e) {
				SettingsService.set('auto-sync', e.detail.isActive);
			});
	}]);