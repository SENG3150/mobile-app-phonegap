describe('AuthService', function () {
    var AuthService, $auth, ENV, $localStorage, $q, $http;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_AuthService_, _$auth_, _ENV_, _$localStorage_, _$q_, _$http_) {
        AuthService = _AuthService_;
        $auth = _$auth_;
        ENV = _ENV_;
        $localStorage = _$localStorage_;
        $q = _$q_;
        $http = _$http_;
    }));

    it('should exist', function () {
        expect(AuthService).toBeDefined();
    });

    it ('should contain local storage capabilities', inject(function($localStorage) {
        expect($localStorage).toBeDefined();
    }));

    it ('should contain an http service', inject(function($http) {
        expect($http).toBeDefined();
    }));

    describe('.isAuthenticated()', function () {
        it('should exist', function () {
            expect(AuthService.isAuthenticated).toBeDefined();
        });
    });

    describe('.setUser()', function () {

        it('should exist', function () {
            expect(AuthService.setUser).toBeDefined();
        });
    });

    describe('.getUser()', function () {

        it('should exist', function () {
            expect(AuthService.getUser).toBeDefined();
        });
    });

    describe('.authenticate()', function() {

        it ('should exist', function() {
            expect(AuthService.authenticate).toBeDefined();
        });

        it ('should run $q.defer', function() {
            spyOn($q, 'defer').and.callThrough();
            var credentials = "irrelevant information";
            AuthService.authenticate(credentials);
            expect($q.defer).toHaveBeenCalled();
        });

        it ('should run $auth.login', function() {
            spyOn($auth, 'login').and.callThrough();
            var credentials = "irrelevant information";
            AuthService.authenticate(credentials);
            expect($auth.login).toHaveBeenCalled();
        });
    });

    describe('.checkPermissions()', function() {

        it('should exist', function () {
            expect(AuthService.checkPermissions).toBeDefined();
        });

        it('should run $q.defer', function () {
            spyOn($q, 'defer').and.callThrough();
            var requiredLogin = "irrelevant information";
            AuthService.checkPermissions(requiredLogin);
            expect($q.defer).toHaveBeenCalled();
        });

        it ('should run $auth.login if required login is true and $auth.isAuthenticated is false', function()
        {
            spyOn($auth, 'isAuthenticated').and.callThrough().and.returnValue(false);
            spyOn($auth, 'getToken').and.callThrough();
            var requiredLogin = true;
            AuthService.checkPermissions(requiredLogin);
            expect($auth.getToken).toHaveBeenCalled();
        });

        it ('should NOT run $auth.login if required login is true and $auth.isAuthenticated is true', function()
        {
            spyOn($auth, 'isAuthenticated').and.callThrough().and.returnValue(true);
            spyOn($auth, 'getToken').and.callThrough();
            var requiredLogin = true;
            AuthService.checkPermissions(requiredLogin);
            expect($auth.getToken).not.toHaveBeenCalled();
        });

        it ('should NOT run $auth.login if required login is false and $auth.isAuthenticated is true', function()
        {
            spyOn($auth, 'isAuthenticated').and.callThrough().and.returnValue(true);
            spyOn($auth, 'getToken').and.callThrough();
            var requiredLogin = false;
            AuthService.checkPermissions(requiredLogin);
            expect($auth.getToken).not.toHaveBeenCalled();
        });

        it ('should NOT run $auth.login if required login is false and $auth.isAuthenticated is false', function()
        {
            spyOn($auth, 'isAuthenticated').and.callThrough().and.returnValue(false);
            spyOn($auth, 'getToken').and.callThrough();
            var requiredLogin = false;
            AuthService.checkPermissions(requiredLogin);
            expect($auth.getToken).not.toHaveBeenCalled();
        });
    });
});