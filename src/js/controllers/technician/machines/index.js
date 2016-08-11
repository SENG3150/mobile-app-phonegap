angular
    .module('joy-global')
    .controller('TechnicianMachinesControllerIndex', ['$scope', 'Machines', 'moment', 'LayoutService', function ($scope, Machines, moment, LayoutService) {
        $scope.loading = true;

        LayoutService.setTitle(['Machines']);
        LayoutService.getPageHeader().setBackButton(LayoutService.redirect('technician-index'));
        //LayoutService.getPageHeader().setHeroButton('fa fa-fw fa-plus', 'Create', LayoutService.redirect('technician-inspections-create-index'));

        Machines
            .getList({
                include: 'model'
            })
            .then(function (data) {
                $scope.loading = false;
                $scope.inspections = data;
            });

        $scope.moment = moment;
    }]);