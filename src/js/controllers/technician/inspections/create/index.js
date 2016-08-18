angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerIndex', ['$scope', 'Inspections', 'Machines', 'Technicians', 'AuthService', '_', 'LayoutService', '$state', 'moment', 'NotificationService',
		function ($scope, Inspections, Machines, Technicians, AuthService, _, LayoutService, $state, moment, NotificationService) {

		$scope.showSubAssemblies = false;

		LayoutService.setTitle(['Create Inspection', 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			NotificationService.alert('Saved!');
		});

		$scope.selectedMachine = null;
		$scope.selectedTechnician = null;

		$scope.scheduledSubAssemblies = 0;
		$scope.scheduledTests = 0;

		$scope.inspection =
		{
			timeScheduled: moment().add(0, 'days'),
			machine: $scope.selectedMachine,
			technician: AuthService.getUser().primary.id,
			scheduler: AuthService.getUser().primary.id,
			selectedMajorAssemblies: {},
			majorAssemblies: []
		};

		Machines
			.getList({
				include: 'model,model.majorAssemblies,model.majorAssemblies.subAssemblies,model.majorAssemblies.subAssemblies.tests'
			})
			.then(function (data) {
				$scope.loading = false;
				$scope.machines = data;
			});

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

		$scope.setTechnician = function (technician) {
			$scope.selectedTechnician = technician;
			$scope.inspection.technician = technician.id;
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

		$scope.save = function () {
			$scope.updateScheduledTests();

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

				var inspection = _.clone($scope.inspection);

				delete inspection.selectedMajorAssemblies;

				Inspections.getBulk().post(inspection).then(
					function () {
						//toastr.success('The inspection was scheduled successfully.');
					},
					function () {
						//toastr.error('There was an error while scheduling the inspection.', 'Error');
					}
				)
			} else {
				//toastr.warning('You must schedule at least 1 test.');
			}
		};

	}]);