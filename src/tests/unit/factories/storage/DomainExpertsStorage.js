describe("creating domain experts", function() {
    it('returns list of domain experts', function() {
        var domainExperts =
        [
            {
                "id": 1,
                "username": "domainexpert",
                "name": "Domain Expert",
                "firstName": "Domain",
                "lastName": "Expert",
                "email": "mitch@wingmanwebdesign.com.au",
                "emailHash": "048be1a70249a63ad7506c336cd6da1f"
            },
            {
                "id": 2,
                "username": "frank",
                "name": "Frank Expert",
                "firstName": "Frank",
                "lastName": "Expert",
                "email": "frank@example.com",
                "emailHash": "0201e09438aed04bd5e3cdc25dd5289d"
            }
        ];

        return domainExperts;
    });
});