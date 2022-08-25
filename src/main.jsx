import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.esm"
import { Provider } from 'react-redux';
import store from '../src/config/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
