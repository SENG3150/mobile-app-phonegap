// TODO: Test whether clicking on the inspection will take the user to the view page for that inspection

// TODO: Test whether clicking on the New Inspection button will take the user to the create inspection page

describe("inspection clicking", function() {
    beforeEach(function() {
        browser.get('/#/technician/inspections');
    });

    describe('click inspection redirect', function() {
        var $httpBackend;
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
                            oilTest: {},
                            wearTest: {} 
                        }
                    ]
                }
            ]
        };

        // tests require inspections in list for test to be valid
        beforeEach(inject(function(_$httpBackend_, _AuthService_) {
            $httpBackend = _$httpBackend_;
            AuthService = _AuthService_

            spyOn(AuthService, 'getUser').and.returnValue({
                primary: {
                    id: 10
                }
            });

            // mock response
            $httpBackend.when('GET', ENV.apiEndpoint + inspectionRequest).respond(inspectionData);
        }));

        it('should redirect to inspection view', function() {
            // click first list item
            var link = element(by.class('navigate-right'));
            var uri = element.attributes['href'].value;
            link.click();
            expect(browser.getLocationAbsUrl()).toMatch(uri);
        });
    });

    describe('click new inspection redirect', function() {
        it('should redirect to inspection view', function() {
            element(by.class('btn-nav')).click();
            expect(browser.getLocationAbsUrl()).toMatch('/#/technician/inspections/create');
        });
    });
});