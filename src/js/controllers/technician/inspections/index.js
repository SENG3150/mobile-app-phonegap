angular
	.module('joy-global')
	.controller('TechnicianInspectionsControllerIndex', ['$scope', 'Inspections', 'moment', 'LayoutService', function ($scope, Inspections, moment, LayoutService) {
		$scope.loading = true;

		LayoutService.setTitle(['Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-plus', 'Create', LayoutService.redirect('technician-inspections-create-index'));

		Inspections
			.getList({
				include: 'machine.model,technician,scheduler'
			})
			.then(function (data) {
				$scope.loading = false;
				$scope.inspections = data;
			});

		$scope.moment = moment;
	}]);