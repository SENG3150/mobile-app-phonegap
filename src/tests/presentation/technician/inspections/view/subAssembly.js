// TODO: Test whether the comments and photos tabs are present on the page
describe('test tabs present', function() {

    var $httpBackend;
    var ENV;
    var AuthService;

    var inspectionRequest = 'inspections?include=technician,scheduler,machine.model,majorAssemblies.majorAssembly,majorAssemblies.subAssemblies.subAssembly';
    var inspectionResponse = {
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

    beforeEach(module('joy-global'));

    // tests require inspections in list for test to be valid
    beforeEach(inject(function(_$httpBackend_, _ENV_, _AuthService_) {
        $httpBackend = _$httpBackend_;
        ENV = _ENV_;
        AuthService = _AuthService_;

        spyOn(AuthService, 'getUser').and.returnValue({
            primary: {
                id: 10
            }
        });

        $httpBackend.when('GET', ENV.apiEndpoint + inspectionRequest).respond(inspectionResponse);
    }));

    it('should have comment tab', function() {
        browser.get('/#/technician/inspections/0/1/1');
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
        browser.get('/#/technician/inspections/0/1/1');
        var photosFounds = false;
        for (var tab in element(by.class('segmented-control')).children()) {
            if (tab.attr('data-target') == '#photos') {
                photosFounds = true;
                expect(tab).toEuqual('hi');
                break;
            }
        }
        expect(photosFounds).toEqual(true);
    });
});