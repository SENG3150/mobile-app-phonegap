describe('TechnicianInspectionsViewControllerMajorAssembly', function () {
        var TechnicianInspectionsViewControllerMajorAssembly;

        beforeEach(angular.mock.module('joy-global'));

        beforeEach(inject(function ($controller) {
            TechnicianInspectionsViewControllerMajorAssembly = $controller;
        }));

        it('should exist', function(){
            var controller = TechnicianInspectionsViewControllerMajorAssembly('TechnicianInspectionsViewControllerMajorAssembly', {$scope: {}});
            expect(controller).toBeDefined();
        });
    });