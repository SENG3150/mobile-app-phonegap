angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'InspectionsStorage', 'moment', '$stateParams', 'LayoutService', '_', function ($scope, InspectionsStorage, moment, $stateParams, LayoutService, _) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.moment = moment;

		$scope.inspection = InspectionsStorage.one($scope.inspectionId);
		$scope.actionItems = [];

		if ($scope.inspection) {
			angular.forEach($scope.inspection.majorAssemblies, function (majorAssembly) {
				angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
					var actionItem = {};

					if (subAssembly.machineGeneralTest && subAssembly.machineGeneralTest.actionItem && subAssembly.machineGeneralTest.actionItem.status != 'OK') {
						actionItem = subAssembly.machineGeneralTest.actionItem;

						actionItem.majorAssembly = {
							majorAssembly: {
								id: majorAssembly.majorAssembly.id
							}
						};

						actionItem.subAssembly = {
							subAssembly: {
								id: subAssembly.subAssembly.id
							}
						};


						$scope.actionItems.push(actionItem);
					}

					if (subAssembly.oilTest && subAssembly.oilTest.actionItem && subAssembly.oilTest.actionItem.status != 'OK') {
						actionItem = subAssembly.oilTest.actionItem;

						actionItem.majorAssembly = {
							majorAssembly: {
								id: majorAssembly.majorAssembly.id
							}
						};

						actionItem.subAssembly = {
							subAssembly: {
								id: subAssembly.subAssembly.id
							}
						};


						$scope.actionItems.push(actionItem);
					}

					if (subAssembly.wearTest && subAssembly.wearTest.actionItem && subAssembly.wearTest.actionItem.status != 'OK') {
						actionItem = subAssembly.wearTest.actionItem;

						actionItem.majorAssembly = {
							majorAssembly: {
								id: majorAssembly.majorAssembly.id
							}
						};

						actionItem.subAssembly = {
							subAssembly: {
								id: subAssembly.subAssembly.id
							}
						};

						$scope.actionItems.push(actionItem);
					}
				});
			});
		} else {
			LayoutService.redirect('technician-inspections-index', null, true);
		}

		LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('icon icon-check', 'Complete', function () {
			$scope.inspection.timeCompleted = moment().format();

			InspectionsStorage.set($scope.inspection);
		});
	}]);