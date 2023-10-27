class WelcomePage {

    //=====================Elements===========================//
    elements: {
        loginButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        signupButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      };
    
      constructor() {
        this.elements = {
          loginButton: () => cy.get('button:contains("Log in")'),
          signupButton: () => cy.get('button:contains("Sign up")'),
        };
      }

      //=====================Actions===========================//

      clickOnSignupButton() {
        this.elements.signupButton().click()
      }

      clickOnLoginButton() {
        this.elements.loginButton().click()
      }

}

export default WelcomePage;