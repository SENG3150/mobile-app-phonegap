angular
	.module('joy-global')
	.factory('Models', ['APIService', function (APIService) {
		return APIService.service('models');
	}]);