describe('TechnicianSettingsControllerCredits', function () {
        var TechnicianMachinesControllerIndex, $state, rootScope;

        beforeEach(angular.mock.module('joy-global'));

        beforeEach(inject(function ($controller, _$rootScope_) {
            TechnicianSettingsControllerCredits = $controller;
            rootScope = _$rootScope_;
        }));

        it('should exist', function(){
            var controller = TechnicianSettingsControllerCredits('TechnicianSettingsControllerCredits', {$scope: {}});
            expect(controller).toBeDefined();
        });
});