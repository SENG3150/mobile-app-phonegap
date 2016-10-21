describe('TechnicianInspectionsControllerIndex', function () {
    var TechnicianInspectionsControllerIndex;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller) {
        TechnicianInspectionsControllerIndex = $controller;
    }));

    it('should exist', function(){
        var controller = TechnicianInspectionsControllerIndex('TechnicianInspectionsControllerIndex', {$scope: {}});
        expect(controller).toBeDefined();
    });
});