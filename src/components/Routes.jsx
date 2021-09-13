import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Logs from '../pages/logs'
import UserManagement from '../pages/UserManagement'
import ContentManagement from '../pages/ContentManagement'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/UserManagement' component={UserManagement}/>
            <Route path='/Logs' component={Logs}/>
            <Route path='/ContentManagement' component={ContentManagement}/>
            
        </Switch>
    )
}

export default Routes
