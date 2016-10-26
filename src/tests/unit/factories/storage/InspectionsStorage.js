describe('InspectionStorage', function() {
    var InspectionsStorage;

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

    beforeEach(inject(function(_InspectionsStorage_, ItemStorageService) {
        InspectionsStorage = _InspectionsStorage_;

        var service = ItemStorageService.service('inspections');
        spyOn(service, 'one').and.returnValue(inspectionData);
    }));

    it('should return inspection', function() {
        expect(InspectionsStorage.getInspection(0)).toEqual(inspectionData);
    });

    it('should return major assembly', function() {
        expect(InspectionsStorage.getMajorAssembly(0, 1)).toEqual(inspectionData);
    });

    it('should return sub assembly', function() {
        expect(InspectionsStorage.getSubAssembly(0, 1, 1)).toEqual(inspectionData);
    });
});