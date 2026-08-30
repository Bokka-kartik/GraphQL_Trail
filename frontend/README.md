# Frontend README

This folder contains the React frontend for the GraphQL project.

The goal of the frontend is to connect to the GraphQL backend and show the data in a simple employee dashboard. The app demonstrates how a user interface can query and mutate data through GraphQL instead of a traditional REST-style API.

---

## What this frontend is doing

The app currently does four main things:

1. fetches employee data from the backend
2. shows the employee list in the UI
3. lets the user submit a new employee form
4. refreshes the list after the mutation succeeds

This is a good practical example of GraphQL in a frontend workflow.

---

## Main files and what they do

### `src/main.jsx`
This is the app entry point.

It does:
- creates the React root
- mounts the app into `#root`
- imports the app component and global CSS

### `src/App.jsx`
This is the heart of the application.

It contains:
- Apollo Client setup
- GraphQL query definition for `Display`
- GraphQL mutation definition for `AddEmployee`
- form state for employee data
- logic to validate user input
- logic to send the mutation and refresh the list

This file is the most important part of the project because it connects the UI to the backend.

### `src/App.css`
This file handles the page styling.

It defines:
- the dashboard shell
- the forms
- the buttons
- the employee cards
- the success and error feedback styles

### `src/index.css`
This file provides the base global page styling.

It handles:
- root font setup
- page background
- spacing reset
- typography defaults

### `index.html`
This is the standard HTML file used by Vite.

It contains the root DOM element:
```html
<div id="root"></div>
```

### `vite.config.js`
This is the Vite configuration file.

It sets up the React app and build behavior.

### `package.json`
This file has the scripts and dependencies used by the frontend.

Important dependencies:
- `react`
- `react-dom`
- `@apollo/client`
- `graphql`

Important scripts:
```bash
npm run dev
npm run build
```

---

## GraphQL flow in the app

The frontend uses Apollo Client to do this:

### Query
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
This fetches all records from the backend.

### Mutation
```graphql
mutation AddEmployee($id: ID!, $name: String, $rollno: Int, $student: Boolean) {
  AddEmployee(id: $id, name: $name, rollno: $rollno, student: $student)
}
```
This creates a new employee record.

---

## How the UI works

The form contains:
- employee ID
- employee name
- roll number
- student checkbox

When the user clicks the button:
- the app validates the required fields
- it sends the mutation to the GraphQL backend
- the backend adds the employee in memory
- Apollo refetches the employee list
- the new item shows up on the page

---

## How to run it

From this folder:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

Make sure the backend is running first on port 4000.

---

## Why this matters

This frontend is a good example of how GraphQL can be integrated directly into a React app without a lot of boilerplate.

It teaches:
- how to connect a client to a GraphQL server
- how to send queries and mutations
- how to manage loading and error states
- how to update UI after data changes

---

## Next steps

Possible improvements for this frontend:
- add edit and delete actions
- add a more polished layout
- add filters and search
- add loading spinners and better toast messages
- connect to a real database later

