describe('unsafe filter', function() {
    var $filter;

    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
    }));

    it('should be unsafe', function() {
        var unsafeHtml = $filter('<div onclick="alert(1)">I am bad!</div>');
        expect(unsafeHtml.toEqual('I am bad!'));
    });

    it('should be safe', function() {
        var safeHtml = $filter('Hello, <i>World</i>!');
        expect(unsafeHtml.toEqual('Hello, <i>World</i>!'));
    });
});