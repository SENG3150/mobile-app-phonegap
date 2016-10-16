describe("creates technicians", function() {
    it("returns technicians", function() {
        var technicians = 
        [
            {
                "id": 1,
                "username": "technician",
                "name": "Technician Technician",
                "firstName": "Technician",
                "lastName": "Technician",
                "email": "technician@example.com",
                "temporary": false,
                "loginExpiresTime": null,
                "expired": false,
                "emailHash": "793a064364d831179aa778e824d25c77"
            },
            {
                "id": 2,
                "username": "albert",
                "name": "Albert Tech",
                "firstName": "Albert",
                "lastName": "Tech",
                "email": "albert@example.com",
                "temporary": false,
                "loginExpiresTime": null,
                "expired": false,
                "emailHash": "fc84165ce60e0a080864a30ca4417a20"
            }
        ];

        return technicians;
    });
});