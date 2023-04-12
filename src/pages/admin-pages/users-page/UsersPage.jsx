/* eslint-disable */
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/users");
      setUsers(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onRowEditComplete = (e) => {
    let _users = [...users];
    let { newData, index } = e;

    console.log(newData);

    _users[index] = newData;

    setUsers(_users);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const deleteRow = (id) => {
    console.log(id);
    const newData = products.filter((item) => item.id !== id);
    setUsers(newData);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <button
        style={{ height: "50px" }}
        icon="pi pi-trash"
        onClick={() => deleteRow(rowData.id)}
      />
    );
  };

  return (
    <div className="card p-fluid">
      <DataTable
        value={users}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        tableStyle={{ minWidth: "50rem" }}
        scrollable
        scrollHeight="500px"
      >
        <Column
          field="id"
          header="Code"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        />
        <Column
          field="login"
          header="Code"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        />
        <Column
          field="email"
          header="Code"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        />
        <Column
          field="password"
          header="Code"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        />
        <Column
          rowEditor
          headerStyle={{ width: "10%", minWidth: "50px" }}
          bodyStyle={{ textAlign: "center" }}
        />
        <Column body={actionBodyTemplate} />
      </DataTable>
    </div>
  );
};

export default UsersPage;
