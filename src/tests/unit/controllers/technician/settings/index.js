describe('TechnicianSettingsControllerIndex', function () {
        var TechnicianMachinesControllerIndex, $state, rootScope;

        beforeEach(angular.mock.module('joy-global'));

        beforeEach(inject(function ($controller, _$rootScope_) {
            TechnicianSettingsControllerIndex = $controller;
            rootScope = _$rootScope_;
        }));

        it('should exist', function(){
            var controller = TechnicianSettingsControllerIndex('TechnicianSettingsControllerIndex', {$scope: {}});
            expect(controller).toBeDefined();
        });
});