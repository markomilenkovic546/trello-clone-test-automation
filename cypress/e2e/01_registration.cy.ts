import WelcomePage from "../POM/welcome-page";
const welcomePage = new WelcomePage();


it("It works", () => {
  cy.visit("/");
  welcomePage.clickOnSignupButton();
  cy.wait(5000);
});
