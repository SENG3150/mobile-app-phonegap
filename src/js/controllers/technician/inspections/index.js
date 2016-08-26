angular
	.module('joy-global')
	.controller('TechnicianInspectionsControllerIndex', ['$scope', 'InspectionsStorage', 'moment', 'LayoutService', 'AuthService', '_', '$rootScope', function ($scope, InspectionsStorage, moment, LayoutService, AuthService, _, $rootScope) {
		LayoutService.setTitle(['Inspections']);
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-plus', 'Create', LayoutService.redirect('technician-inspections-create-index'));

		$scope.refresh = function () {
			$scope.inspections = _.sortBy(
				_.filter(InspectionsStorage.getList(), function (inspection) {
					if (typeof inspection.technician != 'undefined') {
						return AuthService.getUser().technician.id == inspection.technician.id;
					}
					return false;
				})
				, 'timeScheduled'
			).reverse();

			$scope.incompleteInspections = _.filter($scope.inspections, function (inspection) {
				return moment(inspection.timeScheduled).isAfter(moment()) == true;
			});

			$scope.completeInspections = _.filter($scope.inspections, function (inspection) {
				return inspection.timeCompleted != null;
			});

			$scope.isModified = function (item) {
				return InspectionsStorage.isModified(item.id);
			};
		};

		$scope.moment = moment;

		$scope.refresh();

		$rootScope.$on('syncService.downloadFinished', function (e, args) {
			if (args.name == 'Inspections') {
				$scope.refresh();
			}
		});
	}]);