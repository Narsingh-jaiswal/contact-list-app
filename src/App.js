import Form from "./components/form-component/form";
import Table from "./components/table-component/table";
import './App.css';
import { useState } from "react";

function App() {
  const [userForm, userFormHandler] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    add: false,
  })
  const [edit, setEdit] = useState(false)

  return (
    <>
      <div className="form-table-contaier">
        <Form
          userFormData={userForm}
          userFormHandler={userFormHandler}
          edit={edit}
          setEdit={setEdit} />
        <Table
          userData={userForm}
          handler={userFormHandler}
          edit={edit}
          setEdit={setEdit} />
      </div>
    </>
  );
}

export default App;
