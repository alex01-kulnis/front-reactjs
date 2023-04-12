/* eslint-disable */
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

import "styled-components";
import "./usersPage.scss";
import axios from "axios";

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [modalActive, setModalActive] = useState(false);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/users");
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const result = users.filter((users) => {
      return users.login.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilteredUsers(result);
  }, [search]);

  const handleEditFormChange = (value) => {
    console.log(value);
  };

  const colums = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Имя организации",
      selector: (row) => row.organization_name,
      sortable: true,
    },
    {
      name: "Имя",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Отчество",
      selector: (row) => row.middle_name,
      sortable: true,
    },
    {
      name: "Фамилия",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "Тел.",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Логин",
      selector: (row) => row.login,
      sortable: true,
    },
    {
      name: "Почта",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Пароль",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => (
        <>
          {/* <button className="button-edit" onClick={() => alert(row.id)}>
            Edit
          </button> */}
          <button onClick={() => handleDelete(row)}>Delete</button>
          <button onClick={() => setModalActive(true)}>ModalWin</button>
        </>
      ),
    },
  ];

  const handleDelete = (row) => {
    console.log(row);
    console.log(users.filter((item) => item.id !== row.id));
    setUsers(users.filter((item) => item.id !== row.id));
    setFilteredUsers(users.filter((item) => item.id !== row.id));
    // send delete request to server
  };

  // const data = [
  //   {
  //     id: 1,
  //     name: "aleвx",
  //     email: "email@alex",
  //     age: 21,
  //   },
  //   {
  //     id: 2,
  //     name: "vasy",
  //     email: "email@vasy",
  //     age: 22,
  //   },
  //   {
  //     id: 3,
  //     name: "pas",
  //     email: "email@pas",
  //     age: 23,
  //   },
  //   {
  //     id: 3,
  //     name: "pas",
  //     email: "email@pas",
  //     age: 23,
  //   },
  //   {
  //     id: 3,
  //     name: "pas",
  //     email: "email@pas",
  //     age: 23,
  //   },
  //   {
  //     id: 3,
  //     name: "pas",
  //     email: "email@pas",
  //     age: 23,
  //   },
  //   {
  //     id: 3,
  //     name: "pas",
  //     email: "email@pas",
  //     age: 23,
  //   },
  //   {
  //     id: 3,
  //     name: "pas",
  //     email: "email@pas",
  //     age: 23,
  //   },
  // ];

  return (
    <>
      <div className="table">
        <DataTable
          title="Users List"
          columns={colums}
          data={filteredUsers}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="450px"
          // selectableRows
          // selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
      </div>
    </>
  );
};

export default UsersPage;
