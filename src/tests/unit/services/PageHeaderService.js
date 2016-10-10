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

    describe('.setLeftButton()', function() {

        it('should exist', function() {
            expect(PageHeaderService.setLeftButton).toBeDefined();
        });

        it ('if callback is defined, run this.onLeftClicked()', function() {
            spyOn(PageHeaderService, 'onLeftClicked').and.callThrough();
            var icon;
            var text;
            var callback;

            icon = undefined;
            text = undefined;
            callback = "SOMETHING DEFINED";

            PageHeaderService.setLeftButton(icon, text, callback);
            expect(PageHeaderService.onLeftClicked).toHaveBeenCalled();
        });

        it ('if callback is undefined, DO NOT run this.onLeftClicked()', function() {
            spyOn(PageHeaderService, 'onLeftClicked').and.callThrough();
            var icon;
            var text;
            var callback;

            icon = undefined;
            text = undefined;
            callback = undefined;

            PageHeaderService.setLeftButton(icon, text, callback);
            expect(PageHeaderService.onLeftClicked).not.toHaveBeenCalled();
        });

        it ('should run fireUpdatedEvent', function() {
            spyOn(PageHeaderService, 'fireUpdatedEvent').and.callThrough();

            var icon;
            var text;
            var callback;

            icon = undefined;
            text = undefined;
            callback = undefined;

            PageHeaderService.setLeftButton(icon, text, callback);
            expect(PageHeaderService.fireUpdatedEvent).toHaveBeenCalled();
        });
    });

    describe('.setRightButton()', function() {

        it('should exist', function() {
            expect(PageHeaderService.setRightButton).toBeDefined();
        });

        it ('if callback is defined, run this.onLeftClicked()', function() {
            spyOn(PageHeaderService, 'onRightClicked').and.callThrough();
            var icon;
            var text;
            var callback;

            icon = undefined;
            text = undefined;
            callback = "SOMETHING DEFINED";

            PageHeaderService.setRightButton(icon, text, callback);
            expect(PageHeaderService.onRightClicked).toHaveBeenCalled();
        });

        it ('if callback is undefined, DO NOT run this.onLeftClicked()', function() {
            spyOn(PageHeaderService, 'onRightClicked').and.callThrough();
            var icon;
            var text;
            var callback;

            icon = undefined;
            text = undefined;
            callback = undefined;

            PageHeaderService.setRightButton(icon, text, callback);
            expect(PageHeaderService.onRightClicked).not.toHaveBeenCalled();
        });

        it ('should run fireUpdatedEvent', function() {
            spyOn(PageHeaderService, 'fireUpdatedEvent').and.callThrough();

            var icon;
            var text;
            var callback;

            icon = undefined;
            text = undefined;
            callback = undefined;

            PageHeaderService.setRightButton(icon, text, callback);
            expect(PageHeaderService.fireUpdatedEvent).toHaveBeenCalled();
        });
    });

    describe('.setBackButton()', function() {

        it('should exist', function () {
            expect(PageHeaderService.setBackButton).toBeDefined();
        });

        it ('should run setLeftButton()', function() {
            spyOn(PageHeaderService, 'setLeftButton').and.callThrough();

            var callback;
            callback = undefined;

            PageHeaderService.setBackButton(callback);
            expect(PageHeaderService.setLeftButton).toHaveBeenCalled();
        });

    });

    describe('.setHeroButton()', function() {

        it('should exist', function () {
            expect(PageHeaderService.setHeroButton).toBeDefined();
        });

        it ('should run setRightButton()', function() {
            spyOn(PageHeaderService, 'setRightButton').and.callThrough();

            var icon;
            var text;
            var callback;

            icon = undefined;
            text = undefined;
            callback = undefined;


            PageHeaderService.setHeroButton(icon, text, callback);
            expect(PageHeaderService.setRightButton).toHaveBeenCalled();
        });
    });

    describe('.getTitle()', function() {

        it('should exist', function () {
            expect(PageHeaderService.getTitle).toBeDefined();
        });
    });

    describe('.getLeftButton()', function() {

        it('should exist', function () {
            expect(PageHeaderService.getLeftButton).toBeDefined();
        });
    });

    describe('.getRightButton()', function() {

        it('should exist', function () {
            expect(PageHeaderService.getRightButton).toBeDefined();
        });
    });

    describe('.fireUpdatedEvent()' , function() {

        it ('should exist', function() {
            expect(PageHeaderService.fireUpdatedEvent).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$broadcast').and.callThrough();
            PageHeaderService.fireUpdatedEvent();
            expect($rootScope.$broadcast).toHaveBeenCalled();
        });
    });

    describe('.fireLeftClickedEvent()' , function() {

        it ('should exist', function() {
            expect(PageHeaderService.fireLeftClickedEvent).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$broadcast').and.callThrough();
            PageHeaderService.fireLeftClickedEvent();
            expect($rootScope.$broadcast).toHaveBeenCalled();
        });
    });

    describe('.fireRightClickedEvent()' , function() {

        it ('should exist', function() {
            expect(PageHeaderService.fireRightClickedEvent).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$broadcast').and.callThrough();
            PageHeaderService.fireRightClickedEvent();
            expect($rootScope.$broadcast).toHaveBeenCalled();
        });
    });

    describe('.onUpdated()' , function() {

        it ('should exist', function() {
            expect(PageHeaderService.onUpdated).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$on').and.callThrough();

            var callback;
            callback = undefined;

            PageHeaderService.onUpdated(callback);
            expect($rootScope.$on).toHaveBeenCalled();
        });
    });

    describe('.onLeftClicked()' , function() {

        it ('should exist', function() {
            expect(PageHeaderService.onLeftClicked).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$on').and.callThrough();

            var callback;
            callback = undefined;

            PageHeaderService.onLeftClicked(callback);
            expect($rootScope.$on).toHaveBeenCalled();
        });
    });

    describe('.onRightClicked()' , function() {

        it ('should exist', function() {
            expect(PageHeaderService.onRightClicked).toBeDefined();
        });

        it ('should broadcast event', function() {
            spyOn($rootScope, '$on').and.callThrough();

            var callback;
            callback = undefined;

            PageHeaderService.onRightClicked(callback);
            expect($rootScope.$on).toHaveBeenCalled();
        });
    });

    describe('.reset()', function () {

        it ('should exist', function() {
            expect(PageHeaderService.reset).toBeDefined();
        });

        it ('should set listers onUpdated to empty', function() {
                PageHeaderService.reset();
                expect(PageHeaderService.listeners.onUpdated.length).toEqual(0);
        });

        it ('should set listers onLeftClicked to empty', function() {
            PageHeaderService.reset();
            expect(PageHeaderService.listeners.onLeftClicked.length).toEqual(0);
        });

        it ('should set listers onRightClicked to empty', function() {
            PageHeaderService.reset();
            expect(PageHeaderService.listeners.onRightClicked.length).toEqual(0);
        });

        it ('should run fireUpdatedEvent', function() {
            spyOn(PageHeaderService, 'fireUpdatedEvent').and.callThrough();

            PageHeaderService.reset();
            expect(PageHeaderService.fireUpdatedEvent).toHaveBeenCalled();
        });
    });
});