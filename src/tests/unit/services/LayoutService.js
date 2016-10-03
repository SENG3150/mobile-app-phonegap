describe('LayoutService', function () {
    var LayoutService, PageHeaderService, PageFooterService, $rootScope, $state;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_LayoutService_, _PageHeaderService_, _PageFooterService_, _$rootScope_, _$state_) {
        LayoutService = _LayoutService_;
        PageHeaderService = _PageHeaderService_;
        PageFooterService = _PageFooterService_;
        $rootScope = _$rootScope_;
        $state = _$state_;
    }));

    it('should exist', function(){
        expect(LayoutService).toBeDefined();
    });

    it ('should use a age header service', inject(function(PageHeaderService) {
        expect(PageHeaderService).toBeDefined();
    }));

    it ('should contain an page footer service', inject(function(_PageFooterService_) {
        expect(_PageFooterService_).toBeDefined();
    }));

    describe('.setTitle()', function() {

        it ('should exist', function() {
          expect(LayoutService.setTitle).toBeDefined();
        });

        it ('should call pageHeader.setTitle if pageHeader is undefined', function() {
            var title;
            title = "Irrelevant information";
            pageHeader = undefined;
            spyOn(PageHeaderService, 'setTitle').and.callThrough();
            LayoutService.setTitle(title, pageHeader);
            expect(PageHeaderService.setTitle).toHaveBeenCalled();
        });

        it ('should call pageHeader.setTitle if pageHeader is undefined', function() {
            var title;
            title = "Irrelevant information";
            pageHeader = undefined;
            spyOn(PageHeaderService, 'setTitle').and.callThrough();
            LayoutService.setTitle(title, pageHeader);
            expect(PageHeaderService.setTitle).toHaveBeenCalled();
        });

        it ('should call pageHeader.setTitle if pageHeader is true', function() {
            var title;
            title = "Irrelevant information";
            pageHeader = true;
            spyOn(PageHeaderService, 'setTitle').and.callThrough();
            LayoutService.setTitle(title, pageHeader);
            expect(PageHeaderService.setTitle).toHaveBeenCalled();
        });

        it ('should NOT call pageHeader.setTitle if pageHeader is false', function() {
            var title;
            title = "Irrelevant information";
            pageHeader = false;
            spyOn(PageHeaderService, 'setTitle').and.callThrough();
            LayoutService.setTitle(title, pageHeader);
            expect(PageHeaderService.setTitle).not.toHaveBeenCalled();
        });

    });

    describe('.getTitle()', function() {
        it ('should exist', function() {
            expect(LayoutService.getTitle).toBeDefined();
        });
    });

    describe('.getPageHeader()', function() {
        it ('should exist', function () {
            expect(LayoutService.getPageHeader).toBeDefined();
        });
    });

    describe('.getPageFooter()', function() {
        it ('should exist', function () {
            expect(LayoutService.getPageFooter).toBeDefined();
        });
    });

    describe('.fireUpdatedEvent()', function() {

        it ('should exist', function () {
            expect(LayoutService.fireUpdatedEvent).toBeDefined();
        });

        it ('should broadcast that the page has been updated', function () {
            spyOn($rootScope, '$broadcast').and.callThrough();
            LayoutService.fireUpdatedEvent();
            expect($rootScope.$broadcast).toHaveBeenCalled();
        });
    });

    describe('.onUpdated()', function() {

        it ('should exist', function () {
            expect(LayoutService.onUpdated).toBeDefined();
        });

        it ('should run the updated page', function () {
            spyOn($rootScope, '$on').and.callThrough();
            LayoutService.onUpdated("irrelevant information");
            expect($rootScope.$on).toHaveBeenCalled();
        });
    });

    describe('.reset()', function() {

        it ('should exist', function () {
            expect(LayoutService.reset).toBeDefined();
        });

        it ('should reset the page', function () {
            spyOn(PageHeaderService, 'reset').and.callThrough();
            spyOn(LayoutService, 'fireUpdatedEvent').and.callThrough();
            LayoutService.reset();
            expect(PageHeaderService.reset).toHaveBeenCalled();
            expect(LayoutService.fireUpdatedEvent).toHaveBeenCalled();
        });
    });

    describe('.redirect()', function() {

        it ('should exist', function() {
            expect(LayoutService.redirect).toBeDefined();
        });

    });
});