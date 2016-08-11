angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerMajorAssembly', ['$scope', '$stateParams', 'moment', 'Inspections', 'LayoutService', function ($scope, $stateParams, moment, Inspections, LayoutService) {
		$scope.loading = true;

        $scope.inspectionId = $stateParams.inspection;

        LayoutService.setTitle(['Major Assemblies']);
        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-index', { inspection: $scope.inspectionId }));

		$scope.majorAssemblyId = $stateParams.majorAssembly;

		$scope.loading = false
	}]);