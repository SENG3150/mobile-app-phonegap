angular
	.module('joy-global')
	.controller('TechnicianInspectionsViewControllerIndex', ['$scope', 'InspectionsStorage', 'moment', '$stateParams', 'LayoutService', 'NotificationService', function ($scope, InspectionsStorage, moment, $stateParams, LayoutService, NotificationService) {
		$scope.inspectionId = $stateParams.inspection;
		$scope.showMajorAssemblies = true;

		LayoutService.setTitle(['Inspection ' + $scope.inspectionId, 'Inspections']);
		LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-inspections-index'));
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function () {
			NotificationService.alert('Saved!');
		});

		$scope.moment = moment;
		$scope.inspection = InspectionsStorage.one($scope.inspectionId);
	}]);