angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerSubAssembly', ['$scope', '$stateParams', 'moment', 'Inspections', 'LayoutService', function ($scope, $stateParams, moment, Inspections, LayoutService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.majorAssemblyId = $stateParams.majorAssembly;
		$scope.subAssemblyId = $stateParams.subAssembly;
		$scope.moment = moment;

        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-view-majorAssembly', { inspection: $scope.inspectionId,  majorAssembly: $scope.majorAssemblyId }));


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
                        // Find Sub-Assembly
                        angular.forEach(majorAssembly.subAssemblies, function(subAssembly) {
                            if(subAssembly.id == $scope.subAssemblyId) {
                                $scope.subAssembly = subAssembly;
                                $scope.oilTest = subAssembly.oilTest;
                                $scope.machineGeneralTest = subAssembly.machineGeneralTest;
                                $scope.wearTest = subAssembly.wearTest;
                                $scope.subAssemblyName = subAssembly.subAssembly.name;
                                LayoutService.setTitle([ $scope.subAssemblyName ]);
                            }
                        });
                    }
                });
                $scope.loading = false
            });

	}]);