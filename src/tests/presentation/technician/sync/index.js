// TODO: Test whether an unsynced inspection causes the upload box to appear

describe('test upload box', function() {
    var PageHeaderService;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function(_PageHeaderService_, $controller, $rootScope,  AuthService, $q) {
        var PageHeaderService = _PageHeaderService_;
        
        var scope = $rootScope.$new();
        var controller = $controller;
        controller = controller('AuthControllerLogin', {$scope: scope});

        // login
        var deferred = $q.defer();
        spyOn(AuthService, 'authenticate').and.returnValue(deferred.promise);
        scope.username = 'technician';
        scope.password = 'technician';
        scope.type = 'technician';
        scope.login();
        deferred.resolve();
    }));

    it('should display sync button', function() {
        browser.get('/#/technician/sync');
        expect(PageHeaderService.rightButton.display).toEqual(true);
        expect(PageHeaderService.rightButton.text).toEqual('Sync');
    });
});