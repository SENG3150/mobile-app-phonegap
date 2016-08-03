angular
	.module('joy-global')
	.config(['$urlRouterProvider', '$locationProvider', '$authProvider', 'ENV', 'RestangularProvider', 'DeviceReadyProvider', function ($urlRouterProvider, $locationProvider, $authProvider, ENV, RestangularProvider, DeviceReadyProvider) {
		RestangularProvider.setBaseUrl(ENV.apiEndpoint);

		$authProvider.loginUrl = ENV.apiEndpoint + 'auth/authenticate';

		$urlRouterProvider.otherwise('/');

		/*DeviceReadyProvider.onReady(function () {
			$locationProvider.html5Mode((typeof window.cordova === 'object') == false);
		});*/
	}]);
