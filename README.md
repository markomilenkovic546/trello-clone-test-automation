## Introduction

The idea behind working on this project was to design an automation testing framework by leveraging Cypress, with the goal of providing end-to-end (e2e) test coverage for the 'Trello clone' full-stack app.

The framework follows the Page Object Model (POM) design. Additionally, the `commands.ts` file includes custom commands and utility functions, serving as an additional abstraction layer.

**Trello Clone**: [https://trello-clone-one.vercel.app/](https://trello-clone-one.vercel.app/)


## Test Data Preparation and Clearing

Test data is stored in the `cypress/fixtures` folder in JSON files, prepared to match specific test scenarios. The main goal is to clearly define the data for each test case, ensuring tests run independently without conflicts.

To avoid setting up test data as a pre-condition within each test flow, and to maintain test isolation, a practical logic for data clearing and seeding has been implemented. This process relies on the Trello REST API, utilazing the `Axios` package.

The payload models are in `db-seeding/payload-models.ts`, and the actual payloads are stored in `db-seeding/payloads.ts`. The script for data seeding and clearing, is located in `db-seeding/seed-and-clear-db.ts`, and it runs before running each test suite (spec file). Script will first clear and then seed database with test data. This approach allows individual test suite execution.


## Running Locally

To run the tests locally, follow these steps:

1. Clone the project locally.
2. Run `npm install` to install the necessary dependencies.
3. Create a `.env` file in the root directory (check `.env.example` in the project root to see what needs to be included).


## Running in Docker Container

To run the tests in Docker container, follow these steps:
1. Run `docker build -t your-docker-image-name .` in order to build docker image
2. Run `docker run -your-image-name npm run script-name` in order to run specific npm script in Docker container
   

## Available Scripts

- To run all test suites/spec files: 

   - To run all specs in 'Electron': `npm run e2e-tests`
   - To run all specs in 'Chrome': `npm run e2e-tests:chrome`
   - To run all specs in 'Mozilla Firefox': `npm run e2e-tests:firefox`
   - To run all specs in 'Edge': `npm run e2e-tests:edge`

`
- To run individual test suites/spec files:

 - To run in 'Electron'
   - `npm run smoke-tests`
   - `npm run registration`
   - `npm run auth`
   - `npm run side-navigation`
   - `npm run profile-management`
   - `npm run board-management`
   - `npm run column-management`
   - `npm run card-management`

 - To run in 'Google Chrome'
   - `npm run smoke-tests:chrome`
   - `npm run registration:chrome`
   - `npm run auth:chrome`
   - `npm run side-navigation:chrome`
   - `npm run profile-management:chrome`
   - `npm run board-management:chrome`
   - `npm run column-management:chrome`
   - `npm run card-management:chrome`

- To run in 'Mozilla Firefox'
   - `npm run smoke-tests:firefox`
   - `npm run registration:firefox`
   - `npm run auth:firefox`
   - `npm run side-navigation:firefox`
   - `npm run profile-management:firefox`
   - `npm run board-management:firefox`
   - `npm run column-management:firefox`
   - `npm run card-management:firefox`

- To run in 'Edge'
   - `npm run smoke-tests:edge`
   - `npm run registration:edge`
   - `npm run auth:edge`
   - `npm run side-navigation:edge`
   - `npm run profile-management:edge`
   - `npm run board-management:edge`
   - `npm run column-management:edge`
   - `npm run card-management:edge`

   ## Test Reports

     After running the tests, the `cypress-mochawesome-reporter` generates the `reports` folder with detailed HTML reports. These reports provide insights into test results, including passed, failed, and skipped tests, along with detailed logs and screenshots.



