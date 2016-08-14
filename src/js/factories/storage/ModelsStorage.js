angular
	.module('joy-global')
	.factory('ModelsStorage', ['ItemStorageService', function (ItemStorageService) {
		return ItemStorageService.service('models');
	}]);