import SideNavigation from "@side-navigation/side-navigation-component";
import BoardSinglePage from "@board-single-page/board-single-page";
import BoardsPage from "@board-archive-page/board-archive-page";
import LoginPage from "@login-page/login-page";
import * as users from "@fixtures/users.json";
import * as boards from "@fixtures/boards.json";
import * as columns from "@fixtures/columns.json";
const sideNavigation = new SideNavigation();
const boardsPage = new BoardsPage();
const boardSinglePage = new BoardSinglePage();
const loginPage = new LoginPage();
import "@4tw/cypress-drag-drop";

beforeEach(function () {
  cy.visit("/");
  cy.login(users[1].Email, users[1].Password);
});

describe("Tests which cover column management", () => {
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

  it("User can edit a column name", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on the manage column button
    boardSinglePage.actions.column.clickOnManageColumnButton(columns[1].Column_Name);
    // Click on "Edit" column button
    boardSinglePage.actions.column.clickOnEditColumnButton(columns[1].Column_Name);
    // Focus column name filed
    boardSinglePage.actions.column.clickColumnTitleField(columns[1].Column_Name);
    // Type text into the column name filed
    boardSinglePage.actions.column.typeColumnName(columns[1].Column_Name, "EditedColumn");
    // Verify that only expected column name is edited
    boardSinglePage.elements.column.columnItem(columns[1].Column_Name + "EditedColumn").should("have.length", 1);
  });

  it("User can delete a column", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    // Click on the manage column button
    boardSinglePage.actions.column.clickOnManageColumnButton(columns[2].Column_Name);
    // Click on the Delete button
    boardSinglePage.actions.column.clickOnDeleteColumnButon(columns[2].Column_Name);
    boardSinglePage.elements.column.columnItem(columns[2].Column_Name).should("not.exist");
  });

  it("User can move a column", function () {
    //Click on the "Boards" button
    sideNavigation.actions.clickOnBoardsButton();
    // Verify that "Boards" page is open
    cy.url().should("include", "/boards");
    // Click on the specific board item
    boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
    // Verify that Board title is correct
    boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
    boardSinglePage.elements.column.columnTitle(columns[4].Column_Name).as("source");
    cy.get(".css-1a8xcjq:nth-of-type(1)").as("target");
    // Move column to first posistion
    cy.get("@source").drag("@target", { force: true })
    // Verify that column is moved to first position
    cy.get(".css-1a8xcjq:nth-of-type(1)").should("contain", columns[4].Column_Name);
  });
});
