import { useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { ApolloProvider, useMutation, useQuery } from '@apollo/client/react'
import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

const GET_EMPLOYEES = gql`
  query Display {
    Display {
      id
      name
      rollno
      student
    }
  }
`

const ADD_EMPLOYEE = gql`
  mutation AddEmployee(
    $id: ID!
    $name: String
    $rollno: Int
    $student: Boolean
  ) {
    AddEmployee(id: $id, name: $name, rollno: $rollno, student: $student)
  }
`

function EmployeeDashboard() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    rollno: '',
    student: false,
  })

  const [addEmployee, { loading: adding }] = useMutation(ADD_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }],
  })

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.id || !formData.name) {
      return
    }

    await addEmployee({
      variables: {
        id: formData.id,
        name: formData.name,
        rollno: formData.rollno ? Number(formData.rollno) : null,
        student: formData.student,
      },
    })

    setFormData({
      id: '',
      name: '',
      rollno: '',
      student: false,
    })
  }

  const employees = data?.Display ?? []

  return (
    <main className="dashboard-shell">
      <section className="panel intro-panel">
        <p className="eyebrow">GraphQL Learning Project</p>
        <h1>Employee Directory</h1>
        <p className="subtitle">
          This UI connects to the Apollo GraphQL backend and shows how a simple
          query and mutation work together in a real frontend flow.
        </p>
      </section>

      <section className="panel form-panel">
        <h2>Add employee</h2>

        <form onSubmit={handleSubmit} className="employee-form">
          <label>
            Employee ID
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="e.g. 101"
            />
          </label>

          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </label>

          <label>
            Roll number
            <input
              type="number"
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
              placeholder="25"
            />
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              name="student"
              checked={formData.student}
              onChange={handleChange}
            />
            Student
          </label>

          <button type="submit" disabled={adding}>
            {adding ? 'Adding...' : 'Add employee'}
          </button>
        </form>
      </section>

      <section className="panel list-panel">
        <div className="list-header">
          <h2>Current employees</h2>
          <span className="count">{employees.length}</span>
        </div>

        {loading && <p className="status">Loading employees...</p>}
        {error && <p className="status error">Error loading data: {error.message}</p>}

        {!loading && !error && employees.length === 0 && (
          <p className="status">No employees added yet.</p>
        )}

        <div className="employee-grid">
          {employees.map((employee) => (
            <article key={employee.id} className="employee-card">
              <div className="avatar">{employee.name?.charAt(0).toUpperCase() || 'E'}</div>
              <div>
                <h3>{employee.name}</h3>
                <p>ID: {employee.id}</p>
                <p>Roll no: {employee.rollno ?? 'N/A'}</p>
                <p>Status: {employee.student ? 'Student' : 'Not a student'}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <EmployeeDashboard />
    </ApolloProvider>
  )
}

export default App
