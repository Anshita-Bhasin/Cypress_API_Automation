import payload from '../config/payload.json'

describe(' POST CALL In Cypress', () => {

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + "@dispostable.com"
        return email
    }


    it(' POST CALL - JSON', () => {
        let emailAddress = generateRandomEmail()
        let payload = {
            "name": "AB Test 01",
            "email": emailAddress,
            "gender": "female",
            "status": "active"
        }

        cy.log(" **** EMail ***** " + emailAddress)
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
            },
            body: payload

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "AB Test 01")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })


    })

    it(' POST CALL - Fixtures', () => {
        cy.fixture('users').then((responseObject) => {
            responseObject.email = generateRandomEmail()

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {

                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                },
                body: responseObject

            }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name", "AB Test 01")
                expect(response.body).has.property("gender", "female")
                expect(response.body).has.property("status", "active")
                expect(response.body.id).to.not.be.null
            })


        })




    })

    it(' POST CALL - Config JSON ', () => {
        payload.email = generateRandomEmail()
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
            },
            body: payload

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "AB Test 01")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null

            let id = response.body.id

            cy.request({

                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {

                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                }

            })
                .then((response) => {
                    expect(response.status).to.be.equal(200)
                    expect(response.body).has.property("name", "AB Test 01")
                    expect(response.body).has.property("gender", "female")
                    expect(response.body).has.property("status", "active")
                    expect(response.body.id).to.not.be.null

                })


        })
    })

    it(' POST CALL - Negative Case || Wrong header ', () => {
        payload.email = generateRandomEmail()
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer'
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(401)

        })
    })
    it(' POST CALL - Negative Case || Wrong Data ', () => {
        payload.email = null
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(422)

        })
    })

    it(' POST CALL - Negative Case || Duplicate Data ', () => {
        payload.email = "abtest01@dispostable.com"
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(422)

        })
    })







})


