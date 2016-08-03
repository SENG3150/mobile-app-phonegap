angular
	.module('joy-global')
	.controller('AuthControllerLogout', ['$auth', '$state', function ($auth, $state) {
		$auth.logout().then(function () {
			$state.go('auth.login');
		});
	}]);