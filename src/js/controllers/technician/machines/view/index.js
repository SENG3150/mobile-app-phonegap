angular
    .module('joy-global')
    .controller('TechnicianMachinesViewControllerIndex', ['$scope', 'Machines', 'moment', '$stateParams', 'LayoutService', function ($scope, Machines, moment, $stateParams, LayoutService) {
        $scope.machineId = $stateParams.machine;
        $scope.loading = true;

        LayoutService.setTitle(['Machine ' + $scope.machineId, 'Machines']);
        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-machines-index'));
        LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-plus', 'Create', (LayoutService.redirect('technician-inspections-create-index', { machine: $scope.machineId })));

        $scope.moment = moment;

        Machines
            .one($scope.machineId)
            .get({
                include: 'model,model.majorAssemblies,model.majorAssemblies.subAssemblies'
            })
            .then(function (data) {
                $scope.loading = false;

                $scope.machine = data;
                $scope.majorAssemblies = $scope.machine.model.majorAssemblies;
            });
}]);