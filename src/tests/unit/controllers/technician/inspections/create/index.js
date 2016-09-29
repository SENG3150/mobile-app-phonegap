describe('TechnicianInspectionsCreateControllerIndex', function () {
    var TechnicianInspectionsCreateControllerIndex, rootScope, InspectionsStorage, MachinesStorage, DomainExpertsStorage, Technicians, AuthService, LayoutService, $state, moment, NotificationService, ToggleService;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller, _$rootScope_, _InspectionsStorage_, _MachinesStorage_, _DomainExpertsStorage_, _Technicians_, _AuthService_, _LayoutService_, _$state_, _moment_, _NotificationService_, _ToggleService_) {
        TechnicianInspectionsCreateControllerIndex = $controller;
        rootScope = _$rootScope_;
        InspectionsStorage = _InspectionsStorage_;

    }));

    //it('should exist', function(){
    //    var controller = TechnicianInspectionsCreateControllerIndex('TechnicianInspectionsCreateControllerIndex', {$scope: {}});
    //    expect(controller).toBeDefined();
    //});

    it('Should Complete', function(){
        var controller = TechnicianInspectionsCreateControllerIndex('TechnicianInspectionsCreateControllerIndex', {$scope: {}});
        expect($state.go).toHaveBeenCalledWith('technician-inspections-index');
    });

    describe('.updateScheduledTests()', function() {
        var scope, controller;

        beforeEach(function () {
            scope = rootScope.$new();
            controller = TechnicianInspectionsCreateControllerIndex('TechnicianInspectionsCreateControllerIndex', {$scope: scope});
        });

        //it('Should update scheduled tests', inject(function($q) {
        //    var deferred = $q.defer();

        //    expect(scope.scheduledSubAssemblies).toBeDefined();
        //}));

    });
});