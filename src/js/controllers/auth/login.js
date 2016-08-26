angular
	.module('joy-global')
	.controller('AuthControllerLogin', ['$scope', 'AuthService', '$state', '$stateParams', '$window', 'SettingsService', 'NetworkInformationService', 'SyncService', 'NotificationService', function ($scope, AuthService, $state, $stateParams, $window, SettingsService, NetworkInformationService, SyncService, NotificationService) {
		$scope.username = '';
		$scope.password = '';
		$scope.type = 'technician';

		if (AuthService.getUser()) {
			$scope.username = AuthService.getUser().primary.username;
			$scope.type = AuthService.getUser().type;
		}

		$scope.login = function () {
			if ($scope.validate() == true) {
				var credentials = {
					username: $scope.username,
					password: $scope.password,
					type: $scope.type
				};

				if(NetworkInformationService.isOnline() == true) {
					AuthService
						.authenticate(credentials)
						.then(
							function (user) {
								if (SettingsService.get('auto-sync') == true && NetworkInformationService.isOnline() == true) {
									SyncService.downloadAll();
								}

								$state.go('index');
							},
							function () {
								NotificationService.alert('There was an error with your details, please try again or contact an administrator.', 'Error');
							}
						);
				} else {
					NotificationService.alert('You must have an active internet connection to login.', 'Error');
				}
			}

			return false;
		};

		$scope.validate = function () {
			if ($scope.username == '' || $scope.username == null) {
				NotificationService.alert('You must provide your username.', 'Error');

				return false;
			}

			if ($scope.password == '') {
				NotificationService.alert('You must provide your password.', 'Error');

				return false;
			}

			return true;
		};
	}]);