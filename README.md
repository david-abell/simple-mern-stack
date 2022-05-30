# A simple mern stack app connected to an Atlas Database

## Why I built it this way

- Test project to experiment with Express, React and MongoDb
- Wanted to spin up a functional, test supported, MERN stack. Rather than just copying a boilerplate such as the [express-rest-boilerplate by Daniel Sousa](https://github.com/danielfsousa/express-rest-boilerplate), my goal was to understand Server/client interactions and then use the project as a base for other MERN projects.

## Technology used

- Create React App
- Bootstrap react components
- Express.js server
- MongoDb Atlas
- Jest testing
- Eslint

## Lessons learned/ problems encountered

- The MongoDb test project was outdated and did not correctly load bootstrap or any formatting. Ended up adding React bootstrap components as the simplest fix.
- Rewrote and decoupled the express back end for ease of integration testing.
- Be careful with Create React App initializing its own Git repository...

## Installation

For front end, cd to client directory and

```bash
npm install
```

For back end, cd to client directory and

```bash
npm install
```

Set up an Atlas free tier database with the [Getting started with Atlas guide](https://docs.atlas.mongodb.com/getting-started/)

Rename `example.config.env` located in the `server` directory to `config.env`
replace the ATLAS_URI with the appropriate connection string.

## Available scripts

For back end, cd to client directory:

```bash
npm start
npm test
```

For front end, cd to client directory:

```bash
npm start
```

## Credits

The original MongoDb tutorial project: [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)
