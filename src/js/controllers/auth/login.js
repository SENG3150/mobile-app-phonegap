angular
	.module('joy-global')
	.controller('AuthControllerLogin', ['$scope', 'AuthService', '$state', '$stateParams', '$window', 'SettingsService', 'NetworkInformationService', 'SyncService', 'ViewsService', function ($scope, AuthService, $state, $stateParams, $window, SettingsService, NetworkInformationService, SyncService, ViewsService) {
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
							// Called when there is an error
						},
						function () {
							// Called when there is some progress with their login
						}
					);
			}

			return false;
		};

		$scope.validate = function () {
			if ($scope.username == '' || $scope.username == null) {
				// Username is empty

				return false;
			}

			if ($scope.password == '') {
				// Password is empty

				return false;
			}

			return true;
		};
	}]);