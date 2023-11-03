import SideNavigation from "@side-navigation/side-navigation-component";
import * as users from "@fixtures/users.json"
const sideNavigation = new SideNavigation

beforeEach(function () {
    cy.visit("/");
    cy.login(users[1].Email, users[1].Password)
  });


  it('it works', function(){

    sideNavigation.actions.clickOnBoardsButton()
    cy.wait(150000)
  })