import Form from "./components/form-component/form";
import Table from "./components/table-component/table";
import './App.css';
import { useState } from "react";

function App() {
  const [userForm,userFormHandler] = useState({
    name:'',
    lastName : '',
    contact : '',
    add : false,
  })    

  return (
    <>    
      <h1>Contact list</h1>      
      <div className="form-table-contaier">
        <Form userFormData = {userForm} userFormHandler={userFormHandler} />
        <Table userData={userForm} handler = {userFormHandler} />
      </div>
    </>
  );
}

export default App;
