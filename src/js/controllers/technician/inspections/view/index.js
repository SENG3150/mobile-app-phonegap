angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'Inspections', 'moment', '$stateParams', 'LayoutService', function ($scope, Inspections, moment, $stateParams, LayoutService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.loading = true;

		LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			alert('Saved!');
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