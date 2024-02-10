import SideNavigation from '@side-navigation/side-navigation-component';
import BoardSinglePage from '@board-single-page/board-single-page';
import BoardsPage from '@board-archive-page/board-archive-page';
import LoginPage from '@login-page/login-page';
import * as users from '@fixtures/users.json';
import * as boards from '@fixtures/boards.json';
import * as columns from '@fixtures/columns.json';
import * as cards from '@fixtures/cards.json';
const sideNavigation = new SideNavigation();
const boardsPage = new BoardsPage();
const boardSinglePage = new BoardSinglePage();
const loginPage = new LoginPage();
import '@4tw/cypress-drag-drop';

beforeEach(function () {
    cy.visit('/');
    cy.login(users[1].Email, users[1].Password);
});

describe('Tests which cover card management', function () {
    it('User can create card', function () {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        // Click on the "Add a card" button
        boardSinglePage.actions.column.clickOnAddCardButton(columns[0].Column_Name);
        // Verify that card is created in correct column
        boardSinglePage.elements.card
            .cardItem(columns[0].Column_Name, 'Add title')
            .should('be.visible');
        // Verify that only 1 card is created
        boardSinglePage.elements.card
            .cardItem(columns[0].Column_Name, 'Add title')
            .should('have.length', 1);
        // Verify that created card is placed at the bottom of the column
        boardSinglePage.elements.column
            .columnItem(columns[0].Column_Name)
            .find('.css-1g2hcr8')
            .then(() => {
                boardSinglePage.elements.column
                    .columnItem(columns[0].Column_Name)
                    .find('.css-1g2hcr8')
                    .last()
                    .should('have.text', 'Add title');
            });
    });

    it('User can edit a card description', function () {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        // Click on the card
        boardSinglePage.actions.card.clickOnCardItem(
            columns[0].Column_Name,
            cards[3].Card_Name
        );
        // Clear description text box
        boardSinglePage.actions.card.editCardModal.clearDescription();
        // Type description
        boardSinglePage.actions.card.editCardModal.typeDescription(
            'Edited description'
        );
        // Click on the close modal button to save change
        boardSinglePage.actions.card.editCardModal.clickOnCloseModalButton();
        // Click on the card
        boardSinglePage.actions.card.clickOnCardItem(
            columns[0].Column_Name,
            cards[3].Card_Name
        );
        // Verify that card description is edited sucessfuly
        boardSinglePage.elements.card.editCardModal
            .descriptionTextBox()
            .should('have.text', 'Edited description');
    });

    it('User can set a label on the card', function () {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        // Click on the card
        boardSinglePage.actions.card.clickOnCardItem(
            columns[0].Column_Name,
            cards[3].Card_Name
        );
        // Clear description text box
        boardSinglePage.actions.card.editCardModal.clearDescription();
        // Type description
        boardSinglePage.actions.card.editCardModal.typeDescription(
            'Edited description'
        );
        // Click on the close modal button to save change
        boardSinglePage.actions.card.editCardModal.clickOnCloseModalButton();
        // Click on the card
        boardSinglePage.actions.card.clickOnCardItem(
            columns[0].Column_Name,
            cards[3].Card_Name
        );
        boardSinglePage.actions.card.editCardModal.clickOnLabelsButton();
        boardSinglePage.actions.card.editCardModal.clickOnLabelOption(1);
        // Click on the close modal button to save change
        boardSinglePage.actions.card.editCardModal.clickOnCloseModalButton();
        // Verify that card has correct label
        boardSinglePage.elements.card
            .cardItem(columns[0].Column_Name, cards[3].Card_Name)
            .find('span')
            .contains('performance');
    });

    it('User can asign member to the card', function () {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        // Click on the card
        boardSinglePage.actions.card.clickOnCardItem(
            columns[0].Column_Name,
            cards[3].Card_Name
        );
        // Click on the "Assign to" element
        boardSinglePage.actions.card.editCardModal.clickOnAssingToButton();
        // Click on the board member name to asign
        boardSinglePage.actions.card.editCardModal.clickOnAssignOption(
            boards[0].Board_Owner
        );
        // Extract assigned member initials
        cy.extractMemberInitials(boards[0].Board_Owner).then((initials) => {
            // Verify that card is assigned to correct users
            boardSinglePage.elements.card
                .cardItem(columns[0].Column_Name, cards[3].Card_Name)
                .contains(initials);
        });
    });

    it('User can edit a card title', function () {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        // Click on the card
        boardSinglePage.actions.card.clickOnCardItem(
            columns[0].Column_Name,
            cards[3].Card_Name
        );
        // Edit card title
        boardSinglePage.actions.card.editCardModal.typeCardName('edited');
        // Click on the close modal button to save change
        boardSinglePage.actions.card.editCardModal.clickOnCloseModalButton();
        // Verify that card title is edited
        boardSinglePage.actions.card.clickOnCardItem(
            columns[0].Column_Name,
            cards[3].Card_Name + 'edited'
        );
    });
    it('User can delete a card', function () {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        // Count current number of cards in the board
        boardSinglePage.elements.card
            .cardItems()
            .its('length')
            .then((length) => {
                cy.log(String(length));
                // Click on the card
                boardSinglePage.actions.card.clickOnCardItem(
                    columns[0].Column_Name,
                    cards[2].Card_Name
                );
                // Click on the delete button
                boardSinglePage.actions.card.editCardModal.clickOnDeleteButton();
                // Verify that expected card is deleted
                boardSinglePage.elements.card
                    .cardItem(columns[0].Column_Name, cards[2].Card_Name)
                    .should('not.exist');
                // Count current number of cards in the board after deleting process
                boardSinglePage.elements.card
                    .cardItems()
                    .its('length')
                    .then((lengthAfterDelete) => {
                        // Verify that only one card from the board is deleted
                        expect(lengthAfterDelete).to.equal(length - 1);
                    });
            });
    });

    it('User can move a card by drag&drop', function () {
        //Click on the "Boards" button
        sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
        // Click on the specific board item
        boardsPage.actions.clickOnBoardItem(boards[0].Board_Name);
        // Verify that Board title is correct
        boardSinglePage.elements.header.boardTitle().contains(boards[0].Board_Name);
        boardSinglePage.elements.card
            .cardItem(columns[0].Column_Name, cards[0].Card_Name)
            .as('source');
        cy.get('.css-1a8xcjq:nth-of-type(3)').as('target');
        // Move the card to the other column
        cy.get('@source').drag('@target', { force: true });
        // Verify that card is moved to the expected column
        cy.get('.css-1a8xcjq:nth-of-type(3)').should('contain', cards[0].Card_Name);
    });
});
