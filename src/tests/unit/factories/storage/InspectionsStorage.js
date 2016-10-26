describe('InspectionStorage', function() {
    var $httpBackend;
    var ENV;
    var InspectionsStorage;

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

    beforeEach(inject(function(_$httpBackend_, _ENV_, _InspectionsStorage_) {
        $httpBackend = _$httpBackend_;
        ENV = _ENV_;
        InspectionsStorage = _InspectionsStorage_;

        $httpBackend.when('GET', ENV.apiEndpoint + inspectionRequest).respond(inspectionResponse);
    }));

    it('should return inspection', function() {
        expect(InspectionsStorage.getInspection(0)).toEqual(inspectionResponse);
    });

    it('should return major assembly', function() {
        expect(InspectionsStorage.getMajorAssembly(0, 1)).toEqual(inspectionResponse);
    });

    it('should return sub assembly', function() {
        expect(InspectionsStorage.getSubAssembly(0, 1, 1)).toEqual(inspectionResponse);
    });
});