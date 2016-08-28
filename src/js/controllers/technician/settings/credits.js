angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerCredits', ['$scope', 'LayoutService', function ($scope, LayoutService) {
		LayoutService.setTitle(['Credits', 'Settings']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-settings-index'));

		$scope.openURL = function (url) {
			window.open(url, '_system');
		};
	}]);