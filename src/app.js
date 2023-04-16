import { observer } from "mobx-react-lite";
// import { useStore } from "mobx-react-lite";
// import { get } from "mobx";
import React, { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AdminApp from "./app/AdminApp";
import OrganizationApp from "./app/OrganizationApp";
import UserApp from "./app/UserApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useActions } from "./hooks/useActions";
// import AppRouter from './components/AppRouter';
// import NavBar from './components/NavBar';
import { Context } from "./index";

const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    if (window.localStorage.getItem("role") !== null) {
      user.setRole(window.localStorage.getItem("role"));
    } else {
      user.setRole("1");
    }
  });

  const getRoles = (props) => {
    const userRole = user.getRole();

    if (userRole !== props) {
      if (userRole === "3") {
        return <AdminApp />;
      }

      if (userRole === "2") {
        return <OrganizationApp />;
      }
    }
    return <UserApp />;

    // if (role === "3") {
    //   return <AdminApp />;
    // }

    // if (role === "2") {
    //   return <OrganizationApp />;
    // }

    // if (role === "1") {
    //   return <UserApp />;
    // }
  };

  return (
    <BrowserRouter>
      <ToastContainer
        style={{ width: "600px" }}
        position="top-center"
        newestOnTop
        closeOnClick
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover
      />
      {getRoles("1")}
    </BrowserRouter>
  );
});

export default App;
