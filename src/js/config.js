angular
	.module('joy-global')
	.config(['$urlRouterProvider', '$locationProvider', '$authProvider', 'ENV', 'RestangularProvider', 'PGDeviceReadyProvider', function ($urlRouterProvider, $locationProvider, $authProvider, ENV, RestangularProvider, PGDeviceReadyProvider) {
		RestangularProvider.setBaseUrl(ENV.apiEndpoint);

		$authProvider.loginUrl = ENV.apiEndpoint + 'auth/authenticate';

		$urlRouterProvider.otherwise('/');

		PGDeviceReadyProvider.onReady(function () {
			if(window.device && window.device.platform == 'iOS') {
				window.StatusBar.overlaysWebView(false);
			}
		});
	}])
	.run(['$rootScope', '$state', '$auth', '$window', 'PGDeviceReady', function ($rootScope, $state, $auth, $window, PGDeviceReady) {
		$rootScope.$on('$stateChangeError',
			function (event) {
				event.preventDefault();

				$state.go('auth.login', {r: $window.location.href});
			});

		$rootScope.$state = $state;
	}]);
