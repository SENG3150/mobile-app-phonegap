angular
	.module('joy-global')
	.controller('TechnicianSettingsControllerIndex', ['$scope', 'LayoutService', function ($scope, LayoutService) {
		LayoutService.setTitle('Settings');
	}]);