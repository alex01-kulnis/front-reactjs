/* eslint-disable */
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import axios from "axios";
import { getAuthHeaders } from "../../../service/api";

const SectionPage = () => {
  const [users, setUsers] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [filters, setFilters] = useState(null);
  // const [filters, setFilters] = useState({
  //   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  // });

  const getUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3001/api/users/section-by-org",
        getAuthHeaders()
      );
      setUsers(res.data.section);
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
    initFilters();
  }, []);

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };

  const onRowEditComplete = (e) => {
    let _users = [...users];
    let { newData, index } = e;

    updateUser(newData);
    _users[index] = newData;
    setUsers(_users);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
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

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card p-fluid">
      <DataTable
        value={users}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        // filterDisplay="row"
        filters={filters}
        globalFilterFields={["name", "category", "years"]}
        // tableStyle={{ minWidth: '50rem' }}
        // scrollable
        // scrollHeight="500px"
        header={header}
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
          style={{ width: "200px" }}
        />
        <Column
          field="name"
          header="Название"
          editor={(options) => textEditor(options)}
          sortable
          filter
          filterField="name"
          //   style={{ width: "200px" }}
        />
        <Column
          field="category"
          header="Категория"
          editor={(options) => textEditor(options)}
          sortable
          filter
          filterField="category"

          // style={{ width: '20%' }}
        />
        <Column
          field="years"
          header="Возраст"
          editor={(options) => textEditor(options)}
          sortable
          // style={{ width: '20%' }}
        />
        <Column
          field="monday"
          header="Пн."
          editor={(options) => textEditor(options)}
          sortable
          // style={{ width: '20%' }}
        />
        <Column
          field="tuesday"
          header="Вт."
          editor={(options) => textEditor(options)}
          sortable
          // style={{ width: '20%' }}
        />
        <Column
          field="wednesday"
          header="Ср."
          editor={(options) => textEditor(options)}
          sortable
          //   editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="thursday"
          header="Чт."
          editor={(options) => textEditor(options)}
          sortable
          //   editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="friday"
          header="Пт."
          editor={(options) => textEditor(options)}
          sortable
          //   editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="saturday"
          header="Сб."
          editor={(options) => textEditor(options)}
          sortable
          //   editor={(options) => textEditor(options)}
          // style={{ width: '20%' }}
        />
        <Column
          field="sunday"
          header="Вс"
          editor={(options) => textEditor(options)}
          sortable
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

export default SectionPage;
