angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerMajorAssembly', ['$scope', '$stateParams', 'LayoutService', 'NotificationService', function ($scope, $stateParams, LayoutService, NotificationService) {
		$scope.majorAssemblyId = $stateParams.majorAssembly;

		LayoutService.setTitle(['Create Inspection', 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-create-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			NotificationService.alert('Saved!');
		});
	}]);