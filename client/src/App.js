  
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "routes";


// ccustom styles
import "styles/main.scss";

// redux
import { Provider } from 'react-redux';
import store from "store/store";

export default () => (
  <Provider store={store}>
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
  </Provider>
);