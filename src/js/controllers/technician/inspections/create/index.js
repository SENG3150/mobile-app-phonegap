angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerIndex', ['$scope', 'InspectionsStorage', 'MachinesStorage', 'DomainExpertsStorage', 'Technicians', 'AuthService', '_', 'LayoutService', '$state', 'moment', 'NotificationService',
		function ($scope, InspectionsStorage, MachinesStorage, DomainExpertsStorage, Technicians, AuthService, _, LayoutService, $state, moment, NotificationService) {

		$scope.showSubAssemblies = false;

		LayoutService.setTitle(['Create Inspection', 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {

			$scope.updateScheduledTests();

			$scope.inspection.machine = $scope.selectedMachine;

			if ($scope.scheduledSubAssemblies > 0)
			{
				$scope.inspection.majorAssemblies = [];

				angular.forEach($scope.inspection.selectedMajorAssemblies, function (majorAssembly, majorAssemblyId)
				{
					angular.forEach($scope.inspection.machine.model.majorAssemblies, function (majA, id, name, subAssemblies)
					{
						if (majA.id == majorAssemblyId)
						{
							var majorAss =
							{
								id: majA.id,
								name: majA.name
							}

							var local =
							{
								majorAssembly: majorAss,
								subAssemblies: []
							};

							angular.forEach(majorAssembly, function (subAssembly, subAssemblyId)
							{
								if (subAssembly == true)
								{

									angular.forEach(majA.subAssemblies, function (subA, id, name, machineGeneral, oil, wear, uniqueDetails)
									{
										if (subA.id == subAssemblyId)
										{
											var subAss =
											{
												id: subA.id,
												name: subA.name,
												oil: subA.oil,
												wear: subA.wear,
												machineGeneral: subA.machineGeneral,
												uniqueDetails: subA.uniqueDetails
											};

											local.subAssemblies.push(
											{
												subAssembly: subAss
											});
										}
									})
								}
							});


							if (local.subAssemblies.length > 0)
							{
								$scope.inspection.majorAssemblies.push(local);
							}
						}
					});
				});
			}

			var inspection =
			{
				timeCreated: $scope.inspection.timeCreated.format(),
				timeScheduled: $scope.inspection.timeScheduled.format(),
				machine: $scope.selectedMachine,
				technician: $scope.inspection.technician,
				scheduler: DomainExpertsStorage.get(1),
				majorAssemblies: $scope.inspection.majorAssemblies
			};

			console.log(inspection);

			InspectionsStorage.set(inspection);
			NotificationService.alert('Saved!', 'Success');
		});

		$scope.selectedMachine = null;
		$scope.selectedTechnician = null;

		$scope.scheduledSubAssemblies = 0;
		$scope.scheduledTests = 0;

		$scope.inspection =
		{
			timeScheduled: moment().add(30, 'minutes'),
			timeCreated: moment(),
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

							if (modelSubAssembly.machineGeneralTest == true) {
								$scope.scheduledTests++;
							}

							if (modelSubAssembly.oilTest == true) {
								$scope.scheduledTests++;
							}

							if (modelSubAssembly.wearTest == true) {
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
				$scope.inspection.selectedMajorAssemblies[majorAssembly][key] = true;
			});

			$scope.updateScheduledTests();
		};

		$scope.toggleSubAssembly = function (majorAssembly, subAssembly) {
			$scope.inspection.selectedMajorAssemblies[majorAssembly][subAssembly] = !$scope.inspection.selectedMajorAssemblies[majorAssembly][subAssembly];

			$scope.updateScheduledTests();
		};

	}]);