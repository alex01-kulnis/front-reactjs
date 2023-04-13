/* eslint-disable */
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

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

  const delUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/api/users/${id}`);
    } catch (error) {}
  };

  const updateUser = async (newData) => {
    try {
      const res = await axios.patch(
        `http://localhost:3001/api/users/${newData.id}`,
        newData
      );
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onRowEditComplete = (e) => {
    let _users = [...users];
    let { newData, index } = e;
    console.log(newData);
    updateUser(newData);
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
    delUser(id);
    setUsers(users.filter((item) => item.id !== id));
  };

  const actionBodyTemplate = (rowData) => {
    return <Button icon="pi pi-trash" onClick={() => deleteRow(rowData.id)} />;
  };

  return (
    <div className="card p-fluid">
      <DataTable
        value={users}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        // tableStyle={{ minWidth: '50rem' }}
        // scrollable
        // scrollHeight="500px"
        sortField="id"
        sortOrder={1}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
      >
        <Column
          field="id"
          header="id"
          editor={(options) => textEditor(options)}
          sortable
          // style={{ width: '20%' }}
        />
        <Column
          field="login"
          header="Логин"
          editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="email"
          header="Почта"
          editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        {/* <Column
          field="password"
          header="Пароль"
          editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        /> */}
        <Column
          field="middle_name"
          header="Фамилия"
          editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="first_name"
          header="Имя"
          editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="last_name"
          header="Отчество"
          editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="phone"
          header="Тел."
          editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="status"
          header="Статус"
          //   editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
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
