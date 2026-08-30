# GraphQL Trail

This repository is my GraphQL learning project, built in a simple and structured way so the backend and frontend are clearly separated.

The goal is to learn GraphQL by building small real examples and then eventually add a user interface on top of them.

---

## Project Structure

```bash
GraphQL_Trail/
├── README.md
├── backend/
│   ├── README.md
│   ├── Schema.js
│   ├── Resolver.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── README.md
│   └── ...React app files
└── .git/
```

---

## Main Stack

- Node.js
- JavaScript
- GraphQL
- Apollo Server
- React (for frontend UI later)

---

## What is inside

### Backend
The backend folder contains the GraphQL server, schema, and resolvers. It is responsible for:

- defining the GraphQL API
- handling queries and mutations
- returning employee data
- running the Apollo server

### Frontend
The frontend folder is meant for the UI layer. It will contain the React app that connects to the backend and lets users:

- view employee data
- add employees
- interact with the GraphQL API through a nicer interface

---

## Navigation

- Backend documentation: [backend/README.md](backend/README.md)
- Frontend documentation: [frontend/README.md](frontend/README.md)

---

## Notes

This project is still in the learning stage. The backend is already set up, and the frontend will be added as a separate React application for UI testing and user interaction.
