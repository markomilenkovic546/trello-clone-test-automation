class WelcomePage {
    //=====================Elements===========================//
    elements: {
        loginButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        signupButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };

    actions: {
        clickOnSignupButton: () => void;
        clickOnLoginButton: () => void;
    };

    constructor() {
        this.elements = {
            loginButton: () => cy.get('button:contains("Log in")'),
            signupButton: () => cy.get('button:contains("Sign up")')
        };

        this.actions = {
            clickOnSignupButton: () => this.elements.signupButton().click(),
            clickOnLoginButton: () => this.elements.loginButton().click()
        };
    }

    //=====================Actions===========================//
}

export default WelcomePage;
