angular
	.module('joy-global')
	.controller('TechnicianInspectionsControllerIndex', ['$scope', 'Inspections', 'moment', function ($scope, Inspections, moment) {
		$scope.loading = true;

		Inspections
			.getList({
				include: 'machine.model,technician,scheduler'
			})
			.then(function (data) {
				$scope.loading = false;
				$scope.inspections = data;
			});

		$scope.moment = moment;
	}]);