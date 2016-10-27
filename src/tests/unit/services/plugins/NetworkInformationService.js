describe('NetworkInformationService', function () {
    var NetworkInformationService;

    beforeEach(angular.mock.module('joy-global'));

    beforeEach(inject(function (_NetworkInformationService_) {
        NetworkInformationService = _NetworkInformationService_;
    }));

    it('should exist', function () {
        expect(NetworkInformationService).toBeDefined();
    });

    it ('isOnline should return true when setOnline(true) is called', function()
    {
        NetworkInformationService.setOnline(true);
        var result = NetworkInformationService.isOnline();
        expect(result).toBe(true);
    });

    it ('isOnline should return false when setOnline(false) is called', function()
    {
        NetworkInformationService.setOnline(false);
        var result = NetworkInformationService.isOnline();
        expect(result).toBe(false);
    });

    it ('isOnline should return the same value as online', function()
    {
        NetworkInformationService.setOnline(true);
        var return1 = NetworkInformationService.online;
        var return2 = NetworkInformationService.isOnline();
        expect(return1).toBe(return2);
    });
});