import React, { Suspense, Component, Fragment } from "react";
//https://blog.csdn.net/qq_37974755/article/details/123166334 
// : Switch -> Routes, Redirect -> Navigate, withRouter as realWithRouter -> useNavigate
// import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Route, Switch, Redirect, withRouter as realWithRouter } from "react-router-dom";
// Here is the routing profile
import routes from './router/Index'
import 'antd/dist/antd.css';

type StateType = {
  [propName: string]: any;
};
type PropType = {
  [propName: string]: any;
};
interface App {
  state: StateType;
  props: PropType;
}

// Get routing information
const withRouter: any = realWithRouter;
@withRouter
class App extends Component {
  render() {
    return (
      <Fragment>
        <Suspense fallback={<div></div>}>
          <Switch>
            {routes.length > 0 &&
              routes.map((route: any) => {
                //Traversal routing array
                const { path, component: C, exact } = route;
                return (
                  <Route
                    exact={exact}
                    key={path}
                    path={path}
                    render={(props: any) => {
                      return <C {...props} />;
                    }}
                  />
                );
              })}
            {/* Automatically match to when entering / by default/ */}
            <Redirect exact from="/" to={"/"} />
            {/* The default invalid path is automatically matched to the first page */}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}

export default App;