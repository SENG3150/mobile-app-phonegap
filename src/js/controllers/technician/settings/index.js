angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerIndex', ['$scope', 'LayoutService', function ($scope, LayoutService, SettingsService) {
		LayoutService.setTitle('Settings');
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-sign-out', 'Logout', LayoutService.redirect('auth.logout'));

		var autoSyncSettingKey = "autoSync";

		if (!SettingsService.has(autoSyncSettingKey)) {
			SettingsService.set(autoSyncSettingKey, true);
		}

		$scope.autoSyncSettingValue = function() {
			return SettingsService.get(autoSyncKey);
		}

		$scope.toggleAutoSync = function() {
			SettingsService.set(autoSyncSettinKey, !SettingsService.get(autoSyncSettingKey));
		}
	}]);