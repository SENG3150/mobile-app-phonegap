angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'Inspections', 'moment', '$stateParams', 'LayoutService', 'NotificationService', function ($scope, Inspections, moment, $stateParams, LayoutService, NotificationService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.loading = true;
		$scope.showMajorAssemblies = false;

		LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			NotificationService.alert('Saved!');
		});

		$scope.moment = moment;

		Inspections
			.one($scope.inspectionId)
			.get({
				include: 'technician,scheduler,machine.model,majorAssemblies.majorAssembly,majorAssemblies.subAssemblies.subAssembly'
			})
			.then(function (data) {
				$scope.loading = false;

				$scope.inspection = data;
			});
	}]);