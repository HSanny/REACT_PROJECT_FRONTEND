import React, { Suspense, Component, Fragment } from "react";
// Here is the routing profile
import { Route, Switch, Redirect, withRouter as realWithRouter } from "react-router-dom";
import routes from "./router/Index";

// Common style
import 'antd/dist/antd.css';
import './assets/style/public.less';

// redux
import { changeName, changeAge } from "./redux/action/TestAction";
import { asyncChangeName } from "./redux/asyncAction/AsyncTestAction";
import { connect as realConnect } from "react-redux";

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

// Get redux
const mapStateToProps = (state: any) => {
  return {
    state,
  };
};
const connect: any = realConnect;

// Get routing information
const withRouter: any = realWithRouter;
@withRouter
@connect(mapStateToProps, { changeName, changeAge, asyncChangeName })
class App extends Component {
  componentDidMount() {
    // Call the synchronous action and asynchronous action methods of the specified reducer in redux
    this.props.changeName('Zhang San');
    this.props.changeAge(25);
    this.props.asyncChangeName();
    // Gets the state of the specified reducer in the reducer
    console.log("object", this.props.state.TestReducer);
  }

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