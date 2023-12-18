import SideNavigation from "@side-navigation/side-navigation-component";
import BoardSinglePage from "@board-single-page/board-single-page";
import BoardsPage from "@board-archive-page/board-archive-page";
import LoginPage from "@login-page/login-page";
import * as users from "@fixtures/users.json";
import * as boards from "@fixtures/boards.json";
const sideNavigation = new SideNavigation();
const boardsPage = new BoardsPage();
const boardSinglePage = new BoardSinglePage();
const loginPage = new LoginPage();

beforeEach(function () {
  cy.visit("/");
  cy.login(users[1].Email, users[1].Password);
});

describe("Navigation ", () => {
  it("User can navigate to Board Single Page", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
  });

  it("User can navigate to from Board Single Page to homepage", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click one the "Home" button in the header
    boardSinglePage.actions.header.clickOnHomeButton();
    // Verify that "Home" page is open
    cy.url().should("include", "/home");
  });

  it("User can navigate from Board Single Page to Boards page", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click one the "Home" button in the header
    boardSinglePage.actions.header.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
  });
});

describe("Board Creation ", () => {
  it("User can open a 'Create board' modal", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the "Create a board" button
    boardsPage.actions.clickOnCreateBoardButton();
    // Verify that "Create board" modal is open
    boardsPage.elements.createBoardModal.modalTitle().should("be.visible");
  });

  it("User can close a 'Create board' modal", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the "Create a board" button
    boardsPage.actions.clickOnCreateBoardButton();
    // Verify that "Create board" modal is open
    boardsPage.elements.createBoardModal.modalTitle().should("be.visible");
    // Click on the "Close modal" button
    boardsPage.actions.createBoardModal.clickOnCloseModalButton();
    // Verify that "Create board" modal is not open
    boardsPage.elements.createBoardModal.modalTitle().should("not.exist");
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
});

describe("Board Settings", () => {
  it('User can open a "Board settings" modal', function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on settings button
    boardSinglePage.actions.header.clickOnSettingsButton();
    // Verify that "Board settings" modal is open
    boardSinglePage.elements.boardSettingsModal.modalTitle().should("be.visible");
  });

  it('User can close a "Board settings" modal ', function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on settings button
    boardSinglePage.actions.header.clickOnSettingsButton();
    // Verify that "Board settings" modal is open
    boardSinglePage.elements.boardSettingsModal.modalTitle().should("be.visible");
    // Click on "Close modal" button
    boardSinglePage.actions.boardSettingsModal.clickOnCloseButton();
    // Verify that "Board settings" modal is not open
    boardSinglePage.elements.boardSettingsModal.modalTitle().should("not.exist");
  });

  it("User can edit a board name", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[3].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[3].Board_Name);
    // Click on settings button
    boardSinglePage.actions.header.clickOnSettingsButton();
    // Clear current board name
    boardSinglePage.actions.boardSettingsModal.clearBoardName();
    // Type new board name
    boardSinglePage.actions.boardSettingsModal.typeBoardName(boards[3].Board_Name + "edited");
    // Click on the "Save" button
    boardSinglePage.actions.boardSettingsModal.clickOnSaveButton();
    // Verify that Board title is correct after edit
    boardSinglePage.elements.header.boardTitle().contains(boards[3].Board_Name + "edited");
    // Navigate to "Boards" page
    boardSinglePage.actions.header.clickOnBoardsButton();
    // Verify that only expected board is idited
    let boardItemsMathingEditedName = [];
    boardsPage.elements
      .boardItemList()
      .each(($boardItems) => {
        const boardName = $boardItems.find("p").text();
        if (boardName == boards[3].Board_Name + "edited") {
          boardItemsMathingEditedName.push(boardName);
        }
      })
      .then(() => {
        expect(boardItemsMathingEditedName.length).to.equal(1);
      });
  });

  it("User can delete a board", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Count current number of board items
    boardsPage.elements.boardItemList().then((boardItems) => {
      const boardCount = boardItems.length;
      // Click on the specific board item
      boardsPage.actions.clickOnBoardItem(boards[2].Board_Name);
      // Verify that Board title is correct
      boardSinglePage.elements.header.boardTitle().contains(boards[2].Board_Name);
      // Click on settings button
      boardSinglePage.actions.header.clickOnSettingsButton();
      // Click on "Advance tab"
      boardSinglePage.actions.boardSettingsModal.clickOnAdvanceTab();
      // Click on "Delete" button
      boardSinglePage.actions.boardSettingsModal.clickOnDeleteButton();
      // Verify that "Boards" page is open
      cy.url().should("include", "/boards");
      // Verify that expected board item is deleted
      boardsPage.elements.boardItem(boards[2].Board_Name).should("not.exist");
      // Verify that only expected item is deleted, and others are still i DB
      boardsPage.elements.boardItemList().then((boardItemsAfterDelete) => {
        const boardCountAfterDelete = boardItemsAfterDelete.length;
        assert(Number(boardCountAfterDelete) == Number(boardCount) - 1, `Only expeted item is deleted}`);
      });
    });
  });
});

