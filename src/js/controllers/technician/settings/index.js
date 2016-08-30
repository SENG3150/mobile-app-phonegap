angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerIndex', ['$scope', 'LayoutService', 'SettingsService', 'ToggleService', 'InspectionsStorage', 'NotificationService', function ($scope, LayoutService, SettingsService, ToggleService, InspectionsStorage, NotificationService) {
		LayoutService.setTitle('Settings');
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-sign-out', 'Logout', LayoutService.redirect('auth.logout'));
        LayoutService.getPageHeader().setLeftButton('fa fa-fw fa-download', 'Reset', function() {
            NotificationService.confirm('This will delete all inspection data from this device. Please ensure that ' +
                'you sync any important data before confirming.', $scope.inspectionReset());
        });

        $scope.inspectionReset = function() {
            InspectionsStorage.reset(true);
        };

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