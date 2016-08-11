angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerMajorAssembly', ['$scope', '$stateParams', 'Inspections', 'LayoutService', 'moment',  function ($scope, $stateParams, Inspections, LayoutService, moment) {
		$scope.loading = true;
        $scope.inspectionId = $stateParams.inspection;

        LayoutService.setTitle(['Major Assemblies']);

		$scope.majorAssemblyId = $stateParams.majorAssembly;

		$scope.loading = false
	}]);