import SideNavigation from "@side-navigation/side-navigation-component";
import BoardSinglePage from "@board-single-page/board-single-page";
import BoardsPage from "@board-archive-page/board-archive-page";
import * as users from "@fixtures/users.json";
import * as boards from "@fixtures/boards.json";
const sideNavigation = new SideNavigation();
const boardsPage = new BoardsPage();
const boardSinglePage = new BoardSinglePage();

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


