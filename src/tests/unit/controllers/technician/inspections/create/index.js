describe('TechnicianInspectionsCreateControllerIndex', function () {
        var TechnicianInspectionsCreateControllerIndex;

        beforeEach(angular.mock.module('joy-global'));

        beforeEach(inject(function ($controller) {
            TechnicianInspectionsCreateControllerIndex = $controller;
        }));

        it('should exist', function(){
            var controller = TechnicianInspectionsCreateControllerIndex('TechnicianInspectionsCreateControllerIndex', {$scope: {}});
            expect(controller).toBeDefined();
        });
    });