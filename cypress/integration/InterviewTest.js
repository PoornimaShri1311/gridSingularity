describe('Interview Test',()=> {
    beforeEach(()=>{
        cy.visit('https://www.d3a.io/')
        cy.xpath('//span[normalize-space()="log in"]')
        .click()
        cy.log("Log in button is clicked ")

        cy.loginProcess('shriga1990@gmail.com','GridTest@12')
        cy.log('Logged in success !')
    });
    it('Login Validation',()=>{
        cy.get('h1')
        .invoke('text')
        .should('equal','Home')
        cy.log("After login header verified")
        cy.screenshot('Header Verification')

    });

    it('Create New Project',()=>{
        
        cy.xpath('//div[@role="button"]')
        .click()
        cy.log('Naviagation bar clicked')

        cy.get('button')
        .contains('Projects')
        .click()
        cy.log('Project link clicked')
        cy.screenshot('New Project creation')

        cy.get('span')
        .contains('new project')
        .click()
        cy.log('New project button clicked')
        cy.screenshot()

        cy.get('input[id=input-field-name]')
        .type('TestProject')
        cy.log('Naming the project')

        cy.get('textarea[id=textarea-field-nameTextArea]')
        .type('Interview Test Grid singularity')
        cy.log('Description entered')

        cy.get('span')
        .contains('Add')
        .click()
        cy.log('Project added !')
        cy.screenshot('After Add')

        cy.reload()
        cy.wait(5000)

        cy.xpath('//span[contains(text(),"TestProject")]')
        .invoke('text')
        .should('equal','TestProject')
        cy.log('Project addition verified !')
        cy.screenshot('Project Created')

    });

    it('Create New simulation',()=>{

        cy.xpath('//div[@role="button"]')
        .click()

        cy.get('button')
        .contains('Projects')
        .click()

       cy.xpath('//span[contains(text(),"TestProject")]')
       .click()
       cy.log('Added Project is clicked')

       cy.xpath('//span[normalize-space()="new simulation"]')
       .click()
       cy.log('New Simulation button is clicked')
       cy.screenshot('Simulation creation')
       
       cy.wait(5000)
       cy.xpath('//input[@placeholder="configuration name"]')
       .clear()
       cy.log('Removing default name')

       cy.xpath('//input[@placeholder="configuration name"]')
       .type('Interview simulation')
       cy.log('Naming the simulation')

       cy.xpath('//textarea[@name="description"]')
       .type('Simulation Description Entered successfully !')
        cy.log('Simulation description added')

       cy.xpath('//span[normalize-space()="Next"]')
       .click()

       cy.wait(5000)
       cy.xpath('//div[contains(text(),"Start by adding your first node..")]/following::button')
       .click()
       cy.log('Models added')

       cy.xpath('//span[normalize-space()="Save"]')
       .click()

       cy.xpath('//span[normalize-space()="Save"]')
       .click()

       cy.reload()
       cy.screenshot()

       cy.xpath('//div[@role="button"]')
        .click()

        cy.get('button')
        .contains('Projects')
        .click()
        cy.wait(5000)
       cy.xpath('//span[contains(text(),"TestProject")]')
       .click()

       cy.xpath('//p[normalize-space()="Interview simulation"]')
       .should('be.visible')
       cy.log('Created Simulation verified')
        cy.screenshot('Simulation Verified')

       cy.xpath('//span[contains(text(),"TestProject")]')
       .click()

        cy.xpath('//span[normalize-space()="TestProject"]/following::button')
       .click()

       cy.xpath('//p[normalize-space()="Delete"]')
       .click()


       cy.get('h3')
       .invoke('text')
       .should('contains','Are you sure you want to delete this project ')

       cy.xpath('//span[contains(normalize-space()," sure")]')
       .click()

       cy.xpath('//span[contains(text(),"TestProject")]')
       .should('not.exist')
    });
});