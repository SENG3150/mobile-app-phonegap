angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerIndex', ['$scope', 'LayoutService', function ($scope, LayoutService) {
		LayoutService.setTitle(['Create Inspection', 'Inspections']);
		LayoutService.getPageHeader().setBackButton(function () {
			history.back();
		});
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			alert('Saved!');
		});
	}]);