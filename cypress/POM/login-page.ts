class LoginPage {
    //=====================Elements===========================//
    elements: {
        emailField: () => Cypress.Chainable<JQuery<HTMLElement>>;
        passwordField: () => Cypress.Chainable<JQuery<HTMLElement>>;
        signInBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;
        linkToSignupPage: () => Cypress.Chainable<JQuery<HTMLElement>>;
        errorMessage: (message: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    };
    //=====================Actions===========================//
    actions: {
        typeEmail: (email: string) => void;
        typePassword: (password: string) => void;
        clearEmailField: () => void;
        clearPasswordField: () => void;
        clickOnSignInButton: () => void;
        clickOnLinkToSignupPage: () => void;
    };

    constructor() {
        this.elements = {
            emailField: () => cy.get('input[name="email"]'),
            passwordField: () => cy.get('input[name="password"]'),
            signInBtn: () => cy.get('button:contains("Sign In")'),
            linkToSignupPage: () => cy.get('a').contains('Sign up for an account'),
            errorMessage: (message: string) =>
                cy.get('.chakra-alert__desc').contains(message)
        };

        this.actions = {
            typeEmail: (email: string) => this.elements.emailField().type(email),
            typePassword: (password: string) =>
                this.elements.passwordField().type(password),
            clearEmailField: () => this.elements.emailField().clear(),
            clearPasswordField: () => this.elements.passwordField().clear(),
            clickOnSignInButton: () => this.elements.signInBtn().click(),
            clickOnLinkToSignupPage: () => this.elements.linkToSignupPage().click()
        };
    }
}
export default LoginPage;
