# A simple mern stack app connecting to an Atlas Database

## Why I built it this way

- test project to experiment with Express, React and MongoDb
- Wanted to spin up a functional, test supported, MERN stack. Rather than just copying a boilerplate such as the [express-rest-boilerplate by Daniel Sousa](https://github.com/danielfsousa/express-rest-boilerplate), my goal was to understand Server/client interactions and then use the project as a base for other MERN projects.

## Technology used

- Create React App
- Bootstrap react components
- Express.js server
- MongoDb Atlas
- Jest testing
- eslint

## Lessons learned/ problems encountered

- The MongoDb test project was outdated and did not correctly load bootstrap or any formatting. Ended up adding React bootstrap components as the simplest fix.
- rewrote and decoupled the express back end for ease of integration testing.

## Available scripts

for front end, cd to client directory and

```bash
npm start
```

for back end, cd to client directory and

```bash
npm start
npm test
```

## Credits

The original MongoDb tutorial project: [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)
