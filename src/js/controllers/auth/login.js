angular
	.module('joy-global')
	.controller('AuthControllerLogin', ['$scope', 'AuthService', '$state', '$stateParams', '$window', function ($scope, AuthService, $state, $stateParams, $window) {
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
							// Called when user is logged in successfully
							if ($stateParams.r) {
								$window.location.href = $stateParams.r;
							} else {
								$state.go('index');
							}
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