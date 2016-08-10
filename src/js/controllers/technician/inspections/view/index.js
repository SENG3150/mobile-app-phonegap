angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'Inspections', 'moment', '$stateParams', function ($scope, Inspections, moment, $stateParams) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.loading = true;

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