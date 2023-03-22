import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

function getRoles(props: string) {
  const role = props;

  if (role === 'admin') {
    return 'admin';
  }

  if (role === 'organization') {
    return 'organization';
  }

  if (role === 'user') {
    return 'user';
  }
}

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>{getRoles('user')}</BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
