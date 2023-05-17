/* eslint-disable */
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./mainSectionPage.scss";

import axios from "axios";

const SectionPage = () => {
  const [sections, setSections] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [filters, setFilters] = useState(null);

  const getSections = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/section");
      console.log(res);
      setSections(res.data);
    } catch (error) {}
  };

  const delSection = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/api/section/${id}`);
      console.log(res.data);
    } catch (error) {}
  };

  const updateSection = async (newData) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/api/section/${newData.id}`,
        newData
      );
    } catch (error) {}
  };

  useEffect(() => {
    getSections();
    initFilters();
  }, []);

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };

  const onRowEditComplete = (e) => {
    let _sections = [...sections];
    let { newData, index } = e;
    updateSection(newData);
    _sections[index] = newData;
    setSections(_sections);
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
        // keyfilter="int"
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const deleteRow = (id) => {
    delSection(id);
    setSections(sections.filter((item) => item.id !== id));
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
    <div className="block-sections">
      <div className="table-sections">
        <div className="card p-fluid">
          <DataTable
            value={sections}
            editMode="row"
            dataKey="id"
            showGridlines
            onRowEditComplete={onRowEditComplete}
            filters={filters}
            globalFilterFields={["name", "category", "years"]}
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
            />
            <Column
              field="category"
              header="Категория"
              editor={(options) => textEditor(options)}
              sortable
              filter
              filterField="category"
            />
            <Column
              field="years"
              header="Возраст"
              editor={(options) => textEditor(options)}
              sortable
              keyfilter="int"
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
            />
            <Column
              field="wednesday"
              header="Ср."
              editor={(options) => textEditor(options)}
              sortable
            />
            <Column
              field="thursday"
              header="Чт."
              editor={(options) => textEditor(options)}
              sortable
              // style={{ width: '20%' }}
            />
            <Column
              field="friday"
              header="Пт."
              editor={(options) => textEditor(options)}
              sortable
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
      </div>
    </div>
  );
};

export default SectionPage;
