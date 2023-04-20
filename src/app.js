import { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";

import AdminApp from "./app/AdminApp";
import OrganizationApp from "./app/OrganizationApp";
import UserApp from "./app/UserApp";

import "react-toastify/dist/ReactToastify.css";

import { Context } from "./index";

const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    if (window.localStorage.getItem("role") !== null) {
      user.setRole(window.localStorage.getItem("role"));
      user.setIsAuth(true);
    } else {
      user.setRole("1");
      user.setIsAuth(false);
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
  };

  return (
    <BrowserRouter>
      <ToastContainer
        style={{ width: "600px", height: "45px" }}
        position="top-right"
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
