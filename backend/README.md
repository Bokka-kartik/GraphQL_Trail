# Backend README

This folder contains the GraphQL server for the project.

The goal of this backend is to show how GraphQL can be used to define a schema, expose queries and mutations, and return structured data without a separate REST endpoint structure.

---

## What this backend is doing

This backend is a learning example for:
- creating a GraphQL schema
- wiring up resolvers
- exposing a query to fetch employee data
- exposing a mutation to add new employee data
- serving the API locally on port 4000

The server is intentionally simple and stores data in memory so the logic stays easy to understand.

---

## Important files

### `Local_Storage/server.js`
This is the entry file for the Apollo server.

What it does:
- imports Apollo Server
- imports the GraphQL schema and resolvers
- starts the server with `startStandaloneServer`
- listens on port `4000`

This file is the one that makes the API live.

### `Local_Storage/Schema.js`
This file defines the GraphQL schema.

It contains:
- the `Employee` type
- the `Display` query
- the `AddEmployee` mutation

This is where the API contract is defined: what data looks like and what operations are allowed.

### `Local_Storage/Resolver.js`
This file contains the business logic for the schema.

It defines:
- how the `Display` query returns the list of employees
- how the `AddEmployee` mutation adds a new employee

Right now, the data is stored in a JavaScript array called `Data`, so this is an in-memory example rather than a database-backed application.

### `Local_Storage/package.json`
This file holds the backend dependencies and scripts.

Important dependency:
- `@apollo/server`
- `graphql`

Startup command:
```bash
npm start
```

---

## Current data model

The app currently works with an employee object like this:

```js
{
  id: "1",
  name: "kartik",
  rollno: 25,
  student: false
}
```

The schema currently supports:
- `Display`: returns all employees
- `AddEmployee`: accepts `id`, `name`, `rollno`, and `student`

---

## Example query

```graphql
query Display {
  Display {
    id
    name
    rollno
    student
  }
}
```

---

## Example mutation

```graphql
mutation AddEmployee($id: ID!, $name: String, $rollno: Int, $student: Boolean) {
  AddEmployee(id: $id, name: $name, rollno: $rollno, student: $student)
}
```

---

## How to run it

From this folder:

```bash
cd backend/Local_Storage
npm install
npm start
```

Then the server is available at:

```text
http://localhost:4000
```

---

## Why this is important

This backend is intentionally simple because the purpose is to understand GraphQL basics clearly.

It helps explain:
- how schema and resolver files are structured
- how queries and mutations work
- how the server responds to frontend requests
- why GraphQL is useful for structured client-server communication

---

## Next step

This backend can later evolve into:
- a real database-backed API
- CRUD operations for more entities
- validation and error checking
- authentication and authorization
