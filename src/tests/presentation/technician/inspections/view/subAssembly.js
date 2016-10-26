// TODO: Test whether the comments and photos tabs are present on the page
describe('test tabs present', function() {
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
                        comments: [],
                        wearTest: {
                            comments: [
                                {
                                    text: 'comment',
                                    id: 1
                                }
                            ]
                        }
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

    it('should have comment tab', function() {
        browser().get('/#/technician/inspections/0/1/1');
        var commentsFounds = false;
        for (var tab in element(by.class('segmented-control')).children()) {
            if (tab.attr('data-target') == '#comments') {
                commentsFounds = true;
                break;
            }
        }
        expect(commentsFounds).toEqual(true);
    });

    it('should have photos tab', function() {
        browser().get('/#/technician/inspections/0/1/1');
        var photosFounds = false;
        for (var tab in element(by.class('segmented-control')).children()) {
            if (tab.attr('data-target') == '#photos') {
                photosFounds = true;
                break;
            }
        }
        expect(photosFounds).toEqual(true);
    });
});