describe(' Delete API Automation In Cypress', () => {

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + "@dispostable.com"
        return email
    }

    it(' delete user', () => {
        let emailAddress = generateRandomEmail()
        let payload = {
            "name": "AB Test 01",
            "email": emailAddress,
            "gender": "female",
            "status": "active"
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
            },
            body: payload
        }).then((response) => {
            const userId = response.body.id


            cy.request({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                }
            })
                .then((response) => {

                    expect(response.status).to.be.equal(204)
                })
            cy.request({

                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.be.equal(404)
            })
        })


    })



})