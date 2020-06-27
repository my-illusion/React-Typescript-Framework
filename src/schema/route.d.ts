/// <reference types="history" />

interface RouteProps {
    tag?: string
    path?: string
    component?: React.ReactNode
    to?: History.LocationDescriptor
    exact?: boolean
    from?: string
    name?: string
    routes?: Array<Route>
}

interface IRoutes {
    routes: Array<RouteProps>
}
