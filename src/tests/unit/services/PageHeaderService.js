describe('PageHeaderService', function () {
    var PageHeaderService,  $rootScope;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_PageHeaderService_, _$rootScope_) {
        PageHeaderService = _PageHeaderService_;
        $rootScope = _$rootScope_;
    }));

    it('should exist', function(){
        expect(PageHeaderService).toBeDefined();
    });

    describe('.setTitle()', function() {

        it('should exist', function () {
            expect(PageHeaderService.setTitle).toBeDefined();
        });

        it ('should run fireUpdatedEvent', function() {
            spyOn(PageHeaderService, 'fireUpdatedEvent').and.callThrough();
            var title;

            title = undefined;

            PageHeaderService.setTitle(title);
            expect(PageHeaderService.fireUpdatedEvent).toHaveBeenCalled();
        });

    });
});