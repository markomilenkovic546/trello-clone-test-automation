class RegistrationPage {
  //=====================Elements===========================//
  elements: {
    emailField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    nameField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    passwordField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    confirmPasswordField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    errorMessage: (message: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    signupBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;
    linkToLoginPage: () => Cypress.Chainable<JQuery<HTMLElement>>;
  };

  constructor() {
    this.elements = {
      emailField: () => cy.get('input[name="email"]'),
      nameField: () => cy.get('input[name="fullName"]'),
      passwordField: () => cy.get('input[name="password"]'),
      confirmPasswordField: () => cy.get('input[name="confirmPassword"]'),
      errorMessage: (message: string) => cy.get(".chakra-alert__desc").contains(message),
      signupBtn: () => cy.get('button:contains("Sign up")'),
      linkToLoginPage: () => cy.get("a").contains("Already have an account? Log in."),
    };
  }

  //=====================Actions===========================//

  typeEmail(email: string) {
    this.elements.emailField().type(email);
  }

  typeName(name: string) {
    this.elements.nameField().type(name);
  }

  typePassword(password: string) {
    this.elements.passwordField().type(password);
  }

  comfirmPassword(password: string) {
    this.elements.confirmPasswordField().type(password);
  }

  clearEmailField() {
    this.elements.emailField().clear();
  }

  clearNameField() {
    this.elements.nameField().clear();
  }

  clearPasswordField() {
    this.elements.passwordField().clear();
  }

  clearConfrimPasswordField() {
    this.elements.confirmPasswordField().clear();
  }

  clickOnSubmitButton() {
    this.elements.signupBtn().click();
  }
  clickOnLinkToLoginPage() {
    this.elements.linkToLoginPage().click();
  }
}

export default RegistrationPage;
