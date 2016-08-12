angular
    .module('joy-global')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('technician-machines-view-index', {
                parent: 'technician',
                url: '/machines/:machine',
                templateUrl: 'views/technician/machines/view/index.html',
                controller: 'TechnicianMachinesViewControllerIndex',
                resolve: {
                    loggedIn: ['AuthService', function (AuthService) {
                        return AuthService.checkPermissions(true);
                    }],
                    layoutService: ['LayoutService', function(LayoutService) {
                        return LayoutService.reset();
                    }]
                }
            })
            ;
    }]);