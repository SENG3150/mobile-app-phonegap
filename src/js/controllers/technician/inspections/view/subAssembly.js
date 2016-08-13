angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerSubAssembly', ['$scope', '$stateParams', 'moment', 'InspectionsStorage', 'LayoutService', function ($scope, $stateParams, moment, InspectionsStorage, LayoutService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.subAssemblyId = $stateParams.subAssembly;
		$scope.moment = moment;
		$scope.oilStatus = 1; // Might need to set this to load from save file.
		$scope.showComments = false;

		$scope.changeOilStatus = function (input) {
			$scope.oilStatus = input;
		};

		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-majorAssembly', {
			inspection: $scope.inspectionId,
			majorAssembly: $scope.majorAssemblyId
		}));

		// Select the specific inspection
		$scope.inspection = InspectionsStorage.one($scope.inspectionId);

		angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
			if (majorAssembly.id == $scope.majorAssemblyId) {
				$scope.majorAssembly = majorAssembly;
				// Find Sub-Assembly
				angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
					if (subAssembly.id == $scope.subAssemblyId) {
						$scope.subAssembly = subAssembly;
						$scope.oilTest = subAssembly.oilTest;
						$scope.machineGeneralTest = subAssembly.machineGeneralTest;
						$scope.wearTest = subAssembly.wearTest;
						$scope.subAssemblyName = subAssembly.subAssembly.name;
						LayoutService.setTitle([$scope.subAssemblyName]);
					}
				});
			}
		});
	}]);