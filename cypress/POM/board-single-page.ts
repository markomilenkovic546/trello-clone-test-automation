class BoardSinglePage {
  //=====================Elements===========================//
  elements: {
    header: {
      homeButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      boardsButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      memberImage: (memberName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
      profileButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      inviteButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      settingsButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      customizeBoardButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      boardTitle: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
    prifileDropDown: {
      logOutButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
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
      editColumnButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      deleteColumnButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      columnTitleField: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
      addCardButton: (columnName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    };

    card: {
      cardItem: (columnName: string, cardName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
      editCardModal: {
        cardNameField: () => Cypress.Chainable<JQuery<HTMLElement>>;
        descriptionTextBox: () => Cypress.Chainable<JQuery<HTMLElement>>;
        labelsButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        labelOption: (index: any) => Cypress.Chainable<JQuery<HTMLElement>>;
        assingToButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        assingOption: (memberName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
        deleteButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        closeModalButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      };
    };
  };

  //=====================Actions===========================//
  actions: {
    header: {
      clickOnHomeButton: () => void;
      clickOnBoardsButton: () => void;
      clickOnProfileButton: () => void;
      clickOnInviteButton: () => void;
      clickOnSettingsButton: () => void;
      clickOnCustomizeBoardsButton: () => void;
    };

    profileDropDown: {
      clickOnLogOutButton: () => void;
    };

    boardSettingsModal: {
      clickOnBasicTab: () => void;
      clickOnAdvanceTab: () => void;
      typeBoardName: (boardName: string) => void;
      clearBoardName: () => void;
      clickOnSaveButton: () => void;
      clickOnDeleteButton: () => void;
      clickOnCloseButton: () => void;
    };

    inviteUserModal: {
      typeEmail: (email: string) => void;
      clickOnInviteButton: () => void;
      clickOnCloseModalButton: () => void;
    };

    customizeBoardModal: {
      typeSearchText: (searchText: string) => void;
      clickOnSearchButton: () => void;
      clickOnImageItem: (index: any) => void;
      clickOnLoadMoreButton: () => void;
      clickOnSaveButton: () => void;
      clickOnCloseModalButton: () => void;
    };

    column: {
      clickOnColumnItem: (columnName: string) => void;
      clickOnManageColumnButton: (columnName: string) => void;
      clickOnEditColumnButton: () => void;
      clickOnDeleteColumnButon: () => void;
      clickColumnTitleField: (columnName: string) => void;
      clickOnAddCardButton: (columnName: string) => void;
    };

    card: {
      clickOnCardItem: (columnName: string, cardName: string) => void;
      editCardModal: {
        typeCardName: (cardName: string) => void;
        clearCardName: () => void;
        typeDescription: (description: string) => void;
        clearDescription: () => void;
        clickOnLabelsButton: () => void;
        clickOnLabelOption: (index: any) => void;
        clickOnAssingToButton: () => void;
        clickOnAssignOption: (memberName: string) => void;
        clickOnDeleteButton: () => void;
        clickOnCloseModalButton: () => void;
      };
    };
  };
  constructor() {
    //=====================Elements===========================//
    this.elements = {
      header: {
        homeButton: () => cy.get(".chakra-button.css-ple5hf"),
        boardsButton: () => cy.get(".chakra-button.css-2qbo9l"),
        memberImage: (memberName) => cy.get(`[aria-label="${memberName}"]`),
        profileButton: () => cy.get("#menu-button-6"),
        inviteButton: () => cy.get('button:contains("Invite")'),
        settingsButton: () => cy.get(".chakra-button.chakra-button.css-ar3xke"),
        customizeBoardButton: () => cy.get(".chakra-button.css-1npoavy"),
        boardTitle: () => cy.get("h4.chakra-heading.css-p84333"),
      },
      prifileDropDown: {
        logOutButton: () => cy.get("#menuitem-7").contains("Log out"),
      },

      boardSettingsModal: {
        modalTitle: () => cy.get("header:contains('Board Settings')"),
        basicTab: () => cy.get('button:contains("Basic")'),
        advanceTab: () => cy.get('button:contains("Advance")'),
        boardNameFiled: () => cy.get("input.chakra-input.css-n9lnwn"),
        saveButton: () => cy.get(".chakra-button.css-pmbx0z:contains('Save')"),
        deleteButton: () => cy.get(".chakra-button.css-1w3ruwl:contains('Delete')"),
        closeModalButton: () => cy.get('[aria-label="Close"]'),
      },

      inviteUserModal: {
        modalTitle: () => cy.get("header:contains('Invite User')"),
        emailField: () => cy.get("input.chakra-input.css-n9lnwn"),
        inviteButton: () => cy.get('button:contains("Invite")'),
        closeModalButton: () => cy.get('[aria-label="Close"]'),
      },

      customizeBoardModal: {
        modalTitle: () => cy.get("header:contains('Choose background image')"),
        searchField: () => cy.get("input.chakra-input.css-v16ymt"),
        searchButton: () => cy.get('button:contains("Search")'),
        imageItmesList: () => cy.get(".css-1hdm3lc"),
        imageItem: (index: any) => cy.get(`.css-1hdm3lc div:nth-of-type(${index})`),
        loadMoreButton: () => cy.get('button:contains("Load more")'),
        saveButton: () => cy.get('button:contains("Save")'),
        closeModalButton: () => cy.get('[aria-label="Close"]'),
      },

      column: {
        columnItem: (columnName: string) => cy.get(`.css-4e3rfe:contains('${columnName}')`),
        columnHeader: (columnName: string) => cy.get(`.css-1lekzkb:contains('${columnName}')`),
        columnTitle: (columnName: string) => cy.get(`.css-k008qs:contains('${columnName}')`),
        manageColumnButton: (columnName: string) =>
          cy.get(`.css-1lekzkb:contains('${columnName}')`).find('button[aria-label="Options"]'),
        editColumnButton: () => cy.get('button:contains("Edit")'),
        deleteColumnButton: () => cy.get('button:contains("Delete")'),
        columnTitleField: (columnName: string) =>
          cy.get(`.css-4e3rfe:contains('${columnName}')`).find(".chakra-input.css-1fd5ven"),
        addCardButton: (columnName: string) =>
          cy
            .get(`.css-4e3rfe:contains('${columnName}')`)
            .find(".chakra-input.css-1fd5ven")
            .find('button:contains("+ Add a card")'),
      },

      card: {
        cardItem: (columnName: string, cardName: string) =>
          cy.get(`.css-4e3rfe:contains('${columnName}')`).find(`.css-1g2hcr8:contains('${cardName}')`),
        editCardModal: {
          cardNameField: () => cy.get('input[name="title"]'),
          descriptionTextBox: () => cy.get(".ql-editor"),
          labelsButton: () => cy.get('button:contains("Labels")'),
          labelOption: (index: any) => cy.get("#menuitem-136"),
          assingToButton: () => cy.get('button:contains("Assign To")'),
          assingOption: (memberName: string) => cy.get(`button:contains("${memberName}")`),
          deleteButton: () => cy.get(".chakra-button css-1dupood"),
          closeModalButton: () => cy.get('button:contains("Close")'),
        },
      },
    };

    //=====================Actions===========================//
    this.actions = {
      header: {
        clickOnHomeButton: () => this.elements.header.homeButton().click(),
        clickOnBoardsButton: () => this.elements.header.boardsButton().click(),
        clickOnProfileButton: () => this.elements.header.profileButton().click(),
        clickOnInviteButton: () => this.elements.header.inviteButton().click(),
        clickOnSettingsButton: () => this.elements.header.settingsButton().click(),
        clickOnCustomizeBoardsButton: () => this.elements.header.customizeBoardButton().click(),
      },

      profileDropDown: {
        clickOnLogOutButton: () => this.elements.prifileDropDown.logOutButton().click(),
      },

      boardSettingsModal: {
        clickOnBasicTab: () => this.elements.boardSettingsModal.basicTab().click(),
        clickOnAdvanceTab: () => this.elements.boardSettingsModal.advanceTab().click(),
        typeBoardName: (boardName: string) => this.elements.boardSettingsModal.boardNameFiled().type(boardName),
        clearBoardName: () => this.elements.boardSettingsModal.boardNameFiled().clear(),
        clickOnSaveButton: () => this.elements.boardSettingsModal.saveButton().click(),
        clickOnDeleteButton: () => this.elements.boardSettingsModal.deleteButton().click(),
        clickOnCloseButton: () => this.elements.boardSettingsModal.closeModalButton().click(),
      },

      inviteUserModal: {
        typeEmail: (email: string) => this.elements.inviteUserModal.emailField().type(email),
        clickOnInviteButton: () => this.elements.inviteUserModal.inviteButton().click(),
        clickOnCloseModalButton: () => this.elements.inviteUserModal.closeModalButton().click(),
      },

      customizeBoardModal: {
        typeSearchText: (searchText: string) => this.elements.customizeBoardModal.searchField().type(searchText),
        clickOnSearchButton: () => this.elements.customizeBoardModal.searchButton().click(),
        clickOnImageItem: (index: any) => this.elements.customizeBoardModal.imageItem(index).click(),
        clickOnLoadMoreButton: () => this.elements.customizeBoardModal.loadMoreButton().click(),
        clickOnSaveButton: () => this.elements.customizeBoardModal.saveButton().click(),
        clickOnCloseModalButton: () => this.elements.customizeBoardModal.closeModalButton().click(),
      },

      column: {
        clickOnColumnItem: (columnName: string) => this.elements.column.columnItem(columnName).click(),
        clickOnManageColumnButton: (columnName: string) => this.elements.column.manageColumnButton(columnName).click(),
        clickOnEditColumnButton: () => this.elements.column.editColumnButton().click(),
        clickOnDeleteColumnButon: () => this.elements.column.deleteColumnButton().click(),
        clickColumnTitleField: (columnName: string) => this.elements.column.columnTitleField(columnName).click(),
        clickOnAddCardButton: (columnName: string) => this.elements.column.addCardButton(columnName).click(),
      },

      card: {
        clickOnCardItem: (columnName: string, cardName: string) =>
          this.elements.card.cardItem(columnName, cardName).click(),
        editCardModal: {
          typeCardName: (cardName: string) => this.elements.card.editCardModal.cardNameField().type(cardName),
          clearCardName: () => this.elements.card.editCardModal.cardNameField().clear(),
          typeDescription: (description: string) =>
            this.elements.card.editCardModal.descriptionTextBox().type(description),
          clearDescription: () => this.elements.card.editCardModal.descriptionTextBox().clear(),
          clickOnLabelsButton: () => this.elements.card.editCardModal.labelsButton().click(),
          clickOnLabelOption: (index: any) => this.elements.card.editCardModal.labelOption(index).click(),
          clickOnAssingToButton: () => this.elements.card.editCardModal.assingToButton().click(),
          clickOnAssignOption: (memberName: string) =>
            this.elements.card.editCardModal.assingOption(memberName).click(),
          clickOnDeleteButton: () => this.elements.card.editCardModal.deleteButton().click(),
          clickOnCloseModalButton: () => this.elements.card.editCardModal.closeModalButton().click(),
        },
      },
    };
  }
}
export default BoardSinglePage;
