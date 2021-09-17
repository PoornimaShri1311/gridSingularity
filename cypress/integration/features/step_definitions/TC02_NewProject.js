import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('User is at the login page', () => {
    cy.visit('https://www.d3a.io/login');
})

When('User enters username as {string} and password as {string}', (email, password) => {
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(password, { log: false });
})

And('User clicks on login button', () => {
    cy.get('button').click();
})

Then('User is able to successfully login to the Website', () => {
    cy.wait(2000)
    cy.get('h1')
        .invoke('text')
        .should('equal', 'Home')
})

When('User clicks on Navigation Bar', () => {
    cy.xpath('//div[@role="button"]').click()
    cy.screenshot()
})

And('User clicks on Projects button', () => {
    cy.get('button')
        .contains('Projects')
        .click()
    cy.screenshot()
})

Then('the user verifies if the project screen is opened', () => {
    cy.get('h1').invoke('text').should('equal', 'Projects')
    cy.screenshot()
})

When('the user clicks on New Project button', () => {
    cy.get('span')
        .contains('new project')
        .click()
    cy.screenshot()
})

And('the user Enters Project name as {string} and Project Description as {string}', (Project_name, Project_Description) => {
    cy.get('input[id=input-field-name]').type(Project_name);
    cy.get('textarea[id=textarea-field-nameTextArea]').type(Project_Description);
    cy.screenshot()
})

When('the user clicks on Add button', () => {
    cy.get('span')
        .contains('Add')
        .click()
    cy.screenshot()
})

Then('the user verifies the newly created project is visible in the project screen', () => {
    cy.xpath('//span[contains(text(),"TestProject")]')
        .invoke('text')
        .should('equal', 'TestProject')
    cy.screenshot()
})


