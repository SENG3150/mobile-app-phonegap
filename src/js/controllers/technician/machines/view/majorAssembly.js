angular
	.module('joy-global')
	.controller('TechnicianMachinesViewControllerMajorAssembly', ['$scope', '$stateParams', 'moment', 'MachinesStorage', 'LayoutService', function ($scope, $stateParams, moment, MachinesStorage, LayoutService) {
		$scope.machineId = $stateParams.machine;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.moment = moment;

		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-machines-view-index', {machine: $scope.machineId}));

		// Select the specific machine
		$scope.machine = MachinesStorage.one($scope.machineId);

		if ($scope.machine && $scope.machine.model && $scope.machine.model.majorAssemblies) {
			angular.forEach($scope.machine.model.majorAssemblies, function (majorAssembly) {
				if (majorAssembly.id == $scope.majorAssemblyId) {
					$scope.majorAssembly = majorAssembly;

					LayoutService.setTitle([majorAssembly.name]);
				}
			});
		} else {
			LayoutService.redirect('technician-machines-index', {}, true);
		}
	}]);