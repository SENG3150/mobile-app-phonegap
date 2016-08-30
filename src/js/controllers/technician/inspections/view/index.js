angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'InspectionsStorage', 'moment', '$stateParams', 'LayoutService', function ($scope, InspectionsStorage, moment, $stateParams, LayoutService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.showMajorAssemblies = true;
        $scope.moment = moment;

        $scope.inspection = InspectionsStorage.one($scope.inspectionId);

		LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('icon icon-check', 'Complete', function () {
            $scope.inspection.timeCompleted = moment();
            InspectionsStorage.set($scope.inspection);
		});

		$scope.actionItems = [];

		angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
			angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
				if (subAssembly.machineGeneralTest && subAssembly.machineGeneralTest.actionItem) {
					var actionItem = subAssembly.machineGeneralTest.actionItem;

					actionItem.majorAssembly = majorAssembly;
					actionItem.subAssembly = subAssembly;

					$scope.actionItems.push(actionItem);
				}

				if (subAssembly.oilTest && subAssembly.oilTest.actionItem) {
					var actionItem = subAssembly.oilTest.actionItem;

					actionItem.majorAssembly = majorAssembly;
					actionItem.subAssembly = subAssembly;

					$scope.actionItems.push(actionItem);
				}

				if (subAssembly.wearTest && subAssembly.wearTest.actionItem) {
					var actionItem = subAssembly.wearTest.actionItem;

					actionItem.majorAssembly = majorAssembly;
					actionItem.subAssembly = subAssembly;

					$scope.actionItems.push(actionItem);
				}
			});
		});
	}]);