import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import MyPost from "../src/components/MyPost";
import ViewPost from "../src/components/ViewPost";
import PostIndex from "../src/components/PostIndex";

const title = "My Minimal React Webpack Babel Setup";

//<SWitch> is used to solve loose matching of route urls
//<Switch> introduced in v4

ReactDOM.render(
  <BrowserRouter>
    <div>
      |HEADER|
      <Switch>
          <Route path="/MyPost" component={MyPost} />
          <Route path="/ViewPost" component={ViewPost} />
          <Route path="/" component={PostIndex} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);

module.hot.accept();
