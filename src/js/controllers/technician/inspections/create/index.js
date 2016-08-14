angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerIndex', ['$scope', 'Machines', 'moment', 'LayoutService', 'NotificationService', function ($scope, Machines, moment, LayoutService, NotificationService) {

		$scope.showSubAssemblies = false;

		LayoutService.setTitle(['Create Inspection', 'Machines']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			NotificationService.alert('Saved!');
		});

		Machines
			.getList({
				include: 'model,model.majorAssemblies,model.majorAssemblies.subAssemblies'
			})
			.then(function (data) {
				$scope.loading = false;
				$scope.machines = data;
			});

		$scope.moment = moment;
	}]);