import SideNavigation from '@side-navigation/side-navigation-component';

class Homepage {
    sideNavigation: SideNavigation;

    elements: {
        h1: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };

    constructor() {
        this.sideNavigation = new SideNavigation();
        this.elements = { h1: () => cy.get('h1') };
    }
}

export default Homepage;
