const axios = require('axios');
require('dotenv').config();
const path = require('path');
const users = require(
    path.join(__dirname, '../cypress/fixtures/e2e-testing-test-data/users.json')
);
const boards = require(
    path.join(__dirname, '../cypress/fixtures/e2e-testing-test-data/boards.json')
);
const columns = require(
    path.join(__dirname, '../cypress/fixtures/e2e-testing-test-data/columns.json')
);
import {
    loginUser2Payload,
    createBoardPayloads,
    createColumnPayloads,
    createCardPayloads
} from './payloads';

const defaultAxios = axios.create({
    timeout: 1000000
});

// Create board via API
export const createBoard = async (loginPayload: object, createBoardPayload: object) => {
    try {
        const loginResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/login`,
            loginPayload
        );
        const token = await loginResponse.data.token;
        const headersConfig = {
            headers: {
                Authorization: `token=${token}`
            }
        };

        const createBoardResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/boards`,
            createBoardPayload,
            headersConfig
        );
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Delete board via API
export const deleteBoard = async (loginPayload: object, boardID: string) => {
    try {
        const loginResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/login`,
            loginPayload
        );
        const token = loginResponse.data.token;
        const headersConfig = {
            headers: {
                Authorization: `token=${token}`
            }
        };

        const deleteBoardResponse = await defaultAxios.delete(
            `${process.env.API_BASE_URL}/boards/${boardID}`
        );
        console.log(deleteBoardResponse.data);
        console.log(boardID);
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Create Column via API
export const createColumn = async (loginPayload: any, createColumnPayload: any) => {
    try {
        const loginResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/login`,
            loginPayload
        );
        const token = loginResponse.data.token;
        const headersConfig = {
            headers: {
                Authorization: `token=${token}`
            }
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

export const deleteColumn = async (
    loginPayload: any,
    boardID: string,
    columnID: string
) => {
    try {
        const loginResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/login`,
            loginPayload
        );
        const token = loginResponse.data.token;
        const headersConfig = {
            headers: {
                Authorization: `token=${token}`
            }
            //timeout: 60 * 60 * 1000
        };

        const deleteColumnResponse = await defaultAxios.delete(
            `${process.env.API_BASE_URL}/boards/${boardID}/columns/${columnID}`,
            headersConfig
        );
        console.log(`${deleteColumnResponse.data}`);
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Create Card via API

export const createCard = async (loginPayload: any, createCardPayload: any) => {
    try {
        const loginResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/login`,
            loginPayload
        );
        const token = loginResponse.data.token;
        const headersConfig = {
            headers: {
                Authorization: `token=${token}`
            }
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

export const deleteCard = async (
    loginPayload: any,
    boardID: string,
    cardID: string
) => {
    try {
        const loginResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/login`,
            loginPayload
        );
        const token = loginResponse.data.token;
        const headersConfig = {
            headers: {
                Authorization: `token=${token}`
            }
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

// Get all boards via API
export const getBoards = async (loginPayload: object, userID: any) => {
    try {
        const loginResponse = await defaultAxios.post(
            `${process.env.API_BASE_URL}/login`,
            loginPayload
        );
        const token = await loginResponse.data.token;
        const headersConfig = {
            headers: {
                Authorization: `token=${token}`
            }
        };

        const getBoardsResponse = await defaultAxios.get(
            `${process.env.API_BASE_URL}/boards?userid=${userID}`,
            headersConfig
        );
        //console.log(getBoardsResponse.data);
        return getBoardsResponse.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const seedDB = async () => {
    createBoardPayloads.forEach((payload, index) => {
        setTimeout(() => {
            createBoard(loginUser2Payload, payload);
        }, index * 2000);
    });

    createColumnPayloads.forEach((payload, index) => {
        setTimeout(() => {
            createColumn(loginUser2Payload, payload);
        }, index * 2000);
    });

    createCardPayloads.forEach((payload, index) => {
        setTimeout(() => {
            createCard(loginUser2Payload, payload);
        }, index * 2000);
    });
};

export const clearDB = async () => {
    const boardsToDelete = await getBoards(loginUser2Payload, users[1].User_ID);
    return Promise.all(
        boardsToDelete.map(async (board: any) => {
            await deleteBoard(loginUser2Payload, board._id);
        })
    );
};

async function main() {
    await clearDB();

    seedDB();
}

main();
