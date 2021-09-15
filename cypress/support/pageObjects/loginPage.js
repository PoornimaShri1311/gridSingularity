class loginPage
{
    getLoginbutton() {
        return cy.xpath('//span[normalize-space()="log in"]');
    }
    getEmail(){
        return cy.get('input[id=email]');
    }
}
export default loginPage