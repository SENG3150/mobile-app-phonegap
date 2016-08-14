angular
	.module('joy-global')
	.factory('DomainExpertsStorage', ['ItemStorageService', function (ItemStorageService) {
		return ItemStorageService.service('domainExperts');
	}]);