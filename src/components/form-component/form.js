import React, { useEffect, useState } from 'react'
import './form.css'
const Form = (props) => {

  function add(event) {
    event.preventDefault()
    props.userFormHandler({...props.userFormData,add:true})
  }

  return (
    <>
      <div className="form-container">
        <h1>Form Component</h1>
        <form onSubmit={add}>
          <label>Name :</label>
          <input value={props.userFormData.name}
           onChange={e => props.userFormHandler({ ...props.userFormData, name: e.target.value })} />
          <label>Last Name :</label>
          <input value={props.userFormData.lastName} 
            onChange={e => props.userFormHandler({ ...props.userFormData, lastName: e.target.value })} />
          <label>Conntact : </label>
          <input value={props.userFormData.contact}
           onChange={e => props.userFormHandler({ ...props.userFormData, contact: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
export default Form