describe("User Invite", () => {
  it('User can open an "Invite User" modal', function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on the "Invite" button in the header
    boardSinglePage.actions.header.clickOnInviteButton();
    // Berify that "Invite USser" modal is open
    boardSinglePage.elements.inviteUserModal.modalTitle().should("be.visible");
  });

  it('User can close an "Invite User" modal', function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on the "Invite" button in the header
    boardSinglePage.actions.header.clickOnInviteButton();
    // Verify that "Invite user" modal is open
    boardSinglePage.elements.inviteUserModal.modalTitle().should("be.visible");
    // Click on the close modal button
    boardSinglePage.actions.inviteUserModal.clickOnCloseModalButton();
    // Verify that "Invite user" modal is closed
    boardSinglePage.elements.inviteUserModal.modalTitle().should("not.exist");
  });

  it("User can invite other user to be board member", function () {
    cy.intercept("POST", " https://trello-clone-one.vercel.app/api/mail").as("invite");
    // Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on the "Invite" button in the header
    boardSinglePage.actions.header.clickOnInviteButton();
    // Verify that "Invite user" modal is open
    boardSinglePage.elements.inviteUserModal.modalTitle().should("be.visible");
    // Type email address into the email field
    boardSinglePage.actions.inviteUserModal.typeEmail(users[4].Email);
    // Click on the Invite button
    boardSinglePage.actions.inviteUserModal.clickOnInviteButton();
    // Verify that "Invite user" modal is closed
    boardSinglePage.elements.inviteUserModal.modalTitle().should("not.exist");
    cy.wait(15000)
    // Click on the Profile button in the header
    boardSinglePage.actions.header.clickOnProfileButton()
    // Click on the Logout button
    boardSinglePage.actions.profileDropDown.clickOnLogOutButton()
    cy.wait("@invite").then((interception) => {
      // Verify that invite is request is initiated by FE app and correct data is sent
    cy.verifyInviteUserRequest(interception, users[4], boards[0])
    // Verify sent email and accept invitation
    cy.verifyEmailAndAcceptInvitation(users[4].Email)
    cy.wait(5000)
    // Verify that user is redirected to "Login" page
    cy.url().should("include", "/login");
    // Type invited user email
    loginPage.actions.typeEmail(users[4].Email)
    // Type invited user password
    loginPage.actions.typePassword(users[4].Password)
    // Click on sign in button
    loginPage.actions.clickOnSignInButton()
    // Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Verify that user is invited only to one border
   boardsPage.elements.boardItemList().then((boards) => {
        const boardCount = boards.length;
        expect(boardCount).to.equal(1)
      });
    // Verify that user is invited to correct board and has access to it
      // Click on the board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    });
  });
});
