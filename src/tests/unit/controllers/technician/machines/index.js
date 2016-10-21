describe('TechnicianMachinesControllerIndex', function () {
        var TechnicianMachinesControllerIndex, $state, rootScope;

        beforeEach(angular.mock.module('joy-global'));

        beforeEach(inject(function ($controller, _$rootScope_) {
            TechnicianMachinesControllerIndex = $controller;
            rootScope = _$rootScope_;
        }));

        it('should exist', function(){
            var controller = TechnicianMachinesControllerIndex('TechnicianMachinesControllerIndex', {$scope: {}});
            expect(controller).toBeDefined();
        });
});