describe("inspection view redirects", function() {
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
                        comments: []
                    }
                ]
            }
        ]
    };

    beforeEach(module('joy-global'));

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

    it('should redirect to inspection view', function() {
        browser.get('/#/technician/inspections');
        // click first list item
        var link = element(by.class('navigate-right'));
        var uri = element.attr('href');
        link.click();
        expect(browser.getLocationAbsUrl()).toMatch(uri);
    });

    it('should redirect to inspection view', function() {
        browser.get('/#/technician/inspections');
        element(by.class('btn-nav')).click();
        expect(browser.getLocationAbsUrl()).toMatch('/#/technician/inspections/create');
    });
});