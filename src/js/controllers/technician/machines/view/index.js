angular
	.module('joy-global')
	.controller('TechnicianMachinesViewControllerIndex', ['$scope', 'MachinesStorage', 'moment', '$stateParams', 'LayoutService', '$rootScope', 'InspectionsStorage', 'AuthService', '$state', 'ViewsService', function ($scope, MachinesStorage, moment, $stateParams, LayoutService, $rootScope, InspectionsStorage, AuthService, $state, ViewsService) {
		$scope.machineId = $stateParams.machine;
		$scope.machine = MachinesStorage.one($scope.machineId);

		if($scope.machine) {
			LayoutService.setTitle([$scope.machine.name, 'Machines']);
			LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-machines-index'));

			$scope.refresh = function () {
				$scope.inspections = _.sortBy(
					_.filter(InspectionsStorage.getList(), function (inspection) {
						if (typeof inspection.machine != 'undefined') {
							if ($scope.machine.id == inspection.machine.id) {
								if (typeof inspection.technician != 'undefined') {
									return AuthService.getUser().technician.id == inspection.technician.id;
								}
							}
						}

						return false;
					})
					, 'timeScheduled'
				).reverse();

				$scope.isModified = function (item) {
					return InspectionsStorage.isModified(item.id);
				};

				$scope.viewInspection = function (inspection) {
					ViewsService.switchView('inspections');
					$state.go('technician-inspections-view-index', {inspection: inspection});
				};
			};

			$scope.moment = moment;

			$scope.refresh();

			$rootScope.$on('syncService.downloadFinished', function (e, args) {
				if (args.name == 'Inspections' || args.name == 'Machines') {
					$scope.refresh();
				}
			});
		} else {
			LayoutService.redirect('technician-machines-index', {}, true);
		}
	}]);