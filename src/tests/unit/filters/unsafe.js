describe('unsafe filter', function() {
    var $filter;

    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
    }));

    it('should be unsafe', function() {
        var unsafe = $filter('unsafe');
        expect(unsafe('<span onmouseover=\"alert(1)\">unsafe</span>')).toBe('<span>unsafe</span>');
    });

    it('should be safe', function() {
        var unsafe = $filter('unsafe');
        expect(unsafe('<i>safe</i>')).toBe('<i>safe</i>');
    });
});