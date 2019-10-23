  
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Root from 'routes/root';
import { Provider } from 'mobx-react';
import rootStore from 'stores/';

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider {...rootStore()}>
    <Router history={hist}>
      <Root />
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);