angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerIndex', ['$scope', 'LayoutService', 'SettingsService', 'ToggleService', 'InspectionsStorage', function ($scope, LayoutService, SettingsService, ToggleService, InspectionsStorage) {
		LayoutService.setTitle('Settings');
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-sign-out', 'Logout', LayoutService.redirect('auth.logout'));
        LayoutService.getPageHeader().setLeftButton('fa fa-fw fa-download', 'Reset', function() {
            InspectionsStorage.reset(true);
        });

		$scope.settingsService = SettingsService;

		$scope.settings = {
			'auto-sync': {
                name: 'Automatic Sync',
                description: 'Your data will be automatically synced when you first login or open the app.',
                value: SettingsService.get('auto-sync')
            }
		};

		ToggleService.reset();
		ToggleService.onToggled(function (event, args) {
			SettingsService.set(args.id, args.value);
			$scope.settings[args.id].value = args.value;
		});
	}]);