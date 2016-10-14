describe('ViewsService', function () {
    var ViewsService, $rootScope, $state;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_ViewsService_, _$rootScope_, _$state_) {
        ViewsService = _ViewsService_;
        $rootScope = _$rootScope_;
        $state = _$state_
    }));

    it('should exist', function () {
        expect(ViewsService).toBeDefined();
    });

    describe('.addView()', function() {

        it('should exist', function () {
            expect(ViewsService.addView).toBeDefined();
        });

        it ('should run $rootScope.$views.push', function() {
            spyOn($rootScope.$views, 'push').and.callThrough();
            var view;
            var route;
            var active;

            view = undefined;
            route = undefined;
            active = undefined;

            ViewsService.addView(view, route, active);
            expect($rootScope.$views.push).toHaveBeenCalled();
        });

        it ('if active is NOT undefined and is NOT false, this.setCurrentView should be called', function() {
            spyOn(ViewsService, 'setCurrentView').and.callThrough();
            var view;
            var route;
            var active;

            view = undefined;
            route = undefined;
            active = "some defined and not false";

            ViewsService.addView(view, route, active);
            expect(ViewsService.setCurrentView).toHaveBeenCalled();
        });

        it ('if active is undefined and is NOT false, this.setCurrentView should NOT be called', function() {
            spyOn(ViewsService, 'setCurrentView').and.callThrough();
            var view;
            var route;
            var active;

            view = undefined;
            route = undefined;
            active = undefined;

            ViewsService.addView(view, route, active);
            expect(ViewsService.setCurrentView).not.toHaveBeenCalled();
        });

        it ('if active is NOT undefined and is false, this.setCurrentView should be NOT called', function() {
            spyOn(ViewsService, 'setCurrentView').and.callThrough();
            var view;
            var route;
            var active;

            view = undefined;
            route = undefined;
            active = false;

            ViewsService.addView(view, route, active);
            expect(ViewsService.setCurrentView).not.toHaveBeenCalled();
        });
    });

    describe('.switchView()', function() {

        it('should exist', function () {
            expect(ViewsService.switchView).toBeDefined();
        });
    });

    describe('.setCurrentView()', function() {

        it('should exist', function () {
            expect(ViewsService.setCurrentView).toBeDefined();
        });
    });

    describe('.getCurrentView()', function() {

        it('should exist', function () {
            expect(ViewsService.getCurrentView).toBeDefined();
        });
    });


});