import {
    CreateBoardPayload,
    LoginPayload,
    CreateColumnPayload,
    CreateCardPayload
} from 'db-seeding/payload-models';
const path = require('path');

const cards = require(
    path.join(__dirname, '../cypress/fixtures/e2e-testing-test-data/cards.json')
);

const users = require(
    path.join(__dirname, '../cypress/fixtures/e2e-testing-test-data/users.json')
);
const boards = require(
    path.join(__dirname, '../cypress/fixtures/e2e-testing-test-data/boards.json')
);
const columns = require(
    path.join(__dirname, '../cypress/fixtures/e2e-testing-test-data/columns.json')
);

// Login user with ID: 2
export const loginUser2Payload: LoginPayload = {
    email: users[1].Email,
    password: users[1].Password
};

//================Create Boards=======================//
// Create board with ID: 1
export const createBoard1Payload: CreateBoardPayload = {
    _id: boards[0].Board_ID,
    name: boards[0].Board_Name,
    dateCreated: new Date().toLocaleString(),
    createdBy: users[1].User_ID,
    backgroundImage: boards[0].BackgroundImage
};

// Create board with ID: 3
export const createBoard3Payload: CreateBoardPayload = {
    _id: boards[2].Board_ID,
    name: boards[2].Board_Name,
    dateCreated: new Date().toLocaleString(),
    createdBy: users[1].User_ID,
    backgroundImage: boards[2].BackgroundImage
};

// Create board with ID: 4
export const createBoard4Payload: CreateBoardPayload = {
    _id: boards[3].Board_ID,
    name: boards[3].Board_Name,
    dateCreated: new Date().toLocaleString(),
    createdBy: users[1].User_ID,
    backgroundImage: boards[3].BackgroundImage
};

// Create board with ID: 5
export const createBoard5Payload: CreateBoardPayload = {
    _id: boards[4].Board_ID,
    name: boards[4].Board_Name,
    dateCreated: new Date().toLocaleString(),
    createdBy: users[1].User_ID,
    backgroundImage: boards[4].BackgroundImage
};

// Create board with ID: 6
export const createBoard6Payload: CreateBoardPayload = {
    _id: boards[5].Board_ID,
    name: boards[5].Board_Name,
    dateCreated: new Date().toLocaleString(),
    createdBy: users[1].User_ID,
    backgroundImage: boards[5].BackgroundImage
};

// Create board with ID: 7
export const createBoard7Payload: CreateBoardPayload = {
    _id: boards[6].Board_ID,
    name: boards[6].Board_Name,
    dateCreated: new Date().toLocaleString(),
    createdBy: users[1].User_ID,
    backgroundImage: boards[6].BackgroundImage
};

//=====================Create Columns=======================//

