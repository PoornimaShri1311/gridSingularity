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
    // cy.xpath('//div[@role="button"]').click()
    cy.xpath('//div[@class="arrow][1]').eq(1).click()
})

And('User clicks on Projects button', () => {
    cy.get('button')
        .contains('Projects')
        .click()
})

And('the user opens Newly added project', () => {
    cy.xpath('//span[contains(text(),"TestProject")]')
        .click()
    cy.screenshot()
})

When('the user clicks on New simulation', () => {
    cy.xpath('//span[normalize-space()="new simulation"]')
        .click()
    cy.screenshot()
})

And('the user enters Simulation name as {string} and Simulation description as {string}', (configuration_name, simulation_description) => {
    cy.wait(5000)
    cy.xpath('//input[@placeholder="configuration name"]')
        .clear()
    cy.xpath('//input[@placeholder="configuration name"]')
        .type(configuration_name)
    cy.xpath('//textarea[@name="description"]')
        .type(simulation_description)
    cy.screenshot()
})

Then('the user clicks on Next button', () => {
    cy.xpath('//span[normalize-space()="Next"]')
        .click()
})

And('the user adds the models to the simulation by saving it', () => {
    cy.wait(5000)
    cy.xpath('//div[contains(text(),"Start by adding your first node..")]/following::button')
        .click()
    cy.wait(2000)
    cy.screenshot()
    cy.xpath('//span[normalize-space()="Save"]')
        .click()
    cy.wait(2000)
    cy.xpath('//span[normalize-space()="Save"]')
        .click()
})
Then('the user verifies is Newly added simulation is visible in the Projects screen', () => {
    cy.xpath('//p[normalize-space()="Interview Simulation"]')
        .should('be.visible')
    cy.screenshot()
})

Then('the user deletes the created project from projects screen', () => {
    cy.xpath('//span[contains(text(),"TestProject")]')
        .click()

    cy.xpath('//span[normalize-space()="TestProject"]/following::button')
        .click()

    cy.xpath('//p[normalize-space()="Delete"]')
        .click()

    cy.xpath('//span[contains(normalize-space()," sure")]')
        .click()

    cy.xpath('//span[contains(text(),"TestProject")]')
        .should('not.exist')

})



