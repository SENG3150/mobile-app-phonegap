angular
	.module('joy-global')
	.factory('MachinesStorage', ['ItemStorageService', function (ItemStorageService) {
		return ItemStorageService.service('machines');
	}]);