angular
    .module('joy-global')
    .controller('TechnicianMachinesControllerIndex', ['$scope', 'MachinesStorage', 'moment', 'LayoutService', function ($scope, MachinesStorage, moment, LayoutService) {
        LayoutService.setTitle(['Machines']);

	    $scope.machines = MachinesStorage.getList();

        $scope.moment = moment;
    }]);
