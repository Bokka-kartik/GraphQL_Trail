# GraphQL Trail

This project is a small learning app built to understand how GraphQL works in a real full-stack setup.

The idea is simple:
- the backend exposes a GraphQL API
- the frontend connects to that API using Apollo Client
- the app lets us fetch and create employee records
- each layer is kept separate so the learning flow is easy to follow

This is not a production app. It is a hands-on project for learning API design, schema thinking, and UI integration.

---

## What this project is trying to teach

We are learning the core GraphQL ideas:

- how a GraphQL schema defines data and operations
- how queries fetch data
- how mutations change data
- how a frontend talks to a GraphQL server
- how server and client responsibilities are separated

In other words, the project is showing the complete cycle:

1. define the schema
2. build resolvers
3. run a GraphQL server
4. fetch data from the frontend
5. submit data with a mutation
6. refresh the UI

---

## Project structure

```bash
GraphQL_Trail/
├── README.md
├── backend/
│   ├── README.md
│   └── Local_Storage/
│       ├── server.js
│       ├── Schema.js
│       ├── Resolver.js
│       ├── package.json
│       └── node_modules/
├── frontend/
│   ├── README.md
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── public/
└── .gitignore
```

---

## Architecture

```text
Frontend (React + Apollo Client)
        |
        | GraphQL requests
        v
Backend (Apollo Server + GraphQL schema)
        |
        | in-memory data operations
        v
Employee data stored in memory for learning purposes
```

This app currently uses an in-memory array instead of a database. That keeps the project simple while still demonstrating the complete GraphQL flow.

---

## Backend purpose

The backend is responsible for:
- creating the GraphQL API
- defining the Employee type
- exposing a `Display` query
- exposing an `AddEmployee` mutation
- starting the server on port 4000

This is the part that teaches us how GraphQL APIs are built.

---

## Frontend purpose

The frontend is responsible for:
- rendering the employee directory UI
- using Apollo Client to talk to the server
- sending GraphQL queries
- sending GraphQL mutations
- updating the page after a new employee is added

This is where we learn how React and GraphQL work together in a real UI.

---

## What the app does right now

The application currently does the following:

- fetches all employees from the backend
- shows them in a list
- lets the user enter employee details
- adds new employee data using a GraphQL mutation
- updates the list after successful insertion

The employee object currently includes:
- `id`
- `name`
- `rollno`
- `student`

---

## How to run it

### 1. Start the backend

```bash
cd backend/Local_Storage
npm install
npm start
```

This starts the Apollo server at:

```text
http://localhost:4000
```

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Then open the app in the browser at:

```text
http://localhost:5173
```

---

## Important files and why they matter

### Root files
- `README.md` - project overview and architecture explanation
- `.gitignore` - hides dependency folders and local generated files

### Backend files
- `backend/Local_Storage/server.js` - starts the Apollo server
- `backend/Local_Storage/Schema.js` - defines GraphQL types and operations
- `backend/Local_Storage/Resolver.js` - contains the query and mutation logic
- `backend/Local_Storage/package.json` - backend dependencies and startup script

### Frontend files
- `frontend/src/App.jsx` - main UI and GraphQL logic
- `frontend/src/main.jsx` - app entry point
- `frontend/src/App.css` - dashboard styling
- `frontend/src/index.css` - global page styles
- `frontend/index.html` - root HTML page for Vite
- `frontend/vite.config.js` - Vite configuration and React setup
- `frontend/package.json` - frontend dependencies and scripts

---

## Why this project is useful

This project gives a simple but real introduction to:
- API design
- GraphQL basics
- schema-driven development
- frontend-to-backend communication
- state updates after mutation

It is a good starting point before moving into bigger projects with databases, authentication, or production-ready APIs.

---

## Next learning steps

Possible improvements later:
- connect to a real database instead of an in-memory array
- add update and delete mutations
- build a better UI for employee management
- add validation and error handling
- split backend and frontend into cleaner production folders

---

## Related docs

- [backend/README.md](backend/README.md)
- [frontend/README.md](frontend/README.md)
