describe('AuthControllerLogout', function () {
    var AuthControllerLogout, $state, rootScope, $auth;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller, _$rootScope_, _$state_,_$auth_) {
        AuthControllerLogout = $controller;
        rootScope = _$rootScope_;
        $state = _$state_;
        $auth = _$auth_;
    }));

    it('should exist', function(){
        var controller = AuthControllerLogout('AuthControllerLogout', {$scope: {}});
        expect(controller).toBeDefined();
    });

    describe('.logout()', function() {
        var scope, controller;

        beforeEach(function () {
            scope = rootScope.$new();
            controller = AuthControllerLogout('AuthControllerLogout', {$scope: scope});
        });

        it('should logout', function() {
            spyOn($state, 'go');

            $auth.logout();

            scope.$digest();

            expect($state.go).toHaveBeenCalledWith('auth.login');
        });
    });
});