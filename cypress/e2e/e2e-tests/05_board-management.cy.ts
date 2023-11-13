import SideNavigation from "@side-navigation/side-navigation-component";
import BoardSinglePage from "@board-single-page/board-single-page"; 
import BoardsPage from "@board-archive-page/board-archive-page"; 
import * as users from "@fixtures/users.json"
import * as boards from "@fixtures/boards.json"
const sideNavigation = new SideNavigation
const boardsPage = new BoardsPage
const boardSinglePage = new BoardSinglePage

beforeEach(function () {
    cy.visit("/");
    cy.login(users[1].Email, users[1].Password)
  });


  it('it works', function(){

    sideNavigation.actions.clickOnBoardsButton()
    boardsPage.actions.clickOnBoardItem(boards[4].Board_Name)
    cy.wait(5000)
    boardSinglePage.elements.header.boardTitle().contains(boards[4].Board_Name)



  })