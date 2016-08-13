angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerMajorAssembly', ['$scope', '$stateParams', 'moment', 'InspectionsStorage', 'LayoutService', function ($scope, $stateParams, moment, InspectionsStorage, LayoutService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.moment = moment;

		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-index', {inspection: $scope.inspectionId}));

		// Select the specific inspection
		$scope.inspection = InspectionsStorage.one($scope.inspectionId);

		angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
			if (majorAssembly.id == $scope.majorAssemblyId) {
				$scope.majorAssembly = majorAssembly;
				$scope.majorAssemblyName = majorAssembly.majorAssembly.name;

				LayoutService.setTitle([$scope.majorAssemblyName]);
			}
		});
	}]);