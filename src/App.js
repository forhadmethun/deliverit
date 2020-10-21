import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {alertActions} from './actions';
import PrivateRoute from './components/PrivateRoute';
import {ROOT_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, DRIVER_ROUTE} from "./util/constant/route.constant";
import {history} from './helpers';
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
import Drivers from "./pages/Drivers";
import Dashboard from "./pages/Dashboard";
import {Router, Switch, Route, Link, Redirect} from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path={ROOT_ROUTE} component={Dashboard}/>
                <Route path={LOGIN_ROUTE} component={Auth}/>
                <Route path={ORDERS_ROUTE} component={Orders}/>
                <Route path={DRIVER_ROUTE} component={Drivers}/>
                <Redirect from="*" to={ROOT_ROUTE}/>
            </Switch>
        </Router>

    );
}

export default App;
