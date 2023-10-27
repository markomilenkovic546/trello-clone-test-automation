import WelcomePage from "@welcome-page/welcome-page";
import RegistractionPage from "@registration-page/registration-page";
import LoginPage from "@login-page/login-page";
const welcomePage = new WelcomePage();
const registrationPage = new RegistractionPage();
const loginPage = new LoginPage();
import * as users from "@fixtures/users.json";
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<any>;
      signup(email: string, name: string, password: string, confirmPassword: string): Chainable<any>;
    }
  }
}

Cypress.Commands.add("login", (email: string, password: string) => {
  // Click on the "Log in" button
  welcomePage.clickOnLoginButton();
  // Verify that "Login" page is open
  cy.url().should("include", "/login");
  // Type email into the "Email" field
  loginPage.typeEmail(email);
  // Verify that "email" field has correct value
  loginPage.elements.emailField().should("have.attr", "value", email);
  // Type password into the "Password" field
  loginPage.typePassword(password);
  // Verify that "Password" field has correct value
  loginPage.elements.passwordField().should("have.attr", "value", password);
  // Click on the submit button
  loginPage.clickOnSignInButton();
  cy.wait(4000);
  // Verify that user is redirected to homepage
  cy.url().should("include", "/home", { timeout: 25000 });
});

Cypress.Commands.add("signup", (email: string, name: string, password: string, confirmPassword: string) => {
  // Generate random string to concatenate with email string
  const randomString = [...Array(10)].map(() => (~~(Math.random() * 36)).toString(36)).join("");
  // Click on the "Sign up" button
  welcomePage.clickOnSignupButton();
  // Verify that "Signup" page is open
  cy.url().should("include", "/signup");
  // Type the "email" into the "email" field
  registrationPage.typeEmail(email + randomString);
  // Verify that "email" field has correct value
  registrationPage.elements.emailField().should("have.attr", "value", email + randomString);
  // Type the "Full Name" into the "Full Name" field
  registrationPage.typeName(name);
  // Verify that "Full Name" field has correct value
  registrationPage.elements.nameField().should("have.attr", "value", name);
  // Type the "Password" into the "Password" field
  registrationPage.typePassword(password);
  // Verify that "Password" field has correct value
  registrationPage.elements.passwordField().should("have.attr", "value", password);
  // Type the "Password" into the "Confirm Password" field
  registrationPage.comfirmPassword(password);
  // Verify that "Confrim Password" field has correct value
  registrationPage.elements.confirmPasswordField().should("have.attr", "value", password);
  // Click on the "Submit" button
  registrationPage.clickOnSubmitButton();
  // Verify that approprate message shows up
  cy.get("body")
    .contains("We've created your account. Redirecting you to login page in 3 seconds")
    .should("be.visible", { timeout: 7000 });
});
