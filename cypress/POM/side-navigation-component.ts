class SideNavigation {
//=====================Elements===========================//
    elements: {
        homeButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        boardsButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        templatesButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        settingsButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    }

    actions: {
        clickOnHomeButton: () => void;
        clickOnBoardsButton: () => void;
        clickOnTemplatesButton: () => void;
        clickOnSettingsButton: () => void;

    }



    constructor() {
        this.elements = {
            homeButton: () => cy.get('button:contains("Home")'),
            boardsButton: () => cy.get('button:contains("Boards")'),
            templatesButton: () => cy.get('button:contains("Templates")'),
            settingsButton: () => cy.get('button:contains("Settings")'),

      }
    
        this.actions = {
            clickOnHomeButton: () => this.elements.homeButton().click(),
            clickOnBoardsButton: () => this.elements.boardsButton().click(),
            clickOnTemplatesButton: () => this.elements.templatesButton().click(),
            clickOnSettingsButton: () => this.elements.settingsButton().click()
        }
}

//=====================Actions===========================//






}
export default SideNavigation