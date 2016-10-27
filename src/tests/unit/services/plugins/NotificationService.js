describe('NotificationService', function () {
    var NotificationService, PGDeviceReady;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_NotificationService_, _PGDeviceReady_) {
        NotificationService = _NotificationService_;
        PGDeviceReady = _PGDeviceReady_;
    }));

    it('should exist', function () {
        expect(NotificationService).toBeDefined();
    });

    describe('.alert()', function() {

        it ('should exist', function() {
            expect(NotificationService.alert).toBeDefined();
        });

        it ('should run window.alert if navigator.notification is false', function() {
            spyOn(window, 'alert');
            navigator.notification = false;
            var message, title, alertCallback, buttonName = undefined;
            NotificationService.alert(message, title, alertCallback, buttonName);
            expect(window.alert).toHaveBeenCalled();
        });

        it ('should NOT run window.alert if navigator.notification is true', function() {
            spyOn(window, 'alert');
            navigator.notification = true;
            var message, title, alertCallback, buttonName = undefined;
            NotificationService.alert(message, title, alertCallback, buttonName);
            expect(window.alert).not.toHaveBeenCalled();
        });
    });

    describe('.beep()', function() {

        it ('should exist', function() {
            expect(NotificationService.beep).toBeDefined();
        });
    });

    describe('.confirm()', function() {

        it ('should exist', function() {
            expect(NotificationService.confirm).toBeDefined();
        });

        it ('should run window.confirm if navigator.notification is false', function() {
            spyOn(window, 'confirm');
            navigator.notification = false;
            var message, title, alertCallback, buttonName = undefined;
            NotificationService.confirm(message, title, alertCallback, buttonName);
            expect(window.confirm).toHaveBeenCalled();
        });

        it ('should NOT run window.confirm if navigator.notification is true', function() {
            spyOn(window, 'confirm');
            navigator.notification = true;
            var message, title, alertCallback, buttonName = undefined;
            NotificationService.confirm(message, title, alertCallback, buttonName);
            expect(window.confirm).not.toHaveBeenCalled();
        });
    });

    describe('.prompt()', function() {

        it ('should exist', function() {
            expect(NotificationService.prompt).toBeDefined();
        });

        it ('should run window.prompt if navigator.notification is false', function() {
            spyOn(window, 'prompt');
            navigator.notification = false;
            var message, title, alertCallback, buttonName = undefined;
            NotificationService.prompt(message, title, alertCallback, buttonName);
            expect(window.prompt).toHaveBeenCalled();
        });

        it ('should NOT run window.prompt if navigator.notification is true', function() {
            spyOn(window, 'prompt');
            navigator.notification = true;
            var message, title, alertCallback, buttonName = undefined;
            NotificationService.prompt(message, title, alertCallback, buttonName);
            expect(window.prompt).not.toHaveBeenCalled();
        });
    });
});