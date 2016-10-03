describe('PageFooterService', function () {
    var PageFooterService, $rootScope;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_PageFooterService_, _$rootScope_) {
        PageFooterService = _PageFooterService_;
        $rootScope = _$rootScope_;
    }));

    it('should exist', function(){
        expect(PageFooterService).toBeDefined();
    });

    describe('.addTab()' , function() {

        it ('should exist', function() {
            expect(PageFooterService.addTab).toBeDefined();
        });

        it ('should run if statement if callback is defined', function() {
            spyOn(PageFooterService, 'onClicked').and.callThrough();
            var view, icon, text, callback;

            view = undefined;
            icon = undefined;
            text = undefined;
            callback = "A string - therefore defined";

            PageFooterService.addTab(view, icon, text, callback);
            expect(PageFooterService.onClicked).toHaveBeenCalled();
        });

        it ('should NOT run if statement if callback is NOT defined', function() {
            spyOn(PageFooterService, 'onClicked').and.callThrough();
            var view, icon, text, callback;

            view = undefined;
            icon = undefined;
            text = undefined;
            callback = undefined;

            PageFooterService.addTab(view, icon, text, callback);
            expect(PageFooterService.onClicked).not.toHaveBeenCalled();
        });

        it ('should run fireUpdatedEvent', function() {
            spyOn(PageFooterService, 'fireUpdatedEvent').and.callThrough();
            var view, icon, text, callback;

            view = undefined;
            icon = undefined;
            text = undefined;
            callback = undefined;

            PageFooterService.addTab(view, icon, text, callback);
            expect(PageFooterService.fireUpdatedEvent).toHaveBeenCalled();
        });
    });

    describe('.fireUpdatedEvent()' , function() {

        it ('should exist', function() {
            expect(PageFooterService.fireUpdatedEvent).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$broadcast').and.callThrough();
            PageFooterService.fireUpdatedEvent();
            expect($rootScope.$broadcast).toHaveBeenCalled();
        });
    });

    describe('.getTabs()' , function() {

        it ('should exist', function() {
            expect(PageFooterService.getTabs).toBeDefined();
        });
    });

    describe('.fireClickedEvent()' , function() {

        it ('should exist', function() {
            expect(PageFooterService.fireClickedEvent).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$broadcast').and.callThrough();
            var tab;
            tab = undefined;
            PageFooterService.fireClickedEvent(tab);
            expect($rootScope.$broadcast).toHaveBeenCalled();
        });
    });

    describe('.onUpdated()' , function() {

        it ('should exist', function() {
            expect(PageFooterService.onUpdated).toBeDefined();
        });
    });

    describe('.onClicked()' , function() {

        it ('should exist', function() {
            expect(PageFooterService.onClicked).toBeDefined();
        });
    });

    describe('.reset()' , function() {

        it ('should exist', function() {
            expect(PageFooterService.reset).toBeDefined();
        });

        it ('should run fireUpdatedEvent', function() {
            spyOn(PageFooterService, 'fireUpdatedEvent').and.callThrough();
            PageFooterService.reset();
            expect(PageFooterService.fireUpdatedEvent).toHaveBeenCalled();
        });
    });


});