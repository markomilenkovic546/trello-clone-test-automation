class LoginPage {
  //=====================Elements===========================//
  elements: {
    emailField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    passwordField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    loginBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;
    linkToSignupPage: () => Cypress.Chainable<JQuery<HTMLElement>>;
    errorMessage: (message: string) => Cypress.Chainable<JQuery<HTMLElement>>;
  };

  constructor() {
    this.elements = {
      emailField: () => cy.get('input[name="email"]'),
      passwordField: () => cy.get('input[name="password"]'),
      loginBtn: () => cy.get('button:contains("Log in")'),
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

  clickOnLoginButton() {
    this.elements.loginBtn().click();
  }
}
export default LoginPage;
