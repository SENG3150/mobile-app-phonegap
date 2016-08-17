angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'InspectionsStorage', 'moment', '$stateParams', 'LayoutService', 'NotificationService', function ($scope, InspectionsStorage, moment, $stateParams, LayoutService, NotificationService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.showMajorAssemblies = true;

		LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function () {
			NotificationService.alert('Saved!');
		});

		$scope.moment = moment;
		$scope.inspection = InspectionsStorage.one($scope.inspectionId);

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