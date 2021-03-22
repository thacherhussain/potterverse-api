# Potterverse API

A simple API using Node, Express, and PostgreSQL serving up information about the Wizarding World to help me remember how to build an API and have something simple to use when testing data fetching of small applications/projects.

Available endpoints:

- /characters
- /characters/:characterId
- /houses
- /houses/:houseId
- /schools
- /schools/:schoolId

## To Run Locally

- `git clone git@github.com:thacherhussain/potterverse-api.git`
- `cd potterverse-api`
- `npm install`
- [start PostgreSQL server](#remembering-how-to-use-postgresql)
- create a .env file that includes the following with your postgres database name, user, and password:

```
PORT=3000

DATABASE=mydatabase
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
```

- `npm start`
- go to [http://localhost:3000](http://localhost:3000)

---

## Learned

### Why use sequelize over knex

- ORM is short for Object Related Mapping, a technique that programmers use to convert data among incompatible types.
- In this application sequelize replaces (and augments) where I previously would have used knex
- [Node.js ORMs and why you shouldn’t use them](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5/) this article breaks down ORMs and Node.js layers of abstraction from database driver to Query Builder (knex) to ORM

### Remembering how to use PostgreSQL

- [How to setup PostgreSQL on MacOS](https://www.robinwieruch.de/postgres-sql-macos-setup)
- setup aliases in .zshrc to start and stop the postgreSQL server (since this is a hobby project and I don't want postgreSQL to kick off on start up)
  - `alias pgstart="pg_ctl -D /usr/local/var/postgres start"`
  - `alias pgstop="pg_ctl -D /usr/local/var/postgres stop"`
- [How to Set the Default User Password in PostgreSQL](https://chartio.com/resources/tutorials/how-to-set-the-default-user-password-in-postgresql)

## Decisions Made

- use Sequelize even though it might be over kill and isn't very portable because for this small example API it works and I'm not planning on growing it into a bigger project
- no front-end because I only plan on interacting with this as an API
- added prettier and eslint because it makes my life easier and also makes the code look the way I want it to look with the least amount of work from me

## Notes

Because I hadn't written anything besides front-end in years I used these tutorials from Robin Wieruch to remember what I was even supposed to remember. I made a few changes along the way, but mostly followed this path:

- Part 1: [The minimal Node.js with Babel Setup](https://www.robinwieruch.de/minimal-node-js-babel-setup/)
- Part 2: [How to setup Express.js in Node.js](https://www.robinwieruch.de/node-js-express-tutorial)
- Part 3: [How to create a REST API with Express.js in Node.js](https://www.robinwieruch.de/node-express-server-rest-api)
- Part 4: [Setup PostgreSQL with Sequelize in Express](https://www.robinwieruch.de/postgres-express-setup-tutorial/)
- Part 5: [Creating a REST API with Express.js and PostgreSQL](https://www.robinwieruch.de/postgresql-express-node-rest-api/)

## Next:

- Convert to use GraphQL or Fork project to create a GraphQL version
  - Convert this application to use GraphQL instead of REST: [GraphQL Server Tutorial with Apollo Server and Express](https://www.robinwieruch.de/graphql-tutorial)
