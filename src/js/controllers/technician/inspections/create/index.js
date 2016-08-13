angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerIndex', ['$scope', 'Machines', 'moment', 'LayoutService', '$stateParams', 'NotificationService', function ($scope, Machines, moment, LayoutService, $stateParams, NotificationService) {
		$scope.machineId = $stateParams.machine;
		$scope.loading = true;

		LayoutService.setTitle(['Create Inspection', 'Machines']);
		LayoutService.getPageHeader().setBackButton(function () {
			history.back();
		});
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			NotificationService.alert('Saved!');
		});

		Machines
			.one($scope.machineId)
			.get({
				include: 'model,model.majorAssemblies,model.majorAssemblies.subAssemblies'
			})
			.then(function (data) {
				$scope.loading = false;
				$scope.machine = data;
			});


		$scope.moment = moment;
	}]);