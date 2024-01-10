import SideNavigation from "@side-navigation/side-navigation-component";
import BoardSinglePage from "@board-single-page/board-single-page";
import BoardsPage from "@board-archive-page/board-archive-page";
import LoginPage from "@login-page/login-page";
import WelcomePage from "@welcome-page/welcome-page";
import RegistractionPage from "@registration-page/registration-page";
import Homepage from "@homepage/homepage";
import * as users from "@fixtures/users.json";
import * as boards from "@fixtures/boards.json";
import * as columns from "@fixtures/columns.json";
import * as cards from "@fixtures/cards.json";
const sideNavigation = new SideNavigation();
const boardsPage = new BoardsPage();
const boardSinglePage = new BoardSinglePage();
const loginPage = new LoginPage();
const welcomePage = new WelcomePage();
const registrationPage = new RegistractionPage();
const homepage = new Homepage();

beforeEach(function () {
    // Don't run the hook code before particular test cases
  if (this.currentTest.title === "User can sign up with valid credentials" || this.currentTest.title === "User can log in with valid credentials") {
    return;
  }
  cy.visit("/");
  cy.login(users[1].Email, users[1].Password);
});

describe("Smoke tests", () => {
  it("User can sign up with valid credentials", function () {
    cy.visit("/");
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
    cy.get("body").contains("We've created your account. Redirecting you to login page in 3 seconds").should("be.visible", { timeout: 7000 });
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
      assert(postedConfirmPassword === users[0].Password, `Correct Confrim Password is posted: ${postedConfirmPassword}`);
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

  it("User can log in with valid credentials", function () {
    cy.visit("/");
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

  it("User can navigate to Boards page", function () {
    // Click on the "Boards" button
    homepage.sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
  });
  it("User can navigate to Settings page", function () {
    // Click on the "Settings" button
    homepage.sideNavigation.actions.clickOnSettingsButton();
    // Verify that "Settings" page is open
    cy.url().should("include", "/settings");
  });

  it("User can navigate to Templates page", function () {
    // Click on the "Templates" button
    homepage.sideNavigation.actions.clickOnTemplatesButton();
    // Verify that "Templates" page is open
    cy.url().should("include", "/templates");
  });

  it("User can navigate to Home page", function () {
    // Click on the "Home" button
    homepage.sideNavigation.actions.clickOnHomeButton();
    // Verify that homepage is open
    cy.url().should("include", "/home");
  });

  it('User can logout from the "Profile management" drop-down', () => {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Open "Profile management" drop-down
    boardSinglePage.actions.header.clickOnProfileButton();
    // Click on the "Log out" option
    boardSinglePage.actions.profileDropDown.clickOnLogOutButton();
    // Verify that "Login" page is open
    cy.url().should("include", "/login");
  });

  it("User can create a new board", function () {
    cy.intercept("POST", " https://trello-clone-one.vercel.app/api/boards").as("createBoard");
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the "Create a board" button
    boardsPage.actions.clickOnCreateBoardButton();
    // Type a Board Name
    boardsPage.actions.createBoardModal.typeBoardName(boards[1].Board_Name);
    // Click on the "Create" button
    boardsPage.actions.createBoardModal.clickOnCreateButton();
    cy.wait("@createBoard").then((interception) => {
      // Verify that response status code is 200
      cy.wrap(interception).its("response.statusCode").should("eq", 200);
    });
    // Click on the created board item
    boardsPage.actions.clickOnBoardItem(boards[1].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[1].Board_Name);
  });

  it("User can create a column", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on the "Add a column" button
    boardSinglePage.actions.column.clickOnAddColumnButton();
    // Verify that created column is visible
    boardSinglePage.elements.column.columnItem("Add title").should("be.visible");
    // Verify that only one column is created
    boardSinglePage.elements.column.columnItem("Add title").should("have.length", 1);
  });
  it("User can create card", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on the "Add a card" button
    boardSinglePage.actions.column.clickOnAddCardButton(columns[0].Column_Name);
    // Verify that card is created in correct column
    boardSinglePage.elements.card.cardItem(columns[0].Column_Name, "Add title").should("be.visible");
    // Verify that only 1 card is created
    boardSinglePage.elements.card.cardItem(columns[0].Column_Name, "Add title").should("have.length", 1);
    // Verify that created card is placed at the bottom of the column
    boardSinglePage.elements.column
      .columnItem(columns[0].Column_Name)
      .find(".css-1g2hcr8")
      .then(() => {
        boardSinglePage.elements.column.columnItem(columns[0].Column_Name).find(".css-1g2hcr8").last().should("have.text", "Add title");
      });
  });
});
