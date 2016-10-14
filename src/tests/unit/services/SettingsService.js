describe('SettingsService', function () {
    var SettingsService, $localStorage;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_SettingsService_, _$localStorage_) {
        SettingsService = _SettingsService_;
        $localStorage = _$localStorage_;
    }));

    it('should exist', function () {
        expect(SettingsService).toBeDefined();
    });

    it ('should use a local storage service', function() {
        expect($localStorage).toBeDefined();
    });
});