import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Logout from './components/Logout';
import BaseLayout from './components/BaseLayout';
import Room from './components/Room'
import Home from './components/Home';
import UserInfo from './components/UserInfo';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const token = localStorage.getItem('jwt')
if(token) {
  store.dispatch({type: 'ON_LOGIN', payload: token})
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home/:username' element={<Home />} />
            <Route path='/edit-user/:userid' element={<UserInfo />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/room/:username' element={<Room />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
