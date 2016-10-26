describe('TechnicianInspectionsCreateControllerIndex', function () {
    var TechnicianInspectionsCreateControllerIndex, AuthService, $state, rootScope;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller, _$rootScope_, _$state_,_AuthService_) {
        TechnicianInspectionsCreateControllerIndex = $controller;
        rootScope = _$rootScope_;
        $state = _$state_;
        AuthService = _AuthService_;
    }));

    /*it('should exist', function(){
        var controller = TechnicianInspectionsCreateControllerIndex('TechnicianInspectionsCreateControllerIndex', {$scope: {}});
        expect(controller).toBeDefined();
    });

    describe('.updateScheduledTests()', function() {
        var scope, controller;

        beforeEach(function () {
            scope = rootScope.$new();
            controller = TechnicianInspectionsCreateControllerIndex('TechnicianInspectionsCreateControllerIndex', {$scope: scope});
        });

        it('should correctly count the number of machineGeneral tests from all toggled sub assemblies (3 / 6 sub assemblies should perform tests)', function() {
            spyOn(AuthService, 'getUser').and.returnValue({
                primary: {
                    id: 1,
                    name: 'technician',
                    type: 'technician',
                    expired: false
                }
            });

            var machine = {
                id: 5,
                model: {
                    majorAssemblies: [
                        {
                            id: 1,
                            subAssemblies: [
                                {
                                    id: 1,
                                    machineGeneral: true,
                                    oil: false,
                                    wear: false
                                },
                                {
                                    id: 2,
                                    machineGeneral: true,
                                    oil: false,
                                    wear: false
                                },
                                {
                                    id: 3,
                                    machineGeneral: true,
                                    oil: false,
                                    wear: false
                                }
                            ]
                        },
                        {
                            id: 2,
                            subAssemblies: [
                                {
                                    id: 4,
                                    machineGeneral: true,
                                    oil: false,
                                    wear: false
                                },
                                {
                                    id: 5,
                                    machineGeneral: true,
                                    oil: false,
                                    wear: false
                                },
                                {
                                    id: 6,
                                    machineGeneral: true,
                                    oil: false,
                                    wear: false
                                }
                            ]
                        }
                    ]
                }
            };
            scope.setMachine(machine);
            expect(scope.scheduledTests).toBe(3);
        });
    });*/
});