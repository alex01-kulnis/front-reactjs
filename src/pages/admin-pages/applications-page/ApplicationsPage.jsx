/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";

import { InactiveUserItem } from "../../../components";

import "./applicationPage.scss";

const ApplicationsPage = observer(() => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/users/inactive");
      console.log(res);
      return res.data;
    } catch (error) {}
  };

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="application-box">
      {users.map((users) => (
        <InactiveUserItem users={users} key={users.id} />
      ))}
    </div>
  );
});

export default ApplicationsPage;
