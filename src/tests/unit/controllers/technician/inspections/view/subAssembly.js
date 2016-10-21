describe('TechnicianInspectionsViewControllerSubAssembly', function () {
    var TechnicianInspectionsViewControllerMajorAssembly, $state, rootScope, $stateParams, InspectionsStorage, LayoutService, NotificationService;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function ($controller, _$rootScope_, _NotificationService_) {
        TechnicianInspectionsViewControllerSubAssembly = $controller;
        rootScope = _$rootScope_;
        NotificationService = _NotificationService_;
    }));

    it('should exist', function(){
        var controller = TechnicianInspectionsViewControllerSubAssembly('TechnicianInspectionsViewControllerSubAssembly', {$scope: {}});
        expect(controller).toBeDefined();
    });

    describe('.addComment()', function() {
        var scope, controller, inspectionData;

        beforeEach(function () {
            scope = rootScope.$new();
            controller = TechnicianInspectionsViewControllerSubAssembly('TechnicianInspectionsViewControllerSubAssembly', {$scope: scope});
        });

        it('Should fail due to comment being empty', function() {
            spyOn(NotificationService, 'alert');

            //scope.comments.machineGeneral = '';
            scope.addComment();

            expect(NotificationService.alert).toHaveBeenCalledWith('Comment cannot be empty.');
        });
    });
});