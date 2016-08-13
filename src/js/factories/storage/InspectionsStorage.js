angular
	.module('joy-global')
	.factory('InspectionsStorage', ['ItemStorageService', function (ItemStorageService) {
		return ItemStorageService.service('inspections');
	}]);