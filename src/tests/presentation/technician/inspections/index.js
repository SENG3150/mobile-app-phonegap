describe("inspection view redirects", function() {
    var inspectionData = {
        id: 0,
        comments: [],
        photos: [],
        majorAssemblies: [
            {
                id: 1,
                photos: [],
                majorAssembly: {
                    name: 'majorAssembly1'
                },
                comments: [],
                subAssemblies: [
                    {
                        id: 1,
                        photos: [],
                        majorAssembly: {
                            name: 'subAssembly1'
                        },
                        comments: []
                    }
                ]
            }
        ]
    };

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function(ItemStorageService, $controller, $rootScope,  AuthService, $q) {
        var service = ItemStorageService.service('inspections');
        spyOn(service, 'one').and.returnValue(inspectionData);
        
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

    it('should redirect to inspection view', function() {
        browser().get('/#/technician/inspections');
        // click first list item
        var link = element(by.class('navigate-right'));
        var uri = element.attr('href');
        link.click();
        expect(browser().getLocationAbsUrl()).toMatch(uri);
    });

    it('should redirect to inspection view', function() {
        browser().get('/#/technician/inspections');
        element(by.class('btn-nav')).click();
        expect(browsers().getLocationAbsUrl()).toMatch('/#/technician/inspections/create');
    });
});