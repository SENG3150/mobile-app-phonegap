angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'InspectionsStorage', 'moment', '$stateParams', 'LayoutService', '_', 'NotificationService', function ($scope, InspectionsStorage, moment, $stateParams, LayoutService, _, NotificationService) {
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

		$scope.setupForStart = function () {
			LayoutService.reset();
			LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
			LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
			LayoutService.getPageHeader().setHeroButton('icon icon-check', 'Start', function () {
				$scope.inspection.timeCompleted = moment().format();

				InspectionsStorage.set($scope.inspection);

				NotificationService.alert('You can now start the inspection.');

				$scope.resetTitle();
				$scope.setupForComplete();
			});
		};

		$scope.setupForComplete = function () {
			LayoutService.reset();
			LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
			LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
			LayoutService.getPageHeader().setHeroButton('icon icon-check', 'Complete', function () {
				$scope.inspection.timeCompleted = moment().format();

				InspectionsStorage.set($scope.inspection);

				NotificationService.alert('The inspection was marked as complete.');

				$scope.resetTitle();
			});
		};

		$scope.resetTitle = function () {
			LayoutService.reset();
			LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
			LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		};

		if ($scope.inspection.timeStarted == null) {
			$scope.resetTitle();
			$scope.setupForStart();
		} else if ($scope.inspection.timeCompleted == null) {
			$scope.resetTitle();
			$scope.setupForComplete();
		} else {
			$scope.resetTitle();
		}
	}]);