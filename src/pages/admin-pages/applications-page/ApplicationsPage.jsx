/* eslint-disable */
import React, { useEffect, useState } from "react";

import "./applicationPage.scss";
import axios from "axios";
import { InactiveUserItem } from "../../../components";

const ApplicationsPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/users/inactive");
      console.log(res);
      setUsers(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="application-box">
      {users.map((users) => (
        <InactiveUserItem users={users} key={users.id} />
      ))}
    </div>
  );
};

export default ApplicationsPage;
