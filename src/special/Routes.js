import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Citations = lazy(() => import('../pages/Citations'));
const NotFound = lazy(() => import('../pages/NotFound'));

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/citations" component={Citations}/>
            <Route component={NotFound}/>
        </Switch>
    )
};

export default Routes;