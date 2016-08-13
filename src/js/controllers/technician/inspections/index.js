angular
	.module('joy-global')
	.controller('TechnicianInspectionsControllerIndex', ['$scope', 'InspectionsStorage', 'moment', 'LayoutService', function ($scope, InspectionsStorage, moment, LayoutService) {
		LayoutService.setTitle(['Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-plus', 'Create', LayoutService.redirect('technician-inspections-create-index'));

		$scope.inspections = InspectionsStorage.getList();
		$scope.moment = moment;
	}]);