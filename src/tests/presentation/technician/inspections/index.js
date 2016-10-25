// TODO: Test whether clicking on the inspection will take the user to the view page for that inspection

// TODO: Test whether clicking on the New Inspection button will take the user to the create inspection page

describe("inspection clicking", function() {
    describe('click inspection redirect', function() {
        var $httpBackend;
        var ENV;

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

        beforeEach(inject(function(_$httpBackend_, _ENV_) {
            $httpBackend = _$httpBackend_;
            ENV = _ENV_;

            $httpBackend.when('GET', ENV.apiEndpoint + inspectionRequest).respond(inspectionData);
            $httpBackend.flush();
        }));

        it('should redirect to inspection view', function() {
            browser.get('/#/technician/inspections');
            // click first list item
            var link = element(by.class('navigate-right'));
            var uri = element.attr('href');
            link.click();
            expect(browser.getLocationAbsUrl()).toMatch(uri);
        });
    });

    describe('click new inspection redirect', function() {
        it('should redirect to inspection view', function() {
            browser.get('/#/technician/inspections');
            element(by.class('btn-nav')).click();
            expect(browser.getLocationAbsUrl()).toMatch('/#/technician/inspections/create');
        });
    });
});