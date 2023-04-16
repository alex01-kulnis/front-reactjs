import { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { observer } from "mobx-react-lite";

import UserStore from "./store-mobx/UserStore";
// import AdminApp from "./app/AdminApp";
// import OrganizationApp from "./app/OrganizationApp";
// import UserApp from "./app/UserApp";
import store from "./redux/store/index";

import "react-toastify/dist/ReactToastify.css";
import "./scss/app.scss";
import App from "./app";
import React from "react";

export const Context = createContext(null);

// const App = () => {
//   // const { user } = useContext(Context);
//   // const { isAuth, role } = useTypedSelector((state) => state.userStore);
//   // useEffect(() => {
//   //   if (window.localStorage.getItem("token") !== null) {
//   //     user.setUser(user);
//   //     // user.setIsAuth(true);
//   //   }
//   // });
//   const getRoles = (props: string) => {
//     const role = props;

//     if (role === "admin") {
//       return <AdminApp />;
//     }

//     if (role === "organization") {
//       return <OrganizationApp />;
//     }

//     if (role === "user") {
//       return <UserApp />;
//     }
//   };
//   return (
//     <Context.Provider value={{ user: new UserStore() }}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </Context.Provider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ user: new UserStore() }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
