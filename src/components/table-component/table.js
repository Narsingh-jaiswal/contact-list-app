import React, { useEffect, useState } from 'react'
import './table.css'
const Table = (props) => {
  const [table,tablehandler] = useState([])
  
  useEffect(() => {
    if(props.userData.add){
      tablehandler([...table,props.userData])
      props.handler({
        name:'',
        lastName:'',
        contact:'',
        add:false
      })
    }
  })

  function edit(e){
    const userIndex = e.target.value    
    props.handler({
      name:table[userIndex].name,
      lastName:table[userIndex].lastName,
      contact:table[userIndex].contact
    })
    table.splice(parseInt(e.target.value), 1)
    tablehandler([...table])
  }

  const deleteData = (e) =>{
    table.splice(parseInt(e.target.value), 1)
    tablehandler([...table])
  }

  const list = table.map((element,index)=>{
    return(
      <li key={index} className="list_container">
        <span className="li-content">
        <label>Name :</label><p>{element.name}</p>
        <label>Last Name :</label><p>{element.lastName}</p>
        <label>Contact :</label><p>{element.contact}</p>
        </span>
        <span className="li-content">
          <button value={index} onClick={edit}>Edit</button>
          <button value={index} onClick={deleteData}>Delete</button>
        </span>
      </li>
    )
  })
  return (
    <>
      <div className="table-container">
        <h1>Table Component</h1>      
        <ul>{list}</ul>  
      </div>
    </>
  )
}
export default Table