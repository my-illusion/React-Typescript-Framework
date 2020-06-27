import Login from './pages/login'
import LeftRightLayout from './layout/Left-Right-Layout.tsx'

const Home = () => 1

const routePrefix = ''

const routes: Array<RouteProps> = [
    {
        name: '登录页',
        tag: 'Route',
        path: `${routePrefix}/login`,
        component: Login,
    },
    {
        tag: 'Redirect',
        from: '/',
        to: `${routePrefix}/login`,
        exact: true,
    },
    {
        tag: 'Route',
        path: `${routePrefix}/`,
        component: LeftRightLayout,
        routes: [
            {
                tag: 'Redirect',
                from: `${routePrefix}/`,
                to: `${routePrefix}/home`,
                exact: true,
            },
            {
                name: '首页',
                tag: 'Route',
                path: `${routePrefix}/home`,
                component: Home,
                exact: true,
            },
        ],
    },
]

export default routes
