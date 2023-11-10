import { CreateBoardPayload, LoginPayload, CreateColumnPayload } from "payload-models";
const boards = require("./cypress/fixtures/e2e-testing-test-data/boards.json");
const users = require("./cypress/fixtures/e2e-testing-test-data/users.json");

// Login user with ID: 2
export const loginUser2Payload: LoginPayload = {
  email: users[1].Email,
  password: users[1].Password,
};

//================Create Boards=======================//
// Create board with ID: 1
export const createBoard1Payload: CreateBoardPayload = {
  _id: boards[0].Board_ID,
  name: boards[0].Board_Name,
  dateCreated: new Date().toLocaleString(),
  createdBy: users[1].User_ID,
  backgroundImage: boards[0].BackgroundImage,
};

// Create board with ID: 3
export const createBoard3Payload: CreateBoardPayload = {
  _id: boards[2].Board_ID,
  name: boards[2].Board_Name,
  dateCreated: new Date().toLocaleString(),
  createdBy: users[1].User_ID,
  backgroundImage: boards[2].BackgroundImage,
};

// Create board with ID: 4
export const createBoard4Payload: CreateBoardPayload = {
  _id: boards[3].Board_ID,
  name: boards[3].Board_Name,
  dateCreated: new Date().toLocaleString(),
  createdBy: users[1].User_ID,
  backgroundImage: boards[3].BackgroundImage,
};

// Create board with ID: 5
export const createBoard5Payload: CreateBoardPayload = {
  _id: boards[4].Board_ID,
  name: boards[4].Board_Name,
  dateCreated: new Date().toLocaleString(),
  createdBy: users[1].User_ID,
  backgroundImage: boards[4].BackgroundImage,
};

// Create board with ID: 6
export const createBoard6Payload: CreateBoardPayload = {
  _id: boards[5].Board_ID,
  name: boards[5].Board_Name,
  dateCreated: new Date().toLocaleString(),
  createdBy: users[1].User_ID,
  backgroundImage: boards[5].BackgroundImage,
};

// Create board with ID: 7
export const createBoard7Payload: CreateBoardPayload = {
  _id: boards[6].Board_ID,
  name: boards[6].Board_Name,
  dateCreated: new Date().toLocaleString(),
  createdBy: users[1].User_ID,
  backgroundImage: boards[6].BackgroundImage,
};

//================Create Columns=======================//

export const createColumn1Payload: CreateColumnPayload = {
  id: boards[0].Columns[0].Column_ID,
  boardId: boards[0].Board_ID,
  columnName: boards[0].Columns[0].Column_Name,
  dateCreated: new Date().toLocaleString(),
  userId: users[1].User_ID,
  sequence: 1,
}