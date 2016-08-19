angular
    .module('joy-global')
    .controller('TechnicianMachinesControllerIndex', ['$scope', 'Machines', 'moment', 'LayoutService', function ($scope, Machines, moment, LayoutService) {
        $scope.loading = true;

        LayoutService.setTitle(['Machines']);

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
