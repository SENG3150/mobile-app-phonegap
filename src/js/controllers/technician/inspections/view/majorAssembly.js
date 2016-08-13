angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerMajorAssembly', ['$scope', '$stateParams', 'moment', 'Inspections', 'LayoutService', function ($scope, $stateParams, moment, Inspections, LayoutService) {
		$scope.loading = true;
        $scope.inspectionId = $stateParams.inspection;
        $scope.majorAssemblyId = $stateParams.majorAssembly;
        $scope.moment = moment;

        LayoutService.setTitle(['Major Assemblies']);
        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-index', { inspection: $scope.inspectionId }));

        //Select the specific inspection
        Inspections
            .one($scope.inspectionId)
            .get({
                include: 'technician,scheduler,machine.model,majorAssemblies.majorAssembly,majorAssemblies.subAssemblies.subAssembly'
            })
            .then(function (data) {
                $scope.inspection = data;
            });

        //Select the specific major Assembly
        angular.forEach($scope.inspection.majorAssemblies, function(majorAssembly) {
            console.log(majorAssembly.id);
            if(majorAssembly.id == $scope.majorAssemblyId) {
                // You've got a match
                console.log(majorAssembly);
                console.log("DOG");
                $scope.majorAssembly = majorAssembly;
            }
        });
		$scope.loading = false
	}]);