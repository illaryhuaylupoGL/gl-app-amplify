import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "./Home";
import ChangePassword from "./ChangePassword";

function Container({ location }) {
  return (
    <div>
      <section className="route-section">
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/change-password" component={ChangePassword} />
        </Switch>
      </section>
    </div>
  );
}

export default withRouter(Container);
