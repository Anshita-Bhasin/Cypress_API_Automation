describe('API Automation using Cypress', () => {

    it('Get Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
                Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b"
            }
        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(200)
            })

    })

    it('Get User1', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/4420383',
            headers: {
                Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b"
            }
        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal(4420383)
            })

    })

    it('Get User - Invalid Endpoint', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/user',
            headers: {
                Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b"
            },
            failOnStatusCode: false

        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(404)

            })

    })

    it('Get User - Invalid User', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/14525',
            headers: {
                Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b"
            },
            failOnStatusCode: false

        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(404)

            })

    })





})