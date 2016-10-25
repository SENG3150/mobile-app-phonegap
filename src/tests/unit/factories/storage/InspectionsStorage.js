describe('InspectionStorage', function() {
    var $controller;
    var $scope;
    var ItemStorageService;
    var controller;

    beforEach(inject(function(_$controller$, _ItemStorageService_) {
        $controller = _$controller_;
        ItemStorageService = _ItemStorageService_;

        spyOn(ItemStorageService, 'one').and.returnValue({
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
        });

        $scope = {};
        controller = $controller('ItemStorageService', {
            $scope: $scope
        });
    }));

    it('should return inspection', function() {
        var $scope = {};
        var controller = $controller('ItemStorageService', {
            $scope: $scope
        });

        expect($scope.getInspection(0)).not.toBe(null);
    });

    it('should return major assembly', function() {
        var $scope = {};
        var controller = $controller('ItemStorageService', {
            $scope: $scope
        });

        expect($scope.getMajorAssembly(0, 1)).not.toBe(null);
    });

    it('should return sub assembly', function() {
        var $scope = {};
        var controller = $controller('ItemStorageService', {
            $scope: $scope
        });

        expect($scope.getSubAssembly(0, 1, 1)).not.toBe(null);
    });
});