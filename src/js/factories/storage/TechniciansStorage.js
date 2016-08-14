angular
	.module('joy-global')
	.factory('TechniciansStorage', ['ItemStorageService', function (ItemStorageService) {
		return ItemStorageService.service('technicians');
	}]);