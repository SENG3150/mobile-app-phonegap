angular
	.module('joy-global')
	.controller('TechnicianInspectionsControllerIndex', ['$scope', 'InspectionsStorage', 'moment', 'LayoutService', 'AuthService', '_', function ($scope, InspectionsStorage, moment, LayoutService, AuthService, _) {
		LayoutService.setTitle(['Inspections']);
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-plus', 'Create', LayoutService.redirect('technician-inspections-create-index'));

		$scope.inspections = _.sortBy(InspectionsStorage.getList(), 'timeScheduled').reverse();
		$scope.technician = AuthService.getUser().technician;
		$scope.moment = moment;
	}]);