const axios = require("axios");
require("dotenv").config();
const users = require("./cypress/fixtures/e2e-testing-test-data/users.json");
const boards = require("./cypress/fixtures/e2e-testing-test-data/boards.json");
const columns = require("./cypress/fixtures/e2e-testing-test-data/columns.json");
import {
  loginUser2Payload,
  createBoard1Payload,
  createBoard3Payload,
  createBoard4Payload,
  createBoard5Payload,
  createBoard6Payload,
  createBoard7Payload,
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
  createColumn12Payload,
  createCard1Payload,
  createCard3Payload,
  createCard4Payload,
  createCard5Payload,
  createCard6Payload,
  createCard8Payload,
  createCard9Payload,
  createCard10Payload,
  createCard11Payload,
  
} from "./payloads";

const defaultAxios = axios.create({
  timeout: 1000000,
});

// Create board via API
export const createBoard = async (loginPayload: object, createBoardPayload: object) => {
  try {
    const loginResponse = await defaultAxios.post(`${process.env.API_BASE_URL}/login`, loginPayload);
    const token = await loginResponse.data.token;
    const headersConfig = {
      headers: {
        Cookie: `token=${token}`,
      },
      //timeout: 60 * 60 * 1000
    };

    const createBoardResponse = await defaultAxios.post(
      `${process.env.API_BASE_URL}/boards`,
      createBoardPayload,
      headersConfig
    );
    //console.log(loginResponse.data);
    //console.log(createBoardResponse.data);
    //console.log(headersConfig)
    //console.log(createBoardPayload)
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete board via API
export const deleteBoard = async (loginPayload: object, boardID: string) => {
  try {
    const loginResponse = await defaultAxios.post(`${process.env.API_BASE_URL}/login`, loginPayload);
    const token = loginResponse.data.token;
    const headersConfig = {
      headers: {
        Cookie: `token=${token}`,
      },
      //timeout: 60 * 60 * 1000
    };

    const deleteBoardResponse = await defaultAxios.delete(`${process.env.API_BASE_URL}/boards/${boardID}`);
    console.log(deleteBoardResponse.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Create Column via API
export const createColumn = async (loginPayload: any, createColumnPayload: any) => {
  try {
    const loginResponse = await defaultAxios.post(`${process.env.API_BASE_URL}/login`, loginPayload);
    const token = loginResponse.data.token;
    const headersConfig = {
      headers: {
        Cookie: `token=${token}`,
      },
      //timeout: 60 * 60 * 1000
    };

    const createColumnResponse = await defaultAxios.post(
      `${process.env.API_BASE_URL}/boards/${createColumnPayload.boardId}/columns`,
      createColumnPayload,
      headersConfig
    );
    console.log(createColumnResponse.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete Column via API

export const deleteColumn = async (loginPayload: any, boardID: string, columnID: string) => {
  try {
    const loginResponse = await defaultAxios.post(`${process.env.API_BASE_URL}/login`, loginPayload);
    const token = loginResponse.data.token;
    const headersConfig = {
      headers: {
        Cookie: `token=${token}`,
      },
      //timeout: 60 * 60 * 1000
    };

    const deleteColumnResponse = await defaultAxios.delete(
      `${process.env.API_BASE_URL}/boards/${boardID}/columns/${columnID}`,
      headersConfig
    );
    console.log(deleteColumnResponse.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Create Card via API

export const createCard = async (loginPayload: any, createCardPayload: any) => {
  try {
    const loginResponse = await defaultAxios.post(`${process.env.API_BASE_URL}/login`, loginPayload);
    const token = loginResponse.data.token;
    const headersConfig = {
      headers: {
        Cookie: `token=${token}`,
      },
      //timeout: 60 * 60 * 1000
    };

    const createCardResponse = await defaultAxios.post(
      `${process.env.API_BASE_URL}/boards/${createCardPayload.boardID}/columns/${createCardPayload.columndId}/cards`,
      createCardPayload,
      headersConfig
    );
    console.log(createCardResponse.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteCard = async (loginPayload: any, boardID: string, cardID: string) => {
  try {
    const loginResponse = await defaultAxios.post(`${process.env.API_BASE_URL}/login`, loginPayload);
    const token = loginResponse.data.token;
    const headersConfig = {
      headers: {
        Cookie: `token=${token}`,
      },
      //timeout: 60 * 60 * 1000
    };

    const deleteCardResponse = await defaultAxios.delete(
      `${process.env.API_BASE_URL}/boards/${boardID}/cards/${cardID}`,
      headersConfig
    );
    console.log(deleteCardResponse.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const seedDB = async () => {
  // Create Board with ID 1
  await createBoard(loginUser2Payload, createBoard1Payload);
  // Create Board with ID 3
  await createBoard(loginUser2Payload, createBoard3Payload);
  // Create Board with ID 4
  await createBoard(loginUser2Payload, createBoard4Payload);
  // Create Board with ID 5
  await createBoard(loginUser2Payload, createBoard5Payload);
  // Create Board with ID 6
  await createBoard(loginUser2Payload, createBoard6Payload);
  // Create Board with ID 7
  await createBoard(loginUser2Payload, createBoard7Payload);
  // Create Column with ID 1
  await createColumn(loginUser2Payload, createColumn1Payload);
  // Create Column with ID 2
  await createColumn(loginUser2Payload, createColumn2Payload);
  // Create Column with ID 3
  await createColumn(loginUser2Payload, createColumn3Payload);
  // Create Column with ID 5
  await createColumn(loginUser2Payload, createColumn5Payload);
  // Create Column with ID 6
  await createColumn(loginUser2Payload, createColumn6Payload);
  // Create Column with ID 7
  await createColumn(loginUser2Payload, createColumn7Payload);
  // Create Column with ID 8
  await createColumn(loginUser2Payload, createColumn8Payload);
  // Create Column with ID 9
  await createColumn(loginUser2Payload, createColumn9Payload);
  // Create Column with ID 10
  await createColumn(loginUser2Payload, createColumn10Payload);
  // Create Column with ID 11
  await createColumn(loginUser2Payload, createColumn11Payload);
  // Create Column with ID 12
  await createColumn(loginUser2Payload, createColumn12Payload);

  await createCard(loginUser2Payload, createCard1Payload)
  await createCard(loginUser2Payload, createCard3Payload)
  await createCard(loginUser2Payload, createCard4Payload)
  await createCard(loginUser2Payload, createCard5Payload)
  await createCard(loginUser2Payload, createCard6Payload)
  await createCard(loginUser2Payload, createCard8Payload)
  await createCard(loginUser2Payload, createCard9Payload)
  await createCard(loginUser2Payload, createCard10Payload)
  await createCard(loginUser2Payload, createCard11Payload)
  
};

export const clearDB = async () => {
  // Delete Board with ID 1
  await deleteBoard(loginUser2Payload, boards[0].Board_ID);
  // Delete Board with ID 2
  await deleteBoard(loginUser2Payload, boards[1].Board_ID);
  // Delete Board with ID 3
  await deleteBoard(loginUser2Payload, boards[2].Board_ID);
  // Delete Board with ID 4
  await deleteBoard(loginUser2Payload, boards[3].Board_ID);
  // Delete Board with ID 5
  await deleteBoard(loginUser2Payload, boards[4].Board_ID);
  // Delete Board with ID 6
  await deleteBoard(loginUser2Payload, boards[5].Board_ID);
  // Delete Board with ID 7
  await deleteBoard(loginUser2Payload, boards[6].Board_ID);
  // Delete Column with ID 1
  

};

async function main() {
  await clearDB();
  //Seed database with test data
  await seedDB();
  //console.log(createBoard3Payload)
}

main();
