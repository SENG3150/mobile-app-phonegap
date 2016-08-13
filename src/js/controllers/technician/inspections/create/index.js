angular
	.module('joy-global')
	.controller('TechnicianInspectionsCreateControllerIndex', ['$scope', 'Machines', 'moment', 'LayoutService', 'NotificationService', function ($scope, Machines, moment, LayoutService, NotificationService) {

		LayoutService.setTitle(['Create Inspection', 'Machines']);
		LayoutService.getPageHeader().setBackButton(function () {
			history.back();
		});
		LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-check', 'Save', function() {
			NotificationService.alert('Saved!');
		});

		Machines
			.getList({
				include: 'model'
			})
			.then(function (data) {
				$scope.loading = false;
				$scope.machines = data;
			});

		$scope.moment = moment;
	}]);