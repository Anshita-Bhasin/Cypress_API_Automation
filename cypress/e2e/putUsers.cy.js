import updateUSers from '../config/users-update.json'
import users from '../config/payload.json'
describe(' PUT CALL In Cypress', () => {


    it(' PUT CALL USing JSON', () => {
        cy.fixture('payload-put-users').then((payload) => {
            cy.request({

                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/4528299',
                headers: {

                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                },
                body: payload
            }).then((response) => {

                expect(response.status).to.be.equal(200)
                expect(response.body).has.property("name", "Cypress123")
            })

        })
    })

    it('PUT CALL - Confif/JSON', () => {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/4528299',
            headers: {

                Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
            },
            body: updateUSers
        }).then((response) => {

            expect(response.status).to.be.equal(200)
            expect(response.body).has.property("name", "Testing AB")
        })

    })


    it(' End to End Flow', () => {
        users.email = "randoomm123ab@dispostable.com"
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
            },
            body: users
        }).then((response) => {
            let id = response.body.id
            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {

                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                },
                body: updateUSers
            })
            .then((response)=>{
                expect(response.status).to.be.equal(200)
            })
            cy.request({
                method:'GET',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {

                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                },
            })
            .then((response)=>{
                expect(response.status).to.be.equal(200)
                expect(response.body).has.property('name', updateUSers.name)
            })

        })


    })






})