# JS-Application-Exam-Task

This is a single-page application (SPA) built with JavaScript, lit-html, and page.js for client-side routing.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies

## Usage

This application includes the following pages:

- Home
- Login
- Register
- Dashboard
- Details
- Add
- Edit

1. Open a new terminal and run the following command to start the server:
`node server.js`
2. Open another terminal and run the following command to start the application:
`npm start`


## API

The application communicates with an API server at `http://localhost:3000/`. The `api.js` file in the `src` folder contains a `requester` function that is used to make HTTP requests to the API. This function supports authenticated requests if the user is logged in.

## Data Service

The `dataService.js` file in the `src` folder provides functions to interact with the API endpoints. It includes functions to get all characters, get a single character by ID, delete a character by ID, create a new character, and update a character by ID.

## User Helper

The `userHelper.js` file in the `src` folder provides functions to manage user data in the session storage. It includes functions to get and set user data, get the user ID, and remove user data.

## User Service

The `userService.js` file in the `src` folder provides functions to interact with the user-related API endpoints. It includes functions to register a new user, log in a user, and log out a user.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.
