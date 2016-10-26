describe('unsafe filter', function() {

    var $sce;
    var $filter;
    var unsafe;

    beforeEach(module('joy-global'));

    beforeEach(inject(function(_$sce_, _$filter_) {
        $sce = _$sce_;
        $filter = _$filter_;
        unsafe = _$filter_('unsafe');
    }));

    it('should sanitise untrusted html', function() {
        expect(unsafe('<span onmouseover=&quot;alert(1)&quot;>unsafe</span>')).toBe($sce.trustAsHtml('<span>unsafe</span>'));
    });

    it('should be regarded as safe', function() {
        expect(unsafe('<i>safe</i>')).toBe($sce.trustAsHtml('<i>safe</i>'));
    });
});