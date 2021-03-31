import React from 'react'
import './form.css'
const Form = (props) => {
  function add(event) {
    event.preventDefault()
    const user = props.userFormData
    if (user.firstName || user.lastName || user.contact) {
      props.userFormHandler({ ...props.userFormData, add: true })
    } else {
      alert("form is empty")
    }
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
  const error = ''
  const contact = (event) => {
    console.log(parseInt(event.target.value));
    if (isNaN(parseInt(event.target.value))) {
      alert("enter only numeric value")
    } else {
      if (props.userFormData.contact.length > 10) {
        alert('contact number limit exceeded')
      }
      else {
        props.userFormHandler({
          ...props.userFormData,
          contact: event.target.value.trimStart()
        })
      }
    }
  }

  return (
    <>
      <div className="form-container">
        <h1>Enter Contact Detail</h1>
        <form onSubmit={add}>
          <label>First Name :</label>
          <input value={props.userFormData.firstName}
            onChange={e => props.userFormHandler({ ...props.userFormData, firstName: e.target.value.trimStart() })} />
          <label>Last Name :</label>
          <input value={props.userFormData.lastName}
            onChange={e => props.userFormHandler({ ...props.userFormData, lastName: e.target.value.trimStart() })} />
          <label>Contact : </label>
          <input value={props.userFormData.contact}
            onChange={contact} />
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