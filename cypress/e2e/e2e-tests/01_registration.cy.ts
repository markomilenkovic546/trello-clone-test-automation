import WelcomePage from "@welcome-page/welcome-page";
import RegistractionPage from "@registration-page/registration-page";
const welcomePage = new WelcomePage();
const registrationPage = new RegistractionPage();
import * as users from "@fixtures/users.json"

beforeEach(function () {
  cy.visit("/");
});
describe("Tests which cover functionalites related to Registration ", () => {
  it('User can navigate from "Welcome" page to the "Sign up" page', function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
  });

  it('User can navigate from "Sign up" page to the "Log in" page', function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    registrationPage.actions.clickOnLinkToLoginPage();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
  });

  it("User can sign up with valid credentials", function () {
    // Intercept expected API call
    cy.intercept("POST", " https://trello-clone-one.vercel.app/api/register").as("register");
    // Generate random string to concatenate with email string
    const randomString = [...Array(10)].map(() => (~~(Math.random() * 36)).toString(36)).join("");
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "email" into the "email" field
    registrationPage.actions.typeEmail(users[0].Email + randomString);
    // Verify that "email" field has correct value
    registrationPage.elements.emailField().should("have.attr", "value", users[0].Email + randomString);
    // Type the "Full Name" into the "Full Name" field
    registrationPage.actions.typeName(users[0].Full_Name);
    // Verify that "Full Name" field has correct value
    registrationPage.elements.nameField().should("have.attr", "value", users[0].Full_Name);
    // Type the "Password" into the "Password" field
    registrationPage.actions.typePassword(users[0].Password);
    // Verify that "Password" field has correct value
    registrationPage.elements.passwordField().should("have.attr", "value", users[0].Password);
    // Type the "Password" into the "Confirm Password" field
    registrationPage.actions.comfirmPassword(users[0].Password);
    // Verify that "Confrim Password" field has correct value
    registrationPage.elements.confirmPasswordField().should("have.attr", "value", users[0].Password);
    // Click on the "Submit" button
    registrationPage.actions.clickOnSubmitButton();
    // Verify that approprate message shows up
    cy.get("body")
      .contains("We've created your account. Redirecting you to login page in 3 seconds")
      .should("be.visible", { timeout: 7000 });
    // Wait for 'register' API call to be initieted by the FE app
    cy.wait("@register").then((interception) => {
      // Store the values related to intercepted "register" API call
      const requestBody = interception.request.body;
      const responseBody = interception.response.body;
      const postedEmail = requestBody.email;
      const postedFullName = requestBody.fullName;
      const postedPassword = requestBody.password;
      const postedConfirmPassword = requestBody.confirmPassword;

      // Verify that correct email is posted
      assert(postedEmail === users[0].Email + randomString, `Correct Email is posted: ${postedEmail}`);
      // Verify that correct password is posted
      assert(postedPassword === users[0].Password, `Correct Password is posted: ${postedPassword}`);
      // Verify that correct Confirm password is posted
      assert(
        postedConfirmPassword === users[0].Password,
        `Correct Confrim Password is posted: ${postedConfirmPassword}`
      );
      // Verify that correct Full Name is posted
      assert(postedFullName === users[0].Full_Name, `Correct Full Name is posted: ${postedFullName}`);

      // Verify that response status code is 200
      cy.wrap(interception).its("response.statusCode").should("eq", 200);

      // Verify that server returns 'success' message
      assert(responseBody.message === "success", `Server returns message: ${responseBody.message}`);
    });
    // Verify that user is redirected to "Login" page
    cy.url().should("include", "/login");
  });

  it("User can not signup with already registered email", function () {
    // Intercept expected API call
    cy.intercept("POST", " https://trello-clone-one.vercel.app/api/register").as("register");
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "email" into the "email" field
    registrationPage.actions.typeEmail(users[6].Email);
    // Verify that "email" field has correct value
    registrationPage.elements.emailField().should("have.attr", "value", users[6].Email);
    // Type the "Full Name" into the "Full Name" field
    registrationPage.actions.typeName(users[6].Full_Name);
    // Verify that "Full Name" field has correct value
    registrationPage.elements.nameField().should("have.attr", "value", users[6].Full_Name);
    // Type the "Password" into the "Password" field
    registrationPage.actions.typePassword(users[6].Password);
    // Verify that "Password" field has correct value
    registrationPage.elements.passwordField().should("have.attr", "value", users[6].Password);
    // Type the "Password" into the "Confirm Password" field
    registrationPage.actions.comfirmPassword(users[6].Password);
    // Verify that "Confrim Password" field has correct value
    registrationPage.elements.confirmPasswordField().should("have.attr", "value", users[6].Password);
    // Click on the "Submit" button
    registrationPage.actions.clickOnSubmitButton();
    // Verify that approprate message shows up
    cy.get("body").contains("Email already in use").should("be.visible", { timeout: 4000 });
    // Wait for 'register' API call to be initieted by the FE app
    cy.wait("@register").then((interception) => {
      // Store the response body
      const responseBody = interception.response.body;

      // Verify that response status code is 404
      cy.wrap(interception).its("response.statusCode").should("eq", 404);

      // Verify that server returns 'success' message
      assert(responseBody.message === "Email is already registered", `Server returns message: ${responseBody.message}`);
    });
    // Verify that user is not redirected to "Login" page
    cy.url().should("include", "/signup");
  });

  it('User cannot sign up with empty "email" field', function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "Full Name" into the "Full Name" field
    registrationPage.actions.typeName(users[2].Full_Name);
    // Verify that "Full Name" field has correct value
    registrationPage.elements.nameField().should("have.attr", "value", users[2].Full_Name);
    // Type the "Password" into the "Password" field
    registrationPage.actions.typePassword(users[2].Password);
    // Verify that "Password" field has correct value
    registrationPage.elements.passwordField().should("have.attr", "value", users[2].Password);
    // Type the "Password" into the "Confirm Password" field
    registrationPage.actions.comfirmPassword(users[2].Password);
    // Verify that "Confrim Password" field has correct value
    registrationPage.elements.confirmPasswordField().should("have.attr", "value", users[2].Password);
    // Verify that "Submit" button is disabled
    registrationPage.elements.signupBtn().should("have.attr", "disabled");
  });

  it('User cannot sign up with empty "Full Name" field', function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "Full Name" into the "Full Name" field
    // Type the "email" into the "email" field
    registrationPage.actions.typeEmail(users[2].Email);
    // Verify that "email" field has correct value
    registrationPage.elements.emailField().should("have.attr", "value", users[2].Email);
    // Type the "Password" into the "Password" field
    registrationPage.actions.typePassword(users[2].Password);
    // Verify that "Password" field has correct value
    registrationPage.elements.passwordField().should("have.attr", "value", users[2].Password);
    // Type the "Password" into the "Confirm Password" field
    registrationPage.actions.comfirmPassword(users[2].Password);
    // Verify that "Confrim Password" field has correct value
    registrationPage.elements.confirmPasswordField().should("have.attr", "value", users[2].Password);
    // Verify that "Submit" button is disabled
    registrationPage.elements.signupBtn().should("have.attr", "disabled");
  });

  it('User cannot sign up with empty "Password" field', function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "email" into the "email" field
    registrationPage.actions.typeEmail(users[2].Email);
    // Verify that "email" field has correct value
    registrationPage.elements.emailField().should("have.attr", "value", users[2].Email);
    // Type the "Full Name" into the "Full Name" field
    registrationPage.actions.typeName(users[2].Full_Name);
    // Verify that "Full Name" field has correct value
    registrationPage.elements.nameField().should("have.attr", "value", users[2].Full_Name);
    // Type the "Password" into the "Confirm Password" field
    registrationPage.actions.comfirmPassword(users[2].Password);
    // Verify that "Confrim Password" field has correct value
    registrationPage.elements.confirmPasswordField().should("have.attr", "value", users[2].Password);
    // Verify that "Submit" button is disabled
    registrationPage.elements.signupBtn().should("have.attr", "disabled");
  });

  it('User cannot sign up with empty "Confirm Password" field', function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "email" into the "email" field
    registrationPage.actions.typeEmail(users[2].Email);
    // Verify that "email" field has correct value
    registrationPage.elements.emailField().should("have.attr", "value", users[2].Email);
    // Type the "Full Name" into the "Full Name" field
    registrationPage.actions.typeName(users[2].Full_Name);
    // Verify that "Full Name" field has correct value
    registrationPage.elements.nameField().should("have.attr", "value", users[2].Full_Name);
    // Type the "Password" into the "Password" field
    registrationPage.actions.typePassword(users[2].Password);
    // Verify that "Password" field has correct value
    registrationPage.elements.passwordField().should("have.attr", "value", users[2].Password);
    // Verify that "Submit" button is disabled
    registrationPage.elements.signupBtn().should("have.attr", "disabled");
  });

  it("User cannot sign up with incorrect email format", function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "email" into the "email" field
    registrationPage.actions.typeEmail(users[3].Email);
    // Verify that "email" field has correct value
    registrationPage.elements.emailField().should("have.attr", "value", users[3].Email);
    // Type the "Full Name" into the "Full Name" field
    registrationPage.actions.typeName(users[3].Full_Name);
    // Verify that "Full Name" field has correct value
    registrationPage.elements.nameField().should("have.attr", "value", users[3].Full_Name);
    // Type the "Password" into the "Password" field
    registrationPage.actions.typePassword(users[3].Password);
    // Verify that "Password" field has correct value
    registrationPage.elements.passwordField().should("have.attr", "value", users[3].Password);
    // Type the "Password" into the "Confirm Password" field
    registrationPage.actions.comfirmPassword(users[3].Password);
    // Verify that "Confrim Password" field has correct value
    registrationPage.elements.confirmPasswordField().should("have.attr", "value", users[3].Password);
    // Verify that "Submit" button is disabled
    registrationPage.elements.signupBtn().should("have.attr", "disabled");
  });

  it("User cannot sign up when password dont match with confirmation password", function () {
    // Click on the "Sign up" button
    welcomePage.actions.clickOnSignupButton();
    // Verify that "Signup" page is open
    cy.url().should("include", "/signup");
    // Type the "email" into the "email" field
    registrationPage.actions.typeEmail(users[2].Email);
    // Verify that "email" field has correct value
    registrationPage.elements.emailField().should("have.attr", "value", users[2].Email);
    // Type the "Full Name" into the "Full Name" field
    registrationPage.actions.typeName(users[2].Full_Name);
    // Verify that "Full Name" field has correct value
    registrationPage.elements.nameField().should("have.attr", "value", users[2].Full_Name);
    // Type the "Password" into the "Password" field
    registrationPage.actions.typePassword(users[2].Password);
    // Verify that "Password" field has correct value
    registrationPage.elements.passwordField().should("have.attr", "value", users[2].Password);
    // Type the "Password" into the "Confirm Password" field
    registrationPage.actions.comfirmPassword(users[2].Password + 1);
    // Verify that "Confrim Password" field has correct value
    registrationPage.elements.confirmPasswordField().should("have.attr", "value", users[2].Password + 1);
    // Verify that "Submit" button is disabled
    registrationPage.elements.signupBtn().should("have.attr", "disabled");
  });

});
