import React from 'react'
import './form.css'
const Form = (props) => {
  function add(event) {
    event.preventDefault()
    props.userFormHandler({ ...props.userFormData, add: true })
  }

  const update = () => {
    props.setEdit(false)
    props.userFormHandler({
      firstName: '',
      lastName: '',
      contact: '',
    })
  }

  const cancle = () => {
    props.setEdit(false)
    props.userFormHandler({
      firstName: '',
      lastName: '',
      contact: '',
    })
  }
  const contact = (event) => {
    if (isNaN(event.target.value)) {
      alert("enter only numeric value")
    } else {
      if (props.userFormData.contact.length > 10) {
        alert('contact number limit exceeded')
      }
      else {
        props.userFormHandler({
          ...props.userFormData,
          contact: event.target.value.trim()
        })
      }
    }
  }

  return (
    <>
      <div className="form-container">
        <h1>Registration Form</h1>
        <form onSubmit={add}>
          <label>First Name :</label>
          <input value={props.userFormData.firstName}
            onChange={e => props.userFormHandler({ ...props.userFormData, firstName: e.target.value.trim() })} required />
          <label>Last Name :</label>
          <input value={props.userFormData.lastName}
            onChange={e => props.userFormHandler({ ...props.userFormData, lastName: e.target.value.trim() })} required />
          <label>Contact : </label>
          <input value={props.userFormData.contact}
            onChange={contact} required />
          {!props.edit && <button type="submit">Submit</button>}
          {props.edit &&
            <div className="update-section">
              <button onClick={update}>Update</button>
              <button onClick={cancle}>Cancel</button>
            </div>
          }
        </form>
      </div>
    </>
  )
}
export default Form