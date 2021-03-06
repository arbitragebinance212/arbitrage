import React from "react";
import PublicRoute from "./PublicRoutes";
import { Routes as Switch, Route } from "react-router-dom";
import routes from "./Routes";

const getRouteType = ({ element, type }) => {
  const routeType = {
    public: <PublicRoute>{element}</PublicRoute>,
  };
  return routeType[type];
};

const AppSwitch = () => {
  return (
    <Switch>
      {routes.map(({ path, element, type }, idx) => {
        return (
          <Route
            path={path}
            key={idx}
            exact
            element={getRouteType({ element, type })}
          />
        );
      })}
    </Switch>
  );
};

export default AppSwitch;
