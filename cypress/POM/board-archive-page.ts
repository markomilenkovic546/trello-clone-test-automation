import SideNavigation from "@side-navigation/side-navigation-component";

class Boards {
  sideNavigation: SideNavigation;

  elements: {
    createBoardButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    boardItem: (boardName: string) => Cypress.Chainable<JQuery<HTMLElement>>
    createBoardModal: {
        boardNameInputField: () => Cypress.Chainable<JQuery<HTMLElement>>;
        closeButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        createButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    }

    actions: {
        clickOnThe
    }
  };

  constructor() {
    this.sideNavigation = new SideNavigation();
    this.elements = {
        createBoardButton: () => cy.get('button:contains("Create a board")'),
        boardItem: (boardName) => cy.get(`div:contains(${boardName})`),
        createBoardModal: {
            boardNameInputField: () => cy.get('input[placeholder="Board name"]'),
            closeButton: () => cy.get('button[aria-label="Close"]'),
            createButton: () => cy.get('button:contains("Create a board")')
        }
    }
  }
}

export default Boards;
