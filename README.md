# Pharmacy

## Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the `package.json` files in the `client` and `server` folders.

### Frontend

1. [React](https://reactjs.org/docs/getting-started.html)
2. [Vite](https://vitejs.dev/)
3. [React Redux](https://redux.js.org/introduction/getting-started)

### Backend

1. [Node.js](https://nodejs.org/en/)
2. [dotenv](https://www.npmjs.com/package/dotenv)
3. [Knex](https://knexjs.org/)
4. [Express](https://expressjs.com/)

### Database

1. [PostgreSQL](https://www.postgresql.org/download/ 'PostgreSQL')

## Installation

1.  Get [Node.js](https://nodejs.org/en/ 'Node.js') (LTS) the version included into [.nvmrc file](./.nvmrc). **Note:** npm will be installed automatically. Check the correctness of the installation: to do this, run in the command line (terminal):

    ```
    node -v  // for checking Node.js version
    npm -v // for checking npm version
    ```

2.  Get the latest stable version [PostgreSQL](https://www.postgresql.org/download/ 'PostgreSQL') for your OS. Check the correctness of the work - try to create a database, a table - for this you can use [pgAdmin](https://www.pgadmin.org/ 'pgAdmin') or any other convenient way you find.

3.  Create in PostgreSQL **empty** database for the project. For example, _pharmacy_ .

4.  Clone project`s [repo](https://github.com/sergiy4/Pharmacy.git):

### Backend

1.  In the command line (terminal) go to the folder server:

    ```
    cd /* path to server folder */
    ```

2.  Install all the dependencies with command:

    ```
    npm install
    ```

3.  In the server folder create a file **.env** and copy the contents of the file **.env.example** into it.

4.  Run [migrations](https://knexjs.org/#Migrations) and seeds to populate the database with demo data. To do this, in the command line (terminal) in the server folder, run:

    ```
    npm run migrate:dev
    npm run seed:run
    ```

5.  To start the server in the command line (terminal) in the server folder, run:

    ```
    npm run dev
    ```

### Frontend

1.  In the command line (terminal) go to the `client` folder:

    ```
    cd /* path to client folder */
    ```

2.  Install all the dependencies with command:

    ```
    npm install
    ```

3.  In the `client` folder create a file **.env** and copy the contents of the file into it **.env.example**.

    Replace in file **.env** key values to real.

4.  To run the client from the command line (terminal) in the client folder, run:

    ```
    npm run start
    ```
