/*
*   SyncService - UnitTest
*   The Sync service test was not fully completed due to the pressure of other assignments and courses.
*   The unit needed for this service are similar and the same to other unit tests completed in the services
*   Brendan Baxter - c3189809
 */

describe('SyncService', function () {
    var SyncService, $q, $interval, Inspections, InspectionsStorage, Models, ModelsStorage, Machines, MachinesStorage, Technicians, TechniciansStorage, DomainExperts, DomainExpertsStorage, $rootScope, _;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_SyncService_, _$q_, _$interval_, _Inspections_, _InspectionsStorage_, _Models_, _ModelsStorage_, _Machines_,
                                _MachinesStorage_, _Technicians_, _TechniciansStorage_, _DomainExperts_, _DomainExpertsStorage_, _$rootScope_, ___) {
        SyncService = _SyncService_;
        $q = _$q_;
        $interval = _$interval_;
        Inspections = _Inspections_;
        InspectionsStorage = _InspectionsStorage_;
        Models = _Models_;
        ModelsStorage = _ModelsStorage_;
        Machines = _Machines_;
        MachinesStorage = _MachinesStorage_;
        Technicians = _Technicians_;
        TechniciansStorage = _TechniciansStorage_;
        DomainExperts = _DomainExperts_;
        DomainExpertsStorage = _DomainExpertsStorage_;
        $rootScope = _$rootScope_;
        _ = ___;
    }));

    it('should exist', function () {
        expect(SyncService).toBeDefined();
    });

    describe('.getItems', function () {

        it ('should exist', function () {
            expect(SyncService.getItems).toBeDefined();
        });
    });

});