/*
 *   ItemStorageService - UnitTest
 *   The Item Storage service test was not fully completed due to the pressure of other assignments and courses.
 *   The unit needed for this service are similar and the same to other unit tests completed in the services
 *   Brendan Baxter - c3189809
 */

describe('ItemStorageService', function () {
    var ItemStorageService, $localStorage, _;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_ItemStorageService_, _$localStorage_, ___) {
        ItemStorageService = _ItemStorageService_;
        $localStorage = _$localStorage_;
        _ = ___;
    }));

    it('should exist', function () {
        expect(ItemStorageService).toBeDefined();
    });

    it ('should contain local storage capabilities', inject(function($localStorage) {
        expect($localStorage).toBeDefined();
    }));

});
