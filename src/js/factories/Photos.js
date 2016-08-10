angular
	.module('joy-global')
	.factory('Photos', ['APIService', function (APIService) {
		return APIService.service('photos');
	}]);