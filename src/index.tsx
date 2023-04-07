import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AdminApp from './app/AdminApp';
import OrganizationApp from './app/OrganizationApp';
import UserApp from './app/UserApp';
import store from './redux/store/index';

import 'react-toastify/dist/ReactToastify.css';
import './scss/app.scss';

function getRoles(props: string) {
  const role = props;

  if (role === 'admin') {
    return <AdminApp />;
  }

  if (role === 'organization') {
    return <OrganizationApp />;
  }

  if (role === 'user') {
    return <UserApp />;
  }
}

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ToastContainer
          position="top-center"
          newestOnTop
          closeOnClick
          autoClose={5000}
          hideProgressBar={false}
          pauseOnHover
        />
        <BrowserRouter>{getRoles('user')}</BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
