import SideNavigation from '@side-navigation/side-navigation-component';
import BoardSinglePage from '@board-single-page/board-single-page';
import BoardsPage from '@board-archive-page/board-archive-page';
import LoginPage from '@login-page/login-page';
import * as users from '@fixtures/users.json';
import * as boards from '@fixtures/boards.json';
const sideNavigation = new SideNavigation();
const boardsPage = new BoardsPage();
const boardSinglePage = new BoardSinglePage();
const loginPage = new LoginPage();

beforeEach(function () {
    cy.visit('/');
    cy.login(users[1].Email, users[1].Password);
});

describe('Tests releated to Logout functionality', () => {
    it('User can logout from the "Profile management" drop-down', () => {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        // Open "Profile management" drop-down
        boardSinglePage.actions.header.clickOnProfileButton();
        // Click on the "Log out" option
        boardSinglePage.actions.profileDropDown.clickOnLogOutButton();
        // Verify that "Login" page is open
        cy.url().should('include', '/login');
    });
});
