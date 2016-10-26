describe('login', function () {
    var AuthControllerLogin, AuthControllerLogout, AuthService, $state, rootScope, SettingsService, NetworkInformationService, SyncService, LayoutService, InspectionsStorage, $auth;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller, _$rootScope_, _AuthService_, _$state_, _SettingsService_, _NetworkInformationService_, _SyncService_, _LayoutService_, _InspectionsStorage_, _$auth_) {
        AuthControllerLogin = $controller;
        AuthControllerLogout = $controller;
        rootScope = _$rootScope_;
        AuthService = _AuthService_;
        $state = _$state_;
        SettingsService = _SettingsService_;
        NetworkInformationService = _NetworkInformationService_;
        SyncService = _SyncService_;
        LayoutService = _LayoutService_;
        InspectionsStorage = _InspectionsStorage_;
        $auth = _$auth_;
    }));


    it('Attempt to access page', inject(function($q) {
        var deferred = $q.defer();
        var scope = rootScope.$new();
        var loginController = AuthControllerLogin('AuthControllerLogin', {$scope: scope});
        spyOn(AuthService, 'authenticate').and.returnValue(deferred.promise);
        spyOn(LayoutService, 'redirect');

        //login
        loginController.username = 'technician';
        loginController.password = 'technician';
        scope.login();

        //logout
        $auth.logout();

        LayoutService.redirect('technician-inspections-view-majorAssembly',
            {
                inspection: 1,
                majorAssembly: 1
            },
            true
        );

        expect(LayoutService.redirect).toHaveBeenCalledWith('technician-inspections-view-majorAssembly',
            Object(({
                inspection: 1,
                majorAssembly: 1
            }),
                true));
    }));

});