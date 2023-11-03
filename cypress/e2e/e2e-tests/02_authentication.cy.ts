import WelcomePage from "@welcome-page/welcome-page";
import RegistractionPage from "@registration-page/registration-page";
import LoginPage from "@login-page/login-page";
import * as users from "@fixtures/users.json"
const welcomePage = new WelcomePage();
const registrationPage = new RegistractionPage();
const loginPage = new LoginPage();

beforeEach(function () {
  cy.visit("/");
});

describe("Tests which cover functionalites related to Login ", () => {
  it('User can navigate from "Welcome" page to the "Login" page', function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login", { timeout: 10000 });
  });

  it('User can navigate from "Login" page to the "Signup" page', function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
    // Click on the "Sign up for an account" link
    loginPage.actions.clickOnLinkToSignupPage();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup", { timeout: 25000 });
  });

  it("User can log in with valid credentials", function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
    // Type email into the "Email" field
    loginPage.actions.typeEmail(users[1].Email);
    // Verify that "email" field has correct value
    loginPage.elements.emailField().should("have.attr", "value", users[1].Email);
    // Type password into the "Password" field
    loginPage.actions.typePassword(users[1].Password);
    // Verify that "Password" field has correct value
    loginPage.elements.passwordField().should("have.attr", "value", users[1].Password);
    // Click on the submit button
    loginPage.actions.clickOnSignInButton();
    cy.wait(4000);
    // Verify that user is redirected to homepage
    cy.url().should("include", "/home", { timeout: 25000 });
  });

  it('User cannot log in when "email" field is empty', function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
    // Type password into the "Password" field
    loginPage.actions.typePassword(users[1].Password);
    // Verify that "Password" field has correct value
    loginPage.elements.passwordField().should("have.attr", "value", users[1].Password);
    // Click on the submit button
    loginPage.actions.clickOnSignInButton();
    // Verify that user is not redirected to homepage
    cy.url().should("include", "/login");
  });

  it('User cannot log in with registered email and empty "Password" field', function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
    // Type email into the "Email" field
    loginPage.actions.typeEmail(users[1].Email);
    // Verify that "email" field has correct value
    loginPage.elements.emailField().should("have.attr", "value", users[1].Email);
    // Click on the submit button
    loginPage.actions.clickOnSignInButton();
    // Verify that user is redirected to homepage
    cy.url().should("include", "/login");
  });

  it("User cannot log in with unregistered email", function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
    // Type email into the "Email" field
    loginPage.actions.typeEmail(users[5].Email);
    // Verify that "email" field has correct value
    loginPage.elements.emailField().should("have.attr", "value", users[5].Email);
    // Type password into the "Password" field
    loginPage.actions.typePassword(users[5].Password);
    // Verify that "Password" field has correct value
    loginPage.elements.passwordField().should("have.attr", "value", users[5].Password);
    // Click on the submit button
    loginPage.actions.clickOnSignInButton();
    // Verify that user is not redirected to homepage
    cy.url().should("include", "/login");
    // Verify that approprate error message is displayed
    loginPage.elements.errorMessage("Invalid username or password").should("be.visible", { timeout: 15000 });
  });

  it("User cannot log in with registered email and incorrect password", function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
    // Type email into the "Email" field
    loginPage.actions.typeEmail(users[1].Email);
    // Verify that "email" field has correct value
    loginPage.elements.emailField().should("have.attr", "value", users[1].Email);
    // Type password into the "Password" field
    loginPage.actions.typePassword(users[1].Password + 1);
    // Verify that "Password" field has correct value
    loginPage.elements.passwordField().should("have.attr", "value", users[1].Password + 1);
    // Click on the submit button
    loginPage.actions.clickOnSignInButton();
    // Verify that user is not redirected to homepage
    cy.url().should("include", "/login");
    // Verify that approprate error message is displayed
    loginPage.elements.errorMessage("Invalid username or password").should("be.visible", { timeout: 7000 });
  });

  it("User cannot log in in when all fields are empty", function () {
    // Click on the "Log in" button
    welcomePage.actions.clickOnLoginButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
    // Click on the submit button
    loginPage.actions.clickOnSignInButton();
    // Verify that user is not redirected to homepage
    cy.url().should("include", "/login");
    
  });

  
});
