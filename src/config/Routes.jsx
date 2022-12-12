import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Login from '../pages/Login';
import NotFoundPage from '../components/notfound/NotFound';
import NotFound from '../components/notfound/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
            <Route
                path='/login'
                exact
                component={Login}
            />
            <Route path="" component={NotFound} />
        </Switch>
    );
}

export default Routes;
