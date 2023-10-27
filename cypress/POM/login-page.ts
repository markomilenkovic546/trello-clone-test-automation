class LoginPage {
  //=====================Elements===========================//
  elements: {
    emailField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    passwordField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    signInBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;
    linkToSignupPage: () => Cypress.Chainable<JQuery<HTMLElement>>;
    errorMessage: (message: string) => Cypress.Chainable<JQuery<HTMLElement>>;
  };

  constructor() {
    this.elements = {
      emailField: () => cy.get('input[name="email"]'),
      passwordField: () => cy.get('input[name="password"]'),
      signInBtn: () => cy.get('button:contains("Sign In")'),
      linkToSignupPage: () => cy.get("a").contains("Sign up for an account"),
      errorMessage: (message: string) => cy.get(".chakra-alert__desc").contains(message),
    };
  }

  //=====================Actions===========================//

  typeEmail(email: string) {
    this.elements.emailField().type(email);
  }

  typePassword(password: string) {
    this.elements.passwordField().type(password);
  }

  clearEmailField() {
    this.elements.emailField().clear();
  }

  clearPasswordField() {
    this.elements.passwordField().clear();
  }

  clickOnLinkToSignupPage() {
    this.elements.linkToSignupPage().click();
  }

  clickOnSignInButton() {
    this.elements.signInBtn().click();
  }
}
export default LoginPage;
