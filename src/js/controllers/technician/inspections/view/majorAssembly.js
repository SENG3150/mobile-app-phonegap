angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerMajorAssembly', ['$scope', '$stateParams', function ($scope, $stateParams) {
		$scope.loading = true;

        LayoutService.setTitle(['Major Assemblies']);
        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));

		$scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;

		$scope.loading = false
	}]);