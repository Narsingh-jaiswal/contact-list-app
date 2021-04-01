import React, { useEffect, useState } from 'react'
import './table.css'
var userIndex;
const Table = (props) => {
  const [table, tablehandler] = useState([])

  useEffect(() => {
    const user = props.userData
    if (props.edit) {
      table[userIndex] = {
        firstName: user.firstName,
        lastName: user.lastName,
        contact: user.contact
      }
    }
    if (props.userData.add) {
      tablehandler([...table, props.userData])
      props.handler({
        firstName: '',
        lastName: '',
        contact: '',
      })
    }
  })

  function edit(e) {
    userIndex = e.target.value
    props.handler({
      firstName: table[userIndex].firstName,
      lastName: table[userIndex].lastName,
      contact: table[userIndex].contact,
      add: false,
    })
    props.setEdit(true)
  }

  const deleteData = (e) => {
    table.splice(parseInt(e.target.value), 1)
    tablehandler([...table])
  }

  const list = table.map((element, index) => {
    return (
      <tr key={index}>
        <td className="table-data"><p>{index + 1}</p></td>
        <td className="table-data"><p>{element.firstName}</p></td>
        <td className="table-data"><p>{element.lastName}</p></td>
        <td className="table-data"><p>{element.contact}</p></td>
        <td className="table-data">
          <button value={index} onClick={edit}>
            edit
            {/* <i className="material-icons">edit</i> */}
          </button>
        </td>
        <td className="table-data">
          <button value={index} onClick={deleteData}>
            delete
            {/* <i className="material-icons">delete</i> */}
          </button>
        </td>
      </tr>
    )
  })
  return (
    <>
      <div className="table-container">
        <h1>User list</h1>
        <table>
          <thead>
            <tr className="table-head">
              <th className="list-thead">#</th>
              <th className="list-thead">First Name</th>
              <th className="list-thead">Last Name</th>
              <th className="list-thead">Contact</th>
              <th className="list-thead">Edit</th>
              <th className="list-thead">Delete</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Table