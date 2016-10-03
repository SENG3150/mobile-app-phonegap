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
