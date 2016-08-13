angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerCredits', ['$scope', 'LayoutService', 'PGDeviceReady', function ($scope, LayoutService, PGDeviceReady) {
		LayoutService.setTitle(['Credits', 'Settings']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-settings-index'));

		$scope.openURL = function (url) {
			window.open(url, '_system');
		};
	}]);