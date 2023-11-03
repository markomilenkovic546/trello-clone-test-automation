class SideNavigation {

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
        //=====================Elements===========================//
        this.elements = {
            homeButton: () => cy.get('button:contains("Home")'),
            boardsButton: () => cy.get('button:contains("Boards")'),
            templatesButton: () => cy.get('button:contains("Templates")'),
            settingsButton: () => cy.get('button:contains("Settings")'),

      }
       //=====================Actions===========================//
        this.actions = {
            clickOnHomeButton: () => this.elements.homeButton().click(),
            clickOnBoardsButton: () => this.elements.boardsButton().click(),
            clickOnTemplatesButton: () => this.elements.templatesButton().click(),
            clickOnSettingsButton: () => this.elements.settingsButton().click()
        }
}








}
export default SideNavigation