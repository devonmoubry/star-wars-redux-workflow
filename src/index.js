import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/App.css";
import registerServiceWorker from "./registerServiceWorker";
//import React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
//redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
//import Components
import Explorer from "./components/Explorer";
import People from "./containers/People";
import Starships from "./containers/Starships";
import Films from "./containers/Films";
import Details from "./containers/Details";
import BaseLayout from "./components/Layout";
import ComingSoon from "./components/Comingsoon";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Explorer} />
          <Route path="/starships" component={Starships} />
          <Route path="/films" component={Films} />
          <Route path="/people" component={People} />
          <Route path="/comingsoon" component={ComingSoon} />
          <Route path="/details/:endpoint/:id" component={Details} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
