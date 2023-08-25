// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getAPI', (pathParam) => {

    cy.request({
        method: 'GET',
        url: '/' + pathParam,
        headers: {

            Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
        }
    })


})

Cypress.Commands.add('postAPI', (payload) => {

    cy.request({
        method: 'POST',
        url: '/',
        headers: {

            Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
        },
        body: payload

    })
})

Cypress.Commands.add('putAPI', (pathParam) => {

    cy.request({
        method: 'PUT',
        url: '/' + pathParam,
        headers: {

            Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
        },
    })

})

Cypress.Commands.add('deleteAPI', (pathParam) => {
    cy.request({
        method: 'DELETE',
        url: '/' + pathParam,
        headers: {

            Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
        },

    })
})