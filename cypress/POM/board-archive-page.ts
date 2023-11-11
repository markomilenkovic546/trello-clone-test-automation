import SideNavigation from "@side-navigation/side-navigation-component";

class Boards {
  sideNavigation: SideNavigation;

  elements: {
    createBoardButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    boardItem: (boardName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    createBoardModal: {
      boardNameInputField: () => Cypress.Chainable<JQuery<HTMLElement>>;
      closeButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      createButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
  };

  actions: {
    clickOnCreateBoardButton: () => void;
    clickOnBoardItem: (boardName: string) => void;

    createBoardModalActions: {
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
      boardItem: (boardName) => cy.get(`div:contains(${boardName})`),
      createBoardModal: {
        boardNameInputField: () => cy.get('input[placeholder="Board name"]'),
        closeButton: () => cy.get('button[aria-label="Close"]'),
        createButton: () => cy.get('button:contains("Create a board")'),
      },
    };
    this.actions = {
      clickOnCreateBoardButton: () => this.elements.createBoardButton().click(),
      clickOnBoardItem: (boardName) => this.elements.boardItem(boardName).click,
      createBoardModalActions: {
      typeBoardName: (boardName) => this.elements.createBoardModal.boardNameInputField().type(boardName),
      clearBoardName: () =>this.elements.createBoardModal.boardNameInputField().clear(),
      clickOnCloseModalButton: () => this.elements.createBoardModal.closeButton().click(),
      clickOnCreateButton: () => this.elements.createBoardModal.createButton().click()
      },
    };
  }
}

export default Boards;
