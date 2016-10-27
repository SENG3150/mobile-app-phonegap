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

    describe('.set()', function () {

        beforeEach(function() {
            $localStorage.settings = [];
        });

        it('should exist', function () {
            expect(SettingsService.set).toBeDefined();
        });

        it ('should not add key, value if key is already in the $localStorage', function() {
            var key = "testKey";
            var value = "testVal";

            var alreadyInserted =
            {
                key: key,
                value: value
            };

            $localStorage.settings.push(alreadyInserted);

            spyOn($localStorage.settings, 'push').and.callThrough();

            SettingsService.set(key, value);

            expect($localStorage.settings.push).not.toHaveBeenCalled();
        });

        it ('should add key, value if key to be added is unique', function() {
            var key = "unique";
            var value = "unique";

            var alreadyInserted =
            {
                key: key,
                value: value
            };

            $localStorage.settings.push(alreadyInserted);

            spyOn($localStorage.settings, 'push').and.callThrough();

            SettingsService.set("alsoUnique", "alsoUnique");

            expect($localStorage.settings.push).toHaveBeenCalled();
        });
    });

    describe('.get/set()', function () {

        beforeEach(function() {
            $localStorage.settings = [];
        });

        it('should exist', function () {
            expect(SettingsService.set).toBeDefined();
            expect(SettingsService.get).toBeDefined();
        });

        it('when a value is set, the get should be able to retrieve it', function() {
            var key = "toFind";
            var value = "FOUND";

            spyOn($localStorage.settings, 'push').and.callThrough();

            SettingsService.set(key, value);
            expect($localStorage.settings.push).toHaveBeenCalled();

            var test;
            test = SettingsService.get("toFind");
            expect(test).toEqual("FOUND");
        });
    });

    describe('.get', function () {

        beforeEach(function() {
            $localStorage.settings = [];
        });

        it('should exist', function () {
            expect(SettingsService.get).toBeDefined();
        });

        it('if the key is in local storage, the value should be returned', function() {
            var key = "toFind";
            var value = "FOUND";

            var alreadyInserted =
            {
                key: key,
                value: value
            };

            $localStorage.settings.push(alreadyInserted);

            var test;
            test = SettingsService.get("toFind");
            expect(test).toEqual("FOUND");
        });

        it('if the key is NOT in local storage, the return result should be null', function() {
            var key = "different";
            var value = "FOUND";

            var alreadyInserted =
            {
                key: key,
                value: value
            };

            $localStorage.settings.push(alreadyInserted);

            var test;
            test = SettingsService.get("alsoDifferent");
            expect(test).toBe(null);
        });
    });
});