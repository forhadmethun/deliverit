import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {alertActions} from './actions';
import PrivateRoute from './components/PrivateRoute';
import {ROOT_ROUTE, LOGIN_ROUTE} from "./util/constant/route.constant";
import {history} from './helpers';
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
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
                <Redirect from="*" to={ROOT_ROUTE}/>
            </Switch>
        </Router>

    );
}

export default App;
