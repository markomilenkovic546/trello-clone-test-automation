import WelcomePage from '@welcome-page/welcome-page';
import RegistractionPage from '@registration-page/registration-page';
import LoginPage from '@login-page/login-page';
import Homepage from '@homepage/homepage';
import * as users from '@fixtures/users.json';
const welcomePage = new WelcomePage();
const registrationPage = new RegistractionPage();
const loginPage = new LoginPage();
const homepage = new Homepage();

beforeEach(function () {
    cy.visit('/');
    //Login
    cy.login(users[1].Email, users[1].Password);
});

describe('Tests which cover functionalites related to side navigation ', () => {
    it('User can navigate to Boards page', function () {
        // Click on the "Boards" button
        homepage.sideNavigation.actions.clickOnBoardsButton();
        // Verify that "Boards" page is open
        cy.url().should('include', '/boards');
    });
    it('User can navigate to Settings page', function () {
        // Click on the "Settings" button
        homepage.sideNavigation.actions.clickOnSettingsButton();
        // Verify that "Settings" page is open
        cy.url().should('include', '/settings');
    });

    it('User can navigate to Templates page', function () {
        // Click on the "Templates" button
        homepage.sideNavigation.actions.clickOnTemplatesButton();
        // Verify that "Templates" page is open
        cy.url().should('include', '/templates');
    });

    it('User can navigate to Home page', function () {
        // Click on the "Home" button
        homepage.sideNavigation.actions.clickOnHomeButton();
        // Verify that homepage is open
        cy.url().should('include', '/home');
    });
});
