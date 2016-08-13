angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerMajorAssembly', ['$scope', '$stateParams', 'moment', 'Inspections', 'LayoutService', function ($scope, $stateParams, moment, Inspections, LayoutService) {
		$scope.loading = true;
        $scope.inspectionId = $stateParams.inspection;
        $scope.majorAssemblyId = $stateParams.majorAssembly;
        $scope.moment = moment;


        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-index', { inspection: $scope.inspectionId }));
        
        //Select the specific inspection
        Inspections
            .one($scope.inspectionId)
            .get({
                include: 'technician,scheduler,machine.model,majorAssemblies.majorAssembly,majorAssemblies.subAssemblies.subAssembly'
            })
            .then(function (data) {
                angular.forEach(data.majorAssemblies, function(majorAssembly) {
                    if(majorAssembly.id == $scope.majorAssemblyId) {
                        $scope.majorAssembly = majorAssembly;
                        $scope.majorAssemblyName = majorAssembly.majorAssembly.name;
                        LayoutService.setTitle([ $scope.majorAssemblyName ]);
                    }
                });
                $scope.loading = false
            });
	}]);