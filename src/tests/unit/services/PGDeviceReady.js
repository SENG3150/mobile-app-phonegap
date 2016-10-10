describe('PGDeviceReady', function () {
    var PGDeviceReady;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_PGDeviceReady_) {
        PGDeviceReady = _PGDeviceReady_;
    }));

    it('should exist', function () {
        expect(PGDeviceReady).toBeDefined();
    });

    describe('.onReady()' , function() {

        it('should exist', function () {
            expect(PGDeviceReady.onReady).toBeDefined();
        });

        it('should call callback() if isReady() is true', function()
        {
            spyOn(PGDeviceReady, 'isReady').and.callThrough().and.returnValue(true);
            callback = jasmine.createSpy("Name spy");
            PGDeviceReady.onReady(callback);
            expect(callback).toHaveBeenCalled();
        });

        it('should NOT call callback() if isReady() is false', function()
        {
            spyOn(PGDeviceReady, 'isReady').and.callThrough().and.returnValue(false);
            callback = jasmine.createSpy("Unimportant name");
            PGDeviceReady.onReady(callback);
            expect(callback).not.toHaveBeenCalled();
        });


    });
});