import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

interface IRoutes {
    routes: Array<RouteProps>
}

const SmartRouter = (route: RouteProps) =>
    route.tag === 'Redirect' ? (
        <Redirect path={route.from} to={route.to} exact={route.exact} />
    ) : (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => {
                const C = route.component as React.ComponentType<RouteProps>
                return <C {...props} routes={route.routes} />
            }}
        />
    )

const Routes = (props: IRoutes): JSX.Element => (
    <Switch>
        {props.routes.map((route, i) => (
            <SmartRouter key={i} {...route} />
        ))}
    </Switch>
)

export default Routes
