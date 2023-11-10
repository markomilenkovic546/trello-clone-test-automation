const axios = require("axios");
require("dotenv").config();
const users = require("./cypress/fixtures/e2e-testing-test-data/users.json");
const boards = require("./cypress/fixtures/e2e-testing-test-data/boards.json");
import {
  RegistrationPayload,
  LoginPayload,
  CreateBoardPayload,
  UpdateBoardPayload,
  CreateColumnPayload,
  UpdateColumnPayload,
  CreateCardPayload,
  UpdateCardData,
  InviteUserPayload,
} from "./payload-models";

import {
  loginUser2Payload,
  createBoard1Payload,
  createBoard3Payload,
  createBoard4Payload,
  createBoard5Payload,
  createBoard6Payload,
  createBoard7Payload,
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
export const createColumn = async (loginPayload: any, createColumnPayload: any, boardID: string) => {
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
      `${process.env.API_BASE_URL}/boards/${boardID}/columns`,
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
      `${process.env.API_BASE_URL}/boards/${boardID}/columns/${columnID}`
    );
    console.log(deleteColumnResponse.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const seedDB = async () => {
  // Create Board with ID 1
  await createBoard(loginUser2Payload, createBoard1Payload);
  await createBoard(loginUser2Payload, createBoard3Payload);
  await createBoard(loginUser2Payload, createBoard4Payload);
  await createBoard(loginUser2Payload, createBoard5Payload);
  await createBoard(loginUser2Payload, createBoard6Payload);
  await createBoard(loginUser2Payload, createBoard7Payload);
};

export const clearDB = async () => {
  await deleteBoard(loginUser2Payload, boards[0].Board_ID);
  await deleteBoard(loginUser2Payload, boards[2].Board_ID);
  await deleteBoard(loginUser2Payload, boards[3].Board_ID);
  await deleteBoard(loginUser2Payload, boards[4].Board_ID);
  await deleteBoard(loginUser2Payload, boards[5].Board_ID);
  await deleteBoard(loginUser2Payload, boards[6].Board_ID);
};

async function main() {
  await clearDB();
  //Seed database with test data
  await seedDB();
  //console.log(createBoard3Payload)
}

main();
