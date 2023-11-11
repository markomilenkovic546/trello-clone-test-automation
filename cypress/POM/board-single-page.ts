class BoardSinglePage {
  elements: {
    header: {
      homeButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      boardsButton: () => () => Cypress.Chainable<JQuery<HTMLElement>>;
      memberImage: () => Cypress.Chainable<JQuery<HTMLElement>>;
      profileButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      inviteButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      settingsButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      customizeBoardButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      boardTitle: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
    prifileDropDown: {
      logOutButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
  };

  boardSettingsModal: {
    modalTitle: () => Cypress.Chainable<JQuery<HTMLElement>>;
    basicTab: () => Cypress.Chainable<JQuery<HTMLElement>>;
    advanceTab: () => Cypress.Chainable<JQuery<HTMLElement>>;
    boardNameFiled: () => Cypress.Chainable<JQuery<HTMLElement>>;
    saveButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    deleteButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    closeModalButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
  };

  inviteUserModal: {
    modalTitle: () => Cypress.Chainable<JQuery<HTMLElement>>;
    emailField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    inviteButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    closeModalButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
  };

  customizeBoardModal: {
    modalTitle: () => Cypress.Chainable<JQuery<HTMLElement>>;
    searchField: () => Cypress.Chainable<JQuery<HTMLElement>>;
    searchButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    imageItmesList: () => Cypress.Chainable<JQuery<HTMLElement>>;
    imageItem: (index: any) => Cypress.Chainable<JQuery<HTMLElement>>;
    loadMoreButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    saveButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    closeModalButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
  };

  column: {
    columnItem: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    columnHeader: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    columnTitle: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    manageColumnButton: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    editColumnButton: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    columnTitleField: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    addCardButton: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    cardItem: (columnName: string, boardName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
  };

  card: {
    cardItem: (columnName: string, boardName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    editCardModal: {
        cardNameField: () => Cypress.Chainable<JQuery<HTMLElement>>;
        descriptionTextBox: () => Cypress.Chainable<JQuery<HTMLElement>>;
        labelsButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        lableOption: (index: any) => Cypress.Chainable<JQuery<HTMLElement>>;
        assingToButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        assingOption: (memberName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
        deleteButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        closeModalButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    } 
  }
}
