angular
	.module('joy-global')
	.config(['$urlRouterProvider', '$locationProvider', '$authProvider', 'ENV', 'RestangularProvider', function ($urlRouterProvider, $locationProvider, $authProvider, ENV, RestangularProvider) {
		RestangularProvider.setBaseUrl(ENV.apiEndpoint);

		$authProvider.loginUrl = ENV.apiEndpoint + 'auth/authenticate';

		$urlRouterProvider.otherwise('/');
	}]);