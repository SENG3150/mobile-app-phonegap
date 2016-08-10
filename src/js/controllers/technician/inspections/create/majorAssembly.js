angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerMajorAssembly', ['$scope', '$stateParams', function ($scope, $stateParams) {
		$scope.majorAssemblyId = $stateParams.majorAssembly;
	}]);