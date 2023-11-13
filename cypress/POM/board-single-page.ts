class BoardSinglePage {
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
        lableOption: (index: any) => Cypress.Chainable<JQuery<HTMLElement>>;
        assingToButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        assingOption: (memberName: string) => Cypress.Chainable<JQuery<HTMLElement>>;
        deleteButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        closeModalButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    } 
  }
};
  constructor (){
    this.elements = {
      header: {
        homeButton: () => cy.get('.chakra-button.css-ple5hf'),
        boardsButton: () => cy.get('.chakra-button.css-2qbo9l'),
        memberImage: (memberName) => cy.get(`[aria-label="${memberName}"]`),
        profileButton: () => cy.get('#menu-button-6'),
        inviteButton: () => cy.get('button:contains("Invite")'),
        settingsButton: () => cy.get('.chakra-button.chakra-button.css-ar3xke'),
        customizeBoardButton: () => cy.get('.chakra-button.css-1npoavy'),
        boardTitle: () => cy.get('h4.chakra-heading.css-p84333')
      },
      prifileDropDown: {
        logOutButton: () => cy.get('#menuitem-7').contains('Log out')
      },
    
  
    boardSettingsModal: {
      modalTitle: () => cy.get('#chakra-modal--header-11').contains('Boards Settings'),
      basicTab: () => cy.get('button:contains("Basic")'),
      advanceTab: () => cy.get('button:contains("Advance")'),
      boardNameFiled: () => cy.get('input.chakra-input.css-n9lnwn'),
      saveButton: () => cy.get('.chakra-button.css-pmbx0z').contains('Save'),
      deleteButton: () => cy.get('.chakra-button.css-pmbx0z').contains('Delete'),
      closeModalButton: () => cy.get('[aria-label="Close"]'),
    },
  
    inviteUserModal: {
      modalTitle: () => cy.get('#chakra-modal--header-9').contains('Invite User'),
      emailField: () => cy.get('input.chakra-input.css-n9lnwn'),
      inviteButton: () => cy.get('button:contains("Invite")'),
      closeModalButton: () => cy.get('[aria-label="Close"]'),
    },
  
    customizeBoardModal: {
      modalTitle: () => cy.get('#chakra-modal--header-13').contains('Choose background image'),
      searchField: () => cy.get('input.chakra-input.css-v16ymt'),
      searchButton: () => cy.get('button:contains("Search")'),
      imageItmesList: () => cy.get('.css-1hdm3lc'),
      imageItem: (index: any) => cy.get(`.css-1hdm3lc div:nth-of-type(${index})`),
      loadMoreButton: () => cy.get('button:contains("Load more")'),
      saveButton: () => cy.get('button:contains("Save")'),
      closeModalButton: () => cy.get('[aria-label="Close"]'),
    },
    
    column: {
      columnItem: (columnName: string) => cy.get(`.css-4e3rfe:contains('${columnName}')`),
      columnHeader: (columnName: string) => cy.get(`.css-1lekzkb:contains('${columnName}')`),
      columnTitle: (columnName: string) => cy.get(`.css-k008qs:contains('${columnName}')`),
      manageColumnButton: (columnName: string) => cy.get(`.css-1lekzkb:contains('${columnName}')`).find('button[aria-label="Options"]'),
      editColumnButton: () => cy.get('button:contains("Edit")'),
      deleteColumnButton: () => cy.get('button:contains("Delete")'),
      columnTitleField: (columnName: string) => cy.get(`.css-4e3rfe:contains('${columnName}')`).find('.chakra-input.css-1fd5ven'),
      addCardButton: (columnName: string) => cy.get(`.css-4e3rfe:contains('${columnName}')`).find('.chakra-input.css-1fd5ven').find('button:contains("+ Add a card")')
    },
    
    card: {
      cardItem: (columnName: string, cardName: string) => cy.get(`.css-4e3rfe:contains('${columnName}')`).find(`.css-1g2hcr8:contains('${cardName}')`),
      editCardModal: {
          cardNameField: () => cy.get('input[name="title"]'),
          descriptionTextBox: () => cy.get('.ql-editor'),
          labelsButton: () => cy.get('button:contains("Labels")'),
          lableOption: (index: any) => cy.get('#menuitem-136'),
          assingToButton: () => cy.get('button:contains("Assign To")'),
          assingOption: (memberName: string) => cy.get(`button:contains("${memberName}")`),
          deleteButton: () => cy.get('.chakra-button css-1dupood'),
          closeModalButton: () => cy.get('button:contains("Close")'),
      } 
    }
  }
};
}
export default BoardSinglePage;