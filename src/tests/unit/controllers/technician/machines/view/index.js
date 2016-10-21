describe('TechnicianMachinesViewControllerIndex', function () {
        var TechnicianMachinesViewControllerIndex, $state, rootScope;

        beforeEach(angular.mock.module('joy-global'));

        beforeEach(inject(function ($controller, _$rootScope_) {
            TechnicianMachinesViewControllerIndex = $controller;
            rootScope = _$rootScope_;
        }));

        it('should exist', function(){
            var controller = TechnicianMachinesViewControllerIndex('TechnicianMachinesViewControllerIndex', {$scope: {}});
            expect(controller).toBeDefined();
        });
});