describe('TechnicianSyncControllerIndex', function () {
    var TechnicianSyncControllerIndex;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller) {
        TechnicianSyncControllerIndex = $controller;
    }));

    it('should exist', function(){
        var controller = TechnicianSyncControllerIndex('TechnicianSyncControllerIndex', {$scope: {}});
        expect(controller).toBeDefined();
    });
});