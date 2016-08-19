angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerIndex', ['$scope', 'InspectionsStorage', 'MachinesStorage', 'Technicians', 'AuthService', '_', 'LayoutService', '$state', 'moment', 'NotificationService',
		function ($scope, InspectionsStorage, MachinesStorage, Technicians, AuthService, _, LayoutService, $state, moment, NotificationService) {

		$scope.showSubAssemblies = false;

		LayoutService.setTitle(['Create Inspection', 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {

			$scope.updateScheduledTests();

			$scope.inspection.machine = $scope.selectedMachine;

			if ($scope.scheduledTests > 0) {
				$scope.inspection.majorAssemblies = [];

				angular.forEach($scope.inspection.selectedMajorAssemblies, function (majorAssembly, majorAssemblyId) {
					var local = {
						majorAssembly: majorAssemblyId,
						subAssemblies: []
					};

					angular.forEach(majorAssembly, function (subAssembly, subAssemblyId) {
							if (subAssembly == true) {
								local.subAssemblies.push({
									subAssembly: subAssemblyId
								});
							}
						}
					);

					if (local.subAssemblies.length > 0) {
						$scope.inspection.majorAssemblies.push(local);
					}
				});
			};

			InspectionsStorage.set($scope.inspection);
		});

		$scope.selectedMachine = null;
		$scope.selectedTechnician = null;

		$scope.scheduledSubAssemblies = 0;
		$scope.scheduledTests = 0;

		$scope.inspection =
		{
			timeScheduled: moment(),
			machine: $scope.selectedMachine,
			technician: AuthService.getUser().primary,
			scheduler: AuthService.getUser().primary,
			selectedMajorAssemblies: {},
			majorAssemblies: []
		};

		$scope.machines = MachinesStorage.getList();

		$scope.moment = moment;

		$scope.updateScheduledTests = function () {
			$scope.scheduledSubAssemblies = 0;
			$scope.scheduledTests = 0;

			angular.forEach($scope.inspection.selectedMajorAssemblies, function (majorAssembly, majorAssemblyId) {
				var modelMajorAssembly = _.find($scope.selectedMachine.model.majorAssemblies, function (item) {
					return item.id == majorAssemblyId;
				});

				angular.forEach(majorAssembly, function (subAssembly, subAssemblyId) {
						if (subAssembly == true) {
							$scope.scheduledSubAssemblies++;

							var modelSubAssembly = _.find(modelMajorAssembly.subAssemblies, function (item) {
								return item.id == subAssemblyId;
							});

							if (modelSubAssembly.tests[0].machineGeneral.test == true) {
								$scope.scheduledTests++;
							}

							if (modelSubAssembly.tests[0].oil.test == true) {
								$scope.scheduledTests++;
							}

							if (modelSubAssembly.tests[0].wear.test == true) {
								$scope.scheduledTests++;
							}
						}
					}
				)
			});
		};

		$scope.setMachine = function (machine) {

			$scope.selectedMachine = machine;
			$scope.inspection.machine = machine.id;

			$scope.inspection.selectedMajorAssemblies = {};

			angular.forEach(machine.model.majorAssemblies, function (majorAssembly) {
				$scope.inspection.selectedMajorAssemblies[majorAssembly.id] = {};

				angular.forEach(majorAssembly.subAssemblies, function (subAssembly) {
					$scope.inspection.selectedMajorAssemblies[majorAssembly.id][subAssembly.id] = false;
				});
			});

			$scope.updateScheduledTests();
		};

		$scope.toggleMajorAssembly = function (majorAssembly) {
			angular.forEach($scope.inspection.selectedMajorAssemblies[majorAssembly], function (value, key) {
				$scope.inspection.selectedMajorAssemblies[majorAssembly][key] = !value;
			});

			$scope.updateScheduledTests();
		};

		$scope.toggleSubAssembly = function (majorAssembly, subAssembly) {
			$scope.inspection.selectedMajorAssemblies[majorAssembly][subAssembly] = !$scope.inspection.selectedMajorAssemblies[majorAssembly][subAssembly];

			$scope.updateScheduledTests();
		};

	}]);