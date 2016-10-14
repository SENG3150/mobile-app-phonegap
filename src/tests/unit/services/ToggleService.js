describe('ToggleService', function () {
    var ToggleService, $rootScope;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_ToggleService_, _$rootScope_) {
        ToggleService = _ToggleService_;
        $rootScope = _$rootScope_;
    }));

    it('should exist', function () {
        expect(ToggleService).toBeDefined();
    });

    describe('.fireToggledEvent()', function() {

        it('should exist', function () {
            expect(ToggleService.fireToggledEvent).toBeDefined();
        });

        it ('should run $rootscope.$broadcast', function() {
            spyOn($rootScope, '$broadcast').and.callThrough();
            var id;
            var value;

            id = "irrelevant";
            value = "irrelevant";

            ToggleService.fireToggledEvent(id, value);
            expect($rootScope.$broadcast).toHaveBeenCalled();
        });

    });

    describe('onToggled()', function() {

        it ('shoud exist', function() {
            expect(ToggleService.onToggled).toBeDefined();
        });

        it ('should run $rootscope.$on', function() {
            spyOn($rootScope, '$on').and.callThrough();

            var callback = function(){};

            ToggleService.onToggled(callback);
            expect($rootScope.$on).toHaveBeenCalled();
        });

        it ('should push to this.listeners', function() {
            spyOn($rootScope, '$on').and.callThrough();
            spyOn(ToggleService.listeners, 'push').and.callThrough();

            var callback = function(){};

            ToggleService.onToggled(callback);
            expect(ToggleService.listeners.push).toHaveBeenCalled();
        });
    });

    describe('reset()', function() {

        it ('shoud exist', function() {
            expect(ToggleService.reset).toBeDefined();
        });

        it ('should make this.listeners empty', function() {
            ToggleService.reset();
            expect(ToggleService.listeners.length).toEqual(0);
        });
    });
});