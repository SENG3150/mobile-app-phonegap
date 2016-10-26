describe('localStorage', function () {
    var AuthControllerLogin, AuthControllerLogout, AuthService, $state, rootScope, SettingsService, NetworkInformationService, SyncService, NotificationService, InspectionsStorage, $auth;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller, _$rootScope_, _AuthService_, _$state_, _SettingsService_, _NetworkInformationService_, _SyncService_, _NotificationService_, _InspectionsStorage_, _$auth_) {
        AuthControllerLogin = $controller;
        AuthControllerLogout = $controller;
        rootScope = _$rootScope_;
        AuthService = _AuthService_;
        $state = _$state_;
        SettingsService = _SettingsService_;
        NetworkInformationService = _NetworkInformationService_;
        SyncService = _SyncService_;
        NotificationService = _NotificationService_;
        InspectionsStorage = _InspectionsStorage_;
        $auth = _$auth_;
    }));


    it('Test Local Storage', inject(function($q) {
        var deferred = $q.defer();
        var scope = rootScope.$new();
        var loginController = AuthControllerLogin('AuthControllerLogin', {$scope: scope});
        spyOn(AuthService, 'authenticate').and.returnValue(deferred.promise);

        //login
        loginController.username = 'technician';
        loginController.password = 'technician';
        scope.login();

        //logout
        $auth.logout();

        var test =  InspectionsStorage[0];

        expect(test).toEqual(undefined);
     }));

});