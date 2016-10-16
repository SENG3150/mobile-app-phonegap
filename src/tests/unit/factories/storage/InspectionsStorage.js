describe("creating inspections", function() {
    it("returns inspections", function() {
        var inspections = 
        [
            {
                "id": 1,
                "timeCreated": "2016-08-26T10:00:00+1000",
                "timeScheduled": "2016-08-26T12:00:00+1000",
                "timeStarted": "2016-08-26T12:00:00+1000",
                "timeCompleted": "2016-08-26T14:00:00+1000",
                "majorAssemblies":
                [
                    {
                        "id": 1,
                        "subAssemblies":
                        [
                            {
                                "id": 1,
                                "comments":
                                [
                                    {
                                        "id": 3,
                                        "timeCommented": "2016-05-10T17:37:00+1000",
                                        "authorType": "technician",
                                        "text": "Test comment.",
                                        "author":
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
                                        }
                                    }
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 1,
                                    "comments":
                                    [
                                        {
                                            "id": 4,
                                            "timeCommented": "2016-05-10T17:37:00+1000",
                                            "authorType": "domainExpert",
                                            "text": "Test comment.",
                                            "author":
                                            {
                                                "id": 1,
                                                "username": "domainexpert",
                                                "name": "Domain Expert",
                                                "firstName": "Domain",
                                                "lastName": "Expert",
                                                "email": "mitch@wingmanwebdesign.com.au",
                                                "emailHash": "048be1a70249a63ad7506c336cd6da1f"
                                            }
                                        }
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 1,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 2,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 2,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 2,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            }
                        ],
                        "comments":
                        [
                            {
                                "id": 2,
                                "timeCommented": "2016-05-10T17:37:00+1000",
                                "authorType": "domainExpert",
                                "text": "Test comment.",
                                "author":
                                {
                                    "id": 1,
                                    "username": "domainexpert",
                                    "name": "Domain Expert",
                                    "firstName": "Domain",
                                    "lastName": "Expert",
                                    "email": "mitch@wingmanwebdesign.com.au",
                                    "emailHash": "048be1a70249a63ad7506c336cd6da1f"
                                }
                            }
                        ],
                        "photos":
                        [
                        ]
                    },
                    {
                        "id": 2,
                        "subAssemblies":
                        [
                            {
                                "id": 3,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 1,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                        {
                                            "id": 5,
                                            "timeCommented": "2016-05-10T17:37:00+1000",
                                            "authorType": "technician",
                                            "text": "Test comment.",
                                            "author":
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
                                            }
                                        }
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 3,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 4,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 2,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 4,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 5,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 3,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 5,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 6,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 4,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 6,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 7,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 5,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 7,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 8,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 6,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 8,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 9,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 7,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 9,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 10,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 8,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 10,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 11,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 9,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 11,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 12,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 10,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 12,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 13,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 11,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 13,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            }
                        ],
                        "comments":
                        [
                        ],
                        "photos":
                        [
                        ]
                    },
                    {
                        "id": 3,
                        "subAssemblies":
                        [
                            {
                                "id": 14,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "wearTest":
                                {
                                    "id": 1,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                        {
                                            "id": 6,
                                            "timeCommented": "2016-05-10T17:37:00+1000",
                                            "authorType": "domainExpert",
                                            "text": "Test comment.",
                                            "author":
                                            {
                                                "id": 1,
                                                "username": "domainexpert",
                                                "name": "Domain Expert",
                                                "firstName": "Domain",
                                                "lastName": "Expert",
                                                "email": "mitch@wingmanwebdesign.com.au",
                                                "emailHash": "048be1a70249a63ad7506c336cd6da1f"
                                            }
                                        }
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 14,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 15,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "wearTest":
                                {
                                    "id": 2,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 15,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 16,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "wearTest":
                                {
                                    "id": 3,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 16,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            }
                        ],
                        "comments":
                        [
                        ],
                        "photos":
                        [
                        ]
                    },
                    {
                        "id": 4,
                        "subAssemblies":
                        [
                            {
                                "id": 17,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 3,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 17,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "oilTest":
                                {
                                    "id": 12,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 18,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 18,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 4,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 19,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "oilTest":
                                {
                                    "id": 13,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 20,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 19,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 5,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 21,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "oilTest":
                                {
                                    "id": 14,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 22,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 20,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 6,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 23,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "oilTest":
                                {
                                    "id": 15,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 24,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 21,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 7,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 25,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "oilTest":
                                {
                                    "id": 16,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 26,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 22,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "machineGeneralTest":
                                {
                                    "id": 8,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 27,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "oilTest":
                                {
                                    "id": 17,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 28,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            }
                        ],
                        "comments":
                        [
                        ],
                        "photos":
                        [
                        ]
                    },
                    {
                        "id": 5,
                        "subAssemblies":
                        [
                            {
                                "id": 23,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 18,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 29,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 4,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 30,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 24,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 19,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 31,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 5,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 32,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 25,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 20,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 33,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 6,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 34,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 26,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 21,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 35,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 7,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 36,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 27,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 22,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                        {
                                            "id": 7,
                                            "timeCommented": "2016-10-05T09:13:33+1100",
                                            "authorType": "domainExpert",
                                            "text": "Test comment",
                                            "author":
                                            {
                                                "id": 1,
                                                "username": "domainexpert",
                                                "name": "Domain Expert",
                                                "firstName": "Domain",
                                                "lastName": "Expert",
                                                "email": "mitch@wingmanwebdesign.com.au",
                                                "emailHash": "048be1a70249a63ad7506c336cd6da1f"
                                            }
                                        }
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 37,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 8,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 38,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 28,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 23,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 39,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 9,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 40,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 29,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 24,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 41,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 10,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 42,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            },
                            {
                                "id": 30,
                                "comments":
                                [
                                ],
                                "photos":
                                [
                                ],
                                "oilTest":
                                {
                                    "id": 25,
                                    "lead": 1,
                                    "copper": 2,
                                    "tin": 3,
                                    "iron": 4,
                                    "pq90": 5,
                                    "silicon": 6,
                                    "sodium": 7,
                                    "aluminium": 8,
                                    "water": 9.5,
                                    "viscosity": 10,
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 43,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                },
                                "wearTest":
                                {
                                    "id": 11,
                                    "smu": 0,
                                    "uniqueDetails":
                                    {
                                        "Field 1": "Value 1",
                                        "Field 2": "Value 2"
                                    },
                                    "comments":
                                    [
                                    ],
                                    "photos":
                                    [
                                    ],
                                    "actionItem":
                                    {
                                        "id": 44,
                                        "status": "OK",
                                        "issue": "Issue",
                                        "action": "Action",
                                        "timeActioned": "2016-05-14T17:00:00+1000",
                                        "technician":
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
                                        }
                                    }
                                }
                            }
                        ],
                        "comments":
                        [
                        ],
                        "photos":
                        [
                        ]
                    }
                ],
                "comments":
                [
                    {
                        "id": 1,
                        "timeCommented": "2016-05-10T17:21:00+1000",
                        "authorType": "technician",
                        "text": "Test comment.",
                        "author":
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
                        }
                    }
                ],
                "photos":
                [
                ],
                "schedules":
                [
                ]
            }
        ];

        return inspections;
    });
});