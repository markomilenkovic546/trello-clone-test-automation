import SideNavigation from "@side-navigation/side-navigation-component";

class BoardsPage {
  sideNavigation: SideNavigation;

  elements: {
    createBoardButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    boardItem: (boardName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    boardItemList: () => Cypress.Chainable<JQuery<HTMLElement>>;
    createBoardModal: {
      modalTitle: () => Cypress.Chainable<JQuery<HTMLElement>>;
      boardNameInputField: () => Cypress.Chainable<JQuery<HTMLElement>>;
      closeButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      createButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
  };

  actions: {
    clickOnCreateBoardButton: () => void;
    clickOnBoardItem: (boardName: string) => void;

    createBoardModal: {
      typeBoardName: (boardName: string) => void;
      clearBoardName: () => void;
      clickOnCloseModalButton: () => void;
      clickOnCreateButton: () => void;
    };
  };

  constructor() {
    this.sideNavigation = new SideNavigation();
    this.elements = {
      createBoardButton: () => cy.get('button:contains("Create a board")'),
      boardItem: (boardName) => cy.get(`.css-aeel9r:contains('${boardName}')`),
      boardItemList: () => cy.get(".css-aeel9r"),
      createBoardModal: {
        modalTitle: () => cy.get('header:contains("Create board")'),
        boardNameInputField: () => cy.get('input[placeholder="Board name"]'),
        closeButton: () => cy.get('button[aria-label="Close"]'),
        createButton: () => cy.get('.chakra-button.css-1h7v26a:contains("Create")'),
      },
    };
    this.actions = {
      clickOnCreateBoardButton: () => this.elements.createBoardButton().click(),
      clickOnBoardItem: (boardName) => this.elements.boardItem(boardName).click(),
      createBoardModal: {
        typeBoardName: (boardName) => this.elements.createBoardModal.boardNameInputField().type(boardName),
        clearBoardName: () => this.elements.createBoardModal.boardNameInputField().clear(),
        clickOnCloseModalButton: () => this.elements.createBoardModal.closeButton().click(),
        clickOnCreateButton: () => this.elements.createBoardModal.createButton().click(),
      },
    };
  }
}

export default BoardsPage;
