describe('TechnicianMachinesViewControllerMajorAssembly', function () {
    var TechnicianSyncControllerIndex;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller) {
        TechnicianMachinesViewControllerMajorAssembly = $controller;
    }));

    it('should exist', function(){
        var controller = TechnicianMachinesViewControllerMajorAssembly('TechnicianMachinesViewControllerMajorAssembly', {$scope: {}});
        expect(controller).toBeDefined();
    });
});