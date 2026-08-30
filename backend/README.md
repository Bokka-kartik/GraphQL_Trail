# Backend

This folder contains the GraphQL backend for the project.

## Purpose

The backend is responsible for:

- setting up Apollo Server
- defining GraphQL schema
- writing resolvers
- exposing queries and mutations
- serving data for the client app

## Current setup

The current project includes:

- `server.js` - starts the Apollo server
- `Schema.js` - defines the GraphQL schema
- `Resolver.js` - contains query and mutation logic

## Example current data model

The project currently uses a simple `Employee` type with fields like:

- id
- name
- rollno
- student

It also exposes:

- `Display` query
- `AddEmployee` mutation

## Run the backend

From this folder, install dependencies if needed and run:

```bash
node server.js
```

Then the server should run on:

```bash
http://localhost:4000
```

## Notes

This backend is intentionally simple and is meant for learning how GraphQL works before building a more advanced UI on top of it.
