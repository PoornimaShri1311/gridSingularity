import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('User is at the login page', () => {
    cy.visit('https://www.d3a.io/login');
    cy.screenshot()
})

When('User enters username as {string} and password as {string}', (email, password) => {
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(password, { log: false });
    cy.screenshot()
})

And('User clicks on login button', () => {
    cy.get('button').click();
    cy.screenshot()
})

Then('User is able to successfully login to the Website', () => {
    // cy.get('#welcome').should('be.visible', {timeout: 10000})
    cy.wait(2000)
    cy.get('h1')
        .invoke('text')
        .should('equal', 'Home')
    cy.screenshot()
})