// Create column with ID: 1
export const createColumn1Payload: CreateColumnPayload = {
    id: columns[0].Column_ID,
    boardId: boards[0].Board_ID,
    columnName: columns[0].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 2
export const createColumn2Payload: CreateColumnPayload = {
    id: columns[1].Column_ID,
    boardId: boards[0].Board_ID,
    columnName: columns[1].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 3
export const createColumn3Payload: CreateColumnPayload = {
    id: columns[2].Column_ID,
    boardId: boards[0].Board_ID,
    columnName: columns[2].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 5
export const createColumn5Payload: CreateColumnPayload = {
    id: columns[4].Column_ID,
    boardId: boards[0].Board_ID,
    columnName: columns[4].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 6
export const createColumn6Payload: CreateColumnPayload = {
    id: columns[5].Column_ID,
    boardId: boards[4].Board_ID,
    columnName: columns[5].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 7
export const createColumn7Payload: CreateColumnPayload = {
    id: columns[6].Column_ID,
    boardId: boards[4].Board_ID,
    columnName: columns[6].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 8
export const createColumn8Payload: CreateColumnPayload = {
    id: columns[7].Column_ID,
    boardId: boards[4].Board_ID,
    columnName: columns[7].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 9
export const createColumn9Payload: CreateColumnPayload = {
    id: columns[8].Column_ID,
    boardId: boards[4].Board_ID,
    columnName: columns[8].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 10
export const createColumn10Payload: CreateColumnPayload = {
    id: columns[9].Column_ID,
    boardId: boards[4].Board_ID,
    columnName: columns[9].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 11
export const createColumn11Payload: CreateColumnPayload = {
    id: columns[10].Column_ID,
    boardId: boards[4].Board_ID,
    columnName: columns[10].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

// Create column with ID: 12
export const createColumn12Payload: CreateColumnPayload = {
    id: columns[11].Column_ID,
    boardId: boards[4].Board_ID,
    columnName: columns[11].Column_Name,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    sequence: 1
};

//======Create Card Payloads=====//

export const createCard1Payload: CreateCardPayload = {
    id: cards[0].Card_ID,
    columnId: cards[0].Column_ID,
    boardId: cards[0].Board_ID,
    title: cards[0].Card_Name,
    type: '',
    description: cards[0].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard3Payload: CreateCardPayload = {
    id: cards[2].Card_ID,
    columnId: cards[2].Column_ID,
    boardId: cards[2].Board_ID,
    title: cards[2].Card_Name,
    type: '',
    description: cards[2].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard4Payload: CreateCardPayload = {
    id: cards[3].Card_ID,
    columnId: cards[3].Column_ID,
    boardId: cards[3].Board_ID,
    title: cards[3].Card_Name,
    type: '',
    description: cards[3].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard5Payload: CreateCardPayload = {
    id: cards[4].Card_ID,
    columnId: cards[4].Column_ID,
    boardId: cards[4].Board_ID,
    title: cards[4].Card_Name,
    type: '',
    description: cards[4].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard6Payload: CreateCardPayload = {
    id: cards[5].Card_ID,
    columnId: cards[5].Column_ID,
    boardId: cards[5].Board_ID,
    title: cards[5].Card_Name,
    type: '',
    description: cards[5].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard8Payload: CreateCardPayload = {
    id: cards[7].Card_ID,
    columnId: cards[7].Column_ID,
    boardId: cards[7].Board_ID,
    title: cards[7].Card_Name,
    type: '',
    description: cards[7].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard9Payload: CreateCardPayload = {
    id: cards[8].Card_ID,
    columnId: cards[8].Column_ID,
    boardId: cards[8].Board_ID,
    title: cards[8].Card_Name,
    type: '',
    description: cards[8].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard10Payload: CreateCardPayload = {
    id: cards[9].Card_ID,
    columnId: cards[9].Column_ID,
    boardId: cards[9].Board_ID,
    title: cards[9].Card_Name,
    type: '',
    description: cards[9].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createCard11Payload: CreateCardPayload = {
    id: cards[10].Card_ID,
    columnId: cards[10].Column_ID,
    boardId: cards[10].Board_ID,
    title: cards[10].Card_Name,
    type: '',
    description: cards[10].Description,
    dateCreated: new Date().toLocaleString(),
    userId: users[1].User_ID,
    assignedTo: users[1].User_ID,
    sequence: 1
};

export const createBoardPayloads = [
    createBoard1Payload,
    createBoard3Payload,
    createBoard4Payload,
    createBoard5Payload,
    createBoard6Payload,
    createBoard7Payload
];

export const createColumnPayloads = [
    createColumn1Payload,
    createColumn2Payload,
    createColumn3Payload,
    createColumn5Payload,
    createColumn6Payload,
    createColumn7Payload,
    createColumn8Payload,
    createColumn9Payload,
    createColumn10Payload,
    createColumn11Payload,
    createColumn12Payload
];

export const createCardPayloads = [
    createCard1Payload,
    createCard3Payload,
    createCard4Payload,
    createCard5Payload,
    createCard6Payload,
    createCard8Payload,
    createCard9Payload,
    createCard10Payload,
    createCard11Payload
];
