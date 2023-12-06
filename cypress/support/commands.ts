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
      getEmailContent(email: string): Chainable<any>;
      verifyInviteUserRequest(interception: any, user: any, board: any);
      verifyEmailAndAcceptInvitation(email: string);
    }
  }
}

Cypress.Commands.add("login", (email: string, password: string) => {
  // Click on the "Log in" button
  welcomePage.actions.clickOnLoginButton();
  // Verify that "Login" page is open
  cy.url().should("include", "/login");
  // Type email into the "Email" field
  loginPage.actions.typeEmail(email);
  // Verify that "email" field has correct value
  loginPage.elements.emailField().should("have.attr", "value", email);
  // Type password into the "Password" field
  loginPage.actions.typePassword(password);
  // Verify that "Password" field has correct value
  loginPage.elements.passwordField().should("have.attr", "value", password);
  // Click on the submit button
  loginPage.actions.clickOnSignInButton();
  cy.wait(4000);
  // Verify that user is redirected to homepage
  cy.url().should("include", "/home", { timeout: 25000 });
});

Cypress.Commands.add("signup", (email: string, name: string, password: string, confirmPassword: string) => {
  // Generate random string to concatenate with email string
  const randomString = [...Array(10)].map(() => (~~(Math.random() * 36)).toString(36)).join("");
  // Click on the "Sign up" button
  welcomePage.actions.clickOnSignupButton();
  // Verify that "Signup" page is open
  cy.url().should("include", "/signup");
  // Type the "email" into the "email" field
  registrationPage.actions.typeEmail(email + randomString);
  // Verify that "email" field has correct value
  registrationPage.elements.emailField().should("have.attr", "value", email + randomString);
  // Type the "Full Name" into the "Full Name" field
  registrationPage.actions.typeName(name);
  // Verify that "Full Name" field has correct value
  registrationPage.elements.nameField().should("have.attr", "value", name);
  // Type the "Password" into the "Password" field
  registrationPage.actions.typePassword(password);
  // Verify that "Password" field has correct value
  registrationPage.elements.passwordField().should("have.attr", "value", password);
  // Type the "Password" into the "Confirm Password" field
  registrationPage.actions.comfirmPassword(password);
  // Verify that "Confrim Password" field has correct value
  registrationPage.elements.confirmPasswordField().should("have.attr", "value", password);
  // Click on the "Submit" button
  registrationPage.actions.clickOnSubmitButton();
  // Verify that approprate message shows up
  cy.get("body")
    .contains("We've created your account. Redirecting you to login page in 3 seconds")
    .should("be.visible", { timeout: 7000 });
});

// Verify that user invite request is successful and sent data is correct
Cypress.Commands.add("verifyInviteUserRequest", (interception: any, user: any, board: any) => {
  // Verify that response status code is 200
  cy.wrap(interception).its("response.statusCode").should("eq", 200);
  // Store the values related to intercepted "invite" API call
  const requestBody = interception.request.body;
  const responseBody = interception.response.body;
  const expectedPayload = {
    email: user.Email,
    boardId: board.Board_ID,
  };
  const expectedResponseBody = {
    message: "Email sent sucessfully",
    status: 200,
  };
  console.log(requestBody);
  console.log(responseBody);
  expect(requestBody.email).to.equal(expectedPayload.email);
  expect(requestBody.boardId).to.equal(expectedPayload.boardId);
  expect(responseBody.message).to.equal(expectedResponseBody.message);
});


Cypress.Commands.add("verifyEmailAndAcceptInvitation", (email: string) => {
  cy.request("GET", `https://api.testsendr.link/?email=${email}`).then((response) => {
    const responseBody = response.body;
    expect(responseBody[0].from).to.equal("dell41ankit@gmail.com");
    expect(responseBody[0].subject).to.equal("You are invited to join to a trello clone board");
    const match = responseBody[0].text.match(/\[([^\]]+)\]/);
    if (match) {
      const link = match[1];
      console.log("Extracted Link:", link);
      cy.visit(link);
    }
  });
});
