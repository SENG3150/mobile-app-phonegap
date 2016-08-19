angular
    .module('joy-global')
    .controller('TechnicianMachinesViewControllerIndex', ['$scope', 'MachinesStorage', 'moment', '$stateParams', 'LayoutService', function ($scope, MachinesStorage, moment, $stateParams, LayoutService) {
        $scope.machineId = $stateParams.machine;
        $scope.machine = MachinesStorage.one($scope.machineId);
        $scope.majorAssemblies = $scope.machine.model.majorAssemblies;

        LayoutService.setTitle(['Machine ' + $scope.machineId, 'Machines']);
        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-machines-index'));

        $scope.moment = moment;
}]);